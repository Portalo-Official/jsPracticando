import './style.css'
import {App} from './todos/app.js';
import todo_store from './store/todo.store.js'

// console.log(todo_store);
todo_store.initStore();

App('#app');
 