<template>
 <div>
     <h1>Home</h1>
     <Loader v-bind:show="this.showLoader"></Loader>
 </div>
</template>

<script>
/* eslint-disable */
import showToast from "../utils/helper";
import { ADDR, WEBSERVICE, PAGE } from "../utils/init";

export default {
  name: "Home",
  data: function() {
    return {
        showLoader:false,
    };
  },
  methods: {
    
  },
  mounted() {
    
  }
};
</script>
