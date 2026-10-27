const TextInput = ({ label, name, value, handleChange, ref = null, errors, type = "text" }) => {

    return (<div>
        <label className="block text-sm font-medium mb-1 text-gray-700">
            {label} <span className="text-red-500">*</span>
        </label>
        <input
            ref={ref}
            name={name}
            type={type}
            className={`w-full border rounded px-3 py-2 text-gray-900 ${errors ? "border-red-500" : "border-gray-300"
                }`}
            value={value}
            onChange={handleChange}
        />
        {errors && (
            <p className="text-sm text-red-600 mt-1">{errors}</p>
        )}
    </div>)
}
export default TextInput