class KeywordList {
  private static instance: KeywordList;
  private pairs: [string, number][] = [];

  private constructor() {
    // Private constructor to prevent external instantiation
  }

  public static getInstance(): KeywordList {
    if (!KeywordList.instance) {
      KeywordList.instance = new KeywordList();
    }
    return KeywordList.instance;
  }

  public setPair(key: string, value: number): void {
    this.pairs.push([key, value]);
  }

  public getPair(key: string): number | undefined {
    const pair = this.pairs.find(([k]) => k === key);
    return pair ? pair[1] : undefined;
  }
}

export default KeywordList;
