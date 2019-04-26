import { Component } from '@angular/core';

@Component({
  template: `
    <h1>Angular with Jest sauce</h1>

    <ul>
      <li><a routerLink="/todo" routerLinkActive="active">Todo sub-app</a></li>
    </ul>

    <router-outlet></router-outlet>
  `
})
export class MasterComponent {
}
