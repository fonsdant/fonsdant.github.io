---
authors:
- fonsdant
tags:
- observability
- opentelemetry
---

# Fichamento sobre OpenTelemetry: sinais

------------------------------------------------------------------------

OPENTELEMETRY. Sinais. *In*: OPENTELEMETRY. **Documentação**. Tradução
própria. \[*S. l.*: *s. n.*\], c2025. Disponível em:
https://opentelemetry.io/docs/concepts/signals. Acesso em: 9 mar. 2025.
Título original: Signals.

------------------------------------------------------------------------

<!-- truncate -->

- ***Signal***, ou sinal, é uma saída de sistema que descreve uma
  atividade do sistema operacional ou da aplicação executando em uma
  plataforma; pode ser agrupado para se interpretar um comportamento a
  partir de diferentes perspectivas; subdivide-se em: *traces*,
  métricas, *logs* e *baggage* (ou ainda em *events* e *profiles*,
  embora estejam em fase de desenvolvimento ou proposta).

## *Traces*

| Nome         | Trace ID | Span ID | Parent ID | Eventos                              |
|:-------------|:---------|:--------|:----------|:-------------------------------------|
| Despertar    | trace01  | span01  | null      | desligar o despertador; levantar-se  |
| Fazer a cama | trace01  | span02  | span01    | esticar lençóis; afofar travesseiros |
| Tomar café   | trace01  | span03  | span02    | fritar ovos; assar pão; passar café  |

- A tabela acima representa o *trace* de uma requisição.
- Como todos os *spans* possuem o mesmo *trace ID*, nota-se que eles
  **pertencem a um mesmo *trace***; em outras palavras, **associam-se a mesma
  requisição**.
- **O primeiro *span* é o “Despertar”**, pois seu *parent ID* é nulo; isto
  é, não há outro *span* anterior a ele. **O segundo é o “Fazer a cama”**,
  pois seu *parent ID* é o *span ID* do “Despertar”; **e, o “Tomar café”,
  o terceiro e último**, por analogia. De modo que o *trace* da requisição
  é: “Despertar”, “Fazer a cama” e “Tomar café”.
- Os atributos *trace ID* e *parent ID* formam juntos uma **hierarquia**.
- Cada *span* possui seu próprio conjunto de **eventos**, que representam o
  que aconteceu durante o *span*.

------------------------------------------------------------------------

- ***Trace provider*:** ou provedor de *trace*, é uma *factory* de
  *tracers*; geralmente, inicializado apenas uma vez e com seu ciclo de
  vida igual ao da aplicação; inclui as inicializações de *resource* e
  *exporter*; tipicamente, a primeira etapa de *tracing* do
  OpenTelemetry.
- ***Tracer*:** ou rastreador, cria *spans* para operações feitas por
  uma requisição.
- ***Trace exporter*:** ou exportador de *trace*, enviam *traces* a um
  consumidor, como a saída padrão da aplicação ou o OpenTelemetry
  Collector.
- ***Context propagation*:** ou propagação de contexto, permite que
  *spans*, independentemente de onde foram gerados, sejam
  correlacionados entre si e componham *traces*.
- ***Span*:** ou intervalo, unidade de trabalho ou operação; elementos
  que compõem um *trace*.
  - Possui como informações: nome, *parent span ID*, horários de início
    e fim, contexto, atributos, links e status.
  - Pode se aninhar em outros *spans* através do *parent span ID* para
    representar sub-operações.
  - ***Span Context*:** ou contexto de *span*, é um objeto imutável que
    contém *trace ID*, *span ID*, *trace flags* e *trace state*; parte
    do *span* serializada e propagada juntamente aos *distributed
    context* e *baggage*.
    - ***Trace ID*:** representa o *trace* do qual o *span* faz parte.
    - ***Span ID*:** é o identificador do *span*.
    - ***Trace flags*:** representa opções para o *trace*.
    - ***Trace state*:** uma lista de chaves-valores com informações de
      *trace* específicas para os fornecedores.
    - Todos os quatro atributos acima são especificados por *Trace
      Context*, uma **recomendação W3C**.

## Métricas

## *Logs*

## *Baggage*

- Um **exemplo de *trace***: vamos supor que fizemos uma requisição para
  o sistema *Hello!* e que essa requisição percorreu, respectivamente,
  as operações *hello*, *hello-greetings* e *hello-salutations*. Dado
  que essas operações possuem cada uma um *trace* de mesmo nome, podemos
  representá-los simplificadamente da seguinte maneira: