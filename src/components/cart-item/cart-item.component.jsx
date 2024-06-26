import {CartItemContainer, ItemDetails, CartImage} from  './cart-item.styles.jsx'

const CartItem = ({ cartItem }) => {
  const {name, quantity, imageUrl, price } = cartItem
  return (
    <CartItemContainer>
      <CartImage src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <span className='name'>{name}</span>
        <span className='price'>
          {quantity} x ${price}
        </span>
      </ItemDetails>
     
    </CartItemContainer>
  )
}

export default CartItem