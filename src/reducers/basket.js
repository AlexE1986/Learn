export default function addToBasket(state = [], action) {
   if (action.type === 'ADD_TO_BASKET') {
      const goods = new Set();
      state.forEach((good) => goods.add(good.name));

      const newState = [...state];

      if (!goods.has(action.good.name)) {
         return [...state, action.good].sort((a, b) => a.name > b.name ? 1 : -1);
      } else {
         newState.forEach((item) => {
            if (item.name === action.good.name) { item.number += action.good.number }
         })
         return newState;
      }
   }

   if (action.type === 'DELETE_FROM_BASKET') {
      return [...state].filter((item => item.name !== action.name))
   }

   if (action.type === 'CLEAR_BASKET') return [];
   return state;
}