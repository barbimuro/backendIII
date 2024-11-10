# backendIII

# Adoptme API

## Descripción
Adoptme API es un proyecto backend que gestiona adopciones de mascotas, permitiendo a los usuarios interactuar con endpoints para consultar, crear, actualizar y eliminar información de mascotas, usuarios y adopciones. El objetivo es facilitar la administración de una plataforma de adopción de mascotas.

## Tecnologías Utilizadas
- Node.js
- Express
- MongoDB
- Docker
- Swagger (para la documentación de la API)
- Mocha y Chai (para pruebas unitarias)

## Requisitos Previos
- **Node.js** (versión mínima recomendada: 14)
- **Docker** y **Docker Compose**
- **MongoDB Atlas** o cualquier instancia de MongoDB para la base de datos

## Instalación y Configuración
1. Clona el repositorio:
   ```bash
   git clone https://github.com/barbimuro/adoptme-api.git
   cd adoptme-api
   ```

2. Instala las dependencias del proyecto:
   ```bash
   npm install
   ```

3. Configura las variables de entorno en un archivo `.env` en la raíz del proyecto:
   ```plaintext
MONGO_URL= mongodb+srv://barbimuro:123@cluster.mcha7rj.mongodb.net/adoptMe?retryWrites=true&w=majority&appName=Cluster
JWT_SECRET= barbiSecreto
JWT_COOKIE= tokenEspecial
LOCAL_PORT=8080
USER_PASSWORD= Coder123
   ```

## Dockerización
La imagen de Docker para esta API está disponible en Docker Hub y puede descargarse con el siguiente comando:

```bash
docker pull barbimuro/adoptmeimage
```

Para construir y ejecutar la imagen localmente:

```bash
docker build -t adoptmeimage .
docker run -p 8080:8080 adoptmeimage
```

## Link a la Imagen en Docker Hub
[Adoptme API en Docker Hub](https://hub.docker.com/r/barbimuro/adoptmeimage)

## Pruebas
Para ejecutar pruebas con Mocha y Chai:
```bash
npm run test
```

## Endpoints Principales
| Método | Endpoint               | Descripción                               |
|--------|-------------------------|-------------------------------------------|
| GET    | `/adoptions`            | Obtiene todas las adopciones              |
| GET    | `/adoptions/:aid`       | Obtiene una adopción por ID               |
| POST   | `/adoptions/:uid/:pid`  | Crea una nueva adopción                   |
| GET    | `/pets`                 | Obtiene todas las mascotas                |
| POST   | `/pets`                 | Crea una nueva mascota                    |
| PUT    | `/pets/:pid`            | Actualiza los datos de una mascota por ID |
| DELETE | `/pets/:pid`            | Elimina una mascota por ID                |
| ...    | `...`                   | Otros endpoints adicionales               |

