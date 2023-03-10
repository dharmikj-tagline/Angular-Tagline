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
import { TechnologiesComponent } from './technologies/technologies.component';
import { TechnologyBackendComponent } from './technology-backend/technology-backend.component';
import { TechnologyFrontendComponent } from './technology-frontend/technology-frontend.component';
import { WhyTaglineComponent } from './why-tagline/why-tagline.component';
import { WhyTaglineBoxesComponent } from './why-tagline-boxes/why-tagline-boxes.component';
import { ClientWordsComponent } from './client-words/client-words.component';
import { ReviewBoxesComponent } from './review-boxes/review-boxes.component';
import { AwardsComponent } from './awards/awards.component';
import { BlogsComponent } from './blogs/blogs.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { FooterHrSalesComponent } from './footer-hr-sales/footer-hr-sales.component';
import { FooterHelpComponent } from './footer-help/footer-help.component';
import { FooterSevicesComponent } from './footer-sevices/footer-sevices.component';
import { FooterHiredeveloperComponent } from './footer-hiredeveloper/footer-hiredeveloper.component';
import { FooterTopComponent } from './footer-top/footer-top.component';
import { FooterLastComponent } from './footer-last/footer-last.component';
import { ReviewRateStarComponent } from './review-rate-star/review-rate-star.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HeaderNavbarComponent,
    HeaderMainContentComponent,
    SevicesComponent,
    ExperienceContentComponent,
    ExperienceProjectsComponent,
    TechnologiesComponent,
    TechnologyBackendComponent,
    TechnologyFrontendComponent,
    WhyTaglineComponent,
    WhyTaglineBoxesComponent,
    ClientWordsComponent,
    ReviewBoxesComponent,
    AwardsComponent,
    BlogsComponent,
    ContactDetailComponent,
    ContactFormComponent,
    FooterHrSalesComponent,
    FooterHelpComponent,
    FooterSevicesComponent,
    FooterHiredeveloperComponent,
    FooterTopComponent,
    FooterLastComponent,
    ReviewRateStarComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
