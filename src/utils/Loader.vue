<template>
  <div
    id="WIP_loader"
    v-bind:style="show==true ? 'z-index:111111111199 !important; display:block;':'z-index:99 !important; display:none;'"
    class="lodr-overlay"
  >
    <div class="gif-loader">
      <img src="../assets/loader/loader-block.svg" class="m-b-15" style="width:256px" />
      <p>Please wait...</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "Loader",
  data: function() {
    return {};
  },
  props: {
    show: Boolean
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
