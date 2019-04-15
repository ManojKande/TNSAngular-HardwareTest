import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";
import { OneComponent } from "~/app/home/inner-pages/page1.component";
import { TwoComponent } from "~/app/home/inner-pages/page2.component";
import { ThreeComponent } from "~/app/home/inner-pages/page3.component";

@NgModule({
    imports: [NativeScriptCommonModule, HomeRoutingModule],
    declarations: [HomeComponent, OneComponent, TwoComponent, ThreeComponent],
    schemas: [NO_ERRORS_SCHEMA]
})
export class HomeModule {}
