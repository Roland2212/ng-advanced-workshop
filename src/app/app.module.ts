import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { Exercise1Component } from "./exercises/exercise1/exercise1.component";
import { HttpClientModule } from "@angular/common/http";
import { Exercise2Component } from "./exercises/exercise2/exercise2.component";
import { Exercise3Component } from "./exercises/exercise3/exercise3.component";
import { ReactiveFormsModule } from "@angular/forms";
import { Exercise4Component } from "./exercises/exercise4/exercise4.component";
import { MainPageComponent } from "./main-page/main-page.component";
import { Exercise5Component } from "./exercises/exercise5/exercise5.component";
import { Exercise6Component } from "./exercises/exercise6/exercise6.component";
import { Exercise7Component } from "./exercises/exercise7/exercise7.component";
import { HighlightValuePipe } from "./pipes/highlight-value.pipe";
import { FilterDropdownComponent } from "./components/filter-dropdown/filter-dropdown.component";
import { LoadingStateDirective } from "./directives/loading-state.directive";
import { LoadingStateButtonComponent } from "./components/loading-state-button/loading-state-button.component";

@NgModule({
  declarations: [
    AppComponent,
    Exercise1Component,
    Exercise2Component,
    Exercise3Component,
    Exercise4Component,
    MainPageComponent,
    Exercise5Component,
    Exercise6Component,
    Exercise7Component,
    HighlightValuePipe,
    FilterDropdownComponent,
    LoadingStateDirective,
    LoadingStateButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
