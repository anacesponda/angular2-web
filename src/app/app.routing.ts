import { Routes, RouterModule } from '@angular/router';
import {NgModule} from "@angular/core";

export const routes: Routes = [
  { path: '', redirectTo: 'pages/dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: 'pages/dashboard' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class routing { }
