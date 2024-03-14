import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Projection } from 'src/app/interfaces/projection';
import { ProjectionService } from 'src/app/services/projection.service';

@Component({
  selector: 'app-seats-popup-book',
  templateUrl: './seats-popup-book.component.html',
  styleUrls: ['./seats-popup-book.component.scss'],
})
export class SeatsPopupBookComponent implements OnInit {
  @Output() changeSeatsBoolean = new EventEmitter<boolean>();
  currentProjection!: Projection | null;

  constructor(private projectionSrv: ProjectionService) {}

  ngOnInit(): void {
    document.body.style.overflow = 'hidden';
    this.projectionSrv.currentProjection$.subscribe((data) => {
      this.currentProjection = data;
    });
  }
  exit() {
    this.changeSeatsBoolean.emit(false);
  }
}
