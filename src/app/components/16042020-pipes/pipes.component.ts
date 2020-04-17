import { Component, OnInit } from '@angular/core';
import { Observer, interval } from 'rxjs';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  variableString: string = "MiVariableString_&%$#!/-*+"
  variableNumber: number = 1234
  myArray: Array<any> = ["dato1", "dato2",3,[4,5]]
  myJson: Object = {dato1: "mi dato 1", dato2: "mi dato 2"}
  fechaActual = new Date();
  asyncNumber;


  constructor() { 

  }

  ngOnInit(): void {
    console.log("On init");
    this.asyncNumber = interval(2500)
  }

}
