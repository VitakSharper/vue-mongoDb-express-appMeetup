<template>
  <div id="app">
    <component :is="layout">
      <router-view/>
    </component>
  </div>
</template>
<script>
    import EmptyLayout from "./layouts/EmptyLayout";
    import MainLayout from "./layouts/MainLayout";

    export default {
        components: {
            EmptyLayout,
            MainLayout
        },
        computed: {
            layout() {
                return (this.$route.meta.layout || 'empty') + '-layout';
            }
        }
    }
</script>

<style lang="scss">
  @import "~bulma/bulma.sass";
  @import "assets/spacing.css";

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

</style>
