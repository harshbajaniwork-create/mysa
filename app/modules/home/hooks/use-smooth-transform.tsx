import { MotionValue, useSpring, useTransform } from "framer-motion";

export function useSmoothedTransform(
  mv: MotionValue<number>,
  input: number[],
  output: number[],
  stiffness = 75,
  damping = 22,
): MotionValue<number> {
  const transformed = useTransform(mv, input, output);
  return useSpring(transformed, { stiffness, damping });
}
