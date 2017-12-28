<template>
<v-app>
  <navbar></navbar>
  <v-content>
    <v-container fluid>
      <nuxt/>
    </v-container>
  </v-content>
  <v-footer app></v-footer>
</v-app>
</template>

<script>
  import Navbar from '@/components/NavBar.vue'
  export default {
    middleware: 'auth',
    components: {
      Navbar
    },
    data () {
      return {
        clipped: false,
        drawer: true,
        fixed: false,
        items: [
          { icon: 'apps', title: 'Welcome', to: '/' },
          { icon: 'bubble_chart', title: 'Inspire', to: '/inspire' }
        ],
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'Vuetify.js'
      }
    }
  }
</script>
