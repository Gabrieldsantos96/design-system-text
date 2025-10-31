import { cva, type VariantProps } from 'class-variance-authority';

export const avatarVariants = cva('relative flex flex-row items-center justify-center box-content cursor-default bg-muted', {
  variants: {
    zSize: {
      sm: 'size-8',
      default: 'size-10',
      md: 'size-12',
      lg: 'size-14',
      xl: 'size-16',
    },
    zShape: {
      circle: 'rounded-full',
      rounded: 'rounded-md',
      square: 'rounded-none',
    },
  },
  defaultVariants: {
    zSize: 'default',
    zShape: 'circle',
  },
});

export const imageVariants = cva('relative object-cover object-center w-full h-full b3-10', {
  variants: {
    zShape: {
      circle: 'rounded-full',
      rounded: 'rounded-md',
      square: 'rounded-none',
    },
  },
  defaultVariants: {
    zShape: 'circle',
  },
});

export const avatarGroupVariants = cva('flex items-center [&_img]:ring-2 [&_img]:ring-background', {
  variants: {
    zOrientation: {
      horizontal: 'flex-row -space-x-3',
      vertical: 'flex-col -space-y-3',
    },
  },
  defaultVariants: {
    zOrientation: 'horizontal',
  },
});

export type B3AvatarVariants = VariantProps<typeof avatarVariants>;
export type B3ImageVariants = VariantProps<typeof imageVariants>;
export type B3AvatarGroupVariants = VariantProps<typeof avatarGroupVariants>;
