const StatCard = ({ value, label, colorClass = "text-blue-600" }) => {
    return (
        <div className="text-center">
            <div className={`text-2xl font-bold ${colorClass}`}>{value}</div>
            <div className="text-sm text-gray-600">{label}</div>
        </div>
    );
};

export default StatCard;
