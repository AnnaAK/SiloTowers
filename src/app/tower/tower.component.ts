import { Component, OnInit } from '@angular/core';

import { Indicator } from '../indicator';
import { IndicatorService } from '../indicator.service';
import {CARNSMASS} from '../mock-carnallite-mass';

@Component({
  selector: 'app-tower',
  templateUrl: './tower.component.html',
  styleUrls: ['./tower.component.css']
})
export class TowerComponent implements OnInit {
  indicators: Indicator[];
  indicator: Indicator;
  carnmass = Math.floor(Math.random() * 2000) + 100;

  constructor(private indicatorService: IndicatorService) { }

  ngOnInit() {
    this.getIndicators();
  }

  getIndicators(): void {
    this.indicatorService.getIndicators()
      .subscribe(indicators => this.indicators = indicators);
  }
}
