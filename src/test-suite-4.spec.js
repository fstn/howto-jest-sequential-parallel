var lockFile = require('lockfile')
const fs = require('fs');

describe("Test suite 4", () => {
  it("Test suite 4 -> Test 1", (done) => {
    fs.appendFileSync("result.txt", "\nStart: Test suite 4 -> Test 1");
      setTimeout(() => {
          fs.appendFileSync("result.txt", "\nEnd: Test suite 4 -> Test 1");
          done();
      }, Math.random() * 2000);
  });

  it("Test suite 4 -> Test 2", (done) => {
    fs.appendFileSync("result.txt", "\nStart: Test suite 4 -> Test 2");
      setTimeout(() => {
          fs.appendFileSync("result.txt", "\nEnd: Test suite 4 -> Test 2");
          done();
      }, Math.random() * 2000);
  });
});
