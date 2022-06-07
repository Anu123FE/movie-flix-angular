import { Component, OnInit } from '@angular/core';
import { UserLoginFormComponent } from '../user-login-form/user-login-form.component';
import { UserRegistrationFormComponent } from '../user-registration-form/user-registration-form.component';
import { MatDialog } from '@angular/material/dialog';
import { MovieCardComponent } from '../movie-card/movie-card.component';
import { ProfileViewComponent } from '../profile-view/profile-view.component';
import { UserEditComponent } from '../user-edit/user-edit.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss']
})
/**
 * This class implements the welcome page
 */
export class WelcomePageComponent implements OnInit {

  constructor(public dialog: MatDialog,
    public router: Router) { }
  ngOnInit(): void {
  }
  /**
 * This is the function that will open the registeration dialog box when the signup button is clicked
 */
  openUserRegistrationDialog(): void {
    this.dialog.open(UserRegistrationFormComponent, {
      width: '280px'
    });
  } 
  /**
 * This is the function that will open the login dialog box when the login button is clicked
 */
openUserLoginDialog(): void {
    this.dialog.open(UserLoginFormComponent, {
      width: '280px'
    });
  }
  /**
 * This is the function that will open the movie-cards when the all movies button is clicked
 */
  openMoviesDialog(): void {
    // this.dialog.open(MovieCardComponent, {
    //   width: '80%',
    //   height: '80%'
    // });
    this.router.navigate(['movies']);
  }
  /**
 * This is the function that will open the user profile dialog box when the profile button is clicked
 */
  openProfileDialog() {
    // this.dialog.open(UserEditComponent, {
    //   width: '50%',
    //   height: '80%'
    // });
    this.router.navigate(['profile']);
  }
  
}
