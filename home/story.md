
<style>
.page {
position: relative;
width: 800px;
height: 600px;
z-index: 10;
padding: 2em 3em;
margin-bottom: 1em;
border-radius: 2em;
background-color: #f8f8f8;
}

.page>.row {
display: flex;
}

li:not(:last-child) {
margin-bottom: 0.6em;
}

.page>.background {
position: absolute;
z-index: -1;
display: block;
top: 0;
left: 0px;
width: 100%;
height: 100%;
}

.time {
position: absolute;
background-color: yellow;
top: 0;
right: 4px;
height: 100%;
width: 24px;
z-index: 12;
}

.time>.time {
background-color: #e0e0e0;
left: 12px;
width: 12px;
height: 600px;
}

.marker {
display: inline-block;
vertical-align: baseline;
width: 12px;
height: 12px;
border-radius: 50%;
background-color: green;
}

.marker.enter {
background-color: #22ff22;
}

.marker.shown {
background-color: yellow;
}

.marker.exit {
background-color: orange;
}

.marker.hidden {
background-color: #ff2222;
}

.time>.marker {
position: absolute;
left: 0px;
}
</style>

<div class="story">
<div id="p1" class="page" is="story-page">
<h2>Home made IoT devices</h2>
<p>The HomeDing Library provides the foundation for easy implementation of IoT devices with the Arduino environment.</p>
<div class="row">
<div class="col" style="flex: 40%;">
<object id="hds" data="/home/hd-story.svg" style="height:300px;width:300px;"></object>
</div>
<div class="col" style="flex: 60%;">
<div is="svg-rotate" ref="#hds:#chip" dur="1000ms"></div>
<div is="story-animate" dur="1s" wait="3s" s-from="opacity:0;">
<p>The core of IoT devices is a <b>microprocessor</b> like an ESP8266 or ESP32
with many features at a low price.</p>
</div>

<div is="story-svg-show" ref="#hds:#pinIn" dur="250ms"></div>
<div is="story-svg-show" ref="#hds:#pinOut" dur="250ms"></div>
<div is="story-svg-show" ref="#hds:#pin-01" dur="250ms"></div>
<div is="story-animate" dur="1s" s-from="opacity:0;">
<p>They have many <b>pins</b> that can be used as input and output signals,
very useful for attaching sensors, lights, displays or motors.</p>
</div>

<div is="story-svg-move" ref="#hds:#wifi" from="-40 -50" dur="2s"></div>
<div is="story-animate" dur="1s" s-from="opacity:0;">
<p><b>WiFi</b> is als built in, making it easy to connect using a browser through your home network.</p>
</div>

<div is="story-svg-move" ref="#hds:#tRam" dur="400ms" from="80 -50"></div>
<div is="story-svg-move" ref="#hds:#tFlash" dur="400ms" from="80 -50"></div>
<div is="story-svg-move" ref="#hds:#tCPU" dur="400ms" from="80 -50"></div>
<div is="story-animate" dur="1s" s-from="opacity:0;">
<p>The free Arduino programing environment has all the tools to create and upload the program
into the microprocessor, easy to learn for beginners and feature rich for professionals.</p>
</div>
<div is="story-svg-show" ref="#hds:#tProgram" dur="400ms" dur="2s"></div>
</div>
</div>
<div id="q1" is="story-animate" dur="2s" s-from="opacity:0;font-size:50%" style="font-size:200%">
What makes HomeDing different ?
</div>
<div is="story-svg-show" ref="#hds:#tHomeDing" dur="500ms"></div>
</div>

<div id="p2" class="page" is="story-page">
<h2>1. Configuration</h2>

<p>The HomeDing library offers more than just a program including powerful configuration feature.</p>

<p> You can use one of the provided <u>examples</u> without modification to run your device
that contains the code required for many use cases. Functionality is activated and orchestrated
by configuration. No need to bring your device back to the computer, all can be done from remote:
</p>

<div class="row">
<div class="col" style="flex: 40%;">
<object id="hdb" data="/home/hd-blocks.svg" style="height:300px;width:300px;"></object>
</div>
<div class="col" style="flex: 60%;">
<ul>
<div is="svg-rotate" ref="#hdb:#tHomeDing" dur="1000ms" wait="1000ms"></div>
<div is="story-svg-hide" ref="#hdb:#tHomeDing" dur="1000ms" wait="1000ms"></div>
<div is="story-svg-show" ref="#hdb:#gWiFi" dur="1000ms" wait="1000ms"></div>
<div is="story-svg-show" ref="#hdb:#gServer" dur="1000ms" wait="1000ms"></div>
<div is="story-svg-show" ref="#hdb:#gFiles" dur="1000ms" wait="1000ms"></div>
<div is="story-svg-show" ref="#hdb:#gElements" dur="1000ms" wait="1000ms"></div>
<li>The integrated <u>Web Server</u> enables you to reach and interact with your device
using a standard modern browser.</li>
<li>The built-in <u>WiFi Manager</u> help you connecting the device to your local WiFi.</li>
<li>Changing and enhancing the functionality of your device can be done without reprogramming.</li>
<li>All the device can do is based on the <u>Elements</u> of the HomeDing library that
implement each a very specific functionality.</li>
<li>There are Elements for <u>Sensors</u>, digital and analog <u>Signals</u>,
<u>Displays</u>, <u>Time and Timing</u>, <u>Logic and Calculation</u> and more.
They all "sleep" inside the code and wait to be configured.
</li>
<li>A Element can be activated by adding <u>configuration</u> properties
to the config files e.g. used pins by a sensor.</li>
</ul>
</div>
</div>
</div>

<div id="p3" class="page" is="story-page">
<h2>2. Automation</h2>
<p>To react on sensor values or to handle a specific situation the Elements can interact
and rules can be applied:</p>

<object id="hda" data="/home/hd-actions.svg" style="height: 200px;width: 600px"></object>

<div is="story-svg-fill" ref="#hda:#pIn" dur="600ms" wait="1000ms" color="#00aa00"></div>
<div is="story-svg-fill" ref="#hda:#pIn" dur="600ms" color="silver"></div>
<div is="story-svg-show" ref="#hda:#a1g" dur="1250ms" wait="500ms"></div>
<div is="story-svg-move" ref="#hda:#a1g" dur="1250ms" to="18 0"></div>
<div is="story-svg-text" ref="#hda:#timerTxt" txt="3" wait="500ms"></div>
<div is="story-svg-hide" ref="#hda:#a1g" dur="1250ms" wait="500ms"></div>

<div is="story-svg-show" ref="#hda:#a2g" dur="1250ms" wait="500ms"></div>
<div is="story-svg-move" ref="#hda:#a2g" dur="1250ms" to="18 0" wait="500ms"></div>
<div is="story-svg-fill" ref="#hda:#pOut" dur="400ms" color="#00aa00" wait="500ms"></div>
<div is="story-svg-hide" ref="#hda:#a2g" dur="1250ms" wait="500ms"></div>

<div is="story-svg-text" ref="#hda:#timerTxt" txt="2" wait="1000ms"></div>
<div is="story-svg-text" ref="#hda:#timerTxt" txt="1" wait="1000ms"></div>

<div is="story-svg-text" ref="#hda:#timerTxt" txt="0"></div>
<div is="story-svg-show" ref="#hda:#a2r" dur="1250ms" wait="500ms"></div>
<div is="story-svg-move" ref="#hda:#a2r" dur="1250ms" to="18 0" wait="500ms"></div>
<div is="story-svg-fill" ref="#hda:#pOut" dur="400ms" color="silver" wait="500ms"></div>
<div is="story-svg-hide" ref="#hda:#a2r" dur="1250ms" wait="500ms"></div>

<div is="story-svg-show" ref="#hda:#pOut" dur="1250ms" wait="500ms"></div>

<ul>
<li>Events occur within <u>Elements</u> when a new value was given by the sensor,
when a timing condition is met or by some calculations.</li>
<li>Based on events Elements can send <u>Actions</u> to other elements
to start processing in the target element.</li>
<li>Combining multiple elements this way enables building complex automations
and functionality.</li>
<li>The Actions based programming model is not limited to a single device
but Actions can be sent over the network to other devices
to support even more complex scenario.</li>
<li>To integrate a device into a Home Automation server
Actions can be used to create and send MQTT messages.</li>
</ul>
<!-- <button onclick="p3.storyAction('reset')">reset</button><button onclick="p3.storyAction('start')">start</button> -->
</div>

<div id="p4" class="page" is="story-page">
<h2>3. Accessible by Browser</h2>
<p>There is a built-in Web Server
that lets you inspect, control and configure the device.</p>

<ul>
<li>The <u>Board</u> shows tiles/cards for all activated <u>Elements</u>
including the current state and data like sensor values.</li>
<li>The <u>IDE</u> enables accessing and modifying the files in the device
especially the configuration of the Element in the device.</li>
<li>The <u>LOG</u> can be inspected containing information about the state, problems and progress.</li>
<li>The <u>Web Services</u> are used by the Web UI like the dashboard
but can also be used from other devices and servers.
This allows combining multiple devices exchanging <u>Actions</u> over the network.</li>
</ul>

</div>


</div>
