<template>
  <v-app>
    <v-main class="background">
      <template>
        <v-app-bar color="background">
          <v-app-bar-nav-icon @click="drawer = true" color="primary"></v-app-bar-nav-icon>
          <v-toolbar-title class="primary--text">Econome</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon>
            <v-icon color="primary">mdi-magnify</v-icon>
          </v-btn>
        </v-app-bar>

        <v-navigation-drawer v-model="drawer" absolute flat color="background">
          <v-list nav dense>

            <v-list-item>
              <v-list-item-icon><v-icon color="accent">mdi-home</v-icon></v-list-item-icon>
              <v-list-item-title class="accent--text">Home</v-list-item-title>
            </v-list-item>

            <v-list-item>
              <v-list-item-icon><v-icon color="accent">mdi-account</v-icon></v-list-item-icon>
              <v-list-item-title class="accent--text">Products</v-list-item-title>
            </v-list-item>

            <v-list-item>
              <v-list-item-icon><v-icon color="accent">mdi-message-text</v-icon></v-list-item-icon>
              <v-list-item-title class="accent--text">Messages</v-list-item-title>
            </v-list-item>

            <v-list-item>
              <v-list-item-icon><v-icon color="accent">mdi-heart-outline</v-icon></v-list-item-icon>
              <v-list-item-title class="accent--text">Favorites</v-list-item-title>
            </v-list-item>

            <v-list-item>
              <v-list-item-icon><v-icon color="accent">mdi-share-variant</v-icon></v-list-item-icon>
              <v-list-item-title class="accent--text">Share</v-list-item-title>
            </v-list-item>

            <v-list-item>
              <v-list-item-icon><v-icon color="accent">mdi-help-circle-outline</v-icon></v-list-item-icon>
              <v-list-item-title class="accent--text">Help</v-list-item-title>
            </v-list-item>

          </v-list>
          <template v-slot:append>
            <v-list nav dense>
              <v-list-item @click="$vuetify.theme.dark=!$vuetify.theme.dark">
                <v-list-item-icon><v-icon color="accent">mdi-brightness-6</v-icon></v-list-item-icon>
                <v-list-item-title class="accent--text">Dark Theme</v-list-item-title>
              </v-list-item>
            </v-list>
          </template>
        </v-navigation-drawer>
      </template>
      <v-container fluid>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data () { return {
    drawer: true
  } },
}
</script>
