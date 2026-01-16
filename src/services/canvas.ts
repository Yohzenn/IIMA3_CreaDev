export function initCanvas(canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("Canvas context not available");
  return ctx;
}
