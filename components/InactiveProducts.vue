<template>
    <div>
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
             <tr v-for="product in  getInactive" :key="product.id">
               <td>{{ product.id }}</td>
               <td>{{ product.name }}</td>
               <td>{{ product.title }}</td>
               <td>{{ product.date }}</td>
               <td>{{ product.url }}</td>
               <td><font-awesome-icon :icon=" product.public ? ['fas', 'check-circle'] : ['fas', 'times-circle']" style="font-size: 22px;" :class="[product.public ? 'green' : 'red']" /></td>
               <td><toggle-button v-model="product.status"/></td>
             </tr>
           </tbody>
         </table>
         </client-only>
    </div>
</template>

<script>

import { mapGetters } from 'vuex'

    export default {
      computed:{   
    ...mapGetters("product", [
    "getInactive", 
  ])
  }   
 }
</script>

<style scoped>

</style>