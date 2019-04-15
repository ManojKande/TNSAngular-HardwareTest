import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { HomeComponent } from "./home.component";
import { OneComponent } from "~/app/home/inner-pages/page1.component";
import { TwoComponent } from "~/app/home/inner-pages/page2.component";
import { ThreeComponent } from "~/app/home/inner-pages/page3.component";

const routes: Routes = [
    {
        path: "",
        component: HomeComponent,
        children: [
            { path: "", component: OneComponent },
            { path: "one", component: OneComponent },
            { path: "two", component: TwoComponent },
            { path: "three", component: ThreeComponent }
        ]
    }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class HomeRoutingModule {}

// { path: "home", loadChildren: "~/app/home/home.module#HomeModule" },
//     {
//         path: "/one",
//         component: OneComponent,
//         loadChildren: "~/app/home/home.module#HomeModule"
//     },
//     { path: "/two", component: TwoComponent },
//     { path: "/three", component: ThreeComponent }
