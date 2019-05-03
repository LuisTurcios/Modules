import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//components
import { PeopleComponent } from './Components/people/people.component';
import { FamilyComponent } from './Components/family/family.component';
import { UnitsComponent } from './Components/units/units.component';
import { CareersComponent } from './Components/careers/careers.component';
import { CoursesComponent } from './Components/courses/courses.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { LoginComponent } from './Components/login/login.component';


const routes: Routes = [
  {path: 'inicio', component: LoginComponent},
  {path: 'people', component: PeopleComponent},
  {path: '', component: LoginComponent},
  {path: 'family', component: FamilyComponent},
  {path: 'units', component: UnitsComponent},
  {path: 'careers', component: CareersComponent},
  {path: 'courses', component: CoursesComponent},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
