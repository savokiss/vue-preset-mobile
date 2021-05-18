<template>
  <div class="LoginView">
    login view
    {{ loggedUser.name }}
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters('auth', [
      'loggedUser'
    ]),
  },
  mounted () {
    // 注意需要加 auth 前缀
    this.$store.dispatch('auth/userLogin', {
      name: 'savo'
    })
  }
}
</script>