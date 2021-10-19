import React, { useState } from 'react'
import CartItem from './CartItem'
import StoreItem from './StoreItem'

function Store() {
    const [items,setItems] = useState([
        {
            id: 1,
            name: "Game 1",
            price: 0.89,
            inventory: 7,
            outOfStock: false
        },
        {
            id: 2,
            name: "Game 2",
            price: 3.95,
            inventory: 10,
            outOfStock: false
        },
        {
            id: 3,
            name: "Game 3",
            price: 3.95,
            inventory: 1,
            outOfStock: false
        },
        {
            id: 4,
            name: "Game 4",
            price: 5.95,
            inventory: 3,
            outOfStock: false
        }
    ])

    const [CurrentItems,setCurrentItems] = useState([
        {
            id: 1,
            name: "Game 1",
            price: 0.89,
            Quantity: 1
        }
    ])

    const [TotalValue,SetTotal] = useState([{
        TotalValue: 0
    }])
    /*const addToCart = (id) => {
        const item = items.find(item => item.id == id)
        alert(item.name)
    }*/

    const AddItemToCart = (id) => {
        
        if ((CurrentItems[id-1] != undefined) && (CurrentItems[id-1].id != items[id-1].id) && (items[id-1].inventory > 0)) {
            if (items[id-1].id < CurrentItems[id-1].id) {
            const newItem = {
                id: CurrentItems[id-1].id,
                name: CurrentItems[id-1].name,
                price: CurrentItems[id-1].price,
                Quantity: CurrentItems[id-1].Quantity
            }
            CurrentItems[id-1].id = items[id-1].id
            CurrentItems[id-1].name = items[id-1].name
            CurrentItems[id-1].price = items[id-1].price
            CurrentItems[id-1].Quantity = 1
            setCurrentItems([...CurrentItems,newItem])
            items[id-1].inventory = items[id-1].inventory-1;
        } else {
            const newItem = {
                id: items[id-1].id,
                name: items[id-1].name,
                price: items[id-1].price,
                Quantity: 1
            }
            items[id-1].inventory = items[id-1].inventory-1;
                if (items[id-1].inventory <= 0) {
                    items[id-1].outOfStock = true
                } else {
                    items[id-1].outOfStock = false 
                }
                setCurrentItems([...CurrentItems,newItem])
        }
            
        } else {
            for (let q =0; q<=CurrentItems.length; q++) {
                if ((CurrentItems[q] != undefined) && (items[id-1].name == CurrentItems[q].name) && (items[id-1].inventory > 0)) {
                    CurrentItems[q].Quantity = CurrentItems[q].Quantity+1;
                    items[id-1].inventory = items[id-1].inventory-1;
                    if (items[id-1].inventory <= 0) {
                        items[id-1].outOfStock = true
                    } else {
                        items[id-1].outOfStock = false 
                    }
                    setCurrentItems([...CurrentItems])
                    break
                }else if (q == CurrentItems.length) {
                    if (items[id-1].inventory <= 0) {
                    } else {
                        const newItem = {
                            id: items[id-1].id,
                            name: items[id-1].name,
                            price: items[id-1].price,
                            Quantity: 1
                        }
                        items[id-1].inventory = items[id-1].inventory-1;
                        if (items[id-1].inventory <= 0) {
                            items[id-1].outOfStock = true
                        } else {
                            items[id-1].outOfStock = false 
                        }
                        setCurrentItems([...CurrentItems,newItem])
                    }
                }
            }
        }
        TotalValue[0].TotalValue = 0
        for (let v = 0; v<CurrentItems.length; v++) {
            if ((CurrentItems[v] != undefined)) {
            TotalValue[0].TotalValue = TotalValue[0].TotalValue + (CurrentItems[v].price*CurrentItems[v].Quantity)
            }
        }
        SetTotal([...TotalValue])
    }

    const RemoveItemFromCart = (id) => {
        if (items[id-1].inventory >= 0 && !(items[id-1].inventory < 0)) {
            for (let i = 0; i <items.length; i++) {
                if ((CurrentItems[i] != undefined)) {
                    if ((CurrentItems[i].id == items[id-1].id) && (CurrentItems[i].Quantity >= 1)) {
                    CurrentItems[i].Quantity = CurrentItems[i].Quantity-1
                    items[id-1].inventory = items[id-1].inventory+1
                    if (CurrentItems[i].Quantity == 0) {
                        CurrentItems.splice(i,1)
                    }
                    if (items[id-1].inventory <= 0) {
                        items[id-1].outOfStock = true
                    } else {
                        items[id-1].outOfStock = false 
                    }
                    setCurrentItems([...CurrentItems])
                    break;
                    }
                }
            }
        }
        TotalValue[0].TotalValue = 0
        for (let i = 0; i<=CurrentItems.length; i++) {
            if ((CurrentItems[i] != undefined)) {
            TotalValue[0].TotalValue = TotalValue[0].TotalValue + (CurrentItems[i].price*CurrentItems[i].Quantity)
            }
        }
        SetTotal([...TotalValue])
    }

    return (
        <div>
            {items.map((item) => <StoreItem AddItemToCart={AddItemToCart} RemoveItemFromCart={RemoveItemFromCart} name={item.name} price={item.price} inventory={item.inventory} outOfStock={item.outOfStock} id={item.id} key={item.id}/>)}
            Current Cart
            {CurrentItems.map((item) => <CartItem name={item.name} price={item.price} Quantity={item.Quantity} id={item.id} key={item.id}/>)}
            <h4>Total ${TotalValue[0].TotalValue}</h4>
        </div>
    )
}

export default Store