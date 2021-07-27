import FakeDataBase from "../fake-database/fake-database.class";

beforeEach(async () => {
  FakeDataBase.db.resetData();
});
