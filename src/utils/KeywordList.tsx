class KeywordList {
  private static instance: KeywordList;
  private pairs: [string, number][] = [];

  private words = [
    { text: "Lion", value: 34 },
    { text: "Elephant", value: 52 },
    { text: "Tiger", value: 21 },
    { text: "Giraffe", value: 66 },
    { text: "Zebra", value: 48 },
    { text: "Panda", value: 15 },
    { text: "Kangaroo", value: 28 },
    { text: "Hippo", value: 42 },
    { text: "Monkey", value: 63 },
  ];

  private aLotOfWords = [
    { text: "Lion", value: 34 },
    { text: "Elephant", value: 52 },
    { text: "Tiger", value: 21 },
    { text: "Giraffe", value: 66 },
    { text: "Zebra", value: 48 },
    { text: "Panda", value: 15 },
    { text: "Kangaroo", value: 28 },
    { text: "Hippo", value: 42 },
    { text: "Monkey", value: 63 },
    { text: "Penguin", value: 19 },
    { text: "Crocodile", value: 37 },
    { text: "Koala", value: 57 },
    { text: "Owl", value: 31 },
    { text: "Gorilla", value: 50 },
    { text: "Polar Bear", value: 70 },
    { text: "Llama", value: 45 },
    { text: "Cheetah", value: 25 },
    { text: "Rhino", value: 38 },
    { text: "Sloth", value: 60 },
    { text: "Jaguar", value: 29 },
    { text: "Hedgehog", value: 41 },
    { text: "Pangolin", value: 55 },
    { text: "Dolphin", value: 65 },
    { text: "Chimpanzee", value: 20 },
    { text: "Octopus", value: 53 },
    { text: "Grizzly Bear", value: 47 },
    { text: "Antelope", value: 33 },
    { text: "Gazelle", value: 59 },
    { text: "Wolf", value: 24 },
    { text: "Squirrel", value: 12 },
    { text: "Raccoon", value: 49 },
    { text: "Moose", value: 36 },
    { text: "Koala", value: 58 },
    { text: "Puffin", value: 16 },
    { text: "Lynx", value: 30 },
    { text: "Hamster", value: 54 },
    { text: "Otter", value: 68 },
    { text: "Fennec Fox", value: 22 },
    { text: "Armadillo", value: 43 },
    { text: "Porcupine", value: 67 },
    { text: "Puma", value: 26 },
    { text: "Quokka", value: 39 },
    { text: "Axolotl", value: 62 },
    { text: "Salamander", value: 18 },
    { text: "Parrot", value: 46 },
    { text: "Flamingo", value: 61 },
    { text: "Seahorse", value: 35 },
    { text: "Bison", value: 27 },
    { text: "Chameleon", value: 51 },
    { text: "Walrus", value: 69 },
  ];

  private constructor() {}

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

  public getWordList(): { text: string; value: number }[] {
    return this.words;
  }
}

export default KeywordList;
