import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { QuizComponent } from './quiz/quiz.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'quiz', component: QuizComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
