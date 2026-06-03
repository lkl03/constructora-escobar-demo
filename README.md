# Constructora Escobar — Demo

Demo de propuesta de rediseño para [constructoraescobar.com.ar](https://constructoraescobar.com.ar/).

## Stack

- Next.js 16 (App Router)
- React 19
- Tailwind CSS v4
- TypeScript

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start
```

## Estructura

```
src/
  app/
    layout.tsx       # root layout, fuente Inter Tight, metadata
    page.tsx         # landing completa
    globals.css      # tokens de color, reveal animation
  components/
    Header.tsx       # nav sticky con menú móvil
    Reveal.tsx       # IntersectionObserver para fade-in al scroll
public/
  logo.png           # logo original tomado del sitio actual
```

## Notas

- Las imágenes de obras son de Unsplash y están marcadas como referencia. Se reemplazarán por fotos propias del cliente.
- Paleta basada en el logo original: amarillo `#fcb900` + negro/stone.
- Respeta `prefers-reduced-motion` para usuarios con sensibilidad al movimiento.
