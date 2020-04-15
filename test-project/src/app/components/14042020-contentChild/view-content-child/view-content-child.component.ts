import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-content-child',
  templateUrl: './view-content-child.component.html',
  styleUrls: ['./view-content-child.component.css']
})
export class ViewContentChildComponent implements OnInit {

  constructor() { }

  tabs = [];
  ngOnInit() {
    this.tabs = [
      { title: 'First Tab title', content: 'First Tab content' },
      { title: 'Second Tab title', content: 'Second Tab content' },
      { title: 'Third Tab title', content: 'Third Tab content' },
    ];
  }

}
