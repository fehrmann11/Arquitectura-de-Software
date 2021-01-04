# Tutorial SpringBoot

### Antes de empezar
Los requisitos para este tutorial son:
* OpenJDK
* imtelliJ IDEA, que es un editor de texto para java.
* PostgreSQL, será la base de datos encargada de gestionar toda la información que será expuesta en la API.
* Postman, es un cliente donde vamos a probar de manera sencilla todos los servicios expuestos de nuestra API.
* 

**Instalar Java OpenJDK**
Abrir la terminal y luego actualizar el índice de paquetes con sudo apt update.

Una vez termine de actualizar debe realizar la instalación de Java OpenJDK con el comando sudo apt install openjdk-11-jdk.

Cuando este proceso termine debes verificar si la instalación del OpenJDK se realizó correctamente, ejecuta el comando java -version y verás lo siguiente en pantalla:
**En mi caso**
>openjdk version "11.0.9.1" 2020-11-04
>OpenJDK Runtime Environment (build 11.0.9.1+1-Ubuntu-0ubuntu1.18.04)
>OpenJDK 64-Bit Server VM (build 11.0.9.1+1-Ubuntu-0ubuntu1.18.04, mixed mode, sharing)

**IntelliJ IDEA**
Si estás en ubuntu desde ubuntu software, la tienda de aplicaciones de Ubunto, abrir y buscar IntelliJ.
* Seleccionar la versión Community, que es la versión gratuita.
* Esperamos que el instalador termine su proceso y listo.

**PostgreSQL**
Lo primero es saber que en el sitio oficial de PostgreSQL para Linux Ubuntu en https://www.postgresql.org/download/linux/ubuntu/ están las especificaciones para la instalación:
Luego seguir los siguientes pasos
```sh
$ sudo sh -c 'echo "deb http://apt.postgresql.org/pub/repos/apt $(lsb_release -cs)-pgdg main" > /etc/apt/sources.list.d/pgdg.list'
$ wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | sudo apt-key add -
$ sudo apt-get update
$ sudo apt-get -y install postgresql
```
Hasta acá ya tendremos instalado PostgreSQL en nuestro sistema Linux. Para comprobar el estado del servicio de la aplicación se puede ejecutar el siguiente comando:
```sh
sudo systemctl status postgresql.service
```
En PostgreSQL la autenticación del cliente es controlada por el archivo de configuración ubicado en la ruta /etc/postgresql/11/main/pg_hba.conf, este archivo de configuración puede ser editado según las necesidades. Con el siguiente comando puedes acceder a Postgres para su gestión: 
```sh
sudo -i -u postgres psql
```
Por último para utilizar pgAdmin4 
```sh
#
# Setup the repository
#

# Install the public key for the repository (if not done previously):
curl https://www.pgadmin.org/static/packages_pgadmin_org.pub | sudo apt-key add

# Create the repository configuration file:
sudo sh -c 'echo "deb https://ftp.postgresql.org/pub/pgadmin/pgadmin4/apt/$(lsb_release -cs) pgadmin4 main" > /etc/apt/sources.list.d/pgadmin4.list && apt update'

#
# Install pgAdmin
#

# Install for both desktop and web modes:
sudo apt install pgadmin4

# Install for desktop mode only:
sudo apt install pgadmin4-desktop

# Install for web mode only: 
sudo apt install pgadmin4-web 

# Configure the webserver, if you installed pgadmin4-web:
sudo /usr/pgadmin4/bin/setup-web.sh
```
**Postman**
Lo primero es buscar Postman en la tienda de aplicaciones Ubuntu Software. También puedes hacer la instalación manualmente. Para este modo se recomienda realizar la descarga directamente desde postman.com/downloads

### 1 ¿Qué es Spring?
Spring es el framework más usado de Java. Nos ofrece herramientas que nos permite crear proyectos más avanzados, con mejores prácticas y en menor tiempo. También posee una gran comunidad, lo que nos brinda muchísima documentación y ayuda.

Spring tiene una estructura modular y flexible, lo que nos hace usar solo lo que necesitemos.

**En este tutorial utilizaremos** 
Spring Boot: Con el que podemos crear aplicaciones autocontenidas y autoconfigurables.

#### 1.1 ¿Qué es una aplicación autocontenida?
Cada aplicación tiene su propio servidor de aplicaciones con su propia configuración
**Spring boot**: Es el proyecto de spring para aplicaciones autocontenidas.
* Nos centramos en el desarrollo
* Funciona por default con Tomcat (Apache Tomcat funciona como un contenedor de servlets desarrollado bajo el proyecto Jakarta en la Apache Software Foundation. Tomcat implementa las especificaciones de los servlets y de JavaServer Pages de Oracle Corporation.)
* Incluye gestor de dependencias como Gradle o Maven

#### 1.2 Crear nuestra aplicación con Spring Initializr
Entramos a la siguiente página https://start.spring.io
* Sitio oficial para generar un proyecto de spring boot
* ![Spring-Boot](https://lh3.googleusercontent.com/O0dzzl924Gz1RArJlCLnQkEJs5XXxz4q4zeHk61oq47fmdiM5Qamz8TIVDGH5K1s9JpkV5M0KD4SYCjBPkSEryPQ83dpI5SPF2LMstSZ6U8R2H-UW3Tvm1i2cAr-_Xv9H4DzWtrtqBzJLgUNTuLYhph6dJthLcU-FMc5_z1lufGzPruWPdcndWqCMHZBUTB6IT2mfz2Hj7FFZrwQ_qSZsMDNWxuuVAOI-sJRcLoK6kqy6acoDLgD5d2b2FayEKf0z7fzsMtdrELJ34iQXdmyaMpFakkJpB4ecX4WifwEDSnunEnZ7XwAFd8RZoQmlWbKggYhq8bFMy0-p1FSpSKesVGcL-vMlqRgLAXCxQMREKZcr_JT5pZujB011n8wystJgZq_OCcWl_TbI4SsLm1vz_3E0Un5BzcZOKBYQ2MbXYPR1jlZi83HNGIzPKttOiXhZRGoa_DnyHccLvkiQUoowt02pwNhYUh4pkbxanRJ5FoAyvd46gPCVjaw2hQ5CJoXDr_618877KY7L_4TNxZ6BAvjrSR3jpLWZD1knp7Ghc6kygtkKNFvUBGkllKBa43B1YbgO2Q82KNFc0l-XsLRXR2g7Z9ciiRrLDdUW0xMJ0-tABNggBVBE101O9Dz-0rKamkuOCGSXFav_orDWORXBKNh9WJ-dWkLOVtevQgtlkXrp6cHlAlu_2PTgspBGA=w1537-h898-no?authuser=0)
Ponemos las siguientes opciones y apretar en generate.

#### 1.3 Hola mundo con Spring boot
Hay que descomprimir el archivo descargado, esa carpeta debe ser abierta con el IntelliJ IDEA y eligen la opción de abrir un proyecto, buscan al carpeta descomprimida y listo. 
Luego el IntelliJ IDEA importará las librerías importantes. 
Luego dan clic derecho a su proyecto y van a open module settings, para luego ir a project y darle la versión 11 de java. Además en module, puede ocultar los arhivos que no utilizaremos que serán .idea y la carpeta gradle, poniendole exluded aplicar y ok, en la tuerca pones los archivos exluidos o no para verlos. 

Entramos al main y tendremos un código como el siguiente:
```sh
package com.henry.market;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class HenryMarketApplication {

	public static void main(String[] args) {
		SpringApplication.run(HenryMarketApplication.class, args);
	}

}
```
Vamos a crear en la misma carpeta un archivo que se llame holaMundo, clic derecho sobre la carperta -> new -> javaclass, luego pondremos el siguiente código:
```sh
package com.henry.market;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/saludar")

public class HolaMundocontroller {
    @GetMapping("/hola")
    public String saludar(){
        return "Hola mundo";
    }
}
```
Luego clic derecho sobre HenryMarketApllication y run, luego comenzará a compilar y por último nos dirigimos a nuestro navegador y ponemos el siguiente url: 
* http://localhost:8080/saludar/hola

Tenemos nuestro pirmer hola mundo funcionando.

#### 1.4 Configurando Spring Boot
En la carpeta recursos abrimos el archivo application.properties:
* **Cambio de puerto** : server.port = 8090
Ahora para entrar a la aplicación debemos entrar al puerto 8090
* **Cambio de ruta**: server.servlet.context-path=/henry-market/api
Ahora para entrar es la siguiente ruta: http://localhost:8090/henry-market/api/saludar/hola

**Creación de entorno**
Crearemos en la carpeta resource dos archivos un con el nombre application-dev.properties y application-pdn.properties, luego en cada uno pondremos server.port distintos:
* application-dev.properties: server.port=8090
* application-pdn.properties: server.port = 8080

En el archivo application.properties borraremos la linea server.port = 8090 y pondremos en su lugar lo siguiente:
```sh
spring.profiles.active = dev
```
Esto hará que se siga abriendo en el puerto 8090, y si queremos cambiar a producción sería cambiar dev por pdn.

###Crear la estructura del proyecto
Arquitectura por capaz orientada al dominio
**Capa de Dominio**: Los objetos de dominio hacen parte del contexto de nuestra aplicación, o sea el supermercado.
**Servicios**: Serán los encargados de servir como puente entre los controladores de la api y la capa de persistencia, o sea quien interviene con la base de datos. 
**Especificación de Repositorios**: Interfaces que definen las reglas de juego que tiene la persistencia, con la base dde datos.
**Capa web**: Tendremos los contenedores de nuestra api.
**Capa de persistencia**: Obligación para interactuar con la base de datos.

Estructura de los archivos y carpetas.
![Estructura](https://lh3.googleusercontent.com/tL80V2okpmyZkoJE_vMwP6nY6bjm8wZOFuWKfk22UHr4DH118nMM-haP8hiUfOwn2mVREDv5EuCF7x1jLiTgswJ3UaQFjEgiO1sTogYhJdGWf3usrMI8NdEOwF-sYOod-MFEPP7oa0onUiSsZLDDdiA0VhmI-68mANKROr7OlqiwAafH2Dosf4SQEXhS94lqpj6glWOd8nLIEn1mmXP74322RUm_XaQzkbBvVErfjRJ7NxG1MiXUp7wXwy4WN0u_PgPtxLXwU_EIZXiDisbQr3_szNSXE9u7onE5a4Ow-x1Be7ZPgIPmKqQWrFnwZ0kYGxU8e6Yw8PnA43fE7A5XSG75YCloTYYE9CJ62SQwUieH5dA1PQJIxAf4VgZuI5wTyqhfkveFjivnwgeAZikOlIO3pVucnox3RV-sn0kJ3kS6kyCHpDA4G7Mc_g1aJEkUv8zgSgP6j9wRpl_K5GUxxeDlk3ekyi3ldndbnFJx1221bVQtykxJ-DlLlrENfAo0d2Q5_nslmy6H4JuFMoMlKIvDzb8iNvj3uA5NtKligo3SR1M6YhN2XnP0ufW1qtIZkKvdH5h-nJZaB_69a7erlzLSJ03-GYF2oQt-8UpoqcNxdM6t3fL0tPXk_K2A6xCcgyy-k3bdl4mkJU0fITyXcrgXBS6axDOtirIqtPzU25pg4uOJ4ehWoLuQWxRZrw=w359-h569-no?authuser=0)

### 2 ¿Qué es JPA?
Jpa es una especificación de Java, standar, para un framework ORM (Mapeo objeto relacional). Quiere decir que son una serie de reglas que Java define para que cualquier framework que quiera interactura con la BD de Java, tenga que seguir.

Los frameworks mas populares de Java para este fin son:

* Hibernate
* TopLink
* EclipseLink
* ObjectDB

JPA utiliza anotaciones para conectar clases a tablas de la BD y asi evitar hacerlo de manera nativa con SQL.

**@Entity.** Indica a una clase de java que esta representando una tabla de nuestra BD.
**@Table.** Recibe el nombre de la tabla a la cual esta mapeando la clase.
**@column.** Se le pone a los atributos de la clase, no es obligatoria, se indica sólo cuando el nombre de la columna es diferente al nombre del atributo de la tabla.
**@id amd @EmbededID.** Es el atributo como clave primaria de la tabla dentro de la clase. @id se utiliza cuando es clave primaria sencilla y @EmbededID cuando es una clave primaria compuesta.
**@GeneratedValue.** Permite generar automáticamente generar valores para las clases primarias en nuestras clases
**@OneToMany and @MatyToOne.** Representar relaciones

### 3 Spring Data
Spring Data es uno de los frameworks que se encuentra dentro de la plataforma de Spring.  Su objetivo es simplificar al desarrollador la persistencia de datos contra distintos repositorios de información .

* Spring data tienes varios subproyectos, en este tutorial utilizaremos Spring Data JPA 
* El uso principal es optimizar tareas repetitivas.

Para implementarlo dentro de nuestro proyecto vamos a la siguiente página: https://mvnrepository.com/artifact/org.springframework.boot/spring-boot-starter-data-jpa/2.4.1, en el caso de este proyecto sirve esta versión 2.4.1, sino tendrías que buscar la tuya. 
Luego en el archivo build.gradle ponemos el siguiente código:
```sh
dependencies {
	implementation 'org.springframework.boot:spring-boot-starter-data-jpa'
	implementation 'org.springframework.boot:spring-boot-starter-web'
	runtimeOnly 'org.postgresql:postgresql'
	testImplementation 'org.springframework.boot:spring-boot-starter-test'
}

```
#### 3.1 Poner los datos en la base de datos.
Deje 2 archivo que se llaman schema.sql y datos.sql, esos importalos a postgres, eso te lo dejo a ti, busca videos, como importarlo.
Ahora nos centraremos en el código de java, una vez tengamos creada nuestra base de datos y dentro los archivos antes señalados, vamos a ir a nuestra aplicación y escribiremos lo siguiente:
En application-dev.properties y también en application-pdn.properties, pero solo de la parte del # hacia abajo:
```sh
server.port=8090
# Database
spring.datasource.url=jdbc:postgresql://localhost:5432/henry-market
spring.datasource.username=postgres
spring.datasource.password=root
```
Corre tu aplicación y estamos conectados a la base de datos!!

#### 3.2 Mapear las tablas como clases
En la carpeta **entity** creamos dos archivos, Producto y Compra y se verán como sigue:
```sh
package com.henry.market.persistence.entity;


import javax.persistence.*;

@Entity
//referencia tabla producto
@Table(name = "productos")
public class Producto {
    //atributos de la clase

    //buena práctica camelcase, por eso se hace la conversión desde la base de datos, además es la clave primaría y es generada automáticamente.
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id_producto")
    private Integer idProducto;

    private String nombre;

    @Column(name="id_categoria")
    private Integer idCategoria;

    @Column(name = "codigo_barras")
    private  String codigoBarras;

    @Column(name = "precio_venta")
    private Double precioVenta;

    @Column(name = "cantidad_stock")
    private Integer cantidadStock;

    private Boolean estado;

    public Integer getIdProducto() {
        return idProducto;
    }

    public void setIdProducto(Integer idProducto) {
        this.idProducto = idProducto;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public Integer getIdCategoria() {
        return idCategoria;
    }

    public void setIdCategoria(Integer idCategoria) {
        this.idCategoria = idCategoria;
    }

    public String getCodigoBarras() {
        return codigoBarras;
    }

    public void setCodigoBarras(String codigoBarras) {
        this.codigoBarras = codigoBarras;
    }

    public Double getPrecioVenta() {
        return precioVenta;
    }

    public void setPrecioVenta(Double precioVenta) {
        this.precioVenta = precioVenta;
    }

    public Integer getCantidadStock() {
        return cantidadStock;
    }

    public void setCantidadStock(Integer cantidadStock) {
        this.cantidadStock = cantidadStock;
    }

    public Boolean getEstado() {
        return estado;
    }

    public void setEstado(Boolean estado) {
        this.estado = estado;
    }

}

```
El archivo Compra es análogo dependiendo de que tipo es la columna de la base de datos. Además también hay que crear los archivos Cliente y categorias, un tip es que Cliente ya tiene definido su id, así que no hace falta crear el GenerateValue. 

#### 3.3 Creando una clave primeria compuesta
Tenemos una tabla que se llama compras_producto, por lo que en java debemos crear dos clases y archivos distintos, uno con las claves primarias y otro con la unión de estas y el resto de atributos.

**ComprasProductoPK**

```sh
package com.henry.market.persistence.entity;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.io.Serializable;

@Embeddable
public class ComprasProductoPK implements Serializable {

    @Column(name = "id_compra")
    private Integer idCompra;

    @Column(name = "id_producto")
    private Integer idProducto;

    public Integer getIdCompra() {
        return idCompra;
    }

    public void setIdCompra(Integer idCompra) {
        this.idCompra = idCompra;
    }

    public Integer getIdProducto() {
        return idProducto;
    }

    public void setIdProducto(Integer idProducto) {
        this.idProducto = idProducto;
    }
}
```
**ComprasProducto**
```sh
package com.henry.market.persistence.entity;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Table;
import java.math.BigDecimal;

@Entity
@Table(name = "compras_productos")
public class ComprasProducto {

    //Clave primaria compuesta
    @EmbeddedId
    private ComprasProductoPK id;

    private BigDecimal cantidad;

    private BigDecimal total;

    private Boolean estado;

    public ComprasProductoPK getId() {
        return id;
    }

    public void setId(ComprasProductoPK id) {
        this.id = id;
    }

    public BigDecimal getCantidad() {
        return cantidad;
    }

    public void setCantidad(BigDecimal cantidad) {
        this.cantidad = cantidad;
    }

    public BigDecimal getTotal() {
        return total;
    }

    public void setTotal(BigDecimal total) {
        this.total = total;
    }

    public Boolean getEstado() {
        return estado;
    }

    public void setEstado(Boolean estado) {
        this.estado = estado;
    }
}
```

Aquí vemos como se llama a la otra clase donde están las claves primarias.

####3.4 Mapear relaciones entre clases

Aquí tenemos el modelo de datos, de nuestra base de datos. 
![Modelo_datos](https://lh3.googleusercontent.com/FHZlajldxaJWwbx4ov3Ie3ODHKuMKvUvN2VPFcxy2RQcWrtyMTWW7ggHvoB6xL6GnF2c7860-VJ9bNPgb3zeoYVp8zjOqLX8P6eiKePcd4Ii1FFuYRm87KcXFEYAl7icxRbVUcoWsJ0_QJnhvDMgBOqHBinTw4vzL4dQcZ5vuxDGWZnns1Fj3yNG5wdeS-OUHMoK-k2F_tpAJlvgi4R6p-tlIMwVAlk9fRbiHebpgqf7WSTS4bZ0dVvtPB61RYgLuuBNXkxc3M3brmi_Pi8KnWDAbbicVDQnTXpjf43e0IJZzqbazfowfk41ympym76yLzzOCv-jBs5AoysgGl3qkA2Qlun1-iG5x-aSKnerWH5NgxdZ418ajkCBdtu00GTZgOlPCQ0dEPEAmlTnFNZo3s5CBpsHCzbEVWMPI1GNxS-Up5H6FEvjNuqFGg90e8PCP1OiMLvDDU4ngNeCW0_yHz5lP8z5ZS7olNk7vMY1VNRPbMgr9n-PjnD__ukcTvm6Y-sVUhO690-kbpBnK4G-srGWAjOkxT34VPIoVl_aOC5Us-zw3Ut5lq2BzS7nnN4u2kto_aV1O4-aBxwOrL6KhgXEwtg7LB0y06j2Jziz5GddvxP3ARgJ4d8tRU9C6gS9DQI1PSzjUdMFM5QJkhf02acBfwbL2CP464yE7BziqjpLUWXoXLg2nSB_X8vgaA=w1317-h702-no?authuser=0)

Para hacer la relación 1 a n entre categorías y productos se hace de la siguiente manera:
**En categorias** añadir el siguiente código después de los atributos
```sh
    //también debe haber la unión de este lado, relación con producto
    @OneToMany(mappedBy = "categoria")
    private List<Producto> productos;
```

**En productos** añadir el siguiente código después de los atributos
```sh
  //muchos a uno
    @ManyToOne
    @JoinColumn(name = "id_categoria", insertable = false,updatable = false)
    private Categoria categoria;
```
Y así sería con todas las relaciones en la tabla, el resto te lo dejo a ti.

#### 3.5 Spring Data Repositories

* Ahorra código y tiempo de implementación 
* Operaciones SIN CÓDIGO en la BD 
* Utilizaremos repositorios de Spring Data en este caso **CrudRepository**

Crearemos un archivo en la carpeta crud llamado ProctoCrudRepository y a este le pondremos el siguiente código:

```sh
package com.henry.market.persistence.crud;

import com.henry.market.persistence.entity.Producto;
import org.springframework.data.repository.CrudRepository;

//la tabla y le tipo de la clave primaria para CrudRepository
public interface ProductoCrudRepository extends CrudRepository<Producto,Integer> {

}
```
Luego en la carpeta persistence crearemos la siguiente clase:
```sh
package com.henry.market.persistence;

import com.henry.market.persistence.crud.ProductoCrudRepository;
import com.henry.market.persistence.entity.Producto;

import java.util.List;

public class ProductoRepository {
    private ProductoCrudRepository productoCrudRepository;

    public List<Producto> getAll(){
        return (List<Producto>) productoCrudRepository.findAll();
    }
}
```

#### Query Methods
* Los Query Methods proveen la posibilidad de generar consultas mediante el nombre de los métodos.
* Tienen la posibilidad de retornor Optiional <T>

**SQL**:
select * from producto where id_categoria = ? order by nombre ASC;

**Query methods**
**findBy**IdCategoria**OrderBy**Nombre**Asc**(int idCategoria);

En código en ProductoCrudRepository crearemos dos formás de buscar en la base de datos:
```sh
//la tabla y le tipo de la clave primaria para CrudRepository
public interface ProductoCrudRepository extends CrudRepository<Producto,Integer> {

    List<Producto> findByIdCategoriaOrderByNombreAsc(int idCategoria);

    Optional<List<Producto>> findByCantidadStockLessThanAndEstado(int cantidadStock, boolean estado);
}
```
Y los consumimos del archivo ProductoRepository en la carpeta persistence:
```sh
@Repository
public class ProductoRepository {
    private ProductoCrudRepository productoCrudRepository;

    public List<Producto> getAll(){
        return (List<Producto>) productoCrudRepository.findAll();
    }

    public List<Producto> getByCategoria(int idCategoria){
        return productoCrudRepository.findByIdCategoriaOrderByNombreAsc(idCategoria);
    }

    public Optional<List<Producto>> getEscasos(int cantidad){
        return productoCrudRepository.findByCantidadStockLessThanAndEstado(cantidad,true);
    }
    
    public Optional<Producto> getProducto(int idProducto){
        return productoCrudRepository.findById(idProducto);
    }
    
    //guardar producto
    public Producto save(Producto producto){
        return productoCrudRepository.save(producto);
    }
    
    //eliminar producto
    public void delete(int idProducto){
        productoCrudRepository.deleteById(idProducto);
    }
}

```
#### 4 Patrón Data Mapper
Consiste en convertir o traducir objetos que pueden hacer una misma labor.
* No exponer la base  de datos en la API
* Deacoplar el API de una base de datos puntual
* Evitar campos innecesarios en el API
* Evitar mezclar idiomas en la aplicación

https://mapstruct.org
importar las siguientes lineas:
```sh
implementation 'org.mapstruct:mapstruct:1.4.1.Final'

annotationProcessor 'org.mapstruct:mapstruct-processor:1.4.1.Final'
```
en dependences en build.gradle.
Creamos los siguientes archivos en la carpeta domain: Producto y Categoria como clases y en la carpeta repository como interfaz ProductRepository, para seguir el tutorial deberás entrar a los archivos, ya que aquí se hablará desde ahora de conceptos y algunos ejemplos
```sh
package com.henry.market.domain;

public class Product {
    private int productId;
    private String name;
    private int categoryId;
    private double price;
    private int stock;
    private boolean active;
    private Category category;

    public int getProductId() {
        return productId;
    }

    public void setProductId(int productId) {
        this.productId = productId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getCategoryId() {
        return categoryId;
    }

    public void setCategoryId(int categoryId) {
        this.categoryId = categoryId;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public int getStock() {
        return stock;
    }

    public void setStock(int stock) {
        this.stock = stock;
    }

    public boolean isActive() {
        return active;
    }

    public void setActive(boolean active) {
        this.active = active;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }
}

```
Esta es la forma de Product, algo así es el archivo Categoría y ProductRepository es parecido al que creamos antes ProductoRepository pero ahora en inglés. 

#### 4.1 Mapeando
Creamos una interfaz en la carpeta llamada persistence/mapper, el nombre de la interfazs será CategoryMapper, el código es el siguiente:
```sh
package com.henry.market.persistence.mapper;

import com.henry.market.domain.Category;
import com.henry.market.persistence.entity.Categoria;
import org.mapstruct.InheritInverseConfiguration;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;

@Mapper(componentModel = "spring")
public interface CategoryMapper {
    //mapeando
    @Mappings({
            @Mapping(source = "idCategoria", target = "categoryId"),
            @Mapping(source = "descripcion", target = "category"),
            @Mapping(source = "estado", target = "active")
    })
    Category toCategory(Categoria categoria);

    //converción externa, e ignoramos
    @InheritInverseConfiguration
    @Mapping(target = "productos", ignore = true)
    Categoria toCategoria(Category category);

}

```
De forma análoga debemos hacerlo con ProductMapping, eso te lo dejo a tí, en la carpeta está la solución.

#### 4.2 Orientando nuestro repositorio a términos del dominio
En el archivo ProductoRepository
```sh
//indicamos que esta clase interactua con la base de datos.
@Repository
public class ProductoRepository implements ProductRepository {
    private ProductoCrudRepository productoCrudRepository;
    private ProductMapper mapper;

    @Override
    public List<Product> getAll(){
        List<Producto> productos = (List<Producto>) productoCrudRepository.findAll();
        return mapper.toProducts(productos);
    }

    @Override
    public Optional<List<Product>> getByCategory(int categoryId) {
        List<Producto> productos = productoCrudRepository.findByIdCategoriaOrderByNombreAsc(categoryId);
        return Optional.of(mapper.toProducts(productos));
    }

    @Override
    public Optional<List<Product>> getScarseProducts(int quantity) {
        Optional<List<Producto>> productos = productoCrudRepository.findByCantidadStockLessThanAndEstado(quantity,true);
        return productos.map(prods -> mapper.toProducts(prods));
    }

    @Override
    public Optional<Product> getProduct(int productId) {
        return productoCrudRepository.findById(productId).map(producto -> mapper.toProduct(producto));

    }

    @Override
    public Product save(Product product) {
        Producto producto = mapper.toProducto(product);
        return mapper.toProduct(productoCrudRepository.save(producto));
    }




    //eliminar producto
    @Override
    public void delete(int productId){
        productoCrudRepository.deleteById(productId);
    }
}

```
Ahora tenemos orientado nuestro proyecto al dominio.

#### 4.3 Implementar anotación @Service
Creamos un archivo en la carpeta domain/service llamado ProductService y ponemos las siguientes lineas de código:
```sh
package com.henry.market.domain.service;

import com.henry.market.domain.Product;
import com.henry.market.domain.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService {
    //Donde ocurre la conversión es en productoRepository, el servicio desconoce esa operación
    @Autowired
    private ProductRepository productRepository;

    //Encontrar todos los productos
    public List<Product> getAll(){
        return productRepository.getAll();
    }

    //obtener producto
    public Optional<Product> getProdcut(int productId){
        return productRepository.getProduct(productId);
    }

    public Optional<List<Product>> getByCategory(int categoryId){
        return productRepository.getByCategory(categoryId);
    }

    public Product save(Product product){
        return productRepository.save(product);
    }
    //una de las formas para llamar una clase void
    public boolean delete(int productId){
        return getProdcut(productId).map(product -> {
            return true;
        }).orElse(false);
    }
}
```

Las implementaciones del método delete son buenos ejemplos de los estilos declarativo e imperativo.
El primero define el qué va a hacer el código mientras que el segundo define el cómo y por consiguiente se ven más detalles. Cabe aclarar que el estilo declarativo no puede existir sin el estilo imperativo ya que el primero se apoya en el segundo para ocultar las estructuras de control (if, else, switch, etc).

####4.4  Creando nuestro controlador de product
Vamos a la carpeta web/controller y creamos el archivo ProductController que será una clase:
```sh{
    package com.henry.market.web.controller;

import com.henry.market.domain.Product;
import com.henry.market.domain.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/products")
public class ProductController {
    @Autowired
    private ProductService productService;

    public List<Product> getAll(){
        return productService.getAll();
    }

    public Optional<Product> getProduct(int productId){
        return productService.getProdcut(productId);
    }

    public Optional<List<Product>> getByCategory(int categoryId){
        return productService.getByCategory(categoryId);
    }

    public Product save(Product product){
        return productService.save(product);
    }

    public boolean delete(int productId){
        return productService.delete(productId);
    }


}

}
```
Ahora estamos a un paso de mostrar nuestra api corriendo!!!

#### 4.6 Exponiendo nuestra api 
* Nuestra api se expone por @RestController
* Los métodos se exponen con @GetMapping, @PostMapping ó @DeleteMapping

En el archivo ProductController ponemos el siguiente código.
```sh
package com.henry.market.web.controller;

import com.henry.market.domain.Product;
import com.henry.market.domain.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/products")
public class ProductController {
    @Autowired
    private ProductService productService;

    @GetMapping("/all")
    public List<Product> getAll(){
        return productService.getAll();
    }

    @GetMapping("/{id}")
    public Optional<Product> getProduct(@PathVariable("id") int productId){
        return productService.getProduct(productId);
    }

    @GetMapping("/category/{categoryId}")
    public Optional<List<Product>> getByCategory(@PathVariable("categoryId") int categoryId){
        return productService.getByCategory(categoryId);
    }

    @PostMapping("/save")
    public Product save(@RequestBody  Product product) {
        return productService.save(product);
    }

    @DeleteMapping("/delete/{id}")
    public boolean delete(@PathVariable("id") int productId){
        return productService.delete(productId);
    }
}

```

Aquí ya tenemos nuestros servicios corriendo donde las url son las siguientes:
* http://localhost:8090/henry-market/api/products/all : Todos los datos producto
* http://localhost:8090/henry-market/api/products/50 : Un dato en específico de producto en este caso 50
* http://localhost:8090/henry-market/api/products/category/1 : La categoría de ese producto en específico
* http://localhost:8090/henry-market/api/products/save  : Guardar con el cuerpo del producto en formato json.
* http://localhost:8090/henry-market/api/products/delete/52 : Eliminar un producto en específico.

### 5 Conclusión 
La inyección de dependencias es uno de los 5 principos del diseño S.O.L.I.D (Single responsibility, Open/closed, Liskov subtitution, Interface segregation, **Dependency invertion**)
**Dependency invertion**: Consiste en pasar la depencia a la calse que la va ha usar, en lugar de crearla internamente en la clase, con el fin de no acoplar la clase a la implementación que esta utilizando.

**Inversión de control**
Un framework tiene el control sobre los objetos, Spring tiene un contendor de inversión de control, donde se administran y cran instancias de objetos.

**Beans o components**
@Autowired : Anotación para hacer la inyección de dependencias. 
















