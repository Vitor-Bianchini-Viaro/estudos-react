const variants = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded",
    danger: "text-red-600 hover:text-red-700 px-2 py-1 rounded",
    ghost: "bg-gray-100 hover:bg-gray-200 text-gray-900 px-4 py-2 rounded",
};

const Button = ({
    children,
    variant = "primary",
    type = "button",
    className = "",
    ...props
}) => {
    return (
        <button
            type={type}
            className={`${variants[variant]} ${className}`.trim()}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
