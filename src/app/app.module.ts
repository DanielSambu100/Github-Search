import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GithubProfileDataComponent } from './components/github-profile-data/github-profile-data.component';
import { GithubProfileCardComponent } from './components/github-profile-card/github-profile-card.component';
import { GithubProfileComponent } from './components/github-profile/github-profile.component';
import { GithubAppComponent } from './components/github-app/github-app.component';
import { GithubReposComponent } from './components/github-repos/github-repos.component';
import {HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    GithubProfileDataComponent,
    GithubProfileCardComponent,
    GithubProfileComponent,
    GithubAppComponent,
    GithubReposComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
