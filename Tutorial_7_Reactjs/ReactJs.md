# React

### ¿Qué es React Js?
React es una librería desarrollada por Facebook que nos ayuda a construir interfaces de usuario interactivas para todo tipo de aplicaciones: web, móviles o de escritorio.
Cada pequeña parte de nuestra página web la conoceremos como “Componente”. Cada componente se encargará de una función en específico. Además, podremos reutilizar nuestros componentes siempre que lo necesitemos.
Al unir todos nuestros componentes tendremos una página web que nos permite cambiar, actualizar o eliminar elementos de forma muy sencilla.
React intenta ayudar a los desarrolladores a construir aplicaciones que usan datos que cambian todo el tiempo. Su objetivo es ser sencillo, declarativo y fácil de combinar. React sólo maneja la interfaz de usuario en una aplicación; React es la Vista en un contexto en el que se use el patrón MVC (Modelo-Vista-Controlador) o MVVM (Modelo-vista-modelo de vista). También puede ser utilizado con las extensiones de React-based que se encargan de las partes no-UI (que no forman parte de la interfaz de usuario) de una aplicación web.
Según el servicio de análisis Javascript (en inglés “javascript analytics service”), Libscore, React actualmente está siendo utilizado en las páginas principales de Imgur, Bleacher Informe, Feedly, Airbnb, SeatGeek, HelloSign, y otras.

#### 1.1 DOM, Virtual DOM y React DOM
El DOM es el código HTML que se transforma en páginas web.
Cada vez que cambiamos alguna parte del DOM, también estamos actualizando el HTML con el que interactúan nuestros usuarios. El problema es que todas las operaciones, comparaciones y actualizaciones en el DOM son muy costosas.
El Virtual DOM es una herramienta que usan tecnologías como React y Vue para mejorar el rendimiento (performance) y velocidad de nuestras aplicaciones.
Es una copia exacta del DOM, pero mucho más ligera, ya que los cambios no actualizan el verdadero HTML de nuestras páginas web. Gracias al Virtual DOM podemos hacer operaciones y comparaciones de forma sumamente rápida.
Recuerda que los cambios en el Virtual DOM no afectan el HTML que ven los usuarios, así que debemos estar sincronizando constantemente las copias con el DOM. Pero no te preocupes, React DOM lo hace por nosotros.

#### 1.2 Create React App y Tipos de Componentes
Inicialización de un proyecto en React
Creación de nuestro sitio web usando la plantilla por defecto de create-react-app:
```
npx create-react-app nombre-de-tu-proyecto
```

Iniciar el servidor de desarrollo:
```
npm start
```

**Creación y Tipos de Componentes**
Los nombres de nuestros componentes deben empezar con una letra mayúscula, al igual que cada nueva palabra del componente. Esto lo conocemos como Pascal Case o Upper Camel Case.
Los componentes Stateful son los más robustos de React. Los usamos creando clases que extiendan de React.Component. Nos permiten manejar estado y ciclo de vida (más adelante los estudiaremos a profundidad).

```
import React, { Component } from 'react';

class Stateful extends Component {
  constructor(props) {
    super(props);

    this.state = { hello: 'hello world' };
  }

  render() {
    return (
      <h1>{this.state.hello}</h1>
    );
  }
}

export default Stateful;
```
También tenemos componentes Stateless o Presentacionales. Los usamos creando funciones que devuelvan código en formato JSX (del cual hablaremos en la próxima clase).

```
import React from 'react';

const Stateless = () => {
  return (
    <h1>¡Hola!</h1>
  );
}

// Otra forma de crearlos:
const Stateless = () => <h1>¡Hola!</h1>;

export default Stateless;
```

#### Llamar a una Api
Este curso va a tratar de llamar una API en este caso la creada en el tutorial para consumir fotos de personas y ofertas que pongas.
Las llamadas a una API siguen un patrón similar siempre que las hacemos, cada llamada consta de tres estados:

* Loading: cuando la petición se envía y estamos esperando.
* Error: se debe dejar un mensaje para el usuario para arreglar el error o volver a intentarlo.
* Data: los datos nos pueden llegar de dos formas, o en error o con los datos requeridos.


**Como traer datos de una API en React**
Una llamada a una API es un proceso asíncrono, es decir que lo comenzamos pero no sabemos cuándo acabará. Por lo mismo la función a escribir debe ser asíncrona.
La llamada se hará usando fetch que es una función de JavaScript que al pasarle una dirección de internet, hará una petición GET y lo que sea que exista ahí será devuelto.

Cree un archivo json el cual es consumido desde react de la siguiente forma:

```sh
import React from 'react'
import { Card, Image} from 'semantic-ui-react'
import data from '../data/datos.json'
import {Link} from 'react-router-dom'
import Categorizador from './Categorizador'

let mydata = JSON.parse(JSON.stringify(data));
let COLORS = ['red','orange','yellow','olive','green','teal','blue','violet','purple','pink','brown','grey','black']


function Cards(props) {
  let category = (props.category)
  let datafilter = mydata.filter(x => x.categoria === `${category}`)
  if (category===0) {
    datafilter = mydata
  }
  return (
    <div>
      <Categorizador handleClick={props.funcion}/>
      <div className="dsc-Cards">
        { 
          datafilter.map( x => (
              <Link to={`/${x.id}`} key={x.id}>
                  <Card className="dsc-Cards__card" color={ COLORS[ (Math.floor(Math.random()*(COLORS.length)))] }>
                    <Image src={x.imgs.logo} wrapped ui={false} />
                  </Card>
              </Link>
          ))
        }
     </div>
    </div>
)
}

export default Cards
```
Como podemos ver en el código de arriba en mydata = JSON.parse(JSON.stringify(data)); es dondo obtiene los datos y los imprime en el componente datafilter.map ahí se imprimirá los datos, en este caso el logo.
Es análogo a la hora de mostrar las imágenes de una persona. 


### Rutas en reactjs
Las rutas en react se hacen con la libreria react-router la cual sirve para poder generar distintas páginas, y estos datos puedas compartir valores.
Un ejemplo en el trabajo es hecho en este código:

```sh
import React, { Component } from 'react'
import {BrowserRouter as Router,Route} from "react-router-dom";
import "./assets/scss/layout.scss"
import "./assets/scss/ofertas.scss"
import "./assets/scss/categorizador.scss"
import HomeGrid from './components/HomeGrid'
import Ofertas from './components/Ofertas'

class App extends Component{

  render(){
    return (
      <Router>
          <div>
            <Route path='/:id' component={Ofertas} />
            <Route exact path='/' component={HomeGrid} /> 
          </div>
      </Router>
  );}
}

export default App;
//<Route path='/#:category' component={HomeGrid} />
```

Donde pondemos ver que Tenemos el path inicial que es HomeGrid que es un componente y si le ponemos una id al componente va a la sección ofertas. 

###Conclusiones

Con react se puede usar los componente para ahorrar trabajo y ahorrar tiempo en generar nuevo código pero esta vez reutilizable, por lo que la capacidad que tiene esta librería es capaz de estar posicionada como una de las mejores últimamente. 
