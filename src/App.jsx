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
    title: "Respect & Vivre-ensemble",
    text: "Tout comportement irrespectueux, harcèlement, menace, insulte, provocation ou acte discriminatoire (racisme, homophobie, transphobie, sexisme, zoophilie, pédophilie) est formellement interdit et passible de bannissement définitif. Les pseudos doivent rester corrects, adaptés et respectueux, sous peine de sanctions administratives."
  },
  {
    title: "Règlement Discord & Canaux",
    text: "Les membres doivent obligatoirement utiliser les salons prévus à cet effet sans dévier du sujet. Le spam, les envois massifs, la publicité pour d'autres serveurs ainsi que la diffusion de photos, conversations ou données privées sans consentement préalable sont formellement prohibés."
  },
  {
    title: "Support & Tickets",
    text: "L'ouverture d'un ticket requiert courtoisie, clarté dans la description du problème et respect des réponses du personnel. Il est interdit d'ouvrir plusieurs tickets sans motif valable ou de mentionner abusivement les membres du staff pour forcer une réponse ; tout ticket inactif pendant plus de 24 heures sera automatiquement clôturé."
  },
  {
    title: "Sanctions, Bans & Enquêtes Staff",
    text: "Le staff se réserve le droit de restreindre, suspendre ou révoquer l'accès au serveur en cas d'antécédents de triche, de duplication, de toxicité récurrente ou de sanctions sur d'autres communautés. L'évaluation s'appuie sur le comportement global, les candidatures et la bonne foi du joueur, une période probatoire pouvant être imposée sans nécessité de justification publique."
  },
  {
    title: "Lexique & Notions Fondamentales RP",
    text: "Le respect des principes de base est obligatoire : interdiction absolue du PowerGaming, du MetaGaming, du WinRP, du ForceRP, du FreeKill, du FreeLoot et du Carkill. Les joueurs doivent impérativement respecter le PainRP en simulant leurs blessures, appliquer un FearRP crédible face à la menace, faire preuve de FairPlay en acceptant les issues négatives, et ne jamais provoquer intentionnellement la police (CopBait)."
  },
  {
    title: "Zones Safe",
    text: "Les zones safes sont des espaces protégés au sein desquels toute forme de confrontation, de violence, d'activité illégale, d'agression ou d'enlèvement est rigoureusement interdite afin de garantir la tranquillité des interactions civiles."
  }
];

const hrpRules = [
  {
    title: "Graphismes, Packs & Avantages Tiers",
    text: "Afin de préserver une équité absolue, tous les mods apportant un avantage concurrentiel sont strictement interdits : packs No Props, No Elements, No Water, No Bush, crosshairs ou viseurs personnalisés, Kill/Blood/Hit Effects, Tracers, modifications du champ de vision (FOV) ou fichiers de stamina illimitée. Chaque joueur demeure responsable de l'intégrité de ses fichiers de jeu sous peine de sanctions sévères."
  },
  {
    title: "Politique de Remboursements",
    text: "Vous êtes entièrement responsable de la sécurité de vos biens : anticipez les reboots réguliers en mettant vos affaires à l'abri, vérifiez systématiquement le destinataire et le montant de vos virements, renouvelez vos locations pour parer à l'inactivité et assumez les accès accordés à des tiers en cas de vol ou de trahison. De même, aucune indemnisation n'est accordée pour la perte d'objets illégaux après un coma ou un crash, ni pour les vols dans les coffres de véhicules (hors vol d'arme), toute demande nécessitant obligatoirement des preuves vérifiables."
  },
  {
    title: "Encadrement du Streaming",
    text: "Le streaming est autorisé à condition de bannir le trashtalk et tout dénigrement du projet ou de sa communauté. Il est strictement interdit d'exploiter les informations du chat en jeu (streamhack/metagaming) et le streamer doit obligatoirement couper l'image et le son dès l'instant où un membre du staff intervient pour une démarche administrative."
  },
  {
    title: "Règles Générales du Wipe & Mort RP",
    text: "Un wipe supprime intégralement l'histoire du personnage, exigeant la création d'une nouvelle identité sans lien familial, vengeur ou relationnel avec l'ancienne, et sans transmission de biens matériels ou financiers. La Mort RP peut être décrétée via dossier validé, NoFear caractérisé ou abus de tirs, et ne peut être sollicitée si le compte affiche des dettes ou des poursuites judiciaires pendantes."
  },
  {
    title: "Interdictions Générales en Jeu",
    text: "Sont formellement prohibés : l'incarnation de mineurs (18 ans minimum requis), les vocaux externes à FiveM en cours de scène, le RP ou contenu à caractère sexuel, les propos HRP en vocal (« GoPro », « papillon »), le usebug et spam d'animations, les transactions contre de l'argent réel, l'achat/vente de cartes bancaires, les annonces illégales sur applications publiques, la fuite à la nage non concertée et l'usage de tenues d'entreprises ou de services d'urgence hors service."
  },
  {
    title: "Coma, Déconnexions & Utilisation du /me",
    text: "Tomber dans le coma n'entraîne aucune amnésie des faits antérieurs mais interdit strictement de communiquer (oralement ou par écrit pour renseigner autrui), de trash le corps ou de le déplacer pour entraver les secours. La commande /me doit exclusivement servir à décrire l'état physiologique ou émotionnel du personnage, et toute rancœur HRP ou vengeance post-réanimation est formellement proscrite."
  }
];

const illegalRules = [
  {
    title: "Communication & Gestion des Groupes",
    text: "Les membres d'un groupe doivent arborer leurs rôles Discord, respecter les référents dédiés et gérer leurs litiges via des tickets détaillés avec preuves. Tout joueur débute en civil avant de créer ou rejoindre une Petite Frappe puis de soumettre un dossier cohérent validé par le staff pour devenir un groupe officiel ; un joueur ne peut posséder qu'un seul personnage impliqué dans l'illégal sous peine de ban."
  },
  {
    title: "Conduite des Activités Criminelles & Fear",
    text: "Le Fear RP s'applique rigoureusement face au danger et il est interdit de retourner se réfugier à son quartier après une prise en chasse par les autorités ou des rivaux. Les alliances entre factions criminelles sont interdites, le DarkChat constitue le seul canal de vente autorisé pour l'illégal, et les scènes de torture ou mutilations nécessitent impérativement l'accord de la victime ainsi que l'approbation du staff."
  },
  {
    title: "Prises d'Otages & Rançons",
    text: "Toute prise d'otage exige un motif RP valable (les faux otages étant interdits) et ne peut cibler des services publics que de manière exceptionnelle sans voler leur matériel de service. Les rançons sont plafonnées à 5 000 $ par individu et 1 500 $ par véhicule sans exiger de virement bancaire, tandis qu'il est interdit d'attirer des personnes hors d'un commerce ou de lancer une prise d'otage immédiatement après un échange de tirs."
  },
  {
    title: "Fusillades, Drive-By & Affrontements",
    text: "Les tirs constituent un ultime recours précédé d'une véritable interaction verbale (limite d'une fusillade par groupe et par soirée), sans avantage stratégique abusif ni déplacement de corps au sol. Les Drive-by et Walk-by sont réservés aux gangs à une vitesse maximale de 50 km/h avec obligation de mettre pied à terre pour dépouiller, tout retour sur zone après réanimation étant strictement exclu."
  },
  {
    title: "Production, Vente de Drogues & Récoltes",
    text: "La production et la vente de stupéfiants sont proscrites dans les zones safes ainsi que dans un rayon de 3 km autour des QG officiels. Pour effectuer des ventes aux PNJ (interdites aux organisations), le produit doit avoir été acheté à un tiers sans fuite immédiate en véhicule, et les récoltes doivent s'effectuer équitablement dans des camionnettes adaptées (Speedo, Burrito, Rumpo) sans monopolisation des horaires."
  },
  {
    title: "Véhicules, Convois & Poursuites",
    text: "Les véhicules supersport, deux-roues et vélos sont interdits pour les méfaits (sauf dérogations spécifiques aux MC), les poursuites devant strictement opposer un véhicule contre un sans renforts opportunistes. Les convois sont interdits hormis pour les clubs de motards, les tirs sur pneumatiques requièrent 15 minutes de course préalable, et tout carjacking implique de laisser 48h au propriétaire via son numéro pour négocier une rançon."
  },
  {
    title: "Armes, Munitions & Plafonds Tarifaires",
    text: "Les civils et petites frappes sont limités au Judge Revolver et à la Pétoire classique (hors modèle MK II), le transfert d'armes entre personnages ou pour revente déléguée étant passible de ban permanent. Les stocks de munitions sont plafonnés (36 pour armes de poing, 24 pour pompes, 80 pour SMG, 90 pour fusils d'assaut) et les tarifs de revente sont encadrés : 10 000 $ (armes contondantes), 20 000 $ (armes blanches), 200 $ (objets de lancer) et 80 000 $ (armes de poing)."
  },
  {
    title: "Braquages, Cambriolages & Attaques de Factions",
    text: "Les braquages de Fleeca et bijouteries exigent au moins 2 malfaiteurs armés (avec au minimum 4 munitions), 2 otages non dépouillés, 2 véhicules maximum et 15 minutes d'attente des forces de l'ordre avant fuite. Les attaques de commerces imposent 5 minutes d'attente sans plan Mule ni otage, tandis que les assauts contre des entreprises, laboratoires ou business secondaires requièrent un dossier d'investigation RP validé au préalable par le staff."
  },
  {
    title: "Règles de Loot, Délais de Revanche & Vols",
    text: "Le freeloot et le pillage d'armes, munitions, radios ou téléphones sur un individu sont strictement interdits, le butin étant plafonné à 50 % d'un stackable ou 1 objet unique. Après une action hostile, un délai d'un jour (ou 2 heures en guerre officielle) doit séparer deux revanches ; les arnaques, le crochetage d'habitations pour séquestration et les faux rendez-vous Marketplace sont rigoureusement réprimés."
  },
  {
    title: "Départ de Groupe, Wipe Criminel & Corruption",
    text: "Tout départ volontaire d'un groupe officiel impose un wipe intégral sans emporter de ressources communes et un délai de 3 semaines s'applique avant d'intégrer une nouvelle faction officielle. La corruption au sein de l'État exige un dossier staff validé et reste restreinte aux fonctions subalternes (conseiller, secrétaire, garde du corps), à l'exclusion stricte du Gouverneur, Vice-Gouverneur, Chef de Cabinet et de l'IRS."
  }
];

const legalRules = [
  {
    title: "Police (SASP) : Éthique, Recrutement & Évolution",
    text: "Rejoindre le SASP impose la majorité IRL, un background crédible et l'interdiction d'un second personnage actif ou d'un métier parallèle. Les agents doivent prioriser la création de scènes et le fair-play plutôt que l'interpellation systématique, accepter les enquêtes internes ou sanctions disciplinaires liées à leurs erreurs, et respecter scrupuleusement le Fear RP lors d'interventions à haut risque sans user de leurs équipements pour déséquilibrer abusivement le jeu."
  },
  {
    title: "Police (SASP) : Gestion des Preuves & Environnement Carcéral",
    text: "Seuls les indices et documents recueillis directement en jeu (photos de téléphone, rapports, bodycams activées) constituent des preuves judiciaires recevables, à l'exclusion formelle des captures, vocaux ou messages issus de Discord. Le vol de matériel policier est prohibé sans validation staff pour scène majeure, et la prison constitue un cadre de vie immersif où les détenus doivent pleinement jouer leur détention et en respecter les règles."
  },
  {
    title: "Services Médicaux (SAMS) : Déontologie & Prise en Charge",
    text: "Les membres du SAMS doivent impérativement être en service et revêtir leur uniforme officiel pour prodiguer des soins ou émettre des factures, toute complaisance envers des proches étant interdite. Soumis à une stricte neutralité vis-à-vis des conflits illégaux, ils ne peuvent détourner leurs ambulances à des fins privées ni basculer vers l'illégal sans évolution RP cohérente et validation par les instances compétentes."
  },
  {
    title: "Gouvernement & Département de la Justice (DOJ)",
    text: "Accessibles dès 17 ans HRP, les fonctions étatiques et judiciaires proscrivent tout rôleplay illégal, possession de second slot ou métier cumulé sous peine de radiation immédiate. Les bâtiments officiels sont des zones safes inviolables, les dossiers judiciaires demeurent strictement confidentiels et toute condamnation exceptionnelle (prison à vie ou CK) requiert la validation préalable du staff référent."
  },
  {
    title: "Entreprises Générales : Gestion, Personnel & Cessions",
    text: "Il est strictement interdit de diriger plusieurs entreprises, de faire des dépenses personnelles sur les fonds de la société, de dépasser 80 salariés ou de blanchir plus de 100 000 $ par semaine sans approbation. Les véhicules et biens professionnels ne peuvent être détournés, les vols de coffres sont limités à 200 items par personne et par semaine, et un délai de 2 mois avec reprise au grade le plus bas s'impose après un wipe avant toute réintégration."
  },
  {
    title: "Communication d'Entreprise, Discord & IA",
    text: "L'usage de Discord est strictement cantonné aux candidatures, démarches étatiques, catalogues et communications internes, toute autre interaction devant se jouer en ville. Les annonces RP sont limitées à 30 par semaine avec 30 minutes d'intervalle pour des motifs concrets (recrutement, promotions), tandis que l'utilisation d'images générées par IA pour les logos et affiches professionnelles est formellement bannie."
  },
  {
    title: "Branches Spécifiques : Garages, Musique, Concession & Presse",
    text: "Les mécaniciens doivent réintégrer tous leurs kits de réparation en stock en fin de service et limiter leurs 4x4 d'intervention à 2 unités. Les maisons de disques ne diffusent que des créations originales créées sur le serveur sans promotion HRP, le concessionnaire (strictement légal) limite les cautions à 15 000 $, et les médias émettent des cartes de visite infalsifiables sans participer au moindre réseau illégal."
  },
  {
    title: "Immobilier & Décoration",
    text: "Tout bien non exploité pendant 14 jours peut être réassigné (et supprimé après 30 jours sans remboursement), les emplacements devant rester accessibles et cohérents sans cession isolée d'adresses. Les agents immobiliers ne peuvent être liés à l'illégal ni subir de braquage en service, la sous-location opaque est interdite, et les décorations d'intérieur ne peuvent faire l'objet de vols, de transferts tiers ou de reventes non créées par le joueur."
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
