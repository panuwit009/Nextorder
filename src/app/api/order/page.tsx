import { createClient } from '@/utils/supabase/server';

export default async function Getorders() {
  const supabase = await createClient();
  const {data, error, status} = await supabase.from("orders").select();
  console.log(data);
  
}