import TheVolunteerFormComponent from './forms/TheVolForm.js'
import TheDocFormComponent from './forms/TheDocForm.js'
import TheOtherFormComponent from './forms/TheOtherForm.js'
import ThePatFormComponent from './forms/ThePatForm.js'

export default{
    name:'TheFormsComponent',
    template:`
    <div class="forms-top-comp">

    <div class="forms-aside">
    <div v-if="selectedForm === 'volunteer'">
    <h2>Looking to volunteer? You are appreciated.</h2></div>

    <div v-if="selectedForm === 'doctor'">
    <h2>Healthcare professionals are essential in our mission. We can't wait to hear from you.</h2></div>

    <div v-if="selectedForm === 'patient'">
    <h2>Need information on treatment? Reach out and we'll be in contact.</h2></div>

    <div v-if="selectedForm === 'other'">
    <h2>We implore you to reach out with any questions, comments, or concerns. <br>We look forward to hearing from you.</h2></div>

    </div>

            
    <div class="forms-container">
    
    <ul class="forms-controls">
        <li :class="{ 'active -dark -dark': selectedForm === 'volunteer' }" @click="showForm('volunteer')">Volunteer</li>
        <li :class="{ 'active -yellow -yellow': selectedForm === 'doctor' }" @click="showForm('doctor')">Doctor</li>
        <li :class="{ 'active -pink -pink': selectedForm === 'patient' }" @click="showForm('patient')">Patient</li>
        <li :class="{ 'active -green': selectedForm === 'other' }" @click="showForm('other')">Other</li>
    </ul>

    <volformcomp v-if="selectedForm === 'volunteer'"></volformcomp>
    <docformcomp v-if="selectedForm === 'doctor'"></docformcomp>
    <patformcomp v-if="selectedForm === 'patient'"></patformcomp>
    <otherformcomp v-if="selectedForm === 'other'"></otherformcomp>




    </div>
    </div>
    `,
    components:{
    volformcomp: TheVolunteerFormComponent,
    docformcomp: TheDocFormComponent,
    otherformcomp: TheOtherFormComponent,
    patformcomp: ThePatFormComponent,

    },
    data() {
        return {
            //"options"
            selectedForm: 'other'
        };
    },
    methods: {
        //passing option into this method from above ^
        //the selected option above is declared as "option" here
        showForm(option) {
            this.selectedForm = option;
        }
    }
}