import { Readable, Writable, Transform } from "node:stream";

class OneToHundredStream extends Readable {
  index = 1;
  _read() {
    const i = this.index++;
    setTimeout(() => {
      if (i > 100) {
        this.push(null);
      } else {
        this.push(String(i));
      }
    }, 1000);
  }
}

class InverseNumbersStream extends Transform {
  _transform(chunk, encoding, callback) {
    const transformed = Number(chunk.toString()) * -1;
    callback(null, Buffer.from(String(transformed)));
  }
}

class MultiplyByTenStream extends Writable {
  _write(chunk, encoding, callback) {
    console.log(Number(chunk) * 10);
    callback();
  }
}

new OneToHundredStream()
  .pipe(new InverseNumbersStream())
  .pipe(new MultiplyByTenStream());
