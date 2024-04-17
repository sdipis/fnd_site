import TheEventModalComponent from '../news/TheEventModal.js';

export default {
    name: 'TheNewsComponent',
    components: {
        modalcomp: TheEventModalComponent,
    },
    template:`

    <!-- Modal Component -->
    <transition name="fade">

    <modalcomp 
        :show-lightbox="showLightbox" 
        :event-title="eventTitle" 
        :event-desc="eventDesc" 
        :project-display="projectDisplay" 
        :gallery-images="galleryImages"
        :gallery-id="galleryId"
        :event-type="eventType"
        @close-lightbox="closeLightbox"
        @navigate="handleNavigation"
        @get-project-images="handleGetProjectImages"
        ></modalcomp>
        </transition>

<div class="news-container bg-white">

    <ul class="news-controls">
    

      <li class="-dark"
      @click="showAll" :class="{ 'active all': filterType === 'all' }"><h3>All</h3></li>

      <li class="-blue"
      @click="showNews" :class="{ 'active news': filterType === 'news' }"><h3>News</h3></li>

      <li class="-yellow"
      @click="showEvents" :class="{ 'active event': filterType === 'events' }"><h3>Events</h3></li>

      <li class="-pink"
      @click="showAdmin" :class="{ 'active admin': filterType === 'admin' }"><h3>Admin</h3></li>

      <li class="-green"
      @click="showAds" :class="{ 'active ads': filterType === 'ads' }"><h3>Branding</h3></li>

    </ul>


    <ul class="events-list bg-white">

        <li 
        v-for="event in filteredEvents" 
        :key="event.id" 
        @mouseover="event.showOverlay = true"
        @mouseleave="event.showOverlay = false"
        :show-overlay="showOverlay"
        >
        
        <img :src="'resources/events/thumbs/'+event.featured_pic" >

        <div class="overlay-text" v-if="event.showOverlay">
            <div class="event-title"         
            :class="event.type">

                <h2 class="color-white">{{ event.title }}</h2>
                <a @click.prevent="getProject(event.id); getProjectImages(event.id,event.gallery_id); openLightbox();" class="event-btn fnd-button btn-blue span-white"><span>Read...</span></a>

            </div>

            <ul class="det">
            <li class="det-text color-black">
            <h2>{{ event.date }}</h2>
            </li>
            </ul>
            </div>


        </li>
    </ul>


    </div>

    `,
    computed: {
        filteredEvents() {
            if (this.filterType === 'all') {
                // Combine both eventsData and newsData arrays
                return [...this.eventsData];
            } else if (this.filterType === 'events') {
                return this.eventsData.filter(event => event.type === 'event');
            } else if (this.filterType === 'news') {
                return this.eventsData.filter(event => event.type === 'news');
            } else if (this.filterType === 'admin') {
                return this.eventsData.filter(event => event.type === 'admin');
            } else if (this.filterType === 'ads') {
                return this.eventsData.filter(event => event.type === 'ads');
            }
        }
    },
    data() {
        return {
            eventsData: [],

            filterType: 'ads',
            projectDisplay:null,
            eventTitle:null,
            eventDesc:null,
            showLightbox:false,
            currentEventIndex: 0,
            galleryImages: [], // Initialize an empty array to store gallery images
            galleryId: '',
            eventType: null,
            showOverlay: null

        };
    },
    mounted() {
        this.fetchEventData();
    },
    methods: {
        handleGetProjectImages(galleryId) {
            // Call the method to fetch project images based on the received galleryId
            this.getProjectImages(galleryId);
        },
        handleNavigation(direction) {
            if (direction === 'previous') {
                this.currentEventIndex = Math.max(this.currentEventIndex - 1, 0);
            } else if (direction === 'next') {
                this.currentEventIndex = Math.min(this.currentEventIndex + 1, this.filteredEvents.length - 1);
            }
            // Fetch the data for the new current event
            this.getProject(this.filteredEvents[this.currentEventIndex].id);
        },
        fetchEventData() {
            fetch('http://localhost:8888/fnd-api/public/events')
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    this.eventsData = [...data]; // Ensure reactivity
                })
                .catch(error => {
                    console.log(error);
                });
        },

        openLightbox() {
            console.log('opening lightbox');
            this.showLightbox = true;
        },
        closeLightbox() {
            this.showLightbox = false;
        },
        showAll() {
            this.filterType = 'all';
        },
        showNews() {
            this.filterType = 'news';
        },
        showEvents() {
            this.filterType = 'events';
        },
        showAdmin() {
            this.filterType = 'admin';
        },
        showAds() {
            this.filterType = 'ads';
        },
        getProject(eventId, galleryId) {
            console.log('getting event: ', eventId);
            // fetch(`https://idipi.ca/fnd/api/public/events/${eventId}`)
            fetch(`http://localhost:8888/fnd-api/public/events/${eventId}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const event = data;
                    this.eventTitle = event.title ? event.title : 'Title not available';
                    this.eventDesc = event.description ? event.description : 'Not available';
                    this.projectDisplay = event.featured_pic ? event.featured_pic : 'Image not available';
                    this.galleryId = event.gallery_id;
                    this.eventType=event.type;
                    console.log('gallery #' + event.gallery_id);

                })
                .catch(error => {
                    console.log(error);
                });
        },
        getProjectImages(galleryId) {
            console.log('getting project images: ', galleryId);
            // fetch(`https://idipi.ca/fnd/api/public/galleries/${galleryId}`)
            fetch(`http://localhost:8888/fnd-api/public/galleries/${galleryId}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    // Update the galleryImages array with the fetched images
                    this.galleryImages = data;
                })
                .catch(error => {
                    console.log(error);
                });
        },
        changeMainImage(image) {
            this.projectDisplay = 'resources/gallery/' + image.image;
        }
    }
};

