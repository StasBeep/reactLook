import { makeAutoObservable } from 'mobx';
import { createContext } from "react";

import { getCart } from '../api/controllers/cart-controller';
import { userDto } from '../types/user/user.types';
import { itemCartDto } from '../types/item-cart/itemCart.types';

class CartItem {
    name: string;
    price: number;
    quantity: number;

    constructor(name: string, price: number, quantity: number) {
        makeAutoObservable(this);
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
}

class Cart {
    user: userDto | null = null;
    cartItems: itemCartDto[] = [];
    loading = true;

    constructor() {
        makeAutoObservable(this);
    }

    async fetchCart() {
        await getCart()
            .then((response) => {
                this.loading = false;
                this.user = response.data.user;
                this.cartItems = response.data.items;
            })
            .catch((e) => {
                console.log(e);
                this.loading = true;
            })
    }
}

export const store = new Cart();
export const StoreCart = createContext(store);