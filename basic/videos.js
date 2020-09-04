const str = `<ul>
  <li data-time="5:17">Flexbox Video</li>
  <li data-time="8:22">Flexbox Video</li>
  <li data-time="3:34">Redux Video</li>
  <li data-time="5:23">Flexbox Video</li>
  <li data-time="7:12">Flexbox Video</li>
  <li data-time="7:24">Redux Video</li>
  <li data-time="6:46">Flexbox Video</li>
  <li data-time="4:45">Flexbox Video</li>
  <li data-time="4:40">Flexbox Video</li>
  <li data-time="7:58">Redux Video</li>
  <li data-time="11:51">Flexbox Video</li>
  <li data-time="9:13">Flexbox Video</li>
  <li data-time="5:50">Flexbox Video</li>
  <li data-time="5:52">Redux Video</li>
  <li data-time="5:49">Flexbox Video</li>
  <li data-time="8:57">Flexbox Video</li>
  <li data-time="11:29">Flexbox Video</li>
  <li data-time="3:07">Flexbox Video</li>
  <li data-time="5:59">Redux Video</li>
  <li data-time="3:31">Flexbox Video</li>
</ul>`;

// obtener el total de segundos de los videos tipo Flexbox Video
// Tip: convertir a un array de objetos
// Tip2: split

<<<<<<< HEAD


function searchByName(cadena, array) {
  let arrayAux = [];
  array.forEach(element => {
    let aux = element.search(cadena);
    if (aux > -1) {
      arrayAux.push(element);
    }
  });
  return arrayAux;
}

function durationFilter(array) {
  let arrayAux = [];
  array.forEach(element => {
    let aux = element.split('"');
    arrayAux.push(aux[1]);
  });
  return arrayAux;
}
function minutesSecondsFilter(array) {
  let arrayAux = [];
  array.forEach(element => {
    let aux = element.split(":");
    const objeto = {
      minutos: parseInt(aux[0]),
      segundos: parseInt(aux[1])
    }
    arrayAux.push(objeto);
  });
  return arrayAux;
}
function totalSecondsCalculation(mensaje, array) {
  let min = 0;
  let seg = 0;
  let total = 0;
  array.forEach(element => {
    min += element.minutos;
    seg += element.segundos;
  });
  total = ((min * 60) + seg);
  console.log(mensaje + total);

}

//divido el string en una cadena de strings
const array1 = str.split("</li>");
//filtro por video "Flexbox Video"
const aa = searchByName("Flexbox Video", array1);
//filtro por duracion del video
const bb = durationFilter(aa);
//Creo Objetos con los min y seg de cada pelicula
const cc = minutesSecondsFilter(bb);
//calculo los segundos totales. 
totalSecondsCalculation("Segundos totales: ", cc);

=======
function getVideos(str){
  return str
    .replace('<ul>','')
    .replace('</ul>','')
    .split('</li>')
    .slice(0, -1)
    .map( video => (
      {
        min:  parseInt(video
                      .split('"')[1]
                      .split(":")[0]),
        seg: parseInt(video
                     .split('"')[1]
                     .split(":")[1]),
        tipo: video.split('>')[1]
      }
    ));
}

function getTotalSegundos(videos, tipo){
  let totalsegundos = 0; 
    videos
          .filter( video => video.tipo === tipo)
          .forEach(video => {
            totalsegundos += video.min * 60 + video.seg;
          });
  return totalsegundos;
}


console.log(getTotalSegundos(getVideos(str), "Redux Video"));
>>>>>>> 5c69f135b9c4249791fc2330d04a2e37c5ef1269
