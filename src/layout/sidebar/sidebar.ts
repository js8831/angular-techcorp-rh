import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-sidebar',
  templateUrl: './sidebar.html',

  // Les classes sont posees sur <app-sidebar> : c'est lui l'enfant direct de la grille .app,
  // pas le <nav> qu'il contient.
  host: {
    class: 'app__sidebar sidebar',
    '[class.is-open]': 'open()',
  },
})
export class Sidebar {
  // Etat d'ouverture du panneau sur mobile, pilote par le bouton menu de la topbar.
  readonly open = input(false);
}
