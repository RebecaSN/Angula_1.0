import { Component } from '@angular/core';

@Component({//não é só uma classe, é um componente
  selector: 'app-root',//funciona exatamente como se fosse os seletres do css, isso seria um seletor de tag no css. To meio que criando uma tag diferente que vai se referir a um componente meu
  //se eu quiser chamar esse componente dentro da minha aplicação, eu vou ter que chamar 
  templateUrl: './app.component.html',//vamos passar o caminho html que o componenten vai usar 
  styleUrls: ['./app.component.css']//passamos mais de um componente css caso queiramos, passamos um array, informando o caminhos de todos os arquivos que vamos usar
})//decorator, uma estrutura de ts, como se ele fizesse com que alguma propriedade ou classe fizesse coisas a mais do que tinha que fazer

export class AppComponent {
  title = 'app';
}
//se o decorator de cima não existisse, é como se a classe fosse uma classe normal que podemos usar quaqluer coisa
//essa classe com o decoratir em cima, ela assume um trabalho especial, que é ser um componente
//utiliza muito classes 
//quando a gente utiliza um dacorator ou uma anotação, a gente diz que aquela classe ou propriedade, é como se ela fosse algo a mais, como se tivesse uma responsabilidade a mais
//selector: ela vai ser basicamente a maneira que a gente vai chamar aquele componente dentro da nossa aplicação. Esse selector do componente lea funciona como um seletores de CSS. Para crirar esse componente na tela, tenho que crirar uma tag 'app-root' que é o que acontece no arquivo html desse documento
//templeteUrl: a gente informa para ele para qual arquivo html esse cimponente vai fazer referencia, vai utilizar para renderizar o componente em si na tela, vai passar o caminho para acessar
//styleUrls: quais são os arquivos css que o componente vai utilizar


