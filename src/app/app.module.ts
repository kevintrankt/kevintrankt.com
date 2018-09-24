import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { BioComponent } from './bio/bio.component';
import { ParticlesModule } from 'angular-particle';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ProjectsComponent } from './projects/projects.component';

@NgModule({
  declarations: [AppComponent, HelloComponent, BioComponent, ProjectsComponent],
  imports: [
    AngularFontAwesomeModule,
    BrowserModule,
    AppRoutingModule,
    ParticlesModule,
    ServiceWorkerModule.register('/ngsw-worker.js', {
      enabled: environment.production
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
