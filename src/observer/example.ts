interface Observer {
  update(news: string): void;
}

interface Subject {
  attach(observer: Observer): void;
  detach(observer: Observer): void;
  notify(): void;
}

class NewsAgency implements Subject {
  private observers: Observer[] = [];
  private latestNews = '';

  attach(observer: Observer): void {
    this.observers.push(observer);
  }

  detach(observer: Observer): void {
    const index = this.observers.indexOf(observer);
    if (index !== -1) {
      this.observers.splice(index, 1);
    }
  }

  setNews(news: string): void {
    this.latestNews = news;
    this.notify();
  }

  notify(): void {
    for (const observer of this.observers) {
      observer.update(this.latestNews);
    }
  }
}

class NewsChannel implements Observer {
  constructor(private name: string) {}

  update(news: string): void {
    console.log(`${this.name} received news: ${news}`);
  }
}

const agency = new NewsAgency();
const channelA = new NewsChannel('Channel A');
const channelB = new NewsChannel('Channel B');

agency.attach(channelA);
agency.attach(channelB);

agency.setNews('New design pattern released');
agency.detach(channelA);
agency.setNews('Another update');
