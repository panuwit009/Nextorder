export default function Search () {

    return (
        <div className="w-full max-w-md mx-auto px-4 py-6">
            <div className="flex items-center border border-gray-300 rounded-full px-4 py-2 bg-white shadow-sm">
            <input
                type="text"
                placeholder="ค้นหาสินค้า..."
                className="flex-grow focus:outline-none text-sm"
            />
            <button className="text-gray-500 hover:text-gray-700">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2"
                    viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
            </button>
            </div>
        </div>
    ); 
}