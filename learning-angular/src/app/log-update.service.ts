import { Injectable } from '@angular/core';
import {SwUpdate} from "@angular/service-worker";
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class LogUpdateService {

  constructor(updates: SwUpdate, private _snackBar: MatSnackBar) {
    updates.available.subscribe(event => {
      let snackBarRef = _snackBar.open("An update is available!", "Refresh")
      // this._snackBar.open("An update is available!");
      snackBarRef.onAction().subscribe(() => {
        console.log('The snackbar action was triggered!');
        location.reload();
      });
    });
    updates.activated.subscribe(event => {
      this._snackBar.open("An update has been applied!");
    });
  }
}
