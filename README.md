# type2_p3
1. Make sure you have Node.js installed on your machine. You can download it here: https://nodejs.org/en/download
	1. To check that node was successfully installed, or to check if it is already installed, open the terminal (see #4 for instructions on opening the terminal) and use this command: `node --version` a version number should be returned, or an error will be thrown if it was not installed properly.
2. Visit [www.github.com/ctheil/type2_p3](https://github.com/ctheil/type2_p3)
	1. Click the green "Code" button and click **Download Zip**
3. Extract the folder into your desktop or documents folder.
4. Open the terminal (press CMD + Space and search "Terminal")
5. Assuming the unziped folder is not contained (nested) inside an additional folder in the document or desktop folder, user this command to enter that folder:

>[!Document Folder: ]
`cd ~/documents/type2_p3` 
followed by enter key

>[!Desktop Folder: ]
`cd~/desktop/type2_p3` 
followed by the enter key

The above commands move the current directory into the project folder. You can check that you are in the correct folder by running `ls` which will return the folders contents. You should see folders like `assets` and `components`. 

Next, you will need to install the project's dependencies using NPM. Assuming node was properly installed run this command 

>[!Instaling Dependencies]
>`npm install`
>followed by the enter key

*These dependencies will only install inside of this folder, so you can delete the folder and all of it's contents once you are finished.*

Assuming the dependencies were correctly installed, you will next need to install xcode CLI. This should be simple and straight forward:

>[!Installing XCode]
>run `npm run ios` to initiate a server, however, this should throw an error or warning in the terminal saying xcode is required. Follow the instructions to install xcode.

Once Xcode is installed, you should be able to run `npm run ios` again to fully start the server and interact with the app. If you would like (what I prefer) is to download the Expo Go app for iPhone to preview the application directly on your phone. Download the app on your phone, then run `npm run ios` in your terminal. You will see a QR code in the terminal window. Scan this QR code with the default iphone camera app. This will open Expo Go and begin to boot the app on your phone. 
