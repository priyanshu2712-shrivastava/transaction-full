"use client";
import { usePathname, useRouter } from "next/navigation";

export const SidebarItem = ({
    href,
    title,
    icon,
}: {
    href: string;
    title: string;
    icon: React.ReactNode;
}) => {
    const pathname = usePathname();
    const router = useRouter();

    const isActive = pathname === href || pathname.startsWith(href + "/");

    return (
        <div
            onClick={() => router.push(href)}
            style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                padding: "14px 20px",
                margin: "0 12px 8px 12px",
                borderRadius: "12px",
                cursor: "pointer",
                transition: "all 0.2s ease",
                backgroundColor: isActive ? "#f3e8ff" : "transparent",
                borderLeft: isActive ? "4px solid #9333ea" : "4px solid transparent",
            }}
            className="group hover:bg-slate-50"
        >
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "32px",
                    height: "32px",
                    borderRadius: "8px",
                    backgroundColor: isActive ? "#9333ea" : "#f1f5f9",
                    color: isActive ? "#ffffff" : "#64748b",
                    transition: "all 0.2s ease",
                }}
            >
                {icon}
            </div>

            <span
                style={{
                    fontWeight: 600,
                    fontSize: "15px",
                    letterSpacing: "0.025em",
                    color: isActive ? "#7c3aed" : "#475569",
                    transition: "color 0.2s ease",
                }}
            >
                {title}
            </span>

            {isActive && (
                <div
                    style={{
                        position: "absolute",
                        right: "12px",
                        width: "8px",
                        height: "8px",
                        backgroundColor: "#9333ea",
                        borderRadius: "50%",
                    }}
                />
            )}
        </div>
    );
};
