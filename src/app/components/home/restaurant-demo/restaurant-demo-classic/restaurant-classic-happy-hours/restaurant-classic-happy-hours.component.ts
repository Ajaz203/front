import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-restaurant-classic-happy-hours',
    templateUrl: './restaurant-classic-happy-hours.component.html',
    styleUrls: ['./restaurant-classic-happy-hours.component.scss'],
    standalone: true,
    imports: [RouterLink]
})
export class RestaurantClassicHappyHoursComponent {

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
