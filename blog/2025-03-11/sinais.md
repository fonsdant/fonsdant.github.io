---
authors:
  - fonsdant
tags:
  - observability
  - opentelemetry
---

# Fichamento sobre OpenTelemetry: sinais e traces

------------------------------------------------------------------------

OPENTELEMETRY. Sinais. *In*: OPENTELEMETRY. **Documentação**. Tradução
própria. \[*S. l.*: *s. n.*\], c2025. Disponível em:
https://opentelemetry.io/docs/concepts/signals. Acesso em: 11 mar. 2025.
Título original: Signals.

------------------------------------------------------------------------

<!-- truncate -->

- ***Signal***, ou sinal, é uma saída de sistema que descreve uma
  atividade do sistema operacional ou da aplicação executando em uma
  plataforma; pode ser agrupado para se interpretar um comportamento a
  partir de diferentes perspectivas; subdivide-se em: *traces*,
  métricas, *logs* e *baggage* (ou ainda em *events* e *profiles*,
  embora estejam em fase de desenvolvimento ou proposta).

------------------------------------------------------------------------

| Nome         | Trace ID | Span ID | Parent ID | Eventos                              |
|:-------------|:---------|:--------|:----------|:-------------------------------------|
| Despertar    | trace01  | span01  | null      | desligar o despertador; levantar-se  |
| Fazer a cama | trace01  | span02  | span01    | esticar lençóis; afofar travesseiros |
| Tomar café   | trace01  | span03  | span02    | fritar ovos; assar pão; passar café  |

- A tabela acima representa o *trace* de uma requisição.
- Como todos os *spans* possuem o mesmo *trace ID*, nota-se que eles
  **pertencem a um mesmo *trace***; em outras palavras, **associam-se a
  mesma requisição**.
- **O primeiro *span* é o “Despertar”**, pois seu *parent ID* é nulo;
  isto é, não há outro *span* anterior a ele. **O segundo é o “Fazer a
  cama”**, pois seu *parent ID* é o *span ID* do “Despertar”; **e, o
  “Tomar café”, o terceiro e último**, por analogia. De modo que o
  *trace* da requisição é: “Despertar”, “Fazer a cama” e “Tomar café”.
- Os atributos *trace ID* e *parent ID* formam juntos uma
  **hierarquia**.
- Cada *span* possui seu próprio conjunto de **eventos**, que
  representam o que aconteceu durante o *span*.

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
- ***Span*:** ou intervalo, unidade de trabalho ou operação; um ou mais
  *spans* compõem um *trace*.
  - Possui como informações: nome, *parent span ID*, instantes de início
    e fim, contexto, atributos, links e status.
  - Pode se aninhar em outros *spans* através do *parent span ID* para
    representar sub-operações.
  - ***Span context*:** ou contexto de *span*, é um objeto imutável que
    contém *trace ID*, *span ID*, *trace flags* e *trace state*; parte
    do *span* serializada e propagada juntamente aos *distributed
    context* e *baggage*; é usado para criar *span links* através do
    *trace ID*.
    - ***Trace ID*:** representa o *trace* do qual o *span* faz parte.
    - ***Span ID*:** é o identificador do *span*.
    - ***Trace flags*:** representa opções para o *trace*.
    - ***Trace state*:** uma lista de chaves-valores com informações de
      *trace* específicas para os fornecedores.
    - Todos os quatro atributos acima são especificados por *Trace
      Context*, uma **recomendação W3C**.
  - ***Attribute*:** ou atributo, é um par de chave-valor com metadados
    para identificar uma operação; pode ser adicionado durante (de
    preferência para disponibilizar ao SDK) ou após a criação de um
    *span*; atributos convencionados são chamados de *semantic
    attributes*, ou atributos semânticos.
  - ***Span event*:** ou evento de *span*, é uma mensagem de log
    estruturado ou anotação em um *span*; usado para denotar um instante
    com algum significado ocorrido durante o *span*; o carregamento de
    uma página pode ser um *span*, e, a renderização dela, um *span
    event*.
    - ***Span event vs. attribute*:** recomenda-se que uma ocorrência
      seja adicionado a um *span* como *span event*, quando o instante
      em que ela ocorreu é uma informação relevante, ou como
      *attribute*, quando não.
  - ***Span link*:** ou conexão de *link*, é uma associação entre
    *spans*; permite relacionar *spans* que não possuem vínculo direto;
    *span links* são opcionais; um *span* síncrono pode disparar um
    *span* assíncrono, e ambos podem ser vinculados através de um *span
    link*.
  - ***Span status*:** ou estado do *span*, é a condição do *span* ao
    seu término; pode ser “Unset” (*span* finalizado sem erros), “Error”
    (*span* finalizado com erro) ou “Ok” (*span* explicitamente
    finalizado sem erros); “Ok” geralmente não é necessário, deve ser
    usado manualmente.
  - ***Span kind*:** ou tipo de *span*, é o tipo do *span* conforme ele
    foi emitido ou consumido; pode ser “Client”, “Server”, “Internal”,
    “Producer” ou “Consumer”; um *span* “Client” precede um “Server”, e
    ambos representam operações síncronas; um *span* “Producer” precede
    um “Consumer”, e ambos representam operações assíncronas; um *span*
    se assume como “Internal” quando não se pode definí-lo como nenhum
    dos outros.
