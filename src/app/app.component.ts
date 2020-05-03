import {Component, OnInit} from '@angular/core';
import {faChartBar} from '@fortawesome/free-solid-svg-icons';
import {faAd, faStar, faCar} from '@fortawesome/free-solid-svg-icons';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'xml-agent-front';

  faCreateAd = faAd;
  faReport = faChartBar;
  faStar = faStar;
  faCar = faCar;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }
}
