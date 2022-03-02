import { NgModule } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { MatMenuModule } from '@angular/material/menu'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgxGridCoreModule } from '@blueshiftone/ngx-grid-core'
import { NgxGridToolbarModule } from '@blueshiftone/ngx-grid-toolbar'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { DatagGridDemoComponent } from './data-grid-demo/data-grid-demo.component'

@NgModule({
  declarations: [
    AppComponent,
    DatagGridDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxGridCoreModule,
    NgxGridToolbarModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
