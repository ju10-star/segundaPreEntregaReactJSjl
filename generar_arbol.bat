@echo off
REM === Crear carpetas ===
mkdir src
mkdir src\components
mkdir src\pages
mkdir src\data
mkdir src\services

REM === Archivos principales ===
echo // Punto de entrada de la aplicación, monta ReactDOM y BrowserRouter > src\main.jsx
echo // Define las rutas principales de la aplicación con React Router > src\App.jsx
echo /* Estilos globales de la app */ > src\index.css

REM === Carpeta data ===
echo // Contiene el array de productos y categorías (mock data) > src\data\products.js

REM === Carpeta services ===
echo // Simula llamadas asíncronas a una API con Promises y async/await > src\services\mockApi.js

REM === Components ===
echo // Navbar con enlaces de navegación a categorías y home > src\components\Navbar.jsx
echo // Contenedor: maneja estado, obtiene productos (fetch/mock) y pasa datos al presentacional ItemList > src\components\ItemListContainer.jsx
echo // Contenedor: obtiene un producto por ID y pasa datos al presentacional ItemDetail > src\components\ItemDetailContainer.jsx
echo // Presentacional: recibe lista de productos y renderiza un listado de ItemCard > src\components\ItemList.jsx
echo // Presentacional: muestra un producto individual con botón para ver detalle > src\components\ItemCard.jsx
echo // Presentacional: muestra detalle de un producto y permite agregar al carrito con ItemCount > src\components\ItemDetail.jsx
echo // Presentacional: contador de unidades con botones +, - y “Agregar al carrito” > src\components\ItemCount.jsx

REM === Pages ===
echo // Página 404 para rutas no encontradas > src\pages\NotFound.jsx

echo.
echo ✅ Árbol generado con archivos vacíos y comentarios listos.
pause
