import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusquedaRoutingModule } from './busqueda-routing.module';
import { BusquedaComponent } from './busqueda.component';
import { DatePickerComponent } from '../components/date-picker/date-picker.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownComponent } from '../components/dropdown/dropdown.component';


@NgModule({
  declarations: [
    BusquedaComponent,
    DatePickerComponent,
    DropdownComponent
  ],
  imports: [
    CommonModule,
    BusquedaRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
  ]
})
export class BusquedaModule { }
