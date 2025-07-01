import { makeAutoObservable } from 'mobx';
import { createContext } from "react";

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
    cartItems = [];
    loading = true;

    constructor() {
        makeAutoObservable(this);
    }

    async fetchCart() {
        await getCart()
            .then((response) => {
                this.loading = false;
                this.todos = response.data;
            })
            .catch((e) => {
                console.log(e);
                this.loading = true;
            })
    }
}