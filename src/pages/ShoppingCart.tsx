import { useContext, useEffect } from "react";
import { observer } from "mobx-react";

import { StoreCart } from "../store/store";

import CartItem from "../components/CartItem";


const ShoppingCart = observer(() => {
    const store = useContext(StoreCart);

    // Загружаем корзину при маунте
    useEffect(() => {
        store.fetchCart()
    }, [store]); //! ругается на пустые [], @ts-ignore, но мне кажется не стоит так

    return store.loading ?
        <div>Загрузка...</div>
        :
        <div>
            <h2>Корзина пользователя {store.user?.name}</h2>
            <div>Товаров: {store.cartItems.length}</div>

            {store.cartItems?.map(item => (
                <CartItem
                    key={item.id}
                    item={item}
                    onUpdateQuantity={(qty) => store.updateQuantity(item.id, qty)}
                    onRemove={() => store.removeItemCart(item.id)}
                />
            ))}

            <div>Итого: {store.sumPriceCart} ₽</div>
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