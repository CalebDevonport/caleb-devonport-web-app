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
      navRoute: AppRoutes.TheCallistoProtocol,
      title: 'The Callisto Protocol',
      score: '8.5',
      date: '12/12/2022',
      imageURL: 'assets/images/the-callisto-protocol/banner.webp'
    },
    {
      navRoute: AppRoutes.Scorn,
      title: 'Scorn',
      score: '8.0',
      date: '03/11/2022',
      imageURL: 'assets/images/scorn/banner.webp'
    },
    {
      navRoute: AppRoutes.DestinyWitchQueen,
      title: 'Destiny 2: The Witch Queen',
      score: '9.0',
      date: '27/03/2022',
      imageURL: 'assets/images/destiny-witch-queen/banner.jpg'
    },
    {
      navRoute: AppRoutes.LittleNightmares2,
      title: 'Little Nightmares 2',
      score: '8.0',
      date: '27/02/2021',
      imageURL: 'assets/images/little-nightmares-2/banner.png'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
