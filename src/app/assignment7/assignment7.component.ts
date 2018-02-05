import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-assignment7',
  templateUrl: './assignment7.component.html',
  styleUrls: ['./assignment7.component.css']
})
export class Assignment7Component implements OnInit {

  title = '';
  nameLastname = [];



  constructor() { }

  ngOnInit() {
  
  }


  nameInput(e, name, title) {
    e.preventDefault();
    this.nameLastname.push(name.value);
    name.value = '';
    this.title = "Welcome to Angular";
  }

  
}
