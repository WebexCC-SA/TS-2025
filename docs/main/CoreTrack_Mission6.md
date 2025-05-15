---
#icon: material/folder-open-outline
icon: material/medal
---


!!! Note
    The current mission does not include any configuration steps, but it focuses on additional Flow Designer tools that facilitate flow troubleshooting and might provide you with ideas on how to optimize your flow logic.
---
## Debug Overview

The Debug Tool is an essential feature in the Webex Contact Center Flow Designer, designed to simplify troubleshooting and enhance visibility into the call flow behavior. Its importance lies in its ability to provide real-time insights, enabling administrators and developers to quickly identify and resolve issues that could impact customer experience.

**<details><summary>Good to Know <span style="color: orange;">[Optional]</span></summary>**

#### Why Debug is Important?

1. **Real-Time Analysis**: Tracks the call flow execution step by step, showing which nodes are executed and the data passed between them.

2. **Error Identification**: Quickly pinpoint errors, such as misconfigured nodes, incorrect variable usage, or unexpected call routing.

3. **Optimization**: Provides insights into flow performance, allowing you to optimize for efficiency and accuracy.
</details>


### How to Use the Debug Tool

1. Switch to the Flow Designer and open your flow, **<span class="attendee-id-container">Main_Flow_<span class="attendee-id-placeholder" data-prefix="Main_Flow_">Your_Attendee_ID</span><span class="copy" title="Click to copy!"></span></span>**. Then, click the **Debug** button at the bottom of the Flow Designer.

2. You can view the calls you've made today during the previous exercises. Please click on the one at the top.
    
    > 
    > 1. You can search your call by **Intercation ID**
    > 
    > 2. Filter by **Date Range** and by **Label**

    !!! Note
        You might see an alert as on the following screenshot. Click refresh button to reload the diagram. 
        ![profiles](../graphics/Lab1/DebugRefresh.jpg)       

3. Observe the execution path, with visual indicators highlighting the flow nodes being executed. You can switch between Event Flows and Main Flows to see all nodes executed.
4. By clicking on each activity name you will see it's details. ***Examples: Entry point ID, Flow Label, DNIS, selected Business Hours, also TTS value and what events were triggered.***

    ![profiles](../graphics/Lab1/FlowDebug1.gif)

5. Spend some time to explore the tool. Identify bottlenecks, loops, or errors if any. 
6. As an option, you can break something in your flow and see how Debug tool shows that error.

By leveraging the **Debug Tool** effectively, you can ensure your call flows function as intended, providing a seamless experience for both customers and agents.

---

## Flow Analytics Overview

Flow Analytics feature is designed to provide flow developer, administrators and supervisors with a comprehensive, graphical view of how Flow paths are being utilized across all customer interactions. This feature enables better analysis of IVR flow operations, helping to identify areas for improvement and increase self-service containment. The feature provides an aggregated view that allows users to:

  - Analyze traces aggregated over a period of time.
  - Visualize the aggregated data in a flow diagram, with various metrics like, average call duration, error percentage, along with some activities level metrics. 
  - Show interaction traces for a selected activity.
  - Switch between multiple versions of analytics views.
  - Color-coded links between activities based on the number of activity executions, and status.

**<details><summary>Good to Know <span style="color: orange;">[Optional]</span></summary>**

#### Why Flow Analytics is Important?

1. **Performance Monitoring**: Tracks key metrics, such as flow usage, execution frequency, and processing times, helping you assess flow efficiency.

2. **Behavior Analysis**: Identifies patterns in customer interactions and highlights potential issues, such as abandoned calls or potential loops.

3. **Proactive Optimization**: Offers data-driven insights to fine-tune flow configurations, ensuring optimal performance and alignment with business objectives.
</details>

### How to Use the Flow Analytics Tool

1. On the Flow Designer, click on the **Analyze** tab at the bottom of the Flow Designer to open the Flow Analytics Tool

2. Specify a DateTime range for the report. All calls we made happened today hence select **Today** option.

3. Review visualizations and reports showing flow metrics, such as:
    
    - Total flow Executions
    
    - Execution paths and their frequency
    
    - Average flow duraion
    
    - Average activities per contact
    
    - Activity errors | Activity error %

    ![profiles](../graphics/Lab1/FlowAnalytics1.gif)

4. Drill down into specific interactions by clicking on desired node.

5. If you spot any errors, click on that node. In the popped-up Activity Usage Details window, you can find call details, including Interaction ID, Start and End time, Duration, and a cross-launch link to the Debugger.

    ![profiles](../graphics/Lab1/FlowAnalytics2.gif)

6. Observe older flow versions by selecting **Version History**. Then expand **Other Versions**. Choose anyone you like and click **View**. You might need to specify DateTime range again if the selected flow version was never executed withing the chosen range in **Step 2**.

    ![profiles](../graphics/Lab1/FlowAnalytics3.gif)

By leveraging the Flow Analytics Tool, you gain a comprehensive understanding of how your flows perform and interact with customers, enabling you to make data-backed decisions to improve both efficiency and user satisfaction.
