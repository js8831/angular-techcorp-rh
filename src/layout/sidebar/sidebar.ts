import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-sidebar',
  templateUrl: './sidebar.html',
  host: {
    class: 'app__sidebar',
    id: 'navigation',
  },
})
export class Sidebar {
  protected readonly test = 'app__sidebar sidebar';
}
