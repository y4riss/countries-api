# Country API Application using React

This is a simple application that uses a public REST API https://restcountries.com/ to fetch and display data about various countries, it also fetches the weather using https://openweathermap.org/. The application is built using React framework and it is designed to help beginners learn how to fetch data from an API and display it using React components.

## Features
The Small Country API Application has the following features:

- Display a list of countries with basic information such as name, population, region, and flag.
- Filter the list of countries by region or search term.
- Click on a country to see more detailed information such as capital, languages, currencies and the weather.

## Technologies
The application is built using the following technologies:

- ReactJS
- Axios ( for fetching data )
- CSS

## Installation

To install and run the application, follow these steps:

- Clone the repository to your local machine.
- Navigate to the project directory using a command prompt or terminal.
- Run npm install to install the project dependencies.
- Run npm start to start the development server.
- Create a .env file in the root directory as follows :
    ```
    REACT_APP_WEATHER_URL = "https://api.openweathermap.org/data/2.5/weather"
    REACT_APP_WEATHER_KEY_VALUE = "plugYourKeyHere"
    ```
- Open your browser and navigate to http://localhost:3000.


## API
The API Application uses the REST Countries API to fetch data about various countries. This API is free to use and requires no authentication.

## Contributions
Contributions to the project are welcome. If you find any bugs or would like to suggest a feature, please open an issue or submit a pull request.
