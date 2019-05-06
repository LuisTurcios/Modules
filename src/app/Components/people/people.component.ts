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
  public mail: string;
  public phone: string;
  
  public Date: Date;
  constructor() { 
    this.mail = "";
    this.phone = ""
    

  }

  ngOnInit() {
  }

  addEmail(){
    
    this.email.push(this.mail.toUpperCase())
    
    console.log(this.email)
    this.mail = ""
  }

  addPhone(){
    this.telephone.push(this.phone);

    console.log(this.telephone);
    this.phone = "";
  }



}
