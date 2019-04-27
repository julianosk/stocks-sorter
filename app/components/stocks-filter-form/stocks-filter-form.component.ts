import {Component, Input, OnChanges, Output, EventEmitter} from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {StockService} from '../../services/stock.service';

import {Filter, Indicator, defaultFilters, indicators, operators, Operator} from '../../data-model';
import {StockDialogComponent} from '../stock-dialog/stock-dialog.component';

@Component({
  moduleId: module.id,
  selector: 'stocks-filter-form',
  templateUrl: 'stocks-filter-form.component.html',
  styleUrls: ['stocks-filter-form.component.css']
})

export class StocksFilterFormComponent {
  operators = operators;
  indicators = indicators;
  filtersForm: FormGroup;

  @Output() applyFilter = new EventEmitter<string>();

  constructor(
    private fb: FormBuilder,
    private stockService: StockService){
    this.createForm();
  }

  createForm() {
    this.filtersForm = this.fb.group({
      filters: this.fb.array([])
    });
    this.setFilters(defaultFilters);
  }

  get filters(): FormArray {
    return this.filtersForm.get('filters') as FormArray;
  };

  setFilters(filters: Filter[]) {
    const filterFGs = filters.map(filter => this.fb.group(filter));
    const filterFormArray = this.fb.array(filterFGs);
    this.filtersForm.setControl('filters', filterFormArray);
  }

  updateTable() {
    console.log("updateTable");
    this.applyFilter.emit(this.filtersForm.value.filters);
  }

  resetFilters() {
    this.setFilters(defaultFilters);
  }

  removeFilter(index: number) {
    this.filters.removeAt(index);
  }

  onSubmit() {}

}

