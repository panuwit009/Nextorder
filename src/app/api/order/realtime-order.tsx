// import { createClient } from '@/utils/supabase/server';

// export default async function Realtimeorders() {
//   const supabase = await createClient();
//   const channelOrders = supabase
//   .channel('orders-realtime')
//   .on('postgres_changes',
//   {
//     event: '*',
//     schema: 'public',
//     table: 'orders',
//   },
//   (payload) => (
//   console.log(payload))
// )
// .subscribe()

// }