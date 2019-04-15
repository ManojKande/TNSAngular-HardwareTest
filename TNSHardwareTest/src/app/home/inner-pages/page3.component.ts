import { Component, OnInit } from "@angular/core";
import * as app from "tns-core-modules/application";
import { RouterExtensions } from "../../../../node_modules/nativescript-angular/router";

@Component({
    selector: "PageThree",
    moduleId: module.id,
    templateUrl: "./page3.component.html"
})
export class ThreeComponent implements OnInit {
    constructor(private routerExtensions: RouterExtensions) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
    }
}
