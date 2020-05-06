import {Component, OnInit} from '@angular/core';
import {faAd, faStar, faEuroSign, faComments, faCar, faChartBar} from '@fortawesome/free-solid-svg-icons';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'xml-agent-front';

  faCreateAd = faAd;
  faStar = faStar;
  faEuroSign = faEuroSign;
  faMessages = faComments;
  faCar = faCar;
  faStatistics = faChartBar;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }
}
