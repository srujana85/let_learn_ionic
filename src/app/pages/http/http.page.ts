import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute, Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { finalize } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { ApiService } from '../../services/api.service';
@Component({
  selector: 'app-http',
  templateUrl: './http.page.html',
  styleUrls: ['./http.page.scss'],
})
export class HttpPage implements OnInit {
  data =null;
  url='http://localhost:5000/api';
  constructor( private loadingCtrl: LoadingController, public alertCtrl: AlertController,private apiService: ApiService, private router: Router,private route: ActivatedRoute) { 
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.data = this.router.getCurrentNavigation().extras.state.result;
        this.data = JSON.stringify(this.data);
      }
    });
  }

  ngOnInit() {
    console.log(this.data);
  }
 async makeApiRequest(method){
   console.log(this.data);
    const jsondata = JSON.parse(this.data);
    console.log(jsondata);
    const loading = await this.loadingCtrl.create();
    loading.present();

    this.apiService.ApiRequest(this.url,jsondata,method).pipe(
      finalize(() => loading.dismiss())
    )
      .subscribe(async res => {
        console.log(res);
        const result = JSON.stringify(res);
        const alert = await this.alertCtrl.create({
          header: 'Success',
          message: result,
          buttons: ['OK']
        });
        await alert.present();
      }, async err => {
        console.log(err);
        const alert = await this.alertCtrl.create({
          header: 'error',
          message: err.msg,
          buttons: ['OK']
        });
        await alert.present();
      });
  }


}
