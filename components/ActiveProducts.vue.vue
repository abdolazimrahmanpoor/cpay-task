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
               <th scope="col">عمیات</th>
               <th scope="col">وضعیت</th>
             </tr>
           </thead>
           <tbody>
             <tr v-for="product in getActive" :key="product.id">
               <td>{{ product.id }}</td>
               <td>{{ product.name }}</td>
               <td>{{ product.title }}</td>
               <td>{{ product.date }}</td>
               <td>{{ product.url }}</td>

               <td><font-awesome-icon :icon=" product.public ? ['fas', 'check-circle'] : ['fas', 'times-circle']" style="font-size: 22px;" :class="[product.public ? 'green' : 'red']" /></td>
               <td>
                 <div class="d-flex justify-content-around">
                <b-link @click="editPage(product.id)" variant="primary"><font-awesome-icon :icon="['fas', 'edit']" style="font-size: 22px;"/> </b-link>
                 <b-link @click="showMsgBoxRemove(product.id)"> <span><font-awesome-icon :icon="['fas', 'trash-alt']" style="font-size: 22px; color: grey"/></span></b-link>
                 </div>
                 </td>

               <td><toggle-button :value="product.status" @change="changeStatus(product.id)"/></td>
             </tr>
           </tbody>
         </table>  
         </client-only>   
    </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  components: {
  },
  data() {
    return {
      confirmRemove: "",
      product: [],
      inceremenyBy:1
    };
  },
  methods: {
    showMsgBoxRemove(id) {
      this.confirmRemove = "";
      this.$bvModal
        .msgBoxConfirm("آیا مطمئن هستید که می خواهید حذف کنید؟", {
          title: "حذف",
          size: "sm",
          buttonSize: "sm",
          okVariant: "danger",
          okTitle: "بله",
          cancelTitle: "خیر",
          footerClass: "p-2",
          hideHeaderClose: false,
          centered: true,
        })
        .then((value) => {
          this.confirmRemove = value;
          if (this.confirmRemove) {
            console.log("yes");
            this.$store.commit("product/DELETE_ITEM", id);
          }
        })
        .catch((err) => {
          // An error occurred
        });
    },
    changeStatus(id) {
      console.log("dispatch");
      this.$store.dispatch("product/setStatus", id);
    },
    editPage(id){
       this.$store.commit("product/SELECT_ITEM", id);
       this.$router.push("/edit");
    }
  },
  computed: {

    ...mapGetters("product", ["getActive"]),
 
  },
};
</script>

<style>
.green {
  color: green;
}
.red {
  color: red;
}
</style>