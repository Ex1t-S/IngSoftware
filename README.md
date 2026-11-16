# 💊 PharmaFácil

**PharmaFácil** es una **aplicación móvil desarrollada con Expo y React Native** que permite a los pacientes **comprar medicamentos bajo receta de manera remota**, de forma simple, rápida y segura.

---

## 🧠 Descripción del Proyecto

Este proyecto fue desarrollado de forma **grupal** como parte de la **materia Ingeniería en Software** de la **Facultad de Ingeniería**, con el objetivo de aplicar los conceptos de análisis, diseño e implementación de sistemas de software en un entorno real.

PharmaFácil busca **digitalizar el proceso de compra de medicamentos** con prescripción médica, brindando una herramienta accesible tanto para los pacientes como para las farmacias adheridas.

---

## 📱 Funcionalidades Principales

- 📸 **Carga de receta médica:** el paciente puede tomar una foto o subir una imagen de su receta médica.  
- 🏥 **Búsqueda inteligente de farmacias:** el sistema analiza la receta y muestra **las farmacias más cercanas** que disponen del medicamento.  
- 💰 **Comparación de precios:** se listan las opciones con el **precio ofrecido por cada farmacia**.  
- 🛒 **Selección y compra:** el usuario puede elegir la farmacia de su preferencia y realizar la compra de forma remota.  
- 📦 **Notificación de retiro o envío:** la farmacia notifica cuándo el medicamento está disponible para ser retirado o enviado al domicilio.

## Tecnologías

| Área | Tecnología |
| --- | --- |
| Aplicación | Expo 54, React Native y TypeScript |
| Navegación | Expo Router |
| Servicios | Firebase Authentication y Firestore |
| Plataformas | Android, iOS y web |

## Desarrollo local

```bash
git clone https://github.com/Ex1t-S/IngSoftware.git
cd IngSoftware
npm install
npm start
```

Para abrir la versión web:

```bash
npm run web
```

Antes de conectar servicios, revisar [`src/lib/firebase.ts`](src/lib/firebase.ts) y utilizar un proyecto Firebase de pruebas propio, con Authentication y Firestore configurados. No usar datos reales de pacientes durante el desarrollo.

Los comandos `npm run android` y `npm run ios` generan compilaciones nativas y requieren el entorno correspondiente. La compilación local de iOS requiere macOS y Xcode.

## Estructura

- [`app`](app): rutas de Expo Router.
- [`components`](components): componentes de interfaz.
- [`src`](src): código de soporte e integración con Firebase.
- [`assets`](assets): recursos gráficos.

## Validación disponible

```bash
npm run lint
```

## Contexto académico

El alcance funcional anterior describe el proyecto grupal de Ingeniería en Software. No acredita validación clínica ni una puesta en producción para operar recetas o datos médicos.
