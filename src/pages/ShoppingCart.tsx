import { useEffect, useState } from "react";

import { itemCartDto } from "../types/item-cart/itemCart.types";
import { userDto } from "../types/user/user.types";

import CartItem from "../components/CartItem";

const ShoppingCart = () => {
    const [items, setItems] = useState<itemCartDto[]>();
    const [user, setUser] = useState<userDto>();
    const [loading, setLoading] = useState(false);

    // Загружаем корзину при маунте
    useEffect(() => {
        setLoading(true);
        fetch('/api/cart')
            .then(res => res.json())
            .then(data => {
                setItems(data.items)
                setUser(data.user)
                setLoading(false)
            })
    }, []); //* Исправил, не хватало []

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

    if (loading) return <div>Загрузка...</div>

    return (
        <div>
            <h2>Корзина пользователя {user?.name}</h2>
            <div>Товаров: {items?.length}</div>

            {items?.map(item => (
                <CartItem
                    key={item.id}
                    item={item}
                    onUpdateQuantity={(qty) => updateQuantity(item.id, qty)}
                    onRemove={() => removeItem(item.id)}
                />
            ))}

            <div>Итого: {total ? total.toFixed(2) : 0} ₽</div>
            <button onClick={() => console.log('Оформить заказ')}>
                Оформить заказ
            </button>
        </div>
    )
}

export default ShoppingCart;