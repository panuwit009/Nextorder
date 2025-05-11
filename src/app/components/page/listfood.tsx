import { foodslist } from "./food";

export default function ListFood () {
    return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4 px-2 md:px-6 py-4">
        { foodslist } 
    </div>
    );
}