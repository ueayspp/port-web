<template>
  <div id="todolist">
    <header class="page-header"></header>
    <section class="wrapper">
      <form class="new-todo-form">
        <label class="new-todo-label">
          New Todo:
          <input v-model="newTodo" type="text" class="new-todo-input" />
        </label>
        <button type="submit" @click.prevent="addTodo" class="new-todo-button">Add</button>
      </form>
      <ul class="todo-list">
        <li v-for="todo in todos" :key="todo.content" ref="todo" class="todo-item">
          <label class="todo-item-label">
            <!-- checkbox -->
            <input v-model="todo.done" type="checkbox" class="todo-item__checkbox" />
            <!-- todo content -->
            {{ todo.content }}
          </label>
          <div>
            <button @click="editTodo(todo)" class="todo-button">
              <img src="@/assets/pencil.svg" alt="Edit todo" />
            </button>
            <button @click="deleteTodo(todo)" class="todo-button">
              <img src="@/assets/trash.svg" alt="Delete todo" />
            </button>
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import { db } from '@/main'
import { collection, addDoc, onSnapshot, doc, deleteDoc } from 'firebase/firestore'

export default {
  name: 'todolist',
  data() {
    return {
      newTodo: '',
      todos: [],
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
          console.log(doc.id, ' => ', doc.data())
          this.todos.push(doc.data())
        })
      })

      // const querySnapshot = await getDocs(colRef)
      // querySnapshot.forEach((doc) => {
      //   console.log(doc.id, ' => ', doc.data())
      //   // add each doc to 'todos' array
      //   this.todos.push(doc.data())
      // })
    },
    async updateTodo(todo) {
      // collection(db, 'todos')
      //   .doc(todo.id)
      //   .update({ ...todo })
      //   .then(function (docRef) {
      //     console.log('Updated document with ID: ', docRef.id)
      //   })
      //   .catch(function (error) {
      //     console.error('Error updating document: ', error)
      //   })
    },
    async deleteTodo() {
      // retrieve all the documents within the collection or subcollection and delete them
      await deleteDoc(doc(db, 'todos', this.$refs.todo))
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
