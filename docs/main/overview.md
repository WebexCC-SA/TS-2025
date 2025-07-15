---
#icon: material/folder-open-outline
icon: material/bullseye-arrow
---
<script>
    // Function to initialize and handle form submission
    function setupAttendeeForm() {
        const form = document.getElementById('attendee-form');
        const displayAttendee = document.getElementById('display-attendee');
        const attendeeInput = document.getElementById('attendee');

        // Load stored Attendee ID on page load
        const storedAttendeeID = localStorage.getItem('attendeeID');
        if (storedAttendeeID) {
            attendeeInput.value = storedAttendeeID;
            displayAttendee.textContent = storedAttendeeID;
        }

        // Restrict input to only allow three digits
        attendeeInput.addEventListener('input', function() {
            this.value = this.value.replace(/\D/g, '').slice(0, 3);
        });

        // Handle form submission
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            const attendeeIDInput = attendeeInput.value;

            if (attendeeIDInput && attendeeIDInput.length === 3) {
                // Store the Attendee ID in local storage
                localStorage.setItem('attendeeID', attendeeIDInput);

                // Update the displayed Attendee ID
                displayAttendee.textContent = attendeeIDInput;
            } else {
                alert('Please enter exactly 3 digits.');
            }
        });
    }

    // Wait for the DOM content to be fully loaded
    document.addEventListener('DOMContentLoaded', setupAttendeeForm);
    
    document.addEventListener('DOMContentLoaded', function() {
        const attendeeID = localStorage.getItem('attendeeID') || 'Not Set';
        const attendeePlaceholder = document.getElementById('attendee-id-placeholder');

        if (attendeePlaceholder) {
            attendeePlaceholder.textContent = attendeeID;
        }
    });
</script>

<style>
    /* Style for the button */
    button {
        background-color: black;
        color: white;
        border: none;
        padding: 10px 20px;
        cursor: pointer;
    }

    /* Style for the input element */
    input[type="text"] {
        border: 2px solid black;
        padding: 5px;
    }
</style>

<!-- Markdown content with embedded HTML -->
<div>
    <h2>Please submit the form below with your Attendee ID.</h2> 
    <h3>All configuration entries in the lab guide will be renamed to include your Attendee ID.</h3>
    <form id="attendee-form">
        <label for="attendee">Attendee ID:</label>
        <input type="text" id="attendee" name="attendee" placeholder="Enter 3 digits" required>
        <button type="submit">Save</button>
    </form>

    <br>

    <p>Your stored Attendee ID is: <b><span id="display-attendee">No ID stored</span></b></p>
</div>

# Overview

## Learning Objectives

Welcome to **"From Good to Great - Enhancing Customer Experience with the Webex Contact Center Flow Designer"** Instructor-led Lab

This advanced lab is designed to empower you with the skills to craft exceptional customer journeys using the **Webex Contact Center Flow Designer**. Over the course of this lab, you’ll work hands-on with features and integrations that bring intelligence and efficiency to every interaction. Take your time to explore and complete each step—you have 2 weeks of pod access.</br>

In this lab, you will:

- **Master Workflow Creation:** Learn how to build seamless workflows tailored to customer needs, including routing based on preferences and leveraging real-time data.

- **Leverage AI and Automation:** Explore integrations with pre-configured AI tools such as **Webex AI Agent** or interactive customer interactions and **Cisco Text-to-Speech** for dynamic responses.

- **Optimize Routing Logic:** Implement advanced routing capabilities, such as callback handling, last agent routing and using Global ariables to facilitate routing logic .

- **Invoking Flow API:** Advance decision-making by using the Analyzer database on the fly.

Additionally, you will explore side missions for optional deep dives into:

- Event handling functionality for agent efficiency.

- Creating Post Call survey to measure customer satisfaction

- Changing Contact Center flow logic by using your phone only.
    
## Disclaimer
The lab design and configuration examples provided are for educational purposes. For production design queries, please consult your Cisco representative or an authorized Cisco partner.
Let’s get started and discover how **Webex Contact Center Flow Designer** takes customer experiences from good to great!

