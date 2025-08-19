# Desarrollo de una Aplicación Web Progresiva (PWA-Notes)

**Estudiante:** Obando Buitrón Camila Antonela

---

## RESUMEN

El presente informe describe el desarrollo de **PWA-Notes**, una Aplicación Web Progresiva (PWA) diseñada para gestionar notas de manera eficiente, con soporte offline y capacidad de instalación en dispositivos móviles y de escritorio. Esta aplicación integra componentes clave de una PWA, como el **Service Worker**, encargado de gestionar la caché y permitir la ejecución sin conexión, y el **Web App Manifest**, que define la identidad visual y la experiencia de instalación.

El proyecto se estructuró de manera modular, utilizando **HTML, CSS y JavaScript** para separar lógica, diseño y estructura, y se empleó **Visual Studio Code** junto con **Git** para el control de versiones. Los resultados demostraron la correcta implementación del ciclo de vida de un Service Worker (instalación, activación y fetch) y la instalación simulada de la PWA en un dispositivo.

El laboratorio permitió consolidar conocimientos prácticos sobre **arquitectura de PWA**, gestión de caché y diseño de aplicaciones escalables, reforzando la aplicabilidad de estas tecnologías en entornos reales de desarrollo web.

**Palabras Claves:** PWA, Service Worker, Offline

---

## INTRODUCCIÓN

Las **Aplicaciones Web Progresivas (PWA)** son una evolución de las aplicaciones web tradicionales que buscan combinar las ventajas de las aplicaciones nativas con la accesibilidad del navegador. Una PWA permite:

* Funcionar sin conexión (offline) gracias a la caché gestionada por un Service Worker.
* Ser instalable en dispositivos móviles y de escritorio, ofreciendo una experiencia similar a las apps nativas.
* Actualizarse automáticamente y de manera transparente.

El desarrollo de **PWA-Notes** permitió al estudiante comprender la arquitectura de estas aplicaciones, practicar buenas prácticas de desarrollo, y familiarizarse con conceptos esenciales como el **Service Worker**, **manifest.json**, modularidad del código y control de versiones.

---

## OBJETIVOS

### Objetivo General

Desarrollar una **Aplicación Web Progresiva** funcional que permita la gestión de notas con soporte offline e instalación en dispositivos, integrando Service Worker y manifest.json.

### Objetivos Específicos

1. Implementar un archivo **service-worker.js** que gestione la instalación, activación y recuperación de caché.
2. Diseñar e integrar un **manifest.json** que defina el nombre, íconos, colores y orientación de la aplicación.
3. Probar la funcionalidad offline y la instalación simulada en navegadores compatibles.
4. Documentar el desarrollo y los resultados de manera profesional, clara y didáctica.

---

## MARCO TEÓRICO

### ¿Qué es una PWA?

Una **PWA** es una aplicación web que utiliza tecnologías modernas para ofrecer experiencias similares a las aplicaciones nativas, combinando **velocidad, accesibilidad y capacidad offline**.

#### Características principales:

* **Offline:** Funciona sin conexión mediante caché de recursos críticos.
* **Instalable:** Puede añadirse al escritorio o pantalla de inicio de dispositivos móviles.
* **Responsiva:** Se adapta a cualquier tamaño de pantalla.
* **Segura:** Se sirve bajo HTTPS, protegiendo la comunicación.
* **Actualizable automáticamente:** Los cambios se reflejan sin intervención del usuario.

#### Ventajas:

* Experiencia de usuario similar a apps nativas.
* No requiere distribución mediante stores (Play Store/App Store).
* Reducción de costos de desarrollo, al ser multiplataforma.
* Funciona offline y en redes lentas.

#### Desventajas:

* Acceso limitado a funcionalidades nativas avanzadas (como Bluetooth o NFC).
* Soporte variable según navegador y sistema operativo.
* Consumo de almacenamiento en caché si no se gestiona correctamente.

---

### Componentes Clave

1. **Service Worker**

   * Script que corre en segundo plano.
   * Gestiona la caché y las solicitudes de red.
   * Ciclo de vida: **install → activate → fetch**.

   **Ejemplo de sintaxis básica:**

   ```javascript
   self.addEventListener('install', (event) => {
       event.waitUntil(
           caches.open('v1').then((cache) => {
               return cache.addAll([
                   '/index.html',
                   '/styles.css',
                   '/app.js'
               ]);
           })
       );
   });

   self.addEventListener('fetch', (event) => {
       event.respondWith(
           caches.match(event.request)
           .then((response) => response || fetch(event.request))
       );
   });
   ```

2. **Manifest.json**

   * Archivo JSON con metadatos de la aplicación.
   * Define nombre, íconos, colores y orientación.
   * Permite la instalación de la PWA.

   **Ejemplo:**

   ```json
   {
       "name": "PWA-Notes",
       "short_name": "Notes",
       "start_url": "./index.html",
       "display": "standalone",
       "background_color": "#ffffff",
       "theme_color": "#3f51b5",
       "icons": [
           {
               "src": "icon-192.png",
               "sizes": "192x192",
               "type": "image/png"
           },
           {
               "src": "icon-512.png",
               "sizes": "512x512",
               "type": "image/png"
           }
       ]
   }
   ```

---

## DESCRIPCIÓN DEL PROCEDIMIENTO

1. **Configuración del proyecto** en Visual Studio Code y control de versiones con Git.
2. **Creación de archivos base:** `index.html`, `styles.css`, `app.js`, `manifest.json`, `service-worker.js`.
3. **Implementación del Service Worker:** instalación de caché y manejo de fetch para funcionalidad offline.
4. **Integración del manifest.json:** definición de íconos, nombre y tema para instalación.
5. **Pruebas de funcionalidad:** verificar la ejecución offline y la instalación simulada en navegadores.
6. **Documentación y análisis de resultados:** recopilación de evidencias y conclusiones técnicas.

---

## ANÁLISIS DE RESULTADOS

* El **Service Worker** interceptó correctamente las solicitudes de red y sirvió los recursos desde la caché.
* El **manifest.json** permitió que la aplicación fuera reconocida como instalable.
* La aplicación funcionó correctamente en **modo offline**, garantizando la disponibilidad de notas.
* La modularidad del proyecto permitió un desarrollo organizado, facilitando mantenimiento y escalabilidad.

---

## EJEMPLOS DE USO

* **Usuarios finales:** tomar y consultar notas sin depender de conexión a internet.
* **Educación:** estudiantes pueden guardar apuntes offline y sincronizar luego.
* **Productividad empresarial:** registro de tareas o ideas incluso en lugares sin cobertura.

---

## CONCLUSIONES

1. Las **PWA** son una alternativa efectiva a las aplicaciones nativas, combinando accesibilidad y funcionalidad offline.
2. La implementación del **Service Worker** garantiza el uso de la aplicación en ausencia de conexión a internet.
3. El **manifest.json** consolida la identidad visual y la experiencia de instalación de la PWA.
4. La práctica permitió reforzar conocimientos en **JavaScript, diseño modular, gestión de caché y PWA**.
5. Esta metodología facilita la creación de aplicaciones escalables, seguras y multiplataforma.

---

## BIBLIOGRAFÍA

* Google Developers. (2023). *Progressive Web Apps*. Recuperado de: [https://web.dev/what-are-pwas/](https://web.dev/what-are-pwas/)
* Mozilla Developer Network. (2023). *Service Workers: an introduction*. Recuperado de: [https://developer.mozilla.org/en-US/docs/Web/API/Service\_Worker\_API](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API)
* W3C. (2023). *Web App Manifest*. Recuperado de: [https://www.w3.org/TR](https://www.w3.org/TR)
