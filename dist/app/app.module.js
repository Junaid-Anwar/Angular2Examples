"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
//components
var app_component_1 = require('./app.component');
var helloworld_component_1 = require('./components/helloworld.component');
var hobbies_component_1 = require('./components/hobbies.component');
var courses_component_1 = require('./components/courses.component');
var posts_component_1 = require('./components/posts.component');
var jquery_component_1 = require('./components/jquery.component');
var user_component_1 = require('./components/user.component');
var simpleform_component_1 = require('./components/simpleform.component');
var reactiveform_component_1 = require('./components/reactiveform.component');
var reactiveformvalidation_component_1 = require('./components/reactiveformvalidation.component');
var card_component_1 = require('./components/card.component');
var cards_component_1 = require('./components/cards.component');
var rater_component_1 = require('./components/rater.component');
//services
var courses_service_1 = require('./services/courses.service');
var posts_service_1 = require('./services/posts.service');
//directives
var autogrow_directive_1 = require('./directives/autogrow.directive');
//route
var app_routes_1 = require('./app.routes');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, forms_1.ReactiveFormsModule, http_1.HttpModule, app_routes_1.routing],
            declarations: [app_component_1.AppComponent, helloworld_component_1.HelloWorldComponent, hobbies_component_1.HobbiesComponent, courses_component_1.CoursesComponent, posts_component_1.PostsComponent, jquery_component_1.JQueryComponent, user_component_1.UserComponent, simpleform_component_1.SimpleFormComponent, reactiveform_component_1.ReactiveFormComponent, reactiveformvalidation_component_1.ReactiveFormValidationComponent, card_component_1.CardComponent, cards_component_1.CardsComponent, rater_component_1.RaterComponent, autogrow_directive_1.AutoGrowDirective],
            bootstrap: [app_component_1.AppComponent],
            providers: [courses_service_1.CoursesService, posts_service_1.PostsService],
            schemas: [core_1.NO_ERRORS_SCHEMA]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map