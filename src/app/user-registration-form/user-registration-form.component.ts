/**
 * User can register using his/her details using this form 
 */
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

/**
 * You'll use this import to close the dialog on success
 */
import { MatDialogRef } from '@angular/material/dialog';

/**
 * This import brings in the API calls we created in 6.2
 */
import { FetchApiDataService } from '../fetch-api-data.service';

/**
 * This import is used to display notifications back to the user
 */
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-user-registration-form',
  templateUrl: './user-registration-form.component.html',
  styleUrls: ['./user-registration-form.component.scss']
})
/**
 * This class is for implementing the user registeration form
 */
export class UserRegistrationFormComponent implements OnInit {
  @Input() userData = { Username: '', Password: '', Email: '', Birthday: '' };

  constructor(
    public fetchApiData: FetchApiDataService,
    public dialogRef: MatDialogRef<UserRegistrationFormComponent>,
    public snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }
  /**
 * This is the function responsible for sending the form inputs to the backend
 */
registerUser(): void {
  this.fetchApiData.userRegistration(this.userData).subscribe((result: any) => {
   this.dialogRef.close();                        // This will close the modal on success!
   this.snackBar.open(result, 'OK', {
      duration: 2000
   });
  }), (result: any) => {
    this.snackBar.open(result, 'OK', {
      duration: 2000
    });
  };
}

}
