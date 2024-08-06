import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from './model/Student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  url:string;
  student :Student;
  studentArr :Student[];
  

  constructor(private http :HttpClient) { 
    this.url="http://localhost:3005/student";
    this.student=new Student();
    this.studentArr=[];
  }
  insertStudent(student : Student)
  {
    this.http.post<Student>(this.url,student).subscribe();
    return "Students Data Added";
    
  }
  deleteStudent(RegNo :number){
    this.http.delete<Student>(this.url+"/"+RegNo).subscribe();
    return "Student Data Deleted"
  }
  updateStudent(student :Student){
    this.http.put<Student>(this.url+"/"+student.id,student).subscribe();
    return "Student Data Updated"
}
applyStudent(RegNo:number){
  this.http.get<Student>(this.url+"/"+RegNo).subscribe(data => this.student = data);
  return this.student;
}
statusStudent(){
  this.http.get<Student[]>(this.url).subscribe(data =>this.studentArr=data);
  return this.studentArr;
}
}