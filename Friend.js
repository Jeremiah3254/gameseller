import React from 'react'

const Friend = ({AddFriend,id,key,name}) => {


    return (
    <ins>{name+" "}<button onClick={() => {AddFriend(id)}}>Add</button><br></br></ins>
    )
}

export default Friend
