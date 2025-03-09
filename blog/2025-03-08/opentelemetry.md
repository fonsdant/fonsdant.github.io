---
authors:
  - fonsdant
tags:
  - observability
  - opentelemetry
---

# Fichamento sobre OpenTelemetry: o que é OpenTelemetry?

------------------------------------------------------------------------

OPENTELEMETRY. O que é OpenTelemetry?. *In*: OPENTELEMETRY.
**Documentação**. Tradução própria. \[*S. l.*: *s. n.*\], c2025.
Disponível em: https://opentelemetry.io/docs/what-is-opentelemetry.
Acesso em: 8 mar. 2025. Título original: What is OpenTelemetry?.

------------------------------------------------------------------------

<!-- truncate -->

- **OpenTelemetry** é um *framework* de observabilidade projetado para
  facilitar a geração, exportação e coleção de dados de telemetria.
  Seu objetivo principal é permitir uma instrumentação fácil de
  aplicações e sistemas, independentemente de linguagem de
  programação, infraestrutura e ambiente de execução.
- O armazenamento (*backend*) e a visualização (*frontend*) dos dados
  de telemetria são intencionalmente **delegados a outras
  ferramentas**.
- **Observabilidade** é a capacidade de entender o estado interno de
  um sistema examinando seus dados de telemetria, que incluem
  *traces*, métricas e *logs*.
- **Instrumentação** é o processo pelo qual uma aplicação ou sistema
  se torna observável.
- Os **principais componentes** do OpenTelemetry são:
    - OpenTelemetry Specification;
    - OpenTelemetry Protocol (OTLP);
    - OpenTelemetry Semantic Conventions;
    - OpenTelemetry Collector;
    - APIs e SDKs para linguagens de programação;
    - Ecossistema de bibliotecas (Registry);
    - Geração automática de dados de telemetria.
- OpenTelemetry foi projetado para ser **extensível**.
- OpenTelemetry é a **junção dos projetos OpenTracing e OpenCensus**.
  Ambos buscavam resolver a falta de padronização para instrumentação
  e envio de dados de telemetria para um *backend* de observabilidade,
  mas não foram capazes de fazer isso independentemente.