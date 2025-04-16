import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private storage: Storage) {}

  // Initialize the storage system (must be called before using)
  async init() {
    await this.storage.create();
  }

  // Store data under a specific key
  async setData(key: string, data: any) {
    await this.storage.set(key, data);
  }

  // Retrieve data by key
  async getData(key: string) {
    return await this.storage.get(key);
  }
}
