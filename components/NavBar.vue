<template>
  <v-toolbar app dark color="primary">
    <v-toolbar-title class="white--text">
      <router-link :to="{ name: 'index' }">
        <v-btn flat>
          Nuxt Starter
        </v-btn>
      </router-link>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <template v-if="user">
      <v-btn flat :to="{ name: 'home' }" nuxt>
        Home
      </v-btn>
      <v-btn flat>
        {{ user.name }}
      </v-btn>
    </template>
    <v-tooltip bottom>
      <v-btn icon @click.prevent="logout" slot="activator">
        <v-icon>exit_to_app</v-icon>
      </v-btn>
      <span>Logout</span>
    </v-tooltip>
  </v-toolbar>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: mapState({
    user: state => state.auth.user
  }),
  methods: {
    logout () {
      this.$store.dispatch('auth/logout')
        .then(() => {
          this.$router.replace({
            name: 'auth-login'
          })
        })
    }
  }
}
</script>

<style scoped>

</style>
