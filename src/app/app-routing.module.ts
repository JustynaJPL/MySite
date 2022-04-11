import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';
import {MyProjectsComponent} from './my-projects/my-projects.component';
import {MainContentComponent} from './main-content/main-content.component';

const routes: Routes = [
// dodany routing podstawowy
  {path: 'about', component: MainContentComponent},
  {path: 'my-projects', component: MyProjectsComponent},
  {path: '', redirectTo:'about' , pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
