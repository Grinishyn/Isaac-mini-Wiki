import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item-box',
  templateUrl: './item-box.component.html',
  styleUrls: ['./item-box.component.css']
})
export class ItemBoxComponent {
imgPath: string = "../../assets/";

@Input() itemId: number = 0
@Input() itemImg: string =''
@Input() itemName: string =''
}
