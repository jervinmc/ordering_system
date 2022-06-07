<template>
  <v-card elevation="5">
    <v-dialog v-model="deleteConfirmation" width="500" persistent>
      <v-card class="pa-10">
        <div align="center" class="text-h6">Confirmation</div>
        <div align="center" class="pa-10">
          Are you sure you want to delete this item?
        </div>
        <v-card-actions>
          <v-row align="center">
            <v-col align="end">
              <v-btn color="red" text @click="isCategory = false">
                Cancel
              </v-btn>
            </v-col>
            <v-col>
              <v-btn
                color="success"
                text
                :loading="buttonLoad"
                @click="submitCategory"
              >
                Confirm
              </v-btn>
            </v-col>
          </v-row>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="isCategory" width="500" persistent>
      <v-card class="pa-10">
        <div align="center" class="text-h6">Category</div>
        <div align="center" class="pa-10">Please select category.</div>
        <div>
          <v-select
            outlined
            :items="['Category1', 'Category2', 'Category3']"
            v-model="category"
          ></v-select>
        </div>
        <v-card-actions>
          <v-row align="center">
            <v-col align="end">
              <v-btn color="red" text @click="isCategory = false">
                Cancel
              </v-btn>
            </v-col>
            <v-col>
              <v-btn
                color="success"
                text
                :loading="buttonLoad"
                @click="submitCategory"
              >
                Confirm
              </v-btn>
            </v-col>
          </v-row>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- <beneficiaries-add :isOpen="dialogAdd" @cancel="dialogAdd=false" @refresh="loadData" :items="selectedItem" :isAdd="isAdd" /> -->
    <v-row>
      <v-col align="start" class="pa-10 text-h5">
        <b>Transaction Management</b>
      </v-col>

      <!-- <v-col align-self="center" align="end" class="pr-10" v-if="account_type!='Staff'">
        <v-btn
          class="rnd-btn"
          rounded
          large
          color="black"
          depressed
          dark
          width="190"
          @click="addItem"
        >
          <span class="text-none">Request Beneficiaries</span>
        </v-btn>
      </v-col> -->
    </v-row>
    <v-col align-self="center" class="pa-10">
      <v-text-field
        placeholder="search"
        outlined
        v-model="search"
      ></v-text-field>
    </v-col>
    <JsonExcel :data="items">
    <div class="text-6 pl-5" style="cursor:pointer">
      <b>download report</b>
    </div>
    </JsonExcel>
    <v-col class="pa-10 ">
          <v-menu
          class="pa-0"
          ref="eventDate"
          v-model="eventDate"
          :close-on-content-click="false"
          transition="scale-transition"
          offset-y
          max-width="290px"
          min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
            hide-details=""
              v-model="date"
              outlined
              label="Date"
              persistent-hint
              v-bind="attrs"
              @blur="date = date"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker
            @change="changeDate"
            v-model="date"
            no-title
            range
          ></v-date-picker>
        </v-menu>
       </v-col>
    <v-data-table
      class="pa-5"
      :search="search"
      :headers="headers"
      :items="items_all"
      :loading="isLoading"
    >
      <template #[`item.subtotal`]="{ item }">
        <div>
          {{ formatPrice(item.price * item.quantity) }}
        </div>
      </template>
      <template #[`item.users_profile`]="{ item }">
        <div>
          <v-img height="50" width="50" :src="item.users_profile"></v-img>
        </div>
      </template>
      <template v-slot:[`item.is_active`]="{ item }">
        <div>
          <v-chip align="center" :style="getColorStatus(item.is_active)"
            ><span
              >{{ item.is_active ? "Activated" : "Deactivated" }}
            </span></v-chip
          >
        </div>
      </template>
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
            <v-list-item @click.stop="status(item, '')">
              <v-list-item-content>
                <v-list-item-title>Mark as Delivered</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <!-- <v-list-item @click.stop="status(item,'to receive')">
              <v-list-item-content>
                <v-list-item-title>To Receive</v-list-item-title>
              </v-list-item-content>
            </v-list-item> -->
          </v-list>
        </v-menu>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
import JsonExcel from "vue-json-excel";
import jsPDF from "jspdf";
export default {
  created() {
    this.loadData();
  },
  data() {
    return {
      date:[],
      eventDate:false,
      search: "",
      category: "",
      buttonLoad: false,
      account_type: "",
      deleteConfirmation: false,
      selectedItem: [],
      events: [],
      selectedItem: {},
      isLoading: false,
      users: [],
      dialogAdd: false,
      isCategory: false,
      isAdd: true,
      headers: [
        { text: "Transaction Order", value: "id" },
        { text: "Product Name", value: "product_name" },
        { text: "Full Name", value: "fullname" },
        { text: "Address", value: "address" },
        { text: "Size", value: "size" },
        { text: "Color", value: "color" },
        { text: "User's Picture", value: "users_profile" },
        { text: "Quantity", value: "quantity" },
        { text: "Price", value: "price" },
        { text: "Total", value: "subtotal" },
        { text: "Status", value: "status" },
        { text: "Action", value: "opt" },
        ,
      ],
    };
  },
  components:{
    JsonExcel
  },
  computed: {
    items() {
      return this.events.filter((item) => {
        return item.status != "Pending";
      });
    },
  },
  methods: {
      changeDate(){
          this.items_all = []
           for(let key in this.events){
          if(new Date(this.date[0])<=new Date(this.events[key].date) && new Date(this.date[1])>=new Date(this.events[key].date)){
             this.items_all.push(this.events[key])
           
          }
        } 
      },
    downloadPdf() {
      const pdf = new jsPDF({ orientation: "landscape" });
      var listIitem = [];
      for (let key in this.headers) {
        if (
          this.headers[key].value != "opt" &&
          this.headers[key].value != "status" &&
          this.headers[key].value != "transaction_date"
        ) {
          listIitem.push(this.headers[key].value);
        }
      }
      let header = listIitem;
      let headerConfig = header.map((key) => ({
        name: key,
        prompt: key,
        width: 41,
        align: "center",
        padding: 0,
      }));
  
      pdf.table(0, 30, data=this.events, headerConfig);
      
  
      alert()
      pdf.save("pdf.pdf");
    },
    status(item, status) {
      this.buttonLoad = true;
      this.$axios
        .patch(
          `/transaction/${item.id}/`,
          {
            status: "Delivered",
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        )
        .then(() => {
          this.$axios.post(
            `/transaction_notif/`,
            {
              status: "Delivered",
              user_id: item.user_id,
              image: item.image,
              descriptions: "Your item is now delivered.",
            },
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            }
          );
          this.isCategory = false;
          this.buttonLoad = false;
          //   alert('Successfully Deleted!')
          this.loadData();
        });
    },
    approve(item) {
      this.buttonLoad = true;
      this.$axios
        .patch(
          `/cases/${this.selectedItem.id}/`,
          {
            category: this.category,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        )
        .then(() => {
          this.isCategory = false;
          this.buttonLoad = false;
          //   alert('Successfully Deleted!')
          this.loadData();
        });
    },
    async submitCategory() {
      this.buttonLoad = true;
      this.$axios
        .patch(
          `/cases/${this.selectedItem.id}/`,
          {
            category: this.category,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        )
        .then(() => {
          this.isCategory = false;
          this.buttonLoad = false;
          //   alert('Successfully Deleted!')
          this.loadData();
        });
    },
    setCategory(item) {
      this.isCategory = true;
      this.selectedItem = item;
    },
    getColorStatus(item) {
      if (item) {
        return "background-color:green;border-radius:15px;padding:7px; width:150px; color:white;";
      } else {
        return "background-color:red;border-radius:15px;padding:7px; width:150px; color: white;";
      }
    },
    async deleteValue() {
      this.buttonLoad = true;
      this.$axios
        .delete(`/beneficiaries/${this.selectedItem.id}/`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then(() => {
          this.deleteConfirmation = false;
          this.buttonLoad = false;
          alert("Successfully Deleted!");
          this.loadData();
        });
    },
    deleteItem(val) {
      this.selectedItem = val;
      this.deleteConfirmation = true;
    },

    formatPrice(value) {
      let val = (value / 1).toFixed(2).replace(",", ".");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    editItem(val) {
      this.selectedItem = val;
      this.dialogAdd = true;
      this.isAdd = false;
    },
    addItem() {
      this.isAdd = true;
      this.dialogAdd = true;
    },
    // async status(data, status) {
    //   this.isLoading = true;
    //   const res = await this.$axios
    //     .patch(
    //       `/announcement/${data.id}/`,
    //       {
    //         is_active: status == "Deactivate" ? false : true,
    //       },
    //       {
    //         headers: {
    //           Authorization: `Bearer ${localStorage.getItem("token")}`,
    //         },
    //       }
    //     )
    //     .then((res) => {
    //       this.loadData();
    //     });
    // },
    loadData() {
      this.account_type = localStorage.getItem("account_type");
      this.eventsGetall();
    },
    async eventsGetall() {
      this.isLoading = true;
      const res = await this.$axios
        .get(`/transaction_getall/`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((res) => {
          console.log(res.data);
           this.items_all = res.data
          this.events = res.data.filter((data) => data.account_type != "Admin");
          this.isLoading = false;
        });
    },
  },
};
</script>

<style>
</style>