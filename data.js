/* Content data for the portfolio SPA. Kept as a separate script for readability. */
window.PORTFOLIO_DATA = {

  years: [
    { id: "1", label: "1ère année", sub: "BTS SIO — SISR · 2023 / 2024" },
    { id: "2", label: "2ème année", sub: "BTS SIO — SISR · 2024 / 2025" },
    { id: "3", label: "3ème année", sub: "Bachelor SysOps — ASRBD · 2025 / 2026" },
    { id: "alt", label: "Alternance", sub: "Patoux Equipagri · 2025 — 2026" }
  ],

  projects: [
    // ---------------- YEAR 1 ----------------
    {
      id: "blog", year: "1", title: "Blog HTML5 / CSS3", tag: "Développement web",
      stack: ["HTML5", "CSS3"],
      summary: "Premier site construit from scratch pour le module DEVW103 : structure sémantique et mise en forme CSS.",
      sections: [
        { h: "Contexte", b: "Premier module de développement web de la formation (DEVW103 — HTML5 &amp; CSS3, les fondamentaux). L'exercice consistait à concevoir un blog personnel entièrement à la main, sans framework, pour assimiler la structure d'un document HTML5 et la sémantique des balises (header, main, article, section, nav)." },
        { h: "Réalisation", b: "Un blog thématique autour du football (\"Ligue des Champignons\") avec une page d'accueil listant plusieurs articles sous forme de cartes, une page d'article dédiée, une mise en page en grille CSS et une feuille de style séparée (style.css). Les balises meta (auteur, description), le favicon et la structure de &lt;head&gt; ont été travaillés pour respecter les bonnes pratiques vues en cours." }
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
      images: []
    },
    {
      id: "bdd", year: "1", title: "Circuits touristiques", tag: "Base de données",
      stack: ["SQL", "MCD/MLD", "PHP"],
      summary: "Modélisation d'une base de données pour une agence de voyage, puis application de gestion des réservations.",
      sections: [
        { h: "Contexte", b: "Projet transversal de conception de base de données : modéliser le système d'information d'une agence de voyage proposant des circuits touristiques composés de plusieurs étapes (lieux à visiter), avec gestion des réservations clients." },
        { h: "Modélisation", b: "MCD puis MLD à partir d'un schéma relationnel imposé : Circuit (identifiant, villes de départ/arrivée, durée, prix), Etape (circuit, ordre, lieu, date, durée) et LieuAVisiter (nom, ville, prix de visite). Écriture des requêtes SQL de création, peuplement et interrogation : recherche de circuits par budget/dates/places disponibles, calcul du prix total d'un circuit (inscription + visites), suppression en cascade d'une étape avec renumérotation." },
        { h: "Application", b: "Développement d'une IHM avec authentification différenciée client / administrateur : les clients consultent et réservent des circuits, les administrateurs gèrent (CRUD) les circuits, étapes, lieux et comptes clients." }
      ],
      images: [
        { src: "bdd-reservation.jpg", caption: "Carte de réservation dans l'application — circuit, description, suppression de réservation" }
      ]
    },
    {
      id: "sisr", year: "1", title: "Étude de cas EPSIMediLab", tag: "Architecture & sécurité",
      stack: ["Active Directory", "VLAN", "Architecture 3-tiers"],
      summary: "Audit et proposition d'évolution de l'architecture d'un laboratoire médical fictif : web, annuaire, réseau et supervision.",
      sections: [
        { h: "Contexte", b: "EPSIMediLab, leader européen du prélèvement médical, souhaite revoir son système d'information : son site web (hébergé en DMZ, LAMP, sans chiffrement) a subi plusieurs attaques (brute force base de données, déni de service HTTP, vol de cookies, brute force SSH), et son annuaire Active Directory regroupe tous les utilisateurs dans une seule unité d'organisation, rendant impossible toute politique de sécurité fine." },
        { h: "Évolutions proposées", b: "Refonte de l'architecture web en 3 tiers (reverse proxy, serveurs web, SGBDR) avec répartition de charge, durcissement de MariaDB (mysql_secure, filtrage des connexions) et remplacement d'Apache par un service sécurisé (certificat, blocage des brute force, détection de fuzzing). Côté annuaire : création d'unités d'organisation et de groupes de sécurité selon l'organigramme, script d'automatisation de la création des comptes utilisateurs avec contrôles et journalisation. Côté réseau : segmentation en VLAN (Informatique, Compta, RH, Serveurs, Laboratoire) pour contrer les attaques constatées (ARP/DHCP spoofing, rogue DHCP) et mise en place d'une supervision (disponibilité, services applicatifs, alerting)." }
      ],
      images: [
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
        { h: "Développement", b: "Connexion et inscription, page d'accueil avec catalogue de chambres, réservation via une fenêtre modale (nom, email, date souhaitée) avec confirmation visuelle, et un espace \"Mes réservations\" listant les réservations en cours avec possibilité d'annulation." },
        { h: "Infrastructure", b: "Déploiement sur une architecture Debian dédiée : serveur DNS (bind9), serveur web (Apache2 + PHP), serveur de base de données (MariaDB + phpMyAdmin), avec une architecture réseau schématisée sous Packet Tracer (routeur, switch, pare-feu ASA, serveurs DHCP/DNS/BDD)." }
      ],
      images: [
        { src: "hotel-topology.jpg", caption: "Architecture réseau du projet (Packet Tracer) : routeur, switch, pare-feu, serveurs DNS/BDD" },
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
        { h: "Réalisation", b: "Application PHP/MySQL avec authentification, gestion de groupes, création d'événements et parcours \"mot de passe oublié\". Développement organisé en deux dépôts (back PHP et front), avec un board de suivi (Trello) et des conventions de code partagées en équipe." }
      ],
      images: [
        { src: "agenda-mld.jpg", caption: "Modèle Logique de Données de l'agenda collaboratif (users, teams, agendas, events)" },
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
        { h: "Réalisation", b: "Application en ligne de commande consommant l'API publique SWAPI pour lister les films, avec ajout/suppression de favoris (confirmation à chaque étape), authentification par utilisateur, et un rôle administrateur permettant de consulter des statistiques (films les plus ajoutés en favoris, triés par popularité). Persistance via SQLite et un ORM SQLAlchemy, avec des conventions de code formalisées (CamelCase pour les classes, snake_case pour les fonctions, docstrings Google) et un versionnage sémantique (X.Y.Z)." }
      ],
      links: [{ label: "GitHub", url: "https://github.com/DCodeProg/StarFilm" }],
      images: [
        { src: "starfilm-trello.jpg", caption: "Board Trello de suivi du projet (colonnes En cours / Révision / Test / Terminé)" }
      ]
    },
    {
      id: "wordpress", year: "1", title: "Le BurgHouse", tag: "Développement WordPress",
      stack: ["WordPress"],
      summary: "Site vitrine pour un restaurant fictif : accueil, menu, commande, réservation et contact.",
      sections: [
        { h: "Réalisation", b: "Site vitrine complet pour un restaurant (\"Le BurgHouse\") réalisé sous WordPress : page d'accueil, menu avec articles et prix, formulaire de commande, formulaire de réservation de table, page de contact et page \"à propos\". L'objectif du module était de prendre en main un CMS et ses mécanismes de thème, de pages et de formulaires plutôt que de coder from scratch." }
      ],
      images: [
        { src: "burghouse-home.jpg", caption: "Page d'accueil du site \"Le BurgHouse\"" }
      ]
    },
    {
      id: "noriap", year: "1", title: "Stage Noriap", tag: "Stage — Déploiement de parc",
      stack: ["Active Directory", "WSUS", "Masterisation"],
      summary: "6 semaines chez Noriap : remplacement de 140 postes sur une centaine de sites agricoles.",
      sections: [
        { h: "Contexte", b: "Stage de 6 semaines (mai-juin 2024) chez Noriap, coopérative agricole du nord de la France (environ 1200 salariés, silos et sites répartis sur 8 régions). L'entreprise déployait un nouveau logiciel de pesée (\"Kheris\", édité par DPK Pesage) sur ses ponts-bascules, ce qui imposait de remplacer les ordinateurs de la centaine de sites de collecte incompatibles avec le nouvel outil." },
        { h: "Mission", b: "Déploiement de parc en 3 étapes : masterisation des postes (clonage, intégration au domaine), configuration individuelle dans l'Active Directory (création des comptes, attribution aux bons groupes/OU selon le site et l'activité, déploiement de Citrix, TeamViewer, migration vers le bon serveur WSUS) puis déploiement terrain (changement de matériel, adaptation aux spécificités de chaque site — écrans VGA à remplacer, imprimantes réseau, douchettes). Un incident logiciel (l'antivirus Sentinel corrompu par la masterisation) a bloqué le déploiement pendant 2-3 jours avant d'être diagnostiqué et résolu par désinstallation/réinstallation." }
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
        { h: "Réalisation", b: "Configuration de transports SIP chiffrés (TLS, certificats) et de comptes utilisateurs (endpoints PJSIP) avec authentification, ainsi qu'un plan de numérotation dans extensions.conf : appel direct entre postes, redirection vers messagerie vocale après non-réponse, boîtes vocales par extension. Étude comparative des codecs audio (G711, G723.1, G729, GSM...) selon trois critères : charge processeur, bande passante consommée et qualité perçue (score MOS)." }
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
        { h: "Réalisation", b: "Atelier de développement front-end : un mini-jeu web interactif (mécanique de \"porte\" à ouvrir) couplé à un système de quiz en plusieurs manches, entièrement en HTML/CSS/JavaScript sans framework — l'occasion de manipuler le DOM, les événements utilisateur et les animations CSS." }
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
        { h: "Sujet", b: "Depuis 2022, les grands modèles de langage redessinent les métiers de la sécurité : outils défensifs assistés par IA (Microsoft Security Copilot, CrowdStrike Charlotte AI) d'un côté, industrialisation du phishing et du malware polymorphe par les attaquants de l'autre. L'équipe a mis en place un dispositif de veille technologique, réglementaire, stratégique, sectorielle et digitale sur ce thème." },
        { h: "Méthode", b: "Écosystème \"un outil par fonction\" : Feedly pour l'agrégation principale (18 sources dans un flux dédié), Google Alerts pour capter les signaux faibles hors flux RSS, Inoreader en filtrage de secours, Notion comme base de connaissances (fiche normalisée par article) et Discord pour la collaboration en temps réel. Chaque source est qualifiée sur une grille à 5 critères (pertinence 30 %, crédibilité 25 %, originalité 20 %, fraîcheur 15 %, actionnabilité 10 %), avec un seuil de validation à 60/100." },
        { h: "Résultats", b: "21 sources actives suivies, dont 71,4 % anglophones (contre 60 % exigés), 161 articles captés sur le feed dédié. Cinq tendances lourdes identifiées (généralisation des copilots de sécurité, automatisation du support niveau 1 des SOC, industrialisation du phishing par IA, convergence Zero Trust/IA, renforcement réglementaire avec l'AI Act et NIS2) et cinq signaux faibles à fort potentiel disruptif (agents IA autonomes, shadow AI en entreprise, empoisonnement de modèles, prompt injection, deepfakes vocaux ciblés), documentés dans une matrice AFOM." }
      ],
      images: []
    },
    {
      id: "ntl1", year: "3", title: "NTL-SysToolbox", tag: "MSPR TPRE511 · Infrastructure & outillage",
      stack: ["VMware ESXi", "pfSense", "Active Directory", "MySQL", "Python", "Grafana"],
      summary: "Infrastructure virtualisée pour NordTransit Logistics et outil CLI Python de diagnostic, sauvegarde et audit.",
      team: "Équipe : Eliot Kondryk, Julien Carbonell, Quentin Leroy, Mathis Thibaut",
      sections: [
        { h: "Contexte", b: "NordTransit Logistics (entreprise fictive du cas d'étude, transport et logistique) exploite un WMS (Warehouse Management System) sur plusieurs entrepôts, avec des pics d'activité en réception le matin et en expédition l'après-midi. La mission : concevoir une infrastructure virtualisée sécurisée capable d'héberger les services critiques (Active Directory, DNS, MySQL, WMS), et outiller les administrateurs pour la maintenance quotidienne." },
        { h: "Infrastructure", b: "Hyperviseur VMware ESXi 8.0.3 choisi pour son réalisme professionnel (standard du marché) plutôt qu'une alternative comme Proxmox, hébergeant l'ensemble des services sur un serveur physique unique avec isolation logique stricte : deux contrôleurs de domaine Active Directory redondants (DC01/DC02) pour la continuité de service, un serveur MySQL pour le WMS, un pare-feu pfSense pour le routage et la sécurité périmétrique, et une stack de supervision Grafana. Adressage en séparation WAN (10.10.10.0/8) / LAN (192.168.10.0/24), avec une segmentation par VLAN prévue en évolution." },
        { h: "NTL-SysToolbox", b: "Outil en ligne de commande développé en Python, structuré en menu interactif, avec trois modules : diagnostic rapide de la disponibilité d'AD, du DNS et de MySQL pour réduire le temps de résolution d'incident ; sauvegarde automatisée de la base MySQL du WMS (dump horodaté, rapport JSON) ; audit d'obsolescence réseau qui scanne l'infrastructure et classe chaque hôte par niveau de risque (EOL dépassée, proche, OK...) avec export CSV. Code source et documentation publiés sur GitHub, avec une vidéo de démonstration des trois modules." }
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
        { h: "Cahier des charges", b: "La direction de NordTransit Logistics mandate l'équipe pour proposer une architecture cible moderne et sécurisée, exploitable par une petite équipe IT, autour de 6 piliers : sécurité et interconnexion des sites (VPN site-à-site chiffré, pare-feu centralisé), réseau local et qualité de service (VLAN voix/données/serveurs/management, priorisation de la VoIP), virtualisation en haute disponibilité (suppression du SPOF, stockage redondé, objectifs RTO/RPO), cloud hybride avec Azure comme plan de reprise d'activité, exploitabilité (supervision, guide de dépannage N1/N2) et preuve de concept." },
        { h: "Réalisation", b: "Segmentation VLAN par site et par usage (ex. Lille : VLAN 10 serveurs en 192.168.10.0/24, VLAN 20 utilisateurs en 192.168.11.0/24, VLAN 30 VoIP en 192.168.12.0/24 ; réplication de la logique sur le site de Lens) ; VPN IPsec site-à-site entre Lille et Lens ; deux hyperviseurs ESXi en cluster avec VMware vCenter et stockage partagé pour la haute disponibilité (bascule automatique, migration de VM sans coupure) ; téléphonie centralisée sur 3CX Cloud plutôt qu'un PABX physique par site ; extension vers Azure pour l'externalisation des sauvegardes et un contrôleur de domaine supplémentaire, reliée par un tunnel VPN IPsec dédié." },
        { h: "Supervision & preuve de concept", b: "Choix de Grafana pour la supervision (plus simple à déployer que Zabbix pour l'équipe), avec des dashboards par site suivant CPU, RAM, disque et trafic réseau des pare-feux pfSense. Le POC a permis de valider la priorisation de la voix sur IP (QoS), la tolérance de panne de l'Active Directory sur le cluster ESXi, et le bon fonctionnement du VPN et du routage vers Azure." }
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
      summary: "Conception, sauvegarde et optimisation de la base de données du WMS de NordTransit Logistics.",
      team: "Équipe : Mathis Thibaut, Julien Carbonell, Eliot Kondryk, Quentin Leroy",
      sections: [
        { h: "Modèle de données", b: "La base WMS gère les flux physiques de marchandises sur 4 sites (Lille, Lens, Valenciennes, Arras) et un cross-dock saisonnier ; toute indisponibilité entre 5h30 et 18h30 arrête immédiatement la réception et l'expédition. Modélisation en 6 entités (Clients, Sites, Articles, Localisations, Stocks, Mouvements) normalisées en 3NF, avec des clés étrangères en ON DELETE RESTRICT / ON UPDATE CASCADE pour garantir l'intégrité. La table Mouvements est partitionnée par plage mensuelle pour préserver les performances sur l'historique." },
        { h: "Continuité de service", b: "Stratégie de sauvegarde à deux niveaux : dump complet hebdomadaire (dimanche, avec vérification d'intégrité SHA-256 et copie vers un NAS externe) et sauvegarde incrémentale des binary logs toutes les 15 minutes, pour un RPO de 15 minutes. Scripts shell automatisés par cron, avec notification email en cas de succès ou d'échec." },
        { h: "Optimisation de requêtes", b: "Analyse des 8 requêtes les plus fréquentes (consultation de stock, recherche par SKU pour les scanners RF, mouvements du jour par site, rapport de stock agrégé par client...) avec EXPLAIN avant/après. Sur la requête de consultation de stock, un index composite (article_id, site_id, quantite) fait passer le plan d'exécution d'un full table scan sur 48 523 lignes à 3 lignes parcourues — un gain d'environ ×16 000. Le partitionnement mensuel élimine 92 % des données à parcourir sur les rapports journaliers, et un cache d'agrégats rafraîchi toutes les 30 minutes simule une vue matérialisée (non supportée nativement par MySQL) pour le rapport de facturation." }
      ],
      code: { lang: "sql", label: "Exemple d'optimisation — consultation de stock", content: `-- Requête la plus fréquente : stock d'un article sur un site
SELECT s.quantite, s.lot, l.code_emplacement, l.type_emplacement
FROM stocks s
JOIN localisations l ON s.localisation_id = l.localisation_id
WHERE s.article_id = 1042 AND s.site_id = 2 AND s.quantite > 0;

-- AVANT : full table scan, 48 523 lignes parcourues (48 ms)

CREATE INDEX idx_stocks_article_site
    ON stocks (article_id, site_id, quantite);

-- APRÈS : 3 lignes parcourues, 0,3 ms — gain ≈ x16 000` },
      images: []
    },

    // ---------------- ALTERNANCE ----------------
    {
      id: "esxi", year: "alt", title: "Reconstruction post-incident ESXi", tag: "Projet phare · Incident critique",
      stack: ["VMware vSphere / HA", "Veeam", "Windows Server", "VLAN / VPN"],
      summary: "Pilotage de la remise en route du SI de Patoux Equipagri après la défaillance du serveur ESXi hébergeant la quasi-totalité des VM.",
      flagship: true,
      sections: [
        { h: "L'incident", b: "Mi-octobre, les disques du serveur ESXi de l'entreprise ont lâché — ce serveur faisait tourner presque toutes les machines virtuelles, dont le contrôleur de domaine Active Directory. Du jour au lendemain, une grosse partie du système d'information était à l'arrêt sur les cinq sites : applications métier inaccessibles, activité bloquée. L'incident est survenu en pleine transition entre deux Responsables des Systèmes d'Information." },
        { h: "Chronologie", b: "Semaine 1 : détection de l'anomalie, VM inaccessibles, tentatives de redémarrage infructueuses, escalade vers des prestataires spécialisés en récupération de données. Semaine 2 : intervention des experts, évaluation des données récupérables, décision de reconstruire entièrement l'infrastructure. Semaines 3-4 : reconstruction complète — nouvel Active Directory, recréation des comptes et GPO, migration des profils utilisateurs (ProfWiz), restauration des VM, remise en service progressive." },
        { h: "Mon rôle", b: "J'ai pris le relais sur l'ensemble de la remise en route côté postes utilisateurs, en m'appuyant sur le nouvel Active Directory reconstruit par le RSI dans une logique plus propre : unités d'organisation par site puis par service, groupes de sécurité par fonction, GPO standardisées, nettoyage des comptes obsolètes dès le départ. Techniquement, cette mission a mobilisé VMware vSphere (clusters, haute disponibilité, stockage partagé), Veeam Backup &amp; Replication (restauration de VM complètes et granulaire), la reconstruction d'un contrôleur de domaine sous Windows Server, la configuration réseau (VLAN, routage, VPN) et la production de documentation d'architecture." },
        { h: "Suite : migration hybride", b: "L'incident a été le déclencheur d'une refonte plus large : bascule d'une architecture on-premise vers un modèle hybride combinant infrastructure dédiée en datacenter et services cloud (Microsoft 365, Azure), avec déploiement du firewall Cato Networks (SASE) et redéfinition des liens de connectivité avec l'opérateur Orange." },
        { h: "Résultat", b: "Infrastructure reconstruite et remise en production sur les 5 sites, architecture repensée plus proprement que l'ancienne, passage à un modèle hybride plus résilient. L'expérience la plus formatrice de mon alternance : prise de décision sans supervision constante, coordination de plusieurs prestataires (hébergeur, récupération de données, support VMware), communication sous pression avec la direction et les utilisateurs." }
      ],
      images: []
    },
    {
      id: "glpi", year: "alt", title: "Déploiement de GLPI", tag: "BC01 · ITSM",
      stack: ["GLPI"],
      summary: "Mise en place d'un outil ITSM complet là où aucune traçabilité n'existait.",
      sections: [
        { h: "Contexte", b: "À mon arrivée, aucun outil centralisé ne permettait de gérer les demandes utilisateurs ni d'inventorier le parc : les demandes arrivaient par téléphone, email ou au bureau, sans traçabilité ni priorisation, et aucune base de connaissances n'existait." },
        { h: "Réalisation", b: "Installation, configuration et déploiement de GLPI (solution ITSM open-source) : ticketing, inventaire matériel et logiciel, gestion des contrats prestataires (avec alertes automatiques 90/60/30 jours avant échéance), base de connaissances et tableaux de bord. Mise en place initiale sur environ deux mois (installation, paramétrage, formation des utilisateurs), puis administration continue et accompagnement individuel des collaborateurs réfractaires." },
        { h: "Résultat", b: "L'outil est devenu un réflexe pour la majorité des collaborateurs ; le volume de tickets traités a permis de constituer une base de connaissances solide, avec une amélioration mesurable des délais de résolution. Aujourd'hui : 102 ordinateurs, 56 moniteurs, 37 imprimantes et 141 utilisateurs inventoriés dans l'outil." }
      ],
      images: [
        { src: "alternance-glpi.jpg", caption: "Tableau de bord GLPI — inventaire du parc et suivi des tickets (Patoux Equipagri)" }
      ]
    },
    {
      id: "zabbix", year: "alt", title: "Supervision Zabbix + intégration GLPI", tag: "BC02/BC03 · Supervision",
      stack: ["Zabbix", "GLPI"],
      summary: "Déploiement d'une supervision proactive de l'infrastructure, avec création automatique de tickets.",
      sections: [
        { h: "Réalisation", b: "Déploiement d'une solution open-source de supervision (Zabbix) de l'infrastructure serveurs et réseau, avec intégration native à GLPI : la détection d'un incident déclenche automatiquement la création d'un ticket, avec les métriques associées." },
        { h: "Résultat", b: "Passage d'une posture réactive (on découvre la panne quand l'utilisateur appelle) à une posture proactive (l'alerte remonte avant l'impact utilisateur), avec des tableaux de bord de suivi partagés avec le RSI." }
      ],
      images: []
    },
    {
      id: "m365", year: "alt", title: "Sécurisation M365 / Entra ID", tag: "BC03 · Sécurité",
      stack: ["Microsoft 365", "Entra ID", "MFA"],
      summary: "Déploiement du MFA sur l'ensemble du parc et renforcement du filtrage anti-phishing.",
      sections: [
        { h: "Contexte", b: "Dans le cadre des exigences de cybersécurité imposées par le constructeur John Deere à son réseau de distributeurs, pilotage de trois mesures complémentaires sur l'environnement Microsoft 365 / Entra ID." },
        { h: "Réalisation", b: "Activation de l'authentification multifacteur (MFA) pour l'ensemble des utilisateurs du parc, suivie depuis le Centre d'administration Microsoft Entra jusqu'à un état \"enforced\" sur la totalité des comptes actifs (y compris les comptes partagés) ; configuration de stratégies d'accès conditionnel bloquant les tentatives de connexion hors du périmètre géographique habituel de l'entreprise ; renforcement des règles de filtrage anti-phishing et anti-spam via Microsoft Defender for Office 365, avec mise en quarantaine automatique des messages suspects." },
        { h: "Accompagnement", b: "Accompagnement individuel des collaborateurs lors de l'activation de leur second facteur (Microsoft Authenticator) pour éviter tout blocage d'accès au moment de la bascule, et reporting régulier à la direction dans le cadre du suivi de conformité." },
        { h: "Autre chantier sécurité", b: "En parallèle : gestion du patch management des postes de travail (suivi des correctifs Windows via PowerShell) et supervision quotidienne du firewall Cato Networks (SASE) — reportings, ajustement des règles de filtrage, suivi des niveaux de risque." }
      ],
      images: [
        { src: "alternance-powershell.jpg", caption: "Suivi des correctifs de sécurité installés sur un poste (PowerShell, Get-HotFix)" }
      ]
    }
  ]
};
