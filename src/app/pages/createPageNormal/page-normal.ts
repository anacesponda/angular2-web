export class PageNormal {
  id: number;
  texto:string;
  imgHorizontal:string;
  imgVertical:string;
  guiaDocente:string;
  curiosidades:string;
  paraSaberMas:string;
  lectoEscritura:string;
  profundicemos:string;
  sonido:string;
  dialogos:string;
  posicionImg:string;


  toJson(): string{
    let result = [];
    Object.keys(this).forEach((key) => {
      if (this[key] !== undefined)

        result.push( key + ":" + this[key])
    });
    let res = JSON.stringify(result);
    return res.toString();
  }
}
