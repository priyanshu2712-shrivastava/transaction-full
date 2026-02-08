import { Card } from "@repo/ui/card";

export const BalanceCard = ({
    amount,
    locked,
}: {
    amount: number;
    locked: number;
}) => {
    return (
        <Card title={"Balance"}>
            <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                            <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <span className="text-sm text-slate-600">Available Balance</span>
                    </div>
                    <span className="text-lg font-semibold text-green-600">₹{(amount / 100).toLocaleString()}</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-amber-50 rounded-lg">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center">
                            <svg className="w-4 h-4 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                        </div>
                        <span className="text-sm text-slate-600">Locked Balance</span>
                    </div>
                    <span className="text-lg font-semibold text-amber-600">₹{(locked / 100).toLocaleString()}</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                            </svg>
                        </div>
                        <span className="text-sm text-white/90 font-medium">Total Balance</span>
                    </div>
                    <span className="text-xl font-bold text-white">₹{((locked + amount) / 100).toLocaleString()}</span>
                </div>
            </div>
        </Card>
    );
};
