import React from 'react'

const Transaction = ({transaction}) => {
    console.log(Transaction)
    return (
        <li className="plus">
            {transaction.description}
            <span>{transaction.transactionAmount}</span>
            <button className="delete-btn">X</button>
        </li>
    )
}

export default Transaction
