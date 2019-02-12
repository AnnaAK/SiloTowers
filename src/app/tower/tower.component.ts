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
  yRect: number;
  heightRect: number;

  constructor() { }

  ngOnInit() {
    this.towerPercent();
    this.levelIndicator();
  }

  towerPercent(): void {
    if (this.indicator.value - this.indicator.minValue >= 0) {
      this.percent = Math.round((this.indicator.value - this.indicator.minValue) /
        (this.indicator.maxValue - this.indicator.minValue) * 100);
    } else {
      this.percent = 0;
    }
  }

  levelIndicator(): void {
    if (this.percent >= 100) {
      this.yRect = 57;
      this.heightRect = 396;
    } else if (this.percent !== 0) {
      this.yRect = 57 + (396 - 396 * this.percent / 100);
      this.heightRect = 396 * this.percent / 100;
    }
  }
}
