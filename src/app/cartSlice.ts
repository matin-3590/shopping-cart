import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Notyf } from 'notyf';


interface CartItem {
    id: number;
    title: string;
    price: number;
    description: string;
    image: string;
    quantity: number;
}


interface CartState {
    items: CartItem[];
}

// تابع برای ذخیره خودکار در localStorage
const saveToLocalStorage = (items: CartItem[]) => {
    localStorage.setItem('shoppingCart', JSON.stringify(items));
};


const initialState: CartState = {
    items: JSON.parse(localStorage.getItem('shoppingCart') || '[]'),
};


const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<CartItem>) => {
            const existingItem = state.items.find(item => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.items.push({ ...action.payload, quantity: 1 })
            }

            const notyf = new Notyf({
                duration: 3000,
                position: {
                    x: 'center',
                    y: 'top',
                },
                types: [
                    {
                        type: 'success',
                        background: 'oklch(0.596 0.145 163.225)',
                    },
                ]
            });

            notyf.open({
                type: 'success',
                message: 'Add To Cart Product'
            });

            saveToLocalStorage(state.items)
        },

        updateProduct: (state, action: PayloadAction<{ id: number; quantity: number; }>) => {
            const item = state.items.find(item => item.id === action.payload.id);
            if (item) {
                item.quantity = Math.max(1, action.payload.quantity)
            }

            saveToLocalStorage(state.items)
        },

        deleteProduct: (state, action: PayloadAction<{ id: number; }>) => {
            state.items = state.items.filter(item => item.id !== action.payload.id);

            const notyf = new Notyf({
                duration: 3000,
                position: {
                    x: 'center',
                    y: 'top',
                },
                types: [
                    {
                        type: 'success',
                        background: 'oklch(0.704 0.191 22.216)',
                    },
                ]
            });

            notyf.open({
                type: 'success',
                message: 'Product Removed from Cart'
            });

            saveToLocalStorage(state.items)
        },

        clearCart: (state) => {
            state.items = [];

            const notyf = new Notyf({
                duration: 3000,
                position: {
                    x: 'center',
                    y: 'top',
                },
                types: [
                    {
                        type: 'success',
                        background: 'oklch(0.704 0.191 22.216)',
                    },
                ]
            });

            notyf.open({
                type: 'success',
                message: 'Clear Cart'
            });

            saveToLocalStorage(state.items)
        }
    }
})


export const { addToCart, updateProduct, deleteProduct, clearCart } = cartSlice.actions;
export default cartSlice.reducer;