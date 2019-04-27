export class Column {
    indicator: string;
    order: string;
    constructor(indicator, order) {
        this.indicator = indicator;
        this.order = order;
    }
};

export const defaultColumns: Column[] = [
    new Column('sum', 'asc'),
    new Column('pl', 'none'),
    new Column('crescrec5a', 'none'),
    new Column('divyield', 'none'),
    new Column('price', 'none'),

];