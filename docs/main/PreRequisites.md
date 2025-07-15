---
#icon: material/folder-open-outline
icon: material/bullseye-arrow
---

## Learning Objectives
1. Ensure that you have **"POD <span class="attendee-id-placeholder">Your_Attendee_ID</span>.pdf"** printed copy with instructions and credentials to access your lab. If you do not, please ask your lab proctor now.
2. Understand your configuration instructions
3. Familiarize yourself how we will use Google Chrome profiles to simulate various scenarios covered in the next labs.

### Know before you start

1. We will be using a shared lab tenant for simulations, meaning all attendees will work within the same Webex Contact Center environment. To avoid conflicts, ensure that any entities you configure are tagged with the Attendee ID assigned to you.
    
    <details><summary>WxCC Schema</summary>![Profiles](../graphics/overview/WxCC_Schema.png)</details>

2. The majority of the configuration in Control Hub is already set up, allowing you to focus primarily on Flow Design. Of course, there may still be some elements to adjust, but these should be minimal, letting you concentrate on building and refining the flow logic rather than spending time on initial setup.
3. The Agents have been configured for you. You will be performing the rest of the configurations to route voice calls
4. All your configurations should contain your attendee ID so the lab users don't step over each other's configurations
5. Each of you has been provided with the phone number to dial (Entry point DN), 1 Agent, 1 Admin and 1 Supervisor.
6. We are going to use built-in Cisco Text to Speech for playing all messages in the lab.
7. Please ask for help when you need it. You can do it by clicking on **"Ask a Question"** or by raising your hand and calling the proctor.

---

### Predefined configuration

> Entry Point/Channels:  **<span class="attendee-id-container"><span class="attendee-id-placeholder" data-suffix="_Channel">Your_Attendee_ID</span>_Channel<span class="copy"></span></span>**

> Queue:  **<span class="attendee-id-container"><span class="attendee-id-placeholder" data-suffix="_Queue">Your_Attendee_ID</span>_Queue<span class="copy"></span></span>**

> Agent:   **<span class="attendee-id-container">wxcclabs+agent_ID<span class="attendee-id-placeholder" data-prefix="wxcclabs+agent_ID" data-suffix="@gmail.com">Your_Attendee_ID</span>@gmail.com<span class="copy"></span></span>**

> Supervisor:   **<span class="attendee-id-container">wxcclabs+supvr_ID<span class="attendee-id-placeholder" data-prefix="wxcclabs+supvr_ID" data-suffix="@gmail.com">Your_Attendee_ID</span>@gmail.com<span class="copy"></span></span>**

> Business Hours: **<span class="attendee-id-container"><span class="attendee-id-placeholder" data-suffix="_Bussiness_Hours">Your_Attendee_ID</span>_Bussiness_Hours<span class="copy"></span></span>**

> Webex App should be pre-installed on your laptop. If not, download Webex App from <a href="https://www.webex.com/downloads.html" target="_blank">https://www.webex.com/downloads.html</a> 

> Assigned Inbound Channel Number: **Provided by Lab Instructor**

More pre-configured entities will be mentioned during the lab missions if they have any.

---

### Testing

#### Agent Desktop

Use <a href="https://desktop.wxcc-us1.cisco.com/" target="_blank">https://desktop.wxcc-us1.cisco.com/</a> to login your agent. In addition, Desktop profile was configured in a way where you don't need to select a Telephony line. By default only Desktop Audio (WebRTC) has been enabled.


#### Calling to Contact Center
All calls to Webex Contact center should be done from Webex App. Use Supervisor account provided to you to login to Webex App.
To make a test just open Webex App and dial the provided Support Number assigned to you.

   ![profiles](../graphics/Lab1/WxApp_Test.gif)

!!! Note
    International dialing is not allowed so you won't be able to dial your cell phones unless you have a US number.

---

