import { Collections, Condition } from "./fake-database.types";

export default class FakeCollection {
  rows: Collections = [];

  findAll() {
    return this.rows;
  }

  findWhereRowEquals(conditions: Condition[]) {
    return this.rows.filter((value) => {
      for (let i = 0; i < conditions.length; i++) {
        const { rowKey, rowValue } = conditions[i];
        if (value[rowKey as string] !== rowValue) {
          return false;
        }
      }
      return true;
    });
  }

  static createNew(rows?: Collections) {
    const instance = new FakeCollection();
    if (rows) {
      instance.rows = rows;
    }

    return instance;
  }

  static fromJSON(data: Collections) {
    const instance = new FakeCollection();
    instance.rows = data;
    return instance;
  }
}
