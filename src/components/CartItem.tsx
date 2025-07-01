import { itemCartDto } from "../types/item-cart/itemCart.types";

interface CartItemProps {
    item: itemCartDto,
    onUpdateQuantity: (value: number) => void,
    onRemove: () => void
}

const CartItem = ({ item, onUpdateQuantity, onRemove }: CartItemProps) => { //* Добавил пропс и callback-функции
    const changeQuantity = (quantity: number) => {
        if (quantity > 0) {
            onUpdateQuantity(quantity);
        } else if (quantity === 0) {
            onRemove();
        }
    }

    return (
        <div>
            <span>{item.name}</span>
            <input
                type="number"
                value={item.quantity}
                onChange={(e) => changeQuantity(parseInt(e.target.value))}
            />
            <span>{item.price} ₽</span>
            <button onClick={onRemove}>Удалить</button>
        </div>
    )
}

export default CartItem;