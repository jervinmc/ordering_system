<template>
  <v-form ref="form">
    <v-dialog v-model="isOpen" width="1000" persistent>
      <v-card class="pa-10">
        <div align="center" class="text-h6">New Design</div>
        <v-col cols="12" class="px-0">
          <div>Product Name</div>
          <div>
            <v-text-field outlined v-model="events.product_name"></v-text-field>
          </div>
        </v-col>
        <v-col cols="12" class="px-0">
          <div>Stocks</div>
          <div>
            <v-text-field outlined v-model="events.stocks"></v-text-field>
          </div>
        </v-col>
        <v-col cols="12" class="px-0">
          <div>Price</div>
          <div>
            <v-text-field outlined v-model="events.price"></v-text-field>
          </div>
        </v-col>
        <v-col cols="12" class="px-0">
          <v-row>
            <v-col>
              <div>Sizes</div>
            </v-col>
            <v-col align="end" cols="auto">
                <v-row>
                  <v-col>
                     <div>
                      <v-icon @click="removeSize">mdi-minus</v-icon>
                    </div>
                  </v-col>
                    <v-col>
                     <div>
                      <v-icon @click="addSize">mdi-plus</v-icon>
                    </div>
                  </v-col>
                </v-row>
            </v-col>
          </v-row>
          <div>
              <v-row v-for="(x,index) in sizes_label" :key="index">
                
                  <v-col>
                      <v-text-field label="Size" outlined v-model="sizes_label[index]"></v-text-field>
                  </v-col>
                  <v-col>
                      <v-text-field label="Price" outlined v-model="sizes_price[index]"></v-text-field>
                  </v-col> 
              </v-row>
          </div>
        </v-col>
        <v-col cols="12" class="px-0">
          <div>descriptions</div>
          <div>
            <v-textarea outlined v-model="events.descriptions"></v-textarea>
          </div>
        </v-col>
        <!-- <v-col cols="12" class="px-0">
        <div>Category</div>
        <div>
          <v-select outlined v-model="events.category" :items="['Surrealism','Expressionism']"></v-select>
        </div>
      </v-col> -->

        <v-col>
          <span class="pt-2 pr-10 pb-10"
            ><b
              >Upload Image<v-icon @click="$refs.file.click()"
                >mdi-plus</v-icon
              ></b
            ></span
          >

          <div class="hover_pointer pt-10">
            <img
              @click="$refs.file.click()"
              :src="img_holder"
              alt="item_.js"
              height="150"
              width="150"
              class="mb-0"
            />
          </div>
        </v-col>
        <v-col class="d-none">
          <input
            style="display: none"
            type="file"
            id="fileInput"
            ref="file"
            accept="image/png, image/jpeg"
            @change="onFileUpload"
          />
        </v-col>
        <v-card-actions>
          <v-row align="center">
            <v-col align="end">
              <v-btn color="red" text @click="cancel"> Cancel </v-btn>
            </v-col>
            <v-col>
              <v-btn
                color="success"
                text
                @click="addEvents"
                :loading="buttonLoad"
              >
                Save
              </v-btn>
            </v-col>
          </v-row>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-form>
</template>

<script>
export default {
  props: ["isOpen", "items", "isAdd"],
  watch: {
    items() {
      this.events = this.items;
      this.img_holder = this.items.image;
      this.quantity_temp = this.items.stocks;
    },
  },
  data() {
    return {
      sizes_label:[""],
      sizes_price:[""],
      size_selected:[],
      quantity_temp: 0,
      room_list: ["Standard", "Deluxe", "Suite"],
      events: [],
      buttonLoad: false,
      img_holder: "image_placeholder.png",
    };
  },
  methods: {
    addSize(){
      this.sizes_label.push('')
      this.sizes_price.push('')
    },
    removeSize(){
      this.$delete(this.sizes_label,0)
      this.$delete(this.sizes_price,0)
    },
    async addEvents() {
      this.buttonLoad = true;
      try {
        let form_data = new FormData();
        if (this.image != null && this.image != "") {
          form_data.append("image", this.image);
        }
        var size_label = []
        form_data.append("product_name", this.events.product_name);
        form_data.append("price", this.events.price);
        form_data.append("stocks", this.events.stocks);

        form_data.append("descriptions", this.events.descriptions);
        form_data.append("size_label", this.sizes_label);
        form_data.append("size_price", this.sizes_price);
        form_data.append("user_id", localStorage.getItem("id"));
        if (this.isAdd) {
          form_data.append("status", "Add");
          const response = await this.$axios
            .post("/product/", form_data, {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            })
            .then(() => {
              // this.$refs.form.reset()
              // this.buttonLoad = false;
              // this.$emit("cancel");
              // this.$refs.form.reset()
              // this.$emit("refresh");
              this.$axios
                .post("/inventory-report/", form_data, {
                  headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                  },
                })
                .then(() => {
                  this.$refs.form.reset();
                  this.buttonLoad = false;
                  this.$emit("cancel");
                  this.$refs.form.reset();
                  this.$emit("refresh");
                });
            });
        } else {
          const response = await this.$axios
            .patch(`/product/${this.events.id}/`, form_data, {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            })
            .then(() => {
              if (this.quantity_temp < this.events.stocks) {
                form_data.delete("stocks");
                form_data.append(
                  "stocks",
                  this.events.stocks - this.quantity_temp
                );
                form_data.append("status", "Add");
              } else if (this.quantity_temp == this.events.stocks) {
                return;
              } else {
                form_data.delete("stocks");
                form_data.append(
                  "stocks",
                  this.quantity_temp - this.events.stocks
                );
                form_data.append("status", "Subtract");
              }
              // this.buttonLoad = false;
              // this.$emit("cancel");
              // this.$refs.form.reset()
              // this.$emit("refresh");
              this.$axios
                .post("/inventory-report/", form_data, {
                  headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                  },
                })
                .then(() => {
                  this.$refs.form.reset();
                  this.buttonLoad = false;
                  this.$emit("cancel");
                  this.$refs.form.reset();
                  this.$emit("refresh");
                });
            });
        }
      } catch (error) {
        // alert(error);
        this.buttonLoad = false;
      }
    },
    onFileUpload(e) {
      this.image = e;
      e = e.target.files[0];
      if (e["name"].length > 100) {
        alert("255 characters exceeded filename.");
        return;
      }
      try {
        if (e.size > 16000000) {
          alert("Only 15mb file can be accepted.");
          return;
        }
      } catch (error) {
        alert(error);
        return;
      }
      this.image = e;
      if (e == null) {
      } else {
        this.url, (this.img_holder = URL.createObjectURL(e));
      }
    },
    cancel() {
      this.$emit("cancel");
    },
  },
};
</script>

<style>
</style>