
export default function Alert({type, message}){

    const bg = {
        success: 'bg-green-500',
        warning: 'bg-yellow-500',
        danger: 'bg-red-500 '
    }

    return (
        <div className={`w-full ${bg[type]} px-3 py-3 text-white rounded mb-3`}>{message}</div>
    );
}