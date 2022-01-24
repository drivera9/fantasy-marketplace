import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private firestore: AngularFirestore
  ) { }

  getProducts(): Promise<any[]> {
    return new Promise(resolve => {
      let userDoc = this.firestore.firestore.collection(`products`);
      userDoc.get().then((querySnapshot: any) => {
        let models: any = [];
        querySnapshot.forEach((doc: any) => {
          models.push(doc.data());
        });

        resolve(models);
      })
    });
  }

}
