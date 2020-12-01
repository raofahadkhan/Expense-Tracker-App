import React, { useState } from 'react'


const AddTransaction = () => {
    const [description, setDescription] = useState();
    const [transactionAmount, settransactionAmount] = useState();
    return (
        <div>
            <h3>Add New Transaction</h3>
            <form>
                <div className="form-control">
                    <label htmlfor="description">Description</label>
                    <input type="text" 
                            id="description" 
                            placeholder="Detail of Transaction" 
                            value={description} 
                            onChange={(e) => setDescription(e.target.value) }
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="transactionamount">
                        Transaction Amount
                    </label>
                    <input type="number"
                            id="transactionamount" 
                            placeholder="Enter transaction amount" 
                            value={transactionAmount} 
                            onChange={(e) => settransactionAmount(e.target.value)}
                    />
                    <button className="btn">Add Transaction</button>
                </div>
            </form>
        </div>
    )
}

export default AddTransaction
