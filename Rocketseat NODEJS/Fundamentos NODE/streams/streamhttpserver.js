import http from "node:http";
import { Transform } from "node:stream";

class InverseNumbersStream extends Transform {
  _transform(chunk, encoding, callback) {
    const transformed = Number(chunk.toString()) * -1;

    console.log(transformed);

    callback(null, Buffer.from(String(transformed)));
  }
}

const server = http.createServer((req, res) => {
    const buffers = [];

    for await (const chunk of req) {
      buffers.push(chunk);
    }

    return req
    .pipe(new InverseNumbersStream())
    .pipe(res);
});

server.listen(3334);
