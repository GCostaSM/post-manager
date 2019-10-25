<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
      clipped
    >
      <v-list dense>
        <v-list-item v-for="menu in menuItems" :key="menu.name" @click="goPosts">
          <v-list-item-action>
            <v-icon>{{menu.icon}}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{menu.name}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      clipped-left
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Post Manager</v-toolbar-title>
    </v-app-bar>

    <v-content>
        <router-view></router-view>
    </v-content>

    <v-footer app>
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    name: 'RootDarkComponent',
    props: {
      source: String,
    },
    data: () => ({
      drawer: null,
      menuItems: [
        {
          icon:"mdi-account",
          name:"Usuarios"
        },
        {
          icon:" mdi-book",
          name:"Posts"
        },
        {
          icon:"mdi-key-variant",
          name:"Permissao"
        },
        {
          icon:"mdi-account-multiple",
          name:"Grupos"
        },
        {
          icon:"find_in_page",
          name:"Filtros"
        },
      ]
    }),
    created () {
    },
    methods: {
      toggleMenu () {
        this.menuVisible = !this.menuVisible
      },
      goPosts(){
        this.$router.push( '/app/users' );
      },
      exitApp(){
        this.$router.push( '/' );
      }
    }
  }
</script>