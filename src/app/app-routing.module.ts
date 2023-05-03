import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
// import { ExperienceComponent } from './components/experience/experience.component';
// import { EducationComponent } from './components/education/education.component';
// import { SkillsComponent } from './components/skills/skills.component';
// import { ProjectsComponent } from './components/projects/projects.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent} from './components/register/register.component';


const routes: Routes = [
  {path: '', component:HomeComponent},
  // {path: 'experience', component:ExperienceComponent},
  // {path: 'education', component:EducationComponent},
  // {path: 'skills', component:SkillsComponent},
  // {path: 'projects', component:ProjectsComponent},
  {path: 'login', component:LoginComponent},
  {path: 'register', component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
