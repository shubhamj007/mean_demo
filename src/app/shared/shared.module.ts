import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
      CommonModule,
      RouterModule,
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule,
    ],
    exports: [
      RouterModule,
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule,
    ],
    providers: []
  })
  export class SharedModule {}