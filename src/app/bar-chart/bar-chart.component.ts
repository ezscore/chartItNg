import { Component, Input, OnInit } from '@angular/core';
import { CsvService } from '../shared/csv.service';


@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  constructor(private csvService: CsvService) { }

  data: [];
  columns: [];
  x: string;
  y: string;

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public barChartLabels = ['2006', '2007', '2008', '2009', '2010'];
  public barChartType = <const>"bar";
  public barChartLegend = true;

  public barChartData = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
  ];

  ngOnInit(): void {

    this.x = this.csvService.getX();
    this.y = this.csvService.getY();
    this.columns = this.csvService.getColumns();
    this.data = this.csvService.getData();

    this.barChartData[0].data = [];
    this.barChartLabels = [];

    this.data.forEach(_ => {
      this.barChartLabels.push(_[this.x]);
      this.barChartData[0].data.push(_[this.y]);
    })

    this.barChartData[0].label = this.y;
  }

  updateChart() {

    this.x = this.csvService.getX();
    this.y = this.csvService.getY();
    this.columns = this.csvService.getColumns();
    this.data = this.csvService.getData();

    this.barChartData[0].data = [];
    this.barChartLabels = [];

    this.data.forEach(_ => {
      this.barChartLabels.push(_[this.x]);
      this.barChartData[0].data.push(_[this.y]);
    })

    this.barChartData[0].label = this.y;
  }

}
