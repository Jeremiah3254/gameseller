import React from 'react'

function FriendsAdded({RemoveFriend,id,key,name}) {
    return (
        <div>
            <ins>{name+" "}<button onClick={() => {RemoveFriend(id)}}>Remove</button><br></br></ins>
        </div>
    )
}

export default FriendsAdded
