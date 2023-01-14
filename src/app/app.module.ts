// Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatrialModule } from './Modules/angular-matrial/angular-matrial.module';
import { HttpClientModule } from '@angular/common/http';
//Services
import { GetDataService } from './Services/get-data.service';
// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/Shared/header/header.component';
import { FooterComponent } from './Components/Shared/footer/footer.component';
import { MainBodyComponent } from './Components/Body/main-body/main-body.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainBodyComponent,
  ],
  imports: [
    BrowserModule,
    MatrialModule,
    HttpClientModule,
  ],
  providers: [GetDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
