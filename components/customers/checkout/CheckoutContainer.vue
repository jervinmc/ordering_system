<template>
  <div class="pa-16">
    <v-row>
      <v-col cols="8">
        <v-row>
          <v-col cols="12" xl="4" lg="4" md="4">
            <div>Username</div>
            <div>
              <v-text-field
                outlined
                v-model="transaction.username"
              ></v-text-field>
            </div>
          </v-col>
          <v-col cols="12" xl="4" lg="4" md="4">
            <div>Barangay</div>
            <div>
              <v-text-field
                outlined
                hide-details=""
                v-model="transaction.barangay"
              ></v-text-field>
            </div>
          </v-col>
          <v-col cols="12" xl="4" lg="4" md="4">
            <div>Address</div>
            <div>
              <v-text-field
                outlined
                v-model="transaction.address"
              ></v-text-field>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" xl="4" lg="4" md="4">
            <div>City</div>
            <div>
              <v-text-field outlined v-model="transaction.city"></v-text-field>
            </div>
          </v-col>
          <v-col cols="12" xl="4" lg="4" md="4">
            <div>Zip</div>
            <div>
              <v-text-field
                outlined
                hide-details=""
                v-model="transaction.zip"
              ></v-text-field>
            </div>
          </v-col>
          <v-col cols="12" xl="4" lg="4" md="4">
            <div>Province</div>
            <div>
              <v-text-field
                outlined
                v-model="transaction.province"
              ></v-text-field>
            </div>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="4">
        <v-card class="pa-10" elevation="5">
          <v-row>
            <v-col cols="12"> <b>Subtotal</b> : Php {{ this.$route.query.price * this.$route.query.quantity }} </v-col>
            <v-col cols="12"> <b>Delivery Fee</b> : Php {{ 15 }} </v-col>
            <v-col cols="12"> <b>Total</b> : Php {{ (this.$route.query.price * this.$route.query.quantity) + 15 }} </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
    <div align="center">
      <div>
        <v-btn
          depressed
          color="#222f3e"
          dark
          @click="submit"
          :loading="isLoaded"
          width="300"
        >
          Cash On Delivery
        </v-btn>
      </div>
    </div>
    <div align="center" class="pt-5">
      <div>
        <v-btn
          depressed
          color="#222f3e"
          dark
          @click="paymentMethod"
          :loading="isLoaded"
          width="300"
        >
          <v-img
            height="40"
            contain
            width="60"
            src="https://pngimg.com/uploads/paypal/paypal_PNG25.png"
          ></v-img>
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.eventsGetall();
  },
  methods: {
   async paymentMethod() {
      var qs = require("qs");
      
      var data = qs.stringify({
        grant_type: "client_credentials",
      });
    //   var config = {
    //     method: "post",
    //     url: "https://api-m.sandbox.paypal.com/v1/oauth2/token",
    //     headers: {
    //         auth: {
    //             username: 'AfhkPCUFnmyofuwN3OSicO7Z83gKoXlDUmba7meh3GewvB6eC1nQ74JrMCSANpYyUudyjEvZBoda-5q-',
    //             password: 'EFmDE0yWqqoyTN6LuLgF7Wn0j2iZGq8gSkSOGzaNlfHKZy2upl2FkbriFlgk55_SGmFSvIVgmVf9cXdk'
    //             },
    //     //   "": "",
    //     //   Authorization:
    //     //     "Basic QWZoa1BDVUZubXlvZnV3TjNPU2ljTzdaODNnS29YbERVbWJhN21laDNHZXd2QjZlQzFuUTc0SnJNQ1NBTnBZeVV1ZHlqRXZaQm9kYS01cS06RUZtREUweVdxcW95VE42THVMZ0Y3V24wajJpWkdxOGdTa1NPR3phTmxmSEtaeTJ1cGwyRmticmlGbGdrNTVfU0dtRlN2SVZnbVZmOWNYZGs=",
    //     //   "Content-Type": "application/x-www-form-urlencoded",
    //     //   Cookie:
    //     //     "cookie_prefs=P%3D1%2CF%3D1%2Ctype%3Dimplicit; enforce_policy=ccpa; ts=vreXpYrS%3D1734306076%26vteXpYrS%3D1639637099%26vt%3Dc1e12b5717dac1200018c0cefffffb00%26vr%3Dc1e12b5717dac1200018c0cefffffaff; ts_c=vr%3Dc1e12b5717dac1200018c0cefffffaff%26vt%3Dc1e12b5717dac1200018c0cefffffb00",
    //     },
    //     data: data,
    //   };
    this.$axios.post("https://api-m.sandbox.paypal.com/v1/oauth2/token",data,{headers:{
         

    },auth: {
                username: 'AfhkPCUFnmyofuwN3OSicO7Z83gKoXlDUmba7meh3GewvB6eC1nQ74JrMCSANpYyUudyjEvZBoda-5q-',
                password: 'EFmDE0yWqqoyTN6LuLgF7Wn0j2iZGq8gSkSOGzaNlfHKZy2upl2FkbriFlgk55_SGmFSvIVgmVf9cXdk'
        },})
        .then((res)=>{
            console.log(res.data)
            alert(res.data['access_token'])
        })
    //   this.$axios(config)
    //     .then(function (response) {
    //       console.log(response.data);

    //     })
      
    },
    async eventsGetall() {
      this.isLoading = true;
      if(this.$route.query.id != undefined){
        this.events = [{"product_id":this.$route.query.id,"product_name":this.$route.query.product_name,"quantity":this.$route.query.quantity,"price":this.$route.query.price,"user_id":localStorage.getItem("id"),"subtotal":(this.$route.query.price* this.$route.query.quantity) + 15} ]
        return
      }
      const res = await this.$axios
        .get(`/cart_user/${localStorage.getItem("id")}/`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((res) => {
          console.log(res.data);
          this.events = res.data;
          this.isLoading = false;
        });
    },
    async submit() {
      this.loading = true;
      const response = await this.$axios
        .post(
          "/transaction-add-bulk/",
          {
            username: this.transaction.username,
            barangay: this.transaction.barangay,
            address: this.transaction.address,
            city: this.transaction.city,
            zip: this.transaction.zip,
            province: this.transaction.province,
            data: this.events,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        )
        .then(() => {
          this.loading = false;
          alert("Successfully Added");
        });
    },
  },
  data() {
    return {
      price:0,
      transaction: [],
      events: [],
    };
  },
};
</script>

<style>
</style>