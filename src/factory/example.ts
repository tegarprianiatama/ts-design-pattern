namespace FactoryMethod {
  abstract class Transport {
    abstract deliver(): string;
  }

  class Truck extends Transport {
    deliver(): string {
      return 'Deliver by land in a box';
    }
  }

  class Ship extends Transport {
    deliver(): string {
      return 'Deliver by sea in a container';
    }
  }

  abstract class Logistics {
    public planDelivery(): string {
      const transport = this.createTransport();
      return transport.deliver();
    }

    protected abstract createTransport(): Transport;
  }

  class RoadLogistics extends Logistics {
    protected createTransport(): Transport {
      return new Truck();
    }
  }

  class SeaLogistics extends Logistics {
    protected createTransport(): Transport {
      return new Ship();
    }
  }

  const road = new RoadLogistics();
  console.log(road.planDelivery());

  const sea = new SeaLogistics();
  console.log(sea.planDelivery());
}
