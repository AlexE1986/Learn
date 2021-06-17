export default function search(state = '', action) {
   if (action.type === 'SEARCH') return action.payload.toLowerCase();
   return state;
}