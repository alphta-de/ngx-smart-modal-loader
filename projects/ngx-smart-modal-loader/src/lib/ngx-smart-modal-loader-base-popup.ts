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
  protected ngxSmartModalService: NgxSmartModalService;

  constructor(ngxSmartModalService: NgxSmartModalService) {
    this.ngxSmartModalService = ngxSmartModalService;
  }

  closePopup(): void {
    this.ngxSmartModalService.getModal(this.id).close();
    this.destroy.emit(true);
  }
  ngAfterViewInit(): void {
    this.ready.emit(true);
  }
}
