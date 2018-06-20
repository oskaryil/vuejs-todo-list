<template>
  <div class="todo-list">
    <h1>To-Do List</h1>
    <h3>Add To-Do</h3>
    <form @submit.prevent="createTodo(todo)">
      <input id="todo-input" placeholder="I need to..." type="text" name="todo-input" v-model="todo" autocomplete="off">
    </form>
    <draggable v-model="todos" :options="{group:'people'}" @start="drag=true" @end="drag=false">
      <ul v-for="(todo, index) in todos" :key="index">
        <li>
          <form @submit.prevent="editTodo(todo, index)">
            <span v-if="!todo.edit">{{ todo.todo }}</span>
            <input class="todo-edit-input" v-if="todos[index].edit" :id="index" type="text" v-bind:value="todo.todo"><i class="fas fa-edit" v-on:click="todos[index].edit = !todos[index].edit"></i><i class="fas fa-minus" v-on:click="deleteTodo(index)"></i>
          </form>
        </li>
      </ul>
    </draggable>
  </div>
</template>

<script>

  import draggable from 'vuedraggable';

  import '../assets/font-awesome/css/fontawesome-all.min.css';

  export default {
    name: 'todo',
    computed: {
        todos: {
          get() {
            return this.$store.getters.todos;
          },
          set(values) {
            this.$store.state.todos = values;
          }
        }
    },
    data() {
      return {
        todo: "",
      }
    },
    methods: {
      createTodo(todo) {
        this.$store.state.todos.push({ todo, edit: false });
        this.todo = "";
      },
      deleteTodo(index) {
        this.$store.state.todos.splice(index, 1);
      },
      editTodo(newTodo, index) {
        console.log(newTodo, index);
        this.$store.state.todos[index] = newTodo;
        this.$store.state.todos[index].edit = false;
      }
    },
    components: {
      draggable
    }
  }
</script>


<style scoped lang="scss">

ul {
  padding: 0;
  margin: 0;
}

li {
  display: inline-block;
  background-color: rgb(170, 219, 255);
  width: 80%;
  padding: 1rem;
  margin: {
    top: 0.5rem;
  }
  text-align: center;
}
a {
  color: #42b983;
}

#todo-input {
  height: 5vh;
  background-color: #f4f4f4;
  outline: none;
  border: none;
  font-size: 1.2rem;
  padding: 1rem;
  width: 80%;
}

@media screen and (min-width: 900px) {
  #todo-input {
    width: 40%;
  }

  li {
    width: 40%
  }

}

i {
  float: right;
  cursor: pointer;
  margin: 6px
}

.todo-edit-input {
  display: hidden;
}
</style>
