const foods = [
    { id: 1 , name: 'ข้าวผัดกุ้ง', price: 50},
    { id: 2 , name: 'ข้าวผัดกระเพราหมูสับไข่ดาว', price: 50},
    { id: 3 , name: 'ข้าวผัดไข่', price: 40},
    { id: 4 , name: 'ข้าวกระเพราหมูกรอบ', price: 50},
    { id: 5 , name: 'ข้าวไข่เจียว', price: 40},
    { id: 6 , name: 'หมี่เหลืองต้มยำ', price: 40},
];

export const foodslist = foods.map(food =>
    <div 
    className="bg-white 
    rounded-xl shadow-md
    overflow-hidden
    hover:shadow-lg
    transition duration-300"
    key = { food.id }
    >
        <img
        src="https://via.placeholder.com/300x200"
        alt="ชื่ออาหาร"
        className="w-full h-20 md:h-40 object-cover p-2"
        />
        <div className="p-4">
            <h2 className="text-lg md:text-xl font-semibold text-gray-800"> {food.name} </h2>
            <p className="text-sm md:text-base text-gray-600 mt-1">ราคา: {food.price} บาท</p>
            <button className="hidden md:block mt-3 bg-blue-500 hover:bg-blue-600 text-white py-1 px-4 rounded-full text-sm"></button>
        </div>
    </div>
    );
