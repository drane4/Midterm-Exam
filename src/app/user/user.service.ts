import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';

import { User } from './user-model';

import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

interface Newuser {
  content: string;
  hearts: 0;
  time: number;
}

@Injectable()
export class UserService {

  usersCollection: AngularFirestoreCollection<User>;
  userDocument:   AngularFirestoreDocument<Node>;

  constructor(private afs: AngularFirestore) {
    this.usersCollection = this.afs.collection('users', (ref) => ref.orderBy('time', 'desc').limit(5));
  }

  getData(): Observable<User[]> {
    return this.usersCollection.valueChanges();
  }

  getSnapshot(): Observable<User[]> {
    // ['added', 'modified', 'removed']
    return this.usersCollection.snapshotChanges().map((actions) => {
      return actions.map((a) => {
        const data = a.payload.doc.data() as User;
        return { id: a.payload.doc.id, content: data.content, hearts: data.hearts, time: data.time };
      });
    });
  }

  getuser(id: string) {
    return this.afs.doc<User>(`users/${id}`);
  }

  create(content: string) {
    const user = {
      content,
      hearts: 0,
      time: new Date().getTime(),
    };
    return this.usersCollection.add(user);
  }

  updateuser(id: string, data: Partial<User>) {
    return this.getuser(id).update(data);
  }

  deleteuser(id: string) {
    return this.getuser(id).delete();
  }
}
