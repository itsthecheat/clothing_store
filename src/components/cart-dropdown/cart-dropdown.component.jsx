import { useContext } from 'react'
import { useNavigate} from 'react-router-dom'


import { CartContext } from '../../contexts/cart.context'

import Button from '../button/button.component'
import CartItem from '../cart-item/cart-item.component'

import { CartDropdownContainer, EmptyMessage, CartItems } from './cart-dropdown.styles'

const CartDropdown = () => {
  const { cartItems, isCartOpen, setIsCartOpen } = useContext(CartContext)
  const navigate = useNavigate()
  const goToCheckoutHandler = () => {
    navigate('/checkout')
  }
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen)
  
  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
          ) : (
            <EmptyMessage>Your cart is empty</EmptyMessage>
        )}  
      </CartItems>   
        <Button onClick={() => {
          toggleIsCartOpen();
          goToCheckoutHandler();
        }}>Go to checkout</Button>
    </CartDropdownContainer>
  )
}

export default CartDropdown