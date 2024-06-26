

 <template>
    <div class="header">
    <h1 class="mt-2 mb-5">Experience </h1>
      </div>
      <section id="resume" class="resume">
    <div class="container">
     
      <div class="row">
        <div class="col-lg-6">
          <div class="resume-item pb-0">
            <h4>LC Studio</h4>
            <h5>2024</h5>
            <p><em>I upskilled myself at LC Studio in 2024. I learnt about networking as well as how to conduct myself in the work place.</em></p>
           
          </div>
         
          <div class="resume-item">
            <h4>Ticket Pro</h4>
            <h5>2022 - 2024</h5>
            <p><em>Weekends I work with Ticket Pro as a ticket scanner administrator. I started with Ticket Pro in 2022 and I currentlty still do weekends jobs when needed.</em></p>
                     </div>
          <div class="resume-item">
            <h4>Children's Montesorri Workshop</h4>
            <h5>2023 </h5>
            <p><em>I worked as an assistant teacher for four months in 2023. I left the school once I got offered an oportunity to study at Life Choices Academy full-time</em></p>
           </div>
        </div>
        <div class="col-lg-6">
          <div class="resume-item">
            <h4>Au-pair</h4>
            <h5>2022</h5>
            <p><em>Done au pair work during 2022 for eight months looking after an 4 month old. I stopped the au pair journey once the parents were ready to move on to crèche.</em></p>

          </div>
          <div class="resume-item">
            <h4>ARCC</h4>
            <h5>2022</h5>
            <p><em>Done data capturing part time during holidays in 2022</em></p>
            
          </div>
          <div class="resume-item">
            <h4>Voluntary work</h4>
            <h5>2020-2022</h5>
            <p><em>Volunteered at different children's Homes during 2020-2022 as well as handed out food for the less fortunate</em></p>
            
          </div>
        </div>
      </div>
    </div>
  </section>

      <div v-if="$store.state.resume.length>0">
     <div class="container" id="resume-container">
     
      
     </div>
     
     
     <div>

       <div class="row">
         <h2 class="resume-title" id="header">Education</h2>
         <div v-for="education in $store.state.education" :key="education"  id="eduInfo" class="col">
                <div class="resume-item">
                  <h4> {{education.name}}</h4>
                  <h5>{{education.time}}</h5>
                  <p><em>{{education.description}}</em></p>
         </div>
       </div>
       </div>
         
</div> 
  
   <h2 class="resume-title" id="header">Skills</h2>


      </div>

  <div v-else>
    <SpinnerComp/>
    </div>


<div class="container">


   
   <div class="content">
      <!-- card -->
      <div class="card">
         
            <img src="https://cdn-thumbs.imagevenue.com/bc/2b/22/ME17GHK7_t.png" class="h-50">
            <p class="title">HTML</p>
            
         
      </div>
      <!-- end card -->
      <!-- card -->
      <div class="card">
         
           <img src="https://cdn-thumbs.imagevenue.com/96/1f/78/ME17GHKQ_t.png" alt="" class="h-50">
            <p class="title">CSS</p>
          
         
      </div>
      <!-- end card -->
      <!-- card -->
      <div class="card">
         
            <img src="https://cdn-thumbs.imagevenue.com/94/4e/bd/ME17GHKV_t.png" alt="" class="h-50">
            <p class="title">Bootstrap </p>
           
         
      </div>
      <!-- end card -->
      <!-- card -->
      <div class="card">
         
         <img src="https://cdn-thumbs.imagevenue.com/ba/0a/3b/ME17GMRD_t.png" alt="" class="h-50">
            <p class="title">Git</p>
            
         
      </div>
      <!-- end card -->
      <!-- card -->
      <div class="card">
         
            <img src="https://cdn-thumbs.imagevenue.com/72/62/7b/ME17GHLJ_t.png" alt="" class="h-50">
            <p class="title">Javascript</p>
            
         
      </div>
      <!-- end card -->
      <!-- card -->
      <div class="card">
         
            <img src="https://i.ibb.co/hshr3BT/mysql-removebg-preview.png" alt="" class="h-50">
            <p class="title">Mysql</p>
            
         
      </div>
      <!-- end card -->
      <!-- card -->
      <div class="card">
         
            <img src="https://iili.io/JhtNltI.png " alt="" class="h-50">
            <p class="title">Node.Js</p>
            
         
      </div>
      <!-- end card -->
      

      
   

   
   </div>

   <h1 class="resume-title" id="header">Achievements </h1>
   <div class="content">

   
   <!-- card -->
   <div class="card">
         
         <img src="https://i.ibb.co/XYGyxCS/SCRUM.png" alt="" class="h-50">
        
         
      
   </div>
   
   <!-- end card -->
   <!-- card -->
   <div class="card">
         
         <img src="https://i.ibb.co/RDRBBHB/network-technician-career-path-1.png" alt="" class="h-50">
        
         
      
   </div>
   
   <!-- end card -->
   <!-- card -->
   <div class="card">
         
         <img src="https://i.ibb.co/QcC8Pr5/Figma-1.png" alt="" class="h-50">
        
         
      
   </div>
   
   <!-- end card -->
   <div class="card">
         
         <img src="https://i.ibb.co/MNTCH5k/operating-systems-basics-1.png" alt="" class="h-50">
        
         
      
   </div>
   
   <!-- end card -->

  </div>
  </div>
 </template>

 
<script>
  
  import SpinnerComp from '../components/SpinnerComp.vue' 
  export default {
    components:{
    SpinnerComp
    },
    computed:{
        fetchDataResume(){
            this.$store.dispatch('fetchDataResume')
        },
        fetchDataSkills(){
          this.$store.dispatch('fetchDataSkills')
        },
         fetchDataEducation(){
          this.$store.dispatch('fetchDataEducation')
        }
        

    },
    mounted(){
        this.fetchDataResume
        this.fetchDataSkills
        this.fetchDataEducation
     
    }
}

</script>

 
 <style scoped >

 #eduInfo{
  background-color: beige;
  padding:5%
 }

 
 
 .header {
	/* background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/95581/header.png'); */
	/*background-attachment: fixed;*/
	color: #FFF;
	max-height: 500px;
	height: 100%;
  background-color: black;
  box-shadow: 10px 10px 8px #888888


}

#card_bod{
  box-shadow:#45505b
}

#card_bod::before {
  margin-left: auto;
}

#card_bod::after, #card_bod::before {
  content: '';
  width: 0%;
  height: 2px;
  background:maroon;
  display: block;
  transition: 0.5s;
}

#card_bod:hover::after, #card_bod:hover::before {
  width: 100%;
}


  .resume-title {
  font-size: 26px;
  font-weight: 700;
  margin-top: 20px;
  margin-bottom: 20px;
  color: #45505b;
}

 .resume-item {
  padding: 0 0 20px 20px;
  margin-top: -2px;
  margin-left:2%;
  border-left: 2px solid black;
  position: relative;
  text-align: left
}

 .resume-item h4 {
  line-height: 18px;
  font-size: 18px;
  font-weight: 600;
  text-transform: uppercase;
  /* font-family: "Poppins", sans-serif; */
  color: black;
  margin-bottom: 10px;
  text-align: left
}

 .resume-item h5 {
  font-size: 16px;
  background: #f7f8f9;
  padding: 5px 15px;
  display: inline-block;
  font-weight: 600;
  margin-bottom: 10px;
}

 .resume-item::before {
  content: "";
  position: absolute;
  width: 16px;
  height: 16px;
  border-radius: 50px;
  left: -9px;
  top: 0;
  background: #fff;
  border: 2px solid black;
}


body {
   width: 100vw;
   background-color: #1D1D1D;
   margin: 0;
   font-family: helvetica;
}

/* .about {
   $cubic: cubic-bezier(0.64, 0.01, 0.07, 1.65);
   $transition: 0.6s $cubic;
   $size: 40px;
   position: fixed;
   z-index: 10;
   bottom: 10px;
   right: 10px;
   width: $size;
   height: $size;
   display: flex;
   justify-content: flex-end;
   align-items: flex-end;
   transition: all 0.2s ease; */

   /* .bg_links {
      width: $size;
      height: $size;
      border-radius: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: rgba(#fff, 0.2);
      border-radius: 100%;
      backdrop-filter: blur(5px);
      position: absolute;
   } */

   /* .logo {
      width: $size;
      height: $size;
      z-index: 9;
      background-size: 50%;
      background-repeat: no-repeat;
      background-position: 10px 7px;
      opacity: 0.9;
      transition: all 1s 0.2s ease;
      bottom: 0;
      right: 0;
   } */

   .social {
      opacity: 0;
      right: 0;
      bottom: 0;

    
      
   }

   /* &:hover {
      width: 105px;
      height: 105px;
      transition: all $transition;

      .logo {
         opacity: 1;
         transition: all 0.6s ease;
      }

      .social {
         opacity: 1;

         .icon {
            opacity: 0.9;
         }

         &:hover {
            background-size: 28px;
            .icon {
               background-size: 65%;
               opacity: 1;
            }
         }

         &.portfolio {
            right: 0;
            bottom: calc(100% - 40px);
            transition: all 0.3s 0s $cubic;
            
         }

         &.dribbble {
            bottom: 45%;
            right: 45%;
            transition: all 0.3s 0.15s $cubic;
           
            }
         }

         &.linkedin {
            bottom: 0;
            right: calc(100% - 40px);
            transition: all 0.3s 0.25s $cubic;
           
            }
         }
      } */
 

.wrapper {
   width: 100vw;
   margin: 0 auto;
   height: 400px;
   background-color: #161616;
   display: flex;
   justify-content: center;
   align-items: center;
   position: relative;
   transition: all 0.3s ease;
}

@media screen and (max-width: 767px) {
   .wrapper {
      height: 700px;
   }
}

.content {
   max-width: 1024px;
   width: 100%;
   margin-left:5%;
   margin: 0 auto;
   display: flex;
   justify-content: center;
   align-items: center;
   
}

@media screen and (max-width: 767px) {
   .content {
     
      flex-direction: column;
   }
}

.card {
   width: 100%;
   max-width: 300px;
   min-width: 200px;
   height: 250px;
   background-color: #292929;
   margin: 10px;
   border-radius: 10px;
   box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.24);
   border: 2px solid rgba(7, 7, 7, 0.12);
   font-size: 16px;   
   transition: all 0.3s ease;
   position: relative;
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   cursor: pointer;
   transition: all 0.3s ease;
   
}

.icon {
   margin: 0 auto;
   width: 100%;
   height: 80px;
   max-width:80px;
   background: linear-gradient(90deg, #FF7E7E 0%, #FF4848 40%, rgba(0, 0, 0, 0.28) 60%);
   border-radius: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
   color: white;
   transition: all 0.8s ease;
   background-position: 0px;
   background-size: 200px;
}

.material-icons.md-18 { font-size: 18px; }
.material-icons.md-24 { font-size: 24px; }
.material-icons.md-36 { font-size: 36px; }
.material-icons.md-48 { font-size: 48px; }

.card .title {
   width: 100%;
   margin: 0;
   text-align: center;
   margin-top: 30px;
   color: white;
   font-weight: 600;
   text-transform: uppercase;
   letter-spacing: 4px;
}

.card .text {
   width: 80%;
   margin: 0 auto;
   font-size: 13px;
   text-align: center;
   margin-top: 20px;
   color: white;
   font-weight: 200;
   letter-spacing: 2px;
   opacity: 0;
   max-height:0;
   transition: all 0.3s ease;
}

.card:hover {
   height: 270px;
}

.card:hover .info {
   height: 90%;
}

.card:hover .text {
   transition: all 0.3s ease;
   opacity: 1;
   max-height:40px;
}

.card:hover .icon {
   background-position: -120px;
   transition: all 0.3s ease;
}

.card:hover .icon i {
   background: linear-gradient(90deg, #FF7E7E, #FF4848);
   -webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
   opacity: 1;
   transition: all 0.3s ease;
}

.content{
  /* overflow-x: scroll; */
  flex-wrap: wrap; 
}
/* 
body {
  background: #e4ebf4;
  padding: 2rem;
}
h1 {
  font-family: sans-serif;
}
.olcards,
.olcards * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.olcards {
  list-style: none;
  counter-reset: cardCount;
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  --cardsGap: 1rem;
  gap: var(--cardsGap);
  padding-bottom: var(--cardsGap);
}
.olcards li {
  counter-increment: cardCount;
  display: flex;
  color: white;
  --labelOffset: 1rem;
  --arrowClipSize: 1.5rem;
  margin-top: var(--labelOffset);
}

.olcards li::before {
  content: counter(cardCount, decimal-leading-zero);
  background: white;
  color: var(--cardColor);
  font-size: 2em;
  font-weight: 700;
  transform: translateY(calc(-1 * var(--labelOffset)));
  margin-right: calc(-1 * var(--labelOffset));
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-inline: 0.5em;
}

.olcards li .content {
  background-color: var(--cardColor);
  --inlinePadding: 1em;
  --boxPadding: 0.5em;
  display: grid;
  padding: var(--boxPadding) calc(var(--inlinePadding) + var(--arrowClipSize))
    var(--boxPadding) calc(var(--inlinePadding) + var(--labelOffset));
  grid-template-areas:
    "icon title"
    "icon text";
  gap: 0.25em 1em;
  clip-path: polygon(
    0 0,
    calc(100% - var(--arrowClipSize)) 0,
    100% 50%,
    calc(100% - var(--arrowClipSize)) 100%,
    calc(100% - var(--arrowClipSize)) calc(100% + var(--cardsGap)),
    0 calc(100% + var(--cardsGap))
  );
  position: relative;
}
.olcards li .content::before {
  content: "";
  position: absolute;
  width: var(--labelOffset);
  height: var(--labelOffset);
  background: var(--cardColor);
  left: 0;
  bottom: 0;
  clip-path: polygon(0 0, 100% 0, 0 100%);
  filter: brightness(0.75);
}
.olcards li .content::after {
  content: "";
  position: absolute;
  height: var(--cardsGap);
  width: var(--cardsGap);
  background: linear-gradient(to right, rgba(0, 0, 0, 0.25), transparent 50%);
  left: 0;
  top: 100%;
}
.olcards li .icon {
  grid-area: icon;
  align-self: center;
  font-size: 2em;
}
.olcards li .content .title {
  grid-area: title;
  font-size: 1.25em;
  font-weight: 700; 
}
.olcards li .content .text {
  grid-area: text;
}

  */
 </style>

