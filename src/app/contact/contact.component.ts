import { Component, ElementRef, OnInit, ViewChild, output } from '@angular/core';
import { ContactService } from '../services/contact.service';
import { error } from 'console';

@Component({
  selector: 'app-Contact',
  templateUrl: './Contact.component.html',
  styleUrl: './Contact.component.scss'
})
export class ContactComponent implements OnInit{
  isCallingApi:boolean =false;
  IsSubmitted:boolean=false;
  name:string='';
  email:string='';
  desc:string ='';
  @ViewChild('txtname') txtname?:ElementRef ;
  @ViewChild('txtEmail') txtEmail?:ElementRef ;

  @ViewChild('txtDesc') txtDesc?:ElementRef ;

ngOnInit(): void {
  
}
constructor( private service:ContactService){}
sendForm(){
this.isCallingApi=true;
  this.IsSubmitted=true;
  this.name=this.txtname?.nativeElement.value;
  this.email=this.txtEmail?.nativeElement.value;
  this.desc=this.txtDesc?.nativeElement.value;
 this.service.sendcontactForm({
  name:this.name,email:this.email,description:this.desc
 }).subscribe(output=>{ 
  this.isCallingApi=false;
  if(output.status){
    this.name=this.txtname?.nativeElement.value;
    this.email=this.txtEmail?.nativeElement.value;
    this.desc=this.txtDesc?.nativeElement.value;
    this.IsSubmitted=true;
  }
}, error=>{
  console.log('server output',error);
  this.isCallingApi=false;
});
}
}
