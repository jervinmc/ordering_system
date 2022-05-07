<template>
  <div class="pa-10">
      <div v-if="isLoading">
          <v-row>
              <v-col cols="3">
                   <v-sheet
                    :color="`grey`"
                    class="pa-3"
                    >
                    <v-skeleton-loader
                        class="mx-auto"
                        max-width="300"
                        type="card"
                    ></v-skeleton-loader>
                    </v-sheet>
              </v-col>
              <v-col cols="3">
                   <v-sheet
                    :color="`grey`"
                    class="pa-3"
                    >
                    <v-skeleton-loader
                        class="mx-auto"
                        max-width="300"
                        type="card"
                    ></v-skeleton-loader>
                    </v-sheet>
              </v-col>
              <v-col cols="3">
                   <v-sheet
                    :color="`grey`"
                    class="pa-3"
                    >
                    <v-skeleton-loader
                        class="mx-auto"
                        max-width="300"
                        type="card"
                    ></v-skeleton-loader>
                    </v-sheet>
              </v-col>
              <v-col cols="3">
                   <v-sheet
                    :color="`grey`"
                    class="pa-3"
                    >
                    <v-skeleton-loader
                        class="mx-auto"
                        max-width="300"
                        type="card"
                    ></v-skeleton-loader>
                    </v-sheet>
              </v-col>
              
          </v-row>
      </div>
      <div v-if="isLoading">
          <v-row>
              <v-col cols="3">
                   <v-sheet
                    :color="`grey`"
                    class="pa-3"
                    >
                    <v-skeleton-loader
                        class="mx-auto"
                        max-width="300"
                        type="card"
                    ></v-skeleton-loader>
                    </v-sheet>
              </v-col>
              <v-col cols="3">
                   <v-sheet
                    :color="`grey`"
                    class="pa-3"
                    >
                    <v-skeleton-loader
                        class="mx-auto"
                        max-width="300"
                        type="card"
                    ></v-skeleton-loader>
                    </v-sheet>
              </v-col>
              <v-col cols="3">
                   <v-sheet
                    :color="`grey`"
                    class="pa-3"
                    >
                    <v-skeleton-loader
                        class="mx-auto"
                        max-width="300"
                        type="card"
                    ></v-skeleton-loader>
                    </v-sheet>
              </v-col>
              <v-col cols="3">
                   <v-sheet
                    :color="`grey`"
                    class="pa-3"
                    >
                    <v-skeleton-loader
                        class="mx-auto"
                        max-width="300"
                        type="card"
                    ></v-skeleton-loader>
                    </v-sheet>
              </v-col>
              
          </v-row>
      </div>
       <v-row>
          <v-col
            cols="12"
            lg="4"
            md="4"
            xl="4"
            v-for="index in events"
            :key="index"
          >
            <v-card  class="mx-auto my-12" max-width="374">
              <template slot="progress">
                <v-progress-linear
                  color="deep-purple"
                  height="10"
                  indeterminate
                ></v-progress-linear>
              </template>
              <v-img height="150" :src="index.image"></v-img>
              <v-card-title>{{ index.title }}</v-card-title>
              <v-card-text>
                <v-row align="center" class="mx-0">
                </v-row>
                <div class="my-4 text-subtitle-1">
        
                </div>

                <div>
                  {{ index.product_name }}
                </div>
                 <div>
                 Php {{ index.price }}
                </div>
              </v-card-text>

              <v-divider class="mx-4"></v-divider>
              <div class="pa-5" v-if="index.isBid">
             
              </div>
              <v-card-actions>
                <v-btn
                  color=""
                  text
                  @click="viewItem(index)"
                >
                  View
                </v-btn>
              </v-card-actions>
              <div v-if="index.current_bid != index.price" align="start">
                <div
              
                ></div>
              
              </div>
            </v-card>
          </v-col>
        </v-row>
  </div>
</template>

<script>
export default {
    data(){
        return{
            events:[],
            isLoading:false,
        }
    },
    created(){
        this.eventsGetall()
    },
    methods:{
      viewItem(item){
        window.location.href=`/items?id=${item.id}`
      },
         async eventsGetall() {
      this.isLoading = true;
      const res = await this.$axios
        .get(`/product/`, {
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
    }

}
</script>

<style>

</style>