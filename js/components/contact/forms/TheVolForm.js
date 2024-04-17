export default{
    name:'TheVolunteerFormComponent',
    template:`
    <form @submit.prevent="handleSubmit" class="edge-dark">
    </br>
    <label for="name">Name:</label>
    <input placeholder="Type your name here"  type="text" id="name" name="name" required>

    <div class="form-row-def">
    <label for="interest">I am Interested in volunteering:</label>
    <input type="checkbox" id="interest" name="interest" required>
    </div>

    <div class="form-row-def">
    <label for="fundraise">I am interested in fundraising:</label>
    <input type="checkbox" id="fundraise" name="fundraise" required>
    </div>

    <label for="email">Email:</label>
    <input placeholder="Type your email here" type="email" id="email" name="email" required>

    <label for="phone">Phone:</label>
    <input placeholder="Type your phone number here"  type="text" id="phone" name="phone">

    <label for="availability">Availability:</label>
    <select id="availability">
    <option value="anytime">Anytime</option>
    <option value="weekday">Weekdays only</option>
    <option value="weekend">Weekends only</option>
    <option value="specific">Specific days</option>
  </select>
  
    <label for="interests">Interests:</label>
    <textarea placeholder="Type your interests/ experience here"  id="interests" name="interests" required></textarea>

    <button type="submit" class="fnd-button btn-dark"><span>Submit</span></button>
    </form>

    `,
    methods: {
        async handleSubmit() {
            const formData = new FormData();
            formData.append('name', this.name);
            formData.append('email', this.email);
            formData.append('phone', this.phone);
            formData.append('availability', this.availability);
            formData.append('interests', this.interests);

            try {
                const response = await fetch('includes/vol_submit_form.php', {
                    method: 'POST',
                    body: formData
                });
                if (response.ok) {
                    alert('Form submitted successfully!');
                    // Clear form fields if needed
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
            phone: '',
            availability: '',
            interests: ''
        };
    }
}