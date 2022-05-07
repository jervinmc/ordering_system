<template>
  <div>
    <v-snackbar
      top
      absolute
      bottom
      color="error"
      outlined
      centered
      v-model="snackbar"
    >
      Wrong Credentials
      <template v-slot:action="{ attrs }">
        <v-btn color="red" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
     <v-snackbar
      top
      absolute
      bottom
      color="error"
      outlined
      centered
      v-model="snackbarisVerified"
    >
      Not yet verified. Please check your email. Thank you!
      <template v-slot:action="{ attrs }">
        <v-btn color="red" text v-bind="attrs" @click="snackbarisVerified = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
    <v-card width="900">
      <div
        style="background-color: #222f3e; color: white"
        align="center"
        class="pa-5"
      >
        Login 
      </div>
      <div class="pa-5" align="start">
        <v-row>
          <v-col>
            <div>Email</div>
            <div>
              <v-text-field outlined v-model="users.email"></v-text-field>
            </div>
          </v-col>
          <v-col cols="12">
            <div>Password</div>
            <div>
              <v-text-field outlined v-model="users.password" type="password"></v-text-field>
            </div>
          </v-col>
        </v-row>
        <div align="center">
          <v-btn depressed color="#222f3e" dark @click="login" :loading="isLoaded"> Login </v-btn>
        </div>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      snackbar:false,
      img_holder: 'image_placeholder.png',
      image: '',
      url: '',
      users:[],
      isLoaded:false,
      snackbarisVerified:false
    }
  },
  methods: {
     async login() {
      this.isLoaded = true;
      var credentials = {
        email: this.users.email,
        password: this.users.password,
      };
      try {
        var response = await this.$axios
          .post("login/", credentials)
          .then((response) => {
            if(response.data=='no_data'){
                alert('Wrong Credentials')
                this.isLoaded=false;
                return
            }
            console.log(response.data)
            localStorage.setItem("id", response.data[0].id);
            localStorage.setItem("account_type", response.data[0].account_type);
            if(response.data[0].account_type=='Merchant'){
              window.location.href="/merchant/products"
            }
            else{
              window.location.href="/customers/market"
            }
            
            // console.log(response)
             
            // const users = this.$axios
            //   .get(`/users/details/`, {
            //     headers: {
            //       Authorization: `Bearer ${localStorage.getItem("token")}`,
            //     },
            //   })
            //   .then((users) => {
            //     // if(!users.data.is_verified){
            //     //   this.snackbarisVerified = true
            //     //   this.isLoaded=false
            //     //   return
            //     // }
            //     localStorage.setItem("id", users.data.id);
            //     localStorage.setItem("middlename", users.data.middlename);
            //     localStorage.setItem("firstname", users.data.firstname);
            //     localStorage.setItem("lastname", users.data.lastname);
            //     localStorage.setItem("account_type",users.data.account_type)
            //     if(users.data.account_type=='Client'){
            //       window.location.href="/beneficiaries"
            //     }
            //     else{
            //         window.location.href="/admin/dashboard"
            //     }
            //     this.isLoaded = false;
                
            //     // if(users.data.is_superuser) window.location.href = "/home";
            //     // else window.location.href = "/home";
            //   });
          });

        
      } catch (error) {
        this.snackbar = true;
        this.isLoaded = false;
      }
    },
    onFileUpload(e) {
      this.image = e
      e = e.target.files[0]
      if (e['name'].length > 100) {
        alert('255 characters exceeded filename.')
        return
      }
      try {
        if (e.size > 16000000) {
          alert('Only 15mb file can be accepted.')
          return
        }
      } catch (error) {
        alert(error)
        return
      }
      this.image = e
      if (e == null) {
      } else {
        this.url, (this.img_holder = URL.createObjectURL(e))
      }
    },
  },
}
</script>

<style>
</style>