import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { provideExperimentalZonelessChangeDetection } from '@angular/core';

bootstrapApplication(AppComponent, {
  // provideExperimentalZonelessChangeDetection disable zone.js for angular application
  providers: [provideExperimentalZonelessChangeDetection()],
}).catch((err) => console.error(err));
