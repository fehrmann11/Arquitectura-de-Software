# Git

Este curso está basado en: Curso Profesional de Git y Github de platzi.

## 1. ¿Qué es git?
Git es un sistema de control de versiones, pensado para la eficiencia y la confiabilidad del mantenimiento de versiones en un proyecto.
Git funciona como una línea de tiempo que nos permite regresar a momentos específicos del código.

Su propósito es:
- Llevar un registro de los cambios
- Coordinar el trabajo de varias personas

### 1.1 Comandos claves
| COMANDOS | UTILIDAD |
| ------ | ------ |
| git init | inicia el repositorio git |
| git add <nombre archivo> | Git comienza a hacerle un seguimiento al archivo en cuestión. Básicamente es cuando la información entra al escenario (stage area). |
| git commit -m <mensaje> | Envía los últimos cambios del archivo a la base de datos del sistema de control de versiones. Para controlar los cambios que se le hayan hecho. Con esto nos permite hacer una captura o guardar en el tiempo los cambios realizados que estaban en el escenario (stage area).  |
| git add .  | Es otra forma de agregar archivos. Este comando agrega todos los archivos que hayan cambiado en el escenario (stage area). |
| git status | Mostrará todos los cambios que hemos hecho, esto incluye las líneas que hemos cambiado, cuando y quien hizo dichos cambios.  |
| git log <archivo>| Para ver la historia completa de un archivo.  |

Este curso estará basado en linux, por lo tanto la instalación está basado en este sistema operativo.
Abrimos el terminal control + alt + T, luego hacemos los siguientes comandos
Primer paso:
```sh
$ sudo apt-get update
```
Segundo paso:
```sh
$ sudo apt-get upgrade
```
Con esto primero actualizamos el sistema, con el sistema ya actualizado podemos instalar git sin problema:
```sh
$ sudo apt-get install git
```
Para ver si git fue instalado correctamente:
```sh
$ git --version
```
### 1.2 ¿Qué es staging?
Para iniciar un repositorio, o sea, activar el sistema de control de versiones de Git en tu proyecto, solo debes ejecutar el comando git init.
Este comando se encargará de dos cosas: primero, crear una carpeta .git, donde se guardará toda la base de datos con cambios atómicos de nuestro proyecto; y segundo, crear un área que conocemos como Staging, que guardará temporalmente nuestros archivos y nos permitirá, más adelante, guardar estos cambios en el repositorio.

### 1.3 Ciclo de vida o estados de los archivos en git
Cuando trabajamos con Git nuestros archivos pueden vivir y moverse entre 4 diferentes estados:
* **Archivos Tracked**: son los archivos que viven dentro de Git, no tienen cambios pendientes y sus últimas actualizaciones han sido guardadas en el repositorio gracias a los comandos git add y git commit.
* **Archivos Staged**: son archivos en Staging. Viven dentro de Git y hay registro de ellos porque han sido afectados por el comando git add, aunque no sus últimos cambios. Git ya sabe de la existencia de estos últimos cambios, pero todavía no han sido guardados definitivamente en el repositorio porque falta ejecutar el comando git commit.
* **Archivos Unstaged**: entiendelos como archivos “Tracked pero Unstaged”. Son archivos que viven dentro de Git pero no han sido afectados por el comando git add ni mucho menos por git commit. Git tiene un registro de estos archivos, pero está desactualizado, sus últimas versiones solo están guardadas en el disco duro.
* **Archivos Untracked**: son archivos que NO viven dentro de Git, solo en el disco duro. Nunca han sido afectados por git add, así que Git no tiene registros de su existencia.

Hay un caso muy raro donde los archivos tienen dos estados al mismo tiempo: **staged y untracked**. Esto pasa cuando guardas los cambios de un archivo en el área de Staging (con el comando git add), pero antes de hacer commit para guardar los cambios en el repositorio haces nuevos cambios que todavía no han sido guardados en el área de Staging.

Como vemos a continuación se muestra como se vería visualmente, además de algunos comandos que afectarían las distintas áreas de git. 
![Duck](https://static.platzi.com/media/user_upload/estados-git-0acb84f7-5080-4098-99d9-59012a3b8e86.jpg)

### 1.4 Ramas en git

Por defecto, siempre empezamos en la rama master (pero puedes cambiarle el nombre si no te gusta) y creamos nuevas ramas, a partir de esta, para crear flujos de trabajo independientes.
Crear una nueva rama se trata de copiar un commit (de cualquier rama), pasarlo a otro lado (a otra rama) y continuar el trabajo de una parte específica de nuestro proyecto sin afectar el flujo de trabajo principal (que continúa en la rama master o la rama principal).
Se recomienda el siguiente flujo para los equipos de desarrollo: 
* **Master**: Todo lo que esté en la rama master va a producción.
* **development**: las nuevas features, características y experimentos van en una rama “development”.
* **hotfix**: los issues o errores se solucionan en una rama “hotfix”.

Crear una nueva rama lo conocemos como Checkout. Unir dos ramas lo conocemos como Merge.

### 2 Primeros pasos

Dirigite a la carpeta donde quieras posicionar tu trabajo e inicia con el comando git init.
Primero que nada hay que darle un poco de información sobre nosotros a git:
```sh
$ git config --global user.email "tu@email.com"
$ git config --global user.name "Nombre"
```
Existen más configuraciones con el comando git config --list.

### Ejemplo 1: Creando tu primer commit.

Crea una carpeta, y haz :
```sh
$ git init
```
Esto creará la base de datos de git.
Luego crea un archivo .txt en la carpeta, que tenga cualquier texto a gusto como por ejemplo "Hola soy un campeón", guardalo, y luego dirigite a la terminal y haz:
```sh
$ git status
```
Y verás algo como esto:

>En la rama master
>Tu rama está actualizada con 'origin/master'.

>Archivos sin seguimiento:
  (usa "git add <archivo>..." para incluirlo a lo que se será confirmado)

>	nombre_archivo.txt

>no hay nada agregado al commit pero hay archivos sin seguimiento presentes (usa "git add" para hacerles seguimiento)

Luego haz un git add nombre_archivo.txt, y saldrá algo como esto:
>En la rama master
>Tu rama está actualizada con 'origin/master'.

>Cambios a ser confirmados:
>  (usa "git reset HEAD <archivo>..." para sacar del área de stage)

>	nuevo archivo:  nombre_archivo.txt


Ahora borremoslo: 
```sh
$ git rm --cached nombre_archivo.txt
```
Verás que el archivo sigue en la carpeta, pero cuando hagas git status te darás cuenta que vuelve a estar como en el comienzo. Esto quiere decir que lo borramos solo del staging área, pero no del working directory. 

Vuelve agregar tu archivo con git add nombre_archivo.txt (o también git add . : lo cual hará que se agregen todos los archivos que estén en esa carpeta). Una vez vuelto a estar en el stage area (la zona donde se guarda en memoria ram) haremos en siguiente comando:
```sh
$ git commit -m "mi primer commit"
```
Bastaría solo con poner git commit, pero es buena práctica siempre tener un mensaje para saber que se hizo en esa versión del archivo, así que asegurate de siempre poner un nombre a corde con lo que estas haciendo, entonces nuestro archivo estará en git repository.

### Ejemplo 2: Viendo los cambios de un archivo.
Supongamos que el nombre_archivo.txt le cambiamos algunas cosas, por ejemplo le agregamos más texto o le quitamos texto, luego agregamos esos cambios como se explico antes.
Para ver que cambios hay en ese archivo vamos al comando
```sh
$ git show nombre_archivo.txt
```
Aquí te mostrará los últimos cambios que se le han hecho al archivo y que se diferencio del anterior, además puedes hacer lo siguiente: 
Si ejecutas el siguiente comando:
```sh
$ git log nombre_archivo.txt
```
Verás la historia del archivo y quién hizo los commits.

Además con el comando:
```sh
$ git diff (ash1) (ash2)
```
Podrás hacer las diferencias del archivo con git log nombre_archivo y podrás comparar cualquier versión del archivo.


### 3. Volvamos en el tiempo

El comando git checkout + ID del commit nos permite viajar en el tiempo. Podemos volver a cualquier versión anterior de un archivo específico o incluso del proyecto entero. Esta también es la forma de crear ramas y movernos entre ellas.

También hay una forma de hacerlo un poco más “ruda”: usando el comando git reset. En este caso, no solo “volvemos en el tiempo”, sino que borramos los cambios que hicimos después de este commit.

Hay dos formas de usar git reset: con el argumento --hard, borrando toda la información que tengamos en el área de staging (y perdiendo todo para siempre). O, un poco más seguro, con el argumento --soft, que mantiene allí los archivos del área de staging para que podamos aplicar nuestros últimos cambios pero desde un commit anterior.

### Ejercicio 1:
vuelve al primer commit con el siguiente comando:
```sh
$ git checkout (ash)
```
El ash se obtiene de git log, y debe usar el primer log para volver al inicio del proyecto.
Verás como tu archivo es el antiguo.
Ahora vuelve con el siguiente comando:
```sh
$ git checkout master
```
Y verás todos tus archivos como estaban. 

Pero igual podrías quedarte en el checkout y hacer cambios, para luego hacer add y commit y así reemplazaría los commit desde ahí en adelante.

### 4. Repositorios Remotos
Los servidores remotos: un nuevo estado que deben seguir nuestros archivos para conectarse y trabajar con equipos de cualquier parte del mundo.

Estos servidores remotos pueden estar alojados en GitHub, GitLab, BitBucket, entre otros. Lo que van a hacer es guardar el mismo repositorio que tienes en tu computadora y darnos una URL con la que todos podremos acceder a los archivos del proyecto para descargarlos, hacer cambios y volverlos a enviar al servidor remoto para que otras personas vean los cambios, comparen sus versiones y creen nuevas propuestas para el proyecto.

Esto significa que debes aprender algunos nuevos comandos:

* git clone url_del_servidor_remoto: Nos permite descargar los archivos de la última versión de la rama principal y todo el historial de cambios en la carpeta .git.
* git push: Luego de hacer git add y git commit debemos ejecutar este comando para mandar los cambios al servidor remoto.
* git fetch: Lo usamos para traer actualizaciones del servidor remoto y guardarlas en nuestro repositorio local (en caso de que hayan, por supuesto).
* git merge: También usamos el comando git merge con servidores remotos. Lo necesitamos para combinar los últimos cambios del servidor remoto y nuestro directorio de trabajo.
* git pull: Básicamente, git fetch y git merge al mismo tiempo.

### 5. Ramas
Las ramas son la forma de hacer cambios en nuestro proyecto sin afectar el flujo de trabajo de la rama principal. Esto porque queremos trabajar una parte muy específica de la aplicación o simplemente experimentar.

La cabecera o HEAD representan la rama y el commit de esa rama donde estamos trabajando. Por defecto, esta cabecera aparecerá en el último commit de nuestra rama principal. Pero podemos cambiarlo al crear una rama (git branch rama, git checkout -b rama) o movernos en el tiempo a cualquier otro commit de cualquier otra rama con los comandos (git reset id-commit, git checkout rama-o-id-commit).

### Ejemplo creación de rama cabecera y fusión con master
Crear una rama llamada teste con los siguientes comandos:
```sh
$ git branch testeo
```
Luego entra a esa rama con 
```sh
$ git checkout testeo
```
Para saber si estás dentro haz git status, y te mostrará que estas en la rama testeo, desde aquí modifica, y además crea un archivo como tu quieras. Una vez hayas hecho esto haz git add y git commit, para guardar los cambios.
Ahora si volvemos a la rama master
```sh
$ git checkout master
```
Los cambios que hicimos desaparecen, pero si volvemos a la rama testeo vuelven a estar, esta es la manera de trabajar para hacer nuevas funcionalidades a una aplicación y así no romper el programa a futuro. 
Ahora nosotros queremos tener esos cambios en master, entonces lo que tenemos que haces es lo siguiente: 
```sh
$ git checkout master
$ git merge cabecera
```
También podrías hacer más cambios a cabecera en otra rama y después volver a hacer merge pero desde cabera con la otra rama.
### 5.1 Resolviendo conflictos a la hora de hacer merge
Git nunca borra nada a menos que nosotros se lo indiquemos. Cuando usamos los comandos git merge o git checkout estamos cambiando de rama o creando un nuevo commit, no borrando ramas ni commits (recuerda que puedes borrar commits con git reset y ramas con git branch -d).
Aveces hay programadores que cambian las mismas lineas de código o luego unen ramas, esto genera un conflicto, para resolver esto hay que hacerlo de manera manual,  solo debemos hacer el merge, ir a nuestro editor de código y elegir si queremos quedarnos con alguna de estas dos versiones o algo diferente. Algunos editores de código como VSCode nos ayudan a resolver estos conflictos sin necesidad de borrar o escribir líneas de texto, basta con hundir un botón y guardar el archivo.
Los archivos con conflictos por el comando git merge entran en un nuevo estado que conocemos como Unmerged. Funcionan muy parecido a los archivos en estado Unstaged, algo así como un estado intermedio entre Untracked y Unstaged, solo debemos ejecutar git add para pasarlos al área de staging y git commit para aplicar los cambios en el repositorio.

### Ejercicio 
Un archivo de texto que tengas cambialo en tu rama master, por ejemplo la linea 5 de tu archivo pon otra cosa haz git commit -am "nombre" para agregar los cambios (si es un archivo ya creado, sino tendrás que hacer git add . y luego git commit -m "algo"). Luego ve a tu rama cabecera y haz cambios en la misma linea que cambiaste en cabecera pero pon otra cosa, haz tu commit correspondiente y listo. Una vez tengas esto listo ve a master con git checkout master y haz merge, con git merge cabecera, unirás los archivos pero tendrás conflictos, aquí deberás elegir con que código quieres quedarte, una vez listo lo modificas lo guardas y vuelves a hacer los add y commit correspondientes. 

### 6 Github
GitHub es una plataforma que nos permite guardar repositorios de Git que podemos usar como servidores remotos y ejecutar algunos comandos de forma visual e interactiva.
Luego de crear nuestra cuenta, podemos crear o importar repositorios, crear organizaciones y proyectos de trabajo, descubrir repositorios de otras personas, contribuir a esos proyectos, dar estrellas y muchas otras cosas.
El README.md es el archivo que veremos por defecto al entrar a un repositorio. Es una muy buena práctica configurarlo para describir el proyecto, los requerimientos y las instrucciones que debemos seguir para contribuir correctamente.
Para clonar un repositorio desde GitHub (o cualquier otro servidor remoto) debemos copiar la URL (por ahora, usando HTTPS) y ejecutar el comando git clone + la URL que acabamos de copiar. Esto descargara la versión de nuestro proyecto que se encuentra en GitHub.
Sin embargo, esto solo funciona para las personas que quieren empezar a contribuir en el proyecto. Si queremos conectar el repositorio de GitHub con nuestro repositorio local, el que creamos con git init, debemos ejecutar las siguientes instrucciones:

**Paso 1: Guardar la URL del repositorio de GitHub**

```sh
# con el nombre de origin
git remote add origin URL
```
**Segundo paso: Verificar que la URL se haya guardado**
```sh
# correctamente:
git remote
git remote -v
```
**Tercer paso: Traer la versión del repositorio remoto**
```sh
# hacer merge para crear un commit con los archivos
# de ambas partes. Podemos usar git fetch y git merge
# o solo el git pull con el flag --allow-unrelated-histories:
git pull origin master --allow-unrelated-histories
```
**Por último, ahora sí podemos hacer git push para guardar**
```sh
# los cambios de nuestro repositorio local en GitHub:
git push origin master
```

### 6.1 Seguridad con github
Vamos a utilizar ssh (Secure shell) para dar más seguridad a la hora de enviar nuestros archivos a github y no sean interceptados por alguién. Donde nosotros creamos una clave pública y privada y le mandamos a githuba la clave pública, luego github nos envía su clave pública y podemos hacer la conexión.Aparte a nuestra clave privada se le puede poner otra por encima, para hacerla aún más segura. 

![ssh](https://res.cloudinary.com/practicaldev/image/fetch/s--xZeBwcrC--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/a7cpjomaxoe5qd7rn4ld.png)

#### 6.1.1 Creemos las llaves
Primero que nada dirigete a la carpeta home de tu computador, ya que es una buena práctica guardar las claves públicas y privadas ahí, para llegar es con el siguiente comando cd ~.
Una vez dentro de la carpeta home para crear la llave necesitas el siguiente comando: 
```sh
ssh-keygen -t rsa -b 4096 -C "tuemail@email.com"
```
Primero te preguntará si está bien donde la estas creando, luego te preguntará si quieres ponerle una clave a tus llaves aparte de las que crea por defecto, luego te la vuelve a pedir y listo tienes tu llave privada y pública.

#### 6.1.2 Vamos a github
Cuando este creado ahora entras a la carpeta oculta con cd ./.ssh y abres el archivo que termina en .pub, lo copias y ahora tenemos que prender el servicio de llaves.
Para ver si el servicio de llaves está corriendo debemos introducir el siguiente comando:
```sh
eval $(ssh-agent -s)
```
Te dará un mensaje como el siguiente: 
>Agent pid 7949 
Esto dice que está prendido el servicio, pero el número puede variar en tu computadora.
Ahora agregamos las llaves con el siguiente comando
```sh
#llave privada
ssh-add ~/.ssh/id_rsa 
```
Solo tienes que guardar la llave privada.

Ahora copiamos la clave pública, osea, el archivo id_rsa.pub lo abrimos con algún editor de texto y copiamos su contenido, ahora vamos a github y nos dirigimos a settings, luego en la parte izquierda nos dirigimos a SSH and GPG Keys, después creamos una nueva llave ssh y le damos un título "mi computadora" y le pegamos nuestra clave pública, te pedirá la contraseña de github y listo. 

#### Conectando con nuestro repositorio local
Ahora vamos a nuestro repositorio y hacemos clone pero por ssh, nos dirigimos a nuestro entorno local y vemos que cuando hacemos el comando remote -v sale nuestro repositorio de github, pero con https, ahora lo cambiaremos a nuestra clave con ssh.
```sh
git remote set-url origin suclavesshquetienendegithub
```
Ahora puedes hacer git pull, push, y todo lo que podías hacer antes sin problemas pero de manera segura.

#### 7 Conclusiones
Los atributos de calidad que git y github pueden generar son los siguientes:
* **Robustez**: Porque el software puede gozar de buena salud con las ramas que crea y con el flujo de trabajo que tiene a la hora de trabajar con git, modificando archivos sin introducir errores.
* **Seguridad**: Como mostramos anteriormente se puede obtener con github y git una instancia segura con la clave ssh, por lo tanto agiliza el desarrollo de un proyecto a la vez que se guarda la información de forma segura, además github tiene un repositorio privado en el cual solo tú o un grupo de desarrolladores tiene el derecho a ver el repositorio.

#### 8 Notas del Repositorio
La carpeta proyecto 1 se ocupó para hacer los diferentes comandos en este curso, si quieres puede hacer un clone del repositorio, así puedes ver con git log la historia de los archivos.













