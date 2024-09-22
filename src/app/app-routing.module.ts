import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewComponent } from './new/new.component'; // Ajuste o caminho conforme necessário

const routes: Routes = [
  { path: 'new', component: NewComponent },
  { path: '', redirectTo: '/new', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
