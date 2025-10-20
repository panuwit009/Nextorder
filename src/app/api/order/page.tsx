// import { createClient } from '@/utils/supabase/server';

// export default async function Getorders() {
//   const supabase = await createClient();
//   // const {data, error, status} = await supabase.from("orders").select();
//   const data = await supabase.from("orders").select();
//   // console.log(data); 
// }

// // ดึงข้อมูลทั้งหมดในตาราง orders

// src/app/api/order/page.tsx
import { createClient } from '@/utils/supabase/server';

export const dynamic = "force-dynamic";

export default async function GetOrders() {
  const supabase = await createClient();
  const { data } = await supabase.from("orders").select("*");
  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json" },
  });
}
