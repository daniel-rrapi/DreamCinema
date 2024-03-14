import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberToMonth',
})
export class NumberToMonthPipe implements PipeTransform {
  transform(value: number): string {
    const mesi = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    return mesi[value];
  }
}
