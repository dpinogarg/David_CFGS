# Métodos

*Los métodos son funciones asociadas a objetos.*

## .append()

- Toma como argumento un valor(type:any).
- Agrega el valor argumentado en la última posción de la lista.

```python
mi_lista.apend(valor)
```

### Ejemplo: Añadiendo números al conteo

#### Script

```python
lista_conteo = [1, 2, 3, 4]
lista_conteo.append(5)
print(f"Números contados: {lista_conteo}")
```

#### Terminal

```
Números contados: [1, 2, 3, 4, 5]
```

## .extend()

- Toma como argumento argumento una lista iterable(type:any).
- Agrega todas las iteraciones argumentadas desde la última posción de la lista.

```python
mi_lista.extend(lista_iterable)
```

### Ejemplo: Lista con pares del 2 al 16

#### Script

```python
lista_pares = []
lista_pares.extend(range(2, 17, 2))
print(f"Secuencia creada: {lista_pares}")
```

#### Terminal

```
Secuencia creada: [2, 4, 6, 8, 10, 12, 14, 16]
```

## .count()

- Toma como argumento un valor(type:any).
- Retorna la cantidad de elementos coincidentes de la lista con el valor argumentado(type:int).

```python
mi_lista.count(valor)
```

### Ejemplo: ¿Cuantos errores?

#### Script

```python
estados_ejecucion = [Exito, Error, Error, Pendiente, Error]
cantidad_errores = estados_ejecucion.count("Error")
print(f"Se ha encontrado {cantidad_errores} errores")
```

#### Terminal

```
Se ha encontrado 3 errores
```

## .insert()

- Toma como argumentos la posición del índice(type:int) y el valor a agregar(type:any).
- Agrega el valor argumento en la posición de índice mismamente argumentada.

```python
mi_lista.insert(indice, valor)
```

### Ejemplo: Completar la secuencia

#### Script

```python
secuencia_numeros = ["Uno", "Dos", "Cuatro", "Cinco"]
secuencia_numeros.insert(2, "Tres")
print(f"Secuencia completada: {secuencia_numeros}")
```

#### Terminal

```
Secuencia completada: ["Uno", "Dos", "Tres", "Cuatro", "Cinco"]
```

## .remove()

- Toma como argumento un valor(type:any).
- Elimina de la lista el primer elemento con un valor coincidente con el argumentado.

```python
mi_lista.remove(valor)
```

### Ejemplo: Hamburguesa

#### Script

```python
hamburguesa = ["Pan", "Lechuga", "Tomate", "Pepinillo", "Queso", "Carne", "Salsa"]
hamburguesa.remove("Pepinillo")
print(f"Ingredientes de la hamburguesa: {hamburguesa}")
```

#### Terminal

```
Ingredientes de la hamburguesa: ["Pan", "Lechuga", "Tomate", "Queso", "Carne", "Salsa"]
```

## .pop()

- Toma como argumento un índice(type:int, opcional, default:last).
- Elimina el elemento en la posición argumentada y retorna su valor(type:any).

```python
mi_lista.pop(indice)
```

### Ejemplo: Elmina el último valor

#### Script

```python
lista_tareas = ["Arriba", "Arriba", "Abajo", "Abajo", "Izquierda", "Derecha", "Izquierda", "Derecha", "B", "A", "Start", "ZL"]
lista_tareas.pop()
print(f"Código Konami: {lista_tareas}")
```

#### Terminal

```
Código Konami: ["Arriba", "Arriba", "Abajo", "Abajo", "Izquierda", "Derecha", "Izquierda", "Derecha", "B", "A", "Start"]
```

## .index()

- Toma como argumento un valor(type:any).
- Retorna la posición del primer elemento cuyo valor coincide con el argumentado(type:int).

```python
mi_lista.index(valor)
```

### Ejemplo: Donde está Wally

#### Script

```python
personajes = ["James", "Jack", "Wally", "Nicolas"]
posicion_Wally = personajes.index("Wally")
print(f"Wally está en el índice {posición_Wally}") 
```

#### Terminal

```
Wally está en el índice 2
```

## .reverse()

- No tiene argumentos.
- Invierte la posición de los elementos de la lista.

```
mi_lista.reverse()
```

### Ejemplo: Loterias recientes

#### Script

```python
lista_premiados = [12, 45, 67, 23, 89, 34, 76, 58]
print(f"Premios más recientes: {lista_premiados.reverse()}")
```

#### Terminal

```
Premios más recientes: [58, 76, 34, 89, 23, 67, 45, 12]
```

## .sort()

- Toma como argumento el reverse(type:bool, opcional, default:False).
- Ordena los valores de la lista de forma creciente(False) o decreciente(True).

```python
mi_lista.sort()
```

### Ejemplo: Cuenta atras

#### Script

```python
lista_numeros = [7, 2, 9, 4, 1, 5, 0, 3, 8, 6]
lista_numeros.sort(True)
print(f"Cuenta atras: {lista_numeros}")
```

#### Terminal

```
Cuenta atras: [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
```