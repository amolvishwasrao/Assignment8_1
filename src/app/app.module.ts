import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// This import is required for ngModel
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { TwoWayComponent } from './two-way/two-way.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { AngularHooksComponent } from './angular-hooks/angular-hooks.component';
import { ParentToChildComponent } from './parent-to-child/parent-to-child.component';
import { ChildParentComponent } from './child-parent/child-parent.component';
import { NgModelComponent } from './ng-model/ng-model.component';
import { EventListnerComponent } from './event-listner/event-listner.component';

@NgModule({
  declarations: [
    AppComponent,
    TwoWayComponent,
    TwoWayBindingComponent,
    AngularHooksComponent,
    ParentToChildComponent,
    ChildParentComponent,
    NgModelComponent,
    EventListnerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule       // Add explicite import for this
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
