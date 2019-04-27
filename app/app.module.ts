import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { StocksComponent } from "./components/stocks/stocks.component";
import { StockDialogComponent } from "./components/stock-dialog/stock-dialog.component";
import { StocksFilterFormComponent } from "./components/stocks-filter-form/stocks-filter-form.component";
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports:      [
    BrowserModule,
    HttpModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    TasksComponent,
    StocksComponent,
    StockDialogComponent,
    StocksFilterFormComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
