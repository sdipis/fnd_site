export default{
    name:'TheTickerComponent',
    template:`
    <div class="ticker" @mouseover="pauseAnimation" @mouseleave="resumeAnimation"  >
    
    <ul class="ticker__content" :style="{ animationDuration: animationDuration }" :class="{ 'paused': isPaused }">
  
        <li v-for="(event, index) in tickerData" :key="index"><h4>{{ event.title }}</h4></li>

    </ul>
  </div>
    `,
    data(){
      return{
      tickerData:[],
      defaultAnimationDuration: '20s',
      isPaused: false
      }
    },
    mounted() {
      this.fetchEventData();
    },
    computed: {
      animationDuration() {
        return this.tickerData.length > 0 ? `${this.defaultAnimationDuration * this.tickerData.length}s` : this.defaultAnimationDuration;
      }
    },
    methods:{
      fetchEventData() {
        fetch('http://localhost:8888/fnd-api/public/events')
          .then(res => res.json())
          .then(data => {
            this.tickerData = data; // Assign fetched data to tickerData property directly
            console.log(this.tickerData); // Log fetched data
          })
          .catch(error => {
            console.log(error);
          });
      },
      pauseAnimation() {
        this.isPaused = true;
      },
      resumeAnimation() {
        this.isPaused = false;
      }
    }

}