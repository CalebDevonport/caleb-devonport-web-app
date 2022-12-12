import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-the-callisto-protocol',
  templateUrl: './the-callisto-protocol.component.html',
  styleUrls: ['./the-callisto-protocol.component.scss']
})
export class TheCallistoProtocolComponent implements OnInit {

  public pros = [
    'Incredible graphics',
    'Visceral, engaging combat',
    'So much gore'
  ];

  public cons = [
    'No new game plus',
    'Misleading marketing',
    'Bland story'
  ];

  public score = 8.5;

  public primaryColour = "#6a8691";
  public secondaryColour = "#3a4151";

  constructor() { }

  ngOnInit(): void {

  }

}
