export default{
    name:'TheConditionsComponent',
    data() {
        return {
          openIndex: null,
          conditions: [
            {
              imagePath: 'resources/svg/prints/2.svg',
              content: [
                'Bipolar',
                'Bipolar disorder involves extreme mood swings, from manic highs to depressive lows.',
              ]
            },
            {
              imagePath: 'resources/svg/prints/1.svg',
              content: [
                'Schizophrenia',
                'Schizophrenia is a chronic mental disorder marked by hallucinations, delusions, disorganized thinking, and impaired social functioning.',
              ]
            },
            {
              imagePath: 'resources/svg/prints/3.svg',
              content: [
                'Psychosis',
                'Psychosis is marked by a disconnect from reality, featuring hallucinations, delusions, and disorganized thinking.',
              ]
            },
          ]
        };
      },
    template:`


    <div class="accordion">
    <div v-for="(card, index) in conditions" :key="index" class="accordion-item">

        <h2 class="color-white brick-text-blue card-header">{{ card.content[0] }}</h2>



      <!--<div class="accordion-content">
      <p v-for="(item, i) in card.content.slice(1)" :key="i" class="accordion-text">{{ item }}</p>

    </div>-->

    </div>
  </div>

    `
}