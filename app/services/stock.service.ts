import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {Operator, operators, defaultFilters, Filter, Indicator, indicators} from '../data-model'

@Injectable()
export class StockService{
    constructor(private http:Http){
        console.log('Stock Service Initialized...');
    }

    getStocks(){
        return this.http.get('/api/stocks')
          .map(res => res.json());
    }
    /*indicatorsMetadata(){
        return indicators;
        // return this.http.get('./assets/indicatorsMetadata.json').
        //     map(res => res.json());
    };
    operatorsMetadata() {
        return operators;
        // return this.http.get('./assets/operators.json').
        //     map(res => res.json());
    };
    defaultFilters() {
        return defaultFilters;
        // return this.http.get('./assets/defaultFilters.json').
        //     map(res => res.json());
    };
    indicatorsKeys() : Array<string> {
        return ["price", "pl", "pvp", "psr", "divyield", "pativo", "pcapgiro",
            "pebit", "pativcircliq", "evebit", "mrgebit", "mrgliq", "liqcorr",
            "roic", "roe", "liq2mes", "patrimliq", "divbrutpatrim", "crescrec5a"
        ];
    }//*/

}