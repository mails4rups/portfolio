<template>
 <div>
     <!--================ Start About Us Area =================-->
	<section class="about_area section_gap">
        <div class="container">
            <div class="row justify-content-start align-items-center">
                <div class="col-lg-5">
                    <div class="about_img">
                        <img class="" src="../assets/img/about-us.png" alt="">
                    </div>
                </div>

                <div class="offset-lg-1 col-lg-5">
                    <div class="main_title text-left">
                        <h2>let’s <br>
                            Introduce about <br>
                            myself</h2>
                        <p>
                            I'm Rupam Jana a software developer by profession based in Kolkata, 
                            India who enjoys building things that live on the internet. 
                            I develop exceptional websites and web apps that provide intuitive,
                             pixel-perfect user interfaces with efficient and modern backends
                        </p>
                        <p>
                            Is give may shall likeness made yielding spirit a itself together created after sea 
                            is in beast beginning signs open god you're gathering whose gathered cattle let. 
                            Creature whales fruit unto meat the life beginning all in under give two.
                        </p>
                        <a class="primary_btn" href="#"><span>Download CV</span></a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!--================ End About Us Area =================-->
     <Loader v-bind:show="this.showLoader"></Loader>
 </div>
</template>

<script>
/* eslint-disable */
import showToast from "../utils/helper";
import { ADDR, WEBSERVICE, PAGE } from "../utils/init";

export default {
  name: "About",
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
