---
authors:
  - fonsdant
tags:
  - devops
  - infraestrutura
  - kubernetes
---

# Fichamento sobre Kubernetes: componentes do Kubernetes

------------------------------------------------------------------------

THE KUBERNETES AUTHORS. Objetos no Kubernetes. *In*: THE KUBERNETES
AUTHORS. **Documentação do Kubernetes**. Tradução própria. \[*S. l.*\]:
The Linux Foundation, c2025. Disponível em:
https://kubernetes.io/docs/concepts/working-with-objects. Acesso em: 12
mar. 2025. Título original: Objects In Kubernetes.

------------------------------------------------------------------------

<!-- truncate -->

- ***Kubernetes object*:** ou objeto Kubernetes, é uma entidade
  persistente usada para representar o estado de um cluster,
  especificando o estado desejado para ele; é manipulado pela API do
  Kubernetes (usada pelo *kubectl*, por exemplo); possui uma *spec* (que
  especifica o estado desejado) e um *status* (o estado atual), ambos
  são monitorados pelo *control plane* que busca fazer que o *status*
  corresponda a *spec*.
