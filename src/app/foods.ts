

export const FoodTypes = ['fruit' , 'vegetable' , 'grain' , 'protein' , 'spice' , 'other']
export type foodType = typeof FoodTypes[number]
export class Food {
  type: foodType;
  name: String;
  combinableWith?: Food[];
  introduced?: boolean = false;
}

export const ingredients:Food[] = [
  {
    name: 'alma',
    type: 'fruit',
    introduced: true
  },
  {
    name: 'krumpli',
    type: 'vegetable',
    introduced: true
  },
  {
    name: 'zabpehely',
    type: 'grain',
  },
  {
    name: 'őszibarack',
    type: 'fruit',
    introduced: true
  },
  {
    name: 'sütőtök',
    type: 'vegetable',
    introduced: true
  },
  {
    name: 'csirkemell',
    type: 'protein',
    introduced: true
  },
  {
    name: 'csirke máj',
    type: 'protein',
  },
  {
    name: 'rizspép',
    type: 'grain',
    introduced: true
  },
  {
    name: "fahéj",
    type: "spice",
    introduced: true
  },
  {
    name: "édesburgonya",
    type: "vegetable",
    introduced: true
  },
  {
    name: "banán",
    type: "fruit",
    introduced: true
  },
  {
    name: "körte",
    type: "fruit",
    introduced: true
  },
  {
    name: "avokádó",
    type: "fruit",
    introduced: false
  },
  {
    name: "mangó",
    type: "fruit",
    introduced: false
  },
  {
    name: "pulyka",
    type: "protein",
    introduced: true
  },
  {
    name: "sertés",
    type: "protein",
    introduced: false
  },
  {
    name: "marha",
    type: "protein",
    introduced: false
  },
  {
    name: "hal",
    type: "protein",
    introduced: false
  },
  {
    name: "barna rizs",
    type: "grain",
    introduced: false
  },
  {
    name: "búza",
    type: "grain",
    introduced: false
  },
  {
    name: "oliva olaj",
    type: "spice",
    introduced: true
  },
  {
    name: "repce olaj",
    type: "spice",
    introduced: true
  },
  {
    name: "brokkoli",
    type: "vegetable",
    introduced: false
  },
  {
    name: "cukkini",
    type: "vegetable",
    introduced: false
  },
  {
    name: "petrezselyem gyökér",
    type: "vegetable",
    introduced: false
  },
  {
    name: "sárgaborsó",
    type: "vegetable",
    introduced: false
  },
  {
    name: "sárgarépa",
    type: "vegetable",
    introduced: true
  },
  {
    name: "zöldborsó",
    type: "vegetable",
    introduced: false
  },
  {
    name: "bulgur",
    type: "grain",
    introduced: false
  },
  {
    name: "petrezselyem",
    type: "spice",
    introduced: false
  },
  {
    name: "kapor",
    type: "spice",
    introduced: false
  },
  {
    name: "bazsalikom",
    type: "spice",
    introduced: false
  },
  {
    name: "rozmaring",
    type: "spice",
    introduced: false
  },
  {
    name: "oregano",
    type: "spice",
    introduced: false
  },
  {
    name: "pasztörizált sajt",
    type: "protein",
    introduced: false
  },
  {
    name: "joghurt",
    type: "protein",
    introduced: false
  },
  {
    name: "vaj",
    type: "protein",
    introduced: false
  },
  {
    name: "tojás",
    type: "protein",
    introduced: false
  },
  {
    name: "kefír",
    type: "protein",
    introduced: false
  },
  {
    name: "nektarin",
    type: "fruit",
    introduced: true
  },
  {
    name: "sárgabarack",
    type: "fruit",
    introduced: true
  },
  {
    name: "szilva",
    type: "fruit",
    introduced: false
  }
]
export class Foods {
  private static instance: Foods;         
  
  getFoodByName = (foodName:string):Food=>{    
    let food:Food = ingredients.find((f)=>f.name === foodName );
    return food;
  }
  private setupCombinations() {
    this.getFoodByName('alma').combinableWith = [
      this.getFoodByName('krumpli'),
      this.getFoodByName('zabpehely'),
      this.getFoodByName('csirkemell'),
      this.getFoodByName('rizspép'),
      this.getFoodByName('csirke máj'),
      this.getFoodByName('őszibarack'),
      this.getFoodByName('sárgabarack'),
      this.getFoodByName('fahéj')
    ]

    this.getFoodByName('sárgabarack').combinableWith = [
      this.getFoodByName('krumpli'),
      this.getFoodByName('zabpehely'),
      this.getFoodByName('csirkemell'),
      this.getFoodByName('rizspép'),
      this.getFoodByName('csirke máj'),
      this.getFoodByName('őszibarack'),
      this.getFoodByName('alma'),
      this.getFoodByName('fahéj')
    ]

    this.getFoodByName('őszibarack').combinableWith = [
      this.getFoodByName('krumpli'),
      this.getFoodByName('zabpehely'),
      this.getFoodByName('csirkemell'),
      this.getFoodByName('rizspép'),
      this.getFoodByName('csirke máj'),
      this.getFoodByName('sárgabarack'),
      this.getFoodByName('alma'),
      this.getFoodByName('fahéj')
    ] 
  }
  public static getInstance(): Foods {
    if (!Foods.instance) {
      Foods.instance = new Foods();
      Foods.instance.setupCombinations();
    }

    return Foods.instance;
  }

  private constructor() { }
}
