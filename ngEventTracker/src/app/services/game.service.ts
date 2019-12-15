import { Game } from './../models/game';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  // FIELDS
  baseUrl = 'http://localhost:8090/';
  url = this.baseUrl + 'api/games';

  // CONSTRUCTORS
  constructor(private http: HttpClient) { }

  // METHODS
  public index() {
    return this.http.get<Game[]>(this.url + '?sorted=true')
      .pipe(
        catchError((err: any) => {
          console.log(err);
          return throwError('KABOOM');
        })
      );
  }

  public create(newGame: Game) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
    return this.http.post<Game>(this.url, newGame, httpOptions)
      .pipe(
        catchError((err: any) => {
          console.log(err);
          return throwError('KABOOM');
        })
      );
  }

  public update(game: Game) {
    const httpOptions = {
      headers: {
        'Content-type': 'application/json'
      }
    };
    return this.http.put(`${this.url}/${game.id}`, game, httpOptions).pipe(catchError((err: any) => {
      console.log(err);
      return throwError('GameService.update(): Error updating game');
    })
    );
  }

  public destroy(id: number) {
    return this.http.delete(`${this.url}/${id}`).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('GameService.destroy(): Error deleting game in service');
      })
    );
  }
}
