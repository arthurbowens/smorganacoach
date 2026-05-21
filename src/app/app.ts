import { AfterViewInit, Component, OnDestroy, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
})
export class App implements AfterViewInit, OnDestroy {
  protected readonly currentYear = new Date().getFullYear();
  protected readonly whatsappUrl =
    'https://wa.me/5500000000000?text=Ol%C3%A1%20Smorgana!%20Quero%20saber%20mais%20sobre%20a%20consultoria%20online.';
  protected readonly instagramUrl = 'https://instagram.com/';

  protected readonly headerScrolled = signal(false);

  protected readonly pilares = [
    {
      emoji: '🏋️',
      title: 'Treinos',
      desc: 'Planejamento sob medida para seu tempo, seu corpo e seus objetivos — sem fórmula pronta.',
    },
    {
      emoji: '🫧',
      title: 'Rotina de cuidados',
      desc: 'Hábitos sustentáveis de autocuidado que vão além da balança e fortalecem sua rotina.',
    },
    {
      emoji: '👶',
      title: 'A real da maternidade',
      desc: 'Estratégias honestas para quem concilia filhos, casa, trabalho e ainda quer se priorizar.',
    },
    {
      emoji: '😄',
      title: 'Humor fitness',
      desc: 'Processo leve e humano — porque consistência vem de prazer, não de culpa.',
    },
  ];

  protected readonly consultoriaItems = [
    'Avaliação inicial e definição de metas realistas',
    'Treinos personalizados e atualizados conforme sua evolução',
    'Orientação em rotina de cuidados e hábitos',
    'Suporte para a rotina de mãe — sem culpa, com estratégia',
    'Acompanhamento via WhatsApp durante a consultoria',
  ];

  protected readonly depoimentos = [
    {
      text: 'Finalmente um treino que cabe entre escola, trabalho e casa. Me sinto vista, não julgada.',
      autor: 'Aluna — mãe de 2',
    },
    {
      text: 'A autoestima subiu antes mesmo da balança mexer. O humor e o carinho fazem toda diferença.',
      autor: 'Aluna — consultoria online',
    },
    {
      text: 'Rotina de cuidados que eu consigo manter. Pela primeira vez não desisti no meio do caminho.',
      autor: 'Aluna — 3 meses de acompanhamento',
    },
  ];

  protected readonly marqueeItems = [
    'Consultoria 100% online',
    'Treinos personalizados',
    'Rotina de cuidados',
    'Maternidade real',
    'Humor fitness',
    'Acompanhamento próximo',
    'Autoestima em primeiro lugar',
  ];

  protected readonly stats = [
    { value: '100%', label: 'Online' },
    { value: '1:1', label: 'Acompanhamento' },
    { value: '24/7', label: 'Suporte WhatsApp' },
  ];

  private observer?: IntersectionObserver;
  private scrollListener?: () => void;

  ngAfterViewInit(): void {
    this.setupScrollReveal();
    this.setupHeaderScroll();
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    if (this.scrollListener) {
      window.removeEventListener('scroll', this.scrollListener);
    }
  }

  protected scrollTo(id: string): void {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }

  private setupScrollReveal(): void {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const elements = document.querySelectorAll('.reveal');

    if (prefersReduced) {
      elements.forEach((el) => el.classList.add('visible'));
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            this.observer?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    );

    elements.forEach((el) => this.observer?.observe(el));
  }

  private setupHeaderScroll(): void {
    this.scrollListener = () => {
      this.headerScrolled.set(window.scrollY > 24);
    };
    window.addEventListener('scroll', this.scrollListener, { passive: true });
    this.scrollListener();
  }
}
