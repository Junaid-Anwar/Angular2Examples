import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//components
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './components/helloworld.component';
import { HobbiesComponent } from './components/hobbies.component';
import { CoursesComponent } from './components/courses.component';
import { PostsComponent } from './components/posts.component';
import { JQueryComponent } from './components/jquery.component';
import { UserComponent } from './components/user.component';
import { SimpleFormComponent } from './components/simpleform.component';
import { ReactiveFormComponent } from './components/reactiveform.component';
import { ReactiveFormValidationComponent } from './components/reactiveformvalidation.component';
import { CardComponent } from './components/card.component';
import { CardsComponent } from './components/cards.component';
import { RaterComponent } from './components/rater.component';

//services
import { CoursesService } from './services/courses.service';
import { PostsService } from './services/posts.service';

//directives
import { AutoGrowDirective } from './directives/autogrow.directive';
import { HighlightDirective } from './directives/highlight.directive';

//route
import { routing } from './app.routes';

@NgModule({
    imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpModule, routing],
    declarations: [AppComponent, HelloWorldComponent, HobbiesComponent, CoursesComponent, PostsComponent, JQueryComponent, UserComponent, SimpleFormComponent, ReactiveFormComponent, ReactiveFormValidationComponent, CardComponent, CardsComponent, RaterComponent, AutoGrowDirective, HighlightDirective],
    bootstrap: [AppComponent],
    providers: [CoursesService, PostsService],
    schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
