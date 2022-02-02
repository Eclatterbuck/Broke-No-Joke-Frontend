// import { useState, useEffect } from 'react';
import React from 'react'
import Header from './Header'
import Balance from './Balance'
import IncomeExpenses from './IncomeExpenses'
import TransactionList from './TransactionList'
import AddTransactions from './AddTransactions'
// import './App.css';
// import './styles.scss';
// import './index.css'




import { GlobalProvider } from '../context/GlobalState'



export default function App() {
    return (
        <GlobalProvider>
            <Header />
            <div className="container">
                <Balance />
                <IncomeExpenses />
                <TransactionList />
                <AddTransactions />
            </div>
        </GlobalProvider>
    )
}

// export default App;