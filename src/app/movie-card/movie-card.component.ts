import { Component, OnInit } from '@angular/core';
import { throws } from 'assert';
import { FetchApiDataService } from '../fetch-api-data.service';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DirectorCardComponent } from '../director-card/director-card.component';
import { GenreCardComponent } from '../genre-card/genre-card.component';
import { SynopsisCardComponent } from '../synopsis-card/synopsis-card.component';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})

/**
 * This displays a single movie's info
 */
export class MovieCardComponent {
  user: any[] = [];
  Username = localStorage.getItem('user');
  movies: any[] = [];
  currentUser: any = null;
  currentFavs: any = null;
  favIcon:string = "favorite_border";

  constructor(
    public fetchApiData: FetchApiDataService,
    public dialog: MatDialog, 
    public snackBar: MatSnackBar,
    public router: Router
    ) { }

  ngOnInit(): void {
    this.getMovies();
    this.getCurrentUser();
  }
  /**
 * This is for getting all the movies
 */
  getMovies(): void {
    this.fetchApiData.getAllMovies().subscribe((resp: any) => {
      this.movies = resp;
      console.log(this.movies);
      return this.movies;
    });
  }

  /**
 * This is for getting the director details
 * @params
 * @returns
 */
  openDirectorDialog(name: string, bio: string, birth: string): void {
    this.dialog.open(DirectorCardComponent, {
      data: {
        Name: name,
        Bio: bio,
        Birth: birth,
      },
      width: '500px',
      panelClass: 'director-custom'
    });
    console.log(name)
  }

  /**
 * This is for getting the genre details
 */
  openGenreDialog(name: string, description: string): void {
    this.dialog.open(GenreCardComponent, {
      data: {
        Name: name,
        Description: description,
      },
      width: '500px',
      panelClass: 'genre-custom'
    });
  }

  /**
 * This is for getting the details about the movie
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
 * This is for getting the present user
 */
  getCurrentUser(): void {
    const username = localStorage.getItem('user');
    this.fetchApiData.getUserProfile().subscribe((res: any) => {
      console.log(res)
      const currentUser = res.Username
      console.log(currentUser)
      this.currentFavs = res.FavoriteMovies
      console.log(this.currentFavs)
    });
  }

  /**
 * This is to add a movie to fav list
 */
  addToUserFavs(id: string, Title: string): void {
    console.log(id);
    const token = localStorage.getItem('token');
    console.log(token)
    this.fetchApiData.addFavoriteMovies(id).subscribe((res: any) => {
      this.snackBar.open(`Successfully added ${Title} to favorite movies.`, 'OK', {
        duration: 4000,
        verticalPosition: 'top'
      });
      console.log(res)
      this.ngOnInit();
    });
  }
  /**
 * This is to delete a movie from the fav list
 */
  deleteFavoriteMovies(id: string, Title: string): void {
    console.log(id)
    this.fetchApiData.deleteFavoriteMovies(id).subscribe((res: any) => {
      this.snackBar.open(`${Title} has been removed from favorites`, 'OK', {
        duration: 2000,
        verticalPosition: 'top'
      });
      this.ngOnInit();
      console.log(res)
    });
    return this.getCurrentUser();
  }

  /**
 * @returns a boolean value
 */
  checkFav(id: string): boolean {
    // const movieId = this.currentFavs
  if(this.currentFavs.find((x:any) =>x === id) ) return true
  else return false
  //  console.log(this.currentFavs)
  //   return true;
  }

  /**
 * This is to complete the logic for adding/removing movies from fav list
 */
  addRemoveMovieFromFavs(id: any, title: string) : void {
    if (this.checkFav(id)) {
      this.deleteFavoriteMovies(id, title)
    }
    else {
      this.addToUserFavs(id, title)
    }
  }
}
