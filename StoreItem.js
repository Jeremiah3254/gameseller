import React, {useState} from 'react'


function StoreItem({AddItemToCart,RemoveItemFromCart,name,price,inventory,outOfStock,id,key}) {
    const style = {
        backgroundColor: outOfStock ? "red" : "green"
        
    }

    return (
       <li style={style}>{name+" $"+price+" "+inventory+"x"}<button onClick={() => {AddItemToCart(id)}}>Add</button><button onClick={() => {RemoveItemFromCart(id)}}>Remove</button></li>
    )
}

export default StoreItem