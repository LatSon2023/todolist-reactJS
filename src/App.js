import React, {useState} from 'react'

const allItems = [
    { id: 'beaming', value: '😁', isSmile: true},
    { id: 'grinning', value: '😀', isSmile: true},
    { id: 'squinting', value: '😄', isSmile: true},
    { id: 'winking', value: '😉', isSmile: true},
    { id: 'sad', value: '😥', isSmile: false},
]

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [items, setItems] = useState(allItems)

    const handleLogin = () => {
        setIsLoggedIn(true)
    }
    const handleLogout = () => {
        setIsLoggedIn(false)
    }
    const removeItem = (itemId) => {
        setItems(items.filter(item => item.id !== itemId))
    }

  return (
    <div>
        <h1>Smileys</h1>
        <div className='loginControl'>
            {isLoggedIn ? (
            <button onClick={handleLogout}>Logout</button>
            ) : (
            <button onClick={handleLogin}>Login</button>
            )}
        </div>
        <div>
            {isLoggedIn && (
                <ul>
                    {items.map(item => (
                        <li key={item.id} onClick={() => removeItem(item.id)}>
                            <label htmlFor={`${item.id}-input`}>{item.value} {item.id}</label>
                            <input id={`${item.id}-input`} type="text"  defaultValue={item.id}/>
                            <button>Remove</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    </div>
  )
}

export default App