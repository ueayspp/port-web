<template>
  <Navbar />
  <router-view />
  <Planner />
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Planner from '@/components/Planner.vue'

export default {
  components: {
    Navbar,
    Planner,
  },
}
</script>
