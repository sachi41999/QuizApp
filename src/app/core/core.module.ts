import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MatSliderModule } from '@angular/material/slider'
import { MatButtonModule } from '@angular/material/button'



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,MatSliderModule,MatButtonModule
  ],
  exports:[
    HeaderComponent,FooterComponent
  ]
})
export class CoreModule { }
