export default {
    name:'TheServiceCardsComponent',
    data() {
        return {
            cards: [
                {
                    imagePath: 'resources/images/place.png',
                    content: [
                        'Outreach', // h2 (everything below this renders as <p>)
                        'Facilitate improved access to mental healthcare for youth between the ages of 16 and 25, who are suffering from psychosis, bipolar disorder, and schizophrenia, specifically within Southwestern Ontario.',
                        'Provide reduced cost/ free counseling services, through a network of physicians, and mental healthcare providers.',
                        'Create long term, viable employment opportunities for severely mentally ill individuals.'
                    ]
                },
                {
                    imagePath: 'resources/images/place.png',
                    content: [
                        'Services', // h2 (everything below this renders as <p>)
                        'Facilitate improved access to mental healthcare for youth between the ages of 16 and 25, who are suffering from psychosis, bipolar disorder, and schizophrenia, specifically within Southwestern Ontario.',
                        'Provide reduced cost/ free counseling services, through a network of physicians, and mental healthcare providers.',
                        'Create long term, viable employment opportunities for severely mentally ill individuals.'
                    ]
                },
                {
                    imagePath: 'resources/images/place.png',
                    content: [
                        'Programs', // h2 (everything below this renders as <p>)
                        'Facilitate improved access to mental healthcare for youth between the ages of 16 and 25, who are suffering from psychosis, bipolar disorder, and schizophrenia, specifically within Southwestern Ontario.',
                        'Provide reduced cost/ free counseling services, through a network of physicians, and mental healthcare providers.',
                        'Create long term, viable employment opportunities for severely mentally ill individuals.'
                    ]
                },

            ]
        };
    },
    template: `
    <section id="mission" class="bg-blue">
        <div class="text-blocks service-blocks">

            <div v-for="(card, index) in cards" :key="index" class="imageBlock">
                <div class="image">
                    <img :src="card.imagePath" />
                </div>
                <ul class="longTextBlock">
                    <li v-for="(item, i) in card.content" :key="i">
                        <h2 v-if="i === 0">{{ item }}</h2>
                        <p v-else>{{ item }}</p>
                    </li>
                </ul>
            </div>

        </div>
    </section>
    `
};
