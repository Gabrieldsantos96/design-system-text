import { Component, ChangeDetectionStrategy, signal } from '@angular/core';

import { B3BadgeComponent } from '@b3/components/badge/badge.component';
import { B3IconComponent } from '@b3/components/icon/icon.component';
import { B3Icon } from '@b3/components/icon/icons';

export interface BenefitFeature {
  icon: B3Icon;
  title: string;
  description: string;
  highlight?: string;
}

@Component({
  selector: 'b3-benefits',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [B3BadgeComponent, B3IconComponent],
  template: `
    <section class="relative py-24 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background"></div>

      <div class="absolute inset-0 opacity-20">
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,oklch(30%_0.18_260/0.1),transparent_50%)]"></div>
        <div
          class="absolute inset-0 bg-[linear-gradient(45deg,transparent_48%,oklch(30%_0.18_260/0.05)_49%,oklch(30%_0.18_260/0.05)_51%,transparent_52%)] bg-[length:30px_30px] animate-[slide_30s_linear_infinite]"
        ></div>
      </div>

      <div class="relative container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-16">
            <b3-badge zType="secondary" class="mb-4"> Filosofia B3/UI </b3-badge>
            <p class="text-lg text-muted-foreground max-w-2xl mx-auto">
              Sem <code class="text-primary font-mono">npm install</code>. Instale via CLI, copie o código-fonte e faça do seu jeito — como a B3 faz.
            </p>
          </div>

          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            @for (feature of features(); track feature.title) {
              <div class="group relative">
                <div
                  class="relative p-6 rounded-2xl border bg-card/80 backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:border-primary/30 hover:-translate-y-2"
                >
                  <div class="flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary mb-5 group-hover:scale-110 transition-transform duration-300">
                    <b3-icon [zType]="feature.icon" class="text-2xl" />
                  </div>

                  <h3 class="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                    {{ feature.title }}
                  </h3>
                  <p class="text-muted-foreground leading-relaxed">
                    {{ feature.description }}
                  </p>

                  @if (feature.highlight) {
                    <div class="absolute -top-3 -right-3">
                      <b3-badge class="bg-primary text-primary-foreground text-xs font-medium px-3 py-1">
                        {{ feature.highlight }}
                      </b3-badge>
                    </div>
                  }
                </div>
              </div>
            }
          </div>

          <div class="mt-20 pt-16 border-t border-border/50">
            <div class="grid grid-cols-2 lg:grid-cols-4 gap-8">
              @for (stat of stats(); track stat.label) {
                <div class="text-center group">
                  <div class="text-4xl lg:text-5xl font-bold text-primary mb-3 group-hover:scale-110 transition-transform duration-300">
                    {{ stat.value }}
                  </div>
                  <div class="text-sm text-muted-foreground font-medium uppercase tracking-wider">
                    {{ stat.label }}
                  </div>
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    </section>

    <style>
      @keyframes slide {
        0% { transform: translateX(-120px) translateY(-120px); }
        100% { transform: translateX(120px) translateY(120px); }
      }
    </style>
  `,
})
export class BenefitsComponent {
  readonly features = signal<BenefitFeature[]>([
    {
      icon: 'copy',
      title: 'Copiar e Colar',
      description: 'Nenhum pacote. Copie o componente diretamente do site e cole no seu projeto. Código 100% seu.',
      highlight: 'Sem dependência',
    },
    {
      icon: 'terminal',
      title: 'Instalação via CLI',
      description: 'Use <code class="font-mono text-primary">npx b3-ui add button</code> — o código é gerado no seu projeto automaticamente.',
      highlight: 'Zero lock-in',
    },
    {
      icon: 'terminal',
      title: 'Personalização Total',
      description: 'O código é seu. Modifique estilos, comportamento e estrutura conforme as regras da B3 ou do seu time.',
    },
    {
      icon: 'code',
      title: 'TypeScript Nativo',
      description: 'Componentes em TS puro, com tipagem estrita e integração com Angular Signals. Sem camadas de abstração.',
    },
    {
      icon: 'layers',
      title: 'Tree-Shakable por Padrão',
      description: 'Como o código é seu, o bundler elimina automaticamente o que não é usado. Bundle mínimo garantido.',
    },
    {
      icon: 'shield',
      title: 'Conformidade B3',
      description: 'Design, acessibilidade e padrões de segurança alinhados com as diretrizes oficiais da B3.',
      highlight: 'Oficial',
    },
  ]);

  readonly stats = signal([
    { value: '0', label: 'Dependências externas' },
    { value: '100%', label: 'Código seu' },
    { value: 'CLI', label: 'Instalação instantânea' },
    { value: 'B3', label: 'Design oficial' },
  ]);
}