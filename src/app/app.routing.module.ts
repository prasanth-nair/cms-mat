import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router'
import { LoginComponent } from "./login/login.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ResetComponent } from "./reset/reset.component";
import { EmpDetailsComponent } from "./emp-details/emp-details.component";
import { MatTestScreenComponent } from "./mat-test-screen/mat-test-screen.component";

const route: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'Login', },
    { path: 'Login', component: LoginComponent },
    { path: 'Reset', component: ResetComponent },
    { path: 'Details/:id', component: EmpDetailsComponent },
    { path: 'Dashboard', component: DashboardComponent },
    { path: 'Test', component: MatTestScreenComponent },
    { path: 'Details', component: DashboardComponent },
    { path: 'Details/:id/:mode', component: EmpDetailsComponent }


    // {
    //     path: 'Details/:id', component: EmpDetailsComponent, children: [
    //         { path: '', redirectTo: 'View', pathMatch: 'full' },
    //         { path: 'View', component: EmpDetailsComponent },
    //         { path: 'Edit', component: EmpDetailsComponent }
    //     ]
    // }


    // { path: 'Dashboard', component: DashboardComponent }
    // { path: 'Dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
    // { path: 'Details', loadChildren: './emp-details/emp-details.module#EmpDetailsModule' }

]


@NgModule({
    imports: [RouterModule.forRoot(route)],
    exports: [RouterModule],
    providers: []
})

export class AppRoutingModule { }
