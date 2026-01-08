export const haptic = (type: 'light' | 'medium' = 'light') => {
  if (!('vibrate' in navigator)) return;

  navigator.vibrate(type === 'light' ? 10 : 25);
};
