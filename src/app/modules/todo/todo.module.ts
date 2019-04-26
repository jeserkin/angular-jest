import { NgModule } from '@angular/core';
import { TodoComponent } from './todo.component';
import { TodoRoutingModule } from './todo.routing-module';

@NgModule({
  imports: [
    TodoRoutingModule
  ],
  declarations: [
    TodoComponent
  ]
})
export class TodoModule {
}
