# Firebase Codelab: FriendlyChat

This is the source code for the Firebase FriendlyChat codelab. It includes start and end versions of the
code for Web and Cloud Functions. To get started open the codelab instructions:

 - [Firebase Web Codelab](https://codelabs.developers.google.com/codelabs/firebase-web/).
 - [Firebase SDK for Cloud Functions Codelab](https://codelabs.developers.google.com/codelabs/firebase-cloud-functions/).


## How to make contributions?
Please read and follow the steps in the [CONTRIBUTING.md](CONTRIBUTING.md)


## License
See [LICENSE](LICENSE)


## steps taken in web-steps (marked by step in codelab)
### codelab step 4
To install the CLI run the following npm command:

npm -g install firebase-tools

To verify that the CLI has been installed correctly open a console and run:

firebase --version
Make sure the Firebase version is above 3.3.0

Authorize the Firebase CLI by running:

firebase login
Make sure you are in the web-start directory then set up the Firebase CLI to use your Firebase Project:

firebase use --add
Then select your Project ID and follow the instructions.

### 5
firebase serve
then run the app

### 6: user signin
Modify the FriendlyChat.prototype.initFirebase function in the scripts/main.js file so that it sets some shortcuts to the Firebase SDK features and initiates auth

(fixed issue: was a typo)

### 7 read messages
### 8 write messages
