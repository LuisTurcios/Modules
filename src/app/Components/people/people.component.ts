import { Component, OnInit } from '@angular/core';
import { EmailValidator } from '@angular/forms';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  public email = [];
  public text: string;
  constructor() { 
    this.text = ""
    

  }

  ngOnInit() {
  }

  addEmail(){
    this.email.push(this.text)
    
    console.log(this.email)
    this.text = ""
  }

}
