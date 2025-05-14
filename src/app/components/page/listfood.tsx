import Foodslist from "./food";
import { createClient } from '@/utils/supabase/server';

export default async function ListFood () {
    const supabase = await createClient();
    const { data: foods, error } = await supabase.from("food_lists").select();
    
    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4 px-2 md:px-6 py-4">
        <Foodslist foods = {foods}/> 
    </div>
    );
}