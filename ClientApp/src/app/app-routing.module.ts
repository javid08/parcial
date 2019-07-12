import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { AgregarlibrosComponent } from './agregarlibros/agregarlibros.component';
import { ConsultalibrosComponent } from './consultalibros/consultalibros.component';
import { EditarlibrosComponent } from './editarlibros/editarlibros.component';

const routes: Routes = [
  {
    path: 'agregarlibros',
    component: AgregarlibrosComponent
  },
  {
    path: 'consultalibros', component:
      ConsultalibrosComponent
  },
  {
    path: 'editarlibros/:ISBN',
    component: EditarlibrosComponent
  }
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
