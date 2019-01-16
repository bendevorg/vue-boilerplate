<template>
  <v-content>
    <app-navmenu/>
    <router-view/>
    <app-footer/>
  </v-content>
</template>

<script>
import Navmenu from './Navmenu';
import Footer from './Footer';

export default {
  name: 'Content',
  components: {
    appNavmenu: Navmenu,
    appFooter: Footer
  }
}
</script>

