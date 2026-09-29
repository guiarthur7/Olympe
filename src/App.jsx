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
    
    // Blinking cursor effect
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
  { id: 'hrp', name: 'HRP', description: 'Règles Hors RolePlay' },
  { id: 'illegal', name: 'Illégal', description: 'Activités illégales' },
  { id: 'legal', name: 'Légal', description: 'Entreprises et activités légales' },
];

const globalRules = [
  {
    title: "Règlement Discord",
    text: "Respectez chaque membre : les comportements irrespectueux, le harcèlement, les menaces, l'intimidation ou toute forme de discrimination sont interdits. Aucun contenu illégal ou inapproprié : il est interdit de partager des images, vidéos, liens ou tout autre contenu contraire aux lois ou aux règles de Discord. Pas de spam ni de publicité : toute forme de publicité, promotion ou démarchage, que ce soit sur le serveur ou en messages privés, est interdite sans autorisation du Staff. Respect de la vie privée : la diffusion de photos, conversations, informations personnelles ou données concernant une autre personne sans son accord est strictement interdite. Utilisez les bons salons : veillez à poster vos messages dans les canaux prévus à cet effet et évitez les discussions hors sujet. Les propos offensants sont interdits : les insultes, provocations et propos vulgaires n'ont pas leur place ici ; les comportements racistes, homophobes, transphobes ou sexistes sont également strictement interdits. Respectez le Staff : les décisions prises par les modérateurs doivent être respectées ; en cas de désaccord ou de problème, adressez-vous à un administrateur afin de trouver une solution. Les règles peuvent évoluer : le règlement est susceptible d'être modifié à tout moment, pensez à consulter régulièrement les éventuelles mises à jour. Tout non-respect du règlement pourra entraîner une sanction, allant d'un simple avertissement jusqu'à l'exclusion définitive du serveur, selon la nature et la gravité des faits."
  },
  {
    title: "Tickets",
    text: "Restez courtois : utilisez des formules de politesse et adressez-vous aux membres du Staff avec respect. Acceptez les réponses du Staff : même en cas de désaccord, gardez un comportement calme et respectueux. N'ouvrez un ticket que si nécessaire : évitez de créer plusieurs tickets ou d'en ouvrir un sans raison valable. Restez actif dans votre ticket : sans réponse de votre part pendant plus de 24 heures, celui-ci pourra être automatiquement fermé. Expliquez clairement votre demande : donnez un maximum d'informations afin de permettre au Staff de comprendre et de traiter votre problème efficacement. Évitez de mentionner le Staff : il est inutile de ping plusieurs membres de l'équipe pour accélérer votre demande, soyez patient, votre ticket sera pris en charge dès que possible."
  },
  {
    title: "Bannissements",
    text: "Le Staff d'Olympe se réserve le droit de refuser, suspendre ou retirer l'accès au serveur à toute personne dont le comportement ou les antécédents pourraient représenter un risque pour la communauté. Cela peut notamment concerner des antécédents liés au cheat, aux logiciels tiers, à la duplication, à l'exploitation de failles ou à l'obtention d'avantages injustes, des comportements répétés de toxicité, harcèlement, troll, griefing ou toute autre attitude nuisible à une communauté RP, ainsi que des sanctions importantes ou répétées constatées sur d'autres serveurs ou plateformes communautaires. Le Staff d'Olympe peut prendre en considération son expérience sur FiveM et son temps de jeu, son comportement et ses échanges sur Discord, son activité sur différents espaces communautaires liés au RP, la qualité et la cohérence de ses candidatures, tickets, échanges et interactions avec le Staff, ainsi que les différents signalements portés à la connaissance de l'équipe, y compris lorsqu'ils proviennent de sources extérieures au serveur. Toute information considérée comme pertinente par le Staff peut être prise en compte afin de maintenir un environnement respectueux, sécurisé et cohérent avec les valeurs d'Olympe. Dans le cadre de la protection de la communauté, une décision de refus d'accès peut être prise sans qu'une justification publique détaillée soit nécessaire. Le Staff peut également effectuer des vérifications complémentaires, demander des informations supplémentaires ou mettre en place une période probatoire lorsqu'il estime cela nécessaire pour évaluer le comportement, la bonne foi et l'intégration d'un joueur au sein d'Olympe."
  },
  {
    title: "Lexique / Notions du RolePlay",
    text: "PowerGaming : effectuer des actions impossibles ou irréalistes dans la vie réelle, en profitant des mécaniques du jeu pour réaliser des actions qui ne seraient pas réalisables en situation réelle. MetaGaming : utiliser des informations obtenues en dehors du jeu afin d'obtenir un avantage ou d'influencer son comportement en RP. PainRP : le PainRP consiste à jouer et à exprimer la douleur de son personnage lorsqu'il subit une blessure ou une situation douloureuse ; il est étroitement lié au FearRP. NoFear : ne pas jouer la peur face à une situation dangereuse, notamment lorsqu'une arme est braquée sur soi ; même un personnage criminel doit être conscient du danger et craindre pour sa vie. FreeKill : tuer un joueur sans raison RP valable, sans scène préalable ou sans justification cohérente ; cette pratique est strictement interdite. ForceRP : imposer une action ou une situation à un autre joueur sans lui laisser la possibilité de réagir ou de jouer correctement la scène ; le ForceRP comprend également le Stream Stalk. FairPlay : adopter une attitude respectueuse et jouer dans le but de proposer des scènes intéressantes à l'ensemble des joueurs ; il faut accepter les conséquences de ses actions et éviter les comportements visant uniquement à gagner la scène. WinRP : chercher à gagner une scène à tout prix, ne laisser aucune possibilité à l'adversaire de réagir ou refuser d'accepter une défaite RP ; il est important de savoir perdre et de rester FairPlay. StreamHack : utiliser un live, une rediffusion ou toute autre diffusion externe afin d'obtenir des informations permettant d'avantager son personnage en RP ; tout cas de StreamHack peut être sanctionné par un bannissement permanent. UseBug : exploiter volontairement un bug, un glitch ou une faille du jeu afin d'obtenir un avantage ou d'abuser d'une mécanique de jeu. Carkill : tuer volontairement un joueur à l'aide d'un véhicule. Drive-By : le Drive-By est uniquement autorisé pour les gangs ; il est cependant strictement interdit de tirer depuis un véhicule en mouvement. CopBait : provoquer volontairement les forces de l'ordre dans le seul but de déclencher une course-poursuite ou une intervention policière sans véritable raison RP. FreeLoot : fouiller ou récupérer les biens d'un joueur sans qu'une scène RP préalable ne le justifie. Cohérence RP : lorsque vous incarnez un personnage, vous devez rester cohérent avec son histoire, sa personnalité, ses capacités et la situation dans laquelle il se trouve ; votre comportement doit rester crédible et réaliste."
  },
  {
    title: "Comportement en Zone Safe",
    text: "Les zones safes sont des lieux dans lesquels les activités illégales et les scènes conflictuelles sont interdites. Dans ces zones, toute agression, action hostile ou activité criminelle est prohibée afin de préserver des espaces d'échanges neutres pour l'ensemble des joueurs."
  }
];

const hrpRules = [
  {
    title: "Graphismes & Packs",
    text: "Afin de garantir une expérience de jeu équitable pour l'ensemble des joueurs, toute modification apportant un avantage ou supprimant certains éléments du jeu est strictement interdite. Sont notamment interdits : les packs No Props, No Elements, No Water, No Bush, etc. ; l'utilisation de crosshairs externes ou de viseurs personnalisés ; l'utilisation de Kill Effects ou effets de mort ; l'utilisation de Tracers ou marqueurs de trajectoire des tirs ; l'utilisation de Blood Effects ou effets de sang modifiés ; l'utilisation de Hit Effects ou effets visuels liés aux impacts ; toute modification de la FOV (champ de vision) ; la suppression ou modification d'éléments du décor tels que les props, buissons, eau, végétation, etc. ; l'utilisation de fichiers procurant un avantage en jeu, notamment les fichiers permettant d'obtenir une stamina illimitée, et tout autre fichier similaire. Toute modification considérée comme avantageuse ou susceptible de perturber l'équilibre du jeu pourra faire l'objet d'une sanction. Notre objectif est de maintenir une expérience équitable, équilibrée et agréable pour l'ensemble de la communauté. Chaque joueur est donc responsable des fichiers et modifications présents sur son jeu."
  },
  {
    title: "Remboursements",
    text: "Le Staff n'effectue aucun remboursement dans les situations suivantes : perte de biens lors d'un reboot : les reboots étant effectués à horaires réguliers, vous devez anticiper ceux-ci et sécuriser vos biens avant leur lancement ; erreur de virement : vérifiez systématiquement le destinataire ainsi que le montant avant de confirmer une transaction ; perte de biens illégaux après un coma ou une déconnexion involontaire : vous êtes responsable de vos biens et de leur sécurité ; perte de biens liée à une inactivité prolongée : pensez à renouveler vos locations de maisons ou d'appartements afin d'éviter leur perte ; vol ou trahison par une personne ayant accès à votre propriété : lorsque vous donnez volontairement un accès à quelqu'un, les conséquences de vos choix restent sous votre responsabilité ; vol dans les coffres de véhicules : aucun remboursement ne sera effectué, à l'exception des situations concernant le vol d'une arme. Le Staff se réserve le droit d'accepter ou de refuser une demande de remboursement selon les circonstances. Toute demande devra être accompagnée de preuves suffisantes et vérifiables permettant de confirmer les faits. Sans preuve convaincante, aucune restitution ne pourra être garantie."
  },
  {
    title: "Streameurs",
    text: "Le streaming sur le serveur est autorisé. Cependant, afin de préserver l'expérience RP et d'éviter toute utilisation abusive des informations HRP, certaines règles doivent impérativement être respectées. Sont interdits : le trashtalk ou les comportements visant à dénigrer d'autres joueurs ; l'utilisation d'informations HRP provenant du chat du stream afin d'obtenir un avantage en jeu ; la diffusion de vos interventions administratives : le son et l'image doivent être coupés dès qu'un membre du Staff intervient ; tout dénigrement du serveur, du Staff ou de ses membres."
  },
  {
    title: "Wipe & Mort RP",
    text: "Le wipe correspond à la suppression complète de votre personnage et de son histoire. Après un wipe, vous devez créer un nouveau personnage et repartir sur une nouvelle histoire RP, sans lien avec votre ancien personnage. Une Mort RP peut entraîner le wipe définitif de votre personnage. Elle peut notamment être prononcée selon différents éléments, tels que : un dossier de Mort RP validé ; un manque de peur ou un comportement incohérent face au danger ; un abus de tirs ou de blessures ; l'expulsion de votre organisation par votre chef, selon les circonstances. Chaque situation est étudiée par le Staff en fonction du contexte et des éléments disponibles. Transfert de biens : après un wipe, il est strictement interdit de transférer ou de faire récupérer des biens appartenant à votre ancien personnage, notamment les véhicules, armes, argent, propriétés ou tout autre bien ; aucun héritage ou transfert indirect ne sera autorisé. Situation financière ou judiciaire : un wipe ne peut pas être effectué si votre compte présente un solde négatif ou si des procédures judiciaires sont toujours en cours concernant votre personnage. Changement de voie : il est interdit de passer du légal à l'illégal, ou inversement, sans effectuer de wipe lorsque celui-ci est requis. Pour les anciens membres de la Police, EMS ou du Gouvernement, toute implication dans des activités illégales avec leur personnage peut entraîner un wipe ainsi qu'une sanction importante. Lien entre personnages : votre nouveau personnage ne doit avoir aucun lien avec votre ancien personnage ; il est également interdit d'utiliser un nouveau personnage afin de rejoindre à nouveau le même groupe, organisation ou entourage dans le but de conserver les mêmes avantages ou relations."
  },
  {
    title: "Interdictions Généralités",
    text: "Dans le but de préserver une expérience RP immersive, saine et agréable pour l'ensemble de la communauté, certaines pratiques sont strictement prohibées sur Olympe. Les comportements suivants ne sont pas autorisés : tous propos racistes, xénophobes, homophobes, transphobes, discriminatoires ou visant à dénigrer une personne ou une communauté ; la diffusion ou l'envoi de contenus religieux, sexuels, haineux ou discriminatoires, sous quelque forme que ce soit ; il est impossible d'incarner un personnage mineur, tout personnage joué sur Olympe doit avoir au minimum 18 ans ; l'utilisation d'un vocal externe à FiveM pendant une scène RP est strictement interdite, cette règle s'applique également lorsque les personnes concernées ne sont pas actuellement connectées ou présentes avec vous en jeu ; le streamhack est interdit, il est notamment prohibé de consulter volontairement le stream d'un joueur alors que vous êtes simultanément en jeu afin d'obtenir des informations ; toute forme de RP sexuel, de contenu sexuel ou de messages à caractère sexuel est interdite, quelles que soient les circonstances ou l'âge des personnes concernées ; le langage HRP n'a pas sa place en scène RP, les expressions telles que « papillon », « j'ai une GoPro », « faire un ticket » ou toute formulation faisant directement référence aux mécaniques HRP sont interdites ; toute publicité ou promotion destinée à un autre serveur RP est interdite ; l'exploitation de bugs, glitches ou failles afin d'obtenir un avantage en scène est formellement interdite, cela comprend notamment l'utilisation d'animations ou le spam de touches pour contourner une mécanique de jeu ; toute transaction de biens, d'argent ou de services contre de l'argent réel est interdite ; les véhicules attribués aux métiers d'intérim doivent exclusivement servir à l'activité pour laquelle ils sont prévus, le Staff peut retirer tout véhicule utilisé à des fins étrangères à son activité ; l'achat, la vente ou le rachat de cartes bancaires est strictement interdit ; il est interdit de publier des annonces proposant des services illégaux sur les différentes applications du serveur, notamment Pages Jaunes, Marketplace, etc., les échanges illégaux contre de l'argent liquide sont également concernés ; la publication de contenu ou d'annonces à caractère illégal sur Birdy ou Instapic est interdite ; les équipements, fournitures ou matériaux appartenant aux entreprises sont réservés à leur utilisation professionnelle, leur détention ou leur utilisation hors service est interdite, notamment les kits de réparation, bandages EMS, équipements professionnels, etc. ; les tenues de Police ou d'EMS ne peuvent pas être détenues ou utilisées par des civils ou pendant une période hors service, cette interdiction concerne également toute tenue permettant de se faire passer volontairement pour un membre de ces factions, une dérogation pouvant être accordée par le Staff dans le cadre d'une scène spécifique proposée par un tiers ; après un wipe, il est interdit de recréer un personnage possédant le même nom ou nom de famille que l'ancien, d'utiliser plusieurs personnages partageant le même nom ou nom de famille, ainsi que de chercher à venger son ancien personnage avec un nouveau ; il est interdit de créer un personnage reprenant exactement le nom et le prénom d'une personnalité publique connue ou d'un personnage fictif ; il est interdit de prendre la fuite à la nage ou de quitter une scène pendant ou après une course-poursuite, sauf lorsqu'une scène impliquant des bateaux a été préalablement validée."
  },
  {
    title: "Coma & Déconnexions",
    text: "Lorsqu'un joueur tombe dans le coma, certaines règles doivent impérativement être respectées afin de préserver la cohérence de la scène. Le trash corps est strictement interdit lorsqu'un joueur est en coma devant vous. Il est également interdit de déplacer volontairement le corps d'un joueur dans le but de l'empêcher d'être retrouvé, secouru ou pris en charge. Une personne dans le coma ne doit communiquer avec aucun autre joueur, que ce soit par le microphone, /me ou tout autre moyen. La commande /me doit uniquement servir à décrire les sensations, l'état physique, les douleurs ou les émotions de votre personnage ; elle ne doit en aucun cas être utilisée pour transmettre des informations aux autres joueurs. Le coma ne provoque aucune perte de mémoire : vous conservez les souvenirs des événements ayant précédé votre mise dans le coma. Si votre personnage est victime d'un coma à la suite d'un conflit, vous devez laisser de côté toute rancœur HRP et ne pas utiliser votre nouveau personnage ou votre personnage actuel dans le but de chercher vengeance."
  }
];

const illegalRules = [
  {
    title: "Discord & communication",
    text: "Les mentions du Staff doivent être utilisées uniquement lorsqu'elles sont réellement nécessaires. Toute provocation, attaque ou tentative de conflit envers un joueur ou un groupe illégal est interdite. Les propos ou contenus insultants, discriminatoires, racistes, sexistes, pornographiques ou faisant l'apologie de la violence sont interdits. La publicité pour des serveurs Discord, projets ou communautés extérieurs à Olympe n'est pas autorisée. Le spam, les envois massifs de messages ou de liens ainsi que toute utilisation abusive des salons sont interdits. Chaque discussion doit être réalisée dans le salon prévu à cet effet. Il est interdit d'utiliser plusieurs comptes Discord afin de contourner une règle ou une sanction. Chaque membre doit conserver un comportement respectueux envers les autres joueurs. Les insultes, provocations répétées, discriminations et formes de harcèlement ne sont pas tolérées. Les conflits doivent être réglés de manière mature et posée ; en cas de désaccord persistant, le Staff peut intervenir. Les pseudonymes Discord doivent rester corrects et adaptés à la communauté. Les décisions prises par les administrateurs et modérateurs doivent être respectées. Les responsables d'un groupe sont responsables des agissements de leurs membres ; une sanction peut donc être appliquée à l'ensemble du groupe. Tous les membres d'un groupe officiel doivent posséder les rôles Discord correspondant à leur statut. Les groupes officiels doivent respecter les référents Illégal qui leur sont attribués et privilégier la discussion avant toute escalade. Toute demande adressée au Staff doit être accompagnée de preuves lorsque cela est possible. Les tickets doivent présenter le contexte, les personnes concernées, le déroulement des faits et les éléments permettant de comprendre la situation ; une explication complète dans un ticket est préférable à une simple explication vocale. Le salon des suggestions doit uniquement servir à proposer des améliorations concernant le serveur ; il ne doit pas être utilisé pour régler des conflits ou débattre entre joueurs. Une exclusion ou un bannissement du Discord peut également entraîner une sanction en jeu."
  },
  {
    title: "Progression & création de groupe",
    text: "Tout joueur souhaitant se lancer dans l'illégal doit commencer son parcours en tant que civil. Il peut ensuite créer ou rejoindre une Petite Frappe. Les Petites Frappes peuvent réaliser différentes activités illégales afin de développer leur réputation et leur projet. Après avoir acquis suffisamment de crédibilité, une demande d'évolution vers un groupe officiel peut être effectuée. Cette demande doit être accompagnée d'un dossier présentant l'histoire du groupe, son identité, ses membres et ses motivations. Le projet présenté doit être cohérent et proposer un véritable concept RP. Un entretien oral peut être demandé afin d'évaluer la cohérence du projet et la connaissance de ses membres. Une réponse concernant le dossier est généralement apportée sous 1 à 2 jours. L'accès à un groupe officiel reste soumis à la validation des référents Illégal."
  },
  {
    title: "Règles générales de l'illégal",
    text: "Il est interdit de retourner dans son quartier après avoir été pris en chasse par la police ou par un groupe adverse. Le Fear RP doit être appliqué naturellement lorsqu'une situation représente un danger sérieux pour votre personnage. Il est interdit de participer à une opération illégale menée par un groupe si votre personnage n'en fait pas officiellement partie et n'est pas présent dans sa CREW / menu. Les tirs sur les pneumatiques sont réservés aux groupes officiels et ne peuvent être effectués qu'après 15 minutes minimum de poursuite. Il est interdit de mentir concernant son état de santé ou ses blessures afin d'influencer le déroulement d'une scène. Les alliances entre groupes illégaux ne sont pas autorisées. La présence armée d'un groupe officiel sur une scène d'otage appartenant à un autre groupe peut être considérée comme une alliance. Lorsqu'un groupe est envoyé effectuer une mission précise, il doit se limiter à son objectif, accomplir celui-ci puis quitter les lieux. Il est interdit de dégrader ou de manquer volontairement de respect à un corps dans le but de provoquer ou d'humilier. Il est interdit de récupérer certaines ressources ou certains équipements sur une personne lorsqu'un membre du SAMC ou du SASP est déjà présent sur la scène, conformément aux restrictions prévues. Les échanges, ventes ou actions illégales ne doivent pas être effectués à proximité immédiate des QG ou des zones protégées. Le Fear Organisation est interdit : la peur doit être créée et jouée directement dans le RP. Aucun remboursement ne sera accordé lorsqu'un Lead exclut un membre qui possède encore des objets appartenant au groupe. Une Petite Frappe ne peut pas posséder d'Habitants. Seuls les groupes officiels peuvent attaquer un quartier ou un QG officiel à mains nues ou avec des armes blanches, dans les conditions prévues par le règlement. Les Petites Frappes ne disposent pas de QG officiel, sauf si un emplacement leur est attribué officiellement. Les armes, circuits et objets illégaux doivent être vendus uniquement via DarkChat. Toute scène de torture, mutilation ou mutilation permanente nécessite l'accord du joueur concerné ainsi qu'une validation préalable du Staff. Une trahison réalisée dans l'intérêt d'un autre groupe doit être autorisée par le Staff. Un joueur ne peut avoir qu'un seul personnage impliqué dans l'illégal ; la possession de deux personnages illégaux peut entraîner le wipe des deux personnages ainsi qu'un bannissement d'un mois. Les entrepôts communs ne doivent pas servir à effectuer des échanges indirects entre groupes. Le vol d'un véhicule de transport n'est autorisé que lorsque l'identité de son propriétaire est certaine. Lors d'une poursuite se terminant dans l'eau, les poursuivants sont autorisés à tirer. Un otage qui décide de se jeter à l'eau doit accepter les conséquences RP pouvant aller jusqu'à la mort RP. Les points de récolte et de vente ne doivent pas être transformés en zones de braquage permanentes ; il faut attendre qu'un joueur ait quitté le point avant de pouvoir intervenir contre lui. Le camping autour des points de récolte ou de vente est interdit, sauf pour les situations liées à la récolte de drogue. Les Petites Frappes ne peuvent pas s'approprier les points de ressources ou de braquages réservés aux groupes officiels. Les territoires attribués aux gangs doivent être respectés et leur utilisation doit rester cohérente avec l'identité RP du groupe."
  },
  {
    title: "Prises d'otages",
    text: "La capture d'un membre d'un service public peut entraîner de lourdes conséquences RP, pouvant aller jusqu'à une peine de prison à vie ou une mort RP. La prise d'un membre de l'État ou du Gouvernement doit rester une mesure exceptionnelle. Il est interdit d'abuser des prises d'otages sur les membres du SASP lorsqu'ils sont en service. Une embuscade peut être organisée lors d'un rendez-vous prévu pour récupérer un otage. Si un échange dégénère en fusillade et qu'un ou plusieurs otages décèdent, leur mort peut être considérée comme une mort RP. Une guerre ouverte peut être déclenchée lorsque les conditions du GGO sont respectées et qu'un affrontement a lieu pendant le rendez-vous. Un otage peut subir une mort RP si le groupe chargé de venir le récupérer ne se présente pas ou si celui-ci refuse totalement de jouer son Fear RP. Les faux otages sont interdits. Il est interdit de surveiller ou de camper un QG uniquement dans le but de trouver une personne à prendre en otage. Il est interdit de profiter du fait qu'un groupe détienne votre otage pour aller braquer ce même groupe. Toute prise d'otage doit être motivée par un contexte RP réel et cohérent. La rançon maximale est fixée à 5 000 $ par personne et 1 500 $ par véhicule. Il est interdit d'obliger un otage à effectuer un retrait bancaire ou un transfert d'argent. Les armes et munitions ne peuvent pas être utilisées comme monnaie d'échange contre un otage. Un membre du SAMC en service peut être pris en otage, mais son uniforme et son équipement professionnel doivent rester en sa possession. Les scènes sexuelles ou destinées à humilier sexuellement un joueur sont strictement interdites. Une prise d'otage ne peut pas être organisée immédiatement après une fusillade ; les participants doivent quitter la zone. Il est interdit d'attirer volontairement une personne hors d'un commerce afin de la braquer, de la prendre en otage ou de lui voler son véhicule, les magasins de vêtements constituant l'exception prévue à cette règle. Une prise d'otage peut avoir lieu devant un commerce sous réserve du respect du Mass RP. Il est interdit de prendre une personne en otage à l'intérieur d'un commerce sans dossier et validation préalable du Staff, à l'exception des magasins de vêtements."
  },
  {
    title: "Fusillades & affrontements",
    text: "Les échanges de tirs doivent rester des situations sérieuses et constituer un dernier recours. Une interaction ou confrontation verbale doit obligatoirement précéder l'ouverture du feu ; un simple « mains en l'air » ne constitue pas à lui seul une justification suffisante. Un groupe est limité à une fusillade par soirée. Après avoir été réanimé par le SAMC, il est interdit de retourner sur la scène pour se venger. Il est interdit de prendre une position en hauteur ou de préparer un avantage stratégique avant le début de l'affrontement. L'utilisation volontaire du ragdoll pour faire croire à une blessure est interdite et peut entraîner de lourdes conséquences RP. Il est interdit de ramasser ou déplacer les personnes à terre après une fusillade. Dès qu'une prise en charge par le SASP ou le SAMC commence, il est interdit de revenir sur les lieux. Il est interdit de cacher ou déplacer ses armes et munitions après un affrontement afin d'éviter leur perte. Un véhicule ne doit pas être redéposé volontairement à l'extérieur de la zone où l'affrontement a eu lieu ; le véhicule peut rester dans la zone de combat, mais il est interdit de l'utiliser pour obtenir un avantage en hauteur ou pour profiter abusivement d'un mur ou d'une protection. Une utilisation excessive ou répétée des fusillades peut conduire à une sanction, une mort RP ou un wipe. Un Drive-by doit être réalisé avec un véhicule roulant à 50 km/h maximum ; il est interdit de dépouiller ou braquer une personne depuis son véhicule, pour effectuer un vol ou un braquage il faut obligatoirement descendre du véhicule. La scène doit rester courte : quelques tirs puis un départ des lieux. La personne attaquée est autorisée à riposter selon les mêmes règles. Les Drive-by peuvent être réalisés dans les quartiers, les rues, sur les trottoirs et devant les magasins de vêtements ; l'objectif doit être de faire passer un message ou de revendiquer clairement une attaque. Les tirs pouvant entraîner une mort RP sont autorisés dans le cadre de la scène, mais les abus sont interdits. Le Walk-by est soumis aux mêmes règles de fonctionnement et de modération."
  },
  {
    title: "Drogues & récoltes",
    text: "La commercialisation de drogues est interdite dans les Zones Safe. Il est interdit de vendre à un PNJ des produits provenant directement de sa propre production : pour effectuer une vente PNJ, le produit doit avoir été acheté auprès d'un autre joueur. Les ventes PNJ ne peuvent pas être réalisées depuis une voiture, une moto, un quad, un vélo ou un skateboard avec une fuite immédiate. Aucune transaction illégale ne doit avoir lieu dans une Zone Safe ou dans un périmètre de 3 km autour d'un QG. Les plantations et productions illégales doivent être installées dans des lieux cohérents avec le RP ; il est interdit de produire dans un QG, un intérieur, une instance, sur un toit, en montagne ou dans tout emplacement incohérent. Les lieux de production doivent être accessibles par la route aux véhicules concernés. Il est interdit d'utiliser le téléphone ou certaines animations afin de dissimuler volontairement une vente ou une remise de drogue. Les ventes PNJ sont accessibles aux Civils, Indépendants, Petites Frappes, Habitants et Gangs ; les Organisations ne peuvent pas utiliser la vente PNJ. Les points de récolte doivent être accessibles sans favoritisme ; il est interdit de réserver certains horaires ou points de récolte à des personnes spécifiques. Les récoltes doivent être effectuées avec des véhicules de transport adaptés, comme les Speedo, Rumpo, Burrito, etc."
  },
  {
    title: "Véhicules & poursuites",
    text: "Les groupes officiels sont tenus de respecter la liste de véhicules validée par les référents Illégal ; toute modification de cette liste doit être soumise à validation et intégrée au dossier du groupe. Les Petites Frappes ne disposent pas d'une liste imposée, mais les véhicules utilisés doivent rester cohérents avec leur identité RP. Les véhicules Supersport sont interdits dans le cadre des activités illégales. Les convois sont interdits, sauf pour l'exception réservée aux MC : 4 motos maximum ou 1 voiture accompagnée de 2 motos. Une poursuite doit rester sur un principe de 1 véhicule contre 1 véhicule ; aucun véhicule supplémentaire ne peut rejoindre une poursuite déjà engagée, les interventions supplémentaires devant uniquement être prévues dans le cadre d'un plan préparé à l'avance. Les vélos, motos et skateboards sont interdits pour les activités illégales, sauf pour les MC. Le carjacking est autorisé sous certaines conditions : le numéro de la victime doit être récupéré afin de pouvoir organiser la restitution ou la récupération du véhicule. Si le propriétaire répond, celui-ci dispose de 48 heures pour récupérer son véhicule par l'intermédiaire d'une rançon ; les appels ou demandes du propriétaire ne doivent pas être volontairement ignorés. Le propriétaire peut utiliser les moyens disponibles pour localiser son véhicule, mais il ne peut pas demander une mise en fourrière. Les poursuites réunissant plusieurs groupes différents sont interdites. Il est interdit de transporter une personne dans le coffre d'un véhicule, sauf dans le cadre d'une prise d'otage. Le téléphone ne doit pas être utilisé comme une radio pendant une poursuite. Les véhicules appartenant à un autre groupe ne peuvent pas être utilisés sans avoir été obtenus à travers une scène RP. Toute utilisation d'informations HRP pour récupérer ou utiliser un véhicule est interdite."
  },
  {
    title: "Armes & munitions",
    text: "Les Civils et Petites Frappes / Habitant peuvent uniquement posséder une Pétoire classique ainsi qu'un Judge Revolver ; la Pétoire MK II n'est pas autorisée. Les quantités maximales de munitions sont les suivantes : Armes de poing : 36 ; Fusils à pompe : 24 ; SMG : 80 ; Fusils d'assaut : 90. Les groupes officiels ne peuvent vendre aux Habitants / Petites Frappes que les armes autorisées par le règlement. L'ajout d'un skin ne permet pas d'augmenter artificiellement le prix d'une arme ; les tarifs doivent rester cohérents avec l'économie générale du serveur. Il est interdit de transporter simultanément une arme lourde et une arme automatique dans les conditions prévues par le règlement. Il est strictement interdit de transférer une arme d'un personnage à un autre ; il est également interdit de remettre une arme à un autre joueur dans le but qu'il la revende à votre place, ce type de transfert pouvant entraîner un bannissement définitif. Les armes, ressources et objets liés à l'illégal doivent être proposés via DarkChat. Les outils utilisés pour la récolte ou l'agriculture ne doivent pas être détournés à des fins criminelles. Les plafonds de revente sont fixés comme suit : Armes contondantes : 10 000 $ ; Armes blanches : 20 000 $ ; Objets lançables : 200 $ par unité ; Armes de poing (Pétoire, Beretta, Glock etc) : 80 000 $."
  },
  {
    title: "Braquages, laboratoires & business",
    text: "Fleeca & bijouterie : le lancement d'un braquage doit obligatoirement entraîner une poursuite. Les braqueurs doivent attendre l'arrivée des forces de l'ordre ; si aucune unité de police ne se présente après 15 minutes, les participants peuvent quitter les lieux. Au minimum 2 braqueurs doivent participer, au minimum 2 otages doivent être présents, et le groupe doit disposer d'au moins 1 arme à feu accompagnée de 4 munitions. Le braquage est limité à 2 véhicules maximum (les MC peuvent utiliser jusqu'à 3 motos). Un plan utilisant une Mule ne peut être mis en place qu'après 10 minutes de poursuite. Il est interdit de dépouiller les otages, une rançon supplémentaire ne peut pas être réclamée aux otages dans le cadre du braquage, et une personne déjà engagée dans un braquage ne peut pas être utilisée comme otage. Lorsqu'un plan Mule est prévu, un véhicule adapté doit être utilisé : Mule, camion ou fourgon. Commerces, conteneurs & cambriolages : les participants doivent attendre l'arrivée des forces de l'ordre ; si aucune intervention n'a lieu après 5 minutes, les braqueurs peuvent quitter la scène. Les prises d'otages et les plans Mule ne sont pas autorisés ; les deux-roues, BMX, skateboards et véhicules de travail ne peuvent pas être utilisés. Attaque d'entreprise : toute attaque visant une entreprise doit être précédée d'un dossier expliquant l'origine du conflit, les scènes RP ayant mené à l'attaque ainsi que les preuves disponibles ; une entreprise incendiée ou détruite passe en statut inactif et sa remise en activité nécessite l'accord des référents Entreprises et Illégal. Laboratoires de drogue : une attaque contre un laboratoire nécessite obligatoirement la préparation d'un dossier mentionnant sa position exacte, avec l'interception de deux véhicules (l'un transportant les matières premières et l'autre les produits transformés) et une photographie du joueur devant l'entrée ; les informations doivent avoir été obtenues en RP, aucun otage ne doit être placé à la sortie, et il est interdit de camper ou de bâcher les véhicules. Laboratoire d'armes : les armes fabriquées ne peuvent pas être récupérées comme butin ; si le groupe ciblé possède un surplus d'armes fabriquées, une somme correspondant à leur valeur peut être demandée. L'alliage de titane peut être récupéré à hauteur de 50 %, avec une limite d'un seul item ou de sa valeur équivalente en argent ; un véhicule de transport adapté est obligatoire. Business secondaires : l'attaque d'un business secondaire nécessite un dossier mentionnant l'emplacement, l'interception d'un véhicule de marchandises et une photo devant l'entrée ; un groupe peut gérer 2 business secondaires maximum, obligatoirement de catégories différentes."
  },
  {
    title: "Loot & dépouillement",
    text: "Il est interdit de récupérer les armes, munitions ou radios d'un joueur, d'un véhicule ou d'une instance. Le freeloot est interdit. Le maximum récupérable est de 50 % d'un stackable ou 1 seul objet non-stackable. Les téléphones ne peuvent pas être pris comme butin ; dans le cadre d'une prise d'otage, un téléphone peut être temporairement confisqué, mais il doit être rendu à la fin de la scène. Il est interdit d'imposer un retrait bancaire ou un transfert d'argent à un joueur. Les clés ne peuvent pas être volées, à l'exception des clés de véhicules lorsque le contexte le permet. Les cartes d'identité et documents ne peuvent pas être récupérés comme butin. Les chaînes, montres et bijoux peuvent être pris afin d'obtenir des informations permettant de retrouver ou contacter leur propriétaire. Les lunettes, vêtements et autres éléments similaires ne peuvent pas être dérobés. Les accessoires récupérés doivent rester équipés sur le joueur et ne peuvent pas être revendus. Il est interdit d'utiliser un lockpick pour pénétrer dans le domicile d'un joueur afin de prendre ses occupants en otage. Vol après exclusion d'un groupe : la récupération de biens appartenant à un ancien groupe n'est autorisée que dans les situations prévues par le règlement ; les armes, tablettes et munitions ne peuvent jamais être récupérées. La récupération est limitée à 1 objet ou 50 % d'un stackable, le joueur devant avoir possédé la clé du coffre au moment de son exclusion ; cette possibilité concerne uniquement les joueurs ayant été exclus du groupe, et non ceux ayant décidé de partir volontairement."
  },
  {
    title: "Revanche, Mort RP, Arnaques & Corruption",
    text: "Revanche & délai : une prise d'otage entraîne un délai avant qu'une nouvelle action hostile puisse être menée contre les personnes ou groupes impliqués ; le délai habituel est fixé à 1 jour / reboot (ramené à 2 heures lorsqu'une guerre est officiellement déclarée, et un minimum d'1 heure lors de scènes très rapprochées). Mort RP & wipe : avant d'intégrer un projet illégal nécessitant un changement de personnage, le wipe doit être effectué conformément aux règles ; le Lead d'un groupe officiel peut demander ou imposer une mort RP à un membre exclu lorsque les conditions prévues sont réunies. Tout départ volontaire d'un groupe officiel entraîne un wipe obligatoire quelle que soit la raison du départ, et aucun bien commun ne peut être emporté ; un délai de 3 semaines doit être respecté avant de rejoindre un nouveau groupe officiel. Arnaques & vols : les escroqueries sont strictement interdites sur Olympe ; il est interdit de mettre en place de fausses ventes concernant des armes, de la drogue, du blanchiment, des propriétés ou tout autre bien. Les armes blanches et armes de poing ne peuvent pas être dérobées dans les coffres de véhicules. Le vol ou l'utilisation d'une carte bancaire appartenant à une autre personne est interdit, de même que forcer l'ouverture d'un appartement pour voler ses occupants ou utiliser Marketplace pour attirer une personne dans un guet-apens. Corruption : la corruption d'un membre du Gouvernement ne peut être mise en place qu'après validation préalable d'un dossier par le Staff ; les fonctions pouvant faire l'objet d'une corruption sont Conseiller, Secrétaire, Protection rapprochée (les postes de Gouverneur, Vice-Gouverneur, Chef de Cabinet et IRS étant exclus)."
  }
];

const legalRules = [
  {
    title: "Règlement Police (SASP)",
    text: "La Police a pour vocation de proposer une expérience roleplay cohérente, immersive et basée sur la création de scènes entre les différents joueurs. Rejoindre le SASP : chaque candidat doit présenter un personnage disposant d'un background travaillé, cohérent et crédible, la majorité IRL étant obligatoire ; l'utilisation d'un second personnage actif est interdite pendant l'intégration au SASP, et un membre ne peut pas exercer une seconde activité professionnelle en parallèle. Cohérence générale : tout membre intégrant la Police doit respecter cet univers et agir en permanence en cohérence avec le personnage qu'il incarne ; les agents doivent éviter une approche basée uniquement sur la confrontation ou la recherche de saisies, la priorité restant la qualité des interactions. Interdictions : il est strictement interdit de voler, utiliser ou transmettre des équipements, tenues ou matériels appartenant à la Police en dehors d'un cadre RP validé ; un personnage ne peut pas passer d'une activité légale à une activité illégale, ou inversement, sans une évolution RP cohérente pouvant nécessiter un wipe. Fear RP : lors de situations dangereuses telles que des prises d'otages, interventions armées ou confrontations, le Fear RP doit impérativement être respecté ; la fonction de policier ne rend pas un personnage invincible. Gestion des preuves : seuls les éléments accessibles et obtenus en jeu peuvent être utilisés comme preuves (photographies ou vidéos du téléphone, témoignages, rapports RP, bodycams activées) ; les éléments provenant d'une plateforme extérieure au serveur ne sont pas recevables dans un cadre RP (captures externes, clips hors jeu, messages Discord, etc.). Prison : la prison constitue un environnement RP sécurisé placé sous la responsabilité du SASP et doit être considérée comme un véritable lieu de vie RP et non uniquement comme un espace de sanction."
  },
  {
    title: "SAMS",
    text: "La San Andreas Medical Services (SAMS) est une institution médicale ayant pour mission d'assurer la prise en charge et le suivi médical de la population de San Andreas. Règlement HRP SAMS : un membre de la SAMS est avant tout un professionnel de santé ; son rôle consiste à prendre en charge les patients, qu'il s'agisse de blessures légères ou de situations médicales plus importantes. Il est obligatoire d'être en service pour effectuer des soins ou facturer une prestation médicale ; il est strictement interdit de prendre son service dans le seul but de soigner ou favoriser une connaissance. Les soins doivent obligatoirement être réalisés avec la tenue de service appropriée ; il est également interdit d'effectuer des soins directement depuis l'accueil de l'hôpital lorsque ceux-ci nécessitent une prise en charge médicale. Les membres de la SAMS sont soumis aux lois en vigueur et doivent rester neutres vis-à-vis des activités illégales ; ils ne peuvent pas participer volontairement à des activités criminelles ou prendre part à des scènes illégales en tant qu'acteurs. Les véhicules de service sont exclusivement réservés aux activités professionnelles : leur utilisation à des fins personnelles, pour effectuer des déplacements privés ou pour rendre service à un proche est interdite. Il est strictement interdit de passer abusivement d'un rôle illégal à celui de membre de la SAMS, ou inversement, avec un même personnage ; une telle transition doit respecter une évolution RP cohérente et les règles applicables au changement de voie sous peine de wipe, blacklist ou bannissement."
  },
  {
    title: "Gouvernement & DOJ",
    text: "Le Gouvernement, dirigé par le Gouverneur, assure la gestion de l'État de San Andreas ; le DOJ est une institution indépendante travaillant en collaboration avec le Gouvernement. Conditions & règles : avoir 17 ans HRP minimum ; ne pas être banni du serveur ; le RP illégal est strictement interdit pour les membres ; il est interdit de posséder un P2 ou autre slot ; aucun autre métier n'est autorisé sans accord du Staff ; le vol, transfert ou détournement de matériel public est strictement interdit ; les locaux du Gouvernement et du DOJ sont des zones safe ; il est interdit d'utiliser la fonction RP d'un membre pour organiser une embuscade ou une prise d'otage. DOJ : les informations et dossiers judiciaires sont confidentiels, chaque membre doit respecter ses missions et délais, et le matériel doit être utilisé uniquement dans le cadre du RP ; toute relation avec le milieu illégal est interdite. Gouvernement : les élections ont lieu tous les 5 mois ; les informations internes sont confidentielles et les communications avec les médias doivent être validées. Peines judiciaires : les décisions judiciaires importantes doivent être justifiées, documentées et équitables ; toute demande de prison à vie, longue peine ou CK doit obligatoirement être validée au préalable par le Staff en charge du Gouvernement."
  },
  {
    title: "Entreprise Généralités",
    text: "Il est interdit d'être Patron ou Co-Patron de plusieurs entreprises, même avec plusieurs personnages. L'argent de l'entreprise appartient à celle-ci : toute dépense personnelle avec les fonds de l'entreprise est interdite. Le blanchiment est limité à 100 000 $ par semaine ; tout système de blanchiment doit être validé par les référents Entreprises avant sa mise en place. Les entreprises doivent respecter les Codes des taxes, du travail et des entreprises. Toute cession d'entreprise doit être signalée au Gouvernement et aux référents. Les véhicules d'entreprise ne peuvent être vendus qu'au concessionnaire concerné. Un Patron ou Co-Patron ne peut pas vendre ses biens personnels à sa propre entreprise. Une entreprise est limitée à 80 employés maximum, direction comprise. Le copinage et le favoritisme sont strictement interdits. Les entreprises officielles doivent conserver un comportement exemplaire. Il est interdit de voler plus de 200 items par personne et par semaine dans les coffres d'entreprise. Il est interdit d'interagir avec les véhicules d'entreprise qui ne vous sont pas attribués. Les licenciements doivent être justifiés en RP. Plusieurs de vos personnages ne peuvent pas travailler dans la même entreprise ou dans des entreprises du même secteur ; après un wipe, un personnage ne peut pas réintégrer immédiatement la même entreprise, un délai de 2 mois devant être respecté et toute réintégration devant obligatoirement commencer au grade le plus bas. Il est interdit de prendre son service uniquement pour effectuer une vente, une réparation ou une action ponctuelle avant de quitter immédiatement le service."
  },
  {
    title: "Communication & Annonces Entreprise",
    text: "Utilisation d'un discord : Discord est réservé à certaines utilisations : candidatures, démarches gouvernementales, règlements, cartes et catalogues, annonces et échanges internes, SAMC ; tout le reste doit être effectué en RP. Annonces HRP : utilisation exceptionnelle uniquement, réservées aux recrutements et événements importants. Annonces RP : 30 minutes minimum entre deux annonces, 30 annonces maximum par semaine ; autorisées pour les promotions, recrutements et événements, interdites pour simplement annoncer une ouverture ou fermeture. Contenu : les images générées par IA sont interdites pour les logos, affiches et contenus officiels des entreprises."
  },
  {
    title: "Branches d'entreprises spécifiques",
    text: "Mécanicien : tous les kits de réparation doivent être remis dans le stock à la fin du service ; les dépannages peuvent être effectués avec des véhicules adaptés ; il est interdit de prendre son service uniquement pour dépanner un ami ; maximum 2 4x4 autorisés pour les interventions dans les zones difficiles d'accès. Maison de disque : les musiques doivent être publiées uniquement sur la chaîne dédiée à l'entreprise ; seuls les sons créés sur le serveur sont autorisés ; le vol de contenu est strictement interdit ; toute demande de réactions ou de promotion HRP est interdite, cela devant se faire en RP ; une musique publiée sur Discord doit également être publiée sur l'application musicale du téléphone. Concessionnaire : le PDM est une entreprise strictement légale ; la direction ne peut participer à aucune activité illégale ; les cautions de location sont limitées à 15 000 $ ; seuls les véhicules présents au catalogue peuvent être rachetés ou loués ; les véhicules d'occasion peuvent faire l'objet d'un retour fournisseur à 80 % du prix usine après transmission des IDs concernés. Presse : ce sont des entreprises strictement légales ; la direction ne peut participer à aucune activité illégale ; les contenus doivent être publiés sur la chaîne dédiée à l'entreprise ; les cartes de visite doivent être complétées par le média puis rendues non éditables et non duplicables ; toute promotion HRP est interdite."
  },
  {
    title: "Immobilier & Décoration",
    text: "Règlement général : un bien non loué ou inutilisé pendant 14 jours peut être remplacé par l'agent immobilier ; après 30 jours sans utilisation, le bien peut être supprimé automatiquement. Aucun remboursement n'est accordé en cas de bannissement ou de non-renouvellement du bien, y compris pour les locataires. Tout propriétaire doit répondre aux demandes des agents immobiliers, sans quoi le bien peut être verrouillé. Il est interdit de vendre ou céder uniquement l'emplacement d'une propriété. Une propriété ne peut pas être placée à côté d'une entrée existante sans validation d'un référent Immobilier. Propriété & Garage : l'intérieur Motel est réservé aux motels, l'intérieur Caravane est réservé aux caravanes ; les garages doivent être placés face à une véritable porte de garage et les garages à plusieurs étages sont réservés aux tours ; il est interdit de louer uniquement le garage d'une maison ou de placer des propriétés sur des yachts. Agents immobilier : il est interdit de passer de l'illégal à l'Immobilier ou inversement (sous peine de wipe et blacklist) ; un agent immobilier ne peut participer à aucune activité illégale et il est interdit de le braquer ou le piéger en service pour obtenir des informations. Les informations clients sont strictement confidentielles et la sous-location dissimulée est interdite. Décoration : il est interdit de transférer une décoration achetée auprès de l'agence à un autre joueur, de revendre une décoration que vous n'avez pas créée vous-même ou de voler les décorations d'autres joueurs."
  }
];

  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-32 pb-24 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Row - Aligned with the right content box */}
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
