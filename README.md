# Proyecto de CRUD de Productos con Next.js y Tailwind CSS

Este es un proyecto básico de Next.js que implementa un CRUD (Crear, Leer, Actualizar, Eliminar) de productos. La interfaz de usuario está estilizada con Tailwind CSS.

## Características

- **Framework:** Next.js
- **Estilos:** Tailwind CSS
- **Storage:** Prisma ORM
- **Funcionalidades:** CRUD de productos

## Requisitos

Asegúrate de tener instalado lo siguiente en tu sistema:

- Node.js (versión 12 o superior)
- npm (versión 6 o superior) o yarn

## Instalación

Sigue estos pasos para instalar y ejecutar el proyecto en tu máquina local:

1. **Clona este repositorio:**

   ```bash
   git clone https://github.com/tu-usuario/tu-repositorio.git
   ```

2. **Navega al directorio del proyecto:**

   ```bash
   cd tu-repositorio
   ```

3. **Instala las dependencias:**
   ```bash
   npm install
   ```

## Prisma

1. **Selecciona el interprete de tu base de datos. postgre, mysql, mongodb o por defecto sqlite:**

   ```bash
   npx prisma init --datasource-provider sqlite
   ```

2. **Crea las migraciones con los modelos ya creados:**

   ```bash
   npx prisma migrate dev --name init
   ```

## Uso

1. **Clona este repositorio:**
   ```bash
   npm run dev
   ```
2. **Abre tu navegador y navega a:**

   ```bash
   http://localhost:3000/
   ```

3. **Carpeta de Api:**

   ```bash
   http://localhost:3000/api/category
   http://localhost:3000/api/products
   ```

4. **Interfaz de usuario:**
   - Crea categorias.
   - Crea productos.
   - Manejalos por la interfaz del cliente utilizando un crud.
