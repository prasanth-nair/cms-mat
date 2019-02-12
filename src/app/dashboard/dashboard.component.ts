import { Component, OnInit, ViewChild } from '@angular/core';
import { Employee } from 'src/model/employee.model';
import { GetEmployeeService } from '../service/get.employee.service';
import { Router } from '@angular/router';
import { MatPaginator, MatTableDataSource } from '@angular/material';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;

  displayedColumns: string[] = ['eid', 'firstName', 'lastName', 'company', 'manager', 'termDate'];
  dataSource = new MatTableDataSource;
  resultsLength: number;

  constructor(
    private getemplservice: GetEmployeeService,
    private router: Router) { }

  ngOnInit() {
    this.getDataService()
  }

  getDataService() {
    this.getemplservice.GetEmpData()
      .subscribe(
        (data) => {
          this.dataSource = new MatTableDataSource<Employee>(data.emp);

        },
        (err) => {
          console.log(JSON.stringify(err));
        },
        () => {
          this.resultsLength = this.dataSource.data.length;
          this.dataSource.paginator = this.paginator;
        }
      )
  }



  onSelect(id: number) {
    this.router.navigate(['/Details', id, 'View']);
  }

}

