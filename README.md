# Unagi-bazar

Creación de una tienda online para el proyecto final del curso React JS de Coder House.

## Iniciar el proyecto

En los siguientes puntos encontrás el paso a paso del proyecto

### `create-react-app`

De esta forma, se inicializa el proyecto de React

### `npm install`

Este es el comando con el que instalamos todas las dependencias y recursos utilizados

### `npm start`

Este comando es el que se utiliza para ejecutar la aplicación en el localhost, lo cual nos permite ir viendo los cambios que vamos haciendo a la aplicación en tiempo real.


## Navegabilidad


![Unagi-Bazar - 23 January 2022](https://user-images.githubusercontent.com/86387370/150701100-8bcbf351-7d63-4bbe-b0b5-ca526f62b3d2.gif)



## Base de datos de productos

### Firebase

Se utiliza Firebase como base de datos no relacional. Al tratarse de una tienda online, se requiere de una base de productos para que el usuario pueda interactuar con la interfaz y simular una compra. Se encontrarán dos tipos de colecciones

#### item
Cada producto de la tienda online estará cargado en esta colección siguiendo el siguiente formato:

+ id: string (generado automáticamente)
+ name: string
+ price: number
+ category: string
+ img: string
+ stockProd: number

#### orders
Cada compra finalizada, generará una orden con el siguiente formato:

+ buyer:
clientName: string,
mail: string,
phone: string
+ items:
id: string (generado automáticamente),
name: string,
price: number,
category: string,
img: string,
stockProd: number,
quantity: number



## Componentes

### `src/components`

Carpeta que contiene a todos los componentes utilizados para la creación de la app:

+ Cart
+ Cart widget
+ Form
+ ItemDetail
+ ItemDetailContainer
+ ItemListContainer
+ Item
+ ItemList
+ Nav
+ ItemCount

## Context

### CartContext 
Utilizado para exportar estados y funciones que nos serviran para generar las ordenes de compra de nuestros usuarios.

## Lenguajes y conocimientos utilizados.

+ Html
+ Css
+ Bootstrap
+ Javascript
+ React Js
+ Node Js
+ Github
