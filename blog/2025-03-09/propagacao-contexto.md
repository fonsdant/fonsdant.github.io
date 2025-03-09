---
authors:
  - fonsdant
tags:
  - observability
  - opentelemetry
---

# Fichamento sobre OpenTelemetry: propagação de contexto

------------------------------------------------------------------------

OPENTELEMETRY. Propagação de contexto. *In*: OPENTELEMETRY.
**Documentação**. Tradução própria. \[*S. l.*: *s. n.*\], c2025.
Disponível em:
https://opentelemetry.io/docs/concepts/context-propagation. Acesso em: 9
mar. 2025. Título original: Context propagation.

------------------------------------------------------------------------

<!-- truncate -->

- ***Context***, ou contexto, é um objeto que contém para os serviços
  emissor e receptor correlacionarem um sinal a outro; possui uma
  especifícação homônima, ***Context***.
- ***Propagation***, ou propagação, é o mecanismo que move um contexto
  entre serviços ou processos; geralmente, é feita por bibliotecas,
  mas pode ser manipulada pela API *Propagators*. O propagador padrão
  utiliza os *headers* da especificação *W3C TraceContext*.
- ***Context propagation***, ou propagação de contexto, permite
  correlacionar sinais independentemente de onde foram emitidos.
