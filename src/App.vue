<script setup>
import { ref } from 'vue';
  let id = 0
  let todos = ref([]);
  let newTodo = ref('');
  function addTodo() {
  if (newTodo.value.trim() !== '') {
    todos.value.push({ id: id++, text: newTodo.value, done: false });
    newTodo.value = '';
  }
  }
  function removeTodo(todo) {
  todos.value = todos.value.filter( t => t.id !== todo.id)
  }
</script>

<template>
  <h1>Vue App</h1>
  
  <input type="text" placeholder="Add new todo!" class="new-todo" v-model="newTodo"/>
  <button @click="addTodo">Add Todo</button>
  <ul class="todo-list">
    <li class="todo-item" v-for="todo in todos" :key="todo.id">
      <input type="checkbox" class="todo-done" v-model="todo.done">
      <label :class="{ done: todo.done }">{{ todo.text }}</label>
      <button class="remove-btn" @click="removeTodo(todo)">X</button>
    </li>
  </ul>
</template>

<style scoped>
  .new-todo {
    padding: .5rem;  
  }
  .todo-item{
    list-style-type: none;
  }
  .done{
    text-decoration: line-through;
  }
</style>
