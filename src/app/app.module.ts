import { LoginPopupComponent } from './login-popup/login-popup/login-popup.component';
import { LoginPopupModule } from './login-popup/login-popup.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxSmartModalLoaderModule } from 'ngx-smart-modal-loader';
import { NgxSmartModalModule } from 'ngx-smart-modal';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    LoginPopupModule,
    NgxSmartModalModule.forRoot(),
    NgxSmartModalLoaderModule.forRoot({
      globalPopups: {
        loginPopup: LoginPopupComponent
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
