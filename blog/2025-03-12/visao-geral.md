---
authors:
  - fonsdant
tags:
  - devops
  - infraestrutura
  - kubernetes
---

# Fichamento sobre Kubernetes: visão geral

------------------------------------------------------------------------

THE KUBERNETES AUTHORS. Visão Geral. *In*: THE KUBERNETES AUTHORS.
**Documentação do Kubernetes**. Tradução própria. \[*S. l.*\]: The Linux
Foundation, c2025. Disponível em:
https://kubernetes.io/docs/concepts/overview. Acesso em: 12 mar. 2025.
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
  - ***Automated bin packing*:** ou empacotamento automático de
    contêineres, permite alocar contêineres automaticamente para atender
    às especificações de processamento e memória dadas para executar
    tarefas em um grupo de nós.
  - ***Self-healing*:** ou autocorreção, reinicia, substitui ou elimina
    automaticamente contêineres até que voltem a ser íntegros.
  - ***Secret and configuration management*:** ou gestão de segredos e
    configurações, permite armazenar informações sensíveise e não
    sensíveis sem que seja necessário reconstruir a imagem do contêiner
    ou expor alguma configuração.
  - ***Batch execution*:** ou execução em lote, permite gerir cargas de
    trabalho em lote e de integração contínua.
  - ***Horizontal scaling*:** ou dimensionamento horizontal, permite
    dimensionar uma aplicação para cima ou para baixo manual ou
    automáticamente.
  - ***IPv4/IPv6 dual-stack*:** permite alocar endereços IPv4 e IPv6 a
    pods e services.
  - ***Designed for extensibility*:** permite adicionar funcionalidades
    ao cluster sem mudar implementações de código.
- Kubernetes opera a nível de contêiner, e não de hardware; não é
  monolítico, pois elementos essenciais para construir plataformas e
  preserva a escolha do usuário sobre quais utilizar.
- Até o Kubernetes, a história das implantações passou pela era
  tradicional, quando cada implantação era feita diretamente em um
  servidor físico e que apresentava dificuldade para escalá-la; depois,
  pela era das virtualizações, que separava a implantação do servidor
  físico, isolando-a em uma máquina virtual, que, no entanto, não era
  tão leve; para, enfim, chegar a era dos contêiners, que são similares
  às virtualizações, mas leves.
