<template>
  <v-app>
    <div 
      v-if="loading" 
      class="loading">
      Loading...
    </div>
    <div 
      v-if="error" 
      class="error">
      {{ error }}
    </div>
    <div v-if="post">
      <app-content/>
    </div>
  </v-app>
</template>

<script>
import Content from './components/shared/Content';

export default {
  name: 'App',
  components: {
    appContent: Content
  },
  data() {
    return {
      loading: true,
      error: null,
      post: null
    };
  },
  created() {
    this.loading = false;
    this.post = true;
  }
};
</script>
