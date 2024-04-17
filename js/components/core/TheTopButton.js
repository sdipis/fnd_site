export default{
    name:'TheTopButtonComponent',
    template:`
    <div 
    class="back-to-top"
    @click="scrollToTop"
    >

    <svg viewBox="0 0 24 24" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><g class="st0" id="grid_system"></g> <g id="_icons"> <g> <path d="M12,2C6.5,2,2,6.5,2,12s4.5,10,10,10s10-4.5,10-10S17.5,2,12,2z M12,20c-4.4,0-8-3.6-8-8s3.6-8,8-8s8,3.6,8,8 S16.4,20,12,20z"></path> <path d="M12.7,9.3c-0.4-0.4-1-0.4-1.4,0l-3,3c-0.4,0.4-0.4,1,0,1.4s1,0.4,1.4,0l2.3-2.3l2.3,2.3c0.2,0.2,0.5,0.3,0.7,0.3 s0.5-0.1,0.7-0.3c0.4-0.4,0.4-1,0-1.4L12.7,9.3z"></path> </g> </g> </g></svg>
    </div>
    `,
    methods: {
        scrollToTop() {
          window.scrollTo({
            top: 0,
            behavior: 'smooth' // For smooth scrolling behavior
          });
        }
      }
}