namespace SingletonPattern {
  class Singleton {
    private static instance: Singleton;

    private constructor() {}

    public static getInstance(): Singleton {
      if (!Singleton.instance) {
        Singleton.instance = new Singleton();
      }
      return Singleton.instance;
    }

    public someBusinessLogic(): string {
      return 'I am doing something';
    }
  }

  const s1 = Singleton.getInstance();
  const s2 = Singleton.getInstance();

  console.log('Are both instances equal?', s1 === s2);
  console.log(s1.someBusinessLogic());
}
