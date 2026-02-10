# ValidaPagoYa 🛡️

**MicroSaaS Anti-Fraude para validación de transferencias bancarias.**

## El Problema
En LATAM (especialmente en Nicaragua con BAC/Banpro/Lafise), es común que estafadores envíen capturas de pantalla falsas o editadas de transferencias bancarias para llevarse productos sin pagar. Los comerciantes a veces no tienen tiempo de revisar su banca en línea en el momento.

## La Solución
Un bot de WhatsApp al que el comerciante le reenvía la captura del comprobante. El bot:
1. Lee los datos vía OCR (IA).
2. Extrae: Monto, Fecha, Referencia y Cuenta Origen.
3. Se conecta (vía API o Scraping) para confirmar si el movimiento es real.
4. Responde: "✅ Fondos confirmados" o "⚠️ Referencia no encontrada".

## Tech Stack
- **Framework**: Next.js 15
- **WhatsApp**: Baileys API
- **IA/OCR**: Gemini 3 Flash / Tesseract.js
- **Base de Datos**: PostgreSQL (Supabase/Drizzle)
