interface CartItemProps {
    item: 
}

const CartItem = ({ item, onUpdateQuantity, onRemove }) => {
    return (
        <div>
            <span>{item.name}</span>
            <input
                type="number"
                value={item.quantity}
                onChange={(e) => onUpdateQuantity(parseInt(e.target.value))}
            />
            <span>{item.price} ₽</span>
            <button onClick={onRemove}>Удалить</button>
        </div>
    )
}

export default CartItem;