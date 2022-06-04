import { Component, OnInit, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';
import { FetchApiDataService  } from '../fetch-api-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
/**
 * This gives the accesss to the user to edit the user credentials
 */
export class UserEditComponent implements OnInit {
  Username = localStorage.getItem('user');
  user: any = {};
  
  @Input() userData = {
    Username: this.user.Username,
    Password: this.user.Password,
    Email: this.user.Email,
    Birthday: this.user.Birthday,
    Favorites: this.user.FavoriteMovies
  }

  constructor(
    public fetchApiData: FetchApiDataService,
    public dialogRef: MatDialogRef<UserEditComponent>,
    public snackBar: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getUser();
  }
  /**
 * This gives the user details
 */
  getUser(): void {
    this.fetchApiData.getUserProfile().subscribe((resp: any) => {
      this.user = resp;
      console.log(this.user);
      return this.user
    });
  }

  /**
 * this function allows the user to edit and save his/her credentails
 */
  
  editUserProfile(): void {
    this.fetchApiData.editUserProfile(this.userData).subscribe((resp: any) => {
      this.dialogRef.close();
      localStorage.setItem('user', resp.Username);
      this.snackBar.open('Profile update successful.', 'OK', {
        duration: 2000
      });
      setTimeout(() => {
        window.location.reload();
      });
    });
  }

     /**
 * This is for setting the user deletion
 */
      deleteUserProfile(): void {
        if (confirm('Are your sure? This can\'t be undone.')) {
          this.router.navigate(['welcome']).then(() => {
            this.snackBar.open('Deleted', 'OK', {
              duration: 6000,
              verticalPosition: 'top'
            });
          });
          this.router.navigate(['welcome'])
          this.fetchApiData.deleteUserProfile().subscribe(() => {
            localStorage.clear();
          });
        }
      }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
