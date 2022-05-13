<template>
  <div class="pa-10">
     <v-dialog v-model="deleteConfirmation" width="500" persistent>
      <v-card class="pa-10">
        <div align="center" class="text-h6">Confirmation</div>
        <div align="center" class="pa-10">
          Are you sure you want to delete this item?
        </div>
        <v-card-actions>
          <v-row align="center">
            <v-col align="end">
              <v-btn color="red" text @click="deleteConfirmation = false">
                Cancel
              </v-btn>
            </v-col>
            <v-col>
              <v-btn
                color="success"
                text
                :loading="buttonLoad"
                @click="deleteValue"
              >
                Confirm
              </v-btn>
            </v-col>
          </v-row>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-row>
      <v-col>
        <div class="text-h5 pb-5">
          <b> T-Account</b>
        </div>
      </v-col>
      <v-spacer></v-spacer>
      <taccount-add
      :isOpen="dialogAdd"
      @cancel="dialogAdd = false"
      @refresh="loadData"
      :items="selectedItem"
      :isAdd="isAdd"
       />
      <v-col>
        <v-col align-self="center" align="end" class="pr-10">
          <v-btn
            class="rnd-btn"
            
            large
            color="#222f3e"
            depressed
            dark
            width="190"
            @click="addItem"
          >
            <span class="text-none">Add New Account</span>
          </v-btn>
        </v-col>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card class="rounded-xl" height="500" elevation="5">
          <div align="center">
            <div class="text-h6"><b>E&E Glass and Aluminum Works</b></div>
            <div class="pb-5">Balance Sheet</div>
            <v-row>
              <v-col cols="4"> </v-col>
              <v-col cols="4">
                <div>Debit</div>
              </v-col>
              <v-col cols="4"> Credit </v-col>
            </v-row>
            <v-row v-for="x in events" :key="x"> 
              <v-col cols="4">
                <div>{{x.account}}</div>
               
              </v-col>
              <v-col cols="4"> {{formatPrice(x.debit)}}</v-col>
              <v-col cols="4">{{formatPrice(x.credit)}}</v-col>
            </v-row>
            <v-divider></v-divider>
            <v-row>
              <v-col>

              </v-col>
              <v-col>
                <b>{{formatPrice(total_debit)}}</b>
              </v-col>
              <v-col>
                <b>{{formatPrice(total_credit)}}</b>
              </v-col>
            </v-row>
          </div>
        </v-card>
      </v-col>

      <v-col>
        <v-card class="rounded-xl" elevation="5">
          <v-data-table
            class="pa-5"
            :search="search"
            :headers="headers"
            :items="events"
            :loading="isLoading"
          >
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
                  <v-list-item @click.stop="editItem(item)">
                    <v-list-item-content>
                      <v-list-item-title>Edit</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item @click.stop="deleteItem(item)">
                    <v-list-item-content>
                      <v-list-item-title>Delete</v-list-item-title>
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
      </v-col>
    </v-row>
  </div>
</template>

<script>
import TaccountAdd from './TaccountAdd.vue';
export default {
  components: { TaccountAdd },
  created(){
    this.eventsGetall()
  },
  data() {
    return {
      search: "",
      buttonLoad: false,
      total_debit:0,
      total_credit:0,
      account_type: "",
      deleteConfirmation: false,
      selectedItem: [],
      events: [],
      selectedItem: {},
      isLoading: false,
      users: [],
      dialogAdd: false,
      isAdd: true,
      headers: [
        { text: "ID", value: "id" },
        { text: "Date", value: "date" },
        { text: "Description", value: "account" },
        { text: "Debit", value: "debit" },
        { text: "Credit", value: "credit" },
        { text: "Action", value: "opt" },
        ,
      ],
    };
  },
  methods:{
      getColorStatus(item) {
      if (item == "Pending") {
        return "background-color:#FFF5CC;border-radius:15px;padding:7px; width:150px; color: #344557;";
      } else if (item == "Approved") {
        return "background-color:green;border-radius:15px;padding:7px; width:150px; color:white;";
      } else {
        return "background-color:red;border-radius:15px;padding:7px; width:150px; color: white;";
      }
    },
    async deleteValue() {
      this.buttonLoad = true;
      this.$axios
        .delete(`/taccount/${this.selectedItem.id}/`, {
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
    async status(data, status) {
      this.isLoading = true;
      const res = await this.$axios
        .patch(
          `/announcement/${data.id}/`,
          {
            is_active: status == "Deactivate" ? false : true,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        )
        .then((res) => {
          this.loadData();
        });
    },
    loadData() {
      this.account_type = localStorage.getItem("account_type");
      this.eventsGetall();
    },
    async eventsGetall() {
      this.isLoading = true;
      const res = await this.$axios
        .get(`/taccount/`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((res) => {
          console.log(res.data);
          this.events = res.data;
          this.total_debit = 0
          this.total_credit = 0
          for(let key in this.events){
            this.total_debit = this.total_debit +parseInt( this.events[key].debit)
             this.total_credit = this.total_credit + parseInt(this.events[key].credit)
          }
          this.isLoading = false;
        });
    },
  },
  
};
</script>

<style>
</style>