import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "../../../../node_modules/nativescript-angular/router";

@Component({
    selector: "PageOne",
    moduleId: module.id,
    templateUrl: "./page1.component.html"
})
export class OneComponent implements OnInit {
    constructor() {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    // navigateTo(routeName: string): void {
    //     this.routerExtensions.navigate([routeName]);
    // }
}
