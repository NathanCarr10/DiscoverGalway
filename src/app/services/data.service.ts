import { Storage } from '@ionic/storage-angular';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private storage: Storage) {}

  async init() {
    await this.storage.create();
  }

  async setData(key: string, data: any) {
    await this.storage.set(key, data);
  }

  async getData(key: string) {
    return await this.storage.get(key);
  }
}
