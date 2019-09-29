<template>
  <div>

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
          <div v-if="!meetups">
            <app-spinner/>
          </div>

          <div v-else class="row columns is-multiline">
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
            <div v-if="!categories">
              <app-spinner/>
            </div>
            <div v-else class="columns cover is-multiline is-mobile">
              <app-category-item
                v-for="category in categories"
                :key="category._id"
                :category="category"/>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
    import CategoryItem from "@/components/CategoryItem.vue";
    import MeetupItem from "@/components/MeetupItem";
    import {mapGetters, mapActions} from 'vuex'

    export default {
        components: {
            appCategoryItem: CategoryItem,
            appMeetupItem: MeetupItem
        },
        computed: {
            ...mapGetters({
                meetups: 'getMeetups',
                categories: 'getCategories'
            })
        },
        async mounted() {
            await this.fetchCategories();
            await this.fetchMeetups();
        },
        methods: {
            ...mapActions(["fetchMeetups", "fetchCategories"])
        }
    }
</script>

<style scoped>

</style>
