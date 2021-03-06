import React, {useContext, useEffect} from 'react'
import {GlobalContext} from '../context/GlobalState'
import Transactions from './Transactions'

export default function TransactionList() {
    const {transactions, getTransactions} = useContext(GlobalContext)

    useEffect(() => {
        getTransactions()
        //stop the warning below
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div>
            <h3>History</h3>
            <ul id="list" className="list">
                {transactions.map(
                    transaction => (<Transactions key={transaction.id} transaction = {transaction} />))
                }
            </ul>
        </div>
    )
}