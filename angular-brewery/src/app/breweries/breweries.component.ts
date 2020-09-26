import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-breweries',
  templateUrl: './breweries.component.html',
  styleUrls: ['./breweries.component.scss']
})
export class BreweriesComponent implements OnInit {

  breweries: Object;

  constructor(private http: HttpService) { }

  ngOnInit(): void {
    this.http.getBeer().subscribe(data => {
      this.breweries = data;
    });
  }

}
