import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-score-pie',
  templateUrl: './score-pie.component.html',
  styleUrls: ['./score-pie.component.scss']
})
export class ScorePieComponent implements OnInit {

  @Input() score: number;

  public displayScore: string;
  public scoreClass: string;

  constructor() {
  }

  ngOnInit(): void {
    this.displayScore = this.score.toFixed(1);
    this.scoreClass = `progress-${this.score * 10}`;
  }

}
