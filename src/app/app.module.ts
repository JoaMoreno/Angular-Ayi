import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabComponent } from './components/14042020-contentChild/tab/tab.component';
import { TabListComponent } from './components/14042020-contentChild/tab-list/tab-list.component';
import { ViewContentChildComponent } from './components/14042020-contentChild/view-content-child/view-content-child.component';
import { ViewViewChildComponent } from './components/15042020-viewChild/view-view-child/view-view-child.component';
import { ChildComponent } from './components/15042020-viewChild/child/child.component';
import { PipesComponent } from './components/16042020-pipes/pipes.component';
import { LetrasPipe } from './components/16042020-pipes/letras.pipe';
import { Component1Component } from './components/17042020-localStorage/component1/component1.component';
import { Component2Component } from './components/17042020-localStorage/component2/component2.component';

@NgModule({
  declarations: [
    AppComponent,
    TabComponent,
    TabListComponent,
    ViewContentChildComponent,
    ViewViewChildComponent,
    ChildComponent,
    PipesComponent,
    LetrasPipe,
    Component1Component,
    Component2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
