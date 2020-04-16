import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewContentChildComponent } from './components/14042020-contentChild/view-content-child/view-content-child.component';
import { ViewViewChildComponent } from './components/15042020-viewChild/view-view-child/view-view-child.component';
import { PipesComponent } from './components/16042020-pipes/pipes.component';


const routes: Routes = [
  {path: "contentChild", component: ViewContentChildComponent},
  {path: "viewChild", component: ViewViewChildComponent},
  {path: "pipes", component: PipesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
