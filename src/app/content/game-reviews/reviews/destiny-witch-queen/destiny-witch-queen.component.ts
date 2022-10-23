import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-destiny-witch-queen',
  templateUrl: './destiny-witch-queen.component.html',
  styleUrls: ['./destiny-witch-queen.component.scss']
})
export class DestinyWitchQueenComponent implements OnInit {

  public pros = [
    'Excellent campaign',
    'Loot updates',
    'Closely coupled season',
    'New raid'
  ];

  public cons = [
    'Lack of PvP updates',
    'No improvements to new player experience'
  ];

  public score = 9.0;

  public primaryColour = "#366656";
  public secondaryColour = "#3f7663";

  constructor() { }

  ngOnInit(): void {
  }

}
