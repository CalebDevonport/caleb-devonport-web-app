import { AppRoutes } from './../../routes';
import { PostInfo } from 'src/app/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  public blogPostInfoArray: PostInfo[] = [
    {
      navRoute: AppRoutes.ReadingList2021,
      title: 'Reading List 2021',
      date: '03/01/2022',
      imageURL: 'assets/images/books.jpg'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
