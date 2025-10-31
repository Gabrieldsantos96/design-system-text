import { cva, type VariantProps } from 'class-variance-authority';

export const paginationContentVariants = cva('flex flex-row items-center gap-1');
export type B3PaginationContentVariants = VariantProps<typeof paginationContentVariants>;

export const paginationItemVariants = cva('');
export type B3PaginationItemVariants = VariantProps<typeof paginationItemVariants>;

export const paginationPreviousVariants = cva('gap-1 px-2.5 sm:pl-2.5');
export type B3PaginationPreviousVariants = VariantProps<typeof paginationPreviousVariants>;

export const paginationNextVariants = cva('gap-1 px-2.5 sm:pr-2.5');
export type B3PaginationNextVariants = VariantProps<typeof paginationNextVariants>;

export const paginationEllipsisVariants = cva('flex size-9 items-center justify-center');
export type B3PaginationEllipsisVariants = VariantProps<typeof paginationEllipsisVariants>;

export const paginationVariants = cva('mx-auto flex w-full justify-center');
export type B3PaginationVariants = VariantProps<typeof paginationVariants>;
