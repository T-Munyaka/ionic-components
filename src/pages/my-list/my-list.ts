import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MyListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-my-list',
  templateUrl: 'my-list.html',
})
export class MyListPage {
  items: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items = [
      {
        title: 'Item 1', 
        subTitle: 'Sub title 1', 
        image: 'http://placehold.it/50'
      },
      {
        title: 'Item 2', 
        subTitle: 'Sub title 2', 
        image: 'http://placehold.it/50'
      },
      {
        title: 'Item 3', 
        subTitle: 'Sub title 3', 
        image: 'http://placehold.it/50'
      },
      {
        title: 'Item 4', 
        subTitle: 'Sub title 4', 
        image: 'http://placehold.it/50'
      },
      {
        title: 'item 5', 
        subTitle: 'Sub title 5', 
        image: 'http://placehold.it/50'
      },
      {
        title: 'Item 6', 
        subTitle: 'Sub title 6', 
        image: 'http://placehold.it/50'
      },
      {
        title: 'Item 7', 
        subTitle: 'Sub title 7', 
        image: 'http://placehold.it/50'
      },
      {
        title: 'Item 8', 
        subTitle: 'Sub title 8', 
        image: 'http://placehold.it/50'
      },
      {
        title: 'Item 9', 
        subTitle: 'Sub title 9', 
        image: 'http://placehold.it/50'
      },
      {
        title: 'item 10', 
        subTitle: 'Sub title 10', 
        image: 'http://placehold.it/50'
      },
    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyListPage');
  }

}
