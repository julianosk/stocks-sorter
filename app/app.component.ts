import { Component } from '@angular/core';
import { StockService } from './services/stock.service';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  providers: [StockService]
})

export class AppComponent { }
