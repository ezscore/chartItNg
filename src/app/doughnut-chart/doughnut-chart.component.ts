import { Component, OnInit } from '@angular/core';
import { CsvService } from '../shared/csv.service';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.css']
})
export class DoughnutChartComponent implements OnInit {


  data: [];
  columns: [];
  x: string;
  y: string;


  public doughnutChartLabels = [];
  public doughnutChartData = [120, 150, 180, 90];
  public doughnutChartType = <const> 'doughnut';

  constructor(private csvService: CsvService) { }

  ngOnInit(): void {

    this.x = this.csvService.getX();
    this.y = this.csvService.getY();
    this.columns = this.csvService.getColumns();
    this.data = this.csvService.getData();

    this.doughnutChartData = [];

    this.data.forEach(_ => {
      this.doughnutChartLabels.push(_[this.x]);
      this.doughnutChartData.push(_[this.y]);
    })

  }

  updateChart() {
    this.x = this.csvService.getX();
    this.y = this.csvService.getY();
    this.columns = this.csvService.getColumns();
    this.data = this.csvService.getData();

    this.doughnutChartData = [];

    this.data.forEach(_ => {
      this.doughnutChartLabels.push(_[this.x]);
      this.doughnutChartData.push(_[this.y]);
    })
  }

    
  }

  

