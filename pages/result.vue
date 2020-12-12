<template>
    <div>
        
          <b-container>
             <p class="d-inline-block my-3 title2">مدیریت سیستم | نتایج جستجو</p>
             <div class="content">
            <client-only>
             <table class="table table-striped table-hover">
           <thead>
             <tr>
               <th scope="col">شناسه</th>
               <th scope="col">نام</th>
               <th scope="col">عنوان</th>
               <th scope="col">تاریخ</th>
               <th scope="col">آدرس</th>
               <th scope="col">عمومی</th>
               <th scope="col">وضعیت</th>
             </tr>
           </thead>
           <tbody>
             <tr v-for="product in  results" :key="product.id">
               <td>{{ product.id }}</td>
               <td>{{ product.name }}</td>
               <td>{{ product.title }}</td>
               <td>{{ product.date }}</td>
               <td>{{ product.url }}</td>
             <td><font-awesome-icon :icon=" product.public ? ['fas', 'check-circle'] : ['fas', 'times-circle']" style="font-size: 22px;"/>
               </td>
               <td>{{ product.status ? 'فعال' : 'غیرفعال'}}</td>
             </tr>
           </tbody>
         </table>
         </client-only>
         
         <b-button block variant="primary" @click="back">بازگشت</b-button>
         </div>
    </b-container>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  methods: {
    back() {
      this.$router.push("/");
    },
  },
  computed: {
    ...mapState("product", {
      results: (state) => state.search,
    }),
  },
};
</script>

<style>
</style>