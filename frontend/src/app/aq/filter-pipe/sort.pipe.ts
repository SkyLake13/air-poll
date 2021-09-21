import { Pipe, PipeTransform } from "@angular/core";
import { AirQualityModel, Sort } from "../interfaces";

@Pipe({
    name: 'sort'
})
export class SortPipe implements PipeTransform {
    public transform(data: AirQualityModel[], sort?: Sort) {
        console.log('sort', sort);

        let sortedData = data;

        if (sort && sort.property && sort.order) {
            if(sort.order === 'asc') {
                sortedData = sortedData.sort(sortFn(sort.property));
            } else {
                sortedData = sortedData.sort(sortFn(sort.property)).reverse();
            }
        }

        return sortedData;
    }
}

function sortFn(property: string) {
    return (elementA: AirQualityModel, elementB: AirQualityModel) => {
        const valueA = (elementA as any)[property].toUpperCase();
        const valueB = (elementB as any)[property].toUpperCase();
    
        if (valueA < valueB) {
            return -1;
        }
    
        if (valueA > valueB) {
            return 1;
        }
    
        return 0;
    }
}