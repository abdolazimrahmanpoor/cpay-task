<template>
    <div>
        <b-container class="content">
            <h6 class="title">لیست نرم افزارها</h6>
            <br/>
             <b-button pil size="sm" variant="primary" class="register mb-4" @click="register"  > +ثبت نرم افزار </b-button>
               <b-tabs content-class="mt-3">
                <b-tab title="نرم افزارهای فعال" active>
                  <div>
                    <Active />
                  </div>
                </b-tab>
                <b-tab title="نرم افزارهای غیرفعال">
                  <div>
                    <Inactive />
                  </div>
                </b-tab>
              </b-tabs>
              <b-row class="d-flex justify-content-around">
                <b-col class="" sm="5">
                  <div class="overflow-auto content">
                      <div class="d-flex justify-content-center pt-2">
                  <b-pagination  pills></b-pagination>
                  </div>
                 </div>
               </b-col>
             </b-row>    
        </b-container>
    </div>
</template>

<script>
import Inactive from "~/components/InactiveProducts.vue";
import Active from "~/components/ActiveProducts.vue";
import { mapState } from "vuex";
export default {
  components: {
    Inactive,
    Active,
  },
  methods: {
    register() {
      this.$router.push("/register");
    }
  }
}
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

.register {
  position: relative;
  margin-bottom: 20px;
}

.register:after {
  position: absolute;
  content: "";
  bottom: -15px;
  left: 0;
  right: 0;
  margin: 0 auto;
  text-align: right;
  width: 110px;
  height: 4px;
  background-color: #007bff;
}
</style>