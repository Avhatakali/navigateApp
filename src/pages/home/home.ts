import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import arr from '../../app/Array';
import { Task } from '../../app/Task';
import { AlertController } from 'ionic-angular'
import { Page1Page } from '../page1/page1';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }

  arrName = arr;

  addNames = function(firstName, lastName){

    let obj = new Task(firstName, lastName);

    
    console.log(obj);

    if(obj != null && lastName != firstName){
 
      const confirm = this.alertCtrl.create({
        title: 'verify?',
        message: 'Do you agree to use entered names ?',
        buttons: [
          {
            text: 'Disagree',
            handler: () => {
              console.log('Disagree clicked');
              this.navCtrl.push(HomePage);
            }
          },
          {
            text: 'Agree',
            handler: () => {
              console.log('Agree clicked');
              this.arrName.push(obj);
              this.navCtrl.push(Page1Page);
            }
          }
        ]
      });
      confirm.present();

    } else
     if(obj != null){
 
      this.navCtrl.push(HomePage);
    }
     else (obj != null)
      {
        if( obj == null || lastName == firstName ){
          
          const alert = this.alertCtrl.create({
            title: ' REVIEW MESSAGE !',
            subTitle: 'Review what yuh enteresd',
            buttons: ['OK']   
          });

          alert.present();
          this.navCtrl.setRoot(HomePage);
      }  
    }
  }

}