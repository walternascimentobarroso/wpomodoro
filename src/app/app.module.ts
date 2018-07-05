import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MenuBarComponent } from "./menu-bar/menu-bar.component";
import { LayoutModule } from "@angular/cdk/layout";
import {FlexLayoutModule} from '@angular/flex-layout';

import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatTooltipModule,
  MatSnackBarModule,
  MatButtonToggleModule
} from "@angular/material";

@NgModule({
  declarations: [AppComponent, MenuBarComponent],
  imports: [
    FlexLayoutModule,
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatButtonToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
