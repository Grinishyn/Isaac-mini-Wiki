import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/core/model/item';
import { ItemsService } from 'src/app/core/services/items.service';

@Component({
  selector: 'app-products',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit{
  isLoading: boolean = true
  items: Item[] = []
  imgPath: string = "../../../assets/"

  constructor(private itemsService: ItemsService){}

  ngOnInit(): void {
    this.itemsService.getAllItems()
    .then(res=>{
      this.items = res
    }).catch(err=>{
      console.log(err)
    }).finally(()=>{
      setTimeout(()=>{
        this.isLoading=false
      }, 1000)
    })
  }

}
