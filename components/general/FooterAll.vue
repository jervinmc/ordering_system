<template>
  <div class="black--text" style="width: 100%">
    <v-row class="mt-16">
      <v-col align="start" cols="12" xl="6" md="6" lg="6" class="mr-16">
        <v-row>
          <v-col cols="3">
            <v-img src="/auto_logo.png" height="250" width="250" contain></v-img>
          </v-col>
          <v-col >
            <div style="color: #222f3e"><b>About the Shop</b></div>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            </div>
           <a href="https://www.facebook.com/Auto-Oto-100287059229982" target="_blank"> <v-img src="/facebook.png" height="30" width="30"  > </v-img></a>

          </v-col>
        </v-row>
      </v-col>
      <v-col align="start" :class="$vuetify.breakpoint.width>400 ? 'pl-16' : 'pl-5'" cols="12" xl="3" lg="3" md="3">
        <div style="color: #222f3e"><b>Main Menu</b></div>
        <div class="py-2" style="cursor:pointer" @click="route('/about')">About</div>
        <div class="py-2"  style="cursor:pointer"  @click="route('/about')">Home</div>
        <div class="py-2"  style="cursor:pointer" @click="route('/market')">Market</div>
        <div class="py-2"  style="cursor:pointer" @click="route('/contacts')">Contact us</div>
      </v-col>
      <v-col align="start">
        <div style="color: #222f3e"><b>Contacts</b></div>
        <div class="py-2">
        Manila, Philippines <br />
        </div>
        <div class="py-2">
          lorem@gmail.com
            <br />
          09156830724
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  methods:{
    route(link){
      window.location.href=link
    },
  }
}
</script>

<style>
</style>