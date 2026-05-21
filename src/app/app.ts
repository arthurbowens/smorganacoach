import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

export type PilarIcon = 'workout' | 'evolution' | 'routine' | 'heart';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
})
export class App {
  protected readonly coachName = 'Sterphane';
  protected readonly currentYear = new Date().getFullYear();
  protected readonly whatsappUrl =
    'https://wa.me/5500000000000?text=Ol%C3%A1%20Sterphane!%20Quero%20come%C3%A7ar%20minha%20transforma%C3%A7%C3%A3o%20na%20consultoria%20online.';
  protected readonly instagramUrl = 'https://instagram.com/';

  protected readonly heroTags = [
    { icon: 'user', label: 'Acompanhamento individual' },
    { icon: 'clipboard', label: 'Plano personalizado' },
    { icon: 'chat', label: 'Atendimento próximo' },
  ];

  protected readonly pilares = [
    {
      icon: 'workout' as PilarIcon,
      title: 'Treinos personalizados',
      desc: 'Treinos adaptados ao seu corpo, tempo disponível e objetivo — sem fórmula pronta.',
    },
    {
      icon: 'evolution' as PilarIcon,
      title: 'Evolução constante',
      desc: 'Seu plano é ajustado conforme sua evolução para evitar estagnação e manter resultados reais.',
    },
    {
      icon: 'routine' as PilarIcon,
      title: 'Rotina sustentável',
      desc: 'Estratégias simples para criar hábitos que você realmente consegue manter no dia a dia.',
    },
    {
      icon: 'heart' as PilarIcon,
      title: 'Processo leve e humano',
      desc: 'Sem terrorismo fitness. Você evolui com apoio, proximidade e constância — não na base da culpa.',
    },
  ];

  protected readonly consultoriaSteps = [
    {
      title: 'Avaliação inicial',
      desc: 'Entendemos sua rotina, dificuldades, objetivos e definimos metas reais para o seu momento.',
    },
    {
      title: 'Treino personalizado',
      desc: 'Você recebe treinos feitos para sua realidade e adaptados conforme sua evolução.',
    },
    {
      title: 'Ajustes e acompanhamento',
      desc: 'Nada fica parado. Seu plano evolui junto com você durante a consultoria.',
    },
    {
      title: 'Estratégias para sua rotina',
      desc: 'Você aprende a encaixar treino, autocuidado e constância no seu dia a dia sem viver cansada do processo.',
    },
    {
      title: 'Acompanhamento próximo',
      desc: 'Dúvidas, apoio e orientação durante toda a jornada.',
    },
  ];

  protected readonly paraQuem = [
    'Para mulheres que querem mudar o corpo sem viver em dietas malucas',
    'Para quem já tentou começar várias vezes e desistiu no meio do caminho',
    'Para quem quer autoestima, constância e resultado de forma saudável',
    'Para quem busca acompanhamento próximo e não um PDF genérico',
    'Para quem quer um processo leve, mas eficiente',
  ];

  protected readonly depoimentos = [
    {
      text: 'Finalmente consegui manter uma rotina sem me sentir pressionada o tempo todo.',
      autor: 'Aluna da consultoria',
    },
    {
      text: 'Minha autoestima mudou antes mesmo do meu corpo começar a mudar.',
      autor: 'Aluna da consultoria',
    },
    {
      text: 'Pela primeira vez senti que alguém realmente montou algo pensando na minha vida.',
      autor: 'Aluna da consultoria',
    },
  ];

  protected scrollTo(id: string): void {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}
