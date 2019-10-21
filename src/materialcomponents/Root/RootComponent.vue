<template>
 <div class="page-container">
    <md-app>
      <md-app-toolbar class="md-primary">
        <md-button class="md-icon-button" @click="toggleMenu" v-if="!menuVisible">
          <md-icon>menu</md-icon>
        </md-button>
        <span class="md-title">App</span>
      </md-app-toolbar>

      <md-app-drawer :md-active.sync="menuVisible" md-persistent="full">
        <md-toolbar class="md-transparent" md-elevation="0">
          <md-button class="md-icon-button md-dense" @click="exitApp">
            <span><md-icon>exit_to_app</md-icon></span>
          </md-button>

          <div class="md-toolbar-section-end">
            <md-button class="md-icon-button md-dense" @click="toggleMenu">
              <md-icon>keyboard_arrow_left</md-icon>
            </md-button>
          </div>
        </md-toolbar>

        <md-list>
          <md-list-item v-for="menu in menuItems" :key="menu.name">
            <md-button @click="goPosts">
              <md-icon>{{menu.icon}}</md-icon>
              <span class="md-list-item-text">{{menu.name}}</span>
            </md-button>
          </md-list-item>

        </md-list>
      </md-app-drawer>

      <md-app-content>
        <router-view></router-view>
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
  export default {
    name: 'RootComponent',
    data: () => ({
      menuVisible: false,
      menuItems: [
        {
          icon:"account_circle",
          name:"Usuarios"
        },
        {
          icon:"aspect_ratio",
          name:"Posts"
        },
        {
          icon:"vpn_key",
          name:"Permissao"
        },
        {
          icon:"face",
          name:"Grupos"
        },
        {
          icon:"find_in_page",
          name:"Filtros"
        },
      ]
    }),
    methods: {
      toggleMenu () {
        this.menuVisible = !this.menuVisible
      },
      goPosts(){
        this.$router.push( '/app/posts' );
      },
      exitApp(){
        this.$router.push( '/' );
      }
    }
  }
</script>

<style lang="scss" scoped>
  .md-app {
    min-height: 350px;
    border: 1px solid rgba(#000, .12);
  }

   // Demo purposes only
  .md-drawer {
    width: 230px;
    max-width: calc(100vw - 125px);
  }
</style>
