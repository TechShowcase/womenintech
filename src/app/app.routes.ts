import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FqaComponent } from './components/fqa/fqa.component';
import { AboutComponent } from './components/about/about.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'fqa', component: FqaComponent },
  { path: 'about', component: AboutComponent },
  { path: "**", redirectTo: "", pathMatch: "full"}
];
