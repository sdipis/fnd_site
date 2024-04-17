export default {
    name:'TheAboutCardsComponent',
    data() {
        return {
            about_cards: [
                {
                    imagePath: 'resources/stock/struggle.jpg',
                    content: [
                        'Our Struggle', // h2 (everything below this renders as <p>)
                        'In 2016, Caelan Hagerty faced a daunting diagnosis of psychotic depression at just 13 years old. It was a journey his family never expected, one filled with uncertainty and fear.',
                        "Caelan's mother, Aimee, recalls, We found ourselves confronted by a situation that no parent is prepared for...",
                        'Like many families, they encountered the complexities of a mental health-care system in need of support. But instead of succumbing to despair, they chose to channel their experience into something powerful—a beacon of hope for others in similar situations.'
                    ]
                },
                {
                    imagePath: 'resources/stock/session.jpg',
                    content: [
                        'Our Vision', // h2 (everything below this renders as <p>)
                        'With unwavering determination, Aimee, husband Bill, and Caelan, alongside their dear friends Stuart du Kamp and Russell Levangie, embarked on a mission.', 
                        'They envisioned a world where young individuals battling severe mental health challenges could find solace and support without barriers. And thus, Foundation Sixty6 was born.',
                    ]
                },
                {
                    imagePath: 'resources/stock/future.jpg',
                    content: [
                        'Our Mission', // h2 (everything below this renders as <p>)
                        'Facilitate improved access to mental healthcare for youth between the ages of 16 and 25, who are suffering from psychosis, bipolar disorder, and schizophrenia, specifically within Southwestern Ontario.', 
                        'Provide reduced cost/ free counselling services, through a network of physicians, and mental healthcare providers.',
                        'Create long term, viable employment opportunities for severely mentally ill inidividuals.'
                    ]
                }
            ]
        };
    },
    template: `
    <section id="about-cards" class="bg-blue">
    

        <div class="aboutCards">

            <div v-for="(card, index) in about_cards" :key="index" class="about-card">
                <div class="about-card-image"
                :style="'background-image: url(' + card.imagePath + ');'">
                </div>
                <ul class="about-card-text bg-white">
                    <li v-for="(item, i) in card.content" :key="i">
                        <h2 class="title-fit brick-text-white" v-if="i === 0">{{ item }}</h2>
                        <p class="edge-blue" v-else>{{ item }}</p>
                    </li>
                </ul>
            </div>

        </div>
       
    </section>
    `
};
