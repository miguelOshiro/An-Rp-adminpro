import { Component, Input } from '@angular/core';

import { MultiDataSet, Label, Color} from 'ng2-charts'

@Component({
  selector: 'app-doughnut',
  templateUrl: './doughnut.component.html',
  styles: [
  ]
})
export class DoughnutComponent {

  @Input() title: string = 'Sin titulo';
  // Doughnut
  @Input('labels') doughnutChartLabels: Label[] = ['Label1', 'Label2', 'Label3'];

  @Input('data') doughnutChartData: MultiDataSet = [
    [350, 450, 100]

  ];

  //public doughnutChartType: ChartType = 'doughnut';

  public colors: Color[] = [
    { backgroundColor: [ '#9E120E', '#FF5800', '#FFB414' ] }
  ];

}
