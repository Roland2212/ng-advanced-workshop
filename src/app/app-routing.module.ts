import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MainPageComponent } from "./main-page/main-page.component";
import { Exercise1Component } from "./exercises/exercise1/exercise1.component";
import { Exercise2Component } from "./exercises/exercise2/exercise2.component";
import { Exercise3Component } from "./exercises/exercise3/exercise3.component";
import { Exercise4Component } from "./exercises/exercise4/exercise4.component";
import { Exercise5Component } from "./exercises/exercise5/exercise5.component";
import { Exercise6Component } from "./exercises/exercise6/exercise6.component";
import { Exercise7Component } from "./exercises/exercise7/exercise7.component";

const routes: Routes = [
  { path: "", component: MainPageComponent },
  { path: "exercise1", component: Exercise1Component },
  { path: "exercise2", component: Exercise2Component },
  { path: "exercise3", component: Exercise3Component },
  { path: "exercise4", component: Exercise4Component },
  { path: "exercise5", component: Exercise5Component },
  { path: "exercise6", component: Exercise6Component },
  { path: "exercise7", component: Exercise7Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
