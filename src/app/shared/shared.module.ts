import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

import { Error404Component } from './error404/error404.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [Error404Component, HeaderComponent],
  exports: [Error404Component, ButtonModule, InputTextModule, HeaderComponent],
})
export class SharedModule {}
