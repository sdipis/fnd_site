import TheHeaderComponent from '../js/components/core/TheHeader.js';
import TheFooterComponent from '../js/components/core/TheFooter.js';
import TheVideoBlockComponent from './components/home/TheVideoBlock.js';
import TheNewsComponent from './components/news/TheNewsPage.js';
import TheFormsComponent from './components/contact/TheForms.js';
import TheRoadmapComponent from './components/home/TheRoadmap.js';
import TheSubscribeComponent from './components/home/TheSubscribe.js';
import TheCrisisBoxComponent from './components/home/TheCrisisBox.js';
import TheConditionsComponent from './components/home/TheConditionsBox.js';
import TheContactCardsComponent from './components/contact/TheContactCards.js';
import TheServiceCardsComponent from './components/services/TheServiceCards.js';
import TheMissionComponent from './components/home/TheMission.js';
import TheHelpComponent from './components/home/TheHelp.js';
import TheAboutCardsComponent from './components/about/TheAboutCards.js';
import TheMerchComponent from './components/fun/TheMerch.js';
import TheTopButtonComponent from './components/core/TheTopButton.js';
import TheTickerComponent from './components/home/TheTicker.js';
import TheShapeSpawnerComponent from './components/fun/TheShapeSpawner.js';
import TheBricksComponent from './components/fun/TheBricks.js';
import TheBrickAd from './components/core/TheBrickAd.js';

let scrollerID = null;

const app = Vue.createApp({
    components:{
        brickadcomp: TheBrickAd,
        brickscomp: TheBricksComponent,
        shapecomp: TheShapeSpawnerComponent,
        tickercomp: TheTickerComponent,
        topbuttoncomp: TheTopButtonComponent,
        missioncomp: TheMissionComponent,
        helpcomp: TheHelpComponent,
        headercomp: TheHeaderComponent,
        footercomp: TheFooterComponent,
        videoblockcomp: TheVideoBlockComponent,
        contactformscomp: TheFormsComponent,
        newscomp: TheNewsComponent,
        roadmapcomp: TheRoadmapComponent,
        subscribecomp: TheSubscribeComponent,
        crisiscomp: TheCrisisBoxComponent,
        conditionscomp: TheConditionsComponent,
        contactcardscomp: TheContactCardsComponent,
        servicecardscomp: TheServiceCardsComponent,
        //about
        aboutcardscomp: TheAboutCardsComponent,
        //fun stuff
        shapescomp: TheShapeSpawnerComponent,
        merchcomp: TheMerchComponent
    },
    data(){
        return{
            scrollingPaused:false,
            autoScrollEnabled: false,
            scrollEnabled:false,
            scrollerID:null,
            backgroundImageSize: '100% auto',
            backgroundPositionY: 0,
            backgroundOpacity: 1



        }
    },
    methods:{
        // Function to handle spacebar key press
        handleSpacebar(event) {
            // Check if spacebar is pressed
            if (event.keyCode === 83) {
                // Toggle between pausing and starting scrolling
                if (this.scrollingPaused) {
                    this.resumeScroll();
                } else {
                    this.pauseScroll();
                }
            }
            if (event.keyCode === 49) {
                window.location.href = "index.html"; // Redirect to about.html
            }
            if (event.keyCode === 50) {
                window.location.href = "about.html"; // Redirect to about.html
            }
            if (event.keyCode === 51) {
                window.location.href = "contact.html"; // Redirect to about.html
            }
            if (event.keyCode === 52) {
                window.location.href = "news.html"; // Redirect to about.html
            }
            if (event.keyCode === 53) {
                window.location.href = "services.html"; // Redirect to about.html
            }

        },
        startScroll() {

            this.autoScrollEnabled=true;
        
            if(!this.scrollingPaused || scrollerID === null){
                let triggerDistance = 5;
        
  
                function scrollStep() {
  
                  //only scroll if screenwidth is above 768px (non mobile)
                  // if (window.innerWidth > 768) {
                  window.scrollBy(0, 
                    4 //scrolling speed (auto scroller)
                    );
                  // }
                  //stop scrolling when user gets to the bottom of page
                  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - triggerDistance) {
                    myVue.stopScroll();
                    myVue.scrollingPaused=true;
  
                  } else {
                    scrollerID = requestAnimationFrame(scrollStep);
                  }
                }
        
                scrollerID = requestAnimationFrame(scrollStep);
              }
        },
        stopScroll() {
          //clear scroll interval
          clearInterval(scrollerID);
          //reset scrollerID to null so scrolling can be started again
          scrollerID = null;
        },
        pauseScroll() {
            //pause scroll (when user opens lightbox)
            this.scrollingPaused = true;
            cancelAnimationFrame(scrollerID);
          },
          pauseAutoScroll() {
            //turns off auto scroll (scrolling is enabled every time lightbox closes if this isnt here)
            this.scrollingPaused = true;
            this.autoScrollEnabled = false;
            cancelAnimationFrame(scrollerID);
          },
          resumeScroll() {
            this.scrollingPaused = false;
            scrollerID = null;
            this.startScroll();
          },



          handleScroll() {
            // Calculate the scroll position
            const scrollPosition = window.scrollY || window.pageYOffset;
            // Calculate the background size based on the scroll position (adjust as needed)
            const backgroundSize = 100 + scrollPosition * 0.01 + '%';
            // Update the background size property
            this.backgroundImageSize = `${backgroundSize} auto`;
            this.backgroundPositionY = scrollPosition * 0.5 + '%';
            this.backgroundOpacity = 1 - scrollPosition * 0.002;


        },
    },
    mounted() {
                // Add event listener for scroll event
                window.addEventListener('scroll', this.handleScroll);
                // Add initial check for scroll position
                this.handleScroll();
                // Add event listener for keydown event
                window.addEventListener('keydown', this.handleSpacebar);
    },
    beforeUnmount() {
        // Remove event listeners when the component is about to be destroyed
        window.removeEventListener('scroll', this.handleScroll);
        window.removeEventListener('keydown', this.handleSpacebar);
    }
});
app.mount('#app');
