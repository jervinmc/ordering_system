<template>
  <v-form ref="form">
    <v-dialog v-model="isOpen" width="1000" persistent>
      <v-card class="pa-10">
        <div align="center" class="text-h6">New Design</div>
        <v-col cols="12" class="px-0">
          <div>Account Name</div>
          <div>
            <v-text-field outlined v-model="events.account"></v-text-field>
          </div>
        </v-col>
        <!-- <v-col cols="12" class="px-0">
          <div>Debit</div>
          <div>
            <v-text-field outlined v-model="events.debit"></v-text-field>
          </div>
        </v-col> -->
        <v-col cols="12" class="px-0">
          <div>Credit</div>
          <div>
            <v-text-field outlined v-model="events.credit"></v-text-field>
          </div>
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
        timestamp() {
      var today = new Date();
      var date =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate();
      var time = today.getHours() + ":" + today.getMinutes();
      var dateTime = date + " " + time;

      return dateTime;
    },
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
        form_data.append("account", this.events.account);
        form_data.append("credit", this.events.credit);
        form_data.append("date", this.timestamp());
        if (this.isAdd) {
          form_data.append("status", "Add");
          const response = await this.$axios
            .post("/taccount/", form_data, {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            })
            .then(() => {
              this.$refs.form.reset()
              this.buttonLoad = false;
              this.$emit("cancel");
              this.$refs.form.reset()
              this.$emit("refresh");
            
            });
        } else {
          const response = await this.$axios
            .patch(`/taccount/${this.events.id}/`, form_data, {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            })
            .then(() => {
                 this.$refs.form.reset()
              this.buttonLoad = false;
              this.$emit("cancel");
              this.$refs.form.reset()
              this.$emit("refresh");
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