import { Component, OnInit } from "@angular/core";
import * as app from "tns-core-modules/application";
import { RouterExtensions } from "../../../../node_modules/nativescript-angular/router";

@Component({
    selector: "PageTwo",
    moduleId: module.id,
    templateUrl: "./page2.component.html"
})
export class TwoComponent implements OnInit {
    constructor() {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    goBack(): void {
        // this.routerExtensions.back();
    }
}
