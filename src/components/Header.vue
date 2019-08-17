<template>
	<header class="header_area">
		<div class="main_menu">
			<nav class="navbar navbar-expand-lg navbar-light">
				<div class="container">
					<!-- Brand and toggle get grouped for better mobile display -->
					<a class="navbar-brand logo_h" to="/home">
            <!-- <img src="../assets/img/logo.png" alt=""> -->
            <h1 class="logo">RUPAM JANA</h1>
          </a>
					<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
					 aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
					</button>
					<!-- Collect the nav links, forms, and other content for toggling -->
					<div class="collapse navbar-collapse offset" id="navbarSupportedContent">
						<ul class="nav navbar-nav menu_nav justify-content-end">
							<router-link tag="li" to="/home" class="nav-item"><a class="nav-link">Home</a></router-link>
							<router-link tag="li" to="/about" class="nav-item"><a class="nav-link">About</a></router-link>
						 	<router-link tag="li" to="/blog" class="nav-item"><a class="nav-link">Blog</a></router-link>
							<router-link tag="li" to="/contact" class="nav-item"><a class="nav-link">Contact</a></router-link>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	</header>
</template>

<script>
/* eslint-disable */
import showToast from "../utils/helper";
import { ADDR, WEBSERVICE } from "../utils/init";

export default {
  name: "Header",
  data: function() {
    return {
     
    };
  },
  methods: {
    
  },
  mounted() {
    
  }
};
</script>
