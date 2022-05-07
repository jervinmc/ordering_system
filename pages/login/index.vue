<template>
   <div align="center" class="pt-5">
     <div>
       <login-form />
     </div>
     <div>
         <!-- <footer-all /> -->
     </div>
  </div>
</template>

<script>
import FooterAll from '../../components/general/FooterAll.vue'
import LoginForm from '../../components/login/LoginForm.vue'

export default {
  components: { LoginForm, FooterAll },


}
</script>

<style>

</style>