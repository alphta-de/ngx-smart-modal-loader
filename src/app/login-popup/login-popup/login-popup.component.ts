import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { NgxSmartModalLoaderBasePopupComponent } from 'ngx-smart-modal-loader';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
  selector: 'ngx-login-popup',
  templateUrl: './login-popup.component.html',
  styleUrls: ['./login-popup.component.scss']
})
export class LoginPopupComponent extends NgxSmartModalLoaderBasePopupComponent implements OnInit {
  @Input() id: string;
  @Output() destroy: EventEmitter<boolean> = new EventEmitter();
  @Output() ready: EventEmitter<boolean> = new EventEmitter();

  constructor(protected ngxSmartModalService: NgxSmartModalService) {
    super(ngxSmartModalService);
  }

  ngOnInit(): void {}

}
