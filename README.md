# SAGE UNSIS Frontend

Sistema de Administración y Gestión Educativa - Universidad de la Sierra Sur. Aplicación frontend desarrollada con React y arquitectura limpia.

## Tabla de Contenidos

- [Descripción](#descripción)
- [Tecnologías](#tecnologías)
- [Arquitectura](#arquitectura)
- [Requisitos Previos](#requisitos-previos)
- [Instalación y Configuración](#instalación-y-configuración)
- [Ejecución del Proyecto](#ejecución-del-proyecto)
- [Flujo de Trabajo con Git](#flujo-de-trabajo-con-git)
- [Contribución](#contribución)
- [Estructura del Proyecto](#estructura-del-proyecto)

## Descripción

SAGE UNSIS Frontend es la interfaz de usuario del sistema de administración y gestión educativa de la Universidad del Sistema. Este proyecto implementa las mejores prácticas de desarrollo con React, utilizando arquitectura limpia para garantizar la mantenibilidad y escalabilidad del código.

## Tecnologías

Este proyecto utiliza las siguientes tecnologías:

- **React 19.1.1** - Biblioteca principal para la construcción de la interfaz de usuario
- **Vite 7.1.7** - Herramienta de desarrollo y construcción rápida
- **ESLint** - Análisis estático de código para mantener la calidad
- **Docker & Docker Compose** - Contenedorización y orquestación de servicios
- **Node.js 22** - Entorno de ejecución JavaScript

## Arquitectura

El proyecto sigue los principios de **Arquitectura Limpia (Clean Architecture)**, lo que permite:

- Separación clara de responsabilidades
- Independencia de frameworks y librerías externas
- Alta testabilidad y mantenibilidad
- Facilidad para escalar el proyecto

### Estructura de Capas

```
src/
├── components/     # Componentes de presentación
├── pages/          # Páginas y contenedores principales
├── service/        # Capa de servicios (comunicación con APIs)
├── core/           # Lógica de negocio y constantes
└── ...
```

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

- **Docker** (versión 20.x o superior)
- **Docker Compose** (versión 2.x o superior)
- **Node.js** (versión 22.x) - solo si deseas ejecutar sin Docker
- **npm** o **yarn** - solo si deseas ejecutar sin Docker
- **Git** - para el control de versiones

## Instalación y Configuración

### Clonar el Repositorio

```bash
git clone https://github.com/UnsitosDev-Projects/SAGE-UNSIS-Frontend.git
cd sage-unsis-frontend
```

### Variables de Entorno

Crea un archivo `.env` en la raíz del proyecto con las variables necesarias:

```bash
# Ejemplo de configuración
VITE_API_URL=http://localhost:3000/api
```

> [!IMPORTANT]
> Asegúrate de configurar correctamente las variables de entorno antes de ejecutar el proyecto.

## Ejecución del Proyecto

### Opción 1: Con Docker Compose (Recomendado)

Esta es la forma más sencilla y consistente de ejecutar el proyecto:

```bash
docker-compose up --build
```

La aplicación estará disponible en `http://localhost:8081`

Para detener los contenedores:

```bash
docker-compose down
```

### Opción 2: Desarrollo Local (Sin Docker)

Si prefieres ejecutar el proyecto directamente en tu máquina:

```bash
# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Compilar para producción
npm run build

# Vista previa de la build de producción
npm run preview
```

### Comandos Disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Inicia el servidor de desarrollo |
| `npm run build` | Compila la aplicación para producción |
| `npm run lint` | Ejecuta el linter para análisis de código |
| `npm run preview` | Previsualiza la build de producción |

## Flujo de Trabajo con Git

Este proyecto utiliza **Git Flow** como estrategia de branching y requiere **Conventional Commits** para mantener un historial limpio y semántico.

### Protección de Ramas

> [!WARNING]
> Las ramas `main` y `dev` están protegidas. No se permiten commits directos.

Todas las contribuciones deben realizarse mediante **Pull Requests (PRs)** que cumplan con los siguientes requisitos:

- Código revisado por al menos un miembro del equipo
- Commits siguiendo la convención de Conventional Commits
- Pruebas exitosas (si aplica)
- Sin conflictos con la rama base

### Estructura de Ramas

- **main** - Rama de producción, contiene código estable
- **develop** - Rama de desarrollo, integración de features
- **feat/*** - Ramas para nuevas funcionalidades
- **fix/*** - Ramas para corrección de bugs
- **hotfix/*** - Ramas para correcciones urgentes en producción
- **release/*** - Ramas para preparar nuevas versiones

### Conventional Commits

Todos los commits deben seguir el formato de [Conventional Commits](https://www.conventionalcommits.org/):

```
<tipo>[ámbito opcional]: <descripción>

[cuerpo opcional]

[nota(s) al pie opcional(es)]
```

#### Tipos de Commit

- `feat`: Nueva funcionalidad
- `fix`: Corrección de bug
- `docs`: Cambios en documentación
- `style`: Cambios de formato (espacios, comas, etc.)
- `refactor`: Refactorización de código
- `test`: Añadir o modificar tests
- `chore`: Tareas de mantenimiento

#### Ejemplos

```bash
feat(login): añadir validación de contraseña

fix(api): corregir endpoint de autenticación

docs(readme): actualizar guía de instalación

refactor(components): migrar componentes de clase a funcionales
```

### Flujo de Trabajo

1. **Crear una nueva rama** desde `develop`:
   ```bash
   git checkout dev
   git pull origin develop
   git checkout -b feat/nombre-del-issue
   ```

2. **Realizar cambios y commits**:
   ```bash
   git add .
   git commit -m "feat(modulo): descripción del cambio"
   ó
   git commit -m "feat: descripción del cambio"
   ```

3. **Sincronizar con dev**:
   ```bash
   git fetch origin
   git rebase origin/dev
   ```

4. **Subir cambios y crear PR**:
   ```bash
   git push origin feat/nombre-del-issue
   ```

5. **Crear Pull Request** en GitHub hacia `dev`

> [!IMPORTANT]
> Antes de crear un PR, asegúrate de que tu código pasa el linter ejecutando `npm run lint`.

## Contribución

Para contribuir al proyecto:

1. Fork el repositorio
2. Crea una rama siguiendo Git Flow
3. Realiza tus cambios con commits convencionales
4. Asegúrate de que el código pase el linter
5. Crea un Pull Request con una descripción clara de los cambios

### Guías de Estilo

- Seguir las reglas de ESLint configuradas en el proyecto
- Mantener la estructura de carpetas establecida
- Documentar funciones y componentes complejos
- Escribir código claro y autodescriptivo

## Estructura del Proyecto

```
sage-unsis-frontend/
├── public/                 # Archivos estáticos públicos
├── src/
│   ├── components/        # Componentes reutilizables
│   │   ├── icon/         # Componentes de iconos
│   │   └── login/        # Componentes de login
│   ├── core/             # Lógica de negocio y constantes
│   │   └── const/        # Constantes globales
│   ├── pages/            # Páginas de la aplicación
│   │   └── container/    # Contenedores principales
│   ├── service/          # Servicios de comunicación con API
│   │   └── login/        # Servicios de autenticación
│   ├── App.jsx           # Componente principal
│   ├── App.css           # Estilos principales
│   ├── main.jsx          # Punto de entrada
│   └── index.css         # Estilos globales
├── docker-compose.yml     # Configuración de Docker Compose
├── Dockerfile            # Definición de imagen Docker
├── eslint.config.js      # Configuración de ESLint
├── vite.config.js        # Configuración de Vite
├── package.json          # Dependencias del proyecto
└── README.md             # Este archivo

```

---

Desarrollado con dedicación por el equipo de [UnsitosDev Projects](https://github.com/UnsitosDev-Projects)