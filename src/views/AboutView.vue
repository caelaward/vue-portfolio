<template>
   <div class="container clearfix pt-5">
       <h1 class="fw-bold text-center ">About me</h1>
    <div class="shadow p-3 mb-5 bg-body-tertiary rounded">
    <!-- 
        <h1 class="fw-bold text-center ">About me</h1>
        <div id="animation">
          <img
            src="https://i.postimg.cc/mgtRpNn2/profile2.jpg"
            class="col-md-6 mb-3 ms-md-3 rounded-circle w-25 "
            id="img2"
            alt="..."
          />
        </div>
        

        <p class="fs-5">
          I am a well minded and hardworking individual who loves a challenge,
          being unique and thinking out the box is what I do.
        </p>

        <p class="fs-5">
          I’m known for being a well rounded person who loves sports, being
          outdoors as well as being challenged with tasks. When given a task I
          strive to give my full potential towards it and ensure to complete
          whats needed from me.
        </p>

        <p class="fs-5">I’m a self motivated person who always takes 100% responsibility</p> -->

      
      
        
              <div class="row">
          <div class="col-lg-4">
            <img src="https://i.postimg.cc/mgtRpNn2/profile2.jpg" class="img-fluid" alt="">
          </div>
          <div class="col-lg-8 pt-4 pt-lg-0 content" id="about-info">
            <!-- <h3>Illustrator &amp; UI/UX Designer</h3> -->
            <p >
              Hello! I'm Caela Ward, a passionate and self-motivated Full Stack Web Developer with a love for frontend development and a knack for creating unique designs. 
            </p>
            <div class="row">
              <div class="col-lg-6">
                <ul>
                  <li><i class="bi bi-rounded-right"></i> <strong>City: </strong>CPT, Crawford </li>
                  <li><i class="bi bi-rounded-right"></i> <strong>Phone: </strong>+27 6983 9406</li>
                  <li><i class="bi bi-rounded-right"></i> <strong>D.O.B: </strong>24 February 2003</li>
                  <li><i class="bi bi-rounded-right"></i> <strong>Languages: </strong>English , Afrikaans </li>
                </ul>
              </div>
              <div class="col-lg-6">
                <ul>
                  <li><i class="bi bi-rounded-right"></i> <strong>Drivers:</strong> License</li>
                  <li><i class="bi bi-rounded-right"></i> <strong>Freelance:</strong> Available</li>
                  <li><i class="bi bi-rounded-right"></i> <strong>email:</strong> callaward32@gmail.com</li>
                  <!-- <li><i class="bi bi-rounded-right"></i> <strong>Linkdin:</strong>www.linkedin.com/in/calla-ward-1a5146276</li> -->
                </ul>
              </div>
            </div>
            <p>
             I am a driven and versatile Full Stack Web Developer with a passion for frontend development, a love for sports, and a commitment to making a positive impact. I am excited about the opportunity to contribute my skills and expertise to your team and to embark on new and exciting projects together. Let's build something incredible!
            </p>
        <div class="terminal-loader">
  <div class="terminal-header">
    <div class="terminal-title">Status</div>
    <div class="terminal-controls">
      <div class="control close"></div>
      <div class="control minimize"></div>
      <div class="control maximize"></div>
    </div>
  </div>
  <div class="text">Loading...</div>
</div>
          </div>
        </div>


      </div>

      <div class="container">
      <div class="row ">
  <div class="col-sm-6 mb-3  ">
    <h1>Hobbies</h1>
    <ul class="list-group list-group-flush">
  <li class="list-group-item">Gym</li>
  <li class="list-group-item">Hockey</li>
  <li class="list-group-item">Voluntary work</li>
  <li class="list-group-item">Watching Netflix</li>
  <li class="list-group-item">Exploring nature</li>
</ul>
  </div>
  <div class="col-sm-6">
    <h1>Passion</h1>
    <ul class="list-group list-group-flush">
  <li class="list-group-item">Learning new things</li>
  <li class="list-group-item">Meeting new people and connecting with others</li>
  <li class="list-group-item">I love animals, helping the and looking after them</li>
  <li class="list-group-item">Working hard and giving my full potential for everything</li>
  <li class="list-group-item">I enjoy any challege, whether it be for work or just life in general</li>
</ul>
</div>
      </div>  
      </div> 
      </div>   
</template>

<script>
export default {
   
}
</script>

<style scoped>
#about-info{
  text-align: left;
}

@keyframes blinkCursor {
  50% {
    border-right-color: transparent;
  }
}

@keyframes typeAndDelete {
  0%,
  10% {
    width: 0;
  }
  45%,
  55% {
    width: 6.2em;
  } /* adjust width based on content */
  90%,
  100% {
    width: 0;
  }
}

.terminal-loader {
  border: 0.1em solid #333;
  background-color: #1a1a1a;
  color: yellow;
  font-family: "Courier New", Courier, monospace;
  font-size: 1em;
  padding: 1.5em 1em;
  width: 12em;
  margin-left:26% ;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
}

.terminal-header {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1.5em;
  background-color: #333;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  padding: 0 0.4em;
  box-sizing: border-box;
}

.terminal-controls {
  float: right;
}

.control {
  display: inline-block;
  width: 0.6em;
  height: 0.6em;
  margin-left: 0.4em;
  border-radius: 50%;
  background-color: #777;
}

.control.close {
  background-color: #e33;
}

.control.minimize {
  background-color: #ee0;
}

.control.maximize {
  background-color: #0b0;
}

.terminal-title {
  float: left;
  line-height: 1.5em;
  color: #eee;
}

.text {
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  border-right: 0.2em solid yellow; /* Cursor */
  animation: typeAndDelete 4s steps(11) infinite,
    blinkCursor 0.5s step-end infinite alternate;
  margin-top: 1.5em;
}

</style>