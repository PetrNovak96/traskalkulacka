import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vyse-uveru',
  template: `
    <div>
      <p>
        Výše úvěru
      </p>
      <napoveda pozice="right" [tooltip]="napoveda"></napoveda>
      <p>{{min + " " + jednotek}}</p>
      <input [(ngModel)]="vyseUveru"
             type="range"
             [step]="krok"
             [min]="min"
             [max]="max"
      >
      <p>{{max + " " + jednotek}}</p>
      <input type="text" [(ngModel)]="vyseUveru">
      <p>{{jednotek}}</p>
    </div>
  `,
  styleUrls: ['./vyse-uveru.component.css']
})
export class VyseUveruComponent implements OnInit {

  public napoveda: string;
  public vyseUveru: number;
  public min: number;
  public max: number;
  public krok: number;
  public default: number;
  public jednotek: string;

  constructor() { }

  ngOnInit() {
    this.default = 1500000;
    this.napoveda = "Vyplňte prosím toto pole, nebo vyberte na posuvníku.";
    this.vyseUveru = this.default;
    this.min = 30000;
    this.max = 3300000;
    this.jednotek = "Kč";
  }

}
