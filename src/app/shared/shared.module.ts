import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSliderModule } from '@angular/material/slider';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import {
  CardComponent,
  DataTableComponent,
  EmptyPageComponent,
  LoadingSpinnerComponent,
  PageComponent,
} from './components';

const COMPONENTS = [
  LoadingSpinnerComponent,
  EmptyPageComponent,
  CardComponent,
  DataTableComponent,
  PageComponent,
];

@NgModule({
  declarations: COMPONENTS,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSkeletonLoaderModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatSliderModule,
    MatPaginatorModule,
    MatStepperModule,
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatSliderModule,
    MatPaginatorModule,
    MatStepperModule,
    MatCardModule,
    LoadingSpinnerComponent,
    CardComponent,
    DataTableComponent,
    PageComponent,
  ],
})
export class SharedModule {}
