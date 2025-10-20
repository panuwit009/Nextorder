"use client";

interface FoodItem {
  id: number;
  name: string;
  price: number;
  img: string;
}

interface FoodslistProps {
  foods: FoodItem[];
}

const foods: FoodItem[] = [
    { id: 1 , name: 'น้ำมันเครื่อง', price: 100,
        img: "https://www.ps-carservice.com/wp-content/uploads/2015/03/ry59bh.jpg"
    },
    { id: 2 , name: 'น้ำมันเครื่อง', price: 100,
        img: "https://s3-ap-southeast-1.amazonaws.com/prd-public-bucket/homepro/ART_IMAGE/11/517/1151740/447x447/10072021_1151740$Imagec1.jpg"
    },
    { id: 3 , name: 'คีม', price: 100,
        img: "https://apnhardware.co.th/wp-content/uploads/2023/03/%E0%B8%84%E0%B8%B5%E0%B8%A1.png"
    },
    { id: 4 , name: 'ล้อ', price: 100,
        img: "https://www.toyota.co.th/media/accessories/files/product/5f057819d1d67.jpg"
    },
    { id: 5 , name: 'แม็ก', price: 100,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0fdvfYLuHK4jMuecP_BuIltRNCJdfiPCcJQ&s"
    },
    { id: 6 , name: 'ไฟหน้ารถ', price: 100,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs5DBFtaGT8PoONz8_0-8rKp_lXr86aZC8hA&s"
    },
];

export default function Foodslist (
    // { foods }: FoodslistProps
) {
    return (
        <>
        {foods?.map((food) => (
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300" key={food.id}>
                <div className="aspect-[4/3] w-full flex items-center justify-center">
                    <img
                    src={food.img}
                    alt={food.name}
                    className="max-h-full max-w-full object-contain"
                    />
                </div>
                <div className="p-4">
                    <h2 className="text-lg md:text-xl font-semibold text-gray-800">{food.name}</h2>
                    <p className="text-sm md:text-base text-gray-600 mt-1">ราคา: {food.price} บาท</p>
                    <button className="hidden md:block mt-3 bg-blue-500 hover:bg-blue-600 text-white py-1 px-4 rounded-full text-sm">
                        เพิ่มลงตะกร้า
                    </button>
                </div>
            </div>
            ))}
        </>
    );
}