import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'; 
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    NgSelectModule,
    ReactiveFormsModule,
    
  ],
  providers: [
    provideHttpClient(
      withFetch()
    ) 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
