import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentDetailComponent } from './components/department-detail/department-detail.component';
import { ErrorComponent } from './components/error/error.component';
import { FormComponent } from './components/form/form.component';
import { HomeComponent } from './components/home/home.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { SubjectComponent } from './components/subject/subject.component';
import { UiComponentsComponent } from './components/ui-components/ui-components.component';
import { ComponentInteractionComponent } from './components/component-interaction/component-interaction.component';
import { HttpInterceptorComponent } from './components/http-interceptor/http-interceptor.component';
import { RxjsOperatorsComponent } from './components/rxjs-operators/rxjs-operators.component';

const routes: Routes = [
  { path: "", redirectTo: '/home', pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "form", component: FormComponent },
  { path: "reactive-form", component: ReactiveFormComponent },
  { path: "subject", component: SubjectComponent },
  { path: "ui-components", component: UiComponentsComponent },
  { path: "component-interaction", component: ComponentInteractionComponent },
  { path: "http-interceptor", component: HttpInterceptorComponent },
  { path: "rxjs-operators", component: RxjsOperatorsComponent },
  { path: "department/:id", component: DepartmentDetailComponent },

  // Error ROute
  { path: "**", component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
