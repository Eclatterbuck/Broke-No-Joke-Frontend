import React, {useState, useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'

export default function AddTransactions() {
    const [text, setText] = useState('')
    const [amount, setAmount] = useState(0)

    const {addTransaction} = useContext(GlobalContext)

    const onSubmit = e => {
        e.preventDefault()

        const newTransaction = {
            id: Math.floor(Math.random() * 1000000),
            text: text,
            amount: parseInt(amount)
        }

        addTransaction(newTransaction)

        setText('')
        setAmount('')
    }

    return (
        <div>
            <h3>Add it up: transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input value={text} onChange={(e) => setText(e.target.value)} type="text" id="text" placeholder="Enter text..." />
                </div>
                <div className="form-control">
                    <label htmlFor="amount"
                        >Amount <br />
                        (negative - expense, positive - income)</label
                    >
                    <input value={amount} onChange={(e) => setAmount(e.target.value)} type="number" placeholder="Enter amount..." />
                </div>
                <button className="btn">Add transaction</button>
            </form>           
        </div>
    )
}