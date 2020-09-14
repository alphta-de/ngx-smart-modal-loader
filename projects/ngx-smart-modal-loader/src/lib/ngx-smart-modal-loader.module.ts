import { NgModule, InjectionToken, ModuleWithProviders } from '@angular/core';
import { NgxSmartModalModule } from 'ngx-smart-modal';

export const GLOBAL_POPUPS = new InjectionToken('GLOBAL_POPUPS');

@NgModule({
  declarations: [],
  imports: [
    NgxSmartModalModule,
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
