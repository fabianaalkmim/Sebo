# Plano de Testes de Software

| **Caso de Teste** 	| **CT-01 – Login** 	|
|:---:	|:---:	|
|	Requisito Associado 	| RF-002 – Autenticação no sistema |
| Objetivo do Teste 	| Verificar se o login está funcionando corretamente. |
| Passos 	| 1) Acessar o aplicativo “Sebo Digital” 2) Visualizar a página de Login, clicando em Fazer Login na página inicial 3) Inserir o e-mail e senha cadastrados 4) Ser redirecionado para a tela home onde contém os livros e campos de pesquisar/atalhos para fácil acesso do usuário. |
|Critério de Êxito | - A tela de login deve abrir corretamente - O login e senha cadastrados devem direcionar o usuário para a tela de home do Sebo Digital - Login e senha incorretos devem exibir uma mensagem de login ou senha incorretos. |
|  	|  	|

![image](https://user-images.githubusercontent.com/103009155/229194342-dce48986-b6bc-41bc-aa8b-e8b91d59a059.png)

| **Caso de Teste** 	| **CT-02 – Cadastrar usuário** 	|
|:---:	|:---:	|
|	Requisito Associado 	| RF-001 – Cadastro de clientes com nome, CPF, endereço, e-mail, senha |
| Objetivo do Teste 	| Verificar se o usuário consegue se cadastrar na aplicação. |
| Passos 	| 1) Acessar o aplicativo “Sebo Digital” 2) Visualizar a página de Login, clicando em Cadastre-se na página inicial 3) Cadastrar um novo usuário 4) Preencher os campos solicitados (nome, e-mail, senha e confirme senha) 5) Clique no botão cadastrar. |
|Critério de Êxito | - O cadastro foi realizado com sucesso, caso não seja bem-sucedido deverá obedecer aos critérios de senha: - Crie uma senha com no mínimo 8 caracteres, - Adicione letras minúsculas, -Adicione pelo menos uma letra maiúscula. |
|  	|  	|

![image](https://user-images.githubusercontent.com/103009155/229196911-b05778c7-7a83-4cf6-ad93-9d9c8eb6bcf3.png)

| **Caso de Teste** 	| **CT-03 – Esqueceu a senha / Redefinir senha** 	|
|:---:	|:---:	|
|	Requisito Associado 	| RF-002 – Autenticação no sistema |
| Objetivo do Teste 	| Verificar se a alteração de cadastro está ocorrendo corretamente. |
| Passos 	| 1) Acessar o aplicativo “Sebo Digital” 2) Visualizar a página de Login, clicando em Fazer Login na página inicial 3) Ir para a página de login 4) Acessar com o e-mail e senha 5) Clicar no botão esqueceu a senha 6) O usuário será direcionado para a página de esqueceu a senha, digitará o e-mail para que possa acessar sua caixa de entrada do e-mail. Clicar no link presente no corpo da mensagem enviada no e-mail pessoal, encaminhar a página do app de redefinir senha e alterar para uma nova senha com êxito 7) Acessar o login novamente com a senha alterada. |
|Critério de Êxito | - A tela de novo cadastro deve abrir corretamente - Ao alterar a senha, o usuário deverá conseguir realizar o login perfeitamente |
|  	|  	|

![image](https://user-images.githubusercontent.com/103009155/229198152-b93db2ec-bdf7-498e-a23d-d769c3edfe1e.png)

| **Caso de Teste** 	| **CT-04 – Área do usuário** 	|
|:---:	|:---:	|
|	Requisito Associado 	| RF-007 –  O usuário cliente, poderá visualizar as compras realizadas após a finalização do pedido. RF-008 - O usuário poderá alterar os itens do carrinho de compra até a finalização do pedido |
| Objetivo do Teste 	| Verificar se a área do usuário está apresentando as informações de compras realizadas corretamente. |
| Passos 	| 1) Acessar o aplicativo “Sebo Digital” 2) Visualizar a página de Login, clicando em Fazer Login na página inicial 3) Inserir o e-mail e senha cadastrados 4) Ser redirecionado para a tela home onde contém os livros e campos de pesquisar/atalhos para fácil acesso do usuário 5) O usuário poderá alterar os itens no carrinho, finalizar a compra e visualizar os pedidos realizados. |
|Critério de Êxito | - A tela área do usuário deve abrir corretamente – após efetuar o login na aplicação, o usuário poderá pesquisar os livros que deseja comprar, adicionar ao carrinho, finalizar a compra e visualizar as compras realizadas perfeitamente. |
|  	|  	|

![image](https://user-images.githubusercontent.com/103009155/229202950-0945dece-7985-419c-a00a-9b2a16e81dfb.png)

| **Caso de Teste** 	| **CT-05 – Área do administrador** 	|
|:---:	|:---:	|
|	Requisito Associado 	| RF-006 - O administrador do sistema poderá visualizar, alterar, excluir e cadastrar os itens do estoque. RF-001 - Cadastro de livros, autores, editoras e clientes. RF-003 - Controle de estoque e vendas de livros |
| Objetivo do Teste 	| Verificar se o administrador consegue fazer a gestão de estoque. |
| Passos 	| 1) Acessar o aplicativo “Sebo Digital” 2) Visualizar a página de Login, clicando em Fazer Login na página inicial 3) Inserir o e-mail e senha cadastrados 4) Ser redirecionado para a tela home do administrador em que ele poderá cadastrar, alterar, excluir ou editar os itens do estoque. |
|Critério de Êxito | - A tela área do administrador deve abrir corretamente, o usuário deverá conseguir alterar, cadastrar, excluir e editar os itens do estoque, que deverão ser atualizados no estoque após salvar as informações. |
|  	|  	|

![image](https://user-images.githubusercontent.com/103009155/229203965-a85f67e6-4ac9-4d03-a326-2db757e03097.png)


| **Caso de Teste** 	| **CT-06 – Finalização da compra** 	|
|:---:	|:---:	|
|	Requisito Associado 	| RF-002 - Entrega do produto e confirmação da compra |
| Objetivo do Teste 	| Verificar se usuário ao preencher os dados possa confirmar as informações do detalhamento da compra realizada para ter o status de andamento do pedido |
| Passos 	| 1) Acessar o aplicativo “Sebo Digital” 2) Visualizar a página de Login, clicando em Fazer Login na página inicial 3) Inserir o e-mail e senha cadastrados 4) Ser redirecionado para a tela home onde contém os livros e campos de pesquisar/atalhos para fácil acesso do usuário 5) O usuário poderá alterar os itens no carrinho, finalizar a compra e visualizar os pedidos realizados. 6) O usuário decide inserir os livros no carrinho, preenche os dados corretamente e após será direcionado para a página do status de andamento do pedido |
|Critério de Êxito | - A tela área do usuário deve abrir corretamente e ser preenchida – Para que possa vir a tela de Meus Pedidos e indicar qual status está o pedido: “Em aberto” ou “Concluído”. |
|  	|  	|

![image](https://user-images.githubusercontent.com/103009155/229205229-660946f0-0665-4fe3-b4c1-d7054e1f2639.png)
