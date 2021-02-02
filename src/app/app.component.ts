import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'diwo-table';

  items = [' ', ' ', ' '];
  items1 = ['Product Type', 'Target Cardholders', 'Target Segments', 'Sales Amount', 'Absolute', 'Significance', 'Impact'];
  items2 = ['Consumer', '1,501,231', '540', '6.4%', '$51.21', '99%', '$95M'];
  rows = [' ',' ', ' '];
}
