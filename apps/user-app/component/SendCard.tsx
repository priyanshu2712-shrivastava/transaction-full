"use client"
import { Button } from "@repo/ui/button";
import { Card } from "@repo/ui/card";
import { TextInput } from "@repo/ui/textInput";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { p2pTransfer } from "../app/lib/actions/p2pTransfer";

export function SendCard() {
    const [number, setNumber] = useState("");
    const [amount, setAmount] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState<{ text: string; isError: boolean } | null>(null);
    const router = useRouter();

    const handleTransfer = async () => {
        setLoading(true);
        setMessage(null);

        try {
            const result = await p2pTransfer(number, Number(amount) * 100);

            if (result.success) {
                setNumber("");
                setAmount("");
                setMessage({ text: result.message, isError: false });
                router.refresh();
            } else {
                setMessage({ text: result.message, isError: true });
            }
        } catch (error) {
            setMessage({ text: "An unexpected error occurred. Please try again.", isError: true });
        } finally {
            setLoading(false);
        }
    };

    return (
        <Card title="Send">
            <div className="min-w-72 pt-2">
                <TextInput
                    placeholder={"Number"}
                    label="Number"
                    value={number}
                    onChange={(value) => {
                        setNumber(value);
                        setMessage(null);
                    }}
                />
                <TextInput
                    placeholder={"Amount"}
                    label="Amount"
                    value={amount}
                    onChange={(value) => {
                        setAmount(value);
                        setMessage(null);
                    }}
                />

                {message && (
                    <div className={`mt-3 p-3 rounded-lg text-sm font-medium ${message.isError
                        ? 'bg-red-50 text-red-600 border border-red-200'
                        : 'bg-green-50 text-green-600 border border-green-200'
                        }`}>
                        {message.text}
                    </div>
                )}

                <div className="pt-4 flex justify-center">
                    <Button
                        onClick={handleTransfer}
                    >
                        {loading ? "Sending..." : "Send"}
                    </Button>
                </div>
            </div>
        </Card>
    );
}
