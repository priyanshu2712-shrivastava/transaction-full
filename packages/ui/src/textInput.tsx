"use client"

export const TextInput = ({
    placeholder,
    onChange,
    label,
    value
}: {
    placeholder: string;
    onChange: (value: string) => void;
    label: string;
    value?: string;
}) => {
    return <div className="pt-4">
        <label className="block mb-2 text-sm font-semibold text-slate-700">{label}</label>
        <input
            onChange={(e) => onChange(e.target.value)}
            type="text"
            className="bg-slate-50 border border-slate-200 text-slate-800 text-sm rounded-xl focus:ring-2 focus:ring-purple-200 focus:border-purple-400 block w-full p-3 transition-all duration-200 placeholder:text-slate-400"
            placeholder={placeholder}
            value={value}
        />
    </div>
}
