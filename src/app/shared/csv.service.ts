import { Injectable } from '@angular/core';
import * as d3 from 'd3-dsv';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CsvService {

  data: any;
  columns: [];
  x: string;
  y: string;

  constructor() { }

  setData(data) {
    this.data = data;
  }
  getData() {
    return this.data;
  }

  setColumns(columns) {
    this.columns = columns;
  }

  getColumns() {
    return this.columns;
  }

  setX(x) {
    this.x = x
  }

  getX() {
    return this.x;
  }

  setY(y) {
    this.y = y
  }

  getY() {
    return this.y;
  }
}


