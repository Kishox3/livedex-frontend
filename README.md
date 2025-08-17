
# Livedex Frontend

Interfaz web minimalista para la Livedex personal. Permite login, registro y CRUD de entradas con nombre, descripción, tipo e imagen (por URL). Desarrollado con HTML, Bootstrap y JavaScript.

## Características

- Login/registro de usuario
- CRUD de entradas personales (nombre, tipo, descripción, imagen por URL)
- Interfaz simple con Bootstrap 5
- Funciona conectado a la [Livedex API](https://github.com/tuusuario/livedex-api)

## Requisitos

- [Livedex API](https://github.com/tuusuario/livedex-api) corriendo en `http://localhost:5000`
- Navegador moderno

## Uso

1. Clona el repositorio:
```bash
git clone https://github.com/tuusuario/livedex-frontend.git
cd livedex-frontend
```
2. Usa una extensión como "Live Server" de VS Code, o sirve la carpeta en un puerto (por ejemplo 8080):
```bash
npx serve . -l 8080
```
3. Abre http://localhost:8080/login.html para acceder.

## Notas
- El frontend requiere que el backend tenga habilitado CORS para http://localhost:8080.
- Las imágenes deben ser URLs públicas y válidas.

## Licencia
MIT