<template>
  <Navbar />
  <div class="font-xl">This is diary page</div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Cookies from 'js-cookie'

Cookies.get()

export default {
  components: {
    Navbar,
  },
}
</script>
