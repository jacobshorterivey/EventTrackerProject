import { Game } from './../../models/game';
import { GameService } from './../../services/game.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  // FIELDS
  selected: Game = null;
  newGame: Game = new Game();
  editGame: Game = null;
  games: Game[] = [];
  urlId: number;
  addingGame = false;
  showShortList = false;

  // CONSTRUCTOR
  constructor(private gameSvc: GameService, private router: Router, private currentRoute: ActivatedRoute) { }

  // METHODS
  ngOnInit() {
    // grabs the array of games from the service & adds it to this component
    // if (!this.selected && this.currentRoute.snapshot.paramMap.get('id')) {
    this.gameSvc.index().subscribe(
      data => {
        this.games = data;
        if (this.currentRoute.snapshot.paramMap.get('id')) {
          this.urlId = +this.currentRoute.snapshot.paramMap.get('id');
          this.games.forEach((d) => {
            if (d.id === this.urlId) {
              this.selected = d;
            }
            if (this.selected == null) {
              this.router.navigateByUrl('**');
            }
          });
        }
      },
      err => console.error('Reload error in Component')
    );
  }

  loadGameList() {
    this.gameSvc.index().subscribe(
      data => {
        this.games = data;
      },
      err => {
        console.error('Error in loadGameList()');
        console.error(err);
      }
    );
  }

  getNumberOfGames() {
    return this.games.length;
  }

  displayGame(game) {
    return this.selected = game;
  }

  disableTable() {
    this.selected = null;
  }

  addGame(newGame: Game) {
    this.gameSvc.create(newGame).subscribe(
      data => {
        this.loadGameList();
        this.newGame = new Game();
      },
      err => {
        console.error('Error in addGame() in component.ts');
        console.error(err);
      }
    );
  }

  updateGame(game: Game) {
    console.log(game);
    this.gameSvc.update(game).subscribe(
      data => {
        this.loadGameList();
        this.editGame = null;
        this.selected = null;
      },
      err => {
        console.error('Error in updateGame() in component.ts');
        console.error(err);
      }
    );
  }

  setEditGame() {
    this.editGame = Object.assign({}, this.selected);
  }

  deleteTodo(id: number) {
    this.gameSvc.destroy(id).subscribe(
      good => {
        this.loadGameList();
      },
      bad => {
        console.error('Error in deleteGame in component.ts');
        console.error(bad);
      }
    );
  }

  avgGameLength() {
    let totalTime = 0;
    let count = 0;
    for (const game of this.games) {
      if (game.completed) {
        totalTime += game.hoursToComplete;
        count++;
      }
    }

    return totalTime / count;

  }






}
