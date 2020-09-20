import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import {MatListModule} from '@angular/material/list';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api'; 

import {DataStoreService} from './data-store.service';
import {ApiHttpServiceService} from './api-http-service.service';
import { ContactListComponent } from './components/contact-list/contact-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatListModule,
    InMemoryWebApiModule.forRoot(DataStoreService)
  ],
  providers: [ApiHttpServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
