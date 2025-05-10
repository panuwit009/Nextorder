export default function Food () {

    return (
                <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300">
                    <img
                    src="https://via.placeholder.com/300x200"
                    alt="ชื่ออาหาร"
                    className="w-full h-20 md:h-40 object-cover p-2"
                    />
                    <div className="p-4">
                        <h2 className="text-lg md:text-xl font-semibold text-gray-800">ข้าวผัดกุ้ง</h2>
                        <p className="text-sm md:text-base text-gray-600 mt-1">ราคา: 80 บาท</p>
                        <button className="hidden md:block mt-3 bg-blue-500 hover:bg-blue-600 text-white py-1 px-4 rounded-full text-sm">
                        </button>
                    </div>
                </div>
    );
}