import React, { useContext, useState, useEffect } from 'react';
import { Context } from '../store/appContext';
import Swal from 'sweetalert2'; //A beautiful, responsive, customizable, accessible (WAI-ARIA) replacement for JavaScript's popup boxes

const Todo = () => {
    const { store, actions } = useContext(Context);
    const [todo, setTodo] = useState('');

    //Verifica que el input no este vacio
    const empty = () => {
        Swal.fire('Oops...', 'Please type something', 'error')
    }

    return (
        <div className="input-group mb-3">
            <input type="text" className="form-control"
                onChange={e => setTodo(e.target.value)} placeholder="Todo's name" aria-label="Todo's name" aria-describedby="basic-addon2" />
            <div className="input-group-append">
                <button className="btn btn-outline-success" type="button"
                    onClick={todo != '' ? () => actions.addTodo(todo) : () => empty()}>Add todo</button>
            </div>
        </div>

    );

};

export default Todo;   