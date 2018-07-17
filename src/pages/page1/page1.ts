import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import arr from '../../app/Array';
import { Task } from '../../app/Task';
import { AboutPage } from '../about/about';
import { LabsPage } from '../labs/labs';
import { NewsPage } from '../news/news';
import { ContactPage } from '../contact/contact';

/**
 * Generated class for the Page1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html',
})
export class Page1Page {

  arrName = arr;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Page1Page');
  }

    About (){
      this.navCtrl.push(AboutPage);
    }

    Labs(){
      this.navCtrl.push(LabsPage);
    }

    News(){
      this.navCtrl.push(NewsPage);
    }

    Contact(){
      this.navCtrl.push(ContactPage);
    }

}
