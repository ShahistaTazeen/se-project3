import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router'; 
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  studentName: string = '';
  studentEmail: string = '';
  eventName: string = ''; // Will hold the event name from the URL
  isSuccess: boolean = false; 
  constructor(private route: ActivatedRoute, // ActivatedRoute to access URL parameters
    private router: Router) {}

  ngOnInit(): void {this.route.params.subscribe(params => {
    this.eventName = params['eventName'];  // Capture the event name from the URL
  });}

  onSubmit() {
    // Normally here, you would send this data to your backend API.
    alert(`Registration to ${this.eventName} is successful!`);

    // Optionally, log the submitted data (or send it to the server)
    console.log('Student Name:', this.studentName);
    console.log('Student Email:', this.studentEmail);

    // Reset form after successful submission
    this.studentName = '';
    this.studentEmail = '';
  }
}
