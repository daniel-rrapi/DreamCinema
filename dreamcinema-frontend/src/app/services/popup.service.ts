import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PopupService {
  private isPopup = new BehaviorSubject<boolean>(false);
  isPopup$ = this.isPopup.asObservable();
  constructor() {}

  setPopupState(isOpen: boolean) {
    this.isPopup.next(isOpen);
  }
}
