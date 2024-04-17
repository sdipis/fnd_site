export default {
    name: 'TheEventModalComponent',
    props: ['showLightbox', 'eventTitle', 'eventDesc', 'projectDisplay', 'galleryImages', 'galleryId', 'eventType'],
    template: `
        <div class="lightbox" v-if="showLightbox" :class="eventType">

        <ul class="lightboxControls">
        <li @click="closeLightbox">
        <svg height="40px" width="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z" stroke="#1C274C" stroke-width="1.5"></path> <path d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>
        </li>
        <li @click="goToPreviousEvent">
        <svg height="40px" width="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M6.75 5.25V18.75H8.25L8.25 5.25H6.75ZM9.14792 12L18 17.9014L18 6.09862L9.14792 12ZM16.5 8.9014L16.5 15.0986L11.8521 12L16.5 8.9014Z" fill="#080341"></path> </g></svg></li>
        <li @click="goToNextEvent">
        <svg height="40px" width="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M17.25 18.75L17.25 5.25H15.75L15.75 18.75H17.25ZM14.8521 12L6 6.0986L6 17.9014L14.8521 12ZM7.5 15.0986L7.5 8.90138L12.1479 12L7.5 15.0986Z" fill="#080341"></path> </g></svg></li>
        </ul>

            <div class="lightboxImage"
            :style="'background-image:url(resources/events/thumbs/'+projectDisplay+')'">
            
            
            <!--<ul  v-if="galleryImages.length > 0" class="event-gallery">


            <li v-for="image in galleryImages" :key="image.gallery_id">
            <img :src="'resources/gallery/' + image.image" :alt="image.caption" />
            </li>
        

            </ul>-->
            
            </div>

            <div class="lightboxText">
                <h2 class="lightboxh2">{{ eventTitle }}</h2>
                <div class="event-body" v-html="eventDesc"></div>
            </div>

            



        </div>
    `,
    methods: {
        closeLightbox() {
            //emitting an event is like sending an instruction to the parent component
            //So we can close the lightbox even though the actual lightbox is rendered in the newsComp
            this.$emit('close-lightbox');
        },
        goToPreviousEvent() {
            console.log('Current galleryId:', this.galleryId);
            // Emit an event to notify the parent component to navigate to the previous event
            this.$emit('navigate', 'previous');
            // Update galleryId before fetching project images
            this.$nextTick(() => {
                this.$emit('get-project-images', this.galleryId);
            });
        },
        
        goToNextEvent() {
            console.log('Current galleryId:', this.galleryId);
            // Emit an event to notify the parent component to navigate to the next event
            this.$emit('navigate', 'next');
            // Update galleryId before fetching project images
            this.$nextTick(() => {
                this.$emit('get-project-images', this.galleryId);
            });
        }
        
        
    }
};
