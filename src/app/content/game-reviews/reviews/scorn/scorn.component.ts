import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scorn',
  templateUrl: './scorn.component.html',
  styleUrls: ['./scorn.component.scss']
})
export class ScornComponent implements OnInit {

  public pros = [
    'Art style',
    'Incredible atmosphere'
  ];

  public cons = [
    'Unnecessary combat'
  ];

  public score = 8.0;

  public primaryColour = "#070c03";
  public secondaryColour = "#833d2d";

  constructor() { }

  ngOnInit(): void {
  }

}
