import React, {useState} from 'react'
import Friend from './Friend'
import FriendsAdded from './FriendsAdded'

const FriendList = () => {
    const [friends,setFriends] = useState([
        {
            id: 1,
            name: "Mohamed Abdrabou"
        }, 
        {
            id: 2,
            name: "wicked123 Yes"
        }
    ])

    const [cFriends,setCFriends] = useState([
        {
            id: 3,
            name: "Jeremiah Pfaff"
        }
    ])
    //map turns into html

    const AddFriend = (id) => {
        const specificFriend = friends.find(friend => friend.id === id)
        friends.splice(friends.indexOf(specificFriend),1)
        setFriends([...friends])
        setCFriends([...cFriends,specificFriend])
    }

    const RemoveFriend = (id) => {
        const specificFriend = cFriends.find(friend => friend.id === id)
        cFriends.splice(cFriends.indexOf(specificFriend),1)
        setCFriends([...cFriends])
        setFriends([...friends,specificFriend])    
    }

    return (
        <div>
            {friends.map(friend => <Friend AddFriend={AddFriend} id={friend.id} key={friend.id} name={friend.name}/>)}
            <br></br>
            Friends:
            {cFriends.map(friends => <FriendsAdded RemoveFriend={RemoveFriend} id={friends.id} key={friends.id} name={friends.name}/>)}
        </div>
    )
}

export default FriendList
