import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

@IonicPage()
@Component({
  selector: 'page-geolocation',
  templateUrl: 'geolocation.html',
})
export class GeolocationPage {
  location: {
     lat: number, 
     lng: number 
    };

  constructor(public navCtrl: NavController, public navParams: NavParams, public geoNet: Geolocation) {
  }
  getGeolocation(){
    this.geoNet.getCurrentPosition().then((resp)=>{
      this.location = {
        lat: resp.coords.latitude,
        lng: resp.coords.longitude
      };
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GeolocationPage');
  }

}
