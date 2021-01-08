# Financial Calculator

##### How to run Financial Calculator:
- Make sure you have the react native development environment set up. If you don't I recommend using the React Native CLI Quickstart guide (https://reactnative.dev/docs/environment-setup)
	- Follow the instructions of the relevant section (iOS or Android depending on which platform you want to run the app on) up to the "Creating a new application" section.
- Fork this repository
- Run the following commands:  
`npm install react-native-select-input-ios --save`  
`npx react-native start`  
- Keeping that terminal window open, open a new terminal window.  
- If you want to run the iOS version, run:   
`npx react-native run-ios`  
- If you want to run the Android version, run:  
`npx react-native run-android`  

##### What the application allows the user to do:
- Calculate Profit On Return (POR) and Cash Margin given the appropriate parameters.

##### Notes on the design:
- At times I have used different images assets for the android and iOS versions to make the app feel in sync with the operating system on which it is running
- I have kept the code highly modular and reusable. Very little code is duplicated between the `InformationPanelPOR` and `InformationPanelMargin` components.
    

