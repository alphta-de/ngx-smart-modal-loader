import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { NgxSmartModalLoaderBasePopupComponent } from 'ngx-smart-modal-loader';

@Component({
  selector: 'ngx-login-popup',
  templateUrl: './login-popup.component.html',
  styleUrls: ['./login-popup.component.scss']
})
export class LoginPopupComponent extends NgxSmartModalLoaderBasePopupComponent implements OnInit {
  @Input() id: string;
  @Output() destroy: EventEmitter<boolean> = new EventEmitter();
  @Output() ready: EventEmitter<boolean> = new EventEmitter();

  constructor() {
    super();
  }

  ngOnInit(): void {}

}
