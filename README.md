# Phishing Mobile App

Phishing mobile application made in React Native v0.63.4 for both Android and iOS devices. One code for both platforms.

In addition to sending an email and password, application will send device information such as network interface MAC address and OS name and version.

You can modify and expand this application to your liking. You have everything that needs to get you started.

You can easily customize CSS and other settings in [\\src\\phishing-app\\constants.js](https://github.com/ivan-sincek/phishing-mobile-app/tree/master/src/phishing-app/constants.js) to make it look more like the company you are testing, e.g. change colors, logo, etc.

Mobile application was tested on Samsung Galaxy J6 with Android v9.0 (Pie). Not yet tested on iOS devices.

API was tested on XAMPP for Windows v7.4.3 (64-bit).

Made for educational purposes. I hope it will help!

Future plans:

* icon and name customizations,
* how to compile,
* border style for all four input border sides,
* email regular expression.

## How to Run

Import [\\db\\phishing_mobile_app.sql](https://github.com/ivan-sincek/phishing-mobile-app/blob/master/db/phishing_mobile_app.sql) to your database server.

Copy all the content from [\\src\\api\\](https://github.com/ivan-sincek/phishing-mobile-app/tree/master/src/api) to your server's web root directory (e.g. to \\xampp\\htdocs\\ on XAMPP).

Change the database settings inside [\\src\\api\\php\\config.ini](https://github.com/ivan-sincek/phishing-app/blob/master/src/api/php/config.ini) as necessary.

Open your preferred console from [\\src\\phishing-app\\](https://github.com/ivan-sincek/phishing-mobile-app/tree/master/src/phishing-app) and run the commands shown below.

Install Node Version Manager, then, install and set Node.js to the required version:

```fundamental
nvm install 14.8.0

nvm use 14.8.0
```

Install React Native:

```fundamental
npm install -g create-react-native-app
```

Install Node.js modules:

```fundamental
npm install
```

Clean Gradle Wrapper:

```bash
cd android && gradlew clean && cd ..
```

Launch the application on an Android device:

```fundamental
npm run android
```

Launch the application on an iOS device:

```fundamental
npm run ios
```

---

You can place your own logo in [\\src\\api\\img\\](https://github.com/ivan-sincek/phishing-mobile-app/tree/master/src/api/img) and then change the [settings](https://github.com/ivan-sincek/phishing-mobile-app/tree/master/src/phishing-app/constants.js) as necessary.

## Application Content

General (\\root\\):

* [constants.js](https://github.com/ivan-sincek/phishing-mobile-app/blob/master/src/phishing-app/constants.js) (change the server IP address)
* [settings.js](https://github.com/ivan-sincek/phishing-mobile-app/blob/master/src/phishing-app/settings.js) (Async Storage)
* [App.js](https://github.com/ivan-sincek/phishing-mobile-app/blob/master/src/phishing-app/App.js) (Stack Navigator)

Network (\\root\\assets\\network\\):

* [baseRequest.js](https://github.com/ivan-sincek/phishing-mobile-app/blob/master/src/phishing-app/assets/network/baseRequest.js)
* [userRequest.js](https://github.com/ivan-sincek/phishing-mobile-app/blob/master/src/phishing-app/assets/network/userRequest.js)

Screens (\\root\\assets\\screens\\):

* [baseScreen.js](https://github.com/ivan-sincek/phishing-mobile-app/blob/master/src/phishing-app/assets/screens/baseScreen.js)
* [splashScreen.js](https://github.com/ivan-sincek/phishing-mobile-app/blob/master/src/phishing-app/assets/screens/splashScreen.js)
* [signInScreen.js](https://github.com/ivan-sincek/phishing-mobile-app/blob/master/src/phishing-app/assets/screens/signInScreen.js)
* [mainScreen.js](https://github.com/ivan-sincek/phishing-mobile-app/blob/master/src/phishing-app/assets/screens/mainScreen.js)
* [noConnectionScreen.js](https://github.com/ivan-sincek/phishing-mobile-app/blob/master/src/phishing-app/assets/screens/noConnectionScreen.js)

Components (\\root\\assets\\components\\):
* [actionBar.js](https://github.com/ivan-sincek/phishing-mobile-app/blob/master/src/phishing-app/assets/components/actionBar.js)

Permissions (\\root\\android\\app\\src\\main\\):

* [AndroidManifest.xml](https://github.com/ivan-sincek/phishing-mobile-app/blob/master/src/phishing-app/android/app/src/main/AndroidManifest.xml)

## Images

<p align="center"><img src="https://github.com/ivan-sincek/phishing-mobile-app/blob/master/img/phishing_app.jpg" alt="Phishing Application"></p>

<p align="center">Figure 1 - Phishing Application</p>

<p align="center"><img src="https://github.com/ivan-sincek/phishing-mobile-app/blob/master/img/db.jpg" alt="Database"></p>

<p align="center">Figure 2 - Database</p>
