import { LocalLink } from "../types";

// { links: [] }
export class LocalLinkStorage {
  key: string = "peanut-explorer-links";

  constructor() {}

  add(data: LocalLink) {
    const { links } = this.list();

    links.push(data);

    localStorage.setItem(this.key, JSON.stringify({ links }));
  }

  list(): { links: LocalLink[] } {
    const list = JSON.parse(localStorage.getItem(this.key) ?? "{ links: [] }");

    return list.links;
  }
}
