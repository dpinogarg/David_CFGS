# Funciones

## len()

- Toma como argumento una lista.
- Retorna la cantidad de elementos almacenados en la misma como valor de formato entero(type:int).

```python
cantidad_elementos = len(mi_lista)
```

## sorted()

- Toma como argumentos una lista y un valor reverse(type:bool, opcional, default:False) que determina el sentido del ordenamiento.

- Retorna la lista completa con los elementos ordenadados por valor creciente(False) o decreciente(True).

```python
lista_creciente = sorted(mi_lista, False)
lista_decreciente = sorted(mi_lista, True)
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

#### Salida en terminal

```
Nombre 1: Alejandro
Nombre 2: Sergio
Nombre 3: Miguel
Nombre 4: Javier
```