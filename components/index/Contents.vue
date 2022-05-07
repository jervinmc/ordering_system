<template>
  <div style="width: 1300" class="pt-10">
    <v-card width="1200" height="500" elevation="0" align="start">
      <v-row>
        <v-col cols="8">
          <div style="color: #6609af">SUPORT GLOBAL COOLING</div>
          <div class="pt-5 text-h5">
            <b>Glass</b>
          </div>
          <div class="pt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do<br />

            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          </div>
        </v-col>
        <v-col align-self="center" style="cursor: pointer" @click="goToMarket">
          <v-row>
            <v-col cols="8">
              <div class="text-h4">
                <b>All Glass </b>
              </div>
            </v-col>
            <v-col align-self="center">
              <v-icon> mdi-arrow-right </v-icon>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <div class="pt-10 mb-10">
        <v-slide-group
          v-model="model"
          class="pa-0"
          active-class="success"
          show-arrows
        >
          <v-slide-item v-for="n in shopTattoo" :key="n">
            <v-card class="ma-4 pa-5" height="300" width="250">
              <div class="text-h6 mb-2">
                {{ n.brand }}
              </div>
              <div class="mb-4">
                <v-img :src="n.image" height="180"></v-img>
              </div>
              <div class="pt-5" align="center">
                <!-- <v-btn outlined depressed color="#6609af" dark> Shop now </v-btn> -->
              </div>
            </v-card>
          </v-slide-item>
        </v-slide-group>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  created() {},
  methods: {},
  data() {
    return {
      shopTattoo: [
        { brand: "Featured 1", image: "/featured1.jpeg" },
        { brand: "Featured 2", image: "/featured2.jpg" },
        { brand: "Featured 3", image: "/featured3.png" },
        { brand: "Featured 4", image: "/featured4.png" },
        { brand: "Featured 5", image: "/featured5.png" },
        { brand: "Featured 6", image: "/featured6.png" },
        { brand: "Featured 7", image: "/featured7.png" },
      ],

      image_test: [],
    };
  },
};
</script>

<style>
</style>