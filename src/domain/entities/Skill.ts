export default class Skill {
  readonly entirety: number;
  readonly name: string;
  readonly xp: number;

  constructor(props: { entirety: number, name: string, xp: number }) { 
    this.entirety = props.entirety;
    this.name = props.name;
    this.xp = props.xp;
  }
}