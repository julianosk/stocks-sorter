import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { StockDialogComponent } from "./components/stock-dialog/stock-dialog.component";
import { StocksFilterFormComponent } from "./components/stocks-filter-form/stocks-filter-form.component";
import { StocksComponent } from "./components/stocks/stocks.component";

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    StocksComponent,
    StockDialogComponent,
    StocksFilterFormComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
