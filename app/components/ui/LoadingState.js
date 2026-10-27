const LoadingState = ({ message = "Carregando..." }) => {
    return (
        <div className="bg-white shadow rounded-lg p-6">
            <p className="text-gray-600">{message}</p>
        </div>
    );
};

export default LoadingState;
