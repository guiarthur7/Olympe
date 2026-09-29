import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Play, ChevronRight, Users, Shield, Car, Wrench, MessageCircle, Map, Menu, X } from 'lucide-react';
import logoUrl from './assets/logo.png';
import bgUrl from './assets/bg.jpg';

const DISCORD_LINK = "https://discord.gg/olymperp";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === '/';
  const isReglement = location.pathname === '/reglement';

  return (
    <nav className="fixed w-full z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img src={logoUrl} alt="Olympe Logo" className="w-10 h-10 object-contain" />
            <span className="text-2xl font-black tracking-widest uppercase">Olympe<span className="text-gray-400">.</span></span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className={`text-sm font-bold transition-colors ${isHome ? 'text-white' : 'text-gray-400 hover:text-white'}`}>Accueil</Link>
            <Link to="/reglement" className={`text-sm font-bold transition-colors ${isReglement ? 'text-white' : 'text-gray-400 hover:text-white'}`}>Règlement</Link>
            <Link to="/boutique" className={`text-sm font-bold transition-colors ${location.pathname === '/boutique' ? 'text-white' : 'text-gray-400 hover:text-white'}`}>Boutique</Link>
            <a href={DISCORD_LINK} target="_blank" rel="noopener noreferrer" className="bg-white hover:bg-gray-200 text-black px-6 py-2.5 rounded-md font-bold text-sm transition-all transform hover:scale-105 shadow-[0_0_15px_rgba(255,255,255,0.2)]">
              Jouer
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-300 hover:text-white">
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#141414] border-b border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" onClick={() => setIsMenuOpen(false)} className={`block px-3 py-2 text-base font-bold ${isHome ? 'text-white' : 'text-gray-400'}`}>Accueil</Link>
            <Link to="/reglement" onClick={() => setIsMenuOpen(false)} className={`block px-3 py-2 text-base font-bold ${isReglement ? 'text-white' : 'text-gray-400'}`}>Règlement</Link>
            <Link to="/boutique" onClick={() => setIsMenuOpen(false)} className={`block px-3 py-2 text-base font-bold ${location.pathname === '/boutique' ? 'text-white' : 'text-gray-400'}`}>Boutique</Link>
            <a href={DISCORD_LINK} target="_blank" rel="noopener noreferrer" className="block px-3 py-2 text-base font-bold text-black bg-white rounded-md mt-2 text-center">Jouer maintenant</a>
          </div>
        </div>
      )}
    </nav>
  );
}

function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/10 py-12 px-4 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <img src={logoUrl} alt="Olympe Logo" className="w-16 h-16 object-contain mb-6 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
        <div className="flex items-center justify-center gap-3 mb-6">
          <span className="text-xl font-black uppercase tracking-widest text-gray-300">Olympe<span className="text-white">.</span></span>
        </div>
        <p className="text-gray-500 text-sm mb-6 max-w-md mx-auto text-center">
          Olympe n'est pas affilié à Rockstar Games, Take-Two Interactive ou toute autre entité liée. Grand Theft Auto V est une marque déposée de Take-Two Interactive.
        </p>
        <div className="flex justify-center gap-6 text-sm font-bold text-gray-400">
          <Link to="/mentions-legales" className="hover:text-white transition-colors">Mentions Légales</Link>
          <Link to="/reglement" className="hover:text-white transition-colors">Règlement</Link>
          <a href={DISCORD_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Support</a>
        </div>
      </div>
    </footer>
  );
}

function Home() {
  const [titlePart1, setTitlePart1] = useState("");
  const [titlePart2, setTitlePart2] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    const text1 = "Bienvenue sur ";
    const text2 = "Olympe.";
    let i = 0;
    let j = 0;
    
    const cursorInterval = setInterval(() => {
      setCursorVisible(v => !v);
    }, 500);

    const type1 = setInterval(() => {
      setTitlePart1(text1.slice(0, i + 1));
      i++;
      if (i === text1.length) {
        clearInterval(type1);
        const type2 = setInterval(() => {
          setTitlePart2(text2.slice(0, j + 1));
          j++;
          if (j === text2.length) {
            clearInterval(type2);
          }
        }, 150);
      }
    }, 80);

    return () => {
      clearInterval(type1);
      clearInterval(cursorInterval);
    };
  }, []);

  return (
    <>
      {/* Hero Section */}
      <div className="relative flex items-center justify-center min-h-screen">
        <div className="absolute inset-0 z-0">
          <img 
            src={bgUrl} 
            alt="Olympe Background" 
            className="w-full h-full object-cover opacity-40 grayscale-[20%]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/80 via-[#0a0a0a]/60 to-[#0a0a0a]"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-16">
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-white/20 bg-white/5 text-gray-300 font-bold text-xs tracking-widest uppercase backdrop-blur-sm">
            Serveur Free Access
          </div>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6 drop-shadow-2xl h-[120px] sm:h-auto flex flex-col sm:block justify-center items-center">
            <span>{titlePart1}</span>
            <span className="text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.6)] italic">{titlePart2}</span>
            <span className={`inline-block w-1 md:w-2 h-[1em] bg-white ml-2 align-middle ${cursorVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-75`}></span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-medium leading-relaxed drop-shadow-md">
            Plongez dans l'univers immersif de San Andreas. Incarnez le personnage de vos rêves, rejoignez les forces de l'ordre, gérez une entreprise ou dominez la rue. Votre histoire commence ici.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/reglement" className="w-full sm:w-auto bg-white hover:bg-gray-200 text-black px-8 py-4 rounded-md font-bold uppercase tracking-wider text-sm transition-all transform hover:scale-105 flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.3)]">
              Règlement
            </Link>
            <a href={DISCORD_LINK} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-[#1a1a1a] border border-white/20 hover:bg-white/10 text-white px-8 py-4 rounded-md font-bold uppercase tracking-wider text-sm transition-all transform hover:scale-105 flex items-center justify-center backdrop-blur-sm">
              Discord
            </a>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="relative z-10 bg-[#0f0f0f] py-16 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-4">
              <div className="flex justify-center mb-4 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]"><Users size={40} /></div>
              <div className="text-4xl font-black mb-1">128</div>
              <div className="text-gray-400 text-sm font-bold uppercase tracking-wider">Joueurs Connectés</div>
            </div>
            <div className="p-4">
              <div className="flex justify-center mb-4 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]"><Shield size={40} /></div>
              <div className="text-4xl font-black mb-1">24/7</div>
              <div className="text-gray-400 text-sm font-bold uppercase tracking-wider">Modération</div>
            </div>
            <div className="p-4">
              <div className="flex justify-center mb-4 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]"><Car size={40} /></div>
              <div className="text-4xl font-black mb-1">150+</div>
              <div className="text-gray-400 text-sm font-bold uppercase tracking-wider">Véhicules Imports</div>
            </div>
            <div className="p-4">
              <div className="flex justify-center mb-4 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]"><Map size={40} /></div>
              <div className="text-4xl font-black mb-1">60fps</div>
              <div className="text-gray-400 text-sm font-bold uppercase tracking-wider">Optimisation</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function MentionsLegales() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-32 pb-24 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-8">Mentions Légales</h1>
        
        <div className="space-y-8 text-gray-300">
          <section className="bg-[#111] p-8 rounded-xl border border-white/10">
            <h2 className="text-2xl font-bold text-white mb-4">1. Éditeur du site</h2>
            <p className="leading-relaxed mb-4">
              Le site web <strong>Olympe Roleplay</strong> est édité par l'équipe administrative d'Olympe.
            </p>
            <p className="leading-relaxed">
              Pour toute demande de contact, veuillez nous joindre via notre <a href={DISCORD_LINK} target="_blank" rel="noopener noreferrer" className="text-white underline hover:text-gray-300">serveur Discord officiel</a>.
            </p>
          </section>

          <section className="bg-[#111] p-8 rounded-xl border border-white/10">
            <h2 className="text-2xl font-bold text-white mb-4">2. Propriété Intellectuelle</h2>
            <p className="leading-relaxed">
              Ce serveur est un projet communautaire non-officiel et n'est en aucun cas affilié, sponsorisé, ou soutenu par <strong>Rockstar Games, Inc.</strong> ou <strong>Take-Two Interactive Software, Inc.</strong><br/><br/>
              Grand Theft Auto et Grand Theft Auto V sont des marques déposées de Take-Two Interactive Software, Inc. Toutes les autres marques et marques commerciales appartiennent à leurs propriétaires respectifs.
            </p>
          </section>

          <section className="bg-[#111] p-8 rounded-xl border border-white/10">
            <h2 className="text-2xl font-bold text-white mb-4">3. Hébergement</h2>
            <p className="leading-relaxed">
              Le présent site internet et l'infrastructure du serveur de jeu sont hébergés par des prestataires spécialisés dont les datacenters sont situés en Europe.
            </p>
          </section>

          <section className="bg-[#111] p-8 rounded-xl border border-white/10">
            <h2 className="text-2xl font-bold text-white mb-4">4. Données Personnelles</h2>
            <p className="leading-relaxed">
              Lors de l'utilisation de nos services (Site Web, Serveur de Jeu, Serveur Discord), certaines données peuvent être collectées (Adresse IP, identifiants Discord, identifiants Steam, etc.) à des fins de modération et de bon fonctionnement du serveur. Ces données ne sont jamais revendues à des tiers.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

function Reglement() {
  const [activeTab, setActiveTab] = useState('global');

  const tabs = [
    { id: 'global', name: 'Global', description: 'Règles générales du serveur' },
    { id: 'illegal', name: 'Illégal', description: 'Activités illégales' },
    { id: 'legal', name: 'Légal', description: 'Entreprises et activités légales' },
    { id: 'notions', name: 'Notions du RP', description: 'Lexique et notions du RolePlay' },
  ];

  const globalRules = [
  {
    title: "Généralités Discord",
    text: "Bienvenue sur notre serveur Discord ! Afin de garantir une communauté agréable, conviviale et sécurisée pour tous, quelques règles sont à respecter. Merci de les lire attentivement avant de participer à la vie du serveur : Respectez chaque membre. Les comportements irrespectueux, le harcèlement, les menaces, l'intimidation ou toute forme de discrimination sont interdits. Aucun contenu illégal ou inapproprié. Il est interdit de partager des images, vidéos, liens ou tout autre contenu contraire aux lois ou aux règles de Discord. Pas de spam ni de publicité. Toute forme de publicité, promotion ou démarchage, que ce soit sur le serveur ou en messages privés, est interdite sans autorisation du Staff. Respect de la vie privée. La diffusion de photos, conversations, informations personnelles ou données concernant une autre personne sans son accord est strictement interdite. Utilisez les bons salons. Veillez à poster vos messages dans les canaux prévus à cet effet et évitez les discussions hors sujet. Les propos offensants sont interdits. Les insultes, provocations et propos vulgaires n'ont pas leur place ici. Les comportements racistes, homophobes, transphobes ou sexistes sont également strictement interdits. Respectez le Staff. Les décisions prises par les modérateurs doivent être respectées. En cas de désaccord ou de problème, adressez-vous à un administrateur afin de trouver une solution. Les règles peuvent évoluer. Le règlement est susceptible d'être modifié à tout moment. Pensez à consulter régulièrement les éventuelles mises à jour. Tout non-respect du règlement pourra entraîner une sanction, allant d'un simple avertissement jusqu'à l'exclusion définitive du serveur, selon la nature et la gravité des faits. En restant sur ce serveur, vous reconnaissez avoir pris connaissance de ces règles et acceptez de les respecter. Si vous ne souhaitez pas les suivre, merci de quitter le serveur."
  },
  {
    title: "Tickets",
    text: "Lors de l'ouverture d'un ticket auprès du Staff, certaines consignes doivent également être respectées : Restez courtois. Utilisez des formules de politesse et adressez-vous aux membres du Staff avec respect. Acceptez les réponses du Staff. Même en cas de désaccord, gardez un comportement calme et respectueux. N'ouvrez un ticket que si nécessaire. Évitez de créer plusieurs tickets ou d'en ouvrir un sans raison valable. Restez actif dans votre ticket. Sans réponse de votre part pendant plus de 24 heures, celui-ci pourra être automatiquement fermé. Expliquez clairement votre demande. Donnez un maximum d'informations afin de permettre au Staff de comprendre et de traiter votre problème efficacement. Évitez de mentionner le Staff. Il est inutile de ping plusieurs membres de l'équipe pour accélérer votre demande. Soyez patient, votre ticket sera pris en charge dès que possible."
  },
  {
    title: "Graphismes & Packs",
    text: "Afin de garantir une expérience de jeu équitable pour l'ensemble des joueurs, toute modification apportant un avantage ou supprimant certains éléments du jeu est strictement interdite. Sont notamment interdits : Les packs No Props, No Elements, No Water, No Bush, etc. L'utilisation de crosshairs externes ou de viseurs personnalisés. L'utilisation de Kill Effects ou effets de mort. L'utilisation de Tracers ou marqueurs de trajectoire des tirs. L'utilisation de Blood Effects ou effets de sang modifiés. L'utilisation de Hit Effects ou effets visuels liés aux impacts. Toute modification de la FOV (champ de vision). La suppression ou modification d'éléments du décor tels que les props, buissons, eau, végétation, etc. L'utilisation de fichiers procurant un avantage en jeu, notamment les fichiers permettant d'obtenir une stamina illimitée, et tout autre fichier similaire. Toute modification considérée comme avantageuse ou susceptible de perturber l'équilibre du jeu pourra faire l'objet d'une sanction. Notre objectif est de maintenir une expérience équitable, équilibrée et agréable pour l'ensemble de la communauté. Chaque joueur est donc responsable des fichiers et modifications présents sur son jeu."
  },
  {
    title: "Remboursements",
    text: "Le Staff n'effectue aucun remboursement dans les situations suivantes : Perte de biens lors d'un reboot : les reboots étant effectués à horaires réguliers, vous devez anticiper ceux-ci et sécuriser vos biens avant leur lancement. Erreur de virement : vérifiez systématiquement le destinataire ainsi que le montant avant de confirmer une transaction. Perte de biens illégaux après un coma ou une déconnexion involontaire : vous êtes responsable de vos biens et de leur sécurité. Perte de biens liée à une inactivité prolongée : pensez à renouveler vos locations de maisons ou d'appartements afin d'éviter leur perte. Vol ou trahison par une personne ayant accès à votre propriété : lorsque vous donnez volontairement un accès à quelqu'un, les conséquences de vos choix restent sous votre responsabilité. Vol dans les coffres de véhicules : aucun remboursement ne sera effectué, à l'exception des situations concernant le vol d'une arme. Le Staff se réserve le droit d'accepter ou de refuser une demande de remboursement selon les circonstances. Toute demande devra être accompagnée de preuves suffisantes et vérifiables permettant de confirmer les faits. Sans preuve convaincante, aucune restitution ne pourra être garantie."
  },
  {
    title: "Streameurs",
    text: "Le streaming sur le serveur est autorisé. Cependant, afin de préserver l'expérience RP et d'éviter toute utilisation abusive des informations HRP, certaines règles doivent impérativement être respectées. Sont interdits : Le trashtalk ou les comportements visant à dénigrer d'autres joueurs. L'utilisation d'informations HRP provenant du chat du stream afin d'obtenir un avantage en jeu. La diffusion de vos interventions administratives : le son et l'image doivent être coupés dès qu'un membre du Staff intervient. Tout dénigrement du serveur, du Staff ou de ses membres."
  },
  {
    title: "Wipe Personnage & Mort RP",
    text: "Le wipe correspond à la suppression complète de votre personnage et de son histoire. Après un wipe, vous devez créer un nouveau personnage et repartir sur une nouvelle histoire RP, sans lien avec votre ancien personnage. Une Mort RP peut entraîner le wipe définitif de votre personnage. Elle peut notamment être prononcée selon différents éléments, tels que : Un dossier de Mort RP validé. Un manque de peur ou un comportement incohérent face au danger. Un abus de tirs ou de blessures. L'expulsion de votre organisation par votre chef, selon les circonstances. Chaque situation est étudiée par le Staff en fonction du contexte et des éléments disponibles. Interdictions : Transfert de biens : après un wipe, il est strictement interdit de transférer ou de faire récupérer des biens appartenant à votre ancien personnage, notamment les véhicules, armes, argent, propriétés ou tout autre bien. Aucun héritage ou transfert indirect ne sera autorisé. Situation financière ou judiciaire : un wipe ne peut pas être effectué si votre compte présente un solde négatif ou si des procédures judiciaires sont toujours en cours concernant votre personnage. Changement de voie : il est interdit de passer du légal à l'illégal, ou inversement, sans effectuer de wipe lorsque celui-ci est requis. Pour les anciens membres de la Police, EMS ou du Gouvernement, toute implication dans des activités illégales avec leur personnage peut entraîner un wipe ainsi qu'une sanction importante. Lien entre personnages : votre nouveau personnage ne doit avoir aucun lien avec votre ancien personnage. Il est également interdit d'utiliser un nouveau personnage afin de rejoindre à nouveau le même groupe, organisation ou entourage dans le but de conserver les mêmes avantages ou relations."
  },
  {
    title: "Interdictions Généralités",
    text: "Dans le but de préserver une expérience RP immersive, saine et agréable pour l'ensemble de la communauté, certaines pratiques sont strictement prohibées sur Olympe. Les comportements suivants ne sont pas autorisés : Tous propos racistes, xénophobes, homophobes, transphobes, discriminatoires ou visant à dénigrer une personne ou une communauté. La diffusion ou l'envoi de contenus religieux, sexuels, haineux ou discriminatoires, sous quelque forme que ce soit. Il est impossible d'incarner un personnage mineur. Tout personnage joué sur Olympe doit avoir au minimum 18 ans. L'utilisation d'un vocal externe à FiveM pendant une scène RP est strictement interdite. Cette règle s'applique également lorsque les personnes concernées ne sont pas actuellement connectées ou présentes avec vous en jeu. Le streamhack est interdit. Il est notamment prohibé de consulter volontairement le stream d'un joueur alors que vous êtes simultanément en jeu afin d'obtenir des informations. Toute forme de RP sexuel, de contenu sexuel ou de messages à caractère sexuel est interdite, quelles que soient les circonstances ou l'âge des personnes concernées. Le langage HRP n'a pas sa place en scène RP. Les expressions telles que « papillon », « j'ai une GoPro », « faire un ticket » ou toute formulation faisant directement référence aux mécaniques HRP sont interdites. Toute publicité ou promotion destinée à un autre serveur RP est interdite. L'exploitation de bugs, glitches ou failles afin d'obtenir un avantage en scène est formellement interdite. Cela comprend notamment l'utilisation d'animations ou le spam de touches pour contourner une mécanique de jeu. Toute transaction de biens, d'argent ou de services contre de l'argent réel est interdite. Les véhicules attribués aux métiers d'intérim doivent exclusivement servir à l'activité pour laquelle ils sont prévus. Le Staff peut retirer tout véhicule utilisé à des fins étrangères à son activité. L'achat, la vente ou le rachat de cartes bancaires est strictement interdit. Il est interdit de publier des annonces proposant des services illégaux sur les différentes applications du serveur, notamment Pages Jaunes, Marketplace, etc. Les échanges illégaux contre de l'argent liquide sont également concernés. La publication de contenu ou d'annonces à caractère illégal sur Birdy ou Instapic est interdite. Les équipements, fournitures ou matériaux appartenant aux entreprises sont réservés à leur utilisation professionnelle. Leur détention ou leur utilisation hors service est interdite, notamment les kits de réparation, bandages EMS, équipements professionnels, etc. Les tenues de Police ou d'EMS ne peuvent pas être détenues ou utilisées par des civils ou pendant une période hors service. Cette interdiction concerne également toute tenue permettant de se faire passer volontairement pour un membre de ces factions. Une dérogation peut être accordée par le Staff dans le cadre d'une scène spécifique proposée par un tiers. Après un wipe, il est interdit de recréer un personnage possédant le même nom ou nom de famille que l'ancien. Il est également interdit d'utiliser plusieurs personnages partageant le même nom ou nom de famille, ainsi que de chercher à venger son ancien personnage avec un nouveau. Il est interdit de créer un personnage reprenant exactement le nom et le prénom d'une personnalité publique connue ou d'un personnage fictif. Il est interdit de prendre la fuite à la nage ou de quitter une scène pendant ou après une course-poursuite, sauf lorsqu'une scène impliquant des bateaux a été préalablement validée."
  },
  {
    title: "Coma & Déconnexions",
    text: "Lorsqu'un joueur tombe dans le coma, certaines règles doivent impérativement être respectées afin de préserver la cohérence de la scène. Le trash corps est strictement interdit lorsqu'un joueur est en coma devant vous. Il est également interdit de déplacer volontairement le corps d'un joueur dans le but de l'empêcher d'être retrouvé, secouru ou pris en charge. Une personne dans le coma ne doit communiquer avec aucun autre joueur, que ce soit par le microphone, /me ou tout autre moyen. La commande /me doit uniquement servir à décrire les sensations, l'état physique, les douleurs ou les émotions de votre personnage. Elle ne doit en aucun cas être utilisée pour transmettre des informations aux autres joueurs. Le coma ne provoque aucune perte de mémoire. Vous conservez les souvenirs des événements ayant précédé votre mise dans le coma. Si votre personnage est victime d'un coma à la suite d'un conflit, vous devez laisser de côté toute rancœur HRP et ne pas utiliser votre nouveau personnage ou votre personnage actuel dans le but de chercher vengeance."
  },
  {
    title: "Bannissements",
    text: "Le Staff d'Olympe se réserve le droit de refuser, suspendre ou retirer l'accès au serveur à toute personne dont le comportement ou les antécédents pourraient représenter un risque pour la communauté. Cela peut notamment concerner : Des antécédents liés au cheat, aux logiciels tiers, à la duplication, à l'exploitation de failles ou à l'obtention d'avantages injustes. Des comportements répétés de toxicité, harcèlement, troll, griefing ou toute autre attitude nuisible à une communauté RP. Des sanctions importantes ou répétées constatées sur d'autres serveurs ou plateformes communautaires. Le Staff d'Olympe peut prendre en considération différents éléments afin d'évaluer le profil d'un joueur, notamment : Son expérience sur FiveM et son temps de jeu, afin d'apprécier sa connaissance des mécaniques et du roleplay. Son comportement et ses échanges sur Discord, que ce soit sur Olympe ou sur d'autres espaces communautaires accessibles publiquement. Son activité sur différents espaces communautaires liés au RP, tels que forums, réseaux sociaux ou serveurs Discord publics. La qualité et la cohérence de ses candidatures, tickets, échanges et interactions avec le Staff. Les différents signalements portés à la connaissance de l'équipe, y compris lorsqu'ils proviennent de sources extérieures au serveur. Toute information considérée comme pertinente par le Staff peut être prise en compte afin de maintenir un environnement respectueux, sécurisé et cohérent avec les valeurs d'Olympe. Dans le cadre de la protection de la communauté, une décision de refus d'accès peut être prise sans qu'une justification publique détaillée soit nécessaire. Le Staff peut également effectuer des vérifications complémentaires, demander des informations supplémentaires ou mettre en place une période probatoire lorsqu'il estime cela nécessaire pour évaluer le comportement, la bonne foi et l'intégration d'un joueur au sein d'Olympe."
  }
];

  const illegalRules = [
  {
    title: "Discord & communication",
    text: "Les mentions du Staff doivent être utilisées uniquement lorsqu'elles sont réellement nécessaires. Toute provocation, attaque ou tentative de conflit envers un joueur ou un groupe illégal est interdite. Les propos ou contenus insultants, discriminatoires, racistes, sexistes, pornographiques ou faisant l'apologie de la violence sont interdits. La publicité pour des serveurs Discord, projets ou communautés extérieurs à Olympe n'est pas autorisée. Le spam, les envois massifs de messages ou de liens ainsi que toute utilisation abusive des salons sont interdits. Chaque discussion doit être réalisée dans le salon prévu à cet effet. Il est interdit d'utiliser plusieurs comptes Discord afin de contourner une règle ou une sanction. Chaque membre doit conserver un comportement respectueux envers les autres joueurs. Les insultes, provocations répétées, discriminations et formes de harcèlement ne sont pas tolérées. Les conflits doivent être réglés de manière mature et posée. En cas de désaccord persistant, le Staff peut intervenir. Les pseudonymes Discord doivent rester corrects et adaptés à la communauté. Les décisions prises par les administrateurs et modérateurs doivent être respectées. Les responsables d'un groupe sont responsables des agissements de leurs membres. Une sanction peut donc être appliquée à l'ensemble du groupe. Tous les membres d'un groupe officiel doivent posséder les rôles Discord correspondant à leur statut. Les groupes officiels doivent respecter les référents Illégal qui leur sont attribués et privilégier la discussion avant toute escalade. Toute demande adressée au Staff doit être accompagnée de preuves lorsque cela est possible. Les tickets doivent présenter le contexte, les personnes concernées, le déroulement des faits et les éléments permettant de comprendre la situation. Une explication complète dans un ticket est préférable à une simple explication vocale. Le salon des suggestions doit uniquement servir à proposer des améliorations concernant le serveur. Il ne doit pas être utilisé pour régler des conflits ou débattre entre joueurs. Une exclusion ou un bannissement du Discord peut également entraîner une sanction en jeu."
  },
  {
    title: "Progression & création de groupe",
    text: "Tout joueur souhaitant se lancer dans l'illégal doit commencer son parcours en tant que civil. Il peut ensuite créer ou rejoindre une Petite Frappe, limitée à ** membres maximum**. Les Petites Frappes peuvent réaliser différentes activités illégales afin de développer leur réputation et leur projet. Après avoir acquis suffisamment de crédibilité, une demande d'évolution vers un groupe officiel peut être effectuée. Cette demande doit être accompagnée d'un dossier présentant l'histoire du groupe, son identité, ses membres et ses motivations. Le projet présenté doit être cohérent et proposer un véritable concept RP. Un entretien oral peut être demandé afin d'évaluer la cohérence du projet et la connaissance de ses membres. Une réponse concernant le dossier est généralement apportée sous 1 à 2 jours. L'accès à un groupe officiel reste soumis à la validation des référents Illégal."
  },
  {
    title: "Règles générales de l'illégal",
    text: "Il est interdit de retourner dans son quartier après avoir été pris en chasse par la police ou par un groupe adverse. Le Fear RP doit être appliqué naturellement lorsqu'une situation représente un danger sérieux pour votre personnage. Il est interdit de participer à une opération illégale menée par un groupe si votre personnage n'en fait pas officiellement partie et n'est pas présent dans sa CREW / menu. Les tirs sur les pneumatiques sont réservés aux groupes officiels et ne peuvent être effectués qu'après 15 minutes minimum de poursuite. Il est interdit de mentir concernant son état de santé ou ses blessures afin d'influencer le déroulement d'une scène. Les alliances entre groupes illégaux ne sont pas autorisées. La présence armée d'un groupe officiel sur une scène d'otage appartenant à un autre groupe peut être considérée comme une alliance. Lorsqu'un groupe est envoyé effectuer une mission précise, il doit se limiter à son objectif, accomplir celui-ci puis quitter les lieux. Il est interdit de dégrader ou de manquer volontairement de respect à un corps dans le but de provoquer ou d'humilier. Il est interdit de récupérer certaines ressources ou certains équipements sur une personne lorsqu'un membre du SAMC ou du SASP est déjà présent sur la scène, conformément aux restrictions prévues. Les échanges, ventes ou actions illégales ne doivent pas être effectués à proximité immédiate des QG ou des zones protégées. Le Fear Organisation est interdit : la peur doit être créée et jouée directement dans le RP. Aucun remboursement ne sera accordé lorsqu'un Lead exclut un membre qui possède encore des objets appartenant au groupe. Une Petite Frappe ne peut pas posséder d'Habitants. Seuls les groupes officiels peuvent attaquer un quartier ou un QG officiel à mains nues ou avec des armes blanches, dans les conditions prévues par le règlement. Les Petites Frappes ne disposent pas de QG officiel, sauf si un emplacement leur est attribué officiellement. Les armes, circuits et objets illégaux doivent être vendus uniquement via DarkChat. Toute scène de torture, mutilation ou mutilation permanente nécessite l'accord du joueur concerné ainsi qu'une validation préalable du Staff. Une trahison réalisée dans l'intérêt d'un autre groupe doit être autorisée par le Staff. Un joueur ne peut avoir qu'un seul personnage impliqué dans l'illégal. La possession de deux personnages illégaux peut entraîner le wipe des deux personnages ainsi qu'un bannissement d'un mois. Les entrepôts communs ne doivent pas servir à effectuer des échanges indirects entre groupes. Le vol d'un véhicule de transport n'est autorisé que lorsque l'identité de son propriétaire est certaine. Lors d'une poursuite se terminant dans l'eau, les poursuivants sont autorisés à tirer. Un otage qui décide de se jeter à l'eau doit accepter les conséquences RP pouvant aller jusqu'à la mort RP. Les points de récolte et de vente ne doivent pas être transformés en zones de braquage permanentes. Il faut attendre qu'un joueur ait quitté le point avant de pouvoir intervenir contre lui. Le camping autour des points de récolte ou de vente est interdit, sauf pour les situations liées à la récolte de drogue. Les Petites Frappes ne peuvent pas s'approprier les points de ressources ou de braquages réservés aux groupes officiels. Les territoires attribués aux gangs doivent être respectés et leur utilisation doit rester cohérente avec l'identité RP du groupe."
  },
  {
    title: "Prises d'otages",
    text: "La capture d'un membre d'un service public peut entraîner de lourdes conséquences RP, pouvant aller jusqu'à une peine de prison à vie ou une mort RP. La prise d'un membre de l'État ou du Gouvernement doit rester une mesure exceptionnelle. Il est interdit d'abuser des prises d'otages sur les membres du SASP lorsqu'ils sont en service. Une embuscade peut être organisée lors d'un rendez-vous prévu pour récupérer un otage. Si un échange dégénère en fusillade et qu'un ou plusieurs otages décèdent, leur mort peut être considérée comme une mort RP. Une guerre ouverte peut être déclenchée lorsque les conditions du GGO sont respectées et qu'un affrontement a lieu pendant le rendez-vous. Un otage peut subir une mort RP si le groupe chargé de venir le récupérer ne se présente pas ou si celui-ci refuse totalement de jouer son Fear RP. Les faux otages sont interdits. Il est interdit de surveiller ou de camper un QG uniquement dans le but de trouver une personne à prendre en otage. Il est interdit de profiter du fait qu'un groupe détienne votre otage pour aller braquer ce même groupe. Toute prise d'otage doit être motivée par un contexte RP réel et cohérent. La rançon maximale est fixée à 5 000 $ par personne et 1 500 $ par véhicule. Il est interdit d'obliger un otage à effectuer un retrait bancaire ou un transfert d'argent. Les armes et munitions ne peuvent pas être utilisées comme monnaie d'échange contre un otage. Un membre du SAMC en service peut être pris en otage, mais son uniforme et son équipement professionnel doivent rester en sa possession. Les scènes sexuelles ou destinées à humilier sexuellement un joueur sont strictement interdites. Une prise d'otage ne peut pas être organisée immédiatement après une fusillade. Les participants doivent quitter la zone. Il est interdit d'attirer volontairement une personne hors d'un commerce afin de la braquer, de la prendre en otage ou de lui voler son véhicule. Les magasins de vêtements constituent l'exception prévue à cette règle. Une prise d'otage peut avoir lieu devant un commerce sous réserve du respect du Mass RP. Il est interdit de prendre une personne en otage à l'intérieur d'un commerce sans dossier et validation préalable du Staff, à l'exception des magasins de vêtements."
  },
  {
    title: "Fusillades & affrontements",
    text: "Les échanges de tirs doivent rester des situations sérieuses et constituer un dernier recours. Une interaction ou confrontation verbale doit obligatoirement précéder l'ouverture du feu. Un simple « mains en l'air » ne constitue pas à lui seul une justification suffisante. Un groupe est limité à une fusillade par soirée. Après avoir été réanimé par le SAMC, il est interdit de retourner sur la scène pour se venger. Il est interdit de prendre une position en hauteur ou de préparer un avantage stratégique avant le début de l'affrontement. L'utilisation volontaire du ragdoll pour faire croire à une blessure est interdite et peut entraîner de lourdes conséquences RP. Il est interdit de ramasser ou déplacer les personnes à terre après une fusillade. Dès qu'une prise en charge par le SASP ou le SAMC commence, il est interdit de revenir sur les lieux. Il est interdit de cacher ou déplacer ses armes et munitions après un affrontement afin d'éviter leur perte. Un véhicule ne doit pas être redéposé volontairement à l'extérieur de la zone où l'affrontement a eu lieu. Le véhicule peut rester dans la zone de combat, mais il est interdit de l'utiliser pour obtenir un avantage en hauteur ou pour profiter abusivement d'un mur ou d'une protection. Une utilisation excessive ou répétée des fusillades peut conduire à une sanction, une mort RP ou un wipe. Un Drive-by doit être réalisé avec un véhicule roulant à 50 km/h maximum. Il est interdit de dépouiller ou braquer une personne depuis son véhicule. Pour effectuer un vol ou un braquage, il faut obligatoirement descendre du véhicule. La scène doit rester courte : quelques tirs puis un départ des lieux. La personne attaquée est autorisée à riposter selon les mêmes règles. Les Drive-by peuvent être réalisés dans les quartiers, les rues, sur les trottoirs et devant les magasins de vêtements. L'objectif doit être de faire passer un message ou de revendiquer clairement une attaque. Les tirs pouvant entraîner une mort RP sont autorisés dans le cadre de la scène, mais les abus sont interdits. Le Walk-by est soumis aux mêmes règles de fonctionnement et de modération."
  },
  {
    title: "Drogues & récoltes",
    text: "Vente & production : La commercialisation de drogues est interdite dans les Zones Safe. Il est interdit de vendre à un PNJ des produits provenant directement de sa propre production. Pour effectuer une vente PNJ, le produit doit avoir été acheté auprès d'un autre joueur. Les ventes PNJ ne peuvent pas être réalisées depuis une voiture, une moto, un quad, un vélo ou un skateboard avec une fuite immédiate. Aucune transaction illégale ne doit avoir lieu dans une Zone Safe ou dans un périmètre de 3 km autour d'un QG. Les plantations et productions illégales doivent être installées dans des lieux cohérents avec le RP. Il est interdit de produire dans un QG, un intérieur, une instance, sur un toit, en montagne ou dans tout emplacement incohérent. Les lieux de production doivent être accessibles par la route aux véhicules concernés. Il est interdit d'utiliser le téléphone ou certaines animations afin de dissimuler volontairement une vente ou une remise de drogue. Les ventes PNJ sont accessibles aux Civils, Indépendants, Petites Frappes, Habitants et Gangs. Les Organisations ne peuvent pas utiliser la vente PNJ. Récolte : Les points de récolte doivent être accessibles sans favoritisme. Il est interdit de réserver certains horaires ou points de récolte à des personnes spécifiques. Les récoltes doivent être effectuées avec des véhicules de transport adaptés, comme les Speedo, Rumpo, Burrito, etc."
  },
  {
    title: "Véhicules & poursuites",
    text: "Les groupes officiels sont tenus de respecter la liste de véhicules validée par les référents Illégal. Toute modification de cette liste doit être soumise à validation et intégrée au dossier du groupe. Les Petites Frappes ne disposent pas d'une liste imposée, mais les véhicules utilisés doivent rester cohérents avec leur identité RP. Les véhicules Supersport sont interdits dans le cadre des activités illégales. Les convois sont interdits, sauf pour l'exception réservée aux MC : 4 motos maximum ou 1 voiture accompagnée de 2 motos. Une poursuite doit rester sur un principe de 1 véhicule contre 1 véhicule. Aucun véhicule supplémentaire ne peut rejoindre une poursuite déjà engagée. Les interventions supplémentaires doivent uniquement être prévues dans le cadre d'un plan préparé à l'avance. Les vélos, motos et skateboards sont interdits pour les activités illégales, sauf pour les MC. Le carjacking est autorisé sous certaines conditions. Le numéro de la victime doit être récupéré afin de pouvoir organiser la restitution ou la récupération du véhicule. Si le propriétaire répond, celui-ci dispose de 48 heures pour récupérer son véhicule par l'intermédiaire d'une rançon. Les appels ou demandes du propriétaire ne doivent pas être volontairement ignorés. Le propriétaire peut utiliser les moyens disponibles pour localiser son véhicule, mais il ne peut pas demander une mise en fourrière. Les poursuites réunissant plusieurs groupes différents sont interdites. Il est interdit de transporter une personne dans le coffre d'un véhicule, sauf dans le cadre d'une prise d'otage. Le téléphone ne doit pas être utilisé comme une radio pendant une poursuite. Les véhicules appartenant à un autre groupe ne peuvent pas être utilisés sans avoir été obtenus à travers une scène RP. Toute utilisation d'informations HRP pour récupérer ou utiliser un véhicule est interdite."
  },
  {
    title: "Armes & munitions",
    text: "Les Civils et Petites Frappes / Habitant peuvent uniquement posséder une Pétoire classique ainsi qu'un Judge Revolver. La Pétoire MK II n'est pas autorisée. Les quantités maximales de munitions sont les suivantes : Armes de poing : 36, Fusils à pompe : 24, SMG : 80, Fusils d'assaut : 90. Les groupes officiels ne peuvent vendre aux Habitants / Petites Frappes que les armes autorisées par le règlement. L'ajout d'un skin ne permet pas d'augmenter artificiellement le prix d'une arme. Les tarifs doivent rester cohérents avec l'économie générale du serveur. Il est interdit de transporter simultanément une arme lourde et une arme automatique dans les conditions prévues par le règlement. Il est strictement interdit de transférer une arme d'un personnage à un autre. Il est également interdit de remettre une arme à un autre joueur dans le but qu'il la revende à votre place. Ce type de transfert peut entraîner un bannissement définitif. Les armes, ressources et objets liés à l'illégal doivent être proposés via DarkChat. Les outils utilisés pour la récolte ou l'agriculture ne doivent pas être détournés à des fins criminelles. Les plafonds de revente sont fixés comme suit : Armes contondantes : 10 000 $, Armes blanches : 20 000 $, Objets lançables : 200 $ par unité, Armes de poing (Pétoire, Beretta, Glock etc) : 80 000 $."
  },
  {
    title: "Braquages, entreprises & laboratoires",
    text: "Fleeca & bijouterie : Le lancement d'un braquage doit obligatoirement entraîner une poursuite. Les braqueurs doivent attendre l'arrivée des forces de l'ordre. Si aucune unité de police ne se présente après 15 minutes, les participants peuvent quitter les lieux. Au minimum 2 braqueurs doivent participer. Au minimum 2 otages doivent être présents. Le groupe doit disposer d'au moins 1 arme à feu accompagnée de 4 munitions. Le braquage est limité à 2 véhicules maximum. Les MC peuvent utiliser jusqu'à 3 motos. Un plan utilisant une Mule ne peut être mis en place qu'après 10 minutes de poursuite. Il est interdit de dépouiller les otages. Une rançon supplémentaire ne peut pas être réclamée aux otages dans le cadre du braquage. Une personne déjà engagée dans un braquage ne peut pas être utilisée comme otage. Lorsqu'un plan Mule est prévu, un véhicule adapté doit être utilisé : Mule, camion ou fourgon. Les MC peuvent effectuer les braquages autorisés avec leurs motos. Commerces, conteneurs & cambriolages : Les participants doivent attendre l'arrivée des forces de l'ordre. Si aucune intervention n'a lieu après 5 minutes, les braqueurs peuvent quitter la scène. Les prises d'otages sont interdites pour ces activités. Les plans Mule ne sont pas autorisés. Les deux-roues, BMX, skateboards et véhicules de travail ne peuvent pas être utilisés. Attaque d'entreprise : Toute attaque visant une entreprise doit être précédée d'un dossier. Celui-ci doit expliquer l'origine du conflit, les scènes RP ayant mené à l'attaque ainsi que les preuves disponibles. Une entreprise incendiée ou détruite passe en statut inactif. Sa remise en activité nécessite l'accord des référents Entreprises et Illégal. Laboratoires de drogue : Une attaque contre un laboratoire nécessite obligatoirement la préparation d'un dossier. La position exacte du laboratoire doit apparaître dans celui-ci. Deux véhicules doivent avoir été interceptés : l'un transportant les matières premières et l'autre les produits transformés. Une photographie du joueur devant l'entrée du laboratoire doit être fournie. Les différentes informations utilisées dans le dossier doivent avoir été obtenues en RP. Aucun otage ne doit être placé à la sortie du laboratoire. Il est interdit de rester en attente ou de camper autour du laboratoire. Il est interdit de bâcher ou bloquer les véhicules à l'intérieur ou autour du laboratoire. Les véhicules de transport adaptés doivent être utilisés. Les SUV et véhicules tout-terrain ne peuvent pas remplacer les véhicules de transport prévus. Laboratoire d'armes : Les armes fabriquées dans un laboratoire ne peuvent pas être récupérées comme butin. Si le groupe ciblé possède déjà des armes fabriquées et dispose d'un surplus, une somme correspondant à leur valeur peut être demandée. L'alliage de titane peut être récupéré à hauteur de 50 %, avec une limite d'un seul item ou de sa valeur équivalente en argent. Aucun véhicule ne doit être bâché ou bloqué à l'intérieur ou à proximité du laboratoire. Un véhicule de transport est obligatoire, même lorsqu'une seule arme est concernée. Les matières premières et les produits finis doivent rester dans le véhicule de transport. Aucun otage ne doit être placé à la sortie du laboratoire. Business secondaires : L'attaque d'un business secondaire nécessite la création préalable d'un dossier. Le dossier doit mentionner l'emplacement du business. Un véhicule transportant des marchandises appartenant au business doit avoir été intercepté. Une photographie du joueur devant l'entrée du business doit être présentée. Toutes les informations nécessaires doivent avoir été obtenues grâce au RP. Un groupe peut gérer 2 business secondaires maximum. Les deux activités doivent obligatoirement être de catégories différentes."
  },
  {
    title: "Loot & dépouillement",
    text: "Il est interdit de récupérer les armes, munitions ou radios d'un joueur, d'un véhicule ou d'une instance. Le freeloot est interdit. Le maximum récupérable est de 50 % d'un stackable ou 1 seul objet non-stackable. Les téléphones ne peuvent pas être pris comme butin. Dans le cadre d'une prise d'otage, un téléphone peut être temporairement confisqué, mais il doit être rendu à la fin de la scène. Il est interdit d'imposer un retrait bancaire ou un transfert d'argent à un joueur. Les clés ne peuvent pas être volées, à l'exception des clés de véhicules lorsque le contexte le permet. Les cartes d'identité et documents ne peuvent pas être récupérés comme butin. Les chaînes, montres et bijoux peuvent être pris afin d'obtenir des informations permettant de retrouver ou contacter leur propriétaire. Les lunettes, vêtements et autres éléments similaires ne peuvent pas être dérobés. Les accessoires récupérés doivent rester équipés sur le joueur et ne peuvent pas être revendus. Il est interdit d'utiliser un lockpick pour pénétrer dans le domicile d'un joueur afin de prendre ses occupants en otage. Vol après exclusion d'un groupe : La récupération de biens appartenant à un ancien groupe n'est autorisée que dans les situations prévues par le règlement. Les armes, tablettes et munitions ne peuvent jamais être récupérées. La récupération est limitée à 1 objet ou 50 % d'un stackable. Le joueur doit avoir possédé la clé du coffre au moment de son exclusion. Cette possibilité concerne uniquement les joueurs ayant été exclus du groupe, et non ceux ayant décidé de partir volontairement."
  },
  {
    title: "Revanche & délai",
    text: "Une prise d'otage entraîne un délai avant qu'une nouvelle action hostile puisse être menée contre les personnes ou groupes impliqués. Le délai habituel est fixé à 1 jour / reboot. Lorsqu'une guerre est officiellement déclarée, le délai est ramené à 2 heures. En cas de scènes très rapprochées dans le temps, un minimum d'1 heure doit être respecté. Le Staff peut intervenir lorsqu'une vengeance rapide n'est pas suffisamment justifiée par le contexte RP."
  },
  {
    title: "Mort RP & wipe",
    text: "Avant d'intégrer un projet illégal nécessitant un changement de personnage, le wipe doit être effectué conformément aux règles. Le Lead d'un groupe officiel peut demander ou imposer une mort RP à un membre exclu lorsque les conditions prévues sont réunies. Tout départ volontaire d'un groupe officiel entraîne un wipe obligatoire, quelle que soit la raison du départ. Le départ d'une Petite Frappe ne nécessite pas systématiquement un wipe, mais le changement doit rester cohérent avec le personnage. Lorsqu'un joueur quitte volontairement un groupe officiel, aucun bien appartenant au groupe ne peut être emporté. Tout objet placé dans un coffre commun est considéré comme propriété du groupe. Un délai de 3 semaines doit être respecté avant de rejoindre un nouveau groupe officiel après la création du personnage lié au groupe précédent. Il est interdit de déplacer les biens communs vers son coffre personnel juste avant son départ. Un Lead ne peut pas exclure tous les membres de son groupe uniquement afin de conserver les biens et poursuivre l'activité seul. Les référents Illégal peuvent sanctionner un membre, un Lead ou un groupe entier en cas d'abus. Un groupe peut également faire l'objet d'un wipe ou d'un blacklist lorsque son comportement ou sa mentalité ne correspond plus aux attentes du serveur. Le passage du légal vers l'illégal, ou de l'illégal vers le légal, doit respecter les obligations de wipe prévues par le règlement. Un nouveau personnage ne peut conserver aucun souvenir ou aucune connaissance provenant d'un ancien personnage. Cela concerne notamment les emplacements de drogue, les groupes, les contacts et toute autre information obtenue avec l'ancien personnage. Un wipe ne peut pas être demandé lorsqu'une procédure judiciaire est toujours en cours. Un personnage ayant un solde bancaire négatif ou des factures impayées doit d'abord régulariser sa situation. Aucun transfert de biens ne peut être effectué avant un wipe. Les dons, héritages ou transmissions visant à contourner cette interdiction sont également interdits."
  },
  {
    title: "Arnaques & vols",
    text: "Les escroqueries sont strictement interdites sur Olympe. Il est interdit de mettre en place de fausses ventes concernant des armes, de la drogue, du blanchiment, des propriétés ou tout autre bien. Le tarif demandé lors de la vente d'un véhicule doit rester cohérent avec son prix d'achat et les améliorations apportées. Les armes blanches et armes de poing ne peuvent pas être dérobées dans les coffres de véhicules. Les autres formes de vol restent possibles dans le respect des règles et aux risques du propriétaire. Le vol ou l'utilisation d'une carte bancaire appartenant à une autre personne est interdit. Il est interdit de forcer l'ouverture d'un appartement dans le but de voler ses occupants. Le lockpick ne peut pas être utilisé pour pénétrer dans une habitation afin de dépouiller les personnes présentes. Les vols effectués dans les coffres de véhicules ne donnent généralement droit à aucun remboursement, hors exceptions prévues pour les armes. Il est interdit d'utiliser une annonce Marketplace afin d'attirer une personne dans le but de la braquer, de la prendre en otage ou de lui voler son véhicule."
  },
  {
    title: "Corruption",
    text: "La corruption d'un membre du Gouvernement ne peut être mise en place qu'après validation préalable d'un dossier par le Staff. Les fonctions pouvant faire l'objet d'une corruption sont : Conseiller, Secrétaire, Protection rapprochée. Les postes suivants sont exclus de toute corruption : Gouverneur, Vice-Gouverneur, Chef de Cabinet, IRS. Le dossier doit présenter clairement : Le nom du personnage concerné, Sa fonction au sein du Gouvernement, Les raisons pouvant expliquer sa corruption, Le but recherché par cette démarche. La demande doit être envoyée au moyen d'un ticket Discord. Un personnage impliqué dans une affaire de corruption peut être exposé à une mort RP selon le déroulement de la scène. Jouer un personnage corrompu sans avoir obtenu l'autorisation du Staff est passible de sanctions. Le RP illégal doit rester cohérent, construit et respectueux des autres joueurs. Toute utilisation abusive des mécaniques, du règlement ou du HRP pourra faire l'objet d'une sanction adaptée à la situation."
  }
];

  const legalRules = [
  {
    title: "Police - Introduction & Rejoindre le SASP",
    text: "La Police a pour vocation de proposer une expérience roleplay cohérente, immersive et basée sur la création de scènes entre les différents joueurs. Intégrer la Police signifie incarner un personnage à part entière, disposant de son propre passé, de ses ambitions, de ses relations, de sa vie personnelle et d'une évolution qui lui est propre. Chaque membre de la faction participe directement à l'image et au fonctionnement de celle-ci. Une implication sérieuse, une capacité d'adaptation et une volonté de créer du RP avec les civils, les forces de l'ordre et les groupes illégaux sont donc attendues. L'objectif est de favoriser des scènes équilibrées, variées et intéressantes pour l'ensemble des participants. Toute personne rejoignant le SASP d'Olympe s'engage à respecter le présent règlement. Rejoindre le SASP permet d'incarner un personnage au sein d'une faction majeure du serveur. Cette intégration demande de l'investissement, une bonne compréhension des attentes de la faction ainsi qu'une volonté de faire évoluer son personnage sur le long terme. Chaque candidat doit présenter un personnage disposant d'un background travaillé, cohérent et crédible, ainsi que d'objectifs permettant son évolution. La majorité IRL est obligatoire afin de garantir la maturité nécessaire à l'exercice de ce type de rôleplay. Le background présenté lors de l'intégration ne constitue pas une simple formalité. Il sert de base au suivi du personnage et permet d'assurer la cohérence de son évolution. Certaines candidatures peuvent être refusées lorsque le profil du joueur, son historique de sanctions ou son comportement ne correspondent pas aux attentes du projet. Une Blacklist SASP peut notamment faire suite à des sanctions répétées, plusieurs bannissements, un départ prématuré d'un précédent projet Police ou une incompatibilité avec l'état d'esprit recherché. Les demandes de retrait d'une Blacklist sont étudiées au cas par cas. Il est inutile d'ouvrir un ticket uniquement dans le but de demander son retrait."
  },
  {
    title: "Police - Cohérence générale & Responsabilité RP",
    text: "Le SASP possède son propre cadre RP ainsi que son propre lore. Tout membre intégrant la Police doit respecter cet univers et agir en permanence en cohérence avec le personnage qu'il incarne. Un policier représente une institution publique. Il est donc soumis à une hiérarchie, à des obligations professionnelles, à des règles internes ainsi qu'aux conséquences de ses décisions. Le comportement d'un agent doit rester cohérent avec son grade, sa fonction et son parcours. Un comportement incohérent ou répété contraire à l'image attendue d'un membre du SASP peut remettre en question la présence du personnage au sein de la faction. Le rôle d'un policier ne consiste pas uniquement à interpeller, saisir ou obtenir une issue favorable. Chaque rencontre doit avant tout être considérée comme une opportunité de créer une scène. Les agents doivent éviter une approche basée uniquement sur la confrontation ou la recherche de saisies. La priorité reste la qualité des interactions, la cohérence du personnage et le plaisir de jeu collectif. Chaque membre du SASP doit comprendre que ses décisions et ses actions peuvent avoir des conséquences sur l'évolution de son personnage. Une erreur, une intervention, un comportement ou une décision particulière peut entraîner des conséquences RP, qu'elles soient positives ou négatives. Rejoindre la Police signifie accepter ces conséquences et être capable de faire évoluer son personnage en fonction de celles-ci. Même lorsqu'une conséquence représente une difficulté pour le personnage, le joueur doit l'accepter et l'intégrer à son RP. Un joueur ne doit pas chercher à éviter une situation uniquement parce que celle-ci pourrait avoir un impact négatif sur son personnage. Chaque membre du SASP est également soumis au règlement interne de la Police, disponible en jeu. Les erreurs professionnelles, les manquements aux procédures ou les mauvaises utilisations du matériel sont traités dans le cadre du RP lorsque cela est applicable."
  },
  {
    title: "Police - Actions & conséquences RP",
    text: "Le roleplay repose sur l'évolution des personnages et sur les conséquences de leurs choix. Un membre du SASP peut être confronté à une enquête interne, une suspension, une rétrogradation, une mutation ou un licenciement, selon les circonstances. Refuser une conséquence cohérente avec son RP, chercher volontairement à la contourner ou empêcher son personnage d'évoluer à la suite de ses propres actions pourra entraîner une sanction. Intégrer la Police ne constitue pas un droit permanent. La présence d'un personnage au sein du SASP dépend notamment de sa cohérence, de son investissement et de son comportement. La hiérarchie peut prendre les décisions nécessaires concernant l'avenir d'un personnage lorsque la situation RP le justifie. Un personnage peut ainsi évoluer vers une suspension, une mutation, un licenciement ou toute autre conséquence cohérente avec les événements vécus."
  },
  {
    title: "Police - Interdictions & règles applicables",
    text: "Afin de garantir l'investissement nécessaire au développement d'un personnage, l'utilisation d'un second personnage actif est interdite pendant l'intégration au SASP. Tout personnage secondaire devra être verrouillé ou rendu inutilisable avant le début de l'école de Police. Un membre du SASP ne peut pas exercer une seconde activité professionnelle ou un autre métier en parallèle. Les activités civiles ou associatives restent toutefois autorisées lorsqu'elles sont cohérentes avec le personnage. Il est strictement interdit de voler, utiliser ou transmettre des équipements, tenues ou matériels appartenant à la Police en dehors d'un cadre RP validé. Une exception peut être accordée aux groupes officiels lorsqu'une scène RP cohérente justifie le vol d'une tenue ou d'un équipement. Dans ce cas, le lead du groupe ou le joueur concerné doit obligatoirement ouvrir un ticket après la scène afin d'informer le Staff Police du matériel dérobé. Le Staff décidera ensuite si le vol est validé et si le matériel concerné peut être conservé. Un personnage ne peut pas passer d'une activité légale à une activité illégale, ou inversement, sans une évolution RP cohérente pouvant nécessiter un wipe. Toute activité illégale réalisée avec un ancien personnage ayant appartenu à la Police pourra entraîner une sanction. Il est également interdit de créer un nouveau personnage directement lié à un ancien personnage Police. Il est interdit de rejoindre immédiatement le SASP avec un nouveau personnage après avoir terminé un précédent projet Police, lorsque cette transition n'est pas cohérente avec le RP attendu. Tout comportement discriminatoire ou harcelant est strictement interdit, aussi bien en RP qu'en HRP. Les différences entre personnages peuvent être utilisées dans une scène lorsqu'elles restent cohérentes avec le contexte RP. Elles ne doivent cependant jamais servir de justification à des propos ou comportements déplacés envers les joueurs. Les infractions commises par un personnage peuvent entraîner une amende, conformément aux procédures prévues. Le paiement d'une amende constitue une conséquence RP liée aux actes commis par le personnage. Les sanctions financières doivent être intégrées au roleplay et ne doivent pas être considérées comme une simple contrainte extérieure au jeu. Les délits importants et les crimes peuvent entraîner une incarcération. Une peine de prison représente une conséquence RP importante et doit être pleinement jouée par le personnage concerné. La prison ne doit pas être considérée uniquement comme un lieu de sanction, mais également comme un espace permettant la création de nouvelles scènes et interactions entre joueurs."
  },
  {
    title: "Police - Fear RP, Fair-play & Relations",
    text: "Un membre du SASP reste avant tout un personnage humain et doit agir en conséquence. Lors de situations dangereuses telles que des prises d'otages, interventions armées ou confrontations, le Fear RP doit impérativement être respecté. La fonction de policier ne rend pas un personnage invincible. Refuser de reconnaître un danger, agir de manière incohérente face à une menace ou provoquer volontairement une situation sans prendre en compte les risques encourus pourra entraîner une sanction. Les civils et les membres de groupes illégaux doivent également respecter le Fear RP face aux forces de l'ordre. La Police représente une institution disposant d'effectifs, de moyens et d'une capacité d'intervention importante. Les joueurs doivent donc adopter un comportement cohérent face à l'autorité et aux risques représentés par les forces de l'ordre. Le matériel et les équipements Police sont fournis dans le cadre des fonctions exercées. Ils ne doivent jamais être utilisés comme un moyen de créer un avantage disproportionné ou de déséquilibrer volontairement une scène. Les groupes illégaux peuvent avoir investi une quantité importante de temps RP afin d'obtenir certains objets, ressources ou informations. Les membres du SASP doivent donc faire preuve de fair-play lors des saisies, récupérations de matériel et interventions. Une action Police doit avant tout servir à créer du roleplay, et non simplement à rechercher une saisie, une arrestation ou un avantage. Un personnage peut parfaitement avoir une opinion négative de la Police en raison de son histoire ou de son environnement RP. Cependant, les insultes répétées, provocations abusives ou comportements ayant pour seul objectif de détériorer les scènes Police ne sont pas acceptés. La haine d'une institution dans le cadre du personnage est une chose. Le manque de respect envers les joueurs qui incarnent cette institution en est une autre. Les abus répétés de vocabulaire ou de comportement pourront entraîner de lourdes sanctions, pouvant aller jusqu'au bannissement définitif. Aucune interdiction générale ne s'applique aux personnes fréquentées par un membre du SASP. Un policier peut avoir des proches, amis ou relations avec différents profils de joueurs, y compris des personnes impliquées dans des activités opposées à son métier. Chaque relation doit toutefois rester cohérente avec le personnage et son histoire. Les joueurs doivent conserver une séparation claire entre les relations civiles de leur personnage et leurs fonctions au sein du SASP. Les groupes illégaux font partie intégrante de l'univers d'Olympe. Les membres du SASP doivent considérer ces groupes comme des acteurs du RP, et non simplement comme des adversaires à vaincre. Le rôle de la Police est de participer à l'évolution du serveur à travers les enquêtes, interventions et interactions, et non de chercher à supprimer l'activité des groupes illégaux. Les enquêtes, interpellations et procédures doivent être menées avec pour objectif principal la création de scènes cohérentes. Un agent ne doit pas utiliser sa fonction uniquement pour rechercher des saisies, multiplier les arrestations ou empêcher le développement d'un groupe. Une situation peut évoluer de nombreuses façons : une enquête peut prendre du temps, une négociation peut être nécessaire et une intervention peut connaître plusieurs issues. Les prises d'otages, braquages, embuscades et autres situations dangereuses font partie intégrante du rôle de policier. Un agent doit être capable d'évaluer une situation en fonction de son personnage et du contexte. Il ne doit cependant pas adopter un comportement ayant pour unique objectif de supprimer toute possibilité de conséquence. Le refus volontaire d'une scène, le manque d'implication ou la recherche systématique d'une solution permettant uniquement d'éviter un danger pourra entraîner une sanction. Les procédures Police encadrent certaines situations comme les braquages, prises d'otages ou courses-poursuites. Toutefois, le rôleplay Police ne doit pas se limiter à ces événements. Chaque membre du SASP doit rester ouvert aux différentes scènes pouvant apparaître durant son service. Une interaction civile, une situation inhabituelle ou un événement imprévu peut représenter une véritable opportunité de créer du RP. Le but n'est pas uniquement de résoudre une situation, mais de participer à une scène intéressante pour l'ensemble des joueurs."
  },
  {
    title: "Police - Gestion des preuves, Divisions & Prison",
    text: "Lors d'une plainte, d'une enquête, d'une déposition ou de toute autre procédure RP, seuls les éléments accessibles et obtenus en jeu peuvent être utilisés comme preuves. Une preuve RP doit pouvoir être obtenue, connue ou exploitée par un personnage dans le cadre du serveur. Les éléments obtenus directement en jeu peuvent être utilisés dans le cadre d'une procédure RP, notamment les informations présentes dans les outils du serveur, les photographies ou vidéos réalisées avec le téléphone, les témoignages de personnages, les rapports ou documents RP ainsi que les enregistrements de bodycam lorsqu'ils sont activés. Les éléments provenant d'une plateforme extérieure au serveur ne sont pas recevables dans un cadre RP. Cela comprend notamment : les captures d'écran externes, les clips réalisés hors jeu, les messages Discord, les conversations vocales extérieures au serveur, tout élément obtenu en dehors du personnage. Aucun message provenant de Discord ne peut être utilisé comme preuve en jeu, qu'il s'agisse d'une conversation privée, d'un serveur Discord ou d'un serveur appartenant à une entreprise. Les éléments présentés comme des « mails RP » ou autres échanges réalisés hors jeu ne constituent pas des preuves RP et ne peuvent pas être utilisés comme tels. Les informations communiquées par un joueur sur Discord concernant une absence ou une indisponibilité restent strictement HRP. Elles ne peuvent en aucun cas être réutilisées en jeu pour justifier une action RP. Il est également interdit de demander, d'exiger ou de contraindre un joueur à révéler la raison de son absence afin de l'utiliser dans un contexte RP. Concernant les patrons d'entreprises, les logs accessibles peuvent être utilisés comme pistes ou premiers éléments d'orientation, notamment lors d'une enquête concernant un vol. Une capture de logs ne constitue cependant pas une preuve RP et ne peut pas être utilisée comme unique élément permettant de justifier une action judiciaire. Les différentes divisions ont pour objectif d'enrichir le roleplay en permettant la création de nouvelles scènes, enquêtes et interactions entre joueurs. Elles ne constituent pas un moyen d'obtenir davantage de pouvoir ou d'avantages. Chaque membre d'une division doit conserver la même philosophie que l'ensemble du SASP : privilégier la création de RP plutôt que la recherche d'arrestations, de saisies ou de résultats. Toute utilisation d'une division contraire à cet objectif pourra faire l'objet d'une sanction. Le SASP ne dispose pas d'une division exclusivement consacrée aux interventions. Ce fonctionnement permet de préserver la diversité des scènes et de permettre à chaque agent de participer à différents types de situations : négociations, interventions, enquêtes ou interactions civiles. La prison constitue un environnement RP sécurisé placé sous la responsabilité du SASP. Des sessions peuvent être organisées afin de permettre aux détenus, aux personnes sous bracelet ou aux personnes en attente de jugement de participer à différentes scènes avec les surveillants et les forces de l'ordre. La prison doit être considérée comme un véritable lieu de vie RP et non uniquement comme un espace de sanction. Chaque détenu reste considéré comme un criminel au sein d'un établissement pénitentiaire américain. Le respect du cadre carcéral, des surveillants et des règles internes est donc indispensable. Les conflits, relations et événements pouvant se produire en prison doivent rester cohérents avec l'univers RP. Les conséquences liées à ces événements doivent être pleinement assumées par les personnages concernés. Des situations graves peuvent survenir entre groupes rivaux présents dans l'établissement, notamment des conflits, blessures ou scènes de violence, lorsqu'elles sont cohérentes avec le contexte RP. Des événements exceptionnels tels qu'une émeute ou une tentative d'évasion peuvent également être envisagés lorsque le contexte le justifie et que le roleplay le permet."
  },
  {
    title: "SAMS - Présentation & Intégration",
    text: "La San Andreas Medical Services (SAMS) est une institution médicale ayant pour mission d'assurer la prise en charge et le suivi médical de la population de San Andreas. Grâce à une équipe composée de professionnels qualifiés et investis, la SAMS intervient quotidiennement sur l'ensemble du territoire afin de répondre aux différentes situations médicales rencontrées en ville comme dans les zones plus isolées. La SAMS s'appuie sur plusieurs centres médicaux afin de garantir une couverture optimale du territoire et permettre à chaque citoyen d'accéder à des soins adaptés à sa situation. L'organisation dispose également de plusieurs unités spécialisées permettant d'intervenir dans des environnements particuliers et lors de situations nécessitant des moyens spécifiques, notamment dans les domaines du secours, de la recherche et du sauvetage. En complément des interventions médicales classiques, la SAMS propose différents services destinés à répondre aux besoins de la population, notamment : les soins médicaux d'urgence, la médecine générale, la chirurgie, le suivi psychologique, l'obstétrique, les analyses et services de laboratoire, le service mortuaire, les interventions et opérations de secours spécialisées. La diversité de ses services permet à la SAMS d'assurer une prise en charge complète des patients et de répondre efficacement aux différentes situations rencontrées sur le territoire. Aujourd'hui, la SAMS a pour objectif de maintenir un niveau de soins élevé, d'améliorer continuellement ses services et de contribuer au bien-être ainsi qu'à la sécurité de la population de San Andreas. Pour intégrer la SAMS, il est nécessaire de rejoindre le Discord de la faction et de déposer une candidature en suivant les indications présentes dans la rubrique dédiée aux recrutements. Rejoindre la SAMS représente un véritable engagement. Chaque candidat doit être certain de sa volonté d'intégrer la faction et être prêt à s'investir durablement dans son personnage. Les départs précipités ou les changements de faction répétés pourront entraîner une Blacklist de la SAMS, voire des différents services publics selon les circonstances. Une fois intégré à la faction, chaque membre doit incarner son personnage de manière cohérente avec les attentes liées à la profession médicale. Tout comportement contraire au rôle attendu d'un membre de la SAMS pourra entraîner des sanctions importantes. Après validation de la candidature et réalisation de l'entretien, les nouveaux membres devront suivre une formation d'intégration afin de découvrir le fonctionnement de la faction, ses procédures et les différentes attentes liées au rôle."
  },
  {
    title: "SAMS - Règlement HRP",
    text: "Un membre de la SAMS est avant tout un professionnel de santé. Son rôle consiste à prendre en charge les patients, qu'il s'agisse de blessures légères ou de situations médicales plus importantes. La faction dispose également de différents pôles et fonctions spécifiques permettant de développer plusieurs types de roleplay médical. Il est obligatoire d'être en service pour effectuer des soins ou facturer une prestation médicale. Il est strictement interdit de prendre son service dans le seul but de soigner ou favoriser une connaissance. Les soins doivent obligatoirement être réalisés avec la tenue de service appropriée. Il est également interdit d'effectuer des soins directement depuis l'accueil de l'hôpital lorsque ceux-ci nécessitent une prise en charge médicale. Les membres de la SAMS sont soumis aux lois en vigueur et doivent rester neutres vis-à-vis des activités illégales. Ils ne peuvent pas participer volontairement à des activités criminelles ou prendre part à des scènes illégales en tant qu'acteurs. Une intervention en tant que victime reste naturellement possible lorsque le contexte RP le justifie. Les véhicules de service sont exclusivement réservés aux activités professionnelles. Leur utilisation à des fins personnelles, pour effectuer des déplacements privés ou pour rendre service à un proche est interdite. Il est strictement interdit de passer abusivement d'un rôle illégal à celui de membre de la SAMS, ou inversement, avec un même personnage. Une telle transition doit respecter une évolution RP cohérente et les règles applicables au changement de voie. Tout changement de rôle effectué dans le but de contourner les règles, de protéger un personnage ou d'obtenir un avantage pourra entraîner un wipe du personnage, ainsi qu'une Blacklist ou un bannissement selon la gravité des faits. Chaque membre de la SAMS doit adopter un comportement cohérent avec sa fonction et respecter l'image de la faction. L'objectif principal reste la création de scènes médicales immersives et agréables pour l'ensemble des joueurs. Les membres de la SAMS doivent également conserver une attitude professionnelle avec les patients, les forces de l'ordre, les civils et les différents groupes présents sur le serveur."
  },
  {
    title: "Gouvernement & DOJ",
    text: "Le Gouvernement, dirigé par le Gouverneur, assure la gestion de l'État de San Andreas. Le DOJ est une institution indépendante travaillant en collaboration avec le Gouvernement. Les candidatures au Gouvernement ou au DOJ doivent être validées par le Staff. Conditions & règles : avoir 17 ans HRP minimum. Ne pas être banni du serveur. Le RP illégal est strictement interdit pour les membres. Il est interdit de posséder un P2 ou autre slot. Aucun autre métier n'est autorisé sans accord du Staff. Le vol, transfert ou détournement de matériel public est strictement interdit. Les locaux du Gouvernement et du DOJ sont des zones safe. Il est interdit d'utiliser la fonction RP d'un membre pour organiser une embuscade ou une prise d'otage. Tout membre impliqué dans des activités illégales s'expose à un licenciement et à de lourdes sanctions. Le Lead peut licencier un membre à tout moment. DOJ : les informations et dossiers judiciaires sont confidentiels. Chaque membre doit respecter ses missions et les délais impartis. Le matériel du DOJ doit être utilisé uniquement dans le cadre du RP. Toute relation avec le milieu illégal est interdite. Les communications avec les médias doivent passer par les canaux officiels. Les avocats sont soumis aux règles de confidentialité et de comportement du DOJ. Gouvernement : les élections ont lieu tous les 5 mois. Les informations internes du Gouvernement sont confidentielles. Chaque membre doit respecter ses fonctions et ses responsabilités. Le matériel gouvernemental doit être utilisé uniquement dans le cadre du RP. Toute communication officielle avec les médias ou organismes extérieurs doit être validée par les canaux prévus. Toute implication dans des activités illégales est strictement interdite. Règlement interne : en rejoignant le Gouvernement ou le DOJ, chaque membre accepte automatiquement le règlement interne de sa faction. Celui-ci est consultable via l'Académie Discord. Tout manquement peut entraîner une sanction RP, une rétrogradation ou un licenciement. Peines judiciaires : les décisions judiciaires importantes doivent être justifiées, documentées et équitables. Toute demande de prison à vie, longue peine ou CK doit obligatoirement être validée au préalable par le Staff en charge du Gouvernement. Les pouvoirs du Gouvernement et du DOJ doivent être utilisés pour faire vivre le RP, et non pour en abuser."
  },
  {
    title: "Entreprises - Règlement général & Personnage",
    text: "Il est interdit d'être Patron ou Co-Patron de plusieurs entreprises, même avec plusieurs personnages. L'argent de l'entreprise appartient à celle-ci. Toute dépense personnelle avec les fonds de l'entreprise est interdite. Le blanchiment est limité à 100 000 $ par semaine. Tout système de blanchiment doit être validé par les référents Entreprises avant sa mise en place. Les entreprises doivent respecter les Codes des taxes, du travail et des entreprises. Toute cession d'entreprise doit être signalée au Gouvernement et aux référents. Les véhicules d'entreprise ne peuvent être vendus qu'au concessionnaire concerné. Un Patron ou Co-Patron ne peut pas vendre ses biens personnels à sa propre entreprise. Une entreprise est limitée à 80 employés maximum, direction comprise. Le copinage et le favoritisme sont strictement interdits. Les entreprises officielles doivent conserver un comportement exemplaire. Le RP illégal et les activités criminelles restent soumis aux règles spécifiques de chaque entreprise. Il est interdit de voler plus de 200 items par personne et par semaine dans les coffres d'entreprise. Il est interdit d'interagir avec les véhicules d'entreprise qui ne vous sont pas attribués. Les licenciements doivent être justifiés en RP. Toute raison HRP doit être validée par les référents. Plusieurs de vos personnages ne peuvent pas travailler dans la même entreprise ou dans des entreprises du même secteur. Après un wipe, un personnage ne peut pas réintégrer immédiatement la même entreprise. Un délai de 2 mois doit être respecté après un wipe avant toute réintégration. Après un wipe, toute réintégration doit obligatoirement commencer au grade le plus bas. Il est interdit de prendre son service uniquement pour effectuer une vente, une réparation ou une action ponctuelle avant de quitter immédiatement le service. Un Patron ou Co-Patron ne peut pas posséder de P2 dans un groupe officiel."
  },
  {
    title: "Entreprises - Discord, Annonces & Contenu",
    text: "Discord est réservé à certaines utilisations : Candidatures, Démarches gouvernementales, Règlements, cartes et catalogues, Annonces et échanges internes, SAMC. Tout le reste doit être effectué en RP. Annonces HRP : utilisation exceptionnelle uniquement ; réservées aux recrutements et événements importants. Annonces RP : 30 minutes minimum entre deux annonces ; 30 annonces maximum par semaine ; autorisées pour les promotions, recrutements et événements ; interdites pour simplement annoncer une ouverture ou fermeture. Contenu : les images générées par IA sont interdites pour les logos, affiches et contenus officiels des entreprises."
  },
  {
    title: "Entreprises spécifiques - Mécanicien, Musique, Concession & Presse",
    text: "Mécanicien : tous les kits de réparation doivent être remis dans le stock à la fin du service. Les dépannages peuvent être effectués avec des véhicules adaptés. Il est interdit de prendre son service uniquement pour dépanner un ami. Maximum 2 4x4 autorisés pour les interventions dans les zones difficiles d'accès. Les autres véhicules doivent respecter la flotte autorisée par l'entreprise. Maison de disque : les musiques doivent être publiées uniquement sur la chaîne dédiée à l'entreprise. Seuls les sons créés sur le serveur sont autorisés. Le vol de contenu est strictement interdit. Toute demande de réactions ou de promotion HRP est interdite : cela doit se faire en RP. Une musique publiée sur Discord doit également être publiée sur l'application musicale du téléphone. Les jours de publication doivent être respectés. Concessionnaire : le PDM est une entreprise strictement légale. La direction ne peut participer à aucune activité illégale. Les cautions de location sont limitées à 15 000 $. Seuls les véhicules présents au catalogue peuvent être rachetés ou loués. Les véhicules d'occasion peuvent faire l'objet d'un retour fournisseur à 80 % du prix usine, après transmission des IDs concernés. Presse : ce sont des entreprises strictement légales. La direction ne peut participer à aucune activité illégale. Les contenus doivent être publiés sur la chaîne dédiée à l'entreprise. Les cartes de visite doivent être complétées par le média, puis rendues non éditables et non duplicables. Elles sont réservées aux membres de la direction des entreprises. Toute demande de réactions ou de promotion HRP est interdite : cela doit se faire en RP."
  },
  {
    title: "Immobilier & Décoration",
    text: "Un bien non loué ou inutilisé pendant 14 jours peut être remplacé par l'agent immobilier. Après 30 jours sans utilisation, le bien peut être supprimé automatiquement. Aucun remboursement n'est accordé en cas de bannissement ou de non-renouvellement du bien, y compris pour les locataires. Tout propriétaire doit répondre aux demandes des agents immobiliers concernant son bien. Sans réponse, le bien peut être verrouillé. Il est interdit de vendre ou céder uniquement l'emplacement d'une propriété. Une propriété ne peut pas être placée à côté d'une entrée existante sans validation d'un référent Immobilier. Les propriétés doivent être placées dans des emplacements cohérents et accessibles. L'intérieur Motel est réservé aux motels. L'intérieur Caravane est réservé aux caravanes. Les garages doivent être placés face à une véritable porte de garage. Les garages à plusieurs étages sont réservés aux tours. Il est interdit de louer uniquement le garage d'une maison. Une maison doit disposer d'un intérieur adapté et d'au moins un garage. Il est interdit de placer des propriétés sur des yachts. Les entrepôts et bureaux ne peuvent pas être placés à l'arrière des maisons. Les motels, caravanes et garages doivent être installés dans des emplacements cohérents. Il est interdit de passer de l'illégal à l'Immobilier, ou inversement. Cette pratique peut entraîner un wipe et un blacklist. Un agent immobilier ne peut participer à aucune activité illégale. Il est interdit de braquer ou de piéger un agent immobilier en service pour obtenir des informations. Les informations concernant les clients et les propriétés sont strictement confidentielles. La sous-location destinée à dissimuler le véritable propriétaire d'un bien est interdite. Si votre P1 est agent immobilier, votre P2 ne peut pas être impliqué dans l'illégal, et inversement. Il est interdit de transférer une décoration achetée auprès de l'agence à un autre joueur. Il est interdit de revendre une décoration que vous n'avez pas créée vous-même. Le vol de décorations appartenant à d'autres joueurs est strictement interdit. Le métier d'agent immobilier doit rester strictement légal et les propriétés doivent toujours être utilisées de manière cohérente avec le RP."
  }
];

  const notionsRules = [
    {
      title: "PowerGaming",
      text: "Effectuer des actions impossibles ou irréalistes dans la vie réelle, en profitant des mécaniques du jeu pour réaliser des actions qui ne seraient pas réalisables en situation réelle."
    },
    {
      title: "MetaGaming",
      text: "Utiliser des informations obtenues en dehors du jeu afin d’obtenir un avantage ou d’influencer son comportement en RP."
    },
    {
      title: "PainRP",
      text: "Le PainRP consiste à jouer et à exprimer la douleur de son personnage lorsqu’il subit une blessure ou une situation douloureuse. Il est étroitement lié au FearRP."
    },
    {
      title: "NoFear",
      text: "Ne pas jouer la peur face à une situation dangereuse, notamment lorsqu’une arme est braquée sur soi. Même un personnage criminel doit être conscient du danger et craindre pour sa vie."
    },
    {
      title: "FreeKill",
      text: "Tuer un joueur sans raison RP valable, sans scène préalable ou sans justification cohérente. Cette pratique est strictement interdite."
    },
    {
      title: "ForceRP",
      text: "Imposer une action ou une situation à un autre joueur sans lui laisser la possibilité de réagir ou de jouer correctement la scène. Le ForceRP comprend également le Stream Stalk."
    },
    {
      title: "FairPlay",
      text: "Adopter une attitude respectueuse et jouer dans le but de proposer des scènes intéressantes à l’ensemble des joueurs. Il faut accepter les conséquences de ses actions et éviter les comportements visant uniquement à gagner la scène. Exemple : prendre volontairement des chemins irréalistes en montagne à moto uniquement pour échapper à des poursuivants."
    },
    {
      title: "WinRP",
      text: "Chercher à gagner une scène à tout prix, ne laisser aucune possibilité à l’adversaire de réagir ou refuser d’accepter une défaite RP. Il est important de savoir perdre et de rester FairPlay."
    },
    {
      title: "StreamHack",
      text: "Utiliser un live, une rediffusion ou toute autre diffusion externe afin d’obtenir des informations permettant d’avantager son personnage en RP. Tout cas de StreamHack peut être sanctionné par un bannissement permanent."
    },
    {
      title: "UseBug",
      text: "Exploiter volontairement un bug, un glitch ou une faille du jeu afin d’obtenir un avantage ou d’abuser d’une mécanique de jeu."
    },
    {
      title: "Carkill",
      text: "Tuer volontairement un joueur à l’aide d’un véhicule."
    },
    {
      title: "Drive-By",
      text: "Le Drive-By est uniquement autorisé pour les gangs. Il est cependant strictement interdit de tirer depuis un véhicule en mouvement."
    },
    {
      title: "CopBait",
      text: "Provoquer volontairement les forces de l’ordre dans le seul but de déclencher une course-poursuite ou une intervention policière sans véritable raison RP."
    },
    {
      title: "FreeLoot",
      text: "Fouiller ou récupérer les biens d’un joueur sans qu’une scène RP préalable ne le justifie."
    },
    {
      title: "Cohérence RP",
      text: "Lorsque vous incarnez un personnage, vous devez rester cohérent avec son histoire, sa personnalité, ses capacités et la situation dans laquelle il se trouve. Votre comportement doit rester crédible et réaliste."
    },
    {
      title: "Comportement en Zone Safe",
      text: "Les zones safes sont des lieux dans lesquels les activités illégales et les scènes conflictuelles sont interdites. Dans ces zones, il est notamment interdit de : kidnapper un joueur ; braquer ou voler un joueur ; voler un véhicule ; se battre ; commettre une quelconque action illégale ; déclencher volontairement une scène visant à contourner les règles de la zone safe. Il est également interdit de camper volontairement dans une zone safe afin d’éviter ou d’interrompre une scène RP. Les zones safes s’appliquent dans un rayon de 100 mètres autour des lieux suivants : Commissariat, Gouvernement, Palais de justice, Hôpital."
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-32 pb-24 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Row */}
        <div className="flex flex-col md:flex-row gap-8 mb-8">
          <div className="w-full md:w-1/4 hidden md:block"></div>
          <div className="w-full md:w-3/4">
            <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-left">Règlement du Serveur</h1>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar Tabs */}
          <div className="w-full md:w-1/4 flex flex-col gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`text-left px-6 py-4 rounded-xl border transition-all ${
                  activeTab === tab.id 
                    ? 'bg-white text-black border-white shadow-[0_0_15px_rgba(255,255,255,0.3)] font-bold' 
                    : 'bg-[#111] text-gray-400 border-white/10 hover:border-white/40 hover:text-white hover:bg-[#161616]'
                }`}
              >
                <div className="text-lg uppercase tracking-wider">{tab.name}</div>
                <div className={`text-xs mt-1 ${activeTab === tab.id ? 'text-gray-700' : 'text-gray-500'}`}>
                  {tab.description}
                </div>
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="w-full md:w-3/4 bg-[#111] p-8 rounded-xl border border-white/10 min-h-[500px]">
            {activeTab === 'global' && (
              <div className="animate-fade-in">
                <h2 className="text-3xl font-bold mb-6 text-white border-b border-white/10 pb-4">Règlement Global</h2>
                <div className="space-y-4">
                  {globalRules.map((rule, idx) => (
                    <details key={idx} className="bg-[#1a1a1a] border border-white/10 rounded-lg group [&_summary::-webkit-details-marker]:hidden">
                      <summary className="font-bold text-lg p-4 cursor-pointer hover:bg-white/5 transition-colors flex justify-between items-center text-white">
                        {rule.title}
                        <ChevronRight className="w-5 h-5 text-gray-500 group-open:rotate-90 transition-transform flex-shrink-0" />
                      </summary>
                      <div className="p-4 pt-0 text-gray-400 leading-relaxed border-t border-white/5 mt-1">
                        {rule.text}
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            )}
            
            {activeTab === 'hrp' && (
              <div className="animate-fade-in">
                <h2 className="text-3xl font-bold mb-6 text-white border-b border-white/10 pb-4">Règlement HRP</h2>
                <div className="space-y-4">
                  {hrpRules.map((rule, idx) => (
                    <details key={idx} className="bg-[#1a1a1a] border border-white/10 rounded-lg group [&_summary::-webkit-details-marker]:hidden">
                      <summary className="font-bold text-lg p-4 cursor-pointer hover:bg-white/5 transition-colors flex justify-between items-center text-white">
                        {rule.title}
                        <ChevronRight className="w-5 h-5 text-gray-500 group-open:rotate-90 transition-transform flex-shrink-0" />
                      </summary>
                      <div className="p-4 pt-0 text-gray-400 leading-relaxed border-t border-white/5 mt-1">
                        {rule.text}
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'illegal' && (
              <div className="animate-fade-in">
                <h2 className="text-3xl font-bold mb-6 text-white border-b border-white/10 pb-4">Règlement Illégal</h2>
                <div className="space-y-4">
                  {illegalRules.map((rule, idx) => (
                    <details key={idx} className="bg-[#1a1a1a] border border-white/10 rounded-lg group [&_summary::-webkit-details-marker]:hidden">
                      <summary className="font-bold text-lg p-4 cursor-pointer hover:bg-white/5 transition-colors flex justify-between items-center text-white">
                        {rule.title}
                        <ChevronRight className="w-5 h-5 text-gray-500 group-open:rotate-90 transition-transform flex-shrink-0" />
                      </summary>
                      <div className="p-4 pt-0 text-gray-400 leading-relaxed border-t border-white/5 mt-1">
                        {rule.text}
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'legal' && (
              <div className="animate-fade-in">
                <h2 className="text-3xl font-bold mb-6 text-white border-b border-white/10 pb-4">Règlement Légal</h2>
                <div className="space-y-4">
                  {legalRules.map((rule, idx) => (
                    <details key={idx} className="bg-[#1a1a1a] border border-white/10 rounded-lg group [&_summary::-webkit-details-marker]:hidden">
                      <summary className="font-bold text-lg p-4 cursor-pointer hover:bg-white/5 transition-colors flex justify-between items-center text-white">
                        {rule.title}
                        <ChevronRight className="w-5 h-5 text-gray-500 group-open:rotate-90 transition-transform flex-shrink-0" />
                      </summary>
                      <div className="p-4 pt-0 text-gray-400 leading-relaxed border-t border-white/5 mt-1">
                        {rule.text}
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'notions' && (
              <div className="animate-fade-in">
                <h2 className="text-3xl font-bold mb-6 text-white border-b border-white/10 pb-4">Notions du RP</h2>
                <div className="space-y-4">
                  {notionsRules.map((rule, idx) => (
                    <details key={idx} className="bg-[#1a1a1a] border border-white/10 rounded-lg group [&_summary::-webkit-details-marker]:hidden">
                      <summary className="font-bold text-lg p-4 cursor-pointer hover:bg-white/5 transition-colors flex justify-between items-center text-white">
                        {rule.title}
                        <ChevronRight className="w-5 h-5 text-gray-500 group-open:rotate-90 transition-transform flex-shrink-0" />
                      </summary>
                      <div className="p-4 pt-0 text-gray-400 leading-relaxed border-t border-white/5 mt-1">
                        {rule.text}
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function Boutique() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center text-white px-4 pt-20">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-4">Boutique</h1>
        <p className="text-xl text-gray-400 max-w-lg mx-auto">
          Cette page est actuellement en cours de construction. Revenez très bientôt pour découvrir nos offres !
        </p>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-white selection:text-black flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mentions-legales" element={<MentionsLegales />} />
            <Route path="/reglement" element={<Reglement />} />
            <Route path="/boutique" element={<Boutique />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
