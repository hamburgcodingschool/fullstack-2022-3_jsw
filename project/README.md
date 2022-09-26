## Travel Blog

### Objective
The goal for this project is to build a Travel Blog with HTML, CSS, and JS.
You will be storing the data in JSON Server and consuming content from an external `REST API`

### Features
#### A list of travel locations
- Build a list of locations you travelled to
- The following information should be shown:
  - The name of the city and country
  - When you were there - a from and to date
  - A description about the trip
  - Be creative, you can add as much information as you want, like the current weather of each city
  - This list of locations should be read from and written to JSON Server

#### A form to add travel locations
- A user should be able to add travel locations with the needed information
- You can experiment with the various input elements, e.g. `<input type="date" />` or `<textarea>`

### Show the current weather of the travel location
* You can fetch the current weather (including an icon) of the travel location using the [OpenWeatherMap API](https://openweathermap.org/api)
* Show it as one of the information in your travel location

### Bonus tasks
#### 1- A user should be able to remove travel locations
- Please confirm the deletion operation

#### 2- A user should be able to edit travel locations

#### 3- Allow the user to customize the appearance of the site
- Provide a form where the user can change some of the visual characteristics of the site, like text color, background-color (e.g. dark mode), font-size, etc.
- Store this information on LocalStorage so that each time the user opens the site, his/her specific visual characteristics will be applied

#### 4- Show a map with the travel location on a map
- So far, we have not played around with embedding a Google Map. If you want to, feel free to play around with the [Google Maps API](https://developers.google.com/maps/documentation/javascript/overview) and how to integrate it in your app. You could then show the travel location on a map for every travel location.
- Show a map with all travel locations

### Considerations
- First do a low fidelity sketch (pen and paper work great) of what your website is going to be like;
- Create a new JSON object in a db.json file, with all the fields you are using to store travel information;
- When starting to implement, focus on creating the HTML and CSS first, JS becomes much simpler when you already have an UI to code for;
- Your CSS should be a in a separate .css file and linked to the HTML pages with the `link` tag;
- Your JS should also be in a separate .js file and linked to the HTML pages with the `script` tag;
- Style your website at will, feel free to use a CSS framework like Tailwind, Bulma or Bootstrap;
- You can ask the teacher for support at any time
* You will have two consultation classes:
	* 28.09. 18:00 - 20:00
	* 05.10. 18:00 - 20:00

## Submission
Submission deadline is on the `10th of October`
To submit the project, send us an email with the following information:
- Project:
  - Link to your project's Github repository or Code Sandbox
- If you did any bonus tasks, list them
- Send it to Helder (helder@hamburgcodingschool.com) and Teresa (teresa@hamburgcodingschool.com)