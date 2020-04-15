import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  title = 'contentView-AfterContentChecked';
  tabs = [];
  ngOnInit() {
    this.tabs = [
      { title: 'First Tab title', content: 'First Tab content' },
      { title: 'Second Tab title', content: 'Second Tab content' },
      { title: 'Third Tab title', content: 'Third Tab content' },
    ];
  }
}
