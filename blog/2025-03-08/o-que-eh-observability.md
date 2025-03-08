---
authors:
  - fonsdant
tags:
  - observability
  - opentelemetry
---

# Fichamento sobre OpenTelemetry: o que é OpenTelemetry?

------------------------------------------------------------------------

OPENTELEMETRY. What is OpenTelemetry?. *In*: OPENTELEMETRY.
**Documentation**. \[*S. l.*: *s. n.*\], c2025. Tradução própria
complementada pela do site. Disponível em:
https://opentelemetry.io/docs/what-is-opentelemetry/. Acesso em: 8 mar.
2025.

------------------------------------------------------------------------

    <!-- truncate -->

> OpenTelemetry is: An observability framework and toolkit designed to
> facilitate the Generation, Export, Collection of telemetry data such
> as traces, metrics, and logs. \[...] vendor- and tool-agnostic,
> meaning that it can be used with a broad variety of observability
> backends \[...]. OpenTelemetry is not an observability backend itself.

## Contexto

objeto que contém a informação para os serviços emissor e receptor
de [sinais](#sinal) [...] correlacionem um sinal a outro.

## Propagação de contexto

permite que *[traces](#trace)* formem informações causais sobre um
sistema arbitrariamente distribuídos entre processos e limites de rede.

## Baggage

\[[sinal](#sinal) que descreve uma\] informação contextual transmitida
entre sinais.

## Log

\[[sinal](#sinal) que descreve o\] registro em texto estruturado ou não
com dados sobre um evento.

## Métrica

\[[sinal](#sinal) que descreve uma\] medida de serviço capturada em
tempo de execução. Agregação de dados numéricos sobre a sua
infraestrutura ou aplicativo ao longo de um período.

## Observability

habilidade de entender o estado interno de um sistema examinando seus
dados de [telemetria](#telemetria), o que inclui *[traces](#trace)*,
[métricas](#métrica) e *[logs](#log)*.

## OpenTelemetry

*framework* e *toolkit* projetado para facilitar a geração, exportação,
coleta de dados de [telemetria](#telemetria), como *[traces](#trace)*,
[métricas](#métrica) e *[logs](#log)*. \[...\] agnóstico a
implementações e ferramentas, pode ser usado por vários *backends* de
[observability](#observability) \[...\].

## Propagação

## Sinal

saída de sistema que descreve uma atividade subjacente do de uma
aplicação. sistema operacional e dos aplicativos em execução numa
plataforma.

## SLI

ou *Service Level Indicator*, medida do comportamento de um serviço
\[...\] a partir da perspectiva dos seus usuários.

## SLO

ou *Service Level Objective*, representa os meios pelos quais a
confiabilidade \[do sistema\] é comunicada a uma organização ou equipe
\[...\], associando um ou mais SLI ao valor comercial \[do sistema\].

## Span

unidade de trabalho ou operação. *Spans* rastreiam operações específicas
que uma operação faz, mostrando uma imagem do que aconteceu durante o
tempo em que essa operação foi executada. \[...\] contém dados
temporais, [logs](#log) estruturados e metadados (atributos) para
fornecer informações sobre a operação rastreada.

## Telemetria

\[conjunto formado\] dados emitidos por um sistema e o seu
comportamento.

## Trace

\[[sinal](#sinal) que descreve o\] caminho de uma requisição ao longo da
sua aplicação.
