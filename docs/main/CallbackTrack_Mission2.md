---
#icon: material/folder-open-outline
icon: material/medal
---

## Story 

Callback functionality is an essential feature in a modern contact center, providing a solution that enhances both customer satisfaction and operational efficiency.

Imagine a customer calls to upgrade their service but faces a 20-minute wait, they can request a callback instead of staying on hold. If no agents are available, they’ll be offered the choice to remain in the queue or opt for a callback. Upon choosing the callback, they provide their number, which is validated, and the system schedules the call. Once an agent is free, the system connects with the customer. This ensures businesses retain leads while providing a seamless customer experience.


## Call Flow Overview

1. A new call enters the flow. </br>
2. The flow executes the logic configured in previous steps.</br>
3. The call is routed to the appropriate queue, but no agents are available.</br>
4. Since no agents are available, a callback option is offered to the caller.</br>
5. Once an agent becomes available, the callback is initiated to the provided number.</br>

## Mission Details

Your mission is to: </br>

1. Continue to use same flow **Main_Flow_<span class="attendee-id-placeholder">Your_Attendee_ID</span>** </br>
2. Add additional callback functionality to your **Main_Flow_<span class="attendee-id-placeholder">Your_Attendee_ID</span>**.


## Build

1. Switch to the Flow Designer. Open your flow **Main_Flow_<span class="attendee-id-placeholder">Your_Attendee_ID</span>**. Make sure **Edit** toggle is **ON**.
2. Delete  connection from **Queue** node to **Music** 
3. Drag **Menu** node:

    > Rename Activity Label to **WantCallback**<span class="copy-static" title="Click to copy!" data-copy-text="WantCallback"><span class="copy"></span></span>
    >
    > Enable Text-To-Speech
    >
    > Select the Connector: **Cisco Cloud Text-to-Speech**
    >
    > Click the Add Text-to-Speech Message button and paste text: ***All agents are busy. Please press 1 if you want to schedule a callback. Press 2 if you want to wait in queue.***<span class="copy-static" title="Click to copy!" data-copy-text="All agents are busy. Please press 1 if you want to schedule a callback. Press 2 if you want to wait in queue."><span class="copy"></span></span>
    >
    > Delete the Selection for Audio File
    >
    > Under Custom Menu Links:
    >>
    >> Change first Digit Number **0** to **1**, add Link Description as **Callback** 
    >>
    >> Add New Digit Number as **2** with Link Description **Stay in queue**
    >
    > Connect existing **Queue** node to **WantCallBack** node
    >
    > Connect **No-Input Timeout** to the front of the **WantCallBack** node
    >
    > Connect **Unmatched Entry** to the front of the **WantCallBack** node

    ![profiles](../graphics/Lab1/AM1-WantCallback.gif)



4. Drag **Collect Digits** nodes
    
    > Rename Activity Label to **NewNumber**<span class="copy-static" title="Click to copy!" data-copy-text="NewNumber"><span class="copy"></span></span>
    >
    > Enable Text-To-Speech
    >
    > Select the Connector: **Cisco Cloud Text-to-Speech**
    >
    > Click the Add Text-to-Speech Message button and paste text: ***Please enter your 11 digits phone number to which we should call you back.***<span class="copy-static" title="Click to copy!" data-copy-text="Please enter your 11 digits phone number to which we should call you back."><span class="copy"></span></span>
    >
    > Delete the Selection for Audio File
    > 
    > Check **Make Prompt Interruptible**
    >  
    > Advanced Settings:
    >
    >> No-Input Timeout  **5** 
    >>
    >> Minimum Digits: **11**
    >>
    >> Maximum Digits: **11**
    >       
    > Connect **No-Input Timeout** to the front of the **NewNumber** node
    >
    > Connect **Unmatched Entry** to the front of the **NewNumber** node
    >   
    > Connect **Callback** from **WantCallback** node created in step 3 to **NewNumber** node
    >
    > Connect **Stay in queue** from **WantCallback** node created in step 3 to **Music** node

    ![profiles](../graphics/Lab1/AM1-NewNumber.gif)



5. Drag one more **Menu** node
    
    > Rename Activity Label to **VerifyNumber**<span class="copy-static" title="Click to copy!" data-copy-text="VerifyNumber"><span class="copy"></span></span>
    >
    > Enable Text-To-Speech
    >
    > Select the Connector: **Cisco Cloud Text-to-Speech**
    >
    > Click the Add Text-to-Speech Message button and paste text: ***You entered*** *{{NewNumber.DigitsEntered}}****. Press 1 if the number is correct. Press 2 if you want to re-enter the number.***<span class="copy-static" data-copy-text="You entered {{NewNumber.DigitsEntered}}. Press 1 if the number is correct. Press 2 if you want to re-enter the number."><span class="copy" title="Click to copy!"></span></span>
    >
    > Delete the selection for Audio File
    >    
    > Custom Menu Links:
    >>
    >> Change first Digit Number from **0** to **1**, add Link Description as **Number OK**
    >>
    >> Add New Digit Number as **2** with  Link Description **Number Not OK**
    >
    > Connect **No-Input Timeout** to the front of the **VerifyNumber** node
    >
    > Connect **Unmatched Entry** to the front of the **VerifyNumber** node
    >    
    > Connect **NewNumber** created in step 4 to **VerifyNumber** node
    >
    > Connect **Number Not OK** from **VerifyNumber** node to **Collect Digits** node created in Step 4.
    
    ![profiles](../graphics/Lab1/AM1-VerifyNumber.gif)


6. Add **Callback** node
    
    > Callback Dial Number select  ***NewNumber.DigitsEntered***<span class="copy-static" data-copy-text="NewNumber.DigitsEntered"><span class="copy" title="Click to copy!"></span></span> from dropdown list
    >    
    > Callback Queue:
    >> Static Queue: **<span class="attendee-id-container"><span class="attendee-id-placeholder" data-suffix="_Queue">Your_Attendee_ID</span>_Queue<span class="copy" title="Click to copy!"></span></span>**
    > 
    > Callback ANI: Choose any number from dropdown list.
    > 
    > Connect **Number OK** from **VerifyNumber** node created in step 5 to **CallBack** node


7. Add **Play Message** node as follows:
    
    > Enable Text-To-Speech
    >
    > Select the Connector: **Cisco Cloud Text-to-Speech**
    >
    > Click the Add Text-to-Speech Message button and paste text: **Your call has been successfully scheduled for a callback. Good Bye.**<span class="copy-static" data-copy-text="You call has been successfully scheduled for a callback. Good Bye."><span class="copy" title="Click to copy!"></span></span>
    >
    > Delete the Selection for Audio File
    >
    > Connect **CallBack** node created in step 6 to **Play Message** node
    >
    > Connect **Play Message** to **Disconnect Contact** node
    
    ![profiles](../graphics/Lab1/AM1-SetCallBack.gif)



8. Validate the flow by clicking **Validate**, **Publish** and select the Latest version of the flow

    
## Testing
    
1. Make sure you're logged into the **Agent Desktop** as an Agent and set the status to **Not Available**. In this case, the call will not be assigned to an agent, and a callback will be proposed to the caller.
2. Make a call to the Support Number and if success you should hear configured messages.

3. When callback is proposed, press 1 on Webex App DialPad to request a callback. 

4. When asked, provide a new number for a callback. Because in the current lab we have number limitations, we are going to provide a well-known Cisco Worldwide Support contact number **1 408 526 7209**<span class="copy-static" title="Click to copy!" data-copy-text="+14085267209"><span class="copy"></span></span> as a callback number. Use the DialPad to provide the Cisco TAC number, then confirm when asked.
3. Once done, another message about successful scheduling should play.
4. Make your agent **Available**. Contact Center will reserve you right away and propose to answer a callback call.

**Congratulations on completing another mission.**
