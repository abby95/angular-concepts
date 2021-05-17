import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms"
import { AppRoutingModule } from './app-routing.module';

import { httpInterceptorProviders } from "./http-interceptors/index"

import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DepartmentDetailComponent } from './components/department-detail/department-detail.component';
import { ErrorComponent } from './components/error/error.component';
import { FormComponent } from './components/form/form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { SubjectComponent } from './components/subject/subject.component';
import { UiComponentsComponent } from './components/ui-components/ui-components.component';
import { ComponentInteractionComponent } from './components/component-interaction/component-interaction.component';
import { ParentComponentComponent } from './components/parent-component/parent-component.component';
import { ChildOneComponentComponent } from './components/child-one-component/child-one-component.component';
import { ChildTwoComponentComponent } from './components/child-two-component/child-two-component.component';
import { SubjectEmitterComponent } from './components/subject-components/subject-emitter/subject-emitter.component';
import { SubjectObserverOneComponent } from './components/subject-components/subject-observer-one/subject-observer-one.component';
import { SubjectObserverTwoComponent } from './components/subject-components/subject-observer-two/subject-observer-two.component';
import { HttpInterceptorComponent } from './components/http-interceptor/http-interceptor.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    DepartmentDetailComponent,
    ErrorComponent,
    FormComponent,
    ReactiveFormComponent,
    SubjectComponent,
    UiComponentsComponent,
    ComponentInteractionComponent,
    ParentComponentComponent,
    ChildOneComponentComponent,
    ChildTwoComponentComponent,
    SubjectEmitterComponent,
    SubjectObserverOneComponent,
    SubjectObserverTwoComponent,
    HttpInterceptorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
