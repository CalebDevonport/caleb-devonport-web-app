import { AppRoutes } from 'src/app/routes';
import { Component, OnInit } from '@angular/core';
import { PostInfo } from 'src/app/common';

@Component({
  selector: 'app-game-reviews',
  templateUrl: './game-reviews.component.html',
  styleUrls: ['./game-reviews.component.scss']
})
export class GameReviewsComponent implements OnInit {

  public reviewInfoArray: PostInfo[] = [
    {
      navRoute: AppRoutes.LittleNightmares2,
      title: 'Little Nightmares 2',
      score: '8.0',
      date: '27/02/2021',
      imageURL: 'assets/images/little-nightmares-2-banner.png'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
