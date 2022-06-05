import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-counts',
  templateUrl: './profile-counts.component.html',
  styleUrls: ['./profile-counts.component.scss']
})
export class ProfileCountsComponent implements OnInit {

  @Input() jobYears!: number;
  @Input() certificates!: number;
  @Input() internships!: number;

  constructor() { }

  ngOnInit(): void {
  }

}
