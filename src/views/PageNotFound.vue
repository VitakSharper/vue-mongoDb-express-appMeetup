<template>
  <div class="container">
    <app-error-text
      :title="'Ooooops, page you are trying to access doesn\'t exist\''"
      :status="404"
      :navigate-to-page="'home'"
      :navigate-to-text="'Navigate back Home'"/>
  </div>
</template>

<script>
    import ErrorText from "../components/ErrorText";

    export default {
        components: {
            appErrorText: ErrorText
        }
    }
</script>

<style scoped>

</style>
