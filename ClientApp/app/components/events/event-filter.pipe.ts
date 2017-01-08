import { Pipe, PipeTransform } from '@angular/core';
import { Event } from './event';

@Pipe({
    name: 'eventFilter'
})
export class EventFilterPipe implements PipeTransform {

    transform(value: Event[], filterBy: string): Event[] {
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        return filterBy ? value.filter((event: Event) =>
            event.name.toLocaleLowerCase().indexOf(filterBy) !== -1 ||
            event.date.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
    }
}

