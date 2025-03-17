---
#icon: material/folder-open-outline
icon: material/medal
---



# Mission 4: AI Assistant - Call Drop Summary

## Story

As the agent answers the call, a Webex Contact Center AI popup appears, summarizing the previous conversation before the call was dropped. Armed with this insight, the agent seamlessly picks up where they left off, ensuring a smooth customer experience.

### Call Flow Overview

1. You are going to use your <span class="attendee-id-container">**Main_Flow_<span class="attendee-id-placeholder" data-prefix="Main_Flow_">Your_Attendee_ID</span><span class="copy" title="Click to copy!"></span></span>** to test Call Drop Summary. </br>
2. To simulate one of the required Termination Types your agent will transfer the call to a "dummy" queue with no agents avaialble in it.
3. After second call to your agent Call Drop Summary will popup.</br>

## Mission overview
Your mission is to:

1. The current mission does not include any configuration steps, but rather testing only.</br>
2. Your task is to test AI Assistant Call Drop Summary feature</br>


!!! Note
    This model requires meaningful audio to transcribe and provide a summary of the conversation. You will need to simulate both the customer and the agent speaking. If you have any questions, reach out to the lab instructors for help.</br>

    For the current mission, an optimal way to test is by using your cellphone with the Webex App installed. However, if you use the same device for both the caller and the agent, here’s a tip: mute your cellphone when speaking as the agent and mute your Agent Desktop when speaking as the customer.
---

## Testing

1. Switch to Control Hub and navigate to **Channels** under Customer Experience Section
  
    >
    > Locate your Inbound Channel (you can use the search): **<span class="attendee-id-container"><span class="attendee-id-placeholder" data-suffix="_Channel">Your_Attendee_ID</span>_Channel<span class="copy" title="Click to copy!"></span></span>**
    >
    > Select the Routing Flow: <span class="attendee-id-container">**Main_Flow_<span class="attendee-id-placeholder" data-prefix="Main_Flow_">Your_Attendee_ID</span><span class="copy" title="Click to copy!"></span></span>**
    >
    > Select the Version Label: **Latest**
    >
    > Click Save in the lower right corner of the screen

2. Your Agent desktop session should be still active but if not, use Webex CC Desktop application ![profiles](../graphics/overview/Desktop_Icon40x40.png) and login with agent credentials you have been provided **<span class="attendee-id-container">wxcclabs+agent_ID<span class="attendee-id-placeholder" data-prefix="wxcclabs+agent_ID" data-suffix="@gmail.com">Your_Attendee_ID</span>@gmail.com<span class="copy" title="Click to copy!"></span></span>**. You will see another login screen with OKTA on it where you may need to enter the email address again and the password provided to you. 
2. Select Team **<span class="attendee-id-container"><span class="attendee-id-placeholder" data-suffix="_Team">Your_Attendee_ID</span>_Team<span class="copy" title="Click to copy!"></span></span>**. Click **Submit**. Allow browser to access Microphone by clicking **Allow** on every visit.
3. Make your agent ***Available*** and you're ready to make a call.

    ![profiles](../graphics/Lab1/5-Agent_Login.gif)

4. Dial the support number assigned to your **<span class="attendee-id-placeholder">Your_Attendee_ID</span>_Channel** channel.

5. Answer the call on Agent Desktop and use the provided script to simulate an agent/customer conversation (minimum 30 seconds).

    <!-- md:option type:note -->
    
    !!! note "Call Drop Summary Script"
        **Agent**: Good morning, thank you for calling Airway Express. My name is Michelle. How can I assist you today?</br>
        **You**: Hi Michelle, I'm having an issue trying to make an adjustment to a flight I have with you. I booked a flight from Amsterdam to London, but now I need to add a leg to go from London to New York a couple of days later. I just can't seem to do it through the website.</br>
        **Agent**: I'm sorry to hear you're experiencing issues with our app. I can definitely help you with that. Could I have your flight confirmation number to start with, please?</br>
        **You**: <..Silence..></br>
        **Agent**: Hello, hello, hello</br>


6. From the Agent Call Controls, transfer the call to transfer call to the Queue **Q_CallDrop**. Click the “Queue” radio button to search for this Queue.


  ![Profiles](../graphics/AI_Track/CallDropSum_Transfer.gif)

7. **Wait for the call to timeout and disconnect. This simulates an accidental call drop.**

    !!! Note
        Since the call drop must be system initiated, the queue **Q_CallDrop** has been pre-configured with a maximum time in queue of 10 seconds (pictured on screenshot from Control Hub). Wait in the queue for about 10 seconds for the system to drop the call "automatically". 
    
    ![Profiles](../graphics/Lab2/CallDropSum_DummyQueue.png)

8. Make sure your agent session is active and your agent is in **Available** state.

9. Dial the support number assigned to your **<span class="attendee-id-placeholder">Your_Attendee_ID</span>_Channel** channel again. This will simulate a customer calling back after a call was dropped and trying to connect again to resolve the original issue.

10. Accept the call on the Agent Desktop. The AI Assistant notifies the agent of the available call drop summary.

11. Open the AI Assistant to review the summary. This summary can be used by the agent to pick up where the previous agent left off, reducing customer frustration and need for them to repeat themselves.

![Profiles](../graphics/Lab2/Call_Drop_Summary.gif)

<p style="text-align:left"><strong>Congratulations, you have officially completed the Call Drop Summary lab! 🎉🎉 </strong></p>
