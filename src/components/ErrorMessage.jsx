function ErrorMessage({ message, onRetry }) {
    return (
        <div className="error-container">
            <h2>⚠️ Something Went Wrong!</h2>

            <p>{message}</p>

            {onRetry && (
                <button
                    className="retry-btn"
                    onClick={onRetry}
                >
                    Try Again
                </button>
            )}
        </div>
    );
}

export default ErrorMessage;