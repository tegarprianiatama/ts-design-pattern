namespace sample {
  export class Singleton {
    private static instance: Singleton;

    private constructor() {}

    public static getInstance(): Singleton {
      if (!Singleton.instance) {
        Singleton.instance = new Singleton();
      }

      return Singleton.instance;
    }

    getFullName = (): string => {
      const first_name = "tegar";
      const last_name = "priniatama";

      return `${first_name} ${last_name}`;
    };
  }

  const singleton1 = Singleton.getInstance();
  const singleton2 = Singleton.getInstance();

  console.log("singleton1 dan singleton2", singleton1 === singleton2);
}

export default sample;
