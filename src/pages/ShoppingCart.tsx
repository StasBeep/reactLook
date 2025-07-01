import { useContext, useEffect, useState } from "react";
import { observer } from "mobx-react";

import { StoreCart } from "../store/store";

import { itemCartDto } from "../types/item-cart/itemCart.types";
import { userDto } from "../types/user/user.types";

import CartItem from "../components/CartItem";


const ShoppingCart = observer(() => {
    const store = useContext(StoreCart)

    const [items, setItems] = useState<itemCartDto[]>();
    const [user, setUser] = useState<userDto>();
    const [loading, setLoading] = useState(false);

    // Загружаем корзину при маунте
    useEffect(() => {
        store.fetchCart()
    }, []); //! ругается на пустые [], @ts-ignore, но мне кажется не стоит так

    // Считаем общую сумму
    const total = items?.reduce((sum, item) => {
        return sum + (item.price * item.quantity)
    }, 0)

    // Обновляем количество товара
    const updateQuantity = (itemId: number, newQuantity: number) => { //* Обновил типы входных параметров
        setItems(items?.map(item => item.id === itemId ? { ...item, quantity: newQuantity } : item));
    }

    // Удаляем товар
    const removeItem = (itemId: number) => { //* Добавил тип входного значения
        setItems(items?.filter(item => item.id !== itemId))
    }

    return loading ?
        <div>Загрузка...</div>
        :
        <div>
            <h2>Корзина пользователя {user?.name}</h2>
            <div>Товаров: {items?.length}</div>

            {store.cartItems?.map(item => (
                <CartItem
                    key={item.id}
                    item={item}
                    onUpdateQuantity={(qty) => updateQuantity(item.id, qty)}
                    onRemove={() => removeItem(item.id)}
                />
            ))}

            <div>Итого: {total ? total.toFixed(2) : 0} ₽</div>
            <button
                onClick={() => {
                    console.log('Оформить заказ'); //! Интересная ситуация, в консоль ничего не выводится, а alert сработал!
                    alert('Оформить заказ');
                }}
            >
                Оформить заказ
            </button>
        </div>
})

export default ShoppingCart;