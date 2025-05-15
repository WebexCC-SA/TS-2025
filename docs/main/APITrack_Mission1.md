---
#icon: material/folder-open-outline
icon: material/medal
---



# Mission 1: HTTP API POST to Control Hub (Emergency config change)

## Story

Consider a scenario where a supervisor needs ability to change routing decision during an emergency without accessing admin portal. It can be done by changing the **Default Value** of GlobalVariable via API PUT call from False to True and use Condition in main IVR script to do routing decision. 
In this mission we are going to create a control script for Supervisors that changes default value of Global Variable from **True** to **False** 


  ![Profiles](../graphics/Lab2/ChangeGV.png) 

## Call Flow Overview
1. Supervisor calls to management flow and provide it's PIN code
2. If the PIN correct, a PUT API request will be triggered to change a Global Variable default setting from **False** to **True**.
3. A caller makes a call to contact center where **<span class="attendee-id-container">Main_Flow_<span class="attendee-id-placeholder" data-prefix="Main_Flow_">Your_Attendee_ID</span><span class="copy" title="Click to copy!"></span></span>** checks the global variable and transfer the call further based on settings.

## Mission Details

Your mission is to:

1. Create a management flow which will trigger a global variable default value change.
2. Modify your **<span class="attendee-id-container">Main_Flow_<span class="attendee-id-placeholder" data-prefix="Main_Flow_">Your_Attendee_ID</span><span class="copy" title="Click to copy!"></span></span>** to check the global variable default value. 

## Build


1. In Control Hub Flows page open **Global Variables** tab and create new Global Variable:

    >
    > Name: **<span class="attendee-id-container">EmergencyGV_<span class="attendee-id-placeholder" data-prefix="EmergencyGV_">Your_Attendee_ID</span><span class="copy" title="Click to copy!"></span></span>**
    >
    > Type: **Boolean**
    >
    > Default Value: **False**
    > 
    > Copy your new created **Global Variable** **ID** and save to a notepad. We are going to use them in API request in further steps.
    >

    ![Profiles](../graphics/Lab2/BM1-1-GV_Creation.gif)


2. Create a new flow by navigating to **Flows**, click on **Manage Flows** dropdown list and select **Create Flows**
3. Select **Start Fresh** and give it a name **<span class="attendee-id-container">EmergencyGV_<span class="attendee-id-placeholder" data-prefix="EmergencyGV_">Your_Attendee_ID</span><span class="copy" title="Click to copy!"></span></span>**. Then click **Create Flow**.
    
4. Add a **Collect Digits** node:
    
    > Rename node to **CollectPIN**
    >
    > Connect the **New Phone Contact** output node edge to this **Collect Digits** node
    >
    > Loop **No-Input Timeout** and **Unmatched Entry** to itself
    >
    > Enable Text-To-Speech
    >
    > Select the Connector: **Cisco Cloud Text-to-Speech**
    >
    > Click the **Add Text-to-Speech Message** button
    >
    > Delete the Selection for Audio File
    >
    > Text-to-Speech Message: ***Please enter 4 digits pin code to activate emergency flow.***<span class="copy-static" data-copy-text="Please enter 4 digits pin code to activate emergency flow."><span class="copy" title="Click to copy!"></span></span>
    >
    > Set checkbox in **Make Prompt Interruptible**
    >
    > Advanced Settings:
    >>
    >> No-Input Timeout: 3 
    >>
    >> Inter-Digit Timeout: 3
    >>
    >> Minimum Digits: 1
    >>
    >> Maximum Digits: 10
    >>

    ![Profiles](../graphics/Lab2/BM1-3-Collect_PIN.gif)

    
5. Add **Condition** node
  
    > Activity Label: **PIN_Check**<span class="copy-static" data-copy-text="PIN_Check"><span class="copy" title="Click to copy!"></span></span>
    >
    > Connect the output node edge from the **Collect Digits** node to this node
    >
    > In the Expression section write an expression ***{{CollectPIN.DigitsEntered == '1111'}}***<span class="copy-static" data-copy-text="{{CollectPIN.DigitsEntered == '1111'}}"><span class="copy" title="Click to copy!"></span></span>
    
    <span style="color: orange;">[Optional]</span> You can verify the expression result by clicking on **Test Expression** icon in the Expression section
        
    ![Profiles](../graphics/Lab2/BM1-4-PIN_Expresion.gif)
    
6. Add **HTTP Request** node. We are going to use [**Update Global Variable API PUT**](https://developer.webex-cx.com/documentation/global-variables/v1/update-global-variables){:target="_blank"} request in the node configuration. 

    > 
    > Activity Label: **HTTP_PUT**<span class="copy-static" data-copy-text="HTTP_PUT"><span class="copy" title="Click to copy!"></span></span>
    > 
    > Connect the **TRUE** output edge from the **PIN_Check** node to this node
    > 
    > Connector: **WxCC_API**
    >
    > Request Path: **/organization/e56f00d4-98d8-4b62-a165-d05a41243d98/cad-variable/*{ID}***<span class="copy-static" data-copy-text="/organization/e56f00d4-98d8-4b62-a165-d05a41243d98/cad-variable/{ID}"><span class="copy" title="Click to copy!"></span></span> - change ***{ID}*** with Global Variable ID you created in **Step 1** of this mission.
    >
    > Method: **PUT**
    >
    > Content Type: **Application/JSON**
    >
    > Request Body:
    ``` JSON
    {
        "active": true,
        "agentEditable": false,
        "agentViewable": false,
        "variableType": "Boolean",
        "defaultValue": "true",
        "desktopLabel": "",
        "id": "yourGlobalVariableID created in step 1",
        "name": "yourGlobalVariable name created in step 1",
        "organizationId": "e56f00d4-98d8-4b62-a165-d05a41243d98",
        "reportable": false,
        "version": 1
    }
    ```

    !!! Note
        In Request body we are going to change Default Value of Global Variable **EmergencyGV_<span class="attendee-id-placeholder">Your_Attendee_ID</span>**  from ***false*** to ***true***

    ![Profiles](../graphics/Lab2/BM1-6-HTTPReq.gif)

    
7. Add one more **Condition Node**. In this node we are going to check the status of our API PUT request. If it is **200 OK** the output will be **True** and if other than **200** then **False**.
    
    >
    > Activity Label: **HTTPStatusCode**<span class="copy-static" data-copy-text="HTTPStatusCode"><span class="copy" title="Click to copy!"></span></span>
    > 
    > Connect the output node edge from the **HTTP_PUT** node to this node
    >
    > In the Expression section write an expression ***{{HTTP_PUT.httpStatusCode == 200}}***<span class="copy-static" data-copy-text="{{HTTP_PUT.httpStatusCode == 200}}"><span class="copy" title="Click to copy!"></span></span>
    
    ![Profiles](../graphics/Lab2/BM1-7-HTTPStatus.gif)

    
8. Add a **Play Message** node 
    
    > Connect the **HTTPStatusCode** TRUE output node edge to this **Play Message** node
    >
    > Enable Text-To-Speech
    >
    > Select the Connector: **Cisco Cloud Text-to-Speech**
    >
    > Click the **Add Text-to-Speech Message** button
    >
    > Delete the Selection for Audio File
    >
    > Text-to-Speech Message: ***You have successfully modified your emergency configuration.***<span class="copy-static" data-copy-text="You have successfully modified your emergency configuration."><span class="copy" title="Click to copy!"></span></span>
    
    ![Profiles](../graphics/Lab2/BM1-9-PlayOK.gif)
    
9. Add another **Play Message** node

    > Connect the **HTTPStatusCode** FALSE output node edge to this **Play Message** node
    >
    > Connect the **PIN_Check** FALSE output node edge you created in **Step 5** to this **Play Message** node
    >
    > Enable Text-To-Speech
    >
    > Select the Connector: **Cisco Cloud Text-to-Speech**
    >
    > Click the **Add Text-to-Speech Message** button
    >
    > Delete the Selection for Audio File
    >
    > Text-to-Speech Message: ***Something went wrong. Please check your configuration and try again.***<span class="copy-static" data-copy-text="Something went wrong. Please check your configuration and try again."><span class="copy" title="Click to copy!"></span></span>
    
    ![Profiles](../graphics/Lab2/BM1-8-PlayNotOK.gif)
    
10. Add **Disconnect Contact**

    > Connect both **Play Message** nodes created in **Steps 8** and **9** to this node
    

11. Publish your flow

    > Turn on Validation at the bottom right corner of the flow builder
    >
    > If there are no Flow Errors, Click **Publish**
    >
    > Add a publish note
    >
    > Add Version Label(s): **Latest**
    >
    > Click **Publish Flow**
    
12. Map your flow to your inbound channel
    
    > Navigate to Control Hub > Contact Center > Channels
    > 
    > Locate your Inbound Channel (you can use the search):  **<span class="attendee-id-container"><span class="attendee-id-placeholder" data-suffix="_Channel">Your_Attendee_ID</span>_Channel<span class="copy" title="Click to copy!"></span></span>**
    > 
    > Select the Routing Flow: **<span class="attendee-id-container">EmergencyGV_<span class="attendee-id-placeholder" data-prefix="EmergencyGV_">Your_Attendee_ID</span><span class="copy" title="Click to copy!"></span></span>**
    > 
    > Select the Version Label: **Latest**
    > 
    > Click **Save** in the lower right corner of the screen


## Testing
   
1. Open your Global Variable **<span class="attendee-id-container">EmergencyGV_<span class="attendee-id-placeholder" data-prefix="EmergencyGV_">Your_Attendee_ID</span><span class="copy" title="Click to copy!"></span></span>** and make sure Default Value is set to **False**
    
2. Make a call to your Support Number, when asked provide a pin code 1111# and listen the next message:

    > a. If ***"You have successfully modified your emergency configuration."***<span class="copy-static" data-copy-text="You have successfully modified your emergency configuration."><span class="copy" title="Click to copy!"></span></span> you're good to proceed with step 3.
    >
    > b. If ***"Something went wrong. Please check your configuration and try again."***<span class="copy-static" data-copy-text="Something went wrong. Please check your configuration and try again."><span class="copy" title="Click to copy!"></span></span> then before proceeding you need to fix your flow. Call the instructor for assistance.
     >

3. Open your Global Variable **<span class="attendee-id-container">EmergencyGV_<span class="attendee-id-placeholder" data-prefix="EmergencyGV_">Your_Attendee_ID</span><span class="copy" title="Click to copy!"></span></span>** again, refresh the page if it was opened and make sure **Default Value** is now set to True.


4. Now, let’s get to the fun part. Open the **<span class="attendee-id-container">Main_Flow_<span class="attendee-id-placeholder" data-prefix="Main_Flow_">Your_Attendee_ID</span><span class="copy" title="Click to copy!"></span></span>** we created in Mission 1 of Core track, make sure **Edit** toggle is **ON** 

5. Add Global Variable **<span class="attendee-id-container">EmergencyGV_<span class="attendee-id-placeholder" data-prefix="EmergencyGV_">Your_Attendee_ID</span><span class="copy" title="Click to copy!"></span></span>**and make sure Default Value is set to **False** in General Settings of the flow as shown on the following picture.

    ![Profiles](../graphics/Lab2/GV_True.png) </br>
    ![Profiles](../graphics/Lab2/BM1-Test4-GV.gif)
    
6. Add **Condition** node: 
    
    > Connect the output node edge of the **NewPhoneContact** node to this node
    > 
    > Connect the output False node edge from the **Condition** Node to **Set Variable**
    > 
    > In the Expression section write an expression ***{{EmergencyGV_<span class="attendee-id-placeholder">Your_Attendee_ID</span> == true}}***  
            
    <details><summary>Optional</summary>You can Verify the expression result by Clicking on **Test Expression** icon in the Expression section.</details>
        
    ![Profiles](../graphics/Lab2/BM1-Test5-GV.gif)

    !!! Note
        Depending on which Track you have followed after the Core Track, you may have **NewPhoneContact** connected either to **FeedbackSet** node or to **SetVariable** node. Remove this connection and add a **Condition** node in between. 

7. Add a **Play Message** node and **DisconnectContact node**.
    
    > Connect the **TRUE** output node edge of the **Condition Node** node to this node
    > 
    > Connect the output node edge of **Play Message** node to **Disconnect Contact** node.
    > 
    > Enable Text-To-Speech
    > 
    > Select the Connector: **Cisco Cloud Text-to-Speech**
    > 
    > Click the Add Text-to-Speech Message button
    > 
    > Delete the Selection for Audio File
    > 
    > Text-to-Speech Message: ***Sorry, Emergency flow has been enabled. All operators have been evacuated. Please call later.***<span class="copy-static" data-copy-text="Sorry, Emergency flow has been enabled. All operators have been evacuated. Please call later."><span class="copy" title="Click to copy!"></span></span>
    
    ![Profiles](../graphics/Lab2/BM1-Test6-GV.gif)

8. Publish your flow

    > Turn on Validation at the bottom right corner of the flow builder
    >
    > If there are no Flow Errors, Click **Publish**
    >
    > Add a publish note
    >
    > Add Version Label(s): **Latest**
    >
    > Click **Publish Flow**

9. Because we are using only one number to make calls we need to map your **<span class="attendee-id-placeholder">Your_Attendee_ID</span>_Channel** back to the **Main_Flow_<span class="attendee-id-placeholder">Your_Attendee_ID</span>**
    
    > Navigate to Control Hub > Contact Center > Channels
    >
    > Locate your Inbound Channel (you can use the search): **<span class="attendee-id-container"><span class="attendee-id-placeholder" data-suffix="_Channel">Your_Attendee_ID</span>_Channel<span class="copy" title="Click to copy!"></span></span>**
    >
    > Select the Routing Flow: **<span class="attendee-id-container">Main_Flow_<span class="attendee-id-placeholder" data-prefix="Main_Flow_">Your_Attendee_ID</span><span class="copy" title="Click to copy!"></span></span>**
    >
    > Select the Version Label: **Latest**
    >
    > Click **Save** in the lower right corner of the screen
    

10. Make a call and you should hear the message we configured on **Step 7**.
    
11. Revert the Global Variable value from **True** to **False** in Control Hub and click **Save**.

    > Name: **<span class="attendee-id-container">EmergencyGV_<span class="attendee-id-placeholder" data-prefix="EmergencyGV_">Your_Attendee_ID</span><span class="copy" title="Click to copy!"></span></span>** 
    
    > Type: **Boolean**
    >
    > Default Value: **False**
    
    ![Profiles](../graphics/Lab2/BM1-Test11-GV.gif)
    
    
12. Make a test call again and you should hear the Welcome Prompt.

---
<p style="text-align:center"><strong>Congratulations, you have completed Emergency Config mission! 🎉🎉 </strong></p>
