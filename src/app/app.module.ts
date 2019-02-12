import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatGridListModule} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { IndicatorsComponent } from './indicators/indicators.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { StatusComponent } from './status/status.component';
import { BarsComponent } from './bars/bars.component';
import { CarnalliteMassComponent } from './carnallite-mass/carnallite-mass.component';
import { TowerComponent } from './tower/tower.component';

@NgModule({
  declarations: [
    AppComponent,
    TowerComponent
  ],
  imports: [
    BrowserModule,
    MatGridListModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
