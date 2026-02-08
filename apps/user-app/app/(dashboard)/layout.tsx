import { SidebarItem } from "../../component/SidebarItem";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex min-h-screen bg-orange-50">
            <aside className="w-72 bg-gradient-to-b from-orange-50 via-white to-orange-50 border-r border-orange-200/80 pt-28 relative">
                <div className="absolute top-20 left-1/2 -translate-x-1/2 w-40 h-40 bg-purple-400/10 rounded-full blur-3xl pointer-events-none" />

                <nav className="relative z-10">
                    <p className="px-6 mb-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                        Menu
                    </p>
                    <SidebarItem href="/dashboard" icon={<HomeIcon />} title="Home" />
                    <SidebarItem href="/transfer" icon={<TransferIcon />} title="Transfer" />
                    <SidebarItem href="/transactions" icon={<TransactionsIcon />} title="Transactions" />
                    <SidebarItem href="/p2p" icon={<P2PIcon />} title="P2P Transfer" />
                </nav>

                <div className="absolute bottom-8 left-4 right-4">
                    <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl p-4 text-white shadow-lg shadow-purple-500/20">
                        <p className="text-sm font-medium mb-1">Need Help?</p>
                        <p className="text-xs text-purple-200">Contact our support team</p>
                    </div>
                </div>
            </aside>

            <main className="flex-1 bg-orange-50 rounded-l-3xl p-8 shadow-xl shadow-orange-200/50 ml-[-1rem] relative z-10">
                {children}
            </main>
        </div>
    );
}

function HomeIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg>
    );
}

function TransferIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
        </svg>
    );
}

function TransactionsIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
    );
}

function P2PIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h10m0 0-3-3m3 3-3 3M17 17H7m0 0 3 3m-3-3 3-3" />
        </svg>
    );
}
