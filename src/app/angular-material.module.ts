import { NgModule } from "@angular/core";
import {
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,

} from '@angular/material';



@NgModule({
    // imports: [
    //     MatButtonModule,
    //     MatCheckboxModule,
    //     MatFormFieldModule,
    //     MatInputModule,
    //     MatOptionModule,
    //     MatSelectModule,
    //     MatMenuModule,
    //     MatToolbarModule,
    //     MatIconModule,
    //     MatTableModule,
    //     MatPaginatorModule,
    //     MatProgressSpinnerModule
    // ],
    exports: [
        MatButtonModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatInputModule,
        MatOptionModule,
        MatSelectModule,
        MatMenuModule,
        MatToolbarModule,
        MatIconModule,
        MatTableModule,
        MatPaginatorModule,
        MatProgressSpinnerModule
    ],
})
export class AngularMaterialModule { }