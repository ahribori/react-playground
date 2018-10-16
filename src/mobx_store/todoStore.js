import { action, computed, observable } from 'mobx';

class TodoStore {
    @observable todoList = [];

    @computed get size() {
        return this.todoList.length;
    }

    @action addTodo = (todo) => {
        this.todoList.push(todo);
    }
}

export default new TodoStore();
