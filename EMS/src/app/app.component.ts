import { Component } from '@angular/core';
import { Employee } from './model/Employee';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'EMS';
  employee :Employee;
  result:string;
  employeeArr :Employee[];
  Flag : boolean;

  constructor(private service : EmployeeService){
    this.employee=new Employee();
    this.result="";
    this.employeeArr =[];
    this.Flag=false;
   
  }


  insertEmployee(data :any){
    this.employee.id=data.empId;
    this.employee.empName=data.empName;
    this.employee.empSalary=data.empSalary;

    
   // alert(data.empid+" "+data.empName+" "+data.empSalary)

    this.result=this.service.insertEmployee(this.employee);
  }
    
  deleteEmployee(data:any){
    this.result=this.service.deleteEmployee(data.empId);
  }
  updateEmployee(data :any){
    this.employee.id=data.empId;
    this.employee.empName=data.empName;
    this.employee.empSalary=data.empSalary;

    this.result=this.service.updateEmployee(this.employee);
}
  findEmployee(data :any){
    this.employee=this.service.findEmployee(data.empId);
    this.result =this.employee.id +" " + this.employee.empName+ " " + this.employee.empSalary;
  }
  findAllEmployee(){
    this.employeeArr = this.service.findAllEmployee();
    this.Flag=true;
}
}
