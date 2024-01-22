import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';




@NgModule({
exports: [
  MatIconModule,
  MatCardModule,
  MatInputModule,
  MatTableModule,
  MatSelectModule,
  MatDialogModule,
  MatButtonModule,
  MatToolbarModule,
  MatSnackBarModule,
  MatFormFieldModule,
  MatProgressSpinnerModule,

]
})
export class AppMaterialModule { }
