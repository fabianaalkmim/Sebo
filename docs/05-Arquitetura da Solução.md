# Arquitetura da Solução

<span style="color:red">Pré-requisitos: <a href="3-Projeto de Interface.md"> Projeto de Interface</a></span>

Definição de como o software é estruturado em termos dos componentes que fazem parte da solução e do ambiente de hospedagem da aplicação.

![Arquitetura da Solução](img/02-mob-arch.png)

## Diagrama de Classes

![Diagramadeclasses](img/DiagramaDeClassesv2.png)

## Modelo ER

O Modelo ER representa através de um diagrama como as entidades (coisas, objetos) se relacionam entre si na aplicação interativa.]

![image](https://user-images.githubusercontent.com/103009155/225174291-1c78aee8-ce74-4617-b76b-4f8a33a9aa49.png)

## Esquema Relacional

O Esquema Relacional corresponde à representação dos dados em tabelas juntamente com as restrições de integridade e chave primária.

![image](https://user-images.githubusercontent.com/103009155/225178765-3b482514-50d7-441b-a504-72d5e438e925.png)

## Modelo Físico

```
CREATE TABLE Usuario
(
id int primary key auto_increment,
nome string not null,
cpf string not null,
senha string not null,
endereco string not null
)

CREATE TABLE Cliente
(
id int primary key auto_increment,
usuarioId int not null,
foreign key (usuarioId) references Usuario (id)
)

CREATE TABLE AdministradorDoSistema
(
id int primary key auto_increment,
administradorNome string not null
)

CREATE TABLE Livro
(
id int primary key auto_increment,
titulo string not null,
autor string not null,
estadoConservacao string not null,
preco double not null,
editora string not null,
quantidade int not null,
clienteId int not null,
administradorId int not null,
foreign key (clienteId) references Cliente (id),
foreign key (administradorId) references AdministradorDoSistema (id)
)

CREATE TABLE Carrinho
(
id int primary key auto_increment,
livroId int not null,
clienteId int not null,
compraId int not null,
foreign key (livroId) references Livro (id),
foreign key (clienteId) references Cliente (id),
foreign key (compraId) references Compra (id)
)

CREATE TABLE Compra
(
id int primary key auto_increment,
comprador string not null,
enderecoEntrega string not null,
valorFrete string not null
livroId int not null,
clienteId int not null,
carrinhoId int not null,
foreign key (livroId) references Livro (id),
foreign key (clienteId) references Cliente (id),
foreign key (carrinhoId) references Carrinho (id)
)

```

## Tecnologias Utilizadas

* IDEs de desenvolvimento: Visual Studio Code;
* Linguagens utilizadas: Javascript;
* Frameworks: React-Native;
* Back-end: JSON Server;
* Ferramenta de design: Figma;
* Plataforma para hospedagem dos arquivos: GitHub, Azure e Google Play Store; 
* Ferramenta de divisão de tarefas: Github Project;

## Hospedagem

Explique como a hospedagem e o lançamento da plataforma foi feita.

> **Links Úteis**:
>
> - [Website com GitHub Pages](https://pages.github.com/)
> - [Programação colaborativa com Repl.it](https://repl.it/)
> - [Getting Started with Heroku](https://devcenter.heroku.com/start)
> - [Publicando Seu Site No Heroku](http://pythonclub.com.br/publicando-seu-hello-world-no-heroku.html)

## Qualidade de Software

O glossário do IEEE (Instituto de Engenheiros Eletrônicos e Eletricistas) define qualidade de software como “grau de conformidade de um sistema, componente ou processo com os respectivos requisitos, as necessidades e expectativas de clientes ou usuários.

A qualidade de software do projeto Sebo Digital segue os fundamentos descriminados na norma técnica ISO/IEC 25010 para a avaliação.

### Adequação funcional

O público-alvo do sebo é composto por pessoas que buscam livros usados a preços mais acessíveis em comparação com os preços de mercado. Esse público pode incluir estudantes, pesquisadores, colecionadores, aficionados por literatura e pessoas que apreciam produtos vintage ou raros. As funções da nossa aplicação foram pensadas para realizar as tarefas e atender os objetivos específicos do nosso público-alvo. Apresentamos aos usuários etapas necessárias para a compra de um livro, excluindo as desnecessárias.

### Eficiência de desempenho

Nenhum usuário gosta de um software lento. Normalmente ficam impacientes e dependendo da situação até desinstalam ou deixam de lado. Esse princípio reflete justamente esse aspecto. Nosso software possui resposta em tempo hábil, sem deixar o usuário esperando.

### Compatibilidade

O grupo preza pela capacidade de executar o software independente do dispositivo móvel. Essa caractéristica é muito importante, pois, permite alçancar um número maior de pessoas. Nossa aplicação é compatível com Android e IOS.

### Usabilidade

Durante as reuniões em grupo foi discutido a praticidade do uso do aplicativo e chegou-se à conclusão de que um design simples, porém funcional como o de outros sites para vendas de livros já existentes trará uma experiência prazerosa para o usuário, e assim foi desenvolvido.

### Confiabilidade

A aplicação será testada por nossos desenvolvedores durante todo o processo para identificar falhas durante sua execução, frequência de defeitos apresentados, disponibilidade para os usuários ou se ocorre algum comportamento inesperado durante seu funcionamento após alguma modificação.

### Segurança 

A segurança é um dos pontos mais importantes. Afinal, ninguém quer utilizar algo inseguro, portanto nós desenvolvedores dessa aplicação somos responsáveis por quaisquer informações inseridas pelos usuários no sistema. Nossa aplicação não permite o vazamento de dados dos usuários cadastrados.

### Capacidade de manutenção

A reusabilidade da aplicação significará reduzir custos e tempo no processo de desenvolvimento e manutenção, aumentar a qualidade, entre outras diversas vantagens. Como nossa aplicação será desenvolvida em React Native, será possível reutilizar componentes para se obter agilidade no desenvolvimento e manutenção.

### Portabilidade

A portabilidade é fundamental em nossa aplicação e será definida através da capacidade da aplicação ser facilmente transportável, ou seja, se é capaz de executar todas as suas funções em diferentes sistemas operacionais. Nossa aplicação pode ser utilizada por tipos de pessoas diferentes em diversos ambientes e dispostivos móveis.
