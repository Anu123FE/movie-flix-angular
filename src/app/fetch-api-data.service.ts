import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

/**
 * Declaring the api url that will provide data for the client app
 */

const apiUrl = 'https://movie-api-v001.herokuapp.com';

/**
 * get username from localStorage
 */

const username = localStorage.getItem('username');

@Injectable({
  providedIn: 'root'
})
// export class FetchApiDataService {

//   constructor(private http: HttpClient) {}
// }

export class FetchApiDataService {
  /**
 * Inject the HttpClient module to the constructor params
 * This will provide HttpClient to the entire class, making it available via this.http
 */
  constructor(private http: HttpClient) {
  }
  /**
 * User registration endpoint
 */
  public userRegistration(userDetails: any): Observable<any> {
    console.log(userDetails);
    return this.http.post(apiUrl + '/users/register', userDetails).pipe(
    catchError(this.handleError)
    );
  }
  /**
 * User Login endpoint
 */
  public userLogin (userDetails: any): Observable<any> {
    console.log(userDetails);
    return this.http
    .post(apiUrl + '/login', userDetails)
    .pipe(catchError(this.handleError));
  }

  /**
 * Get allMovies endpoint
 */
  getAllMovies(): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http.get(apiUrl + '/movies', {headers: new HttpHeaders(
      {
        Authorization: 'Bearer ' + token,
      })}).pipe(
      map(this.extractResponseData),
      catchError(this.handleError)
    );
  }
   /**
 * Getting a single movie
 */
    getSingleMovie(): Observable<any> {
      const token = localStorage.getItem('token');
      return this.http
       .get(apiUrl + 'movies/:movieId', {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + token,
        }),
      })
      .pipe(map(this.extractResponseData), catchError(this.handleError));
  }

  /**
 * Getting the director
 */
  getDirector(): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http
      .get(apiUrl + 'movies/director/:Name', {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + token,
        }),
      })
      .pipe(map(this.extractResponseData), catchError(this.handleError));
  }

  /**
 * Getting the genre
 */
    getGenre(): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http
      .get(apiUrl + 'movies/genre/:Name', {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + token,
        }),
      })
      .pipe(map(this.extractResponseData), catchError(this.handleError));
  }

  /**
 * getting fav movies
 */
    public getFavoriteMovies(): Observable<any> {
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('username');
    return this.http
      .get(apiUrl + `users/${username}`, {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + token,
        }),
      })
      .pipe(map(this.extractResponseData), catchError(this.handleError));
  }

  /**
 * adding a movie to the fav list endpoint
 */
  public addFavoriteMovies(id: string): Observable<any> {
  const token = localStorage.getItem('token');
  const username = localStorage.getItem('username');
  return this.http
    .post(apiUrl + `/users/${localStorage.getItem('user')}/movies/${id}`, null, {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + token,
      }),
    })
    .pipe(map(this.extractResponseData), catchError(this.handleError));
}

/**
 * deleting a fav movie from the list
 */
  public deleteFavoriteMovies(id: string): Observable<any> {
  const token = localStorage.getItem('token');
  const username = localStorage.getItem('username');
  return this.http
    .delete(apiUrl + `/users/${localStorage.getItem('user')}/movies/${id}`, {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + token,
      }),
    })
    .pipe(map(this.extractResponseData), catchError(this.handleError));
}

/**
 * Getting a user's profile
 */
 getUserProfile(): Observable<any> {
  const token = localStorage.getItem('token');
  const username = localStorage.getItem('user');
  return this.http
    .get(apiUrl + `/user/${username}`, {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + token,
      }),
    })
    .pipe(map(this.extractResponseData), catchError(this.handleError));
}

/**
 * Editing a user's profile
 */
editUserProfile(userData: object): Observable<any> {
  const token = localStorage.getItem('token');
  const username = localStorage.getItem('user');
  return this.http
    .put(apiUrl + `/users/${username}`, userData, {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + token,
      }),
    })
    .pipe(map(this.extractResponseData), catchError(this.handleError));
}

/**
 * deleting a user's profile
 */
public deleteUserProfile(): Observable<any> {
  const token = localStorage.getItem('token');
  const username = localStorage.getItem('user');
  return this.http
    .delete(apiUrl + `/users/${username}`, {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + token,
      }),
    })
    .pipe(map(this.extractResponseData), catchError(this.handleError));
}

/**
 * Data Extraction
 */
private extractResponseData(data: any | Object): any {
  return data || {};
}


/**
 * Tackling errors
 */
private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
    console.error('Some error occurred:', error.error.message);
    } else {
    console.error(
        `Error Status code ${error.status}, ` +
        `Error body is: ${error.error}`);
    }
    return throwError(
    'Something bad happened; please try again later.');
  }
  

}
