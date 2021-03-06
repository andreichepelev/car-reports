import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DropdownModule } from 'ng2-dropdown';


import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { GenerationComponent } from './generation/generation.component';
import { ReportComponent } from './report/report.component';
import { MakeComponent } from './make/make.component';
import { ModelComponent } from './model/model.component';
import { AddreportComponent } from './addreport/addreport.component';
import { RepairComponent } from './repair/repair.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    GenerationComponent,
    ReportComponent,
    MakeComponent,
    ModelComponent,
    AddreportComponent,
    RepairComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    DropdownModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
