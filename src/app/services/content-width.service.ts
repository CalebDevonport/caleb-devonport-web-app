import { BehaviorSubject } from 'rxjs';

export class ContentWidthService {
  public width$ = new BehaviorSubject<number>(600);
  currentWidth = this.width$.asObservable();

  constructor() { }

  changeSize(size: number) {
    this.width$.next(size);
  }
}
