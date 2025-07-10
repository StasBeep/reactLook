import { makeAutoObservable } from 'mobx';
import { createContext } from "react";

import { getCart } from '../api/controllers/cart-controller';
import { userDto } from '../types/user/user.types';
import { itemCartDto } from '../types/item-cart/itemCart.types';

class CartItem {
    id: number;
    name: string;
    price: number;
    quantity: number;

    constructor(id: number, name: string, price: number, quantity: number) {
        makeAutoObservable(this);
        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
}

class Cart {
    user: userDto | null = null;
    cartItems: itemCartDto[] = [];
    loading = true;
    sumPriceCart = 0;

    constructor() {
        makeAutoObservable(this);
    }

    async fetchCart() {
        await getCart()
            .then((response) => {
                this.loading = false;
                this.user = response.data.user;
                this.cartItems = response.data.items;
                this.totalSum();
            })
            .catch((e) => {
                console.log(e);
                this.loading = true;
            })
    }

    totalSum() {
        this.sumPriceCart = this.cartItems.reduce((sum, item) => {
            return sum + (item.price * item.quantity)
        }, 0)
    }

    updateQuantity(itemId: number, newQuantity: number) {
        const indexElChange = this.cartItems.findIndex((item) => item.id === itemId);

        const element = new CartItem(
            this.cartItems[indexElChange].id,
            this.cartItems[indexElChange].name,
            this.cartItems[indexElChange].price,
            newQuantity
        );

        this.cartItems[indexElChange] = element;

        this.totalSum();
    }

    removeItemCart(idItem: number) {
        this.cartItems = this.cartItems.filter(item => item.id !== idItem);
        this.totalSum();
    }
}

export const store = new Cart();
export const StoreCart = createContext(store);