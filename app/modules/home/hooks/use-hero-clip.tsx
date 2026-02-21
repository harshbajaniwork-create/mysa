import { MotionValue, useTransform } from "framer-motion";

export function useHeroClip(
  borderRadius: MotionValue<number>,
  bottomOffset: MotionValue<number>,
): MotionValue<string> {
  return useTransform(
    [borderRadius, bottomOffset],
    ([r, b]) =>
      // inset(top right bottom left round topLeft topRight bottomRight bottomLeft)
      `inset(0px 0px ${b}px 0px round 0px 0px ${r}px ${r}px)`,
  );
}
