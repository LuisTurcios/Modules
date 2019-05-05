import { Component, OnInit } from '@angular/core';
import { EmailValidator } from '@angular/forms';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  public email = [];
  public telephone = [];
  public text: string;
  public phone: string;
  constructor() { 
    this.text = "";
    this.phone = ""
    

  }

  ngOnInit() {
  }

  addEmail(){
    
    this.email.push(this.text.toUpperCase())
    
    console.log(this.email)
    this.text = ""
  }

  addPhone(){
    this.telephone.push(this.phone);

    console.log(this.telephone);
    this.phone = "";
  }



}
