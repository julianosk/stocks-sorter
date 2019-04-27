export class Filter {
  indicator: string;
  operator: string;
  value: number;
  constructor(indicator, operator, value) {
    this.indicator = indicator;
    this.operator = operator;
    this.value = value;
  }
}

export class Operator {
  code = "";
  name = "";
  symbol = "";
  constructor(code, name, symbol) {
    this.code = code;
    this.name = name;
    this.symbol = symbol;
  }
}

export class Indicator {
  code = "";
  name = "";
  order = "";
  percentage = false;
  type = "";
  constructor(code, name, order, percentage, type) {
    this.code = code;
    this.name = name;
    this.order = order;
    this.percentage = percentage;
    this.type = type;
  }
}

export const operators = {
  eq: new Operator("eq", "Igual a", "="),
  gt: new Operator("gt", "Maior que", ">"),
  gte: new Operator("gte", "Maior ou igual que", ">="),
  lt: new Operator("lt", "Menor que", "<"),
  lte: new Operator("lte", "Menor ou igual que", "<="),
  list: ["eq", "gt", "gte", "lt", "lte"]
};

export const indicators = {
  sum : new Indicator("sum", "Soma", "asc", false, "number"),
  price : new Indicator("price", "Cotação", "asc", false, "money"),
  pl : new Indicator("pl", "P/L", "asc", false, "number"),
  pvp : new Indicator("pvp", "P/VP", "asc", false, "number"),
  psr : new Indicator("psr", "PSR", "asc", false, "number"),
  divyield : new Indicator("divyield", "Divid. Yield", "desc", true, "percentage"),
  pativo : new Indicator("pativo", "P/Ativo", "asc", false, "number"),
  pcapgiro : new Indicator("pcapgiro", "P/ Cap. Giro", "asc", false, "number"),
  pebit : new Indicator("pebit", "P/EBIT", "asc", false, "number"),
  pativcircliq : new Indicator("pativcircliq", "P/ Ativ Circ. Liq.", "asc", false, "number"),
  evebit : new Indicator("evebit", "EV/EBIT", "asc", false, "number"),
  mrgebit : new Indicator("mrgebit", "Mrg Ebit", "desc", true, "percentage"),
  mrgliq : new Indicator("mrgliq", "Mrg. Líq.", "desc", true, "percentage"),
  liqcorr : new Indicator("liqcorr", "Liq. Corr.", "desc", false, "number"),
  roic : new Indicator("roic", "ROIC", "desc", true, "percentage"),
  roe : new Indicator("roe", "ROE", "desc", true, "percentage"),
  liq2mes : new Indicator("liq2mes", "Liq. 2 meses", "desc", false, "money"),
  patrimliq : new Indicator("patrimliq", "Patrim. Líq", "desc", false, "money"),
  divbrutpatrim : new Indicator("divbrutpatrim", "Dív. Brut/ Patrim.", "asc", false, "number"),
  crescrec5a : new Indicator("crescrec5a", "Cresc. 5 anos", "desc", true, "percentage"),
  list: ["price", "pl", "pvp", "psr", "divyield", "pativo", "pcapgiro",
    "pebit", "pativcircliq", "evebit", "mrgebit", "mrgliq", "liqcorr",
    "roic", "roe", "liq2mes", "patrimliq", "divbrutpatrim", "crescrec5a"
  ]
};

export const defaultFilters: Filter[] = [
  new Filter(indicators.pl.code, operators.gte.code, 1),
  new Filter(indicators.pl.code, operators.lte.code, 20),
  new Filter(indicators.roe.code, operators.gte.code, 0),
  new Filter(indicators.pvp.code, operators.gte.code, 0),
  new Filter(indicators.pvp.code, operators.lte.code, 10),
  new Filter(indicators.liqcorr.code, operators.gte.code, 1),
  new Filter(indicators.mrgebit.code, operators.gte.code, 0),
  new Filter(indicators.crescrec5a.code, operators.gte.code, 5),
  new Filter(indicators.liq2mes.code, operators.gte.code, 100000)
];
