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
  middleware: 'no-auth'
}
</script>

<style scoped>

</style>
