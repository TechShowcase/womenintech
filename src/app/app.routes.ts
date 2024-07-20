import { Routes } from '@angular/router';
import { FqaComponent } from './components/pages/fqa/fqa.component';
import { AboutComponent } from './components/pages/about/about.component';
import { DevelopersComponent } from './components/developers/developers.component';
import { HistoryComponent } from './components/pages/history/history.component';

export const routes: Routes = [
  { path: 'developers', component: DevelopersComponent },
  { path: '', redirectTo: 'developers', pathMatch: 'full' },
  { path: 'history', component: HistoryComponent},
  { path: 'fqa', component: FqaComponent },
  { path: 'about', component: AboutComponent },
  { path: "**", redirectTo: "", pathMatch: "full"}
];
