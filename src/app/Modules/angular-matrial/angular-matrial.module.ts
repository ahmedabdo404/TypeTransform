import { NgModule } from '@angular/core';
// Anular Matrial Comps
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

const MatrialComps = [
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
]

@NgModule({
  imports: [
    MatrialComps
  ],
  exports: [MatrialComps]
})
export class MatrialModule { }
