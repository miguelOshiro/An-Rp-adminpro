import { Component } from '@angular/core';

//import { ChartData, ChartType } from 'chart.js';
//import { MultiDataSet, Label, Color} from 'ng2-charts'

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component  {

  public labels1: string[] = ['Pan', 'Refrescos', 'Tacos'];
  public data1 = [
    [10, 15, 40]

  ];
  public labels2: string[] = ['Pizzas', 'Jugos', 'Chifles'];
  public data2 = [
    [22, 33, 42]

  ];
}
