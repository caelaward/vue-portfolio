<template>
  <div class="header">
    <h1 class="mt-2">About me</h1>
      </div>
   <div class="container clearfix pt-3" >
     
    <div class="shadow p-3 mb-5   rounded" id="aboutDiv">

      
        
              <div class="row">
          <div class="col-lg-4">
            <img src="https://i.ibb.co/Z6ndZrV/calla2.jpg" class="img-fluid" alt="">
          </div>
          <div class="col-lg-8 pt-4 pt-lg-0 content" id="about-info" >
            <span><h3 class="greeting ">Hello! I'm Caela Ward </h3></span>
            <p >
              As an aspiring web developer, I thrive on challenges and am fueled by self-motivation.
            </p>
            <div class="row">
              <div class="col-lg-6">
                <ul>
                  <li><i class="bi bi-rounded-right"></i> <strong>City: </strong>CPT, Crawford </li>
                  <li><i class="bi bi-rounded-right"></i> <strong>Phone: </strong>+27 76983 9406</li>
                  <li><i class="bi bi-rounded-right"></i> <strong>D.O.B: </strong>24 February 2003</li>
                  <li><i class="bi bi-rounded-right"></i> <strong>Languages: </strong>English , Afrikaans </li>
                </ul>
              </div>
              <div class="col-lg-6">
                <ul>
                  <li><i class="bi bi-rounded-right"></i> <strong>License:</strong>Yes</li>
                  <li><i class="bi bi-rounded-right"></i> <strong>Freelance:</strong> Available</li>
                  <li><i class="bi bi-rounded-right"></i> <strong>email:</strong> callaward32@gmail.com</li>
                  <!-- <li><i class="bi bi-rounded-right"></i> <strong>Linkdin:</strong>www.linkedin.com/in/calla-ward-1a5146276</li> -->
                </ul>
              </div>
            </div>
            <p >
               My love for sports taught me the value of teamwork, making me a dedicated team player in any project. I approach problems creatively, always thinking outside the box to find innovative solutions. Learning is my passion, and I eagerly embrace new technologies and techniques to enhance my skills.
In addition to my technical abilities, I have a deep appreciation for nature and animals, finding inspiration in their beauty and resilience. Whether I'm coding or exploring the outdoors, I always give my all and am ready to tackle any task with enthusiasm. Currently seeking opportunities to apply my talents and contribute to dynamic teams.
            </p>
       
            <a href="https://drive.google.com/file/d/1cYQ7omTCpmC_QvNI5HUjYlHYAJG082Va/view?usp=sharing" target="blank"><button class="btn btn-dark" id="cv_button">Download CV</button></a>
          </div>
        </div>

     
      </div>

      <div class="container">
      <div class="row ">
  <div class="col-sm-6 mb-3  ">
    <h1>Hobbies</h1>
    <ul class="list-group list-group-flush" id="hobbies">
  <li class="list-group-item">Gym</li>
  <li class="list-group-item">Hockey</li>
  <li class="list-group-item">Voluntary work</li>
  <li class="list-group-item">Exploring nature</li>
  <li class="list-group-item">Watching youtube about web developers</li>
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
.header {
	/* background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/95581/header.png'); */
	/*background-attachment: fixed;*/
	color: #FFF;
	max-height: 500px;
	height: 100%;
  background-color: black;
  box-shadow: 10px 10px 8px #888888

}

#about-info{
  text-align: left;
  background-color:beige
  /* margin-left: 2%; */
  
}
.greeting{
  margin-bottom:6%;
  margin-top:3%;
  margin-left:30%
}

#aboutDiv{
  background-color:beige
}

#cv_button{
  margin-left:40%
}


@media (max-width:768px ) {
  .greeting {
  margin-bottom:6%;
  margin-top:3%;
  margin-left:auto;
  /* margin:auto auto auto auto  */
  }
}




@media (max-width:768px ) {
  #cv_button{
  margin-left:auto
}
}
</style>