import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Game } from '@/Model/game.model';
import { Seller } from '@/Model/seller.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-game',
  templateUrl: './card-game.component.html',
  styleUrls: ['./card-game.component.css']
})
export class CardGameComponent {
  @Input() game!: Game;
  @Output() showSellerList = new EventEmitter<Seller[]>();

  constructor(private router: Router) {}

  onTitleClick(){
    this.showSellerList.emit(this.game.sellers);
  }

  handleImageClick() {
    this.router.navigate(['/edit', this.game.name]);
  }
}
