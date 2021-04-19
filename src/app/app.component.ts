import { Component, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import * as d3 from 'd3-dsv';
import { CsvService } from './shared/csv.service';
// import { dsv } from 'd3';
// import dsv from "d3-dsv";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'chartIt';
  reader: FileReader = new FileReader();
  file!: File;
  parsed: any;
  fileString!: string
  xLabel: any;
  yLabel: any;

  constructor(private csvService: CsvService) {

  }

  fileUpload(event: any) {
    if (event.target.files[0].name.substr(-4) == '.csv') {
      this.file = event.target.files[0];
      this.reader.readAsText(this.file);
    }
    else {
      alert("Please upload a .csv file");
    }

    this.reader.onload = e => {
      this.fileString = this.reader.result as string;
      this.parsed = d3.csvParse(this.fileString);

      this.csvService.setData(this.parsed);
      this.csvService.setColumns(this.parsed.columns);

      let xSelect = document.createElement('select');
      xSelect.id = "columns";

      let ySelect = document.createElement('select');
      ySelect.id = "data";

      this.parsed.columns.forEach(item => {

        let xOption = document.createElement('option');
        let yOption = document.createElement('option')

        xOption.value = item;
        xOption.text = item;

        yOption.value = item;
        yOption.text = item;

        ySelect.appendChild(yOption);
        xSelect.appendChild(xOption);

      });



      let xLabel = document.createElement('label')
      xLabel.innerHTML = "X";
      xLabel.htmlFor = "columns"

      let yLabel = document.createElement('label');
      yLabel.innerHTML = "Y";
      yLabel.htmlFor = "data"

      document.getElementById('container').appendChild(xLabel).appendChild(xSelect);
      document.getElementById('container').appendChild(yLabel).appendChild(ySelect);

      this.xLabel = document.getElementById('columns');
      this.yLabel = document.getElementById('data');

      this.xLabel.onchange = _ => {
        let xData = this.xLabel.options[this.xLabel.selectedIndex].text;
        this.csvService.setX(xData);
      }
  
      this.yLabel.onchange = _ => {
        let yData = this.yLabel.options[this.yLabel.selectedIndex].text;
        this.csvService.setY(yData);
      }

    }

  }
}


