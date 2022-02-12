import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome/welcome.component';
import { QuestionsComponent } from './questions/questions.component';
import { RouterModule,Routes } from '@angular/router';

const routes:Routes=[
  {path:'',redirectTo:'WelcomeComponent',pathMatch:'full'},
 {path:"welcome",component:WelcomeComponent},
 {path:"questions",component:QuestionsComponent}
]

@NgModule({
  declarations: [
    WelcomeComponent,QuestionsComponent
  ],
  imports: [
    CommonModule,RouterModule.forRoot(routes),
  ],
  exports:[
    RouterModule
  ]
})
export class ShareModule { }
