import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {

  @ViewChild("myBox") myBox: ElementRef;

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  saveInLocalStorage(){
    localStorage.setItem('dato', 'Informacion Guardada')
    this.addText()
  }

  addText(){
    let text = this.renderer.createText("Saved");
    this.renderer.appendChild(this.myBox.nativeElement, text);
  } 

}
