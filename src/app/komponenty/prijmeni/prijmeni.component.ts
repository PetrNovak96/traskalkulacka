import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'prijmeni',
  template:`
    <p>
      Příjmení
    </p>
    <input type="text" class="form-control" placeholder="Novák">
  `,
  styleUrls: ['./prijmeni.component.css']
})
export class PrijmeniComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
