namespace BuilderPattern {
  class House {
    doors = 0;
    windows = 0;
    roof = '';

    public describe(): string {
      return `House with ${this.doors} doors, ${this.windows} windows and a ${this.roof} roof`;
    }
  }

  interface HouseBuilder {
    reset(): void;
    buildDoors(): void;
    buildWindows(): void;
    buildRoof(): void;
    getResult(): House;
  }

  class WoodenHouseBuilder implements HouseBuilder {
    private house: House = new House();

    reset(): void {
      this.house = new House();
    }

    buildDoors(): void {
      this.house.doors = 2;
    }

    buildWindows(): void {
      this.house.windows = 4;
    }

    buildRoof(): void {
      this.house.roof = 'wooden';
    }

    getResult(): House {
      const result = this.house;
      this.reset();
      return result;
    }
  }

  class StoneHouseBuilder implements HouseBuilder {
    private house: House = new House();

    reset(): void {
      this.house = new House();
    }

    buildDoors(): void {
      this.house.doors = 1;
    }

    buildWindows(): void {
      this.house.windows = 2;
    }

    buildRoof(): void {
      this.house.roof = 'stone';
    }

    getResult(): House {
      const result = this.house;
      this.reset();
      return result;
    }
  }

  class Director {
    construct(builder: HouseBuilder): House {
      builder.reset();
      builder.buildDoors();
      builder.buildWindows();
      builder.buildRoof();
      return builder.getResult();
    }
  }

  const director = new Director();

  const woodenBuilder = new WoodenHouseBuilder();
  const woodenHouse = director.construct(woodenBuilder);
  console.log(woodenHouse.describe());

  const stoneBuilder = new StoneHouseBuilder();
  const stoneHouse = director.construct(stoneBuilder);
  console.log(stoneHouse.describe());
}
