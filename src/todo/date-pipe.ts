import { Pipe } from 'angular2/angular2';

@Pipe({ name: 'localeDate' })
export class LocaleDate {
    transform(value:Date, args:any[]) {
        if (value !== undefined && value !== null && !Number.isNaN(value)) {
            return value.toLocaleDateString();
        } else {
            return;
        }
    }
}
