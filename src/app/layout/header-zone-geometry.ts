/** Altura aproximada de la zona bajo el header fijo (debe alinearse con --header-bar-height). */
export const HEADER_ZONE_HEIGHT_PX = 74;

/**
 * True si el rect de la sección solapa la banda superior [0 .. zoneHeightPx] del viewport.
 * Evita el fallo de “nunca activa” en secciones bajas con la condición punto-en-línea.
 */
export function sectionIntersectsHeaderZone(rect: DOMRectReadOnly, zoneHeightPx = HEADER_ZONE_HEIGHT_PX): boolean {
  const overlapTop = Math.max(rect.top, 0);
  const overlapBottom = Math.min(rect.bottom, zoneHeightPx);
  return overlapBottom > overlapTop;
}
