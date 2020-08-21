//? https://leetcode.com/problems/lru-cache/

class LRUCache {
  constructor(size) {
    this.size = size;
    this.cSize = 0;
    this.lastUsed = "";
    this.used = new Set();
    this.mem = {};
  }

  use(n, ex = 1) {
    if (this.lastUsed === n) {
      return;
    }

    if (ex) {
      this.used.delete(n);
    } else if (this.cSize === this.size) {
      this.used.delete(this.used.keys().next().value);
    }
    this.used.add(n);
    this.lastUsed = n;
  }

  get(n) {
    if (this.used.has(n)) {
      this.use(n);
      return this.mem[n];
    } else {
      return -1;
    }
  }

  put(n, v) {
    if (!this.used.has(n)) {
      //add key
      if (this.cSize === this.size) {
        //discard lru key & add new key
        delete this.mem[this.used.keys().next().value];
        this.mem[n] = v;
        this.use(n, 0);
      } else {
        //add new key
        this.mem[n] = v;
        this.use(n, 0);
        this.cSize++;
      }
    } else {
      //edit existing key
      this.mem[n] = v;
      this.use(n);
    }
  }
}
