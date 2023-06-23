import axios from 'axios'


const Producto = () => {

  const CargarProductoxCodigo = async() => {
    const CodigoB = "3175680011480";
    let url = "http://a-phz2-cidi-021:3000/api/producto/" + CodigoB;
    console.log( url);
    axios
      .get(url)
      .then((result) => {
        if (result.data!=null){
          //setPost(result.data.product]);
          console.log(result.data.Ingredientes);
          MostrarProducto(result.data,false)
        }else{
         // no se encontro
         console.log('No se encontro');
         MostrarProducto(result.data,true)
        }
        
      })
      .catch((error) => {
        //setPost(error);
        console.log("Error");
      });

     
const MostrarProducto = (producto, huboUnerror) =>
{
  if (huboUnerror){
  //Pantalla de que no se encontro el producto y que se agregue uno
  }
  else{
    <>
  <p> ${producto.Nombre}</p>
  <p>Ingredientes: ${producto.Ingredientes}</p>
  <p>Cantidad: ${producto.Cantidad}</p>
  </>
  }




}

  }
  return (

    
    <>
 
    <center><button type="button" className="btn btn-success boton" onClick={() => CargarProductoxCodigo()}> Buscar por Codigo de Barra</button> </center>
   
    </>
  );
  }
  export default Producto;






























  /*function getById(){
   
    //let url =(BASE_URL_PIZZAS + id);
    console.log('getById: ');
    axios
      .get("http://a-phz2-cidi-021:3000/api/producto/3175680011480")
      .then((result) => {
        displayUnProducto(result.data, false);
      })
      .catch(error => {
        displayUnProducto({}, true);
      });
      function displayUnProducto(unProducto, huboError){
        let estilo = 'table-dark';
        if (huboError){
          estilo = 'table-danger';
        }
        let table = '<table className="table table-striped table-hover">';
        table += `<thead class="${estilo}"><tr><th class="col-1 text-center">Id</th><th class="col-3">Nombre</th><th class="col-5">Descripcion</th><th class="col-2 text-center">Importe</th><th class="col-1 text-center">Libre Gluten</th></tr></thead>`;
          table += `<tr>`;
          table += `<td scope="col" className="text-center">${unProducto.Id}</td>`;
          table += `<td scope="col">${unProducto.Nombre}</td>`;
          table += `<td scope="col">${unProducto.Ingredientes}</td>`;
          table += `<td scope="col" className="text-center">${unProducto.Marca}</td>`;
          table += `<td scope="col" className="text-center">${unProducto.LibreGluten}</td>`;
          table += `</tr>`;
          table += "</table>";
        document.getElementById("listado").innerHTML = table;
      }
  }
*/

