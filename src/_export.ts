import * as find from "./find";
import * as make from "./make/_export";

export * from "./download-upload";
export * from "./odometer";

function test() {
  const strings = ["cat", undefined, "frog"];

  const div = make.div({}, {
    child: make.h1({ text: "These are my favourite strings:" }, {}),
    stringsDiv: make.div({}, {
      stringPs: make.elementArray(strings, s => make.p({ text: s }, {}))
    })
  });
}

export {
  find,
  make
};
