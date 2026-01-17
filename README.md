# iTunes Song Search by Artist
A simple web application that uses the **iTunes Search API** to fetch and display songs by artist using **HTML**, **JavaScript**, and the **Fetch API**.

This project demonstrates how to consume a public REST API, handle user input, work with HTTP requests, parse JSON responses, and update the DOM dynamically without any frameworks.


##  Purpose
This project was built to showcase:
* Understanding of REST APIs and HTTP
* Working with external data sources
* Client-side JavaScript logic
* Defensive programming and edge case handling


# Features
* Search for songs by artist name
* Fetches data from Apple’s public iTunes Search API
* Handles multi-word artist names safely using URL encoding
* Displays user-friendly messages for:
  * Empty input
  * No results found
  * Failed API requests
* Fully client-side (no backend required)


# Tech Stack
* HTML5
* Vanilla JavaScript (ES6+)
* Fetch API
* iTunes Search API


##  How It Works
1. The user enters an artist name into the input field.
2. When the **Search** button is clicked, the app sends an HTTP `GET` request to the iTunes Search API.
3. The artist name is **URL-encoded** to safely handle spaces and special characters.
4. The API responds with structured **JSON** data.
5. The app parses the JSON and dynamically renders a list of song titles on the page.
6. Basic error handling ensures the app fails gracefully when issues occur.


## API Used
**iTunes Search API (Apple)**
A public API provided by Apple that allows developers to search for media content such as music, artists, albums, and more.

* Base URL: `https://itunes.apple.com/search`
* Parameters used in this project:

  * `term` – artist name
  * `entity` – song
  * `limit` – number of results

Official Documentation Found here:
https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/iTuneSearchAPI/)


##  Error Handling
The application includes basic error handling to improve user experience:
* Checks the HTTP response status before parsing JSON
* Displays an error message if the request fails
* Displays a message when no songs are found


## Demo
You can view a live demo by opening `index.html` in a browser or hosting the project using GitHub Pages.



