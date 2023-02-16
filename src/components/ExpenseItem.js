import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import { FaPlusCircle, FaMinusCircle } from 'react-icons/fa';

const ExpenseItem = (props) => {
    const { dispatch, Location} = useContext(AppContext);
    let [qty, changeQty] = useState(0);

    const handleAddItem = () => {
        const item = {
            name: props.name,
            quantity:qty,
        };

        dispatch({
            type: 'ADD_ITEM',
            payload: item,
        });
    };

    const handleReduceItem = () => {
        const item = {
            name: props.name,
            quantity:qty,
        };

        dispatch({
            type: 'REDUCE_ITEM',
            payload: item,
        });
    };


    return (
        <tr>
        <td>{props.name}</td>
        <td>{props.quantity}</td>
        <td>{Location}{parseInt(props.unitprice)}</td>
        <td>{Location}{parseInt(props.quantity)*parseInt(props.unitprice)}</td>
        <td><FaPlusCircle size='1.2em' color="green" onClick={handleAddItem}></FaPlusCircle></td>
        <td><input style={{width: "40px"}} onChange={(e)=>changeQty(qty=parseInt(e.target.value))}></input></td>
        <td><FaMinusCircle size='1.2em' color="red" onClick={handleReduceItem}></FaMinusCircle></td>
        </tr>
    );
};

export default ExpenseItem;