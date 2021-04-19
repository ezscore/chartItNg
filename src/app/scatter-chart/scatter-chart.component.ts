import { Component, OnInit } from '@angular/core';
import { CsvService } from '../shared/csv.service';

@Component({
  selector: 'app-scatter-chart',
  templateUrl: './scatter-chart.component.html',
  styleUrls: ['./scatter-chart.component.css']
})
export class ScatterChartComponent implements OnInit {

  constructor(private csvService: CsvService) { }


  

  data: [];
  columns: [];
  x: string;
  y: string;

  public scatterChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public scatterChartLabels = ['2006', '2007', '2008', '2009', '2010'];
  public scatterChartType = <const>"scatter";
  public scatterChartLegend = true;

  public scatterChartData = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
  ];

  ngOnInit(): void {

    this.x = this.csvService.getX();
    this.y = this.csvService.getY();
    this.columns = this.csvService.getColumns();
    this.data = this.csvService.getData();

    this.scatterChartData[0].data = [];
    this.scatterChartLabels = [];

    this.data.forEach(_ => {
      this.scatterChartLabels.push(_[this.x]);
      this.scatterChartData[0].data.push(_[this.y]);
    })

    this.scatterChartData[0].label = this.y;
  }

  updateChart() {

    this.x = this.csvService.getX();
    this.y = this.csvService.getY();
    this.columns = this.csvService.getColumns();
    this.data = this.csvService.getData();

    this.scatterChartData[0].data = [];
    this.scatterChartLabels = [];

    this.data.forEach(_ => {
      this.scatterChartLabels.push(_[this.x]);
      this.scatterChartData[0].data.push(_[this.y]);
    })

    this.scatterChartData[0].label = this.y;
  }

}
