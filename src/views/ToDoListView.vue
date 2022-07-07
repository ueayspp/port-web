<template>
  <Navbar />
  <router-view />
  <ToDoList />
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import ToDoList from '@/components/ToDoList.vue'

export default {
  components: {
    Navbar,
    ToDoList,
  },
}
</script>
