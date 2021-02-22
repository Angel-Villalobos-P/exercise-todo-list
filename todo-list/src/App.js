import React, { useContext } from 'react';
import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import injectContext from './js/store/appContext';
import { Context } from './js/store/appContext';
import TodoInput from './js/components/TodoInput';


const App = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="wrapper vh-100">
      <div className="container vh-100">
        <h1 className="text-center">todos</h1>
        <TodoInput />
        <table className="table">
          <tbody>
            {store.todos.map((todo, index) => {
              return (
                <tr key={index}>
                  <td className="d-flex justify-content-between">
                    {todo}
                    <button type="button" className="btn btn-outline-danger" onClick={() => actions.deleteTodo(index)}>X</button>
                  </td>
                </tr>
              )
            })}
          </tbody>
          <caption>{store.todos.length} item left </caption>
        </table>
      </div>
    </div>
  );
}

export default injectContext(App);
