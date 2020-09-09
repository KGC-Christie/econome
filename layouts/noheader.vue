<template>
  <v-app>
    <v-main class="background">
      <v-container fluid>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data () { 
    return {}
  },
  mounted () {
    this.$vuetify.theme.dark = (localStorage.getItem("isDarkTheme")!==null)?localStorage.getItem("isDarkTheme")==='true':false;
  },
}
</script>
