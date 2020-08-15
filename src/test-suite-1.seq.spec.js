var lockFile = require('lockfile')
const fs = require('fs');

describe("Test suite 1", () => {
  it("Test suite 1 -> Test 1", (done) => {
    fs.appendFileSync("result.txt", "\nLock: Test suite 1 -> Test 1");
    lockFile.lock("some-file.lock", {wait:0,retryWait:0,retries:0}, function (er) {
      expect(er).toBeUndefined()
      setTimeout(() => {
        lockFile.unlock("some-file.lock", function (er) {
          fs.appendFileSync("result.txt", "\nUnlock: Test suite 1 -> Test 1");
          done();
        });
      }, Math.random() * 2000);
    });
  });

  it("Test suite 1 -> Test 2", (done) => {
    fs.appendFileSync("result.txt", "\nLock: Test suite 1 -> Test 2");
    lockFile.lock("some-file.lock", {wait:0,retryWait:0,retries:0}, function (er) {
      expect(er).toBeUndefined()
      setTimeout(() => {
        lockFile.unlock("some-file.lock", function (er) {
            fs.appendFileSync("result.txt", "\nUnlock: Test suite 1 -> Test 2");
          done();
        });
      }, Math.random() * 2000);
    });
  });
});
