export class Move{
  constructor({
    name,
    airing=5,
    active=3,
    recovery=10,
    depos=2
  }={}){
    this.name=name;
    this.airing=airing;
    this.recovery=recovery;
    this.active=active;
    this.depos=depos;
  }
}

export class AttackMove extends Move{
  constructor({
    name,
    airing=5,
    active=3,
    recovery=10,
    depos=2,
    damage=20,
    hRange=3,
    vRangeS=2,
    vRangeE=3
  }={}){
        super({name,airing,active,recovery,depos})
        this.damage=damage;
        this.vRangeS=vRangeS;
        this.vRangeE=vRangeE;
        this.hRange=hRange;
  }
}