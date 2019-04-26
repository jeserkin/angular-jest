import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MasterComponent } from './master/master.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: MasterComponent
  },
  {
    path: 'todo',
    loadChildren: './modules/todo/todo.module#TodoModule',
    component: MasterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
