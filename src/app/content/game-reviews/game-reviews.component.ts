import { AppRoutes } from './../../routes';
import { ReviewInfo } from './review-info';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-reviews',
  templateUrl: './game-reviews.component.html',
  styleUrls: ['./game-reviews.component.scss']
})
export class GameReviewsComponent implements OnInit {

  public reviewInfoArray: ReviewInfo[] = [
    {
      navRoute: AppRoutes.LittleNightmares2,
      title: 'Little Nightmares 2',
      score: '8.0',
      date: '27/02/2021',
      imageURL: 'assets/images/little-nightmares-2-banner.png'
    },
    {
      navRoute: '',
      title: 'Doom 2016',
      score: '8.0',
      date: '15/02/2021',
      imageURL: 'assets/images/doom-panorama.jpg'
    },
    {
      navRoute: '',
      title: 'Destiny 2: Beyond Light',
      score: '8.0',
      date: '15/02/2021',
      imageURL: 'assets/images/destiny-2-banner.jpg'
    },
    {
      navRoute: '',
      title: 'Inside',
      score: '8.0',
      date: '15/02/2021',
      imageURL: 'assets/images/inside-banner.png'
    },
    {
      navRoute: '',
      title: 'Valorant',
      score: '8.0',
      date: '15/02/2021',
      imageURL: 'assets/images/valorant-banner.jpg'
    },
    {
      navRoute: '',
      title: 'Fall Guys',
      score: '8.0',
      date: '15/02/2021',
      imageURL: 'assets/images/fall-guys-banner.png'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
