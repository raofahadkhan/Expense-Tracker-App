import React from 'react'

const AddTransaction = () => {
    return (
        <div>
            <h3>Add New Transaction</h3>
            <form>
                <div className="form-control">
                    <label htmlfor="description">Description</label>
                    <input type="text" id="description" placeholder="Detail of Transaction" />
                </div>
                <div className="form-control">
                    <label htmlFor="transactionamount">
                        Transaction Amount
                    </label>
                    <input type="number" id="transactionamount" placeholder="Enter transaction amount" />
                    <button className="btn">Add Transaction</button>
                </div>
            </form>
        </div>
    )
}

export default AddTransaction
