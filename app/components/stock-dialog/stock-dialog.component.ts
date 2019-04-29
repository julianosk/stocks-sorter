import { Component, Input, Output, EventEmitter } from '@angular/core';
import { StockService } from '../../services/stock.service';
import { Stock } from '../../../Stock';
import { Filter, Indicator, defaultFilters, indicators, operators, Operator } from '../../data-model';

@Component({
  moduleId: module.id,
  selector: 'stock-dialog',
  templateUrl: 'stock-dialog.component.html',
  styleUrls: ['stock-dialog.component.css']
})
export class StockDialogComponent {
  // @Input() stock;
  stock: Stock;
  @Output() delete = new EventEmitter();
  public visible = false;
  private visibleAnimate = false;
  indicators = indicators;

  constructor(private stockService: StockService) {
    // this.indicators = this.stockService.indicatorsMetadata();
    // this.stockService.indicatorsMetadata()
    //   .subscribe(json => {
    //     this.indicators = json;
    //   });
  }

  public show(stock: Stock): void {
    this.stock = stock;
    this.visible = true;
    setTimeout(() => this.visibleAnimate = true);
  }

  public hide(): void {
    this.visibleAnimate = false;
    setTimeout(() => this.visible = false, 300);
  }
  onDelete() {
    // this.delete.emit(this.mediaItem);
  }
  getTrendClass(trend) {
    if (trend === 'flat') {
      return 'glyphicon glyphicon-circle-arrow-right trend-flat';
    } else if (trend === 'up') {
      return 'glyphicon glyphicon-circle-arrow-up trend-up';
    } else if (trend === 'down') {
      return 'glyphicon glyphicon-circle-arrow-down trend-down';
    }
  }
}
