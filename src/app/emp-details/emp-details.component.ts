import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { FormBuilder, FormGroup, Validators, FormsModule, NgForm } from '@angular/forms';
import { validateBasis } from '@angular/flex-layout';
import { GetEmployeeService } from '../service/get.employee.service';
import { Employee } from 'src/model/employee.model';


@Component({
  selector: 'app-emp-details',
  templateUrl: './emp-details.component.html',
  styleUrls: ['./emp-details.component.css']
})
export class EmpDetailsComponent implements OnInit, OnDestroy {

  emp: Employee[];

  empForm: FormGroup;
  firstName: string;
  lastName: string;
  eid: number;
  company: string;
  manager: string;
  termDate: string;


  private sub: Subscription;
  id: number;
  mode: string;
  constructor(private route: ActivatedRoute,
    private fb: FormBuilder,
    private empService: GetEmployeeService) {

    // To initialize FormGroup within the Constructor

    this.empForm = fb.group({
      'firstName': [null, Validators.required],
      'lastName': [null, Validators.required],
      'eid': [null, Validators.required],
      'company': [null, Validators.required],
      'manager': [null, Validators.required],
      'termDate': [null, Validators.required]

    })
  }

  ngOnInit() {
    this.getRouteParms();

  }

  getRouteParms() {
    this.sub = this.route.params
      .subscribe(
        (params => {
          this.id = +params['id']
          this.mode = params['mode']
          console.log('inside the route : ', this.id, ' + ', this.mode)
          this.getEmpDetails(this.id)
        })
      )
  }

  getEmpDetails(eid: number) {
    console.log('inside the getEmpDetails : ')

    this.empService.GetEmpDataByID(eid)
      .subscribe(
        (data) => {
          console.log('fetched emp data', data)
          this.emp = data.emp

        },
        (err) => {
          console.log(JSON.stringify(err));
        },
        () => {
          console.log('fetch completed')
          this.assignEmpDetails();
        }
      )

  }


  assignEmpDetails() {
    this.empForm.patchValue(
      {
        'firstName': this.emp[0].firstName,
        'lastName': this.emp[0].lastName,
        'eid': this.emp[0].eid,
        'company': this.emp[0].company,
        'manager': this.emp[0].manager,
        'termDate': this.emp[0].termDate,
      })
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
