import { Component, OnInit } from '@angular/core';



const students: Student[] = [
  {name: 'Shehan', age: 29, email: 'shehan@gmail.com', dept:'it'},
  {name: 'Nuwan', age: 29, email: 'nuwan@gmail.com', dept:'it'},
  {name: 'Kamal', age: 26, email: 'kamal@gmail.com', dept:'english'},
  {name: 'Chamath', age: 29, email: 'chamath@gmail.com', dept:'english'},
  {name: 'Sachini', age: 25, email: 'sachi@gmail.com', dept:'it'}
]




@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})


export class Tab1Page implements OnInit{

allStudent = [];

  constructor() {}

  ngOnInit(): void {
   students.forEach(element =>{
         this.allStudent.push(element)
   });
   console.log(this.allStudent);
  }  


  saveItem(){
    localStorage.setItem('name', 'shehan');
  }

  async getItem() {
    let item = await localStorage.getItem('name');
    console.log(item);
  }

  removeItem(){
    localStorage.removeItem('name');
  }



}





export interface Student{
  name : string;
  age : number;
  email: string;
  dept: string;
}
