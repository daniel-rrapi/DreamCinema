import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ticket } from 'src/app/interfaces/ticket';

@Component({
  selector: 'app-qrcode-profile',
  templateUrl: './qrcode-profile.component.html',
  styleUrls: ['./qrcode-profile.component.scss'],
})
export class QrcodeProfileComponent implements OnInit {
  @Input() ticket!: Ticket;
  @Output() isQrCodeDisplayed = new EventEmitter<boolean>();
  constructor() {}

  ngOnInit(): void {}

  closeQrCodeWindow() {
    this.isQrCodeDisplayed.emit(false);
  }
}
