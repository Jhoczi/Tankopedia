import { Component, OnInit } from '@angular/core';
import {Observable, OperatorFunction} from "rxjs";
import {debounceTime, distinctUntilChanged, map} from "rxjs/operators";

const states = ["KW-1","T-34"];

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }
  public AppName:string = "Tankopedia";
  public isCollapsed = true;
  public searchModel: any;

  ngOnInit(): void {
  }

  formatter = (result: string) => result.toUpperCase();

  search: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term === '' ? [] : states.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0,10))
    );
}
