import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", loadChildren: "~/app/home/home.module#HomeModule" },
    {
        path: "camera",
        loadChildren: "~/app/camera/camera.module#CameraModule"
    },
    { path: "browse", loadChildren: "~/app/browse/browse.module#BrowseModule" },
    { path: "search", loadChildren: "~/app/search/search.module#SearchModule" },
    {
        path: "featured",
        loadChildren: "~/app/featured/featured.module#FeaturedModule"
    },
    {
        path: "settings",
        loadChildren: "~/app/settings/settings.module#SettingsModule"
    },
    {
        path: "location",
        loadChildren: "~/app/location/location.module#LocationModule"
    }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule {}
