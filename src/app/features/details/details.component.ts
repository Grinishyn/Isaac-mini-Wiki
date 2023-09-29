import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from 'src/app/core/model/item';
import { ItemsService } from 'src/app/core/services/items.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit{
  isLoading: boolean = true
  item: Item = {
    id: 1,
    name: "",
    type: "",
    quote: "",
    description: "",
    img: "",
    bigImg: ""
  }
  imgPath: string = "../../../assets/"
  id: number = 0

  
  constructor(private itemsService: ItemsService, private activatedRoute: ActivatedRoute){
    this.id = activatedRoute.snapshot.params['id']
  }

  ngOnInit(): void {
    this.itemsService.getByItemId(this.id)
    .then(res=>{
      this.item = res
    }).catch(err=>{
      console.log(err)
    }).finally(()=>{
      setTimeout(()=>{
        this.isLoading=false
      }, 1000)
    })
  }
}
