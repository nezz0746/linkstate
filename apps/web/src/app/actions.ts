"use server";

export const logOnServer = (things: any[] | any) => {
  if (Array.isArray(things)) {
    things.forEach((thing) => {
      if (typeof thing === "object") {
        console.log(JSON.stringify(thing, null, 2));
      } else {
        console.log(thing);
      }
    });
  } else {
    if (typeof things === "object") {
      console.log(JSON.stringify(things, null, 2));
    } else {
      console.log(things);
    }
  }
};
