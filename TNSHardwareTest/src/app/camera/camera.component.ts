import { Component, OnInit } from "@angular/core";
import { platformNames } from "tns-core-modules/platform";

import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import {
    isAvailable,
    takePicture,
    requestPermissions
} from "nativescript-camera";
import { ImageAsset } from "tns-core-modules/image-asset";

declare var android: any;

@Component({
    selector: "Camera",
    moduleId: module.id,
    templateUrl: "./camera.component.html"
})
export class CameraComponent implements OnInit {
    saveToGallery: boolean = false;
    allowsEditing: boolean = false;
    keepAspectRatio: boolean = true;
    width: number = 320;
    height: number = 240;
    cameraImage: ImageAsset;
    actualWidth: number;
    actualHeight: number;
    scale: number = 1;
    labelText: string;
    isCameraAvailable: boolean = false;

    constructor() {
        // Use the component constructor to inject providers.
    }

    onTakePictureTap(args) {
        requestPermissions().then(() => {
            takePicture({
                width: this.width,
                height: this.height,
                keepAspectRatio: this.keepAspectRatio,
                saveToGallery: this.saveToGallery,
                allowsEditing: this.allowsEditing
            }).then(
                (imageAsset: any) => {
                    this.cameraImage = imageAsset;

                    imageAsset.getImageAsync((nativeImage, ex) => {
                        if (ex instanceof Error) {
                            throw ex;
                        } else if (typeof ex === "string") {
                            throw new Error(ex);
                        }

                        if (imageAsset.android) {
                            this.scale =
                                nativeImage.getDensity() /
                                android.util.DisplayMetrics.DENSITY_DEFAULT;
                            this.actualWidth = nativeImage.getWidth();
                            this.actualHeight = nativeImage.getHeight();
                        } else {
                            this.scale = nativeImage.scale;
                            this.actualWidth =
                                nativeImage.size.width * this.scale;
                            this.actualHeight =
                                nativeImage.size.height * this.scale;
                        }
                        this.labelText =
                            `Displayed Size: ${this.actualWidth}x${
                                this.actualHeight
                            } with scale ${this.scale}\n` +
                            `Image Size: ${Math.round(
                                this.actualWidth / this.scale
                            )}x${Math.round(this.actualHeight / this.scale)}`;
                        console.log(`${this.labelText}`);
                    });
                },
                error => {
                    console.log("Error: " + error);
                }
            );
        });
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    onRequestPermissions() {
        this.onCheckForCamera();
        requestPermissions();
    }

    onCheckForCamera(): any {
        const isCameraAvailable = isAvailable();
        console.log("Is camera hardware available: " + isCameraAvailable);

        return isCameraAvailable;
    }
}
