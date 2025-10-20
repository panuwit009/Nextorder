export default async function Footer () {
    return (
        <>  
        <footer className="bg-white py-6">
            <div className="container mx-auto px-6">
            <div className="grid grid-cols-3 gap-8">
                <div>
                <h3 className="text-lg font-semibold mb-2">เกี่ยวกับเรา</h3>
                <p className="text-gray-600">เกี่ยวกับเราเกี่ยวกับเราเกี่ยวกับเราเกี่ยวกับเราเกี่ยวกับเราเกี่ยวกับเราเกี่ยวกับเราเกี่ยวกับเราเกี่ยวกับเราเกี่ยวกับเรา</p>
                </div>
                <div>
                <h3 className="text-lg font-semibold mb-2">ติดต่อเรา</h3>
                <p className="text-gray-600">โทร: 02-123-4567<br />อีเมล: info@myshop.com<br />ที่อยู่: 123 หมู่ 4 ตำบล น้ำสุด</p>
                </div>
                <div>
                <h3 className="text-lg font-semibold mb-2">เวลาทำการ</h3>
                <p className="text-gray-600">จันทร์-ศุกร์: 10:00 - 22:00<br />เสาร์-อาทิตย์: 11:00 - 23:00</p>
                </div>
            </div>
            <div className="border-t border-gray-300 mt-6 pt-6 text-center text-gray-500">
                © 2025 My Shop. สงวนลิขสิทธิ์.
            </div>
            </div>
        </footer>
        </>
    );
}