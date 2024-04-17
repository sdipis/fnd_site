export default {
    name: 'TheOtherFormComponent',
    template: `
        <form @submit.prevent="handleSubmit" class="edge-green">
            </br>
            <label for="name">Name:</label>
            <input placeholder="Type your name here" type="text" id="name" v-model="name" required>

            <label for="email">Email:</label>
            <input placeholder="Type your email here" type="email" id="email" v-model="email" required>

            <label for="message">Message:</label>
            <input placeholder="Type your message here" type="text" id="message" v-model="message">

            <button type="submit" class="fnd-button btn-dark"><span>Submit</span></button>
        </form>
    `,
    methods: {
        async handleSubmit() {
            const formData = new FormData();
            formData.append('name', this.name);
            formData.append('email', this.email);
            formData.append('message', this.message);

            try {
                const response = await fetch('includes/other_submit_form.php', {
                    method: 'POST',
                    body: formData
                });
                if (response.ok) {
                    alert('Form submitted successfully!');
                    // Clear form fields if needed
                    this.name = '';
                    this.email = '';
                    this.message = '';
                } else {
                    throw new Error('Form submission failed');
                }
            } catch (error) {
                console.error('Error submitting form:', error);
                alert('An error occurred while submitting the form. Please try again later.');
            }
        }
    },
    data() {
        return {
            name: '',
            email: '',
            message: ''
        };
    }
}
