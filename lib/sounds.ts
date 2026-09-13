export function playSound(name: "move" | "win" | "draw") {
  if (typeof window === "undefined") return;
  void new Audio(`/sounds/${name}.mp3`).play().catch(() => {});
}
