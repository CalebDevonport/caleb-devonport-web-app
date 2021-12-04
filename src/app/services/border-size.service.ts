import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";


export class BorderSizeService {
  public size$ = new BehaviorSubject<number>(600);
  currentSize = this.size$.asObservable();

  constructor() { }

  changeSize(size: number) {
    this.size$.next(size)
  }
}
