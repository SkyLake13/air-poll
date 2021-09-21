import { Pipe, PipeTransform } from "@angular/core";
import { Filter } from "../components/aq-list/aq-list.component";
import { AirQualityModel } from "../interfaces";

@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {
    public transform(data: AirQualityModel[], filter?: Filter) {
        let filteredData = data;

        if(!filter) {
            return filteredData;
        }

        if(filter.city) {
            filteredData = filteredData.filter((aq) => aq.city === filter.city);
        }

        if(filter.country) {
            filteredData = filteredData.filter((aq) => aq.country === filter.country); 
        }

        return filteredData;
    }
}