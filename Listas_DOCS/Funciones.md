# Funciones

*Las funciones son bloques de código reutilizables que realizan una tarea específica.*

## len()

- Toma como argumento una lista.
- Retorna la cantidad de elementos almacenados en la misma como valor de formato entero(type:int).

```python
cantidad_elementos = len(mi_lista)
```

### Ejemplo: ¿Cuantos elementos?

#### Script

```python
decimales_pi = [1, 4, 1, 5, 9, 2, 6, 5, 3, 5]
print(f"Has escrito {len(decimales_pi)} decimales de pi")
```

#### Terminal

```
Has escrito 10 decimales de pi
```

## sorted()

- Toma como argumentos una lista y un valor reverse(type:bool, opcional, default:False) que determina el sentido del ordenamiento.

- Retorna la lista completa con los elementos ordenadados por valor creciente(False) o decreciente(True).

```python
lista_creciente = sorted(mi_lista, False)
lista_decreciente = sorted(mi_lista, True)
```

### Ejemplo: Orden alfabético

#### Script

```python
lista_desordenada = ["Amor", "Arco", "Avión", "Árbol", "Amigo", "Agua"]
lista_alfabetica = sorted(lista_desordenada)
print(f"Lista con orden alfabético: {lista_alfabetica}")
```

#### Terminal

```
Lista con orden alfabético: ["Agua", "Amigo", "Amor", "Arco", "Árbol", "Avión"]
```

## enumerate()

- Toma como argumentos una lista y un valor de inicio(type:int, opcional, default:0).

- Retorna de la lista los valore iterados agrupados en pares de clave(type:int) y valor(type:any).

```python
for clave, valor in enumerate(mi_lista, 0):
```

### Ejemplo: Sugerencias de nombres

#### Script

```python
mi_lista = ["Alejandro", "Sergio", "Miguel", "Javier"]
for indice, valor in enumerate(mi_lista, 1):
    print(f"Nombre {indice}: {valor}")
```

#### Terminal

```
Nombre 1: Alejandro
Nombre 2: Sergio
Nombre 3: Miguel
Nombre 4: Javier
```