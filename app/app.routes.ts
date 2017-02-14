import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HelloWorldComponent } from './components/helloworld.component';
import { JQueryComponent } from './components/jquery.component';
import { UserComponent } from './components/user.component';
import { SimpleFormComponent } from './components/simpleform.component';
import { ReactiveFormComponent } from './components/reactiveform.component';
import { ReactiveFormValidationComponent } from './components/reactiveformvalidation.component';
import { DynamicValidationComponent } from './components/dynamicvalidation.component';
import { CardsComponent } from './components/cards.component';
import { RaterComponent } from './components/rater.component';

const routes: Routes = [
    {
        path: '',
        component: HelloWorldComponent,
        pathMatch: 'full'
    },
    {
        path: 'jquery',
        component: JQueryComponent
    },
    {
        path: 'user',
        component: UserComponent
    },
    {
        path: 'simpleform',
        component: SimpleFormComponent
    },
    {
        path: 'reactiveform',
        component: ReactiveFormComponent
    },
    {
        path: 'reactiveformvalidation',
        component: ReactiveFormValidationComponent
    },
    {
        path: 'dynamicvalidation',
        component: DynamicValidationComponent
    },
    {
        path: 'cards',
        component: CardsComponent
    },
    {
        path: 'rater',
        component: RaterComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);