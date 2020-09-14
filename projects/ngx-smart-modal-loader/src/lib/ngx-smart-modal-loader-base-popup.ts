import { Component, OnInit, AfterViewInit, EventEmitter } from '@angular/core';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
  selector: 'ngx-smart-modal-loader-base-popup',
  template: '',
})
export abstract class NgxSmartModalLoaderBasePopupComponent implements AfterViewInit {
  abstract id: string;
  abstract destroy: EventEmitter<boolean>;
  abstract ready: EventEmitter<boolean>;

  constructor() {}

  closePopup(): void {
    this.destroy.emit(true);
  }
  ngAfterViewInit(): void {
    this.ready.emit(true);
  }
}
