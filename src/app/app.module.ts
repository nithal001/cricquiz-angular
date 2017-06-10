import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// used to create fake backend
import { fakeBackendProvider } from './_helpers/fake-backend';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { GlobalNavigationComponent } from './global-navigation/global-navigation.component';
import { HomeCarouselComponent } from './home-carousel/home-carousel.component';
import { AlertComponent } from './_directives/index';

import { AlertService, UserService } from './_services/index';

import { routing } from './app.routing';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    routing,
    NgbModule.forRoot(),
    FormsModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    LoginComponent,
    RegisterComponent,
    GlobalNavigationComponent,
    HomeCarouselComponent,
    AlertComponent
  ],
  entryComponents: [LoginComponent, RegisterComponent],
  bootstrap: [ AppComponent ],
  providers: [
    AlertService,
    UserService,
    // providers used to create fake backend
    fakeBackendProvider,
    MockBackend,
    BaseRequestOptions,
  ]
})
export class AppModule { }
