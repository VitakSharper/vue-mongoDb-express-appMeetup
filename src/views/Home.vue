<template>
  <div>
    <Hero/>
    <div class="container">
      <section class="section">
        <div class="m-b-lg">
          <h1 class="title is-inline">Featured Meetups in "Location"</h1>
          <Dropdown/>
          <button class="button is-primary is-pulled-right m-r-sm">Create Meetups</button>
          <router-link
            class="button is-primary is-pulled-right m-r-sm"
            :to="{name:'find'}"
            tag="button"
          >All
          </router-link>
        </div>
        <div class="row columns is-multiline">
          <app-meetup-item
            v-for="meetup in meetups"
            :key="meetup._id"
            :meetup="meetup"
          />
        </div>
      </section>

      <section class="section">
        <div>
          <h1 class="title">Categories</h1>
          <div class="columns cover is-multiline is-mobile">
            <app-category-item
              v-for="category in categories"
              :key="category._id"
              :category="category"/>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
    import CategoryItem from "@/components/CategoryItem.vue";
    import MeetupItem from "@/components/MeetupItem";

    export default {
        components: {
            appCategoryItem: CategoryItem,
            appMeetupItem: MeetupItem
        },
        data: () => ({
            categories: [],
            meetups: []
        }),
        async mounted() {
            try {
                const categories = await this.$http.get('/categories');
                const meetups = await this.$http.get('/meetups');
                this.meetups = meetups.data;
                this.categories = categories.data;
            } catch (e) {
                console.log('Error: ', e)
            }
        }
    }
</script>

<style scoped>

</style>
