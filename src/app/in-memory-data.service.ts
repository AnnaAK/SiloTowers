import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Indicator } from './indicator';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {

  createDb() {
    const indicators = [
      {
        id: '1',
        title: 'Уровень карналита в силосной башне №',
        value: 1065,
        minValue: 0,
        maxValue: 1086
      },
      {
        id: '2',
        title: 'Уровень карналита в силосной башне №',
        value: 998,
        minValue: 10,
        maxValue: 1668
      },
      {
        id: '3',
        title: 'Уровень карналита в силосной башне №',
        value: 578,
        minValue: 60,
        maxValue: 1527
      },
      {
        id: '4',
        title: 'Уровень карналита в силосной башне №',
        value: 967,
        minValue: 0,
        maxValue: 1224
      },
      {
        id: '5',
        title: 'Уровень карналита в силосной башне №',
        value: 1365,
        minValue: 0,
        maxValue: 1500
      },
      {
        id: '6',
        title: 'Уровень карналита в силосной башне №',
        value: 1143,
        minValue: 1200,
        maxValue: 1905
      },
      {
        id: '7',
        title: 'Уровень карналита в силосной башне №',
        value: 856,
        minValue: 120,
        maxValue: 1000
      },
      {
        id: '8',
        title: 'Уровень карналита в силосной башне №',
        value: 956,
        minValue: 1000,
        maxValue: 1600
      }
    ];
    return {indicators};
  }

  constructor() { }
}
