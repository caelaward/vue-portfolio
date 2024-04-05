<template>
   
  <!-- <div clas="container" >
  <div class="home">
    <div class="name">
   <h2 class="text">Caela Morgan<br>Ward</h2>
   </div>
   <img src="https://i.postimg.cc/RqxS6HFc/pprofile1.jpg" class="w-25 rounded " id="coverImg" alt="" ><br><br>
  <h3 class="description"> <p>Aspiring web developer  </p></h3>
  </div>
  </div> -->

  
    <!-- <div class="row">
        <div class="col-lg-6 mt-5">
            <h1>Caela Morgan Ward</h1>
        </div>


        <div class="col-lg-6">
            <img src="https://i.postimg.cc/RqxS6HFc/pprofile1.jpg" class="container-fluid " id="coverImg"> 

        </div>

    </div> -->
    <!-- <div class="bodyh">
       
        <div class="row">

    <div class="container col">
        <img src="https://i.ibb.co/wpvjjCM/IMG-20240403-WA0019.jpg" class="container-fluid " id="coverImg"> 
    </div>
    <span class="col" id="name"><h1>Caela Morgan Ward</h1></span>
    <h3>Aspiring web developer</h3>
    </div>
    </div> -->

    <div class="header">
	<div class="fixed-content">
		<img class="port" src="https://i.ibb.co/M77jz5m/calla.jpg">
        <h1>Caela Morgan Ward</h1>
		<!-- <h2>Aspiring Web Developer</h2> -->
		<p>Aspiring Web Developer</p>
       <router-link to="/contact" class="btn btn-dark text-white">Contact</router-link>

		<div class="icon-row">
			<!-- <i class="fa fa-twitter"></i> -->
			<!-- <i class="fa fa-codepen"></i> -->
            <a href="https://www.linkedin.com/in/calla-ward-1a5146276/" target="blank" ><i class="fa fa-linkedin"></i></a>
            <i class="fa-solid fa-envelope"></i>
            <a href="https://github.com/caelaward" target="blank"><i class="fa-brands fa-square-github "></i></a>
			<!-- <i class="fa fa-youtube"></i> -->
		</div>
	</div>
</div>
<div class="second">
	<div class="fixed-content">
		<h1>Get to know me !!</h1>
		<p> I'm an aspiring developer entering this journey and getting ready to become the best version of myself in this field.</p>
     <router-link to="/about" class="btn btn-dark text-white">View more</router-link>
	</div>
</div>



  
</template>

<script>



export default {
  name: 'HomeView',
  components: {
    
    
  }
}
</script>
<style scoped>
/* .bodyh {
    background-image: url(https://i.ibb.co/2tBBh6d/Brown-Grey-Creative-Modern-Online-Portfolio-2.png);
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 100vh;
}


#coverImg {

   
    background: burlywood;
    border-radius:50%;
    width: 50%;
    padding-top:5px;
    padding-bottom: 5px;
    margin-top:4%

}

span{
    margin:0;
    padding:0
}

#name{
    margin-top:9%
} */

/* 
.text{
    padding: 1rem;
    font-size: 5rem;
    text-shadow: 5px 8px 10px;
    letter-spacing: 10px;
    font-family: monospace;
    border-right: solid 5px;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    animation: typing 3s ,
    cursor .4s infinite alternate;
}
@keyframes cursor {
    50% {
        border-color: transparent;
    }
}
@keyframes typing {
    from{
        width: 0;
    }
    
}
@media (max-width:768px){
    .text{
        font-size: 2rem;
        margin-top: 16%;
    }
    #coverImg{
        margin-top:50px ;
        margin-bottom: 50px;
    }
    .description{
        margin-bottom: 50px;
    }  
}
@media (max-width:500px){
    .text{
        font-size: 1.8rem;
        margin-top: 16%;
        animation: none;
        
    } */
    
    /* .description{
        margin-bottom: 50px;
    }
} */
/* @import url(https://fonts.googleapis.com/css?family=Montserrat); */

body {
	margin: 0;
	padding: 0;
	/* font-family: 'Montserrat'; */
}

.fixed-content {
  width: auto;
  max-width: 860px;
  float: none;
  display: block;
  margin-right: auto;
  margin-left: auto;
  padding: 40px;
  text-align: center;
}

.header {
	background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/95581/header.png');
	/*background-attachment: fixed;*/
	color: #FFF;
	max-height: 500px;
	height: 100%;

}
.port {
    border-radius: 50%;
    border: 4px #ccc solid;
    width: 25%;
}

.icon-row {
	margin: 45px auto;
	width: 100%;

}
i {
    border-radius: 4px;
    cursor: pointer;
    font-size: 44px;
    margin: 0px 20px;
    padding: 20px 30px;
    transition: all 400ms ease-in-out;
    color:#eee

   
}
i:hover {
        background: #FFF;
        color: #ca5549;
    }

.second {
	background: #f2f2f2;
	color: black;
	width: 100%;
}

.footer {
	color: #a9b0ba;
	
	/* .blue {

		i {
			color: #d2d6dc;

			&:hover {
				background: #3c7fc6;
				color: #d2d6dc;
			}
		} */
	}

	.fa-chevron-up {
		cursor: pointer;
		font-size: 34px;
		margin: 40px 0 0 0;
		position: relative;
		top: 0px;

		/* &:hover {
			-webkit-animation: up 1s infinite; 
    		animation: up 1s infinite;
		} */
	}


@keyframes up {
    0%   {top: 0px;}
    25%  {top: 5px;}
    50%  {top: 0px;}
    75%  {top: 5px;}
    100% {top: 0px;}
}

</style>
