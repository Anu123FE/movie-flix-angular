# MyFlixAngularClient

- This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.3.

# Description:
- This project is the client side for the myFlix App and it uses the server side aspect from myFlix (REST API and its database from Mongo DB Atlas)

# User Stories:
 - As a user, I want to be able to register/ login to see the list of movies. I would also like to see the details of the movie's directors and genres so that I can decide which movies I like.
- As a user, I want to be able to create a profile so I can add/ remove a movie from my favorite movies list
- As a user, I want to be able to edit my profile so tat I can make any changes to my User Profile as needed



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
 - Angular
 - Material Library

# Screen Shots Included:
- Welcome Screen:
<img width="1608" alt="welcome page" src="https://user-images.githubusercontent.com/80176993/171068116-8ad15692-b326-471e-8509-49d71423d2e9.png">

- Sign Up Screen:
<img width="1286" alt="Sign Up Page" src="https://user-images.githubusercontent.com/80176993/171068190-d9398e1e-bf14-4875-8fd1-115454b49c02.png">

- Login Screen:
<img width="1082" alt="Login Page" src="https://user-images.githubusercontent.com/80176993/171068291-969ac44a-fba8-42ea-ab52-689334f5a688.png">

- Home Screen:
<img width="1455" alt="Movie Screen" src="https://user-images.githubusercontent.com/80176993/171068369-2161afd6-8c97-4514-a4c9-c52409819b9d.png">

- Adding/ Removing Movies To Favorite List (using the mat-icon):
<img width="1499" alt="Added to List" src="https://user-images.githubusercontent.com/80176993/171068518-0bf7340c-1bb5-4668-88f0-341df7b1ff97.png">

- Profile View:
<img width="1022" alt="Profile View" src="https://user-images.githubusercontent.com/80176993/171068612-95c6075e-44ff-450c-91ba-500b4d66dbbb.png">



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
