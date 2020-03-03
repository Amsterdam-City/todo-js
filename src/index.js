import './styles.css';
import { Todo,TodoList } from './classes';  
import { crearTodoHtml } from './js/componentes';



export const todoList=new TodoList();

// console.log(todoList.todos);

todoList.todos.forEach(todo => crearTodoHtml(todo));
// todoList.todos.forEach(crearTodoHtml); //lo mismo que linea anterior

// console.log(todoList.todos);
console.log('todos',todoList.todos);

//const tarea = new Todo('Aprender JavaScript');
//todoList.nuevoTodo(tarea);
//tarea.completado=false;
//console.log(todoList);
//crearTodoHtml(tarea);






// localStorage.setItem('mi-key','123');
// sessionStorage.setItem('mi-key','123');
// setTimeout(()=>{
// localStorage.removeItem('my-key')
// },1500);