import { Component, OnInit } from '@angular/core';
import { User } from '../Service/user';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../Service/user.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {
  id:number;
  user:User;
  constructor(private route:ActivatedRoute,private router:Router,private userService:UserService) { }

  ngOnInit() {

    //this.user = new User();
    
    this.userService.getuser(this.id)
    .subscribe(
      
      data => {
        this.user = data;
        }, (error) => console.log(error)
      
    );
   
  }

}
