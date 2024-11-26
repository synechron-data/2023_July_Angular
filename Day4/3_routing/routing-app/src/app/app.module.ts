import { APP_BOOTSTRAP_LISTENER, ComponentRef, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { RootComponent } from './components/root/root.component';
import { BsNavComponent } from './components/bs-nav/bs-nav.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AuthorsModule } from './authors/authors.module';
import { ProductsModule } from './products/products.module';
import { AdminComponent } from './components/admin/admin.component';
import { TokenInterceptor } from './services/interceptors/token.interceptor';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    RootComponent,
    BsNavComponent,
    HomeComponent,
    AboutComponent,
    NotFoundComponent,
    AdminComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AuthorsModule,
    ProductsModule
  ],
  providers: [
    {
      provide: APP_BOOTSTRAP_LISTENER, multi: true, useFactory: () => {
        return (component: ComponentRef<any>) => {
          console.log(component);
        }
      }
    },
    {
      provide: HTTP_INTERCEPTORS, multi: true, useClass: TokenInterceptor
    }
  ],
  bootstrap: [
    RootComponent
  ]
})
export class AppModule { }
