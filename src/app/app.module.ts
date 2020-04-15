import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabComponent } from './components/14042020-contentChild/tab/tab.component';
import { TabListComponent } from './components/14042020-contentChild/tab-list/tab-list.component';
import { ViewContentChildComponent } from './components/14042020-contentChild/view-content-child/view-content-child.component';
import { ViewViewChildComponent } from './components/15042020-viewChild/view-view-child/view-view-child.component';
import { ChildComponent } from './components/15042020-viewChild/child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    TabComponent,
    TabListComponent,
    ViewContentChildComponent,
    ViewViewChildComponent,
    ChildComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
