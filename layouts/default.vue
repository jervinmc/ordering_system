<template>
  <v-app dark>
     <v-dialog v-model="isOpenLogout" width="500" persistent>
    <v-card class="pa-10">
    <div align="center" class="text-h6">Logout User</div>
    <div align="center" class="pa-10">
        Would you like to logout?
    </div>
      <v-card-actions>
        <v-row align="center">
            <v-col align="end">
                <v-btn color="red" text @click="isOpenLogout=false"> Cancel </v-btn>
            </v-col>
            <v-col>
                <v-btn color="success" text @click="confirm"> Logout </v-btn>
            </v-col>
        </v-row>  
      </v-card-actions>
    </v-card>
  </v-dialog>
  <v-app-bar
      color="white"
      :clipped-left="clipped"
      fixed
      app
      elevation="1"
      v-if="account_type=='Client'"
    >
      <v-img
        src="/logo.png"
        height="60"
        width="60"
        contain
        style="cursor: pointer"
        @click="route('index')"
      ></v-img>
      <v-spacer></v-spacer>
      <v-toolbar-title
        class="px-4 black--text"
        style="cursor: pointer; font-size: 16px"
        @click="routeClient('index')"
        ><v-icon class="pb-1">mdi-home</v-icon>Home</v-toolbar-title
      >
      <v-toolbar-title
        class="px-4 black--text"
        style="cursor: pointer; font-size: 16px"
        @click="routeClient('market')"
        ><v-icon class="pb-1">mdi-shopping</v-icon>Products</v-toolbar-title
      >
      <v-toolbar-title
        class="px-4 black--text"
        style="cursor: pointer; font-size: 16px"
        @click="routeClient('profile')"
        ><v-icon class="pb-1">mdi-account</v-icon>Profile</v-toolbar-title
      >
      <v-toolbar-title
        class="px-4 black--text"
        style="cursor: pointer; font-size: 16px"
        @click="routeClient('carts')"
        ><v-icon class="pb-1">mdi-cart</v-icon>Cart</v-toolbar-title
      >
      <div class="pl-16"></div>
      <v-toolbar-title
        v-if="token == null"
        class="px-4 black--text"
        style="cursor: pointer; font-size: 16px"
        @click="route('login')"
      >
        <v-icon class="pb-1">mdi-bell</v-icon></v-toolbar-title
      >
      <v-toolbar-title
        v-else
        class="px-4 black--text"
        style="cursor: pointer; font-size: 16px"
        @click="
          account_type == 'Seller'
            ? route('seller/dashboard')
            : account_type == 'Customer'
            ? route('customer/transaction')
            : route('admin/dashboard')
        "
      >
        <v-icon class="pb-1">mdi-login</v-icon>{{ name }}</v-toolbar-title
      >
      <!-- <v-toolbar-title
        v-if="token == null"
        class="px-4 black--text"
        style="cursor: pointer; font-size: 16px"
        @click="route('register')"
        ><v-icon class="pb-1">mdi-plus</v-icon> Register</v-toolbar-title
      > -->
    </v-app-bar>
    <v-app-bar
      color="white"
      :clipped-left="clipped"
      fixed
      app
      elevation="1"
      v-if="
        account_type == null ||
        $route.name == 'index' ||
        $route.name == 'contacts' ||
        $route.name == 'about' ||
        $route.name == 'market' ||
        $route.name == 'login' ||
        $route.name == 'seller'
      "
    >
      <v-img
        src="/logo.png"
        height="60"
        width="60"
        contain
        style="cursor: pointer"
        @click="route('index')"
      ></v-img>
      <v-spacer></v-spacer>
      <!-- <v-toolbar-title
        class="px-4 black--text"
        style="cursor: pointer; font-size: 16px"
        @click="route('index')"
        ><v-icon class="pb-1">mdi-home</v-icon>Home</v-toolbar-title
      > -->
      <!-- <v-toolbar-title
        class="px-4 black--text"
        style="cursor: pointer; font-size: 16px"
        @click="route('market')"
        ><v-icon class="pb-1">mdi-store</v-icon> Market</v-toolbar-title
      >
      <v-toolbar-title
        class="px-4 black--text"
        style="cursor: pointer; font-size: 16px"
        @click="route('contacts')"
        ><v-icon class="pb-1">mdi-phone</v-icon> Contact us</v-toolbar-title
      >
      <v-toolbar-title
        class="px-4 black--text"
        style="cursor: pointer; font-size: 16px"
        @click="route('about')"
        ><v-icon class="pb-1">mdi-information</v-icon> About us</v-toolbar-title
      > -->
      <div class="pl-16"></div>
      <v-toolbar-title
        v-if="token == null"
        class="px-4 black--text"
        style="cursor: pointer; font-size: 16px"
        @click="route('login')"
      >
        <v-icon class="pb-1">mdi-login</v-icon>Login</v-toolbar-title
      >
      <v-toolbar-title
        v-else
        class="px-4 black--text"
        style="cursor: pointer; font-size: 16px"
        @click="
          account_type == 'Seller'
            ? route('seller/dashboard')
            : account_type == 'Customer'
            ? route('customer/transaction')
            : route('admin/dashboard')
        "
      >
        <v-icon class="pb-1">mdi-login</v-icon>{{ name }}</v-toolbar-title
      >
      <!-- <v-toolbar-title
        v-if="token == null"
        class="px-4 black--text"
        style="cursor: pointer; font-size: 16px"
        @click="route('register')"
        ><v-icon class="pb-1">mdi-plus</v-icon> Register</v-toolbar-title
      > -->
    </v-app-bar>
    <v-app-bar

      color="white"
      :clipped-left="clipped"
      fixed
      app
      elevation="1"
          v-if="account_type=='Merchant'"
    >
      <v-img
        src="/logo.png"
        height="60"
        width="60"
        contain
        style="cursor: pointer"
        @click="route('index')"
      ></v-img>
      <v-spacer></v-spacer>
      <v-toolbar-title
        class="px-4 black--text"
        style="cursor: pointer; font-size: 16px"
        @click="route('dashboard')"
        ><v-icon class="pb-1">mdi-home</v-icon>Dashboard</v-toolbar-title
      >
      <v-toolbar-title
        class="px-4 black--text"
        style="cursor: pointer; font-size: 16px"
        @click="route('products')"
        ><v-icon class="pb-1">mdi-chart-ppf</v-icon>Products</v-toolbar-title
      >
      <v-toolbar-title
        class="px-4 black--text"
        style="cursor: pointer; font-size: 16px"
        @click="route('usermanagement')"
        ><v-icon class="pb-1">mdi-account-multiple</v-icon> Users</v-toolbar-title
      >
      <v-toolbar-title
        class="px-4 black--text"
        style="cursor: pointer; font-size: 16px"
        @click="route('orders')"
        ><v-icon class="pb-1">mdi-clipboard-list-outline</v-icon>Orders</v-toolbar-title
      >
      <v-toolbar-title
        class="px-4 black--text"
        style="cursor: pointer; font-size: 16px"
        @click="route('transactions')"
        ><v-icon class="pb-1">mdi-shopping</v-icon>Transactions</v-toolbar-title
      >
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
         <v-toolbar-title
        class="px-4 black--text"
         v-on="on" v-bind="attrs"
        style="cursor: pointer; font-size: 16px"
        ><v-icon class="pb-1">mdi-chart-bar</v-icon>Reports</v-toolbar-title
      >
        </template>
              <v-list>
        
          <v-list-item @click="route('inventory_report')">
            <v-list-item-title>Inventory Report</v-list-item-title>
          </v-list-item>
          <v-list-item @click="route('sales_report')">
            <v-list-item-title>Sales Report</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-toolbar-title
        v-if="token == null"
        class="px-4 black--text"
        style="cursor: pointer; font-size: 16px"
        @click="route('message')"
        ><v-icon class="pb-1">mdi-android-messages</v-icon>Messages</v-toolbar-title
      >
      <v-toolbar-title
        v-if="token == null"
        class="px-4 black--text"
        style="cursor: pointer; font-size: 16px"
        @click="route('taccount')"
        ><v-icon class="pb-1">mdi-comment-account</v-icon> T-Account</v-toolbar-title
      >
            <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-toolbar-title class="px-4 white--text" v-on="on" v-bind="attrs" style="cursor:pointer">
            <v-row>
            
              <v-col class="pb-5" cols="auto">
                      <v-icon @click="hitNotif" color="black">mdi-bell</v-icon>
              </v-col>
                <v-col class="px-0 red--text" v-if="total_unseen!=0">
                  {{total_unseen}}
              </v-col>
            </v-row>
           </v-toolbar-title>
        </template>
          <v-card height="400">
                 <v-list style="cursor:pointer">
           <v-list-item v-for="x in items_all" :key="x">
            <v-list-item-title><v-row>
               <v-row>
                 <v-col>
                  <v-img height="50" width="50" :src="x.users_profile"></v-img>
                 </v-col>
                 <v-col align-self="center">
                    <v-col @click="route(x.module)">
                  {{x.descriptions}}
                </v-col>
                <v-col>
                  {{x.date}}
                </v-col>
                 </v-col>
               </v-row>
              </v-row></v-list-item-title>
          </v-list-item>
        </v-list>
          </v-card>
      </v-menu>
      <v-toolbar-title
        v-if="token == null"
        class="px-4 black--text"
        style="cursor: pointer; font-size: 16px"
        @click="logout"
        ><v-icon class="pb-1">mdi-logout</v-icon>Log out</v-toolbar-title
      >
      <div class="pl-16"></div>
      
     
      
    </v-app-bar>
    <!-- <v-app-bar  color="#222f3e" :clipped-left="clipped" fixed app elevation="1" v-else-if="account_type=='Merchant'" >
    <v-app-bar-nav-icon @click="drawer=true" color="white"></v-app-bar-nav-icon>
    <v-row>
  
      <v-col  align-self="center" cols="auto">
        <div class="white--text">
         Merchant
      </div>
      </v-col>
       <v-col>
          <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-toolbar-title class="px-4 white--text" v-on="on" v-bind="attrs" style="cursor:pointer">
            <v-row>
            
              <v-col cols="auto">
                      <v-icon @click="hitNotif" color="white">mdi-bell</v-icon>
              </v-col>
                <v-col class="px-0 red--text" v-if="total_unseen!=0">
                  {{total_unseen}}
              </v-col>
            </v-row>
           </v-toolbar-title>
        </template>
          <v-card height="400">
                 <v-list style="cursor:pointer">
           <v-list-item v-for="x in items_all" :key="x">
            <v-list-item-title><v-row>
               <v-row>
                 <v-col>
                  <v-img height="50" width="50" :src="x.users_profile"></v-img>
                 </v-col>
                 <v-col align-self="center">
                    <v-col @click="route(x.module)">
                  {{x.descriptions}}
                </v-col>
                <v-col>
                  {{x.date}}
                </v-col>
                 </v-col>
               </v-row>
              </v-row></v-list-item-title>
          </v-list-item>
        </v-list>
          </v-card>
      </v-menu>
       </v-col>
    </v-row>
    <div class="white--text">
      {{$route.name=='admin-configuration' ? 'System Configuration' : ''}}
    </div>
    </v-app-bar> -->
    <v-main>
      <v-container class="pa-0" fluid>
        <Nuxt />
      </v-container>
    </v-main>
    <v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed>
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light> mdi-repeat </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
      <v-navigation-drawer v-model="drawer" absolute bottom temporary  color="#222f3e">
         <!--eslint-disable-->
      <v-list nav dense   v-if="account_type=='Merchant'">
        <v-list-item-group active-class="primary" color="white">
          <v-list-item
        
          color="white"
            :to="items[index].to"
            v-for="(key, index) in items"
            :key="index"
          > 
            <v-icon class="pr-2" color="white">{{ items[index].icon }}</v-icon>
            <v-list-item-title style="color:white">{{ items[index].title }}</v-list-item-title>
          </v-list-item>
          <v-list-item
          color="white"
          @click="logout"
          > 
            <v-icon class="pr-2" color="white">mdi-logout</v-icon>
            <v-list-item-title style="color:white">Logout</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </v-app>
</template>

<script>
import Pusher from 'pusher-js';
export default {
  name: "DefaultLayout",
  created(){
    this.account_type = localStorage.getItem('account_type')
    this.pusherConnect()
    this.eventsGetall()
  },
  data() {
    return {
      total_unseen:0,
      account_type:null,
      items_all:[],
      clipped: false,
      drawer: false,
      isOpenLogout:false,
      fixed: false,
      items: [
        {
          icon: "mdi-home-analytics",
          title: "Dashboard",
          to: "/merchant/dashboard",
        },
        {
          icon: "mdi-chart-ppf",
          title: "Products",
          to: "/merchant/products",
        },
        { 
          icon: "mdi-account-multiple",
          title: "Usermanagement",
          to: "/merchant/usermanagement",
        },
        {
          icon: "mdi-clipboard-list-outline",
          title: "Orders",
          to: "/merchant/orders",
        },
        {
          icon: "mdi-shopping",
          title: "Transaction",
          to: "/merchant/transactions",
        },
        {
          icon: "mdi-chart-areaspline",
          title: "Inventory Report",
          to: "/merchant/inventory_report",
        },
        {
          icon: "mdi-chart-bar",
          title: "Sales Report",
          to: "/merchant/sales_report",
        },
        {
          icon: "mdi-android-messages",
          title: "Messages",
          to: "/merchant/message",
        },
        {
          icon: "mdi-comment-account",
          title: "T-Account",
          to: "/merchant/taccount",
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Vuetify.js",
    };
  },
  methods: {
    route(link){
      if(link =='login'){
          window.location.href=`/${link}`
      }
      else{
         window.location.href=`/merchant/${link}`
      }
     
    },
    async eventsGetall() {
      this.items_all=[]
      const res = await this.$axios
        .get(`/notification_user/1/`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((res) => {
          console.log(res.data);
          this.items_all = res.data;
          console.log(this.items_all)
          this.total_unseen = this.items_all.filter(data=>data.viewed=='no')
          this.total_unseen = this.total_unseen.length
        });
    },
    async hitNotif(){
     this.total_unseen=0
       await this.$axios.get(`/notification_seen/1/`, {
            headers: {
              Authorization:`Bearer ${localStorage.getItem("token")}`,
            },
          })
    },
    pusherConnect(){
      var pusher = new Pusher('33efacb6a0d9c7baad00', {
      cluster: 'ap1'
    });
         var channel = pusher.subscribe('notification_admin');
    channel.bind('my-test', function(data) {
    
         this.eventsGetall()
    
    },this);
    },
    logout(){
     this.isOpenLogout=true;
   },
     confirm(){
     localStorage.clear();
    window.location.href="/"
     this.isOpenLogout=false
   },
    // route(name) {
    //   if (name == "index") {
    //     this.$router.push("/");
    //     return;
    //   }

    //   window.location.href = "/" + name;
    // },
    routeClient(name) {

      window.location.href = "/customers/" + name;
    },
    
  },
};
</script>
