import { GLOBAL_POPUPS } from './ngx-smart-modal-loader.module';
import { NgxSmartModalLoaderBasePopupComponent } from './ngx-smart-modal-loader-base-popup';
import { Injectable, ComponentFactory, ComponentRef, Type, ViewContainerRef, ComponentFactoryResolver, Inject } from '@angular/core';
import { NgxSmartModalService } from 'ngx-smart-modal';

export interface INgxSmartModalLoaderSettings {
  containerRef: ViewContainerRef;
  ngxSmartModalServiceInstance: NgxSmartModalService;
}

@Injectable({
  providedIn: 'root'
})
export class NgxSmartModalLoaderService {

  private containerReference: ViewContainerRef;
  private ngxSmartModalService: any;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    @Inject(GLOBAL_POPUPS) private globalPopups,
  ) { }

  public initialize(settings: INgxSmartModalLoaderSettings): void {
    this.containerReference = settings.containerRef;
    this.ngxSmartModalService = settings.ngxSmartModalServiceInstance;
  }

  public open<T extends NgxSmartModalLoaderBasePopupComponent>(popupId: string): void {
    this.containerReference.clear();
    const compRef: ComponentRef<T> = this.createPopup(this.globalPopups[popupId]);
    compRef.instance.id = popupId;
    compRef.instance.ready.subscribe(() => {
      const modal = this.ngxSmartModalService.get(popupId);
      modal.open(true);
    });
    compRef.instance.destroy.subscribe(() => compRef.destroy());
  }

  private createPopup<T>(
    componentClass: Type<T>, componentSettings?: any): ComponentRef<T> {

    const componentFactory: ComponentFactory<T> =
      this.componentFactoryResolver.resolveComponentFactory<T>(componentClass);
    const componentRef: ComponentRef<T> = this.containerReference.createComponent(componentFactory);

    return componentRef;
  }
}
