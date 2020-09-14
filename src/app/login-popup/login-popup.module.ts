import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPopupComponent } from './login-popup/login-popup.component';
import { NgxSmartModalModule } from 'ngx-smart-modal';

@NgModule({
  declarations: [LoginPopupComponent],
  imports: [
    CommonModule,
    NgxSmartModalModule.forChild(),
  ],
  exports: [LoginPopupComponent]
})
export class LoginPopupModule { }
