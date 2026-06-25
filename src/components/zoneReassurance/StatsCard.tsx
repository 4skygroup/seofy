interface StatsCardProps {
    value: string;
    label: string;
}

export default function StatsCard({ value, label }: StatsCardProps) {
    return (
        <div className="flex flex-col items-center justify-center text-center">
            <span className="text-t2 sm:text-h6 font-bold text-blue-300">{value}</span>
            <span className="mt-2 text-t6 sm:text-t5 text-white/70">{label}</span>
        </div>
    );
}