import { IComponent, Component } from "./Component";

export interface IBuild {
  cpu?: IComponent;
  cpuCooler?: IComponent;
  gpus?: IComponent[];
  motherboard?: IComponent;
  memory?: IComponent[];
  storageDrives?: IComponent[];
  case?: IComponent;
  psu?: IComponent;
  accessories?: IComponent[];
  monitors?: IComponent[];
  headphone?: IComponent;
  microphone?: IComponent;
  keyboard?: IComponent;
  soundCard?: IComponent;
  mouse?: IComponent;
  mousePad?: IComponent;
}

export class Build implements IBuild {
  cpu: IComponent;
  cpuCooler: IComponent;
  gpus: IComponent[];
  motherboard: IComponent;
  memory: IComponent[];
  storageDrives: IComponent[];
  case: IComponent;
  psu: IComponent;
  accessories: IComponent[];
  monitors: IComponent[];
  headphone: IComponent;
  microphone: IComponent;
  keyboard: IComponent;
  soundCard: IComponent;
  mouse: IComponent;
  mousePad: IComponent;

  constructor() {
    this.cpu = new Component();
    this.cpuCooler = new Component();
    this.motherboard = new Component();
    this.case = new Component();
    this.psu = new Component();
    this.headphone = new Component();
    this.microphone = new Component();
    this.keyboard = new Component();
    this.soundCard = new Component();
    this.mouse = new Component();
    this.mousePad = new Component();
    this.gpus = [];
    this.memory = [];
    this.storageDrives = [];
    this.accessories = [];
    this.monitors = [];
  }

  total() {
    return (
      (this.cpu.price || 0) +
      (this.cpuCooler.price || 0) +
      (this.gpus.reduce((a, c) => a + (c.price || 0), 0) || 0) +
      (this.motherboard.price || 0) +
      (this.memory.reduce((a, c) => a + (c.price || 0), 0) || 0) +
      (this.storageDrives.reduce((a, c) => a + (c.price || 0), 0) || 0) +
      (this.case.price || 0) +
      (this.psu.price || 0) +
      (this.accessories.reduce((a, c) => a + (c.price || 0), 0) || 0) +
      (this.monitors.reduce((a, c) => a + (c.price || 0), 0) || 0) +
      (this.headphone.price || 0) +
      (this.keyboard.price || 0) +
      (this.soundCard.price || 0) +
      (this.mouse.price || 0) +
      (this.mousePad.price || 0)
    );
  }
}
