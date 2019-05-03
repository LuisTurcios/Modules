import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-family',
  templateUrl: './family.component.html',
  styleUrls: ['./family.component.css']
})
export class FamilyComponent implements OnInit {
  @ViewChild('openModal') openModal:ElementRef;
  constructor() { }

  ngOnInit() {
    this.openModal.nativeElement.click();
  }

}
