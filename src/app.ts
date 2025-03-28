import { TodoBoostrapTheme, TodoComponent } from "./components/todo";
// import { TodoBulmaTheme, TodoComponent } from "./components/todo";
// import { TodoFoundationTheme, TodoComponent } from "./components/todo";
// import { TodoMaterializeTheme, TodoComponent } from "./components/todo";
// import { TodoTailwindTheme, TodoComponent } from "./components/todo";

const appEl = document.getElementById('app');

const todoWrapper = document.createElement('div');
todoWrapper.setAttribute('id', 'my-list');

appEl?.appendChild(todoWrapper);

const todo = new TodoComponent({
    theme: TodoBoostrapTheme
    // theme: TodoBulmaTheme
    // theme: TodoFoundationTheme
    // theme: TodoMaterializeTheme
    // theme: TodoTailwindTheme

});

todo.mount(todoWrapper)
