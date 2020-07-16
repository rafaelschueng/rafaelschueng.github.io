---
layout: post
title:  "DevOps: Instalando programas no Windows de forma automatizada."
date:   2020-07-15 00:00:00 -0300
description: "Aprenda a instalar, remover e atualizar em poucos segundos pacotes de uma forma simples e rápida usando apenas utilitários de linha de comando via Powershell"
categories: "DevOps"
related_image: https://res.cloudinary.com/djjkfuxvk/image/upload/v1594882823/Windows_Package_Manager_v0.1.41331_Preview_1115x624_dw1yfu.png
---
Em algum determinado momento após realizar uma instalação limpa do Windows, você deve ter tido o desprazer de instalar novamente todos os programas do seu computador. O problema é que você perde muito tempo instalando tudo e as vezes esse processo pode demorar horas ou até dias para poder ficar ao seu gosto. Eu pessoalmente mantenho alguns scripts guardados para quando eu termino minha instalação de qualquer distribuição Linux que eu faça a instalação na minha máquina de produção mas no Windows a gente não tem muitas opções disponíveis de gestores de pacotes e isso atrasa muito quando você precisa fazer uma instalação de algo ou precisa configurar um ambiente de desenvolvimento. Normalmente só temos uma escolha que é instalar tudo através daqueles ‘wizards’ malucos que as empresas que desenvolvem disponibilizam. Felizmente existem algumas formas de você instalar tudo usando algumas ferramentas que automatizam esse processo e te ajudam a se preocupar com 

Algumas das ferramentas que eu vou apresentar usam Powershell como base ou foram desenvolvidas para o ecossistema .NET e abusam da linha de comando. Você deve estar familiarizado com o Powershell ou com alguma linha de comando para usar elas. Como dizem por aí: “Dez dedos no teclado são mais rápidos que dois no mouse...” 

**Uma observação importante antes de iniciarmos, é que o Powershell interpreta tanto os cmdlets quanto programas instalados no seu computador e portanto nada do que iremos fazer abaixo usará ou será suportado pelo clássico cmd.exe, exceto em algumas raras ocasiões ao longo do texto. Outra observação importante é que usaremos o pacote nodejs em todos os exemplos abaixo porém, você pode instalar qualquer outro pacote que desejar como Firefox, Chrome e etc... Basta ele estar disponível no repositório do gestor de pacotes que você escolher.**
<br/>
<br/>

### **Chocolatey**
Chocolatey foi desenvolvido para suprir uma necessidade que o Windows tinha em relação as distros linux. Normalmente em qualquer distribuição linux você tem um gerenciador de pacotes o que mantém todo o sistema configurado e atualizado. Boa parte das distros linux são construídas em volta do gerenciador de pacotes porém o Windows não usa um gerenciador de pacotes. Aliás, o Windows tem um sistema de empacotamento porém não possuí algum gestor de pacotes. O que soa no mínimo estranho. Pensando nisso algumas pessoas se juntaram e construíram o Chocolatey se baseando no APT-GET(Sim. O próprio gestor de pacotes do Ubuntu, Linux Mint e muitas outras distribuições Debian-based). O Chocolatey é uma baita “mão na roda” para você sendo desenvolvedor de sistemas ou não e você pode instalar quase qualquer ferramenta de desenvolvimento apenas usando a linha de comando. Veja um exemplo abaixo de como instalar o NodeJS apenas usando 1 linha de comando:

<script src="https://gist.github.com/rafaelschueng/15e27422387d8b82c717c9b7761925f7.js"></script>

Viu só ?!? Parece até bobo de tão simples que é né ? Você pode até imaginar que está usando alguma distribuição linux como Ubuntu, Debian ou até mesmo Linux Mint, porém não está! se você gostou terá de instalar o Chocolatey através da linha de comando antes instalar qualquer coisa através dele e para isso você precisará abrir o Powershell em modo administrativo e executar o seguinte script:

<script src="https://gist.github.com/rafaelschueng/653ac93daae3cbbc99e6c725ea7761e4.js"></script>

Com o Chocolatey você pode não apenas instalar pacotes mas sim remover outros pacotes que são instalados pelo próprio e até mesmo atualizar tudo que foi instalado por ele. Veja um exemplo de como remover pacotes: 

<script src="https://gist.github.com/rafaelschueng/ca2b0d2621338c10ff8af9138edf670f.js"></script>

E para atualizar um pacote você usa o seguinte comando: 

<script src="https://gist.github.com/rafaelschueng/d344d94de8a069d8f95e9a4c30af541c.js"></script>

Ou para atualizar todos os pacotes você executa o seguinte comando: 

<script src="https://gist.github.com/rafaelschueng/1d8c14916d51563c99ca9159c00d318c.js"></script>

O Chocolatey é bem amigável. Você pode fazer muita coisa e ainda mais usando ele em conjunto ao Powershell. Você pode criar seus próprios scripts para automatizar caso você precise mudar de estação de trabalho ou computador pessoal, além disso o repositório do Chocolatey conta atualmente com 7680 pacotes até essa data de publicação deste post. 

Existe também uma versão gráfica do Chocolatey que é o “Chocolatey GUI”. Ele é um porte para facilitar as coisas pra quem não gosta de usar linha comando e quiser algo mais “user-friendly” porém para usar ele você tem que ter o Chocolatey instalado e por linha de comando instalar o “Chocolatey GUI“ através desse comando: 

<script src="https://gist.github.com/rafaelschueng/336db7b2a4fe2767736e4aa6e2042fbb.js"></script>

Após essa instalação basta você procurar por "Chocolatey" no menu iniciar e você verá a versõ gráfica do Chocolatey.
<br/>
<br/>

### **NPackd**
NPackd(Leia: “Unpacked”) é uma outra ferramenta de instalação automatizada de programas no Windows. Foi desenvolvida para ser um concorrente ao Chocolatey porém sendo mais semelhante ao Synaptic e distanciando da linha de comando. O NPackd é uma ferramenta ainda em desenvolvimento e tem algumas semelhanças em relação ao Chocolatey. Veja abaixo como instalar o Nodejs pelo no NPackd

<script src="https://gist.github.com/rafaelschueng/f7abdb75ce3f8db4c155d7d20314b9c5.js"></script>

Para instalar o NPackd você precisa executar o cmd.exe em modo adminstrador e em sequência digitar apenas essa linha de comando no CMD:

<script src="https://gist.github.com/rafaelschueng/460a717fdb3b2b893d7c3f2d441f6d46.js"></script>

E para procurar pacotes no repositório do NPackd você pode usar o seguinte comando:

<script src="https://gist.github.com/rafaelschueng/a24da0f1f41b232bc22ebd5a52d22dab.js"></script>

Se você quiser remover um pacote, você apenas usa o seguinte comando:

<script src="https://gist.github.com/rafaelschueng/16626cfcefd4787c426c5b91bfd8410b.js"></script>

Apesar de acima eu falar da linha de comando. O NPackd tem como trunfo a sua interface gráfica que é bem semelhante a outro software conhecido como Synaptic. 
No modo gráfico, você pode fazer qualquer alteração da mesma forma que faria usando o Npackd por linha de comando. Abaixo você pode conferir como realizar 

<iframe style="margin:0 auto;" width="100%" height="720" src="https://www.youtube.com/embed/ZLJ8sv6siKQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<br/>
<br/>

### **Scoop**
Scoop é um gestor de pacotes totalmente baseado em Powershell. Eu poderia descrever ele como um conjunto de scripts feitos para gerir pacotes instalados no sistema. É muito útil assim como o Chocolatey e o Npackd.
Scoop ainda está em desenvolvimento porém ele se tornou base para outro package manager que está sendo desenvolvido pela Microsoft. Ele tem funções básicas assim como o Npackd e o Chocolatey. Você pode instalar, remover, atualizar todos os seus pacotes assim como nos outros dois citados acima. Abaixo você pode ver como instalar o NodeJS usando o Scoop:

<script src="https://gist.github.com/rafaelschueng/0bbdad08dfdd3617d52fd819f49af832.js"></script>

Para instalar o Scoop você deve abrir o Powershell em modo administrador e então digitar só precisa digitar a seguinte linha de comando : 

<script src="https://gist.github.com/rafaelschueng/890ac0b863a477e43bccc8c2088b97a9.js"></script>

Para procurar um pacote no repositório você apenas usa o seguinte comando:

<script src="https://gist.github.com/rafaelschueng/e9bc93bc632676a4a0caa785106c3018.js"></script>

Para remover um pacote usando o Scoop você faz assim:

<script src="https://gist.github.com/rafaelschueng/5cf8a7a86fd51ee117c80b5974541d34.js"></script>

O Scoop é rústico de certa forma. Ele ainda está em desenvolvimento e isso significa que ele conta com pouquíssima coisa e tem apenas o modo texto para a manipulação dos pacotes, dependências e etc… É bem semelhante a gestores de pacote do universo Linux.
<br/>
<br/>

### **Winget**
Winget (É um acrônimo para <i>“Windows Package Manager Client”</i>). Ele é a nova aposta da Microsoft para os desenvolvedores e mantenedores de sistemas para instalar, manter e gerenciar pacotes. Ele foi desenvolvido usando todas ou senão quase todas as características dos gerenciadores de pacotes acima e está sendo escrito em C++, Python, C# e BASH(Sim amigos! A gente viveu o suficiente para ver a microsoft usar BASH em suas aplicações!). Seu repositório é baseado num repositório de manifests do Github e tem poucos softwares e só está disponível para os desenvolvedores do Windows. Não se sabe muito sobre ele e como ele vai funcionar no futuro mas sabe-se que ele está na versão 1.0 até agora e tem poucos pacotes se comparado aos três gestores acima. Você pode ver como é simples instalar um pacote como o NodeJS no exemplo abaixo:

<script src="https://gist.github.com/rafaelschueng/ca30b2db744d75445a25d19853b30bdc.js"></script>

Para instalar o Winget você tem que estar participando do programa de desenvolvimento do Windows conhecido como “Windows Insider” e instalar uma aplicação conhecida como “App Installer” na loja Microsoft Store --Que loucura né? Um gestor de programas dentro de um gestor de pacotes… INCEPTION!!!--

Para pesquisar um pacote no Winget basta apenas usar o seguinte comando: 

<script src="https://gist.github.com/rafaelschueng/b4be0d4414cd39a654e082d42a38cad1.js"></script>

Estranhamente o Winget não suporta remover pacotes instalados por ele mesmo. Portanto você terá que remover manualmente pelo painel de controle tudo aquilo que você instalou pelo Winget...

O Winget está em desenvolvimento e é uma das grandes promessas da Microsoft para este ano ainda. Você pode usar ele conforme demonstrado acima porém seu repositório é pequeno e está em constante mudança. É uma excelente ferramenta mesmo chegando bem tarde se comparado aos outros gestores de pacotes acima… Porém é uma ferramenta oficial da própria Microsoft e tende a ser adotada com muito mais força do que os outros gestores de pacotes. 
<br/>
<br/>

### **Qual é o melhor ?**
Bem, conforme você leu acima. Todos possuem funções básicas para instalar, remover, atualizar e gerir os pacotes de forma bem elegante, segura e sem quaisquer dores de cabeça que você possa ter. Todos são bons, porém eu recomendaria você visitar os repositórios de ambos e verificar se a coleção de software lhe atende. Eu pessoalmente trabalhei muito com o Chocolatey porquê sempre tive muita facilidade para instalar tudo que eu preciso com ele e seu repositório com mais de 7.000 programas e focado desenvolvedores em suma maioria, facilita meu trabalho diário. Eu não tenho nenhuma reclamação contra essa gestor de pacotes, aliás… Eu acho que ele deveria ter sido adotado pela Microsoft bem antes deles desenvolverem o Winget, já que é um programa bem conhecido na própria comunidade .NET e entre os usuários do Nuget [(“because everyone loves Chocolatey nougat”)](https://github.com/chocolatey/choco/wiki/History). Enfim, você pode usar um gestor de pacotes ao seu gosto e que lhe atenda bem.