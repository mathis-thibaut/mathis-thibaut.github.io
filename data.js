/* Content data for the portfolio SPA. Kept as a separate script for readability. */
window.PORTFOLIO_DATA = {

  years: [
    { id: "1", label: "1ère année", sub: "BTS SIO — SISR · 2023 / 2024" },
    { id: "2", label: "2ème année", sub: "BTS SIO — SISR · 2024 / 2025" },
    { id: "3", label: "Bachelor ASRBD", sub: "Bachelor SysOps — ASRBD (obtenu) · 2025 / 2026" },
    { id: "alt", label: "Alternance", sub: "Patoux Equipagri · depuis 2025" }
  ],

  projects: [
    // ---------------- YEAR 1 ----------------
    {
      id: "blog", year: "1", title: "Blog HTML5 / CSS3", tag: "Développement web",
      stack: ["HTML5", "CSS3"],
      summary: "Premier site construit from scratch pour le module DEVW103 : structure sémantique et mise en forme CSS.",
      sections: [
        { h: "Contexte", b: "Premier module de développement web de la formation (DEVW103 — HTML5 &amp; CSS3, les fondamentaux). L'exercice consistait à concevoir un blog personnel entièrement à la main, sans framework, pour assimiler la structure d'un document HTML5 et la sémantique des balises (header, main, article, section, nav)." },
        { h: "Réalisation", b: "Un blog thématique autour du football (\"Ligue des Champignons\") avec une page d'accueil listant plusieurs articles sous forme de cartes, une page d'article dédiée avec vidéo intégrée, une mise en page en grille CSS et une feuille de style séparée (style.css). Les balises meta (auteur, description), le favicon et la structure de &lt;head&gt; ont été travaillés pour respecter les bonnes pratiques vues en cours." }
      ],
      code: { lang: "html", label: "index.html — extrait", content: `<!DOCTYPE html>
<html>
<head>
  <title>Ligue des champignons</title>
  <meta charset="UTF-8">
  <meta name="auteur" content="Mathis">
  <meta name="description" content="Football">
  <link rel="icon" href="ldc.jpg">
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>LIGUE DES CHAMPIGNONS</h1>
  <main>
    <article>
      <div class="grid">
        <div class="Block1">
          <h2>PSG-Dortmund</h2>
          <p>Ce soir est un jour spécial, les premiers matchs
             de champions league, rendez-vous 21H...</p>
          <a href="article.html">Lire l'article</a>
        </div>
        <!-- ... Block2, Block3 ... -->
      </div>
    </article>
  </main>` },
      images: [
        { src: "blog-home.png", caption: "Page d'accueil du blog \"Ligue des champignons\" — grille d'articles en CSS" },
        { src: "blog-article.png", caption: "Page article avec vidéo intégrée" }
      ]
    },
    {
      id: "bdd", year: "1", title: "Circuits touristiques", tag: "Base de données",
      stack: ["SQL", "MCD/MLD", "PHP"],
      summary: "Modélisation d'une base de données pour une agence de voyage, puis application de gestion des réservations.",
      sections: [
        { h: "Contexte", b: "Projet transversal de conception de base de données : modéliser le système d'information d'une agence de voyage (\"La Pat' Patrouille\") proposant des circuits touristiques composés de plusieurs étapes (lieux à visiter), avec gestion des réservations clients." },
        { h: "Modélisation", b: "MCD puis MLD à partir d'un schéma relationnel imposé : Circuit (identifiant, villes de départ/arrivée, durée, prix), Etape (circuit, ordre, lieu, date, durée) et LieuAVisiter (nom, ville, prix de visite). Écriture des requêtes SQL de création, peuplement et interrogation : recherche de circuits par budget/dates/places disponibles, calcul du prix total d'un circuit (inscription + visites), suppression en cascade d'une étape avec renumérotation." },
        { h: "Application", b: "Développement d'une IHM avec authentification différenciée client / administrateur : les clients consultent et réservent des circuits (cartes avec photo, description et bouton \"Réserver\"), les administrateurs gèrent (CRUD) les circuits, étapes, lieux et comptes clients via des formulaires dédiés (modification d'utilisateur, ajout de circuit)." }
      ],
      images: [
        { src: "bdd-home.png", caption: "Page d'accueil \"La Pat' Patrouille\" — catalogue de circuits avec actions administrateur" },
        { src: "bdd-modif-user.png", caption: "Formulaire de modification d'un compte utilisateur" },
        { src: "bdd-connexion.png", caption: "Page de connexion de l'application" },
        { src: "bdd-reservation.jpg", caption: "Carte de réservation dans l'application — circuit, description, suppression de réservation" }
      ]
    },
    {
      id: "sisr", year: "1", title: "Étude de cas EPSIMediLab", tag: "Architecture & sécurité",
      stack: ["Active Directory", "VLAN", "Architecture 3-tiers"],
      summary: "Audit et proposition d'évolution de l'architecture d'un laboratoire médical fictif : web, annuaire, réseau et supervision.",
      sections: [
        { h: "Contexte", b: "EPSIMediLab, leader européen du prélèvement médical, souhaite revoir son système d'information : son site web (hébergé en DMZ, LAMP, sans chiffrement) a subi plusieurs attaques (brute force base de données, déni de service HTTP, vol de cookies, brute force SSH), et son annuaire Active Directory (domaine EPSIMEDILAB.LAN) regroupe tous les utilisateurs dans une seule unité d'organisation, rendant impossible toute politique de sécurité fine." },
        { h: "Évolutions proposées", b: "Refonte de l'architecture web en 3 tiers (reverse proxy, serveurs web WordPress, SGBDR) avec répartition de charge, durcissement de MariaDB (mysql_secure, filtrage des connexions) et remplacement d'Apache par un service sécurisé (certificat, blocage des brute force, détection de fuzzing). Côté annuaire : création d'unités d'organisation par service (Direction, Comptabilité, Informatique, Juridique, Laboratoire, R&amp;D, RH) et de groupes de sécurité selon l'organigramme, script d'automatisation de la création des comptes utilisateurs avec contrôles et journalisation. Côté réseau : segmentation en VLAN (GLPI, Zabbix, Veeam, Active Directory, Bastion, VoIP) pour contrer les attaques constatées et mise en place d'une supervision Zabbix + centralisation des logs (Graylog)." }
      ],
      images: [
        { src: "sisr-network-diagram.png", caption: "Architecture cible proposée : reverse proxy, VLAN par service, GLPI, Zabbix, Veeam, Graylog" },
        { src: "sisr-foret-ad.jpg", caption: "Réorganisation de l'annuaire Active Directory par unités d'organisation (EPSIMEDILAB.LAN)" },
        { src: "sisr-rack.jpg", caption: "Baie réseau du laboratoire d'infrastructure de l'EPSI" }
      ]
    },
    {
      id: "hotel", year: "1", title: "Réservation d'hôtel", tag: "Infra web & développement",
      stack: ["PHP", "MySQL", "Debian", "Apache2", "BIND9"],
      summary: "Application de réservation en ligne déployée sur une infrastructure Debian complète, montée de zéro.",
      sections: [
        { h: "Contexte", b: "Projet transversal en binôme dev / réseau : développer et héberger un site de réservation de chambres d'hôtel, de la base de données jusqu'à l'infrastructure serveur." },
        { h: "Développement", b: "Connexion et inscription, page d'accueil avec catalogue de chambres (standard, familiale, luxueuse), réservation via une fenêtre modale (nom, email, date souhaitée) avec confirmation visuelle, et un espace \"Mes réservations\" listant les réservations en cours avec possibilité d'annulation." },
        { h: "Infrastructure", b: "Déploiement sur une architecture Debian dédiée : serveur DNS (bind9), serveur web (Apache2 + PHP), serveur de base de données (MariaDB + phpMyAdmin), avec une architecture réseau schématisée sous Packet Tracer (routeur, switch, pare-feu ASA, serveurs DHCP/DNS/BDD)." }
      ],
      images: [
        { src: "hotel-packettracer.png", caption: "Architecture réseau du projet (Packet Tracer) : routeur, switch, pare-feu, serveurs DNS/BDD" },
        { src: "hotel-inscription.png", caption: "Maquettes des pages Inscription / Connexion" },
        { src: "hotel-chambre.jpg", caption: "Catalogue de chambres — chambre standard" },
        { src: "hotel-reservations.jpg", caption: "Page \"Mes réservations\" de l'application, avec détail de la chambre réservée" }
      ]
    },
    {
      id: "agenda", year: "1", title: "EPSIGENDA", tag: "Développement web",
      stack: ["PHP", "MySQL", "Git"],
      summary: "Agenda collaboratif en équipe : groupes, événements, profils, avec workflow Git front/back.",
      sections: [
        { h: "Contexte", b: "Projet transversal en équipe : concevoir un agenda partagé permettant à des groupes (teams) d'organiser des événements, avec gestion fine des rôles et des droits." },
        { h: "Modélisation", b: "Modèle logique de données structuré autour de 5 entités (users, roles, teams, agendas, events) reliées par des tables d'association (users_has_roles, users_has_teams, teams_has_agendas, events_concerns_agendas...), permettant à un agenda d'appartenir soit à un utilisateur, soit à une équipe." },
        { h: "Réalisation", b: "Application PHP/MySQL avec authentification, gestion de groupes, création d'événements et parcours \"mot de passe oublié\". Développement organisé en deux dépôts GitHub (back PHP et front) avec historique de commits et contributeurs visibles, un board de suivi Trello (colonnes Could/Should/Must/To Do/En cours/Test/Terminé) et des conventions de code partagées en équipe." }
      ],
      images: [
        { src: "agenda-mld.jpg", caption: "Modèle Logique de Données de l'agenda collaboratif (users, teams, agendas, events)" },
        { src: "agenda-trello.png", caption: "Board Trello de suivi du projet EPSIGENDA" },
        { src: "agenda-github.png", caption: "Dépôt GitHub EPSIGENDA — arborescence, contributeurs et historique de commits" },
        { src: "agenda-forgot-password.jpg", caption: "Écran \"Mot de passe oublié\" de l'application EPSIGENDA" },
        { src: "agenda-code.jpg", caption: "Extrait du code back-end (mise à jour du mot de passe utilisateur, PHP)" }
      ]
    },
    {
      id: "starfilm", year: "1", title: "StarFilm", tag: "Développement Python",
      stack: ["Python", "SQLAlchemy", "SWAPI", "SQLite"],
      summary: "Sélecteur de films Star Wars consommant l'API SWAPI, avec favoris et statistiques administrateur.",
      sections: [
        { h: "Contexte", b: "TP Python en équipe de 3-4 : construire un outil pour les fans de Star Wars, avec un accent fort mis sur l'organisation collaborative (conventions de nommage, gestion de versions, documentation, revues de code) autant que sur le résultat technique." },
        { h: "Réalisation", b: "Application en ligne de commande (menu ASCII-art \"StarFilm\") consommant l'API publique SWAPI pour lister les films et personnages, avec ajout/suppression de favoris (confirmation à chaque étape), authentification par utilisateur, et un rôle administrateur permettant de consulter des statistiques (films les plus ajoutés en favoris, triés par popularité). Persistance via SQLite et un ORM SQLAlchemy, avec des conventions de code formalisées (CamelCase pour les classes, snake_case pour les fonctions, docstrings Google) et un versionnage sémantique (X.Y.Z), suivi sur un board Trello (Backlog/Conception/À faire/En cours/Révision du code/Test/Terminé)." }
      ],
      links: [{ label: "GitHub", url: "https://github.com/DCodeProg/StarFilm" }],
      images: [
        { src: "starfilm-menu.png", caption: "Menu principal en ligne de commande (ASCII art) : Films, Characters, Authentification, Credits" },
        { src: "starfilm-trello.jpg", caption: "Board Trello de suivi du projet (colonnes En cours / Révision / Test / Terminé)" }
      ]
    },
    {
      id: "wordpress", year: "1", title: "Le BurgHouse", tag: "Développement WordPress",
      stack: ["WordPress"],
      summary: "Site vitrine pour un restaurant fictif : accueil, menu, commande, réservation et contact.",
      sections: [
        { h: "Réalisation", b: "Site vitrine complet pour un restaurant (\"Le BurgHouse\") réalisé sous WordPress : page d'accueil avec hero et présentation, menu avec articles, prix et badges promotionnels, formulaire de commande, formulaire de réservation de table et page de contact. L'objectif du module était de prendre en main un CMS et ses mécanismes de thème, de pages et de formulaires plutôt que de coder from scratch." }
      ],
      images: [
        { src: "burghouse-home.jpg", caption: "Page d'accueil du site \"Le BurgHouse\"" },
        { src: "burghouse-menu.png", caption: "Page menu — burgers et ailes de poulet, avec badge promotion" },
        { src: "burghouse-reservation.png", caption: "Formulaire de réservation de table" },
        { src: "burghouse-contact.png", caption: "Formulaire de contact" }
      ]
    },
    {
      id: "noriap", year: "1", title: "Stage Noriap", tag: "Stage — Déploiement de parc",
      stack: ["Active Directory", "WSUS", "Masterisation"],
      summary: "6 semaines chez Noriap : remplacement de 140 postes sur une centaine de sites agricoles.",
      sections: [
        { h: "Contexte", b: "Stage de 6 semaines (mai-juin 2024) chez Noriap, coopérative agricole du nord de la France (environ 1200 salariés, silos et sites répartis sur 8 régions). L'entreprise déployait un nouveau logiciel de pesée (\"Kheris\", édité par DPK Pesage) sur ses ponts-bascules, ce qui imposait de remplacer les ordinateurs de la centaine de sites de collecte incompatibles avec le nouvel outil." },
        { h: "Mission", b: "Déploiement de parc en 3 étapes : masterisation des postes (clonage, intégration au domaine), configuration individuelle dans l'Active Directory (création des comptes, attribution aux bons groupes/OU selon le site et l'activité, déploiement de Citrix, TeamViewer, migration vers le bon serveur WSUS) puis déploiement terrain (changement de matériel, adaptation aux spécificités de chaque site — écrans VGA à remplacer, imprimantes réseau, douchettes). Un incident logiciel (l'antivirus Sentinel corrompu par la masterisation) a bloqué le déploiement pendant 2-3 jours avant d'être diagnostiqué et résolu par désinstallation/réinstallation." },
        { h: "Second passage", b: "Un second stage plus court (1 mois, janvier 2025) a suivi chez Noriap, toujours en tant que technicien réseau, pour poursuivre la préparation de postes (clé bootable, inventaire), la configuration et le rangement dans l'Active Directory, l'installation sur site et le support/maintenance informatique via GLPI — confirmant la relation de confiance construite avec l'entreprise dès le premier stage." }
      ],
      images: []
    },

    // ---------------- YEAR 2 ----------------
    {
      id: "asterisk", year: "2", title: "Téléphonie ToIP/VoIP", tag: "Téléphonie IP",
      stack: ["Asterisk", "SIP", "RTP"],
      summary: "Étude et configuration d'un PABX open-source Asterisk : protocole SIP, comptes, plan de numérotation, codecs.",
      sections: [
        { h: "Contexte", b: "Approfondissement de la téléphonie sur IP : différencier VoIP et ToIP, comprendre les rôles de PABX/iPABX, SIP et RTP, puis mettre en œuvre un serveur de téléphonie open-source (Asterisk)." },
        { h: "Réalisation", b: "Configuration de transports SIP chiffrés (TLS, certificats) et de comptes utilisateurs (endpoints PJSIP) avec authentification, ainsi qu'un plan de numérotation dans extensions.conf : appel direct entre postes, redirection vers messagerie vocale après non-réponse, boîtes vocales par extension — le tout édité directement en ligne de commande (nano) sur le serveur. Étude comparative des codecs audio (G711, G723.1, G729, GSM...) selon trois critères : charge processeur, bande passante consommée et qualité perçue (score MOS)." }
      ],
      images: [
        { src: "asterisk-pjsip.jpg", caption: "Configuration PJSIP (transport TLS, endpoints 501/502) dans pjsip.conf" },
        { src: "asterisk-extensions.jpg", caption: "Plan de numérotation Asterisk — redirection vers messagerie vocale (extensions.conf)" }
      ]
    },
    {
      id: "bdd2", year: "2", title: "Conception & administration BDD", tag: "Base de données",
      stack: ["SQL", "Administration SGBD"],
      summary: "Approfondissement de la conception, de l'exploitation et de l'administration d'un SGBD relationnel.",
      sections: [
        { h: "Contexte", b: "Deuxième projet transversal de bases de données, prolongeant les acquis de 1ère année vers l'administration : droits d'accès, exploitation courante et fiabilité d'un système de gestion de base de données relationnel, en préparation des sujets d'administration et de sécurité de bases de données abordés en 3ème année (MSPR NordTransit)." }
      ],
      images: []
    },
    {
      id: "workshop2", year: "2", title: "Workshop — mini-jeu web", tag: "Développement front-end",
      stack: ["HTML", "CSS", "JavaScript"],
      summary: "Jeu interactif avec système de quiz, développé en JavaScript vanilla.",
      sections: [
        { h: "Réalisation", b: "Atelier de développement front-end : un mini-jeu web interactif (mécanique de \"porte\" à ouvrir) couplé à un système de quiz en plusieurs manches (4 rounds), entièrement en HTML/CSS/JavaScript sans framework — l'occasion de manipuler le DOM, les événements utilisateur et les animations CSS sur une suite de pages liées (accueil, histoire, porte, quiz)." }
      ],
      images: []
    },

    // ---------------- YEAR 3 / B3 / MSPR ----------------
    {
      id: "veille", year: "3", title: "Veille techno — IA & cybersécurité", tag: "MSPR TPRE605 · Bloc E6.5",
      stack: ["Feedly", "Notion", "Discord"],
      summary: "Dispositif de veille structuré sur l'IA générative au service de la cybersécurité, en équipe de 4.",
      team: "Équipe : Mathis Thibaut, Eliot Kondryk, Julien Carbonell, Quentin Leroy",
      sections: [
        { h: "Sujet", b: "Depuis 2022, les grands modèles de langage redessinent les métiers de la sécurité : outils défensifs assistés par IA (Microsoft Security Copilot, CrowdStrike Charlotte AI, Google DeepMind) d'un côté, industrialisation du phishing et du malware polymorphe par les attaquants de l'autre. L'équipe a mis en place un dispositif de veille technologique, réglementaire, stratégique, sectorielle et digitale sur ce thème, avec un dossier individuel rédigé par chacun (le mien portant spécifiquement sur \"L'IA générative au service de la cybersécurité\")." },
        { h: "Méthode", b: "Écosystème \"un outil par fonction\" : Feedly pour l'agrégation principale (18 sources dans un flux dédié), Google Alerts (3 alertes quotidiennes) pour capter les signaux faibles hors flux RSS, Inoreader en filtrage de secours par règles regex, Notion comme base de connaissances (fiche Kanban normalisée par article) et Pocket pour la lecture différée. Chaque source est qualifiée sur une grille à 5 critères pondérés (pertinence 30 %, crédibilité 25 %, originalité 20 %, fraîcheur 15 %, actionnabilité 10 %), avec un seuil de rétention à 60/100 : environ 10 % des articles captés franchissent ce seuil, et 3 % seulement sont finalement intégrés au dossier, après triangulation (2 sources minimum de nature différente)." },
        { h: "Résultats", b: "21 sources actives suivies au total, dont 15 anglophones (71,4 %, contre 60 % exigés) — The Hacker News, BleepingComputer, Dark Reading, Krebs on Security, SANS ISC, CISA, OWASP, Google DeepMind, complétées par LeMagIT, Silicon.fr et CERT-FR côté francophone — pour 161 articles captés sur le feed dédié. Cinq tendances lourdes identifiées (généralisation des copilots de sécurité, automatisation du support niveau 1 des SOC, industrialisation du phishing par IA, convergence Zero Trust/IA, renforcement réglementaire avec l'AI Act, NIS2 et DORA) et cinq signaux faibles à fort potentiel disruptif (agents IA autonomes, shadow AI en entreprise, empoisonnement de modèles, prompt injection — référencée dans l'OWASP Top 10 for LLM Apps, deepfakes vocaux ciblés, illustrés par l'incident Arup en 2024 : 25 M$ détournés via un deepfake vidéo lors d'une visioconférence), documentés dans une matrice AFOM et déclinés en 6 recommandations hiérarchisées (charte anti-shadow-AI, formation au social engineering assisté par IA, POC copilot sécurité de 3 mois, audit OWASP LLM Top 10, conformité AI Act, stratégie de souveraineté avec Mistral AI et OVHcloud/Scaleway)." }
      ],
      images: []
    },
    {
      id: "ntl1", year: "3", title: "NTL-SysToolbox", tag: "MSPR TPRE511 · Infrastructure & outillage",
      stack: ["VMware ESXi", "pfSense", "Active Directory", "MySQL", "Python", "Grafana"],
      summary: "Infrastructure virtualisée pour NordTransit Logistics et outil CLI Python de diagnostic, sauvegarde et audit.",
      team: "Équipe : Eliot Kondryk, Julien Carbonell, Quentin Leroy, Mathis Thibaut",
      sections: [
        { h: "Contexte", b: "NordTransit Logistics (entreprise fictive du cas d'étude) exploite un WMS (Warehouse Management System) sur 4 sites (Lille siège, Lens, Valenciennes, Arras) plus un cross-dock saisonnier, avec des pics d'activité en réception le matin et en expédition l'après-midi. La mission : concevoir une infrastructure virtualisée sécurisée capable d'héberger les services critiques (Active Directory, DNS, MySQL, WMS), et outiller les administrateurs pour la maintenance quotidienne." },
        { h: "Infrastructure & choix techniques", b: "Hyperviseur VMware ESXi 8.0.3 choisi (gratuit, réalisme professionnel) plutôt que Proxmox, par souci de maîtrise d'équipe ; pfSense 2.6/2.7 plutôt que Cisco/Fortinet pour rester open-source et sans coût de licence ; Active Directory sur Windows Server 2019 (licences d'évaluation) plutôt que Samba 4, faute d'expertise Linux suffisante en équipe ; MySQL Community plutôt qu'Oracle. L'ensemble héberge deux contrôleurs de domaine redondants (DC01 192.168.10.10 / DC02 192.168.10.11), un serveur MySQL pour le WMS, un pare-feu pfSense et une stack de supervision Grafana (192.168.10.13). Adressage en séparation WAN (10.10.10.0/8) / LAN (192.168.10.0/24), avec un plan de segmentation en 4 VLAN prévu en évolution (10 Serveurs, 20 Utilisateurs, 30 VoIP, 99 Management)." },
        { h: "NTL-SysToolbox", b: "Outil en ligne de commande développé en Python (choisi pour sa portabilité multi-OS face à C#/Java), structuré en menu interactif, avec trois modules : diagnostic rapide de la disponibilité d'AD, du DNS et de MySQL pour réduire le temps de résolution d'incident (MTTR) ; sauvegarde automatisée de la base MySQL du WMS (dump horodaté, rapport JSON) ; audit d'obsolescence réseau qui scanne le sous-réseau 192.168.1.0/24 et classe chaque hôte par niveau de risque (comparaison à une base de cycle de vie OS) avec export CSV. Code source et documentation publiés sur GitHub, avec une vidéo de démonstration des trois modules." }
      ],
      links: [
        { label: "GitHub", url: "https://github.com/chtipilou/MSPR-NTL" },
        { label: "Démo vidéo", url: "https://youtu.be/HsLQ6hjGLqQ" }
      ],
      images: [
        { src: "ntl1-network-diagram.jpg", caption: "Architecture de l'infrastructure NTL-SysToolbox : pfSense, contrôleurs de domaine, Grafana, base WMS" },
        { src: "ntl1-ad-replication.jpg", caption: "Vérification de la réplication Active Directory (repadmin /showrepl)" },
        { src: "ntl1-diagnostic.jpg", caption: "NTL-SysToolbox — module de diagnostic automatique (AD, Grafana, WMS-DB, WMS-APP)" },
        { src: "ntl1-backup.jpg", caption: "NTL-SysToolbox — sauvegarde automatisée de la base MySQL du WMS" },
        { src: "ntl1-audit.jpg", caption: "NTL-SysToolbox — rapport d'audit d'obsolescence réseau, classé par niveau de risque" }
      ]
    },
    {
      id: "ntl2", year: "3", title: "Architecture cible multi-sites", tag: "MSPR TPRE512 · Réseau & cloud hybride",
      stack: ["VLAN / QoS", "VPN IPsec", "ESXi HA", "Azure", "3CX"],
      summary: "Conception d'une architecture cible résiliente pour NordTransit Logistics : réseau, virtualisation HA et PRA Azure.",
      team: "Équipe : Eliot Kondryk, Julien Carbonell, Quentin Leroy, Mathis Thibaut",
      sections: [
        { h: "Cahier des charges", b: "La direction de NordTransit Logistics mandate l'équipe pour proposer une architecture cible moderne et sécurisée autour de 6 piliers : sécurité et interconnexion des sites (VPN site-à-site chiffré, pare-feu centralisé), réseau local et qualité de service (VLAN voix/données/serveurs/management, priorisation de la VoIP), virtualisation en haute disponibilité, cloud hybride avec Azure comme plan de reprise d'activité, exploitabilité (supervision, guide de dépannage N1/N2) et preuve de concept." },
        { h: "Réseau, VPN & téléphonie", b: "Segmentation VLAN par site (VLAN 10 serveurs, 20 utilisateurs, 30 VoIP, 99 management), avec un VPN IPsec site-à-site Lille ↔ Lens effectivement établi et testé en conditions réelles : Phase 1 IKEv2 (AES 256 / SHA2-256 / MODP 2048) active depuis plus d'1h30 lors du relevé, Phase 2 associant les sous-réseaux 192.168.20-22.0/24 à 192.168.10-12.0/24, avec plusieurs dizaines de milliers de paquets échangés dans les deux sens — et un ping applicatif du poste de Lens vers le contrôleur de domaine de Lille sans aucune perte. Téléphonie centralisée sur 3CX Cloud (SBC dédiés par site, SRV-3CX-Lille en VLAN 30) plutôt qu'un PABX physique par site. Extension vers Azure (Landing Zone 10.10.0.0/16, groupe de ressources RG-NTL-FINAL, passerelle VPN dédiée) pour l'externalisation des sauvegardes et un contrôleur de domaine de secours — tunnel paramétré des deux côtés mais jamais totalement mis en production, le pare-feu de l'établissement bloquant les ports IPsec (UDP 500/4500, ESP) nécessaires depuis le réseau de l'école." },
        { h: "Supervision & preuve de concept", b: "Choix de Grafana (OSS, plus simple à déployer que Splunk) pour la supervision, avec des jobs Prometheus dédiés par site (pfsense_lille, pfsense_lens) et des sondes Blackbox Exporter sur les services critiques (3CX, passerelles). Trois POC ont validé la conception : extinction brutale du contrôleur de domaine principal → bascule automatique sur le second sans coupure ; accès croisé Lens→siège et siège→sous-réseau Azure fonctionnel ; saturation volontaire de la bande passante LAN → les appels 3CX restent stables grâce au marquage QoS (DSCP/802.1p), vérifié à l'analyseur de trames. Un guide de dépannage N1/N2 dédié à la dégradation de la qualité ToIP a également été rédigé (vérification PoE et VLAN 30 en N1, statut IPsec et Traffic Grapher pfSense en N2, escalade opérateur SIP en N3)." }
      ],
      images: [
        { src: "ntl2-network-diagram.jpg", caption: "Architecture cible multi-sites : pfSense Lille/Lens, VPN IPsec, extension Azure et 3CX Cloud" },
        { src: "ntl2-pfsense.jpg", caption: "Tableau de bord du pare-feu pfSense (site Lille)" },
        { src: "ntl2-grafana-lille.jpg", caption: "Supervision Grafana — pare-feu du site de Lille" },
        { src: "ntl2-grafana-lens.jpg", caption: "Supervision Grafana — pare-feu du site de Lens" }
      ]
    },
    {
      id: "ntl3", year: "3", title: "Base de données WMS", tag: "MSPR TPRE623 · Bloc E6.3/E6.4",
      stack: ["MySQL", "Performance", "RTO/RPO"],
      summary: "Conception, sauvegarde et optimisation de la base de données du WMS de NordTransit Logistics — chef de projet / DBA.",
      team: "Équipe : Mathis Thibaut (chef de projet / DBA), Julien Carbonell, Eliot Kondryk, Quentin Leroy",
      sections: [
        { h: "Modèle de données", b: "La base WMS gère les flux physiques de marchandises sur 4 sites et un cross-dock saisonnier ; toute indisponibilité entre 5h30 et 18h30 arrête immédiatement la réception et l'expédition. Modélisation en 6 entités (Clients, Sites, Articles, Localisations, Stocks, Mouvements) normalisées en 3NF, avec des clés étrangères en ON DELETE RESTRICT / ON UPDATE CASCADE, une colonne volume_m3 générée automatiquement (GENERATED ALWAYS AS) et 7 index nommés justifiés par les requêtes dominantes. La table Mouvements est partitionnée par plage mensuelle (PARTITION BY RANGE) pour préserver les performances sur l'historique. MySQL 8.0 Community a été retenu face à PostgreSQL 15 et MariaDB 10.11, notamment pour sa compatibilité directe avec le connecteur PyMySQL déjà utilisé par NTL-SysToolbox." },
        { h: "Continuité de service & sécurité", b: "Objectif RTO 1h / RPO 15 min sur la plage critique 5h30-18h30. Stratégie de sauvegarde à deux niveaux automatisée par cron : dump complet hebdomadaire (mysqldump --single-transaction, vérification SHA-256, rétention 30 jours, copie vers un NAS externe) et sauvegarde incrémentale des binary logs toutes les 15 minutes. Un script de test de restauration s'exécute automatiquement le premier dimanche du mois sur une base de test, avec comptage des lignes restaurées. Haute disponibilité par réplication MySQL GTID Master/Replica semi-synchrone (lag cible &lt; 5 s), et sécurité des accès via 6 comptes MySQL nommés à privilèges minimaux (application, lecture seule, sauvegarde, réplication, admin), connexions restreintes par IP et chiffrées SSL, mots de passe expirant tous les 180 jours. Une note à la Direction chiffre l'impact d'un scénario ransomware à 50 000 €/jour et jusqu'à 240-300 collaborateurs bloqués, justifiant ces investissements." },
        { h: "Optimisation de requêtes", b: "Analyse des requêtes les plus fréquentes avec EXPLAIN avant/après, sur un jeu de test de 500 000 articles et 2 000 000 mouvements généré par script (Faker + PyMySQL). Sur la consultation de stock par article/site, un index composite (article_id, site_id, quantité) fait passer le temps de réponse de 48 ms à 0,3 ms — un gain d'environ ×160. La recherche par SKU pour les scanners RF passe de 120 ms à moins d'1 ms (index couvrant), le rapport des mouvements du jour de 2,1 s à 85 ms (×25, grâce au partitionnement mensuel), et le rapport de stock par client de 1,8 s à moins de 5 ms (×360, via une table de cache rafraîchie toutes les 30 minutes par une procédure stockée). Un test de charge simulant le pic d'activité de 5h30 (300 insertions simultanées) a mesuré un débit d'insertion en hausse de 73 % et une latence des lectures concurrentes réduite de 92 % après retuning des paramètres MySQL (buffer pool porté de 128 Mo à 4 Go)." }
      ],
      code: { lang: "sql", label: "Exemple d'optimisation — consultation de stock", content: `-- Requête la plus fréquente : stock d'un article sur un site
SELECT s.quantite, s.lot, l.code_emplacement, l.type_emplacement
FROM stocks s
JOIN localisations l ON s.localisation_id = l.localisation_id
WHERE s.article_id = 1042 AND s.site_id = 2 AND s.quantite > 0;

-- AVANT : full table scan, 48 ms (jeu de test : 500 000 articles)

CREATE INDEX idx_stock_article_site
    ON stocks (article_id, site_id, quantite);

-- APRÈS : 0,3 ms — gain ≈ x160 (plan EXPLAIN : type=ALL → type=ref)` },
      images: [
        { src: "formatis-generate.png", caption: "Script de génération d'un jeu de données de test (Python)" }
      ]
    },
    {
      id: "virtu", year: "3", title: "Virtualisation avancée", tag: "Bloc B01 · ESXi / vCenter / XenServer",
      stack: ["VMware ESXi", "vCenter", "XenServer"],
      summary: "Série de TP sur l'optimisation d'infrastructures virtualisées : CPU, mémoire, stockage, réseau et continuité de service.",
      sections: [
        { h: "Déploiement vCenter & ESXi", b: "Prise en main de VMware vCenter en environnement de virtualisation imbriquée (nested virtualization) : renommage et configuration IP/DNS/hostname d'un hôte ESXi, création d'un compte d'administration dédié, activation SSH, ajout de rôles en lecture seule, puis installation et rattachement de vCenter à l'hôte." },
        { h: "Optimisation des performances", b: "Travail approfondi sur les leviers de performance d'un hyperviseur : activation Intel VT-x/AMD-V au BIOS et désactivation des C-states d'économie d'énergie en production, gain réel de l'Hyperthreading estimé à 10-30 % (et non 100 %, les cœurs logiques partageant les ressources physiques), comparatif des modes de provisionnement disque (Thin, Thick Lazy Zeroed, Thick Eager Zeroed — ce dernier offrant les meilleures performances I/O), et choix systématique de la carte réseau virtuelle VMXNET3 plutôt qu'E1000. Étude des mécanismes de gestion mémoire en cas de sur-engagement (ballooning, memory compression, NUMA/CPU affinity) et des seuils d'alerte recommandés en production (CPU Ready ≥ 5 %, latence de stockage ≥ 20 ms, CPU hôte ≥ 90 %)." },
        { h: "Répartition de charge & continuité", b: "Étude du Storage I/O Control et du Network I/O Control (régulation dynamique par latence de datastore et classes de trafic), du DRS/SDRS pour l'équilibrage automatique CPU/mémoire/stockage entre hôtes (vMotion), et des mécanismes de reprise après sinistre : vSphere Replication pour un RPO faible par réplication continue au niveau de l'hyperviseur, couplé à Site Recovery Manager pour orchestrer le basculement et le retour à la normale. Découverte complémentaire de XenServer 8 et de sa console XenCenter (déploiement d'une VM Rocky Linux, tests de snapshot/restauration et de haute disponibilité avec redémarrage automatique)." }
      ],
      images: []
    },
    {
      id: "neo4j", year: "3", title: "Base de données orientée graphe", tag: "TP Neo4j · Analyse de données",
      stack: ["Neo4j", "Cypher", "Docker", "Jupyter"],
      summary: "Modélisation d'un jeu de données cinématographique en graphe et analyse via le langage Cypher.",
      sections: [
        { h: "Contexte", b: "TP d'exploration des bases de données NoSQL orientées graphe, à partir du jeu de données public \"The Movies Dataset\" : modéliser le marché cinématographique (films, personnes, genres, sociétés de production) comme un graphe plutôt qu'un schéma relationnel, pour en tirer des analyses de type réseau difficiles à exprimer en SQL." },
        { h: "Modélisation & déploiement", b: "Schéma en 8 types de nœuds (Movie, Person, Genre, Keyword, ProductionCompany, Language, Country, MovieCollection) reliés par des relations typées et porteuses de propriétés, par exemple (:Person)-[:WORKED_IN {job:\"Director\"}]->(:Movie) ou (:Person)-[:STARRED_IN]->(:Movie). Environnement conteneurisé avec Docker Compose (Neo4j + Jupyter Notebook), import des données via cypher-shell, exploration à la fois dans Neo4j Browser et en Python via un notebook." },
        { h: "Requêtes & conclusion", b: "Dix requêtes Cypher progressives, de la simple liste des genres jusqu'à des analyses de réseau plus complexes : top 20 des acteurs les plus prolifiques du genre Action, films où deux acteurs donnés ont co-joué, sociétés de production travaillant avec les dix réalisateurs Action les mieux notés. Le retour d'expérience met en avant la supériorité de Cypher sur SQL pour ce type de requête de co-apparition (pas de jointures multiples à écrire), la principale difficulté résidant dans la maîtrise des agrégations (WITH, COUNT) propres au langage." }
      ],
      images: []
    },
    {
      id: "zabbixglpi-devops", year: "3", title: "Supervision & ITSM as Code", tag: "Projet Zabbix/GLPI · Ansible",
      stack: ["Ansible", "Zabbix", "GLPI", "API REST", "Python"],
      summary: "Déploiement industrialisé (Infrastructure-as-Code) d'une stack de supervision Zabbix intégrée à GLPI, entièrement scriptée en Ansible.",
      sections: [
        { h: "Contexte", b: "Projet d'école distinct de l'alternance : là où le déploiement chez Patoux Equipagri s'est fait manuellement, l'objectif ici était d'industrialiser entièrement l'installation et l'intégration de Zabbix 6.4 et GLPI 10.0.10 via Ansible, pour démontrer une approche Infrastructure-as-Code plutôt qu'une exploitation manuelle des outils." },
        { h: "Playbooks & automatisation", b: "Quatre playbooks Ansible dédiés (installation du serveur Zabbix, des agents, de GLPI, puis configuration de l'intégration), exécutés sur un inventaire type labo (serveurs Zabbix et GLPI, hôtes web/BDD/applicatif supervisés), avec les secrets sensibles chiffrés via ansible-vault plutôt que stockés en clair. L'intégration Zabbix → GLPI repose sur un webhook Python (zabbix_glpi_webhook.py) qui ouvre une session sur l'API REST de GLPI, mappe automatiquement la sévérité de l'alerte Zabbix vers le niveau d'urgence du ticket GLPI (de \"Information\" à \"Disaster\"), puis crée le ticket avec un titre normalisé (ex. [ZABBIX] {déclencheur} - {hôte}) — sur le principe d'une chaîne événementielle \"alerte → ticket\" automatique plutôt qu'une saisie manuelle." }
      ],
      images: []
    },
    {
      id: "formatis", year: "3", title: "Reprise de données — Cas Formatis", tag: "Cas pratique · Python & SQL",
      stack: ["Python", "SQL", "MariaDB"],
      summary: "Migration et fiabilisation de données dispersées (Excel, 3 services) vers une base MariaDB unique, avec reprise sur anomalies.",
      sections: [
        { h: "Contexte", b: "Cas pratique basé sur une entreprise fictive de gestion de formations (\"Formatis\"), dont les données étaient dispersées entre trois services (RH, Qualité, Technique) sur des fichiers Excel non normalisés — sources d'incohérences et de doublons. Objectif : concevoir un pipeline reproductible de génération, migration, validation et reprise sur anomalies vers une base MariaDB centralisée." },
        { h: "Réalisation", b: "Pipeline en scripts Python indépendants exécutés en chaîne : generate_data.py produit un jeu de données de test réaliste (sessions, intervenants, inscrits, évaluations) exporté en CSV ; migration.py charge ces CSV dans un modèle relationnel en 4 tables avec contraintes d'intégrité (unicité des emails, notes bornées de 1 à 5, cohérence temporelle entre une évaluation et la fin de session) ; reprise.py traite spécifiquement un fichier volontairement corrompu (sessions_corrompues.csv) pour isoler les lignes en erreur sans bloquer l'import global ; validate.py compare enfin le nombre de lignes en base à celui des CSV sources pour confirmer l'intégrité de la migration." },
        { h: "Résultat", b: "Dépendances externes (Pandas, Faker) volontairement écartées au profit des modules standards Python (csv, connecteur SQL) pour garantir la portabilité du pipeline sans installation complexe, et utilisation de clauses INSERT IGNORE pour absorber les doublons d'email sans interrompre la migration. La validation finale confirme une intégrité des données de 100 % (concordance exacte entre lignes sources et lignes en base), avec des rapports texte générés à chaque étape (rapport_reprise.txt, rapport_validation.txt, log_reprise.txt) pour tracer précisément ce qui a été importé, corrigé ou rejeté." }
      ],
      images: [
        { src: "formatis-generate.png", caption: "Génération du jeu de données de test — 4 fichiers CSV" },
        { src: "formatis-validate.png", caption: "Script de validation post-migration" },
        { src: "formatis-reprise.png", caption: "Script de reprise sur le fichier de sessions corrompues" }
      ]
    },

    // ---------------- ALTERNANCE ----------------
    {
      id: "esxi", year: "alt", title: "Reconstruction post-incident ESXi", tag: "Projet phare · Incident critique",
      stack: ["VMware vSphere / HA", "Veeam", "Windows Server", "VLAN / VPN"],
      summary: "Pilotage de la remise en route du SI de Patoux Equipagri après la défaillance du serveur ESXi hébergeant la quasi-totalité des VM.",
      flagship: true,
      sections: [
        { h: "L'incident", b: "Mi-octobre, plusieurs disques ont lâché simultanément dans la grappe RAID du serveur hôte VMware ESXi de l'entreprise — ce serveur unique faisait tourner la quasi-totalité des machines virtuelles : le contrôleur de domaine Active Directory, le serveur de fichiers, le serveur d'impression, cinq VM de bureau à distance et le serveur Linux hébergeant le CRM. La défaillance matérielle a corrompu le système de fichiers des VM. Du jour au lendemain, une grosse partie du système d'information était à l'arrêt sur les cinq sites : applications métier inaccessibles, activité bloquée. L'incident est survenu en pleine transition entre deux Responsables des Systèmes d'Information (Christophe Fourdin, qui m'avait accueilli et formé, puis Steeve Caucheteur, arrivé en pleine crise) — et pendant une semaine où j'étais moi-même en cours à l'EPSI." },
        { h: "Chronologie", b: "Semaine 1 : détection de l'anomalie sur le serveur ESXi, tentatives de redémarrage infructueuses, escalade vers un laboratoire spécialisé en récupération de données, récupération des dernières sauvegardes exploitables et mise en hébergement datacenter des VM restaurables. Semaine 2 : remise en place des tunnels VPN et des accès bureau à distance, restauration du serveur de fichiers, établissement du lien réseau datacenter ↔ entreprise. Semaines 3-4 : migration de l'ensemble des sessions utilisateurs de l'ancien vers le nouvel Active Directory à l'aide de ProfWiz. Mois suivants : mesures de résilience (migration SharePoint, révision du PRA, suppression des bureaux à distance, sécurisation MFA)." },
        { h: "Mon rôle — la migration ProfWiz", b: "À mon retour de cours, le plus dur côté infrastructure était fait : un nouvel Active Directory avait été reconstruit de zéro par le RSI, avec une structure plus propre (unités d'organisation par site puis par service, groupes de sécurité par fonction, GPO standardisées, comptes obsolètes nettoyés dès le départ). Restait la moitié la plus longue : tous les postes utilisateurs pointaient encore vers l'ancien domaine, devenu un \"domaine fantôme\". J'ai pris en charge la bascule de 120 postes sur les cinq sites avec l'outil ProfWiz (User Profile Wizard, ForensiT), qui réassocie un profil Windows local existant à un nouveau compte AD en réécrivant les permissions NTFS et les entrées de registre du profil — sans réinstallation ni perte des données locales, contrairement à un déploiement de poste classique. Intervention sur site ou à distance via TeamViewer selon les cas, avec une contrainte logistique forte : impossible d'intervenir sur un poste pendant que son utilisateur travaille dessus, ce qui a imposé de planifier une partie des interventions en soirée." },
        { h: "Suite : migration hybride & sécurité", b: "L'incident a été le déclencheur d'une refonte plus large : bascule d'une architecture on-premise vers un modèle hybride combinant hébergement en datacenter externe et services cloud (Microsoft 365, Azure), avec déploiement du firewall Cato Networks (SASE) et redéfinition des liens de connectivité avec l'opérateur Orange (fibre FTTO/FTTH). L'audit post-crise a par ailleurs conclu que les cinq VM de bureau à distance n'étaient plus justifiées face à la puissance des postes modernes : elles ont été supprimées au profit d'applications exécutées en local (\"client lourd\"), fluidifiant l'expérience utilisateur et réduisant la charge sur les serveurs." },
        { h: "Résultat", b: "Infrastructure reconstruite et remise en production sur les 5 sites, architecture Active Directory repensée plus proprement que l'ancienne, passage à un modèle hybride plus résilient. L'expérience la plus formatrice de mon alternance : prise de décision et priorisation du support sans supervision constante, formalisation et transmission d'informations techniques apprises dans l'urgence pour assurer la continuité entre les deux RSI, communication sous pression avec la direction et des utilisateurs inquiets pour leurs fichiers — 120 fois la même manipulation technique, sans jamais la même personne en face." }
      ],
      images: [
        { src: "ad-ou-structure.jpg", caption: "Nouvelle arborescence Active Directory reconstruite après l'incident — unités d'organisation par site (domaine patoux.intra)" }
      ]
    },
    {
      id: "glpi", year: "alt", title: "Déploiement de GLPI", tag: "BC01 · ITSM",
      stack: ["GLPI", "Debian", "LAMP"],
      summary: "Mise en place d'un outil ITSM complet, de l'installation Debian jusqu'à la personnalisation aux couleurs de l'entreprise.",
      sections: [
        { h: "Contexte", b: "À mon arrivée, aucun outil centralisé ne permettait de gérer les demandes utilisateurs ni d'inventorier le parc : les demandes arrivaient par téléphone, email ou au bureau, sans traçabilité ni priorisation, et aucune base de connaissances n'existait — impossible de mesurer la charge réelle du service ou d'éviter que des demandes non urgentes ne tombent dans l'oubli." },
        { h: "Déploiement technique", b: "Installation from scratch sur une VM Debian 13 (Trixie) : partitionnement guidé LVM, durcissement de l'accès SSH, puis stack LAMP complète (Apache2, MariaDB, PHP) validée avant de déployer GLPI 10. Configuration des catégories de tickets, des niveaux de priorité et de leurs SLA, des règles d'escalade automatique, du portail utilisateur, de l'annuaire LDAP (connexion à l'Active Directory patoux.intra pour l'authentification unique des comptes), et du module de gestion des contrats prestataires (Orange, Cato, hébergeur, ERP, Avaya) avec alertes automatiques 90/60/30 jours avant échéance." },
        { h: "Personnalisation & extension", b: "Au-delà de l'installation, j'ai développé un thème CSS sur-mesure reprenant l'identité visuelle de l'entreprise et de John Deere (vert #367C2B, jaune #FFDE00) sur la barre de navigation, le menu latéral et les boutons — un détail qui change concrètement l'appropriation de l'outil par les équipes. J'ai également étendu le périmètre d'inventaire de GLPI aux smartphones professionnels des commerciaux et techniciens SAV, en rédigeant une procédure d'installation de l'agent mobile Android (configuration serveur, renommage selon la convention interne, vérification du référencement)." },
        { h: "Conduite du changement & résultat", b: "La principale difficulté n'était pas technique mais humaine : les utilisateurs, habitués à appeler directement le service informatique, percevaient la saisie d'un ticket comme une contrainte. J'ai facilité l'adoption via la création automatique de ticket par email, une formation personnalisée site par site et un accompagnement individuel des plus réfractaires. Mise en place initiale sur environ deux mois, puis administration continue jusqu'à la fin de l'alternance. Aujourd'hui : 102 ordinateurs, 56 moniteurs, 37 imprimantes et 141 utilisateurs inventoriés dans l'outil, avec une base de connaissances désormais assez fournie pour accélérer la résolution des problèmes récurrents." }
      ],
      images: [
        { src: "glpi-ssh-debian.png", caption: "Connexion SSH au serveur Debian 13 hébergeant GLPI" },
        { src: "glpi-dashboard.png", caption: "Tableau de bord GLPI — inventaire du parc (102 ordinateurs, 56 moniteurs, 141 utilisateurs)" },
        { src: "glpi-helpdesk-dashboard.png", caption: "Tableau de bord \"Assistance\" — suivi des tickets par statut" },
        { src: "glpi-ldap-config.png", caption: "Configuration de l'annuaire LDAP — connexion à l'Active Directory patoux.intra" }
      ]
    },
    {
      id: "zabbix", year: "alt", title: "Supervision Zabbix + intégration GLPI", tag: "BC02/BC03 · Supervision",
      stack: ["Zabbix", "GLPI", "Webhook"],
      summary: "Déploiement d'une supervision proactive de l'infrastructure, avec création automatique de tickets GLPI depuis les alertes Zabbix.",
      sections: [
        { h: "Contexte", b: "La reconstruction post-incident ESXi a montré qu'un défaut technique peut passer inaperçu jusqu'à la panne complète. J'ai proposé et déployé Zabbix, solution open-source de supervision, pour surveiller en continu l'état des serveurs, des équipements réseau et des services critiques — et déclencher une alerte avant que l'utilisateur ne subisse la panne." },
        { h: "Déploiement & intégration", b: "Installation du serveur Zabbix sur une VM dédiée, configuration des hôtes à superviser (contrôleurs de domaine, serveur de fichiers, serveur d'impression, CRM, serveur de sauvegarde), et définition de templates de vérification (CPU, RAM, disque, services Windows). Plutôt que de laisser les alertes s'accumuler dans une seule console, j'ai configuré un type de média webhook dans Zabbix qui transmet automatiquement chaque alerte à l'API de GLPI : dès qu'un problème atteint le seuil de sévérité défini, un ticket est créé dans GLPI avec l'hôte concerné, la sévérité et un lien de retour direct vers le problème dans Zabbix — sans aucune ressaisie manuelle." },
        { h: "Résultat", b: "Passage d'une posture réactive (on découvre la panne quand l'utilisateur appelle) à une posture proactive (l'alerte remonte avant l'impact utilisateur), avec une chaîne de traitement tracée de bout en bout — de la détection technique jusqu'à la clôture du ticket — et des tableaux de bord de suivi partagés avec le RSI." }
      ],
      images: [
        { src: "zabbix-global-view.jpeg", caption: "Zabbix — vue globale : disponibilité des hôtes, CPU/RAM et problèmes par sévérité" },
        { src: "zabbix-glpi-ticket.jpeg", caption: "Ticket GLPI créé automatiquement depuis une alerte Zabbix, avec lien de retour vers le problème" }
      ]
    },
    {
      id: "m365", year: "alt", title: "Sécurisation M365 / Entra ID", tag: "BC03 · Sécurité",
      stack: ["Microsoft 365", "Entra ID", "MFA"],
      summary: "Déploiement du MFA sur l'ensemble du parc et renforcement du filtrage anti-phishing, à la demande de John Deere.",
      sections: [
        { h: "Contexte", b: "Dans le cadre des exigences de cybersécurité imposées par le constructeur John Deere à son réseau de distributeurs, pilotage de trois mesures complémentaires sur l'environnement Microsoft 365 / Entra ID." },
        { h: "Réalisation", b: "Activation de l'authentification multifacteur (MFA) pour l'ensemble des utilisateurs du parc, suivie depuis le Centre d'administration Microsoft Entra jusqu'à un état \"enforced\" sur la totalité des comptes actifs (y compris les comptes partagés) ; configuration de stratégies d'accès conditionnel bloquant les tentatives de connexion hors du périmètre géographique habituel de l'entreprise ; renforcement des règles de filtrage anti-phishing et anti-spam via Microsoft Defender for Office 365, avec mise en quarantaine automatique des messages suspects." },
        { h: "Incident résolu — synchronisation Azure AD Connect", b: "En parallèle, un incident de synchronisation hybride (Azure AD Connect / DirSync) a provoqué la création de comptes en double dans Microsoft 365, causée par un conflit de l'attribut ImmutableID entre les objets locaux et cloud. Résolution via Microsoft Graph PowerShell : désactivation temporaire de la synchronisation, suppression des doublons et de l'attribut en conflit côté cloud, attente de la propagation Microsoft (jusqu'à 72h), puis réactivation et relance de cycles de synchronisation complets — une procédure que j'ai documentée intégralement pour en faire une référence interne réutilisable." },
        { h: "Accompagnement & autres chantiers sécurité", b: "Accompagnement individuel des collaborateurs lors de l'activation de leur second facteur (Microsoft Authenticator) pour éviter tout blocage d'accès au moment de la bascule, et reporting régulier à la direction dans le cadre du suivi de conformité. En parallèle : gestion du patch management des postes de travail (suivi des correctifs Windows via PowerShell, en priorisant les bulletins de sécurité Microsoft du Patch Tuesday) et supervision quotidienne du firewall Cato Networks (SASE) — reportings de menaces bloquées, ajustement des règles de filtrage, identification et traitement du shadow IT (usage d'outils de stockage personnel non autorisés)." }
      ],
      images: [
        { src: "alternance-powershell.jpg", caption: "Suivi des correctifs de sécurité installés sur un poste (PowerShell, Get-HotFix)" },
        { src: "cato-threats-dashboard.jpg", caption: "Tableau de bord des menaces Cato Networks (SASE) — 118 menaces IPS bloquées" }
      ]
    },
    {
      id: "network", year: "alt", title: "Réseau Ubiquiti & téléphonie Avaya", tag: "BC01/BC02/BC03 · Infra réseau",
      stack: ["Ubiquiti UniFi", "VLAN", "Avaya IP Office", "DECT"],
      summary: "Administration quotidienne du réseau Wi-Fi/switching multi-sites et de la téléphonie IP sur 5 sites.",
      sections: [
        { h: "Réseau Ubiquiti UniFi", b: "Administration depuis la console centralisée UOS de l'ensemble du parc réseau Ubiquiti : sur le seul site de Richebourg, l'infrastructure compte 27 équipements (19 switchs, 8 points d'accès Wi-Fi) gérant jusqu'à 133 clients simultanés. Segmentation en 11 VLAN distincts (Default, MGMT, USERS, VLAN-TOIP pour la téléphonie, WIFI_DATA, WIFI_MOBILE, PATOUX_GUEST, DMZ interne/externe, WAN), avec 3 SSID Wi-Fi configurés (data et mobile en WPA2, invité ouvert et isolé du réseau interne). Ajout et configuration des nouveaux équipements lors des évolutions de parc, mise à jour régulière des firmwares, et diagnostic des problèmes de connectivité signalés par les utilisateurs." },
        { h: "Téléphonie IP Avaya", b: "Administration de la solution de téléphonie centralisée Avaya IP Office, qui gère 120 postes téléphoniques sur les 5 sites depuis une console Web unique : création et configuration des extensions pour les nouveaux collaborateurs, gestion des renvois d'appels, des messageries vocales et des groupes d'appel par service (Commerce, SAV, Magasin, Standard), provisioning des téléphones IP physiques et des bases DECT sans fil. Le trafic voix transite sur un VLAN dédié (VLAN-TOIP) que j'ai configuré sur les switchs UniFi, isolant la voix du trafic data pour garantir la qualité de service." }
      ],
      images: [
        { src: "unifi-wifi-networks.png", caption: "Console UniFi — réseaux Wi-Fi configurés (WIFI_DATA, WIFI_MOBILE, PATOUX_GUEST)" },
        { src: "unifi-switch-ports.png", caption: "Switch UniFi USW Pro 48 PoE — vue des ports et alimentation PoE" },
        { src: "avaya-extensions.png", caption: "Console Avaya IP Office — liste des extensions téléphoniques par site" }
      ]
    }
  ]
};
