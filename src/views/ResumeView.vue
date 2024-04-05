

 <template>
    <div class="header">
    <h1 class="mt-2">Experience and Education</h1>
      </div>
      <div v-if="$store.state.resume.length>0">
     <div class="container" id="resume-container">
     
      <h2 class="resume-title">Experience</h2>
      <div v-for="resume in $store.state.resume" :key="resume" >
   
     <div class="shadow-lg p-3 mb-5 bg-body-tertiary rounded fw-bold" id="card_bod">
      {{resume.experience}}
     <p>{{resume.description}}</p>
     </div>
     
    </div>
     </div>
     
     <h2 class="resume-title">Education</h2>
     <div v-for="education in $store.state.education" :key="education"  id="eduInfo">
            <div class="resume-item">
              <h4> {{education.name}}</h4>
              <h5>{{education.time}}</h5>
              <p><em>{{education.description}}</em></p>
     </div>
         
</div> 
  
   <h2 class="mt-5 mb-5">Skills</h2>

 <div class="container " id="skill-container">
     <div class="row row-cols-1 row-cols-md-3 g-4 ">
 <div v-for="skill in $store.state.skills" :key="skill" >
            
            <div class="col-sm-12 mb-3 mb-sm-0 ">
              <div class="card " id="card_bod" >
                <div class="card-body ">
                  <img :src="skill.image" class="img-fluid rounded-start float-start w-25" alt="...">
                 <h5 class="card-title ">{{skill.type}}</h5>
                  <p class="card-text ">{{skill.description}}</p>
                </div>
              </div>
            </div>
     </div>
 </div>
 </div>

      </div>

  <div v-else>
    <SpinnerComp/>
    </div>

    <body>
	<h1>Ordered List Arrow Cards</h1>
	<ol class="olcards">
    <div v-for="resume in $store.state.resume" :key="resume" >
		<li style="--cardColor:#fc374e">
			<div class="content">
				<div class="icon">😀</div>
				<div class="title"> {{resume.experience}}</div>
				<div class="text">{{resume.description}}</div>
			</div>
		</li>
   
    </div>
	</ol>
</body>


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
 
 .header {
	background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/95581/header.png');
	/*background-attachment: fixed;*/
	color: #FFF;
	max-height: 500px;
	height: 100%;

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

#eduInfo{
 margin-left: 6%;
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
  /* font-weight: 700; */
}
.olcards li .content .text {
  grid-area: text;
}

 
 </style>

