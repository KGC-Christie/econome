<template>
  <v-app>
    <v-main class="background">
      <template>
        <v-app-bar color="background" fixed elevate-on-scroll>
          <v-app-bar-nav-icon @click="drawer = true" color="primary"></v-app-bar-nav-icon>
          <v-toolbar-title class="primary--text text-capitalize"></v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon>
            <v-icon color="primary">mdi-magnify</v-icon>
          </v-btn>
        </v-app-bar>

        <v-navigation-drawer v-model="drawer" fixed color="background" height="100vh">

          <v-list nav dense>
            <template v-for="(nav,navi) in navItemsTop">
              <v-list-item :key="navi" @click="navToLink(nav.link)">
                <v-list-item-icon><v-icon :color="($route.name===nav.link)?'primary':'accent'">{{nav.icon}}</v-icon></v-list-item-icon>
                <v-list-item-title :class="`${($route.name===nav.link)?'primary':'accent'}--text`">{{nav.name}}</v-list-item-title>
              </v-list-item>
            </template>
          </v-list>

          <template v-slot:append>
            <v-list nav dense>
              <template v-for="(nav,navi) in navItemsBottom">
                <v-list-item :key="navi" @click="navToLink(nav.link)">
                  <v-list-item-icon><v-icon :color="($route.name===nav.link)?'primary':'accent'">{{nav.icon}}</v-icon></v-list-item-icon>
                  <v-list-item-title :class="`${($route.name===nav.link)?'primary':'accent'}--text`">{{nav.name}}</v-list-item-title>
                </v-list-item>
              </template>
            </v-list>
          </template>

        </v-navigation-drawer>
      </template>
      <v-container fluid class="pt-14">
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data () { 
    return {
      navItemsTop: [
        {name:'Home',icon:'mdi-home',link:'home'},
        {name:'Products',icon:'mdi-account',link:'products'},
        {name:'Messages',icon:'mdi-message-text',link:'messages'},
        {name:'Favorites',icon:'mdi-heart-outline',link:'favorites'},
        {name:'Share',icon:'mdi-share-variant',link:'share'},
        {name:'Help',icon:'mdi-help-circle-outline',link:'help'},
      ],
      navItemsBottom: [
        {name:'Settings',icon:'mdi-cog',link:'settings'},
        {name:'Logout',icon:'mdi-exit-to-app',link:'/'},
      ],
      drawer: false
    } 
  },
  methods: {
    navToLink(link) {
      this.$router.push(link);
    }
  },
  mounted () {
    this.$vuetify.theme.dark = (localStorage.getItem("isDarkTheme")!==null)?localStorage.getItem("isDarkTheme")==='true':false;
  },
}
</script>
