// abstract classes

abstract class TakePhoto {
  constructor(public cameraMode: string, public filter: string) {}

  getReelTime(): number {
    return 0;
  }
}

class Instagram extends TakePhoto {
  constructor(public cameraMode: string, public filter: string) {
    super(cameraMode, filter);
  }
}

const mg = new Instagram("test", "test");
