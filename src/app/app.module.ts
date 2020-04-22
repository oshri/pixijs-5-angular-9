import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { PixiCanvasComponent } from "../pixi-canvas/container/pixi-canvas/pixi-canvas.component";

import { AppComponent } from "./app.component";

@NgModule({
  declarations: [
    AppComponent,
    PixiCanvasComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
