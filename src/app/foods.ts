type foodType = 'fruit' | 'vegetable' | 'grain' | 'meat' | 'other';
export class Food {
  type: foodType;
  name: String;
  combinableWith?: Food[];
}

export class Foods {
  public static alma: Food = {
    name: 'alma',
    type: 'fruit',
  };
  public static krumpli: Food = {
    name: 'krumpli',
    type: 'vegetable',
  };

  public static zabpehely: Food = {
    name: 'zabpehely',
    type: 'grain',
  };

  public static barack: Food = {
    name: 'barack',
    type: 'fruit',
  };

  public static sutotok: Food = {
    name: 'sütőtök',
    type: 'vegetable',
  };

  public static csirkemell: Food = {
    name: 'csirkemell',
    type: 'meat',
  };
}
