import { cva, type VariantProps } from 'class-variance-authority';

export const cardVariants = cva('block rounded-lg border bg-card text-card-foreground shadow-sm w-full p-6', {
  variants: {},
});
export type B3CardVariants = VariantProps<typeof cardVariants>;

export const cardHeaderVariants = cva('flex flex-col space-y-1.5 pb-0 gap-1.5', {
  variants: {},
});
export type B3CardHeaderVariants = VariantProps<typeof cardHeaderVariants>;

export const cardBodyVariants = cva('block mt-6', {
  variants: {},
});
export type B3CardBodyVariants = VariantProps<typeof cardBodyVariants>;
