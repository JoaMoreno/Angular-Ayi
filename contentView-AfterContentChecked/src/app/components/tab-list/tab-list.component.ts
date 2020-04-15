import { Component, OnInit, AfterContentInit, ContentChildren, QueryList } from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tab-list',
  templateUrl: './tab-list.component.html',
  styleUrls: ['./tab-list.component.css'],
})
export class TabListComponent implements AfterContentInit {
  
  @ContentChildren(TabComponent) tabList: QueryList<TabComponent>;
  ngAfterContentInit() {
    this.tabList.toArray()[0].printTitle();
  }
}
