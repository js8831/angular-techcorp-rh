import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-sidebar',
  templateUrl: './sidebar.html',
  // host: {
  //   '[class]': 'test',
  // },
})
export class Sidebar {
  protected readonly test = 'app__sidebar sidebar';
}
