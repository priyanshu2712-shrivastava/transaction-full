"use server"
import { getServerSession } from "next-auth";
import { authOptions } from "../auth";
import prisma from "@repo/db/client";

export async function p2pTransfer(to: string, amount: number) {
    const session = await getServerSession(authOptions);
    const from = session?.user?.id;
    if (!from) {
        return {
            success: false,
            message: "You must be logged in to send money"
        }
    }

    if (!to || to.trim() === "") {
        return {
            success: false,
            message: "Please enter a recipient phone number"
        }
    }

    if (!amount || amount <= 0) {
        return {
            success: false,
            message: "Please enter a valid amount"
        }
    }

    const toUser = await prisma.user.findFirst({
        where: {
            number: to
        }
    });

    if (!toUser) {
        return {
            success: false,
            message: "User not found with this phone number"
        }
    }

    if (toUser.id === Number(from)) {
        return {
            success: false,
            message: "You cannot send money to yourself"
        }
    }

    try {
        await prisma.$transaction(async (tx) => {
            await tx.$queryRaw`SELECT * FROM "Balance" WHERE "userId" = ${Number(from)} FOR UPDATE`;
            const fromBalance = await tx.balance.findUnique({
                where: { userId: Number(from) },
            });
            if (!fromBalance || fromBalance.amount < amount) {
                throw new Error('Insufficient funds');
            }

            await tx.balance.update({
                where: { userId: Number(from) },
                data: { amount: { decrement: amount } },
            });

            await tx.balance.update({
                where: { userId: toUser.id },
                data: { amount: { increment: amount } },
            });

            await tx.p2pTransfer.create({
                data: {
                    amount,
                    fromUserId: Number(from),
                    toUserId: toUser.id,
                    timestamp: new Date(),
                }
            })
        });

        return {
            success: true,
            message: "Transfer successful!"
        }
    } catch (error: any) {
        return {
            success: false,
            message: error.message || "Transaction failed. Please try again."
        }
    }
}
