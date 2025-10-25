# Alarm feature — instrucciones de integración

Resumen:
- Se ha añadido un hook `hooks/use-alarm.tsx` que programa alarmas en base a las activities de tipo `alarm` declaradas en `constants/mock-data.ts`.
- Se ha añadido el componente `components/alarm/AlarmModal.tsx` que muestra una pantalla sobre las demás cuando una alarma se dispara. Incluye botones `Posponer 5 minutos` y `Parar`.
- Se actualizaron permisos en `android/app/src/main/AndroidManifest.xml` para soportar WAKE_LOCK, RECEIVE_BOOT_COMPLETED, FOREGROUND_SERVICE, SCHEDULE_EXACT_ALARM y POST_NOTIFICATIONS.
- Se añadió `expo-av` en `package.json` como dependencia opcional para reproducir audio.

Qué debes hacer en tu entorno local:

1) Instalar dependencias

Si usas npm:

```bash
npm install
# o si usas yarn
# yarn install
```

2) Añadir un archivo de sonido para la alarma

Por limitaciones del repositorio, no se incluye un fichero de audio. Añade un MP3 en la ruta `assets/alarm.mp3`. El modal intentará cargar `require('../../assets/alarm.mp3')`.

Recomendación: usa un fichero de corta duración (loopable) con un volumen adecuado.

3) Construir / ejecutar en dispositivo Android físico

Para que la alarma pueda sonar correctamente en segundo plano o con pantalla bloqueada, es recomendable ejecutar la app directamente en un dispositivo físico con permisos adecuados:

- Android 13+: la app pedirá `POST_NOTIFICATIONS` al iniciarse (si procede).
- Asegúrate de otorgar permisos de vibración y notificaciones a la app desde ajustes del sistema si lo solicita.

Para ejecutar (ejemplo):
npx expo prebuild
# Si estás usando Expo managed, primero prebuild para incluir módulos nativos añadidos en android/:
# Luego construye y ejecuta en dispositivo (esto usará los módulos nativos que añadimos):
expo run:android
```bash
expo run:android
```

4) Limitaciones y notas importantes

- Esta implementación es "in-app": funciona mientras la app está en ejecución (foreground). Para garantizar disparo de alarmas cuando la app está cerrada o el dispositivo reinicia, es necesario implementar AlarmManager y un servicio nativo (Android) que re-programe alarmas y muestre una Activity en primer plano o una notificación de alta prioridad. Eso requiere código nativo adicional (Java/Kotlin) y testing en un flujo de compilación nativo.

- Control del volumen de "alarma" al nivel del sistema (canal de audio ALARM) no se manipula desde JS. Para ello se requiere un modulo nativo que use AudioManager y reproduzca en el stream `AudioManager.STREAM_ALARM`.

- `expo-av` se añadió para reproducir un sonido empaquetado. Si prefieres utilizar notificaciones o reproducir usando el stream de alarma del sistema, necesitarás un módulo nativo.

6) Uso desde JS (API nativa)

Se añadió un módulo nativo Android llamado `AlarmModule` expuesto via el bridge de React Native. Puedes usar el helper en `utils/nativeAlarm.ts` o llamar directamente a `NativeModules.AlarmModule`.

Ejemplo (JS/TS):

```ts
import { scheduleNativeAlarm, cancelNativeAlarm } from '@/utils/nativeAlarm';

// programar alarma
scheduleNativeAlarm('alarm-123', Date.now() + 60_000, 'Mi alarma', true);

// cancelar
cancelNativeAlarm('alarm-123');
```

Nota: estas llamadas solo funcionan en Android y cuando la app ha sido compilada con los cambios nativos (usar `npx expo prebuild` + `expo run:android` o una build nativa).

5) Próximos pasos (opcional)

- Implementar servicio nativo Android que use AlarmManager + ForegroundService para disparar alarmas cuando la app no está en primer plano.
- Registrar `BOOT_COMPLETED` para reprogramar alarmas tras reinicio.

Si quieres, puedo continuar y generar el código nativo Android (Kotlin) para usar AlarmManager y un servicio que muestre una Activity en primer plano con la UI de alarma. Esto requiere más permisos y pruebas en dispositivo real.
