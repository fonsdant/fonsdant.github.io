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

THE KUBERNETES AUTHORS. Componentes do Kubernetes. *In*: THE KUBERNETES
AUTHORS. **Documentação do Kubernetes**. Tradução própria. \[*S. l.*\]:
The Linux Foundation, c2025. Disponível em:
https://kubernetes.io/docs/concepts/overview. Acesso em: 12 mar. 2025.
Título original: Kubernetes Components.

------------------------------------------------------------------------

<!-- truncate -->

- ***Kubernetes cluster*:** conjunto de nós sendo um *control plane* e
  os demais *workers*.
- ***Control plane*:** ou painel de controle, é o nó responsável por
  gerir o estado geral de um *cluster*; é composto por
  *kube-apiserver* (expõe a API HTTP do Kubernetes),
  *etcd* (armazenamento de chave-valor), *kube-scheduler* (víncula pods
  sem nó a um nó), *kube-controller-manager* (executa controladores para
  implementar o comportamento da API do Kubernetes) e
  *cloud-controller-manager* (opcional; integra a provedores de núvem).
- **Todo nó Kubernetes é composto por:** *kubelet* (garante que os pods
  estejam em execução, assim como seus contêineres), *kube-proxy*
  (opcional; mantém regras de rede para nós implementarem serviços) e
  *container runtime* (software responsável por executar contêineres);
  certos clusteres podem necessitar de mais componentes em seus nós,
  como o systemd para nós Linux.
- ***Addons*:** ou complementos, podem extender funcionalidades do
  Kubernetes; alguns exemplos são: DNS, *WEB UI* (*dashboard*),
  *container resource monitoring* e *cluster-level logging*.
