import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  queryField = new FormControl();
  loading = false; 
  items: any;

  combineSlug(id: string) {
    return id;
  }

  goToLink(link: string) {
    window.open(link, '_blank');
  }
}
