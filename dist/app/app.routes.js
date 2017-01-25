"use strict";
var router_1 = require('@angular/router');
var helloworld_component_1 = require('./components/helloworld.component');
var jquery_component_1 = require('./components/jquery.component');
var user_component_1 = require('./components/user.component');
var simpleform_component_1 = require('./components/simpleform.component');
var reactiveform_component_1 = require('./components/reactiveform.component');
var reactiveformvalidation_component_1 = require('./components/reactiveformvalidation.component');
var cards_component_1 = require('./components/cards.component');
var rater_component_1 = require('./components/rater.component');
var routes = [
    {
        path: '',
        component: helloworld_component_1.HelloWorldComponent,
        pathMatch: 'full'
    },
    {
        path: 'jquery',
        component: jquery_component_1.JQueryComponent
    },
    {
        path: 'user',
        component: user_component_1.UserComponent
    },
    {
        path: 'simpleform',
        component: simpleform_component_1.SimpleFormComponent
    },
    {
        path: 'reactiveform',
        component: reactiveform_component_1.ReactiveFormComponent
    },
    {
        path: 'reactiveformvalidation',
        component: reactiveformvalidation_component_1.ReactiveFormValidationComponent
    },
    {
        path: 'cards',
        component: cards_component_1.CardsComponent
    },
    {
        path: 'rater',
        component: rater_component_1.RaterComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(routes);
//# sourceMappingURL=app.routes.js.map