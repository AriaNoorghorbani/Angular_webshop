import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSnackBarModule } from '@angular/material/snack-bar';

  @NgModule({
    declarations: [AppComponent],
    imports: [
      BrowserModule,
      BrowserAnimationsModule,
      MatSidenavModule,
      MatGridListModule,
      MatButtonModule,
      MatCardModule,
      MatIconModule,
      MatExpansionModule,
      MatListModule,
      MatToolbarModule,
      MatTableModule,
      MatBadgeModule,
      MatSnackbarModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
  })
  export (class AppModule {});
