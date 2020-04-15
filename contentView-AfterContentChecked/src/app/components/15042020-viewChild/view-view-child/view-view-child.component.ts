import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  ChangeDetectorRef,
} from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-view-view-child',
  templateUrl: './view-view-child.component.html',
  styleUrls: ['./view-view-child.component.css'],
})
export class ViewViewChildComponent implements OnInit, AfterViewInit {
  messages: any;
  // @ViewChild(ChildComponent)
  @ViewChild('someElement') chviewChild: ChildComponent;

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit(): void {
    console.log('[parent] OnInit');
    this.messages = this.getMessage();
  }

  ngAfterViewInit() {
    console.log('[parent] AfterViewInit');
    this.chviewChild.message = 'Changed Value of view Child';
    // FIX ERROR “Expression has changed after it was last checked”
    this.cd.detectChanges();
    console.log(this.chviewChild.message);
  }

  getMessage() {
    return ['Hi', 'Hello', 'How are you?'];
  }
}
