import fs from "fs";
type Collection  = [{[key: string]: any}]

export default class FakeDataBase {
  //any type used because it's not possible to know in advance what kind
  // of data will be stored inside
  data: {[key: string]: Collection}  = {}
  hasBeenInitialized: boolean = false;
  fileNamePath = "./database.json";

  async loadDataFromFile(){
    console.log("loadDataFromFile");
    console.log(fs.readFileSync(this.fileNamePath).toJSON());
  }

  async writeDataInFile(){
    console.log("writeDataInFile");
    console.log(fs.writeFileSync(this.fileNamePath, JSON.stringify(this.data)));
  }

  getCollection(collectionName: string){
    console.log("getCollection");
    console.log(this.data[collectionName]);
  }
}
