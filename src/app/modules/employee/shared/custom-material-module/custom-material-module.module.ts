import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule, MatDialogModule,MatIconModule
  ],
  exports: [
    MatButtonModule, MatDialogModule,MatIconModule
  ]
})
export class CustomMaterialModuleModule { }
