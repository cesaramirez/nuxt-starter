<template>
    <v-app>
      <v-content>
      <v-container fill-height fluid>
        <nuxt/>
      </v-container>
      </v-content>
    </v-app>
</template>

<script>
export default {
  middleware: ['auth'],
  options: {
    auth: false
  },
  transition (to, from) {
    // Access component properties here
    console.log(to.matched[0].components.default.options)
    return 'fade'
  }
}
</script>

<style scoped>

</style>
