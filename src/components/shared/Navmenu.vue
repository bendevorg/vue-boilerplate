<template>
  <div>
    <v-navigation-drawer v-model="drawer" app fixed clipped class="grey lighten-4">
    </v-navigation-drawer>
    <v-app-bar app fixed clipped-left>
      <v-app-bar-nav-icon @click="drawer = !drawer" />
      <v-toolbar-title @click="$router.push({ path: '/' })">
        Boilerplate
      </v-toolbar-title>
      <v-spacer />
    </v-app-bar>
  </div>
</template>

<script>

export default {
  name: 'Navmenu',
  data: () => ({
    drawer: false,
  }),
};
</script>

<style lang="stylus">
#boilerplate {
  .v-navigation-drawer__border {
    display: none;
  }
}
</style>
