# Full Stack Coding Challenge

## Idea of the App
 
Air pollution is an important topic and will influence the quality of our future. As the hazards of air pollution remain invisible without air quality data, AirPoll as a young, international startup, has developed and placed air quality monitors all over the world in order to provide the largest air quality database.

AirPoll is a young, international startup which is aware of the fact, that the hazards of air pollution will remain invisible without air quality data. AirPoll has developed and placed air quality monitors all over the world in order to provide the largest air quality database.

You have to build an air quality app that makes it possible for everyone to check the air quality in their cities.

### Your Tasks

#### In the Frontend:

The client wants you to build a web application to display the air quality index and other relevant properties for countries, its cities and its locations.

The frontend should be user friendly and fulfill the following requirements;

* Responsive UI, ensuring adaptive viewport for mobile devices and PC/laptop
* Clean and modern design
* The following attributes need to be displayed in the order given:
  * the `location` name
  * the `city` and `country` name
  * the `air pollution` value and its `measurement unit` and `particulate matter` parameter
  * the location's `longitude` and `latitude` value
  * the `local date and time` value
* The list must support infinite scrolling and should be sortable by each attribute(ASC and DESC)

Additionally, the client demands a solution capable of filtering the data by;
* one country
* one city

The project will soon scale and more developers will support you on feature development. Therefore, clean code principles, appropriate test coverage and code documentation are key factors and highly valued.

#### In the Backend:

The design and implementation of the backend component is part of your responsibility. The air quality data for the web app is provided by the [Open AQ Platform API](https://openaq.org/#/?_k=bgfemx).
The backend needs to be capable to;

* Fetch data from AQ public API
* Insert AQ API data into a database
* Provide endpoint to serve AQ data to the frontend

## Setup

Clone the repository

### Frontend

This section describes the procedure to run the project with our predefined setup by using Angular.
Of course, you are also allowed to use your fronted framework (and package manager) of choice like React, Vue, Svelte etc., or even your own custom approach.

#### What you need to get our example going

* Install [Node.js 12.16.2](https://nodejs.org/en/download/) or later which includes npm
* Install [Angular CLI](https://angular.io/guide/setup-local) via npm in your terminal: `npm install -g @angular/cli`

#### How to run the frontend application

* Once checked out, navigate to the `frontend` folder
* In the terminal, run `npm install` to install all dependencies
* To run the application, execute the command `ng serve` (development mode)
* Navigate to `http://localhost:4200/` in your browser to view the application

## Things to keep in mind

Please understand that this challenge is not decisive if you are applying to work at Circunomics. This is just an opportunity for us both to work together and get to know each other in a more technical way.

* Features are as important as code quality. Try to balance between code quality and number of features implemented
* Your code will be evaluated in this order based on: code structure, programming best practices, legibility and number of features implemented or speed
* Re/use as much as possible libraries and available code (watch out the quality of the code!)
* The git commit history (and git commit messages) will be also evaluated
* Please run tests and provide the results of the first and last run
* Do not forget to include few details about the project in the PROJECT.md

## Submission

Now after you finished your app and we assume that you already pushed it to your repo account, if so please follow the instructions below:

1. Set the Repo privacy:
   - If the repo is sensitive and you're not comfortable sharing it publicly please tell us where you are going to push the code and we will provide you with an user that you can give access to.
   - If it's public go to the next step
2. Send the repo's link to this email: `jobs@circunomics.com`.

## Copyright and License

Code released under the MIT License.
