---
authors:
  - fonsdant
tags:
  - devops
  - infraestrutura
  - kubernetes
---

# RASCUNHO Fichamento sobre Kubernetes: visão geral

------------------------------------------------------------------------

THE KUBERNETES AUTHORS. Visão Geral. *In*: THE KUBERNETES AUTHORS.
**Documentação do Kubernetes**. Tradução própria. \[*S. l.*\]: The Linux
Foundation, c2025. Disponível em:
https://kubernetes.io/docs/concepts/overview. Acesso em: 11 mar. 2025.
Título original: Overview.

------------------------------------------------------------------------

<!-- truncate -->

- **Kubernetes:** é uma plataforma de extensível, portável e de código
  aberto para gerir cargas de trabalho e serviços em contêineres,
  facilitando automação e configuração declarativa; provê um *framework*
  para rodar sistemas distribuídos de maneira resiliente; possui as
  funcionalidades a seguir:
  - ***Service discovery*:** ou descoberta de serviço, expõe contêineres
    usando nomes de DNS ou IPs próprios.
  - ***Load balancing*:** ou balanceamento de carga, distribui o tráfego
    de rede de um contêiner sobrecarregado entre outros contêineres.
  - ***Storage orchestration*:** ou orquestração de armazenamento,
    permite se fazer a montagem automaticamente um sistema de
    armazenamento.
  - ***Automated rollouts and rollback*:** ou implantações e reversões
    automatizadas, permite se especificar um estado desejado para o qual
    o Kubernetes mude o estado atual.
  - 