export class FixedLengthQueue<T> extends Array<T> {
  protected fixedLength;
  constructor(items: Array<T>, l: number) {
    super(...items);
    this.fixedLength = l;
    items.forEach((e, i) => {
      this[i] = e;
    });
    this.setToFixedLength();
  }
  private setToFixedLength() {
    if (this.length > this.fixedLength) {
      while (this.length > this.fixedLength) {
        this.shift;
      }
    }
  }
  changeFixedLength(l: number) {
    this.fixedLength = l;
  }
  push(...args: T[]): number {
    super.push(...args);
    this.setToFixedLength();
    return this.length;
  }
}
