import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {

  details:detail[]=[
    {id:1, name:'danielsambu100'},
    {id:2, name:'dansam100'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
