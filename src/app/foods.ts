export type foodType = 'fruit' | 'vegetable' | 'grain' | 'meat' | 'other';
export class Food {
  type: foodType;
  name: String;
  combinableWith?: Food[];
}

export class Foods {
  private static instance: Foods;
  public alma: Food = {
    name: 'alma',
    type: 'fruit',
  };
  public krumpli: Food = {
    name: 'krumpli',
    type: 'vegetable',
  };

  public zabpehely: Food = {
    name: 'zabpehely',
    type: 'grain',
  };

  public barack: Food = {
    name: 'őszi barack',
    type: 'fruit',
  };

  public sutotok: Food = {
    name: 'sütőtök',
    type: 'vegetable',
  };

  public csirkemell: Food = {
    name: 'csirkemell',
    type: 'meat',
  };

  public csirkemaj: Food = {
    name: 'csirke máj',
    type: 'meat',
  };

  public rizspep: Food = {
    name: 'rizspép',
    type: 'grain',
  };

  private setupCombinations() {
    (this.alma.combinableWith = [
      this.krumpli,
      this.zabpehely,
      this.csirkemell,
      this.rizspep,
      this.csirkemaj,
    ]),
      (this.krumpli.combinableWith = [this.alma, this.barack, this.csirkemell]);
    this.barack.combinableWith = [
      this.alma,
      this.rizspep,
      this.zabpehely,
      this.csirkemell,
      this.csirkemaj,
    ];
  }
  public static getInstance(): Foods {
    if (!Foods.instance) {
      Foods.instance = new Foods();
      Foods.instance.setupCombinations();
    }

    return Foods.instance;
  }

  private constructor() {}
}
