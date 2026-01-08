export const canPlayFeedback = () => {
  if (typeof window === 'undefined') return false;
  return document.visibilityState === 'visible';
};
