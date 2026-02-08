import prisma from "@repo/db/client";
import { SendCard } from "../../../component/SendCard";
import { BalanceCard } from "../../../component/BalanceCard";
import { P2pTransferList } from "../../../component/p2pTransferList";
import { getServerSession } from "next-auth";
import { authOptions } from "../../lib/auth";

async function getBalance() {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
        return { amount: 0, locked: 0 };
    }

    const balance = await prisma.balance.findFirst({
        where: {
            userId: Number(session.user.id),
        },
    });

    return {
        amount: balance?.amount || 0,
        locked: balance?.locked || 0,
    };
}

async function getP2pTransfers() {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
        return [];
    }

    const transfers = await prisma.p2pTransfer.findMany({
        where: {
            OR: [
                { fromUserId: Number(session.user.id) },
                { toUserId: Number(session.user.id) }
            ]
        },
        include: {
            fromUser: {
                select: { name: true, number: true }
            },
            toUser: {
                select: { name: true, number: true }
            }
        },
        orderBy: {
            timestamp: 'desc'
        },
        take: 10
    });

    return transfers.map((t) => ({
        time: t.timestamp,
        amount: t.amount,
        fromUserId: t.fromUserId,
        toUserId: t.toUserId,
        fromUserName: t.fromUser.name,
        fromUserNumber: t.fromUser.number,
        toUserName: t.toUser.name,
        toUserNumber: t.toUser.number,
    }));
}

export default async function P2pPage() {
    const balance = await getBalance();
    const transfers = await getP2pTransfers();
    const session = await getServerSession(authOptions);
    const userId = Number(session?.user?.id);

    return (
        <div className="w-full max-w-full overflow-x-hidden px-4">
            <div className="text-4xl text-[#6a51a6] pt-8 mb-8 font-bold">
                P2P Transfer
            </div>

            <div className="flex flex-col gap-6">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div className="h-full">
                        <SendCard />
                    </div>

                    <div className="h-full">
                        <BalanceCard amount={balance.amount} locked={balance.locked} />
                    </div>
                </div>

                <div className="w-full">
                    <P2pTransferList transfers={transfers} userId={userId} />
                </div>
            </div>
        </div>
    );
}
