# Documento de Visão: AutoNav Dashboard

## 1. Introdução
O **AutoNav Dashboard** é uma interface de monitoramento e controle de alto nível projetada para sistemas de navegação autônoma e logística industrial. O objetivo principal é fornecer uma visão clara, técnica e em tempo real do estado de veículos autônomos (AGVs/AMRs), permitindo intervenções rápidas e análise de eficiência.

---

## 2. Funcionalidades Principais

### 2.1. Monitoramento de Progresso da Missão
- **Progresso Visual**: Uma barra de progresso dinâmica que indica a conclusão da missão atual.
- **Cronômetros em Tempo Real**: 
    - **Tempo Total**: Contador acumulado desde o início da missão.
    - **Checkpoints Individuais**: Cronômetros específicos para as fases de *Partida*, *Carga* e *Entrega*, permitindo identificar gargalos operacionais.

### 2.2. Navegação em Tempo Real
- **Simulação de Trajetória**: Representação visual do veículo em um grid técnico, simulando o movimento e a orientação do hardware.
- **Telemetria Instantânea**: Exibição de velocidade (m/s), ângulo de rotação e status operacional (Ex: Autônomo vs. Manual).

### 2.3. Painel de Status (Cards)
- **Bateria**: Monitoramento de carga e estimativa de tempo restante.
- **Conexão**: Status da rede e latência (ping).
- **Localização**: Identificação da zona e setor atual no armazém/fábrica.
- **Estado da Carga**: Informações sobre o peso transportado e confirmação de carregamento.

### 2.4. Controle e Diagnóstico
- **Logs do Sistema**: Histórico de eventos classificados por severidade (Sucesso, Info, Aviso, Erro).
- **Monitoramento de Motores**: Rotação (RPM) individual dos motores esquerdo e direito para detecção de falhas mecânicas.
- **Controle de Içamento**: Interface para ajuste de altura de carga e liberação manual.

---

## 3. Identidade Visual e Design

### 3.1. Tipografia: Jura
A fonte **Jura** foi escolhida por sua natureza geométrica e estética futurista. 
- **Por que Jura?** Suas linhas limpas e terminações arredondadas evocam uma sensação de tecnologia avançada e precisão, características essenciais para um sistema de automação. Ela mantém a legibilidade em tamanhos pequenos, o que é crucial para dados técnicos e cronômetros.

### 3.2. Paleta de Cores
A escolha das cores foi baseada no conceito de "Dark Mode Industrial", priorizando o contraste e a redução da fadiga ocular em ambientes de operação contínua.

- **Fundo Principal (`#0f172a`)**: Um azul marinho profundo (Slate 900) que serve como base sólida, transmitindo estabilidade e permitindo que os elementos de interface "saltem" aos olhos.
- **Cor Primária (`#394976`)**: Um azul sóbrio utilizado para elementos de marca e destaques secundários, reforçando a confiança e o profissionalismo.
- **Cor Secundária - Verde Sucesso (`#008940`)**: Utilizada para indicar estados ativos, progresso concluído e sistemas operando normalmente. O brilho (glow) aplicado a esta cor simula indicadores LED de hardware real.
- **Cores de Alerta (Laranja/Vermelho)**: Reservadas estritamente para avisos e paradas de emergência, garantindo que a atenção do operador seja capturada instantaneamente quando necessário.

---

## 4. Conclusão
O design do AutoNav Dashboard equilibra a densidade de informações técnicas com uma estética moderna e intuitiva. Cada escolha visual, desde a fonte Jura até a paleta de cores escura, foi pensada para transformar dados complexos em uma experiência de monitoramento eficiente e visualmente impactante.
