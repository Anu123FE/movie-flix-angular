import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

import { FetchApiDataService } from  '../fetch-api-data.service';
import { DirectorCardComponent } from '../director-card/director-card.component';
import { GenreCardComponent } from '../genre-card/genre-card.component';
import { SynopsisCardComponent } from '../synopsis-card/synopsis-card.component';
import { UserEditComponent } from '../user-edit/user-edit.component';


@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.scss']
})

/**
 * This class is for viewing the user profile
 */
export class ProfileViewComponent implements OnInit {
  user: any = {};
  username: any = localStorage.getItem('user');
  movies: any[] = [];
  favoriteMovies: any[] = [];
  displayElement: boolean = false

  constructor(
  
    public fetchApiData: FetchApiDataService,
    public snackBar: MatSnackBar,
    public dialog: MatDialog,
    private router: Router
  
  ) { }

  ngOnInit(): void {
    this.getUserProfile();
    this.getFavoriteMovies();
  }

  /**
 * This is for getting the user profile
 */

  getUserProfile(): void {
    const username = localStorage.getItem('user');
    if (username) {
      this.fetchApiData.getUserProfile().subscribe((res: any) => {
        this.user = res;
        console.log(this.user);
        return this.user;
      });
    }
  }

  /**
 * this is to set the parameters of how the UserEdit dialog box should look like
 */

  openEditUserProfile(): void {
    this.dialog.open(UserEditComponent, {
      width: '500px',
      panelClass: 'edit-user-custom',
    });
  }

  /*getFavoriteMovies(): void {
    this.fetchApiData.getFavoriteMovies().subscribe((res: any) => {
      this.favoriteMovies = res.FavoriteMovies;
      return this.favoriteMovies;
    });
  }*/
  
  /**
 * This is to get the fav movies, seeing if the movie id is present in user's fav movie list
 */
  getFavoriteMovies(): void {
    this.fetchApiData.getAllMovies().subscribe((resp: any) => {
      this.movies = resp;
      this.movies.forEach((movie: any) => {
        if (this.user.FavoriteMovies.includes(movie._id)) {
          this.favoriteMovies.push(movie);
        }
      });
    });
    console.log(this.favoriteMovies);
  }

  /**
 * This is to determine the synopsis dialog box parameters
 * @params 
 * @returns
 */

  openSynopsis(title: string, imagePath: any, description: string): void {
    this.dialog.open(SynopsisCardComponent, {
      data: {
        Title: title,
        ImagePath: imagePath,
        Description: description,
      },
      width: '500px',
      panelClass: 'synopsis-custom'
    });
  }

  /**
 * This is to set the parameters of the director's deatils dialog box
 * @params
 * @returns
 */
  openDirectorDialog(title: string, name: string, bio: string, birth: string): void {
    this.dialog.open(DirectorCardComponent, {
      data: {
        Title: title,
        Name: name,
        Bio: bio,
        Birth: birth,
      },
      width: '500px',
      panelClass: 'director-custom'
    });
  }
  /**
 * This is for setting the parameters of the genre dialog box
 */
  openGenreDialog(title: string, name: string, description: string): void {
    this.dialog.open(GenreCardComponent, {
      data: {
        Title: title,
        Name: name,
        Description: description,
      },
      width: '500px',
      panelClass: 'genre-custom'
    });
    console.log('Name: ' + name)
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
   
  /**
 * This is for removing a movie from the fav list
 */
  deleteFavoriteMovies(MovieID: string, Title: string): void {
    this.fetchApiData.deleteFavoriteMovies(MovieID).subscribe((res: any) => {
      this.snackBar.open(`Successfully removed ${Title} from favorite movies.`, 'OK', {
        duration: 4000, verticalPosition: 'top'
      });
      setTimeout(function () {
        window.location.reload();
      }, 4000);
    });
  }
}

