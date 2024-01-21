import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterLink } from '@angular/router';
import { ErrorComponent } from './error/error.component';



@NgModule({
  declarations: [
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    ErrorComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
  ],
  exports: [
    NavbarComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class SharedModule { }
