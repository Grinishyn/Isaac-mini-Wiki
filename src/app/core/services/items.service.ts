import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Item } from '../model/item';
import { Observable, lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(private http: HttpClient){}

  getAllItems(): Promise<Item[]> {
    return lastValueFrom(this.http.get<Item[]>('http://localhost:3000/items')) 
  }

  getByItemId(id: number): Promise<Item> {
    return lastValueFrom(this.http.get<Item>(`http://localhost:3000/items/${id}`))
  }
}
