<template>
  <div id="todolist">
    <header class="page-header"></header>
    <section class="wrapper">
      <form class="new-todo-form">
        <label class="new-todo-label">
          New Todo:
          <input v-model="newTodo" type="text" class="new-todo-input" />
        </label>
        <button type="submit" class="new-todo-button" @click.prevent="addTodo">Add</button>
      </form>
      <ul class="todo-list">
        <li v-for="todo in todos" :key="todo.id" class="todo-item">
          <!-- check if currentlyEditing or not -->
          <!-- if !currentlyEditing => display checkbox, todoContent -->
          <label v-if="currentlyEditing !== todo.id" class="todo-item-label">
            <input v-model="todo.done" type="checkbox" class="todo-item__checkbox" />
            {{ todo.content }}
          </label>

          <!-- if !currentlyEditing => display editBtn, delBtn -->
          <div v-if="currentlyEditing !== todo.id">
            <button class="todo-button" @click.prevent="editTodo(todo)">
              <img src="@/assets/pencil.svg" alt="Edit todo" />
            </button>
            <button class="todo-button" @click.prevent="deleteTodo(todo.id)">
              <img src="@/assets/trash.svg" alt="Delete todo" />
            </button>
          </div>

          <!-- if currentlyEditing => display editForm, saveBtn -->
          <form v-else class="edit-todo-form">
            <label class="edit-todo-label">
              Edit:
              <input v-model.trim="editTodoText" type="text" class="edit-todo-input" />
            </label>
            <button type="submit" class="edit-todo-button" @click.prevent="updateTodo">Save</button>
          </form>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import { db } from '@/main'
import { collection, addDoc, onSnapshot, doc, deleteDoc, updateDoc } from 'firebase/firestore'

export default {
  name: 'todolist',
  data() {
    return {
      newTodo: '',
      todos: [],
      currentlyEditing: null,
      editTodoText: '',
    }
  },
  created() {
    this.getTodo()
  },
  methods: {
    async addTodo() {
      const colRef = collection(db, 'todos')

      const dataObj = {
        content: this.newTodo,
        done: false,
      }

      const docRef = await addDoc(colRef, dataObj)
      console.log('Document written with ID: ', docRef.id)

      this.newTodo = ''
    },
    async getTodo() {
      const colRef = collection(db, 'todos')

      onSnapshot(colRef, (snap) => {
        snap.forEach((doc) => {
          let todoData = doc.data()
          todoData.id = doc.id
          console.log(doc.id, ' => ', doc.data())
          this.todos.push(todoData)
        })
      })

      console.log(this.todos)

      // const querySnapshot = await getDocs(colRef)
      // querySnapshot.forEach((doc) => {
      //   console.log(doc.id, ' => ', doc.data())
      //   // add each doc to 'todos' array
      //   this.todos.push(doc.data())
      // })
    },
    async editTodo(todo) {
      this.currentlyEditing = todo.id
      this.editTodoText = todo.content
      console.log('Current doc ID: ', this.currentlyEditing)

      return this.currentlyEditing
    },
    async updateTodo() {
      await updateDoc(doc(db, 'todos', this.currentlyEditing), {
        content: this.editTodoText,
      })
    },
    async deleteTodo(todoID) {
      // retrieve all the documents and delete them
      const colRef = collection(db, 'todos')
      const todoRef = doc(colRef, todoID)
      await deleteDoc(todoRef)
    },
  },
}
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
}
#todolist {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
}
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
a {
  color: #42b983;
}
.page-header {
  padding: 5rem 0;
  width: 100%;
  background: #42b983;
}
.wrapper {
  max-width: 500px;
  margin: 0 auto;
  padding: 0 1rem;
}
.new-todo-form {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding: 1rem;
  border-radius: 3px;
  border: 1px solid #fafafa;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.15);
  margin-top: -3rem;
  background: white;
}
.new-todo-label {
  display: flex;
  flex-direction: column;
  width: 80%;
  justify-content: flex-start;
  text-align: left;
  font-weight: bold;
}
.new-todo-input {
  padding: 0.5rem;
  border-radius: 3px;
  border: 1px solid lightgrey;
  font-size: 1rem;
  margin-top: 0.5rem;
  font-weight: normal;
}
.new-todo-button {
  font-size: 1rem;
  padding: 0.5rem 0.7rem;
  border-radius: 3px;
  color: white;
  font-weight: bold;
  background: #42b983;
  flex: 1;
  margin-left: 1rem;
  border: 1px solid #42b983;
}

.edit-todo-form {
  width: 100%;
  justify-content: space-between;
  display: flex;
  padding: 1rem;
}
.edit-todo-label {
  flex: 1;
  text-align: left;
  display: flex;
  align-items: center;
}
.edit-todo-input {
  padding: 0.5rem;
  border-radius: 3px;
  border: 1px solid lightgrey;
  font-size: 1rem;
  font-weight: normal;
  flex: 1;
  margin-left: 1rem;
}
.edit-todo-button {
  font-size: 1rem;
  padding: 0.5rem 0.7rem;
  border-radius: 3px;
  color: #42b983;
  font-weight: bold;
  margin-left: 1rem;
  border: 1px solid #42b983;
}
.todo-item {
  display: flex;
  align-items: center;
  border-top: 1px solid lightgrey;
  border-left: 1px solid lightgrey;
  border-right: 1px solid lightgrey;
  &:first-of-type {
    border-radius: 3px 3px 0 0;
  }
  &:last-of-type {
    border-bottom: 1px solid lightgrey;
    border-radius: 0 0 3px 3px;
  }
}
.todo-item-label {
  cursor: pointer;
  padding: 1rem;
}
.todo-item__checkbox {
  margin-right: 1rem;
}
.todo-list {
  max-width: 100%;
  margin: 2rem auto;
}
.todo-button {
  background: transparent;
  border: 0;
  padding: 0.5rem;
  width: 40px;
  height: 40px;
  border-radius: 3px;
  cursor: pointer;
}
</style>
