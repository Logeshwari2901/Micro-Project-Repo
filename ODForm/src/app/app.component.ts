import { Component } from '@angular/core';
import { Student } from './model/Student';
import { StudentService } from './student.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  title = 'Micro';
  student :Student;
  result :string;
  studentArr:Student[];
  Flag : boolean;

  constructor(private studentService :StudentService){
    this.student=new Student();
    this.result="";
    this.studentArr=[];
    this.Flag=false;

  }
  insertStudent(data :any){
    this.student.id=data.RegNo;
    this.student.stuname=data.stuname;
    this.student.dept=data.dept;
    this.student.bat=data.Bat;
    
   

    this.result=this.studentService.insertStudent(this.student);
  }
  deleteStudent(data :any){
    this.result=this.studentService.deleteStudent(data.RegNo);

  }
  updateStudent(data :any){
    this.student.id=data.RegNo;
    this.student.stuname=data.stuname;
    this.student.dept=data.dept;
    this.student.bat=data.Bat;

    this.result=this.studentService.updateStudent(this.student);
  }
  applyStudent(data :any){
    this.student=this.studentService.applyStudent(data.RegNo);
    this.result =this.student.id +" " + this.student.stuname+ " " + this.student.dept+" "+this.student.bat;
  }
  statusStudent(){
    this.studentArr = this.studentService.statusStudent();
    this.Flag=true;
  }

  
}