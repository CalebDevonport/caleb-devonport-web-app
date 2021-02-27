import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-little-nightmares-two',
  templateUrl: './little-nightmares-two.component.html',
  styleUrls: ['./little-nightmares-two.component.scss']
})
export class LittleNightmaresTwoComponent implements OnInit {

  public pros = [
    'Beautiful visuals',
    'Great sound design',
    'Thrilling encounters',
    'Creepy character design'
  ];

  public cons = [
    '"Die to Learn" mentality',
    'Terrible torch controls',
    'Bugs',
  ];

  public score = 8.0;

  constructor() { }

  ngOnInit(): void {
  }

}
