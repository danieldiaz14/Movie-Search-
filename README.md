# TV-Search

## A simple app to search your favorite TV shows and see some details about them.

### Goal? Convert a project written in html/css/JS to a React Project
This project was first created when I was learning how to interact with RESTful apis. Intially learning how to create get requests and manipulate that data to display information I received from the internet. This project has since then been fully converted to a React project! So the point of this was learning how to create components and using asynchronous to dynamically load information when available and create a more dynamic single page experience. 

### Problems
I had a lot of issues when I first created this project because I had to use jQuery to push the data that was fetched into empty divs. I had to create several HTML pages because of this. When using React those issues completely disappeared and it became a more enjoyable experience while practicing this framework. Had to create asynchronous methods with call backs in child components because the child components were accepting user input while returning it to the main component to fetch the data from the API
### Technical Choices
React was used to create all the user interfaces in this project. I chose React because it was a library/framework that I learned at my internship and I wanted to practice it some more. I use a mix of class based and functional depending on how complex the state would be for that component. React is just to create user interfaces so to create the actual get requests to the API sever I decided to use axios. I read online there is a lot less setup when using axios as opposed to the fetch api. Because of that and this being a small project it was a clear decision. Used bootstrap for styling and API was themoviedb.

https://www.themoviedb.org/documentation/api?language=en-US
