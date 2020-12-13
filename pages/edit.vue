<template>
    <div>
      <b-container >
        <p class="d-inline-block my-3 title2"> مدیریت سیستم | ویرایش نرم افزار</p>
        <div class="content">

        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
          <b-row>
           <b-col md="6">

             <b-form-group
               id="input-group-1"
               label="نام"
               label-for="input-1" >
            
              <b-form-input
                id="input-1"
                :value="update[0].name"
                required
                placeholder="لطفا نام نرم افزار را وارد کنید" >
               </b-form-input>
              </b-form-group>

              <b-form-group id="input-group-2" label="عنوان  " label-for="input-2">
              <b-form-input
               id="input-2"
               :value="update[0].title"
               required
               placeholder="لطفا عنوان نرم افزار را وارد کنید" >
               </b-form-input>
               </b-form-group>
      
 
              <b-form-group id="input-group-2" label="تاریخ" label-for="input-2">
              <b-datepicker 
              id="datepicker-placeholder"
              placeholder="انتخاب یک تاریخ"
              locale="fa"   :value="update[0].date">
              </b-datepicker>
              </b-form-group>
            </b-col>

            <b-col md="6">
              <b-form-group id="input-group-2" label="آدرس اینترنتی" label-for="input-2">
              <b-form-input
                id="input-2"
                :value="update[0].url"
                required
                placeholder="لطفا آدرس اینترنتی نرم افزار را وارد کنید" >
                </b-form-input>
              </b-form-group>
     
              <b-form-group  label="عمومی" >
              <b-radio-group
              :value="update[0].public"
              :options="public"
               class="mb-3"
              value-field="item"
              text-field="name"
              disabled-field="notEnabled">
              </b-radio-group>
              </b-form-group>
                  
               
             <b-form-group  label="وضعیت" >
             <b-radio-group
             :value="update[0].status"
             :options="status"
             class="mb-3"
             value-field="item"
             text-field="name"
             disabled-field="notEnabled">
             </b-radio-group>
             </b-form-group>

            </b-col>
          </b-row>
        <b-button type="submit" variant="primary">ویرایش</b-button>
       <b-button type="reset" variant="danger">لغو</b-button>
     </b-form>
    </div>     
   </b-container>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  data() {
    return {
      public: [
        { item: true, name: "بله" },
        { item: false, name: "خیر" },
      ],
      status: [
        { item: true, name: "فعال" },
        { item: false, name: "غیرفعال" },
      ],
      product: {
        id: "",
      },
      show: true,
    }
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      this.$store.commit("product/SET_UPDATE_ITEM", this.product);
      this.product = [];
      this.$router.push("/");
    },
    onReset(evt) {
      this.$router.push("/");
      evt.preventDefault();

      // Reset our form values
      this.product.name = "";
      this.product.title = "";
      this.product.date = "";
      this.product.url = "";
      this.product.public = "";
      this.product.status = "";

      // Trick to reset/clear native browser form validation state
      this.$nextTick(() => {});
    },
  },
  computed: {
    ...mapState("product", {
      update: (state) => state.update,
    }),
  },
};
</script>

<style>
</style>