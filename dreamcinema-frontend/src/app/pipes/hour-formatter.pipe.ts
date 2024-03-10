import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hourFormatter',
})
export class HourFormatterPipe implements PipeTransform {
  transform(value: string): string {
    const [hours, minutes] = value.split(':').map((part) => parseInt(part, 10));

    if (isNaN(hours) || isNaN(minutes)) {
      return 'Formato ora non valido';
    }

    const formattedHours = hours.toString().padStart(2, '0');
    const formattedMinutes = minutes.toString().padStart(2, '0');

    return `${formattedHours}h ${formattedMinutes}m`;
  }
}
