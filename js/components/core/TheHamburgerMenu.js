export default{
    name:'TheHamburgerComponent',
    template:`
    <div class="onlyMobile hamburger-box">
    <div class="hamburger" @click="toggleMenu">
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
    </div>
    <transition name="slide">
      <div v-if="isOpen" class="mobileMenu onlyTablet">
        <ul>
          <li><a class="fnd-button btn-dark" href="./"><span>Home</span></a></li>
          <li><a class="fnd-button btn-blue" href="./about.html"><span>About</span></a></li>
          <li><a class="fnd-button btn-yellow" href="./contact.html"><span>Contact</span></a></li>
          <li><a class="fnd-button btn-pink" href="./news.html"><span>News</span></a></li>
          <li><a class="fnd-button btn-green" href="./services.html"><span>Services</span></a></li>
          
        </ul>
      </div>
    </transition>
  </div>
    `,
    data() {
        return {
          isOpen: false
        };
      },
      methods: {
        toggleMenu() {
          this.isOpen = !this.isOpen;
        }
      }
}