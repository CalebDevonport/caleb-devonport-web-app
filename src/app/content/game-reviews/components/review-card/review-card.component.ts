import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-review-card',
  templateUrl: './review-card.component.html',
  styleUrls: ['./review-card.component.scss']
})
export class ReviewCardComponent implements OnInit {

  @Input() score: number;
  @Input() pros: string[];
  @Input() cons: string[];

  constructor() { }

  ngOnInit(): void {
  }

}
