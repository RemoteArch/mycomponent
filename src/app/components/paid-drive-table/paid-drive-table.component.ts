import { Component, input, InputSignal, output, OutputEmitterRef, Type } from '@angular/core';
import { PaginationConfig } from '../../features/dashboard/interfaces/pagination-config';
import { TableHeader } from '../../features/dashboard/interfaces/table-header';
import { NgClass, NgComponentOutlet } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { LoardingComponent } from "../loarding/loarding.component";

@Component({
  selector: 'app-paid-drive-table',
  standalone: true,
  imports: [NgClass, NgComponentOutlet, NgxPaginationModule, LoardingComponent],
  templateUrl: './paid-drive-table.component.html',
  styleUrl: './paid-drive-table.component.css'
})
export class PaidDriveTableComponent {
  tableHeader: InputSignal<TableHeader[]> = input.required<TableHeader[]>();
  tableData: InputSignal<any[]> = input.required<any[]>();
  tableType: InputSignal<Type<any>> = input.required<Type<any>>();
  isLoading: InputSignal<boolean> = input(false);
  isPaginated: InputSignal<boolean> = input(false);
  paginationConfig: InputSignal<PaginationConfig | undefined> = input<PaginationConfig | undefined>();
  changePage: OutputEmitterRef<number> = output<number>();

  onPageChanged(event: number) {
    this.changePage.emit(event);  
  }
}
