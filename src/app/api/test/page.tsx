import { createClient } from '@/utils/supabase/server';

export default async function Getorder() {
  const supabase = await createClient();
  const orders = await supabase.from("orders").select();

  return (<pre>{JSON.stringify(orders, null, 2)}</pre>);
  
}