<template>
  <Navbar />
  <router-view />
  <Diary />
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Diary from '@/components/Diary.vue'

export default {
  name: 'DiaryView',
  components: {
    Navbar,
    Diary,
  },
}
</script>
