<template>
  <!-- <div>
    <h1 class="mt-5 mb-5" >Contact me</h1>
  <div class="container">

    <div class="row"> -->
      <!-- Form Column -->
      <!-- <div class="col-md-6">
        <div class="container-form" id="formContainer">
          <form action="https://formspree.io/f/xrgwdqyv" target="_blank" method="post" @submit.prevent="clearForm()">
            <div class="mb-3">
              <label for="fname" class="form-label"  >First name:</label>
              <input type="text" class="form-control" id="fname" name="fname" placeholder="Your name.." required v-model="name"/>
            </div>

            <div >
              <label for="lname" class="form-label">Last name:</label>
              <input type="text" class="form-control" id="lname" name="lname" placeholder="Your surname.." required v-model="surename"/>
            </div>

            <div >
              <label for="email" class="form-label">Email:</label>
              <input type="email" class="form-control" id="email" name="email" placeholder="Your email.." required v-model="email"/>
            </div>

            <div >
              <label for="comment" class="form-label">Comment:</label>
              <textarea class="form-control" id="comment" name="comment" placeholder="Type your message.." required v-model="comment"></textarea>
            </div>

            <button type="submit" class="btn btn-dark">Submit</button>
          </form>
        </div>
      </div> -->

      <!-- Map Column -->
      <!-- <div class="col-md-6">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6616.981553282911!2d18.5047453!3d-33.97992575000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc4345b43aff1b%3A0xe95be7164febc1c5!2sCrawford%2C%20Cape%20Town%2C%207780!5e0!3m2!1sen!2sza!4v1705052153501!5m2!1sen!2sza" width="55%" height="350" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  </div>
  </div>
  
  <div class="container mt-3">
    <div  class="row">
      <div class="col" >
        <div class="shadow-sm  mb-5 bg-body-tertiary " id="logoI">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16" id="logoC">
            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
          </svg>
          <p>callaward112</p>
          </div>
      </div>
      <div class="col">
        <div class="shadow-sm  mb-5 bg-body-tertiary " id="logoI">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16" id="logoC">
            <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
          </svg>
          <p>+27 769839406</p>
      </div>
      </div>
      <div class="col">
        <div class="shadow-sm  mb-5 bg-body-tertiary " id="logoI">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-at" viewBox="0 0 16 16" id="logoC">
  <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2zm3.708 6.208L1 11.105V5.383zM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2z"/>
  <path d="M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648m-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z"/>
</svg>
          <p>callaward112@gmail.com</p>
      </div>
      </div>
     
    </div>
   -->

  <!-- </div> -->

  <section id="contact" class="contact ">

        <div class="header">
    <h1 class="mt-2 mb-5">Contact me</h1>
      </div>
   <div class="container" data-aos="fade-up">

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
            <form action="https://submit-form.com/lXg07wxiG" method="post" role="form" class="form_info"  @submit.prevent="clearForm()" >
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

</template>

<script>
export default {
  data(){
    return{
      name:"",
      email:"",
      subject:"",
      message:""
    }
  },
  computed:{
      
    },
    methods:{
      clearForm(){
        this.name='',
        this.email='',
        this.subject='',
        this.message=''

      }

    },
    mounted(){
        
    }

}
</script>

<style scoped>
/* .container-form {
  max-width: 100%;
  padding: 2%;
  border: 1px solid #ccc;
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
#logoC {
    width: 25px;
    height: 30px;
    padding: 2px;
    mix-blend-mode: multiply;
    transition: transform 0.3s;
  } 
 #logoC:hover{
      transform: scale(1.2);
    }
    #infoCard{
      width:15%
    } */
    /* #logoI{
    
      max-width: 100%;
     
      border: 2px solid #ccc;
     background-color: white;
     box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    } */
#contact{
  min-height: 77svh;
}
.container{
  margin-top:8%
}
.header {
	/* background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/95581/header.png'); */
	/*background-attachment: fixed;*/
	color: #FFF;
	height: 100%;
  background-color: black;

}
    /*--------------------------------------------------------------
# Contact
--------------------------------------------------------------*/

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
