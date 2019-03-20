## What's the Weather Like? | Backend Challenge
This backend challange is for the Hack to Help Backend Developer Commitee recruitment. Anyone applying to be a backend developer for Hack to Help must complete this challenge.

### Application Overview
The application that you are required to modify is a weather application that tells the user the current weather based on his/her location. The application gets the geolocation of the user and uses the [OpenWeatherMap](https://openweathermap.org/current) "Current Weather API" to get the current weather.

You will mainly be concerned with the server-side code which is in `index.js`. This application is using `Node.js` and `Express` to build a server that will be hosting this application.

### Challenge

*Always use best practices!!*

*Must have Node.js installed before hand -- v8.11.3 recommended*

**Starting the server**

```
npm start
```

#### Part 1

Currently the application is looking for a `style.css` file in `public/src/css/`. This file does not exist yet. You goal is to convert the `sass` in `resources/scss/style.css` to `css` and store it in `public/src/css/` with the name `style.css`. This must be performed by adding a package to project. You do **not** need to add build tools such as `webpack` or `gulp`, keep it simple. You must also add a script so that running `npm run build` calls the proper command to transpile `scss` to `css` in the correct location.

You can test if this has executed properly by opening the proper port on your browser. The output should look something like this.

![Clear Night](https://raw.githubusercontent.com/HackToHelpUTD/frontend-challenge/master/.github/clear-night.png)

#### Part 2



### Other Details
You may change other parts of the code if you need to. Be prepared to explain your changes.

### Submission
You can either download a zip file and edit that or fork the repo and make your changes there. Whichever way you decide to proceed, make sure to bring in your laptop on the day of your scheduled interview to show us your final result and be prepared to talk through the choices you made. See you soon!

### Questions? Concerns?
Email us at [hacktohelputd@gmail.com](mailto:hacktohelputd@gmail.com).