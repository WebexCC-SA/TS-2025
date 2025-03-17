---
#icon: material/folder-open-outline
icon: material/medal
---



# Mission 2: Routing facilitation


## Story 
The primary objective of this new feature is to enhance nodes activities to include a dynamic variable-based selection option to make your flow smaller and simpler to adjust. You will learn how to use **Dynamic Variables** in multiple nodes including **GoTo**, **Business Hours**, **Queue** and other nodes. 

## Call Flow Overview

1. When call arrives fetch the data from **MockAPI** based on your Dialed Number
2. Write the data into respective preconfigured flow variables. These variables are being used in all consequent nodes.
3. Business Hours entity configured to cover EMEA timezone. Call should go through WorkingHours exit edge in normal behavior.
4. Play Message nodes have been configured to play messages received from API call


## Mission Details

Your mission is to:
1. Create a new flow by using pre-defined flow template
2. Request the data from external database and parse it into flow variables which are coming with a flow template.
3. You do not need to create Business Hours, Channels and additional Flows as they have been pre-configured for you.

> **<details><summary>Good to Know <span style="color: orange;">[Optional]</span></summary>**
>
> We are going to imitate a real API server by providing realistic responses to requests. For that we chose Server [**MockAPI**](https://mockapi.io/){:target="_blank"}.
> 
> For more information of how you can use MockAPI please watch these Vidcasts: 
[**[ADVANCED] Use MockAPI to enhance your Demos - PART 1**](https://app.vidcast.io/share/ce058b71-109e-4929-b9ca-46b83d94f7e3){:target="_blank"} and [**[ADVANCED] Use MockAPI to enhance your Demos - PART 2**](https://app.vidcast.io/share/1e259a34-7e9e-44d9-aa5a-5d76e07256a3){:target="_blank"}
> 
> </details>


## Steps

1. Switch to Control Hub, then navigate to **Flows**, click on **Manage Flows** dropdown list and select **Create Flows**

2. New Tab will be opened. Navigate to **Flow Templates**

3. Choose **Dynamic Variable Support** and click **Next**. You can open **View Details** and to see observe flow structure and read flow description.

4. Name you flow as **<span class="attendee-id-container">DynamicVariables_<span class="attendee-id-placeholder" data-prefix="DynamicVariables_">Your_Attendee_ID</span><span class="copy" title="Click to copy!"></span></span>**. Then click on Create Flow.

    ![Profiles](../graphics/Lab2/BM2_2-7_DynFlowCreate.gif)

5. Observe preconfigured nodes and flow variables. If you have questions please reach out to lab proctor.
    
    - **FetchFlowSettings** node is used to access external database over API and parse the result by writing response result into respective Flow Variables which have been preconfigured for you already.
    - **SetVariable_mwn** node writes complete API response into debug variable so you could see the complete API call result in Debug tool. It's been taken from **FetchFlowSettings.httpResponseBody** output variable of **FetchFlowSettings** node
    - All **Play Message** and **Play Music** nodes have been preconfigured to play TTS messages taken from respective API response
    - **BusinessHours_os2** node set to bussinesshours variable which is your business hour entity **<span class="attendee-id-placeholder">Your_Attendee_ID</span>_Bussiness_Hours**
    - **QueueContact_a62** node set to queue variable which is your queue entity **<span class="attendee-id-placeholder">Your_Attendee_ID</span>_Queue**
    - Some **GoTo** nodes are configured to use variables and some have statice values. We will adjust them while going through further steps. 

    ![Profiles](../graphics/Lab2/BM2-7-ObserveFlow.gif)

6. Select **FetchFlowSettings** HTTP Node and paste your GET request in Request URL field by replacing a templated one.
    ***https://674481b1b4e2e04abea27c6e.mockapi.io/flowdesigner/Lab/DynVars?dn={{NewPhoneContact.DNIS | slice(2) }}***<span class="copy-static" data-copy-text="https://674481b1b4e2e04abea27c6e.mockapi.io/flowdesigner/Lab/DynVars?dn={{NewPhoneContact.DNIS | slice(2) }}"><span class="copy" title="Click to copy!"></span></span>

 
    > **<details><summary>**Test your API Source**<span style="color: orange;">[Optional]</span></summary>**
    > 
    > 1. Test your API resource. **https://674481b1b4e2e04abea27c6e.mockapi.io/flowdesigner/Lab/DynVars?dn={DNIS}**<span class="copy-static" data-copy-text="https://674481b1b4e2e04abea27c6e.mockapi.io/flowdesigner/Lab/DynVars?dn={DNIS}"><span class="copy" title="Click to copy!"></span></span>
    > 
    > 2. Replace DNIS with the provided DNIS number stripping +1
    >
    > <span style="color: orange;">[Example:]</span> If your number **+14694096861**, then your GET Query should be ***https://674481b1b4e2e04abea27c6e.mockapi.io/flowdesigner/Lab/DynVars?dn=4694096861***
    >
    > 3. Open Chrome browser and past your URL. You should get the follwoing result
    > 
    > ![Profiles](../graphics/Lab2/BM2-8-Chrometest.gif)
    > 
    > 4. Test JSON Path in the following tool [https://jsonpath.com/](https://jsonpath.com/){:target="_blank"}
    > 
    > 5. Paste your GET URL into the Browser address line and copy the output in square brackets (including brackets)
    >
    > 6. Open [https://jsonpath.com/](https://jsonpath.com/){:target="_blank"} and paste the copied response into **Inputs** window
    >
    > 7. In **JSONPath** box copy and paste one of the path expression from **FetchFlowSettings** to verify your results.
    >
    > ![Profiles](../graphics/Lab2/BM2-10-JSONPath.gif)
    > </details>

7. In the same node, under Parsing Settings add **[0]**<span class="copy-static" data-copy-text="[0]"><span class="copy" title="Click to copy!"></span></span> after **$** sign. This needs to be done due to output structure of API response. 
 
    ![Profiles](../graphics/Lab2/BM2-9-10-GETAPI_Config.gif)

8. Open a **Queue** Node and set **Fallback Queue** to **CCBU_Fallback_Queue**. That is needed to make sure the call will find an end queue in case API GET call fails.

9. Open **GoTo_x19** node and set:

    > Destination Type: **Flow**
    >
    > Static Flow
    >
    > Flow: **CLTS_ErrorHandling_Flow**
    >
    > Choose Version Label: **Latest**
    
10. Open **GoTo_8ca** and set:

    > Destination Type: **Entry Point**
    >
    > Static Entry Point
    >
    > Entry Point: **CLTS_ErrorHandling_Channel**

 
11. Repeat node settings in **Step 9** for **GoTo_uyn**

12. Repeat node settings in **Step 10** for **GoTo_dbr**

    ![Profiles](../graphics/Lab2/BM2-11-15-FallbackQ.gif)

13. **Validate** and **Publish** flow

14. In Popped up window click on dropdown menu to select **Latest** label, then click **Publish**

15. Switch to Control Hub and navigate to **Channels** under Customer Experience Section
    
    > 
    > Locate your Inbound Channel (you can use the search):  **<span class="attendee-id-container"><span class="attendee-id-placeholder" data-suffix="_Channel">Your_Attendee_ID</span>_Channel<span class="copy" title="Click to copy!"></span></span>**
    > 
    > Select the Routing Flow: **<span class="attendee-id-container">DynamicVariables_<span class="attendee-id-placeholder" data-prefix="DynamicVariables_">Your_Attendee_ID</span><span class="copy" title="Click to copy!"></span></span>**
    > 
    > Select the Version Label: **Latest**
    > 
    > Click **Save** in the lower right corner of the screen

    ![Profiles](../graphics/Lab2/BM2-18-ChannelChange.gif)


## Testing

1. Your Agent desktop session should be still active but if not, use Webex CC Desktop application ![profiles](../graphics/overview/Desktop_Icon40x40.png) and login with agent credentials you have been provided **<span class="attendee-id-container">wxcclabs+agent_ID<span class="attendee-id-placeholder" data-prefix="wxcclabs+agent_ID" data-suffix="@gmail.com">Your_Attendee_ID</span>@gmail.com<span class="copy" title="Click to copy!"></span></span>**. You will see another login screen with OKTA on it where you may need to enter the email address again and the password provided to you. 

2. Select Team **<span class="attendee-id-placeholder">Your_Attendee_ID</span>_Team**. Click **Submit**. Allow browser to access Microphone by clicking **Allow** on ever visit.

3. Make your agent ***Available*** and you're ready to make a call.

    ![profiles](../graphics/Lab1/5-Agent_Login.gif)

4. Change the status of your agent to **Available** and make a call to test you flow. If everyhing configured as per instructions you should hear a **welcome1** message that is a value of ***$[0].welcomePrompt1*** and then ***$[0].welcomePrompt2***. Finally the call should land on the ***$[0].queue***

### <span style="color: orange;">[Optional]</span> Test other variables

5. You can do the same trick we did in Mission 2 of Core Track and use **Override** option to change the logic. Overrides as well as Business hours have been preconfigured for you. Now we need to apply it on your **<span class="attendee-id-container"><span class="attendee-id-placeholder" data-suffix="_Bussiness_Hours">Your_Attendee_ID</span>_Bussiness_Hours<span class="copy" title="Click to copy!"></span></span>** entity. Open **<span class="attendee-id-placeholder">Your_Attendee_ID</span>_Bussiness_Hours** in **Control Hub**, scroll down to Additional Settings and select **Overrides_Hours** from Override dropdown list. Then click Save.
    
    !!! Note
        Override Hours entity overwrites Working Hours and set to duration of current Technical Summit. 

    ![Profiles](../graphics/Lab1/12-Overrides_Config.gif)

6. Make a new call to be redirected to flow ***$[0].goToFlow*** where the following message can be heard: **"Thanks you for call. You are now on Error Handling flow and will be redirected to Global Support line in a moment. Good bye."**

7. Now we need to revert the configuration we made in Step 1. Open **<span class="attendee-id-placeholder">Your_Attendee_ID</span>_Bussiness_Hours** in **Control Hub** in **Control Hub**, scroll down to **Additional Settings** and select **None** from Override dropdown list. Then click **Save**.

    ![Profiles](../graphics/Lab1/13-Revert_Overrides_Config.gif)


<p style="text-align:center"><strong>Congratulations, you have succesfully completed Routing Facilitation mission! 🎉🎉 </strong></p>
