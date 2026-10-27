const PageHeader = ({ title, children, className = "" }) => {
    return (
        <header className={`flex items-center justify-between ${className}`.trim()}>
            <h1 className="text-2xl font-bold text-gray-900">
                {title}
            </h1>
            {children}
        </header>
    );
};

export default PageHeader;
