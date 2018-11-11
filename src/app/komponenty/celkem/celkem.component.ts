import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'celkem',
  template: `
    <p class="txtWhite">
      Zaplatíte celkem
    </p>
    <napoveda pozice="right" [tooltip]="napoveda"></napoveda>
    <p class="txtWhite" *ngIf="jeVysledek">{{vysledek + " Kč"}}</p>
  `,
  styleUrls: ['./celkem.component.css']
})
export class CelkemComponent implements OnInit {

  public napoveda: string;
  public vysledek: number;
  public jeVysledek: boolean;

  constructor() { }

  ngOnInit() {
    this.napoveda = "Tady se musíme dohodnout co přesně tam napsat.";
    this.vysledek = 0;
    this.jeVysledek = true;
  }

}
