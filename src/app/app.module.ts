import { NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"
import { FormsModule } from "@angular/forms"

import { AppComponent } from "./app.component"
import { HomeComponent } from "./home/home.component"
import { AboutComponent } from "./about/about.component"
import { ContactComponent } from "./contact/contact.component"
import { AppRoutingModule } from "./app-routing.module"

@NgModule({
  declarations: [AppComponent, HomeComponent, AboutComponent, ContactComponent],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
