import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { CustomerTableComponent } from './components/customer-table/customer-table.component';
import { CustomerPipe } from './pipes/customer.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { ButtonComponent } from './shared/button/button.component';
import { InputComponent } from './shared/input/input.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    CustomerTableComponent,
    CustomerPipe,
    SortPipe,
    ButtonComponent,
    InputComponent
  ],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
