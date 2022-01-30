import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class ModelsService {

  constructor(
    private firestore: AngularFirestore
  ) { }

  getModels(): Promise<any[]> {
    return new Promise(resolve => {
      let userDoc = this.firestore.firestore.collection(`models`);
      userDoc.get().then((querySnapshot) => {
        let models: any = [];
        querySnapshot.forEach((doc) => {
          const model: any = doc.data();
          if (!model.disabled) {
            models.push(doc.data());
          }

        });

        resolve(models);
      })
    });
  }

}
