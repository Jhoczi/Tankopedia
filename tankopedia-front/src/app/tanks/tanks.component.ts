import { Component, OnInit } from '@angular/core';
import { Tank } from '../interfaces/tank';

@Component({
  selector: 'app-tanks',
  templateUrl: './tanks.component.html',
  styleUrls: ['./tanks.component.css']
})
export class TanksComponent implements OnInit {

  tank: Tank = {
    id: 1,
    name: 'KW-1'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
