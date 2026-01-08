export const playSound = () => {
  if (typeof window === 'undefined') return;

  const audio = new Audio('/sounds/ding.mp3');
  audio.volume = 1;
  audio.play().catch(() => {});
};
