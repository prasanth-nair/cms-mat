export class Employee {
    public eid: number;
    public firstName: string;
    public lastName: string;
    public company: string;
    public manager: string;
    public termDate: string;

    constructor(eid: number, firstName: string, lastName: string, company: string, manager: string, termDate: string) {
        this.eid = eid;
        this.firstName = firstName;
        this.lastName = lastName;
        this.company = company;
        this.manager = manager;
        this.termDate = termDate
    }

}

export class ServiceResponse {
    public message: string;
    public emp: Employee[]
}