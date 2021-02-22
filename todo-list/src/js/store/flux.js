

const getSate = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            todos: []
        },
        actions: {
            addTodo: (name) => {
                const _store = getStore();
                _store.todos.push(name);
                setStore({ todos: [..._store.todos] });
            },
            deleteTodo: (index) => {
                //Elimina el todo usando el index
                const _store = getStore();
                _store.todos.splice(index, 1);
                setStore({ todos: [..._store.todos] });
            }
        }
    };
};

export default getSate;