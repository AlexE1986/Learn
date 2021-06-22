
export default function storage(goods = [], action) {
   if (action.type === 'SORT_GOODS') {
      switch (action.by) {
         case 'name_up': return [...goods].sort((a, b) => a.name > b.name ? 1 : -1);
         case 'name_down': return [...goods].sort((a, b) => a.name > b.name ? -1 : 1);
         case 'price_up': return [...goods].sort((a, b) => a.price > b.price ? 1 : -1);
         case 'price_down': return [...goods].sort((a, b) => a.price > b.price ? -1 : 1);
         default: return goods;
      }
   };

   if (action.type === 'FETCH_STORAGE') return action.payload;
   return goods;
}