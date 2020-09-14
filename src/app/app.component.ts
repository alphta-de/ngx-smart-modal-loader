import { Component, ViewChild, ViewContainerRef, OnInit } from '@angular/core';
import { NgxSmartModalLoaderService } from 'ngx-smart-modal-loader';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
  selector: 'ngx-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('globalPopupsWrapper', { read: ViewContainerRef, static: true })
  public globalPopupsWrapper: ViewContainerRef;

  title = 'ngx-smart-modal-loader-library';

  constructor(
    private ngxSmartModalLoaderService: NgxSmartModalLoaderService,
    private ngxSmartModalService: NgxSmartModalService,
    ) {

  }

  ngOnInit(): void {
    this.ngxSmartModalLoaderService.initialize({
      containerRef: this.globalPopupsWrapper,
      ngxSmartModalServiceInstance: this.ngxSmartModalService
    });
  }

  open(): void {
    this.ngxSmartModalLoaderService.open('loginPopup');
  }
}
