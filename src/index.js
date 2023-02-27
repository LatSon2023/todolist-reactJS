import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

const wrapper = document.querySelector('#root')
const root = ReactDOM.createRoot(wrapper)

root.render(
    <App/>
)