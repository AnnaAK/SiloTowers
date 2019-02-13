import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

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
        minValue: 500,
        maxValue: 1086
      },
      {
        id: '2',
        title: 'Уровень карналита в силосной башне №',
        value: 565,
        minValue: 600,
        maxValue: 1668
      },
      {
        id: '3',
        title: 'Уровень карналита в силосной башне №',
        value: 2500,
        minValue: 5,
        maxValue: 2400
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
        minValue: 200,
        maxValue: 1500
      },
      {
        id: '6',
        title: 'Уровень карналита в силосной башне №',
        value: 20,
        minValue: 0,
        maxValue: 1905
      },
      {
        id: '7',
        title: 'Уровень карналита в силосной башне №',
        value: 595,
        minValue: 0,
        maxValue: 1000
      },
      {
        id: '8',
        title: 'Уровень карналита в силосной башне №',
        value: 956,
        minValue: 555,
        maxValue: 2500
      }
    ];
    return {indicators};
  }

  constructor() { }
}
