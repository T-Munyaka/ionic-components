import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { MyListPage } from '../my-list/my-list';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  navigateToMyList() {
    this.navCtrl.push(MyListPage)
  }

}
