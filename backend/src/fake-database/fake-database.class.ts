import fs from "fs";
import FakeCollection from "./fake-collection.class";
import { Collections } from "./fake-database.types";
import { logger } from "../utils/logger.utils";

export default class FakeDataBase {
  static collections: { [key: string]: FakeCollection } = {};
  static instance: FakeDataBase | null = null;
  static currentDbFileNamePath = `${__dirname}/database.current.json`;
  static originalDbFileNamePath = `${__dirname}/database.origin.json`;

  static createNewInstance() {
    return new FakeDataBase();
  }

  static get db() {
    const { instance, createNewInstance } = FakeDataBase;
    if (!instance) {
      FakeDataBase.instance = createNewInstance().initializeInstance();
    }

    return FakeDataBase.instance!;
  }

  initializeInstance() {
    logger.verbose("New instance of fake database is being initialized");
    this.loadDataFromFile();

    return this;
  }

  resetData() {
    const { originalDbFileNamePath } = FakeDataBase;
    this.loadDataFromFile(originalDbFileNamePath);
    this.save();
    logger.verbose("Fake database data has been reinitialized");

    return this;
  }

  loadDataFromFile(filePath?: string) {
    const { currentDbFileNamePath } = FakeDataBase;
    const data = fs.readFileSync(filePath || currentDbFileNamePath);
    const json = JSON.parse(data.toString("utf8"));

    FakeDataBase.collections = {};
    Object.keys(json).forEach((collectionName) => {
      FakeDataBase.collections[collectionName] = FakeCollection.fromJSON(
        json[collectionName]
      );
    });
  }

  save() {
    this.writeDataInFile();
  }

  writeDataInFile() {
    const { collections, currentDbFileNamePath } = FakeDataBase;
    const dataToSave: { [key: string]: Collections } = {};

    // Use foreach because i want to fill the hash table with collection keys in order to stringify it to a valid json
    Object.keys(collections).forEach((collectionName) => {
      dataToSave[collectionName] = collections[collectionName].rows;
    });

    fs.writeFileSync(currentDbFileNamePath, JSON.stringify(dataToSave));
  }

  getCollection(collectionName: string): FakeCollection {
    if (!(FakeDataBase.collections[collectionName] instanceof FakeCollection)) {
      FakeDataBase.collections[collectionName] = FakeCollection.createNew();
    }

    return FakeDataBase.collections[collectionName];
  }
}
