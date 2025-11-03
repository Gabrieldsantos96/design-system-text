import { cva, type VariantProps } from 'class-variance-authority';


export const variants = cva(
  'w-full rounded-md border border-input bg-background text-base md:text-sm ring-offset-background focus-within:outline-none focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      zSize: {
        default: 'h-10',
        sm: 'h-9',
        lg: 'h-11',
      },
      zStatus: {
        error: 'border-destructive focus-within:ring-destructive',
        warning: 'border-yellow-500 focus-within:ring-yellow-500',
        success: 'border-green-500 focus-within:ring-green-500',
      },
      zBorderless: {
        true: 'border-0 focus-within:ring-0 focus-within:ring-offset-0 bg-transparent',
      },
    },
    defaultVariants: {
      zSize: 'default',
      zStatus: undefined,
      zBorderless: false,
    },
  }
);

export type B3MultiSelectVariants = VariantProps<typeof variants>;
export type B3MultiSelectAttr = Partial<HTMLElement> | null;