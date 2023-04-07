import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Game } from '@/Model/game.model';
import { GameApiService } from '@/services/game-api.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-game-edit',
  templateUrl: './game-edit.component.html',
  styleUrls: ['./game-edit.component.css']
})
export class GameEditComponent {
  id : string;
  game: Game;
  constructor(private route: ActivatedRoute, private gameApi: GameApiService, private router: Router) {
    this.id = this.route.snapshot.paramMap.get('id')!;
    this.game = new Game("");
    //this.id = '';
    //this.route.params.subscribe(params => {
    //this.id = params['id'];
  }

  handleSaveClick(form: NgForm) {
    if (form.valid) {
    this.gameApi.Insert(this.game);
    alert("JUego añadido!");
    this.router.navigate(['/']);
    } else {
      alert(
      'Formulario inválido, chequea si hay errores de validación en alguno de los campos del formulario'
      );
    }
  }
}
