
<template>
    <div>
       <b-container >

          <p class="d-inline-block my-3 title2"> مدیریت سیستم | ثبت نرم افزار</p>
            <div class="content">
                
                
                <ValidationObserver v-slot="{ handleSubmit }">
                <b-form @submit.prevent="handleSubmit(onSubmit)">

                 <b-row>
                   <b-col md="6">
                    <ValidationProvider name="Name" rules="required|alpha" v-slot="{ errors }"> 
                       <b-form-group label="نام" label-for="name">
                       <b-form-input type="text" v-model="formData.name" id="name"></b-form-input>
                       <span style="color: red">{{ errors[0] }}</span>
                   </b-form-group>
                    </ValidationProvider>
                 </b-col>

                   <b-col md="6">
                    <ValidationProvider name="Title" rules="required|alpha" v-slot="{ errors }"> 
                       <b-form-group label="عنوان" label-for="Title">
                       <b-form-input type="text" v-model="formData.title" id="title"></b-form-input>
                       <span style="color: red">{{ errors[0] }}</span>
                   </b-form-group>
                    </ValidationProvider>
                 </b-col>
               </b-row>


                 <b-row>
                   <b-col md="6"> 
                    <label for="datepicker-full-width">انتخاب یک تاریخ</label>
                    <b-form-datepicker
                      id="datepicker-full-width"
                      locale="fa" 
                      v-model="formData.date"
                      menu-class="w-100"
                      calendar-width="100%"
                      class="mb-2"
                      placeholder="تاریخ نتخاب نشده"
                      >
                    </b-form-datepicker>
                    </b-col>

                     <b-col md="6">
                       <ValidationProvider name="URL" rules="required|email" v-slot="{ errors }"> 
                       <b-form-group label="آدرس اینترنتی" label-for="URL">
                       <b-form-input type="text" v-model="formData.url" id="URL"></b-form-input>
                       <span style="color: red">{{ errors[0] }}</span>
                        </b-form-group>
                       </ValidationProvider>
                     </b-col>
                   </b-row>

                       
                      <b-form-group label="عمومی">
                       <b-radio-group
                        v-model="formData.public"
                        :options="public"
                        value-field="value"
                        text-field="label"
                        disabled-field="notEnabled">
                        </b-radio-group>
                       </b-form-group>



                       <b-form-group label="وضعیت">
                       <b-radio-group
                        v-model="formData.status"
                        :options="status"
                        value-field="value"
                        text-field="label"
                        disabled-field="notEnabled">
                        </b-radio-group>
                       </b-form-group>
                    
                   



                   <div>
                       <b-button type="reset" variant="danger" @click="onCancel">لغو</b-button>
                       <b-button type="submit" variant="primary">ثبت</b-button>                 
                   </div>



                </b-form>
                </ValidationObserver>
           </div>        
  </b-container>
</div>
</template>

<script>

export default {

  data: () => ({
      formData: {
          id: '',
          name: '',
          title: '',
          date: '',
          url: '',
          public: '',
          status: ''
      } ,
      public: [
        { value: true, label: "بله" },
        { value: false, label: "خیر" },
      ],
      status: [
        { value: true, label: "فعال" },
        { value: false, label: "غیرفعال" },
      ],
  }),
  methods: {
    onSubmit() {

        this.$router.push("/"); 
        this.formData.id = Math.random().toString(36).substr(2, 9);
        this.$store.commit("product/ADD_ITEM", this.formData);
        this.formData = [];   
    },
     onCancel() {
      this.$router.push("/");
      this.formData = []; 
     }
  },
};
</script>

<style>
</style>