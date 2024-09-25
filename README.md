# AgendApp - Politécnico Grancolombiano

## Manejo de ramas en el repositorio

El proyecto será almacenado en el link: https://github.com/wilmersaz/agendapp.git

Justo después de clonar el repositorio, se debe crear una rama propia y sobre ella, realizar los aportes y posteriormente subirlos.

## Cambiar de main a tu rama

```bash
git checkout -b wilmer
```

## Agregar cambios temporales

```bash
git add .
git commit -m "mensaje correspondiente al avance desarrollado"
```

## Subir cambios la primera vez después de creada nuestra nueva rama

```bash
git push --set-upstream origin wilmer -f
```

## Ejecutar para subir cambios a partir de la segunda vez
```bash
git push
```

# Nota
Antes de comenzar a realizar cualquier cambio, deben descargar los cambios de la rama main

```bash
git pull origin main
```




