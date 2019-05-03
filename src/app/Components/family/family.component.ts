import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-family',
  templateUrl: './family.component.html',
  styleUrls: ['./family.component.css']
})
export class FamilyComponent implements OnInit {
  showActions: boolean = true;

  @ViewChild('openModal') openModal:ElementRef;
  @ViewChild('dobleModal') dobleModal:ElementRef;

  constructor() { }

  ngOnInit() {
    this.openModal.nativeElement.click();
  }

  cambio(){
    this.showActions = false;

  }

}
