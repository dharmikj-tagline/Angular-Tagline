import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderNavbarComponent } from './header-navbar/header-navbar.component';
import { HeaderMainContentComponent } from './header-main-content/header-main-content.component';
import { SevicesComponent } from './sevices/sevices.component';
import { ExperienceContentComponent } from './experience-content/experience-content.component';
import { ExperienceProjectsComponent } from './experience-projects/experience-projects.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderNavbarComponent,
    HeaderMainContentComponent,
    SevicesComponent,
    ExperienceContentComponent,
    ExperienceProjectsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
