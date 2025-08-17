import React from 'react'

function home() {

    const fruits = ["apple", "orange", "banana", "pineapple"];

    const listItems = fruits.map(fruit => <li>{fruit}</li>)

    return (
    <div>
        <ol>{listItems}</ol>
    </div>
    )
}

export default home

