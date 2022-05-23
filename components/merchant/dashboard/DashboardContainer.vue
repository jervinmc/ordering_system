<template>
  <div class="pa-5">
    <div>
      <div class="text-h5">
        <b>Welcome to our dashboard</b>
      </div>

      <!-- <div class="pb-5">
        Good Morning! We have 3 new active cases for today.
      </div> -->
    </div>
    <div class="pa-10">
      <v-card class="rounded-xl" elevation="5">
          <v-carousel height="400">
            <v-carousel-item
              v-for="(item,i) in carousels"
              :key="i"
              :src="item.src"
         
            ></v-carousel-item>
          </v-carousel>
      </v-card>
    </div>
    <v-row>
      <!-- <v-col>
        <div>
          <v-card class="rounded-xl" height="250" elevation="5">
            <v-img class="rounded-xl" src="/people.png" height="250"></v-img>
          </v-card>
        </div>
        <div class="pt-5">
          <v-card  class="rounded-xl pa-10" elevation="5">
        
            <div class="pt-5">
              <v-row>
                <v-col>
                  <div>Total Cases</div>
                  <div style="color: #4b49ac" class="text-h5">
                    <b>{{items_all.length}}</b>
                  </div>
                </v-col>
                <v-col>
                  <div>Recovered</div>
                  <div style="color: #4b49ac" class="text-h5">
                    <b> {{recovered}}</b>
                  </div>
                </v-col>
                <v-col>
                  <div>Expired</div>
                  <div style="color: #4b49ac" class="text-h5">
                    <b>{{expired}}</b>
                  </div>
                </v-col>
              </v-row>
            </div>
             <div>
           
        </div>
          </v-card>
        </div>
       
      </v-col> -->
      <v-col>
        <v-row>
          <!-- <v-col cols="12">
            <v-card
              color="#7da0fa"
              height="120"
              class="rounded-xl pa-5"
              elevation="5"
            >
              <div class="pb-5 white--text">Received Clients Today</div>
              <div class="text-h4 white--text">
                <b> {{0}}</b>
              </div>
            </v-card>
          </v-col> -->
          <v-col cols="12">
            <v-card
              color="#4747a1"
              height="120"
              class="rounded-xl pa-5"
              elevation="5"
            >
              <div class="pb-5 white--text">Total Customers</div>
              <div class="text-h4 white--text">
                <b>{{customers.length}}</b>
              </div>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-card
              color="#7978e9"
              height="120"
              class="rounded-xl pa-5"
              elevation="5"
            >
              <div class="pb-5 white--text">Total No. of Sales</div>
              <div class="text-h4 white--text">
                <b> {{sales.length}}</b>
              </div>
            </v-card>
          </v-col>
          <v-col cols="12">
            <v-card
              color="#f3797e"
              height="120"
              class="rounded-xl pa-5"
              elevation="5"
            >
              <div class="pb-5 white--text">Total Products</div>
              <div class="text-h4 white--text">
                <b> {{products.length}}</b>
              </div>
            </v-card>
          </v-col>
        </v-row>
        <div class="pt-5">
          <!-- <v-card class="rounded-xl pa-5" elevation="5">
            <div class="text-h6 pb-5">
              <b>Sales</b>
            </div>
            <div>
              Total number of sales within a month
            </div>
               <div>
                        <VueApexCharts type="line" height="200" :options="chartOptions" :series="series"></VueApexCharts>
              </div>
            <div>
               <div v-if="!loadData">
              
              </div>
            </div>
          </v-card> -->
        </div>
      </v-col>
    </v-row>
    <!-- <div>
      <v-row>
        <v-col>
          <v-card class="rounded-xl pa-5" height="400" elevation="5">
            <div class="text-h6 pa-5">
              <b>Residents List</b>
            </div>
            <div>
              <v-data-table
                class="pa-5"
                :headers="headers"
                :items="items_all"
                :loading="isLoading"
              >
                <template #[`item.price`]="{ item }">
                  <div>
                    {{ formatPrice(item.price) }}
                  </div>
                </template>
                <template v-slot:loading>
                  <v-skeleton-loader
                    v-for="n in 5"
                    :key="n"
                    type="list-item-avatar-two-line"
                    class="my-2"
                  ></v-skeleton-loader>
                </template>
                <template #[`item.opt`]="{ item }">
                  <v-menu offset-y z-index="1">
                    <template v-slot:activator="{ attrs, on }">
                      <v-btn icon v-bind="attrs" v-on="on">
                        <v-icon>mdi-dots-horizontal</v-icon>
                      </v-btn>
                    </template>
                    <v-list dense>
                      <v-list-item @click.stop="view(item)">
                        <v-list-item-content>
                          <v-list-item-title>View</v-list-item-title>
                        </v-list-item-content>
                      </v-list-item>
                    </v-list>
                  </v-menu>
                </template>
              </v-data-table>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </div> -->
  </div>
</template>

<script>
// import VueBarGraph from "vue-bar-graph";
// import VueApexCharts from "vue-apexcharts";

export default {
    // components:{
    //     VueApexCharts
    // },
  computed:{
    total_active(){
     var total = this.items_all.filter(data=>data.status=='Active')
      return total.length
    },
    recovered(){
     var total = this.items_all.filter(data=>data.status=='Recovered')
      return total.length
    },
    expired(){
     var total = this.items_all.filter(data=>data.status=='Expired')
      return total.length
    },
    age1(){
     var total = this.items_all.filter(data=>data.age>6&&data.age<25)
      return total.length
    }
  },
//   components: {
//     VueBarGraph,
//     VueApexCharts,
//   },
  created(){
    this.eventsGetall()
  },
  data() {
    return {
      carousels: [
        {
          src: '/3.jpeg',
        },
        {
          src: '/1.jpeg',
        },
        {
          src: '/2.jpeg',
        },
        
      ],
        sales:0.0,
        products:0,
        customers:0,
      loadData:false,
        chartOptionsPieAge: {
          chart: {
      type: 'donut'
    },
            labels: ['1-15 years old', '16-25 years old', '26-40 years old', '41 and above']
          },
        pie_series_age: [0, 0, 0, 0],
        chartOptionsPieGender: {
          chart: {
      type: 'donut'
    },
            labels: ['Male', 'Female']
          },
        pie_series_gender: [44, 55],
        pie_labels: ['Apple', 'Mango', 'Orange', 'Watermelon'],
        series: [{
              name: "Desktops",
              data: [0, 0, 0, 0, 0, 0, 4]
          }],
          chartOptions: {
            chart: {
              height: 350,
              type: 'line',
              zoom: {
                enabled: false
              }
            },
            dataLabels: {
              enabled: false
            },
            stroke: {
              curve: 'straight'
            },
            xaxis: {
              categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
            
            },
            title: {
              text: 'Sales',
              align: 'left'
            },
            grid: {
              row: {
                colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                opacity: 0.5
              },
            },
          },
      headers: [
        { text: "Firstname", value: "firstname" },
        { text: "Lastname", value: "lastname" },
        { text: "Gender", value: "gender" },
        { text: "Address", value: "address" },
        { text: "Age", value: "age" },
         { text: "Status", value: "status" },
        { text: "Temperature", value: "temp" },
        ,
      ],
      items_all: [],
    // options: {},
    //   series: [44, 55, 41, 17, 15]
    };
  },
  methods:{
     async eventsGetall() {
         //products:
     await this.$axios
        .get(`/product_id/${localStorage.getItem("id")}/`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((res) => {
          console.log(res.data);
          this.products = res.data;
        });

        //customers:
     await this.$axios
        .get(`/users/`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((res) => {
          this.customers = res.data.filter(data=>data.account_type !='Admin');
   
        });
        await this.$axios
        .get(`/transaction/`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((res) => {
          console.log(res.data);
          this.products = res.data;
            this.sales = this.products.filter(data=>data.status=='Delivered')
        });
    },  
  }
};
</script>

<style>
</style>