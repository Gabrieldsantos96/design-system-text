import { definePreset } from '@primeuix/styled';
import Aura from '@primeuix/themes/aura';


export const B3Preset = definePreset(Aura, {
  primitive: {
    borderRadius: {
      none: '0',
      xs: 'calc(var(--radius) - .25rem)',
      sm: 'calc(var(--radius) - .125rem)',
      md: 'var(--radius)',
      lg: 'calc(var(--radius) + .125rem)',
      xl: 'calc(var(--radius) + .25rem)',
    },
  },

  semantic: {
    primary: {
      50: 'var(--primary)',
      100: 'var(--primary)',
      200: 'var(--primary)',
      300: 'var(--primary)',
      400: 'var(--primary)',
      500: 'var(--primary)',
      600: 'var(--primary)',
      700: 'var(--primary)',
      800: 'var(--primary)',
      900: 'var(--primary)',
      950: 'var(--primary)',
    },

    colorScheme: {
      light: {
        surface: {
          0: 'var(--background)',
          50: 'var(--surface)',
          100: 'oklch(98% 0.01 240)',
          200: 'oklch(96% 0.01 240)',
          300: 'oklch(94% 0.01 240)',
          400: 'oklch(92% 0.01 240)',
          500: 'oklch(90% 0.01 240)',
          600: 'oklch(88% 0.01 240)',
          700: 'oklch(86% 0.01 240)',
          800: 'oklch(84% 0.01 240)',
          900: 'oklch(82% 0.01 240)',
          950: 'oklch(80% 0.01 240)',
        },
        primary: {
          color: 'var(--primary)',
          contrastColor: 'var(--primary-foreground)',
          hoverColor: 'oklch(35% 0.18 260)',
          activeColor: 'oklch(25% 0.18 260)',
        },
        highlight: {
          background: 'var(--primary)',
          focusBackground: 'var(--primary)',
          color: 'var(--primary-foreground)',
          focusColor: 'var(--primary-foreground)',
        },
        mask: {
          background: 'rgba(0, 0, 0, 0.4)',
          color: 'var(--foreground)',
        },
        formField: {
          background: 'var(--card)',
          disabledBackground: 'oklch(97% 0.01 240)',
          filledBackground: 'var(--secondary)',
          filledHoverBackground: 'oklch(94% 0.01 240)',
          filledFocusBackground: 'oklch(92% 0.01 240)',
          borderColor: 'var(--border)',
          hoverBorderColor: 'oklch(88% 0.01 240)',
          focusBorderColor: 'var(--ring)',
          invalidBorderColor: 'var(--destructive)',
          color: 'var(--foreground)',
          disabledColor: 'oklch(50% 0.01 240)',
          placeholderColor: 'var(--muted-foreground)',
          invalidPlaceholderColor: 'var(--destructive)',
          floatLabelColor: 'var(--muted-foreground)',
          floatLabelFocusColor: 'var(--foreground)',
          floatLabelActiveColor: 'var(--primary)',
          floatLabelInvalidColor: 'var(--destructive)',
          iconColor: 'var(--muted-foreground)',
          shadow: 'none',
        },
        text: {
          color: 'var(--foreground)',
          hoverColor: 'var(--foreground)',
          mutedColor: 'var(--muted-foreground)',
          hoverMutedColor: 'oklch(55% 0.01 240)',
        },
        content: {
          background: 'var(--card)',
          hoverBackground: 'var(--secondary)',
          borderColor: 'var(--border)',
          color: 'var(--card-foreground)',
          hoverColor: 'var(--foreground)',
        },
        overlay: {
          select: {
            background: 'var(--popover)',
            borderColor: 'var(--border)',
            color: 'var(--popover-foreground)',
          },
          popover: {
            background: 'var(--popover)',
            borderColor: 'var(--border)',
            color: 'var(--popover-foreground)',
          },
          modal: {
            background: 'var(--card)',
            borderColor: 'var(--border)',
            color: 'var(--card-foreground)',
          },
        },
        list: {
          option: {
            focusBackground: 'var(--secondary)',
            selectedBackground: 'var(--primary)',
            selectedFocusBackground: 'oklch(35% 0.18 260)',
            color: 'var(--foreground)',
            focusColor: 'var(--foreground)',
            selectedColor: 'var(--primary-foreground)',
            selectedFocusColor: 'var(--primary-foreground)',
            icon: { color: 'var(--muted-foreground)', focusColor: 'var(--foreground)' },
          },
          optionGroup: { background: 'transparent', color: 'var(--muted-foreground)' },
        },
        navigation: {
          item: {
            focusBackground: 'var(--secondary)',
            activeBackground: 'var(--primary)',
            color: 'var(--foreground)',
            focusColor: 'var(--foreground)',
            activeColor: 'var(--primary-foreground)',
            icon: {
              color: 'var(--muted-foreground)',
              focusColor: 'var(--foreground)',
              activeColor: 'var(--primary-foreground)',
            },
          },
          submenuLabel: { background: 'transparent', color: 'var(--muted-foreground)' },
          submenuIcon: {
            color: 'var(--muted-foreground)',
            focusColor: 'var(--foreground)',
            activeColor: 'var(--primary-foreground)',
          },
        },
      },

      dark: {
        surface: {
          0: 'var(--background)',
          50: 'var(--surface)',
          100: 'oklch(15% 0.02 240)',
          200: 'oklch(18% 0.02 240)',
          300: 'oklch(20% 0.03 240)',
          400: 'oklch(22% 0.03 240)',
          500: 'oklch(24% 0.03 240)',
          600: 'oklch(26% 0.03 240)',
          700: 'oklch(28% 0.03 240)',
          800: 'oklch(30% 0.03 240)',
          900: 'oklch(32% 0.03 240)',
          950: 'oklch(35% 0.03 240)',
        },
        primary: {
          color: 'var(--primary)',
          contrastColor: 'var(--primary-foreground)',
          hoverColor: 'oklch(35% 0.18 260)',
          activeColor: 'oklch(25% 0.18 260)',
        },
        highlight: {
          background: 'var(--primary)',
          focusBackground: 'var(--primary)',
          color: 'var(--primary-foreground)',
          focusColor: 'var(--primary-foreground)',
        },
        mask: {
          background: 'rgba(0, 0, 0, 0.6)',
          color: 'var(--foreground)',
        },
        formField: {
          background: 'var(--card)',
          disabledBackground: 'oklch(18% 0.02 240)',
          filledBackground: 'var(--secondary)',
          filledHoverBackground: 'oklch(22% 0.03 240)',
          filledFocusBackground: 'oklch(24% 0.03 240)',
          borderColor: 'var(--border)',
          hoverBorderColor: 'oklch(32% 0.03 240)',
          focusBorderColor: 'var(--ring)',
          invalidBorderColor: 'var(--destructive)',
          color: 'var(--foreground)',
          disabledColor: 'oklch(45% 0.01 240)',
          placeholderColor: 'var(--muted-foreground)',
          invalidPlaceholderColor: 'var(--destructive)',
          floatLabelColor: 'var(--muted-foreground)',
          floatLabelFocusColor: 'var(--foreground)',
          floatLabelActiveColor: 'var(--primary)',
          floatLabelInvalidColor: 'var(--destructive)',
          iconColor: 'var(--muted-foreground)',
          shadow: 'none',
        },
        text: {
          color: 'var(--foreground)',
          hoverColor: 'var(--foreground)',
          mutedColor: 'var(--muted-foreground)',
          hoverMutedColor: 'oklch(70% 0.01 240)',
        },
        content: {
          background: 'var(--card)',
          hoverBackground: 'var(--secondary)',
          borderColor: 'var(--border)',
          color: 'var(--card-foreground)',
          hoverColor: 'var(--foreground)',
        },
        overlay: {
          select: {
            background: 'var(--popover)',
            borderColor: 'var(--border)',
            color: 'var(--popover-foreground)',
          },
          popover: {
            background: 'var(--popover)',
            borderColor: 'var(--border)',
            color: 'var(--popover-foreground)',
          },
          modal: {
            background: 'var(--card)',
            borderColor: 'var(--border)',
            color: 'var(--card-foreground)',
          },
        },
        list: {
          option: {
            focusBackground: 'var(--secondary)',
            selectedBackground: 'var(--primary)',
            selectedFocusBackground: 'oklch(35% 0.18 260)',
            color: 'var(--foreground)',
            focusColor: 'var(--foreground)',
            selectedColor: 'var(--primary-foreground)',
            selectedFocusColor: 'var(--primary-foreground)',
            icon: { color: 'var(--muted-foreground)', focusColor: 'var(--foreground)' },
          },
          optionGroup: { background: 'transparent', color: 'var(--muted-foreground)' },
        },
        navigation: {
          item: {
            focusBackground: 'var(--secondary)',
            activeBackground: 'var(--primary)',
            color: 'var(--foreground)',
            focusColor: 'var(--foreground)',
            activeColor: 'var(--primary-foreground)',
            icon: {
              color: 'var(--muted-foreground)',
              focusColor: 'var(--foreground)',
              activeColor: 'var(--primary-foreground)',
            },
          },
          submenuLabel: { background: 'transparent', color: 'var(--muted-foreground)' },
          submenuIcon: {
            color: 'var(--muted-foreground)',
            focusColor: 'var(--foreground)',
            activeColor: 'var(--primary-foreground)',
          },
        },
      },
    },
  },
  
  components: {
    button: {
      css: ({ dt }) => `
        .p-button {
          background: ${dt('primary.500')};
          color: ${dt('primary.contrastColor')};
          border: none;
          border-radius: var(--radius);
          font-weight: 500;
          transition: all 200ms ease;
        }
        .p-button:hover {
          background: ${dt('primary.hoverColor')};
        }
        .p-button:active {
          background: ${dt('primary.activeColor')};
        }
        .p-button:disabled {
          background: ${dt('formField.disabledBackground')};
          color: ${dt('formField.disabledColor')};
          opacity: 0.65;
        }
        .p-button.p-button-secondary {
          background: ${dt('formField.filledBackground')};
          color: ${dt('text.color')};
        }
        .p-button.p-button-secondary:hover {
          background: ${dt('formField.filledHoverBackground')};
        }
      `,
    },

    inputtext: {
      css: ({ dt }) => `
        .p-inputtext {
          background: ${dt('formField.background')};
          border: 1px solid ${dt('formField.borderColor')};
          border-radius: var(--radius);
          color: ${dt('formField.color')};
          padding: 0.5rem 0.75rem;
          transition: all 200ms ease;
        }
        .p-inputtext:hover {
          border-color: ${dt('formField.hoverBorderColor')};
        }
        .p-inputtext:focus {
          outline: none;
          border-color: ${dt('formField.focusBorderColor')};
          box-shadow: 0 0 0 2px var(--background), 0 0 0 4px var(--ring);
        }
        .p-inputtext:disabled {
          background: ${dt('formField.disabledBackground')};
          color: ${dt('formField.disabledColor')};
        }
        .p-inputtext.p-invalid {
          border-color: ${dt('formField.invalidBorderColor')};
        }
      `,
    },

    card: {
      css: ({ dt }) => `
        .p-card {
          background: ${dt('content.background')};
          border: 1px solid ${dt('content.borderColor')};
          border-radius: var(--radius);
          color: ${dt('content.color')};
        }
        .p-card .p-card-title {
          color: ${dt('text.color')};
        }
      `,
    },

    multiselect: {
      css: ({ dt }) => `
        .p-multiselect {
          background: ${dt('formField.background')};
          border: 1px solid ${dt('formField.borderColor')};
          border-radius: var(--radius);
          color: ${dt('formField.color')};
        }
        .p-multiselect:hover {
          border-color: ${dt('formField.hoverBorderColor')};
        }
        .p-multiselect:focus-within {
          border-color: ${dt('formField.focusBorderColor')};
          box-shadow: 0 0 0 2px var(--background), 0 0 0 4px var(--ring);
        }
        .p-multiselect-panel {
          background: ${dt('overlay.select.background')};
          border: 1px solid ${dt('overlay.select.borderColor')};
          border-radius: var(--radius);
          box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);
        }
        .p-multiselect-item:hover {
          background: ${dt('list.option.focusBackground')};
        }
        .p-multiselect-item.p-highlight {
          background: ${dt('list.option.selectedBackground')};
          color: ${dt('list.option.selectedColor')};
        }
      `,
    },
  },

  css: ({ dt }) => `
    :root, .light {
      --p-focus-ring-width: 0;
      --p-focus-ring-shadow: 0 0 0 2px var(--background), 0 0 0 4px var(--ring);
    }

    body {
      background: ${dt('surface.0')};
      color: ${dt('text.color')};
      font-family: var(--font-geist-sans), system-ui, sans-serif;
      margin: 0;
      -webkit-font-smoothing: antialiased;
    }

    * {
      border-color: ${dt('formField.borderColor')};
    }

    .p-component {
      font-family: inherit;
    }
  `,
});
