import { Component } from '@angular/core';
import { LayoutComponent } from '../../../../shared/components/ui/layout/layout.component';

@Component({
    selector: 'app-coming-soon-3',
    templateUrl: './coming-soon-3.component.html',
    styleUrl: './coming-soon-3.component.scss',
    standalone: true,
    imports: [LayoutComponent]
})
export class ComingSoon3Component {

  public seconds: number;
  public interval;

  constructor() {
    this.interval = setInterval(function (this: any) {
      let currentDate = new Date();
      currentDate.setHours(0);  // Set the desired hours
      currentDate.setMinutes(0); // Set the desired minutes
      currentDate.setSeconds(0);

      let nowDate = new Date();
      let daysToAdd = 7;
      currentDate.setDate(currentDate.getDate() + daysToAdd);
      let distance = currentDate.getTime() - nowDate.getTime();

      this.document.querySelectorAll('#days').forEach((element: { innerHTML: number }) => {
          element.innerHTML = Math.floor(distance / (1000 * 60 * 60 * 24));
        });

      this.document.querySelectorAll('#hours').forEach((element: { innerHTML: number }) => {
          element.innerHTML = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        });

      this.document.querySelectorAll('#minutes').forEach((element: { innerHTML: number }) => {
          element.innerHTML = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        });

      this.document.querySelectorAll('#seconds').forEach((element: { innerHTML: number }) => {
          element.innerHTML = Math.floor((distance % (1000 * 60)) / 1000);});
    }, this.seconds);
  }

  ngOnDestroy() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }
}
