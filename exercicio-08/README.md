<h1 align="center">COM222 – Desenvolvimento de Sistemas na Web</h1>
<p align="center">
  <strong>Trabalho 8 – Loja de Confecções</strong>
</p>

## Descrição
Implemente um front-end em Angular para emissão de nota fiscal para uma loja de confecções. Para
tanto, crie um data model com os seguintes atributos:
 - **código: number**
 - **descrição: string**
 - **valor unitário: number**
 - **desconto: number**

> Código é um valor numérico que identifica de maneira única cada produto (ex: 101). 

> Descrição é um texto que descreve o produto (ex: Calça jeans masculina Levis nro 40). 

> Valor unitário é o preço de venda do produto, em reais. 

> Desconto é um valor percentual que pode ser usado quando o produto está em promoção. Quando é igual a zero significa que não há desconto.

Para efeito de simplificação, a emissão da nota deve conter apenas o nome do cliente e a relação de produtos comprados. No momento da compra, o produto deve ser escolhido num campo select (note que haverá um vetor de produtos) e deve-se informar a quantidade desejada.

Deve haver dois botões na interface. O primeiro, chamado “Inclui item” faz a inclusão de itens na nota fiscal, colocando cada item como linha de uma tabela de itens, exatamente como foi feito no trabalho da cafeteria. Para cada item, deve-se mostrar a quantidade vendida, o código do produto, sua descrição, seu valor unitário (sem desconto), o valor do desconto, e o valor total dos itens com o desconto.
O segundo botão, chamado “Fecha nota”, faz o fechamento da nota fiscal, exibindo o valor total da nota após o último item da tabela.

Você deve usar o MongoDB para armazenar uma coleção de produtos (cadastre no mínimo cinco). Essa coleção deve ser usada para popular o select da interface. As notas fiscais criadas devem ser persistidas no banco.

*Nota: Você pode criar outros data models se julgar necessário.*