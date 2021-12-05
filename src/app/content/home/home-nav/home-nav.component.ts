import { animate, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject,  } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AppRoutes } from 'src/app/routes';

@Component({
  selector: 'app-home-nav',
  templateUrl: './home-nav.component.html',
  styleUrls: ['./home-nav.component.scss'],
  animations: [
    trigger(
      'navAnimation', [
        transition(':enter', [
          style({transform: 'translateY(100%)', opacity: 0}),
          animate('250ms', style({transform: 'translateY(0)', opacity: 1}))
        ]),
        transition(':leave', [
          style({transform: 'translateY(0)', 'opacity': 1}),
          animate('250ms', style({transform: 'translateY(100%)', opacity: 0}))
        ])
      ]
    )
  ]
})
export class HomeNavComponent implements OnInit, OnDestroy {

  public AppRoutes = AppRoutes;

  public open: boolean;

  @Input()
  public openMenuSubject: Observable<void>;

  private destroy$: Subject<void> = new Subject<void>();

  constructor() { }

  onSwipeDown() {
    this.closeMenu();
  }

  ngOnInit(): void {
    this.openMenuSubject
      .pipe(takeUntil(this.destroy$.asObservable()))
      .subscribe(() => this.openMenu());
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  openMenu() {
    this.open = true;
  }

  closeMenu() {
    this.open = false;
  }
}
