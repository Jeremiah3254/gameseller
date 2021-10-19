import React from 'react'

function CartItem({name,price,Quantity,id,key}) {
    
    return (
        <div>
           <li>{name+" ~ "+Quantity+"x "}</li> 
        </div>
    )
}

export default CartItem