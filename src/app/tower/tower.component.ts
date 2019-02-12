import {Component, Input, OnInit} from '@angular/core';

import { Indicator } from '../indicator';

@Component({
  selector: 'app-tower',
  templateUrl: './tower.component.html',
  styleUrls: ['./tower.component.css']
})
export class TowerComponent implements OnInit {
  @Input()
  indicator: Indicator;

  carnmass = Math.floor(Math.random() * 2000) + 100;
  percent: number;

  constructor() { }

  ngOnInit() {
    this.towerPercent();
  }

  towerPercent(): void {
    if (this.indicator.value - this.indicator.minValue >= 0) {
      this.percent = Math.round((this.indicator.value - this.indicator.minValue) /
        (this.indicator.maxValue - this.indicator.minValue) * 100);
    } else {
      this.percent = 0;
    }
  }
}
