const initialGoods = [
   {
      category: 'Fruits',
      name: 'Banana',
      price: 69.90,
   },
   {
      category: 'Fruits',
      name: 'Cherry',
      price: 199.90,
   },
   {
      category: 'Fruits',
      name: 'Green Apple',
      price: 99.90,
   },
   {
      category: 'Fruits',
      name: 'Lemon',
      price: 89.90,
   },
   {
      category: 'Fruits',
      name: 'Orange',
      price: 79.90,
   },
   {
      category: 'Fruits',
      name: 'Pear',
      price: 149.90,
   },
   {
      category: 'Fruits',
      name: 'Plum',
      price: 119.90,
   },
   {
      category: 'Fruits',
      name: 'Red Apple',
      price: 109.90,
   },
   {
      category: 'Fruits',
      name: 'Strawberry',
      price: 289.90,
   },
   {
      category: 'Vegetables',
      name: 'Chili',
      price: 349.90,
   },
   {
      category: 'Vegetables',
      name: 'Cucumber',
      price: 64.90,
   },
   {
      category: 'Vegetables',
      name: 'Pea',
      price: 39.90,
   },
   {
      category: 'Vegetables',
      name: 'Pepper',
      price: 179.90,
   },
   {
      category: 'Vegetables',
      name: 'Potato',
      price: 34.90,
   },
];

export const GetStorage = function () {
   return (dispatch) => { setTimeout(() => { dispatch({ type: 'FETCH_STORAGE', payload: initialGoods }) }, 2000) }
}