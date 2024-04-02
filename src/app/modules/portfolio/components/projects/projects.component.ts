import { Component, inject, signal } from '@angular/core';

//interface
import { IProjects } from '../../interface/IProjects.interface';

//Material
import { MatDialog, MatDialogModule} from '@angular/material/dialog';
//enum
import { EDialogPainelClass } from '../../enum/EDialogPainelClass.enum';
//dialog
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  #dialog = inject(MatDialog)

  public arrayProjects = signal<IProjects[]>([
    {
      src: 'assets/img/projects/faq.png',
      alt: 'Projeto FAQ de Perguntas',
      title: 'FAQ de Perguntas',
      with: '120px',
      height: '90px',
      description: 
        '<p>Realizando um site de um FAQ de perguntas para uma Loja de Bebidas',
      links: [
        {
          name: 'Conheça o Blog',
          href: 'https://alvezzzd.github.io/FAQdePerguntas/',
        }
      ]
    },
    {
      src: 'assets/img/projects/Android.png',
      alt: 'Projeto Site Android',
      title: 'Site Android',
      with: '120px',
      height: '90px',
      description: 
        '<p>Desenvovilmento de um site sobre as Curiosidades da Tecnologia, contando um pouco da historia do mascote do android, site 100% responsivo, trabalhando com um pouco de HTML e CSS puro',
      links: [
        {
          name: 'Conheça o Blog',
          href: 'https://alvezzzd.github.io/SiteAndroid/',
        }
      ]
    },
    {
      src: 'assets/img/projects/Musica.png',
      alt: 'Site de Musica',
      title: 'Site de Musica',
      with: '100px',
      height: '85px',
      description: 
        '<p>Bem-vindo ao meu site de música simples criado coma apenas HTML, onde a melodia encontra a tecnologia',
      links: [
        {
          name: 'Conheça o Blog',
          href: 'https://alvezzzd.github.io/ExMusica/',
        }
      ]
    },
    {
      src: 'assets/img/projects/numeros.png',
      alt: 'Analisador De Números',
      title: 'Analisador De Números',
      with: '100px',
      height: '90px',
      description: 
        '<p> Um site desenvolvido para analisar os números citados, com a relação do maior até o menor e fazendo uma comparação da média de seus valores. ',
      links: [
        {
          name: 'Conheça o Blog',
          href: 'https://alvezzzd.github.io/AnaliseDeNumeros/',
        }
      ]
    },
    {
      src: 'assets/img/projects/tabuada.png',
      alt: 'Consulte a Tabuada',
      title: 'Consulte a Tabuada',
      with: '100px',
      height: '90px',
      description: 
        '<p> Desenvolvimento de um site em JavaScript, criando uma consulta de todas as taboadas desejadas.',
      links: [
        {
          name: 'Conheça o Blog',
          href: 'https://alvezzzd.github.io/Tabuada/',
        }
      ]
    },
    {
      src: 'assets/img/projects/Idade.png',
      alt: 'Verificador de Idade',
      title: 'Verificador de Idade',
      with: '140px',
      height: '95px',
      description: 
        '<p>Realizando um site em liguagem JavaScript, montando uma consulta para verificar a idade da pessoa de acordo com os campos preenchidos',
      links: [
        {
          name: 'Conheça o Blog',
          href: 'https://alvezzzd.github.io/VerificadorDeIdade/',
        }
      ]
    },
    {
      src: 'assets/img/projects/Contador.png',
      alt: 'Contador',
      title: 'Contador',
      with: '110px',
      height: '80px',
      description: 
        '<p> Site simples para facilitar a contagem de números, venha conferir!!',
      links: [
        {
          name: 'Conheça o Blog',
          href: 'https://alvezzzd.github.io/Contagem/',
        }
      ]
    },
  ]);

  public openDialog(data: IProjects){
    this.#dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EDialogPainelClass.projects
    })
  }
}
