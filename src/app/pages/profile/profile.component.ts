import { UserService } from './../../service/user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user!: User;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    const profileId = this.route.snapshot.paramMap.get('id');

    if (profileId) {
      this.userService.getUserInfo(+profileId).subscribe(res => {
        if (res) {
          this.user = res;
        }
      });
    }
  }
}
