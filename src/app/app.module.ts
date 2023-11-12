import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContentComponent } from './components/content/content.component';
import { HeaderComponent } from "./components/header/header.component";
import { LoginComponent } from './pages/login/login.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './pages/home/home.component';
import { BroadcastService } from './shared/broadcast.service';
import { canActivate } from './shared/auth.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [
        AppComponent,
        FooterComponent,
        ContentComponent,
        LoginComponent,
        HomeComponent
    ],
    providers: [BroadcastService],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        RouterModule.forRoot([
            { path: 'login', component: LoginComponent },
            { path: 'home', component: HomeComponent, canActivate: [canActivate] },
            { path: '', redirectTo: '/login', pathMatch: 'full' }
        ]),
        AppRoutingModule,
        HeaderComponent,
        SharedModule,
        HttpClientModule

    ]
})
export class AppModule { }
