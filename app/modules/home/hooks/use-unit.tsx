import { MotionValue, useTransform } from "framer-motion";

export function useUnit(
  mv: MotionValue<number>,
  unit: string,
): MotionValue<string> {
  return useTransform(mv, (v: number) => `${v}${unit}`);
}
