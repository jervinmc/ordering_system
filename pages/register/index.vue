<template>
  <v-sheet color="transparent" >
      <div align="center" class="">
        <regiser-form />
      </div>
        <div>
            <footer-all />
        </div>
    </v-sheet>
</template>

<script>
import FooterAll from '../../components/general/FooterAll.vue'
import RegiserForm from '../../components/register/RegiserForm.vue'

export default {
  components: { RegiserForm, FooterAll },

}
</script>

<style>

</style>
x