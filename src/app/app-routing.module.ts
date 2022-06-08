import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';
import {MyProjectsComponent} from './my-projects/my-projects.component';
import {MainContentComponent} from './main-content/main-content.component';
import {ViewedComponentComponent} from './viewed-component/viewed-component.component';

const routes: Routes = [
// dodany routing podstawowy
  {path: 'about', component: MainContentComponent},
  {path: 'show-projects', component: MyProjectsComponent},
  {path: '', redirectTo:'about' , pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
