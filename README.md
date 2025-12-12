# La Anteojería – E-commerce Boutique

<img src="./src/assets/img/Logo/laAnteojeriaWhite.jpg" alt="Logo de La Anteojería" width="100"/>


Bienvenido a **La Anteojería**, un sitio web boutique especializado en anteojos de sol, armazones recetados, lentes de contacto y accesorios.  
Este proyecto fue desarrollado con React, Bootstrap y MockAPI, con foco en diseño responsivo, experiencia de usuario y funcionalidades de administración de productos.


## 🔹 Tecnologías utilizadas

- React.js
- Bootstrap 5
- React Icons
- React Helmet
- React Toastify (para notificaciones)
- MockAPI (simulación de backend)
- Context API (Carrito y Autenticación)
- CSS modular por componentes (y styled-components en algunos elementos)


## 🔹 Funcionalidades principales

### 1. Gestión de usuarios y autenticación
- Login simulado con `localStorage`.
- Acceso restringido a carrito y secciones privadas.
- Contexto global de autenticación (`AuthContext`).

### 2. Carrito de compras
- Agregar, eliminar y vaciar productos.
- Estado global gestionado con `CarritoContext`.
- Actualización en tiempo real.

### 3. CRUD de productos (Administración)
- Crear, editar y eliminar productos usando MockAPI.
- Validaciones: campos obligatorios, precio > 0, descripción ≥ 10 caracteres.
- Modal de confirmación elegante para eliminar productos.
- Manejo de errores y estados de carga.

### 4. Búsqueda y paginación
- Barra de búsqueda por nombre y categoría con resultados en tiempo real.
- Paginador para mejorar la navegación en catálogos largos.

### 5. Optimización y diseño
- Layout responsivo con Bootstrap Grid.
- Interactividad mejorada con React Icons y Toastify.
- SEO básico y accesibilidad con React Helmet y etiquetas ARIA.

### 6. Branding boutique
- Estilo minimalista y elegante.
- Tipografía y colores coherentes con la identidad de **La Anteojería**.
- Botones, modales y componentes estilizados para experiencia premium.



## 🔹 Instalación y ejecución

1. Clonar el repositorio:

    git clone https://github.com/LoreSal/LA-ANTEOJERIA.git

2. Instalar dependencias :

    npm install


3. Ejecutar la aplicación en modo desarrollo:

    npm start


4. Abrir en el navegador:

    http://localhost:5173


⚠️ Requiere Node.js y npm instalados.


🔹 Rutas principales

| Ruta          | Componente                  | Acceso  |
| ------------- | --------------------------- | ------- |
| `/`           | Home / Productos destacados | Público |
| `/productos`  | Catálogo completo           | Público |
| `/admin`      | Administración de productos | Privado |
| `/crear`      | Crear producto              | Privado |
| `/editar/:id` | Editar producto             | Privado |
| `/carrito`    | Carrito de compras          | Privado |
| `/login`      | Login                       | Público |



🔹 Despliegue en Vercel

La aplicación está lista para producción y se puede desplegar fácilmente en Vercel:

1 - Conectar el repositorio de GitHub a Vercel.

2 - Configurar la rama principal (main) y las variables de entorno si es necesario.

3 - Vercel se encarga de instalar dependencias y ejecutar npm build automáticamente.

4 - Una vez desplegado, el sitio estará disponible en una URL pública, por ejemplo:

                                      https://la-anteojeria.vercel.app

🔹 Notas adicionales

La aplicación está preparada para modo oscuro (pendiente de implementación completa).


🔹 Autor

Lorena Saldaño – Desarrollo y diseño de proyecto e-commerce boutique.