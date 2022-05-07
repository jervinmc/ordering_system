<template>
  <div class="pa-16">
       
            <v-row align="center">
                <v-col align="end" cols="6">
                    <v-img :src="img" ></v-img>
                </v-col>
                <v-col cols="6" align="start" class="pa-10">
                   <div class="text-h4">
                      <b>  {{product_name}}</b>
                   </div>
                   <div class="green--text">
                       Php {{price}}
                   </div>
                   <div>
                      {{stocks}} Stocks
                   </div>
                   <div >
                       <v-text-field outlined v-model="quantity">
                       </v-text-field>
                   </div>
                   <div>
                        <div align="start">
                        <v-btn depressed color="#222f3e" dark @click="addToCart" :loading="isLoading" width="200"> Add to Cart </v-btn>
                        </div>
                   </div>
                   <div class="py-5">
                        <div align="start">
                        <v-btn depressed color="#222f3e" dark @click="checkout" width="200">Check Out </v-btn>
                        </div>
                   </div>
                   <div>
                       Descriptions : {{descriptions}}
                   </div>
                </v-col>
            </v-row>
 
  </div>
</template>

<script>
export default {
    created(){
        this.loadData()
    },
    data(){
        return{
            img:'',
            price:0,
            quantity:0,
            product_name:'',
            stocks:0,
            descriptions:'',
            isLoading:false,
        }
    },
    methods:{
        checkout(){
            window.location.href=`/customers/checkout?id=${this.$route.query.id}&quantity=${this.quantity}&product_name=${this.product_name}&price=${this.price}`
        },
    loadData() {
      this.eventsGetall();
    },
    async eventsGetall() {
  
      const res = await this.$axios
        .get(`/product/${this.$route.query.id}/`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((res) => {
           var data = res.data
           this.img = data.image
           this.price = data.price
           this.product_name = data.product_name
           this.stocks = data.stocks
           this.descriptions = data.descriptions
        });
    },
    async addToCart(){
        this.isLoading = true;
      const res = await this.$axios
        .post(`/carts/`, {
            "user_id":localStorage.getItem('id'),
            "quantity":this.quantity,
            "product_name":this.product_name,
            "product_id":`${this.$route.query.id}`,
            "image":this.img
        },{
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((res) => {
           alert('Successfully Added to Cart')
           this.isLoading = false
        });
    }
        
    }
}
</script>

<style>

</style>