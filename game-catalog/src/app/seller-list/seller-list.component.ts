import { Component, EventEmitter, Input, Output} from '@angular/core';
import { Seller } from '../Model/seller.model';

@Component({
  selector: 'app-seller-list',
  templateUrl: './seller-list.component.html',
  styleUrls: ['./seller-list.component.css']
})
export class SellerListComponent {
  @Output() close = new EventEmitter();
  @Input() sellers: Seller[];

  constructor() {
    this.sellers=[];
  }

  onCloseClick() {
    this.close.emit();
  }

}
    