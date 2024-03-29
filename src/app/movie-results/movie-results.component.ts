import {Component, Injectable, Input, OnInit} from '@angular/core';
import {IMovie} from "../@types/Interfaces";

@Component({
  selector: 'app-movie-results',
  templateUrl: './movie-results.component.html',
  styleUrls: ['./movie-results.component.scss']
})
@Injectable()
export class MovieResultsComponent implements OnInit {

  @Input() movieResults?: IMovie[];

  ngOnInit(): void {
    // console.log("movieResults--->", this.movieResults)
  }
}
