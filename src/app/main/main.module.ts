import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MainComponent } from "./main.component";
import { DefaultComponent } from "../layouts/default/default.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [MainComponent],
  imports: [CommonModule, SharedModule],
})
export class MainModule {}
