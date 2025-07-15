---
#icon: material/folder-open-outline
icon: material/medal
---



## Story

In this lab, you will complete a mission to enhance customer feedback collection by integrating a survey into the Webex Contact Center call flow. The lab is designed to be simple yet practical, focusing on minimal configuration within the Flow Designer, while leveraging a preconfigured survey template.

> **<details><summary>Good to Know <span style="color: orange;">[Optional]</span></summary>**
> 
> Supported Survey Question Types in Webex Contact Center
> 
> 1. **Customer Satisfaction (CSAT)**:
>     - Purpose: Measure satisfaction with a specific interaction or service.
>     - Example Question: "On a scale of 1 to 5, how satisfied are you with the service you received today?"
>     - Use Case: Assess overall satisfaction at the end of a call or interaction.
> 2. **Customer Effort Score (CES)**:
>     - Purpose: Evaluate the ease of resolving a customer's issue or completing a task.
>     - Example Question: "On a scale of 1 to 5, how easy was it to complete your task today?"
>     - Use Case: Identify pain points in the customer journey or process efficiency.
> 3. **Net Promoter Score (NPS)**:
>     - Purpose: Measure customer loyalty and the likelihood of recommending the service.
>     - Example Question: "On a scale of 0 to 10, how likely are you to recommend our service to a friend or colleague?"
>   - Use Case: Gauge long-term customer loyalty and brand advocacy.
> </details>

## Call Flow Overview

1. A new call enters the flow. </br>
2. The flow executes the logic to enable survey functionality.</br>
3. Agent answers the call.</br>
4. The flow triggers an event when the agent disconnects from the call.</br>
5. The caller remains on the line and hears the survey menu.</br>

## Mission Details

Your mission is to:

1. Integrate a preconfigured survey into the call flow using the Flow Designer.
2. Configure basic logic to determine when to route customers to the survey (e.g., after a call ends).
3. Understand how Webex Contact Center supports various survey question types, including CSAT, CES, and NPS.

!!! Note
    The survey is prebuilt and includes key questions designed to gather actionable insights from customers. Your task is to focus on configuring the flow and ensuring the survey is triggered seamlessly during the customer journey.

### Pre-configured entities      
     
> Survey: **PCS-2025**
>
> System defined GlobalVariable: **Global_FeedbackSurveyOptIn**. 
>

<span style="color: orange;">[Optional]</span>
    In case you don't want to use pre-configured Survey you can configure your own. Expand below section to create your own Survey otherwise proceed to **Build** section below

> **<details><summary>Create your own Survey <span style="color: orange;">[Optional]</span></summary>**
> 
> - In **Control Hub -> Contact Center** open a **Survey** configuration page under **Customer Expirience**. Then click **Create new survey**.
> 
> - Enter survey name in **Survey name** field. Make sure **IVR survey** is selected. Then click next 
>
>    ![profiles](../graphics/Lab1/PCS1.gif) 
>
> - Edit **Welcome note** and **Thank you note** by uploading the following files. Download files to your desktop prior uploading to survey. 
>
>    ![profiles](../graphics/Lab1/PCS_Welcome.gif) 
>
> - Click on **Add a question** which is in the middle between **Welcome note** and **Thank you note**. Choose either NPS, CSAT or CES type of question.
> 
> - Upload respective audio prompts. Prompts can be downloaded from [shared folder](https://drive.google.com/drive/folders/1vS2aXgaCzorGAmGdQ7bP2NJMHNQx2ais?usp=sharing){:target="_blank"}.
> 
> - Click *Next**. You can ignore **Error Handling** configuration page. Click **Save**
> 
>    ![profiles](../graphics/Lab1/PCS_questions.gif) 
> 
</details>

## Build
1. Switch to the Control Hub then go to **Contact Center**. Navigate to the **Surveys** under the **Customer Experience** section. Locate **PCS-2025** Survey and click on it to familiarise yourself with it's configuration.  
  ![profiles](../graphics/Lab1/PCS_Explore.gif)

2. Switch to the Flow Designer. Open your **<span class="attendee-id-container">Main_Flow_<span class="attendee-id-placeholder" data-prefix="Main_Flow_">Your_Attendee_ID</span><span class="copy" title="Click to copy!"></span></span>**, make sure **Edit** toggle is **ON**.

3. Add Global Variable **Global_FeedbackSurveyOptIn** to your flow.
  ![profiles](../graphics/Lab1/PCS_addGV.gif)


4. Drag **Set Variable** node to canvas:

    > Activity Name: **FeedbackSet**<span class="copy-static" title="Click to copy!" data-copy-text="FeedbackSet"><span class="copy"></span></span>
    >
    > Variable: **Global_FeedbackSurveyOptIn**<span class="copy-static" title="Click to copy!" data-copy-text="Global_FeedbackSurveyOptIn"><span class="copy"></span></span>
    >
    > Set Value: **true**
    > 
    > Delete connection between **NewPhoneContact** and **Set Variable** on which we configured Language while doing the Main Lab.
    >
    > Connect **NewPhoneContact** to the front of the **FeedbackSet** node
    >
    > Connect **FeedbackSet** to the front of the **Set Variable** node

    ![profiles](../graphics/Lab1/PCS_SetVar.gif)

5. Open **Event FLows**  tab and locate **AgentDisconected** node. If you completed previous mission you should have **HTTPRequest** node connected to it. Delete the connection between **HTTPRequest** node and **DisconnectContact**.

6. Drag **FeedbackV2** and **Play Message**
    
    **FeedbacV2**
    
    > SurveyMethod -> VoiceBased:  **PCS-2025**<span class="copy-static" title="Click to copy!" data-copy-text="PCS-2025"><span class="copy"></span></span>
    >        
    > Connect **HTTPRequest** to **FeedbackV2** node
    >
    > Connect **FeedbackV2** node to **Disconnect** node
    >
    > Connect **FeedbackV2** Undefined Error to **Play Message** node
            
    **Play Message**
    
    > Enable Text-To-Speech
    >
    > Select the Connector: Cisco Cloud Text-to-Speech
    >
    > Click the Add Text-to-Speech Message button and paste text: ***Something went wrong on Feedback node. Please call later.***<span class="copy-static" title="Click to copy!" data-copy-text="Something went wrong on Feedback node. Please call later."><span class="copy"></span></span>
    >
    > Delete the selection for Audio File
    >
    > Connect **Play Message** created to **Disconnect Contact** node
    >       

    ![profiles](../graphics/Lab1/PCS_FeedbackConfig.gif)            

7. Validate the flow by clicking **Validate**, **Publish** and select the **Latest** version of the flow


## Testing
1. Your Agent desktop session should be still active but if not, use **Agent Desktop** with agent credentials you have been provided **wxcclabs+agent_ID<span class="attendee-id-placeholder">Your_Attendee_ID</span>@gmail.com** and become **Available** 
2. Make a test call to the Support Number and accept the call by Agent.
3. Finish the call by Agent so the caller could stay on the line. 
4. Now the caller should hear prompts configured in **PCS-2025**. Complete the survey.
5. To check survey responses, switch to the **Control Hub** and navigate to the **Surveys** under **Customer Experience** section. Locate the **PCS-2025** survey and click on the **Download** button on the right hand side to download a CSV file with the provided Survey responses.
    
    !!! Note
        If you create your own survey, as described in the Optional section of this mission, you might not see the survey responses immediately, as there is a delay in edited surveys.
        
**Congratulations on completing another mission where we have learnt how Post Call Survey can be implemented.**
