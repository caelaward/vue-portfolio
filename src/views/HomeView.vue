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
	</div>
</div>
<div class="footer">
	
    <section id="contact" class="contact mt-2 mb-2">
   <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2 id="contactName">Contact</h2>
        </div>

        <div class="row mt-1">

          <div class="col-lg-4">
            <div class="info">
              <div class="address">
                <i class="fa-solid fa-location-dot"></i>
                <h4>Location:</h4>
                <p>Cape Town , Crawford</p>
              </div>

              <div class="email">
                <i class="fa-solid fa-envelope"></i>
                <h4>Email:</h4>
                <p>callaward@gmail.com</p>
              </div>

              <div class="phone">
                <i class="fa-solid fa-phone"></i>
                <h4>Call:</h4>
                <p>+27 769839406</p>
              </div>

            </div>

          </div>

          <div class="col-lg-8 mt-5 mt-lg-0">

            <form action="forms/contact.php" method="post" role="form" class="form_info">
              <div class="row">
                <div class="col-md-6 form-group">
                  <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" required>
                </div>
                <div class="col-md-6 form-group mt-3 mt-md-0">
                  <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" required>
                </div>
              </div>
              <div class="form-group mt-3">
                <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" required>
              </div>
              <div class="form-group mt-3">
                <textarea class="form-control" name="message" rows="5" placeholder="Message" required></textarea>
              </div>
              <div class="my-3">
                <div class="loading">Loading</div>
                <div class="error-message"></div>
                <div class="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div class="text-center"><button type="submit">Send Message</button></div>
            </form>

          </div>

        </div>

      </div>
  </section>

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
	color: #a9b0ba;
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

#contactName{
    color:maroon
}

.contact .info {
  width: 100%;
  /* background: #fff; */
}

.contact .info i {
  font-size: 20px;
  color: maroon;
  float: left;
  width: 44px;
  height: 44px;
  background: #eef7ff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  transition: all 0.3s ease-in-out;
}

.contact .info h4 {
  padding: 0 0 0 60px;
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 5px;
  color: #45505b;
}

.contact .info p {
  padding: 0 0 0 60px;
  margin-bottom: 0;
  font-size: 14px;
  color: black;
}

.contact .info .email,
.contact .info .phone {
  margin-top: 40px;
}

.contact .info .email:hover i,
.contact .info .address:hover i,
.contact .info .phone:hover i {
  background: maroon;
  color: #fff;
}

.contact .form_info {
  width: 100%;
  /* background: #fff; */
}

.contact .form_info .form-group {
  padding-bottom: 8px;
}

.contact .form_info .error-message {
  display: none;
  color: #fff;
  background: #ed3c0d;
  text-align: left;
  padding: 15px;
  font-weight: 600;
}

.contact .form_info .error-message br+br {
  margin-top: 25px;
}

.contact .form_info .sent-message {
  display: none;
  color: #fff;
  background: #18d26e;
  text-align: center;
  padding: 15px;
  font-weight: 600;
}

.contact .form_info .loading {
  display: none;
  background: #fff;
  text-align: center;
  padding: 15px;
}

.contact .form_info .loading:before {
  content: "";
  display: inline-block;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  margin: 0 10px -6px 0;
  border: 3px solid #18d26e;
  border-top-color: #eee;
  animation: animate-loading 1s linear infinite;
}

.contact .form_info input,
.contact .form_info textarea {
  border-radius: 4px;
  box-shadow: none;
  font-size: 14px;
}

.contact .form_info input[type=text],
.contact .form_info input[type=email] {
  height: 44px;
}

.contact .form_info textarea {
  padding: 10px 12px;
}

.contact .form_info button[type=submit] {
  background: maroon;
  border: 0;
  padding: 10px 35px;
  color: #fff;
  transition: 0.4s;
  border-radius: 50px;
}

.contact .form_info button[type=submit]:hover {
  background:maroon;
}

@keyframes animate-loading {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

</style>
