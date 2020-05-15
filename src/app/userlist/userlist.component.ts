import { Component, OnInit } from '@angular/core';
import { UserService } from '../Service/user.service';
import { Observable } from 'rxjs';
import { User } from '../Service/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  users1: Observable<User[]>;
  searchstring: string;
  constructor(private userService: UserService, private router:Router) { }

  ngOnInit() {
   this.repeat(); 
  }
  repeat(){
    this.users1 = this.userService.getUsers();
  }
  userDetails(id:number){
    
    this.router.navigate(['users',id]);
  
  }

}
