import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StudentsComponent } from './componants/students/students.component';
import { StudentsDetailsComponent } from './componants/students-details/students-details.component';
import { ProfileComponent } from './componants/profile/profile.component';
import { ErrorComponent } from './componants/error/error.component';
import { HeaderComponent } from './componants/header/header.component';
import { RouterModule , Routes} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DirectDirective } from './directives/direct.directive';

let routes:Routes = [
  // {path:'',component:StudentsComponent},
  {path:'',redirectTo:'students',pathMatch:'full'},
  {path:'students',component:StudentsComponent},
  {path:'students/:id',component:StudentsDetailsComponent},
  {path:'profile',component:ProfileComponent},
  {path:'**',component:ErrorComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    StudentsDetailsComponent,
    ProfileComponent,
    ErrorComponent,
    HeaderComponent,
    DirectDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
