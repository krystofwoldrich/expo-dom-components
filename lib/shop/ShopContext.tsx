import React, { createContext, useContext, useReducer } from 'react';

type Item = { id: number; img: string; title: string; price: number };

const initialState: {
  cart: {
    items: Item[];
    quantities: Record<number, number>;
    total: number;
  };
} = {
  cart: {
    items: [
      {
        "id": 3,
        "title": "Plant Mood",
        "price": 155,
        "img": "https://storage.googleapis.com/application-monitoring/mood-planter.jpg",
      }
    ],
    quantities: {
      3: 2,
    },
    total: 310,
  },
};

const taskReducer = (state: typeof initialState, action: {
  type: 'ADD_ITEM_TO_CART';
  payload: Item;
} | {
  type: 'REMOVE_ITEM_FROM_CART';
  payload: Item;
} | {
  type: 'CLEAR_CART';
  payload?: undefined;
}) => {
  const itemIndex = state.cart.items.findIndex((item) => item.id === action.payload?.id);

  switch (action.type) {
    case 'ADD_ITEM_TO_CART':
      return {
        ...state,
        cart: {
          ...state.cart,
          items: itemIndex === -1 ? [...state.cart.items, action.payload] : state.cart.items,
          quantities: itemIndex === -1 ? {
            ...state.cart.quantities,
            [action.payload.id]: 1,
          } : {
            ...state.cart.quantities,
            [action.payload.id]: (state.cart.quantities[action.payload.id] || 0) + 1,
          },
          total: state.cart.total + action.payload.price,
        },
      };
    case 'REMOVE_ITEM_FROM_CART':
      if (itemIndex === -1) {
        return state;
      }
      const newQuantities = {
        ...state.cart.quantities,
        [action.payload.id]: Math.max((state.cart.quantities[action.payload.id] || 0) - 1, 0),
      };
      return {
        ...state,
        cart: {
          ...state.cart,
          items: newQuantities[action.payload.id] === 0 ? state.cart.items.filter((item) => item.id !== action.payload.id) : state.cart.items,
          quantities: newQuantities,
          total: state.cart.total - action.payload.price,
        },
      };
    case 'CLEAR_CART':
      return {
        ...state,
        cart: {
          ...state.cart,
          items: [],
          quantities: {},
          total: 0,
        },
      };
    default:
      return state;
  }
};

const ShopContext = createContext({ state: initialState, dispatch: (_:Parameters<typeof taskReducer>[1]) => {} });

export const ShopProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(taskReducer, initialState);

  return (
    <ShopContext.Provider value={{ state, dispatch }}>
      {children}
    </ShopContext.Provider>
  );
};

export const useShopContext = () => useContext(ShopContext);