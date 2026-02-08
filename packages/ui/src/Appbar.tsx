"use client";

import { Button } from "./button";

interface AppbarProps {
    user?: {
        name?: string | null;
    },
    onSignin: () => void,
    onSignout: () => void
}

export const Appbar = ({
    user,
    onSignin,
    onSignout
}: AppbarProps) => {
    return <div className="flex justify-between border-b px-4 bg-white shadow-sm">
        <div className="text-lg flex flex-col justify-center font-bold text-purple-600">
            PayTM
        </div>
        <div className="flex flex-col justify-center pt-2 pb-2">
            <Button onClick={user ? onSignout : onSignin}>{user ? "Logout" : "Login"}</Button>
        </div>
    </div>
}
