import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
items: MyItem[] = [];


  constructor() {}



  add(){
   let item: MyItem = {'name':'Apple', value:Math.random()}
   this.items.push(item);
   console.log(this.items)
  
  }

  remove(index){
    console.log('index :', index);
    this.items.splice(index, 1);
    console.log('current length ', this.items.length)
  }



}


export class MyItem{
  name: string;
  value: number;
}