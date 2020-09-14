import { NgModule, InjectionToken, ModuleWithProviders } from '@angular/core';
import { NgxSmartModalLoaderBasePopupComponent } from './ngx-smart-modal-loader-base-popup';
import { NgxSmartModalModule, NgxSmartModalService } from 'ngx-smart-modal';

export const GLOBAL_POPUPS = new InjectionToken('GLOBAL_POPUPS', {
  providedIn: 'root',
  factory: () => {}
});

@NgModule({
  declarations: [],
  imports: [
    NgxSmartModalModule.forChild(),
  ],
  exports: []
})
export class NgxSmartModalLoaderModule {
  static forRoot(settings): ModuleWithProviders<NgxSmartModalLoaderModule> {
    return {
        ngModule: NgxSmartModalLoaderModule,
        providers: [ {
          provide: GLOBAL_POPUPS,
          useValue: settings.globalPopups
        }]
    };
  }
}
