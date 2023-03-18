import { Component } from '@angular/core';
import { Game } from './Model/game.model';
import { Mando } from './Model/mando.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'game-catalog';

  private games: Game[];
  game: Game = new Game("");
  mando: Mando = new Mando("","");

  constructor() {
    console.log('** Constructor called **');
    this.games = [
      new Game('Super Mario Bros', '13 September 1985'),
      new Game('Legend of Zelda', '21 February 1986'),
      new Game('Sonic', '26 June 1981'),
    ];
  }

  ngOnInit(): void {
    console.log('** ngOnInit called **');
    this.game = this.games[0];
    console.log("dentro del oinit ahora toca el juego");
    this.mando=new Mando("ps4","plastico");
  }
}

