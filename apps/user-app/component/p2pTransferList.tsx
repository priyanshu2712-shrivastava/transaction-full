export const P2pTransferList = ({
    transfers,
    userId
}: {
    transfers: {
        time: Date,
        amount: number,
        fromUserId: number,
        toUserId: number,
        fromUserName: string | null,
        fromUserNumber: string,
        toUserName: string | null,
        toUserNumber: string
    }[],
    userId: number
}) => {
    if (!transfers.length) {
        return (
            <div className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden">
                <div className="px-6 py-4 border-b border-slate-100">
                    <h2 className="text-lg font-bold text-slate-800">Recent Transfers</h2>
                </div>
                <div className="flex flex-col items-center justify-center py-16 px-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-indigo-100 rounded-full flex items-center justify-center mb-4">
                        <svg className="w-10 h-10 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                        </svg>
                    </div>
                    <p className="text-base font-semibold text-slate-700">No transfers yet</p>
                    <p className="text-sm text-slate-400 mt-1 text-center">Your P2P transactions will appear here</p>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden">
            <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
                <h2 className="text-lg font-bold text-slate-800">Recent Transfers</h2>
                <span className="text-xs font-medium text-slate-400 bg-slate-100 px-2.5 py-1 rounded-full">
                    {transfers.length} transactions
                </span>
            </div>

            <div>
                {transfers.map((t, index) => {
                    const isSent = t.fromUserId === userId;
                    const otherUser = isSent
                        ? { name: t.toUserName, number: t.toUserNumber }
                        : { name: t.fromUserName, number: t.fromUserNumber };

                    const displayName = otherUser.name || "Unknown";
                    const displayNumber = otherUser.number;
                    const initial = displayName.charAt(0).toUpperCase();
                    const isLast = index === transfers.length - 1;

                    return (
                        <div key={`${t.time.getTime()}-${index}`}>
                            <div className="px-6 py-4 hover:bg-slate-50 transition-colors cursor-pointer">
                                <div className="flex items-center gap-4">
                                    <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0 ${isSent
                                        ? 'bg-gradient-to-br from-red-400 to-rose-500'
                                        : 'bg-gradient-to-br from-emerald-400 to-green-500'
                                        }`}>
                                        {initial}
                                    </div>

                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-1.5">
                                            <span className={`text-sm font-medium ${isSent ? 'text-red-500' : 'text-green-600'}`}>
                                                {isSent ? 'Paid to' : 'Received from'}
                                            </span>
                                        </div>
                                        <div className="font-semibold text-slate-800 truncate">
                                            {displayName}
                                        </div>
                                        <div className="text-xs text-slate-400 mt-0.5">
                                            +91 {displayNumber} • {t.time.toLocaleDateString('en-IN', {
                                                day: 'numeric',
                                                month: 'short',
                                                hour: '2-digit',
                                                minute: '2-digit'
                                            })}
                                        </div>
                                    </div>

                                    <div className="flex-shrink-0 min-w-[120px] text-right">
                                        <div className={`text-lg font-bold tabular-nums ${isSent ? 'text-red-500' : 'text-green-500'}`}>
                                            <span className="inline-block w-4">{isSent ? '−' : '+'}</span>₹{(t.amount / 100).toLocaleString('en-IN')}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {!isLast && (
                                <div className="mx-6">
                                    <div className="border-b border-slate-200"></div>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>

            {transfers.length >= 5 && (
                <div className="px-6 py-3 border-t border-slate-100 bg-slate-50">
                    <button className="w-full text-center text-sm font-medium text-purple-600 hover:text-purple-700 transition-colors">
                        View all transactions →
                    </button>
                </div>
            )}
        </div>
    );
};
