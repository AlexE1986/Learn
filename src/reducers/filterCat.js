export default function filterCat(state = '', action) {
   if (action.type === 'FILTER_CAT' && action.cat !== '') {
      return action.cat.toLowerCase()
   };
   if (action.type === 'FILTER_CAT' && action.cat === '') {
      console.log(action.cat)
      return action.cat
   };
   return state;
}