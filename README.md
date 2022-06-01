# MyFlixAngularClient

- This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.3.

# Description:
- This project is the client side for the myFlix App and it uses the server side aspect from myFlix (REST API and its database from Mongo DB Atlas)

# User Stories:
 - As a user, I want to be able to register/ login to see the list of movies. I would also like to see the details of the movie's directors and genres so that I can decide which movies I like.
- As a user, I want to be able to create a profile so I can add/ remove a movie from my favorite movies list
- As a user, I want to be able to edit my profile so that I can make any changes to my User Profile as needed

# Main Features:
- Upon launch of the website, the user sees a welcome page, which has the options - Sign Up (for new users), Login (for returning users), All movies and Profile
- Upon signing up (for a new user), the user is prompted to login
- The user then enteers the username and password to login
- Once authenticated, the user is shown a list of movies
- The user can add or delete a favorite movie to/from the list
- The user can also click on the director's name to see more info about the movie's director
- The user can click on the genre to see more details about the movie's genre
- The user is also able to edit his/her profile details

# Tech Used:
  Angular is used for this project as it is most easily used for complex UIs (as is the case for this app) and also cause it has ready to use components   which come set up. It is easy to use, as me especially as a beginner developer, I did not have to write the skeletal framework of the components from     scratch.
 - Angular
 - Material Library

# Challenges Faced and The Learning Experience:
- Each endpoint needs its own component to be created. While creating the component was easy, it was difficult to link 1 component to the other. I had missed adding the correct imports and exports which I later rectified by trial and error
- I faced a lot of issues routing the path to the correct endpoints, the end point path had to eb the exact same as was defined in the movieapi and this was a little tedious
- I also found adding a background image to my welcome page really difficult. I found that the relative path I had added was wrong and I rectified this which lead to the resolution of this issue
- Another aspect that I found really difficult was adding and removing a movie to/from a user's favorite movie list. I used the <mat-icon> feature of angular to resolve this but then I had to add in a logic which checked if a movie was included in the list and then it changed the mat-icon from an 'unfilled heart' to a 'filled heart' (or vice versa0 depending on whether the movie was being added to the list or removed from the list
- The styling of the app also took a little time as I had to use SCSS which is a bit different from CSS
- I realised how important it is to use Chrome DEV TOOLS. I used to have bugs caused due to typos in my code which are really card to find. Running the app on the local host and then inspecting the page using Chrome Dev Tools made debugging so much more easier
  
# End Points:
  - New User registration
  - User login
  - Get all the movies in the database
  - Get the details of a specific movie
  - Get the details of the genre of the specific movie
  - Get the details of the director of a specific movie
  - Edit the user profile
  - Delete the user profile
  - Add a movie to a user's favorite list
  - Remove a movie from a user's favorite list

# Development Process:
- Install Angular
- Create a new Angular project
- Navigate to project folder to run project
- Install project to load data from the movie_api (database on MongoDB) using angular HttpClient
- Add the imports to fetch-api-data.service.ts
- Add in the code for linking the end points (mentioned above) to the respective components for all API calls
- Install MaterialUI library
- Use NgModule to complete the imports
- Create components for each endpoint
- Add routing
- Commit and push all the commits to the GitHub repo linked to the project
- Publish the project on GitHub pages using the -ghpages cli

# Screen Shots Included:
- Welcome Screen:
<img width="1608" alt="welcome page" src="https://user-images.githubusercontent.com/80176993/171068116-8ad15692-b326-471e-8509-49d71423d2e9.png">

- Sign Up Screen:
<img width="1286" alt="Sign Up Page" src="https://user-images.githubusercontent.com/80176993/171068190-d9398e1e-bf14-4875-8fd1-115454b49c02.png">

- Login Screen:
<img width="1082" alt="Login Page" src="https://user-images.githubusercontent.com/80176993/171068291-969ac44a-fba8-42ea-ab52-689334f5a688.png">

- Home Screen:
<img width="1455" alt="Movie Screen" src="https://user-images.githubusercontent.com/80176993/171068369-2161afd6-8c97-4514-a4c9-c52409819b9d.png">

- Adding Movies To Favorite List (using the mat-icon):
<img width="1499" alt="Added to List" src="https://user-images.githubusercontent.com/80176993/171068518-0bf7340c-1bb5-4668-88f0-341df7b1ff97.png">

- Removing Movies From the Favorite List (using mat-icon):
<img width="1391" alt="Remove movie" src="https://user-images.githubusercontent.com/80176993/171069098-615f073c-e530-4027-8f28-1106a35013f3.png">

- Profile View:
<img width="1022" alt="Profile View" src="https://user-images.githubusercontent.com/80176993/171068612-95c6075e-44ff-450c-91ba-500b4d66dbbb.png">

 - Kanban Board I Used For This Project's Work:
 <img width="1625" alt="Kanban Board" src="https://user-images.githubusercontent.com/80176993/171068770-687000d2-b440-4b96-8aec-c1973a7f2feb.png">


## Development server

Run `ng serve` for a dev server. Navigate to [Here](https://anu123fe.github.io/movie-flix-angular/welcome). The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
