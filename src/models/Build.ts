import { IComponent } from "./Component";

export interface IBuild {
  _id?: string;
  cpu: IComponent;
  cpuCooler?: IComponent;
  gpus: [IComponent];
  motherboard: IComponent;
  memory: [IComponent];
  storageDrives: [IComponent];
  case?: IComponent;
  psu: IComponent;
  accessories: [IComponent];
  monitors: [IComponent];
  headphone?: IComponent;
  microphone?: IComponent;
  keyboard?: IComponent;
  soundCard?: IComponent;
  mouse?: IComponent;
  mousePad?: IComponent;
}
