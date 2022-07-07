<template>
  <Navbar />
  <router-view />
  <Shortnote />
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Shortnote from '@/components/Shortnote.vue'

export default {
  components: {
    Navbar,
    Shortnote,
  },
}
</script>
