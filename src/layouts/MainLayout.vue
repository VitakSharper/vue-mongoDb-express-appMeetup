<template>
  <div>
    <app-navbar/>
    <main class="app-content" :class="{full: !isOpen}">
      <router-view/>
    </main>
    <app-footer/>
  </div>
</template>

<script>
    import Navbar from "../components/shared/Navbar";
    import Footer from "../components/shared/Footer";

    export default {
        components: {
            appNavbar: Navbar,
            appFooter: Footer
        },
        data() {
            return {
                isOpen: true
            }
        },
    }
</script>

<style scoped>


  .bold {
    font-weight: bold;
  }

  .cover {
    background-size: cover;
    /*background-position: center;*/
    background-repeat: no-repeat;
    background-attachment: fixed;
  }

  .hero {
    position: relative;
  }

  .hero-body {
    padding: 3rem 1.5rem;
  }

  .hero-bg {
    background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1531263060782-b024de9b9793?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80');
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
  }
</style>
