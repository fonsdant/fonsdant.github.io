---
authors:
  - fonsdant
tags:
  - observability
  - opentelemetry
---

# Fichamento sobre OpenTelemetry: cartilha de observabilidade

------------------------------------------------------------------------

OPENTELEMETRY. Cartilha de observabilidade. *In*: OPENTELEMETRY.
**Documentação**. Tradução própria. \[*S. l.*: *s. n.*\], c2025.
Disponível em:
https://opentelemetry.io/docs/concepts/observability-primer. Acesso em:
9 mar. 2025. Título original: Observability primer.

------------------------------------------------------------------------

<!-- truncate -->

- **Observabilidade:** permite responder sobre o comportamento de um
  sistema instrumentado sem precisar conhecer seu funcionamento
  interno.
- Um sistema **devidamente instrumentado** fornece todas informações
  para se analisar um problema, isto é, não requer que se adicione
  mais instrumentações para que isso seja feito.
- **Telemetria:** refere-se a dados emitidos por um sistema, bem como
  ao comportamento dele. Esses dados podem ser *logs*, *traces* e
  métricas.
- ***Log*:** ou registro, é uma mensagem com uma marcação temporal;
  complementarmente útil quando parte de um *span* ou correlacionado
  com um *trace* e um *span*.
- ***Span*:** ou intervalo, representa uma unidade de trabalho ou
  operação, mostra o que aconteceu durante sua execução; contém nome,
  informações temporais, *logs* e metadados (chamados "atributos") com
  informações sobre as operação rastreada.
- ***Trace*:** ou rastro, permite se observar uma requisição (isto é,
  os caminhos que ela faz) conforme ela se propaga pelo sistema; é
  composto por um ou mais *spans*; também conhecido como *trace*
  distribuído.
- **Métrica:** é uma agregação de dados númericos ao longo de um
  período sobre uma infraestrutura ou aplicação. Exemplos: utilização
  de CPU e taxa de requisições por segundo.
- **SLI:** ou *Service Level Indicator*, representa uma medida de
  comportamento de um serviço a partir da perspectiva do usuário.
  Exemplo: tempo de carregamento de uma página *web*.
- **SLO:** ou *Service Level Objective*, representa como a
  confiabilidade é comunicada, a partir da associação de um ou mais
  SLIs.
