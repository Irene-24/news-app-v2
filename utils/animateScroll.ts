const pow = Math.pow;

const easeOutQuart = (x: number) => {
  return 1 - pow(1 - x, 4);
};

interface ScrollConfig {
  targetPosition: number;
  initialPosition: number;
  duration?: number;
}

interface ScrollToProps {
  element: HTMLElement | null;
  duration?: number;
}

export const animateScroll = ({
  targetPosition,
  initialPosition,
  duration = 1000,
}: ScrollConfig) => {
  let start: number;
  let position: number;
  let animationFrame: number;

  if (window && document) {
    const requestAnimationFrame = window.requestAnimationFrame;
    const cancelAnimationFrame = window.cancelAnimationFrame;

    const maxAvailableScroll =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const amountOfPixelsToScroll = targetPosition - initialPosition;

    const step = (timestamp: number) => {
      if (start === undefined) {
        start = timestamp;
      }

      const elapsed = timestamp - start;

      const relativeProgress = elapsed / duration;

      const easedProgress = easeOutQuart(relativeProgress);

      position =
        initialPosition + amountOfPixelsToScroll * Math.min(easedProgress, 1);

      window.scrollTo(0, position - 100);

      if (
        initialPosition !== maxAvailableScroll &&
        window.scrollY === maxAvailableScroll
      ) {
        cancelAnimationFrame(animationFrame);
        return;
      }

      if (elapsed < duration) {
        animationFrame = requestAnimationFrame(step);
      }
    };

    animationFrame = requestAnimationFrame(step);
  }
};

export const scrollTo = ({
  element = null,
  duration = 1000,
}: ScrollToProps) => {
  if (window && element) {
    const initialPosition = window.scrollY;

    if (element) {
      animateScroll({
        targetPosition: element.offsetTop,
        initialPosition,
        duration,
      });
    }
  }
};
