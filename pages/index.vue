<template>
  <div>
    <b-container>
         <p class="d-inline-block my-3 title2">مدیریت سیستم | نرم افزار</p>
         <hr/>
         <SearchSection />
         <ListSection />
    </b-container> 
  </div>
</template>

<script>
import SearchSection from "~/components/SearchSection.vue"
import ListSection from "~/components/ListSection.vue"
export default {
  components: {
    SearchSection,
    ListSection,
  },
}
</script>

<style>
</style>