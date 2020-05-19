import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DefaultComponent } from "./layouts/default/default.component";
import { DashboardComponent } from "./modules/dashboard/dashboard.component";
import { MainComponent } from "./main/main.component";
import { HeaderComponent } from "./shared/components/header/header.component";

const routes: Routes = [
  // {
  //   path: "",
  //   component: MainComponent,
  // },
  {
    path: "",
    component: DefaultComponent,
    children: [
      { path: "", component: DashboardComponent },
      { path: "insurance", component: MainComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
