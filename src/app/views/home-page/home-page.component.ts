import { MovieInfoService } from './../../services/movie-info.service';
import { Component, OnInit } from '@angular/core';
import { error } from 'protractor';
import { environment } from 'src/environments/environment';
import { Router, ActivatedRoute, NavigationExtras} from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  public movieList:any;
  public imgURL: any;
  public keyword: any;

  constructor(
    public _movie: MovieInfoService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.init();
  }

  init() {
    try {
      this.getMovieList();
      this.imgURL = environment.imgURL;
    } catch (error) {
      console.error(error)
    }
  }

  getMovieList() {
    this._movie.getList({
      sort_by: 'popularity.desc', 
      certification_country: 'AU',

    }).subscribe(data => {
      this.movieList = data['results']
      // this.movieList['formateDate'] = this.movieList.map(item => {
      //   this.transferDate(item.release_date)
      // })
    },error=>{console.error(error)})
  }

  transferDate(dt) {
    const date = new Date(dt.replace(/-/g,'/'));
    const globalDate = date.toUTCString().split(',')[1].split(' ');
    const formatDate = new Array(globalDate[2], globalDate[3]);
    const stringFormatDate = formatDate.join(' ');
    return stringFormatDate;
  }

  toMovieDetail(item): void {
    this._router.navigate([`/detail/${item.id}`])
  }

  searchMovie(){
    if (!this.keyword){
      this.init();
    }
    else{
      this._movie.searchMovie({
        query: this.keyword
      }).subscribe(data => {
        this.movieList = data['results']
      },error=>{console.error(error)})
    }
  }

}
