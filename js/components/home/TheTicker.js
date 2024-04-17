export default {
  name: 'TheTickerComponent',
  template: `
    <div class="ticker">

      <ul class="ticker__content">
      <h2 class="noMobile grid-title sect-title color-white">Events</h2>
      <h2 class="noMobile grid-title sect-title color-white">News</h2>

        <li v-for="(event, index) in tickerData" :key="index"
        :class="event.featured"
        class="bg-white"
        >
        <div class="ticker-image">
        <img :src="'resources/events/thumbs/'+event.featured_pic" >
        </div>
        <div 
        :class="event.type"

        class="ticker-text">
        <h4>{{ event.title }}</h4>
        <p class="line-clamp">{{ event.short }}</p>
        </div>
        </li>
      </ul>
    </div>
  `,
  data() {
    return {
      tickerData: []
    };
  },
  mounted() {
    this.fetchEventData();
  },
  methods: {
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
    }
  }
}
