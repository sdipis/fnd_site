export default {
    name:'TheMerchComponent',
    data() {
        return {
            products: [
                {
                    imagePath: 'resources/products/f_shirt_1.jpg',
                    title: 'Show your support',
                    description: 'Foundation merch is available.',
                },
                {
                    imagePath: 'resources/products/m_shirt_1.jpg',
                    title: 'Helping those in need',
                    description: 'Every purchase helps us help those in need.',
                },
                {
                    imagePath: 'resources/products/fnd_mug.jpg',
                    title: 'Take sips of comfort,',
                    description: 'and gulps of relief with a Foundation Sixty6 ceramic mug.',
                }


            ]
        };
    },
    template: `
    <section class="merch-section section-pad" class="bg-green">

        <div v-for="(card, index) in products" :key="index" class="merch-box">

            <div  class="about-card">
                <div class="merch-card-image">
                
                <img :src="card.imagePath" />
                </div>
                
                <div class="merch-card-text bg-white">
                <h2>{{ card.title }}</h2><br><br>
                <p>{{ card.description }}</p>
                </div>
            </div>

        </div>
    </section>
    `
};
