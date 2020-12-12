<template>
    <div>
        <b-container class="content">
            <h6 class="title">جستجوی نرم افزار</h6>
            <b-row>
                <b-col class="offset-md-2" md="4">
                    <div class="wrap d-flex justify-content-end">
                        <span>نام</span>
                        <b-input class="ml-2"  size="sm" v-model="searchByName"></b-input>
                    </div>           
                </b-col>
                <b-col md="4" >
                    <div class="wrap d-flex justify-content-end">
                        <span>عنوان</span>
                    <b-input class="ml-2"  size="sm" v-model="searchByTitle"></b-input>
                    </div>
                   <div class="wrap d-flex justify-content-end">
                    <b-button pill variant="primary" size="sm"  @click="search">
              <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-search" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"/>
              <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
              </svg>
                       جستجو
                    </b-button>
                   </div>      
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>


<script>

import { mapGetters } from "vuex"

export default {
  data() {
    return {
      searchByName: "",
      searchByTitle: "",
    };
  },
  methods: {
    search() {
      if (this.searchByName.length > 0) {
        this.$store.commit("product/SEARCH_NAME", this.searchByName);
      } else {
        this.$store.commit("product/SEARCH_TITLE", this.searchByTitle);
      }
      this.$router.push("result");
    },
  },
};
</script>

<style>
.title {
  font-size: 16px;
  margin-right: 50px;
}

.wrap {
  widows: 100%;
  margin: 10px 0;
}
</style>