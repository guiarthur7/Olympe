import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Play, ChevronRight, Users, Shield, Car, Wrench, MessageCircle, Map, Menu, X } from 'lucide-react';

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
            <img src="/logo.png" alt="Olympe Logo" className="w-10 h-10 object-contain" />
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
    <footer className="bg-[#0a0a0a] border-t border-white/10 py-12 text-center">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-center gap-3 mb-6">
          <img src="/logo.png" alt="Olympe Logo" className="w-8 h-8 opacity-70 grayscale" />
          <span className="text-xl font-black uppercase tracking-widest text-gray-300">Olympe<span className="text-white">.</span></span>
        </div>
        <p className="text-gray-500 text-sm mb-6 max-w-md mx-auto">
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
            src="/bg.jpg" 
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
            Plongez dans l'univers immersif de Los Santos. Incarnez le personnage de vos rêves, rejoignez les forces de l'ordre, gérez une entreprise ou dominez la rue. Votre histoire commence ici.
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
    { title: "Cheat & mods interdits", text: "Tout mod menu, ou mod style no recoil, no bush, no water, no props, hitbox, bullet penetration, no spread, no ragdoll etc.., et ou logiciel de cheat est interdit et sera sanctionné d’un ban définitif." },
    { title: "Pseudos offensants", text: "Tout pseudo offensant, raciste ou contenant des propos inappropriés, est totalement interdit, en cas de non-respect de cette règle, un bannissement temporaire ou permanent vous sera administré en fonction de la situation." },
    { title: "/me abusifs", text: "Le /me du style “J'suis nul ontop”, tout comme les /me inutiles, la depop, ez ou pour insulter ou autre sont interdit pendant les scènes rp, le /me sert à décrire une action RP, donc tout /me abusifs pendant une scène RP sera sanctionné d'un ban perm." },
    { title: "Modificateur de voix", text: "Il est interdit d’utiliser un modificateur de voix qui n’apporte RIEN de concret en RP. (Un modificateur de voix utilisé pendant un échange d’otage avec la police pour dissimuler votre identité est autorisé par exemple)" },
    { title: "Discriminations interdites", text: "L’homophobie, la transphobie, le racisme, la zoophilie, la pédophilie, ou toutes autres choses discriminatoire d'une quoiqu'onques façon sont strictement interdit et serons sanctionné d’un ban définitif." },
    { title: "Mensonges aux staffs", text: "Les mensonges aux staffs sont considérés comme une mauvaise foi flagrante et sont interdits, vous serez sanctionnés et surveillé par la suite." },
    { title: "Accessoires non boutique", text: "Tout accessoires mis sur une arme NON Permanente (NON Boutique) sera non remboursable en cas d'échange ou de dons à un autre joueur même sous preuve. (Les accessoires restant collé sur les armes non boutique, en cas de perte ou de saisie par la LSPD ou autre, sera considéré comme de la perte.)" },
    { title: "Ventes IRL interdites", text: "Il est interdit de vendre des armes ou véhicules contre de l’argent IRL ! (Si cela arrive, nous ne seront en aucun cas responsable de toute arnaque ou autre soucis lié à cela.)" },
    { title: "Échanges de comptes", text: "Les échanges de comptes rockstar game sont interdit, si une personne se fait ban, et que cette même personne à été sur votre compte rockstar game, même une fois, vous serez indirectement lié à son ban, et aucun unban ne sera possible tant que la personne ne sera pas unban." },
    { title: "Ventes de comptes", text: "Les ventes de comptes rockstar game sont interdit, pour les même raisons que pour l'échange de compte." },
    { title: "Use bug interdit", text: "L'utilisation de bugs ou de glitches dans votre RP est interdite. Cela inclut l'utilisation d'animations pour sortir de cellules ou le spam de touches pour avantager votre RP. Le \"use bug\" est proscrit sur le serveur." },
    { title: "Publicités interdites", text: "Les publicités de tout type sont strictement interdites. Le serveur ne doit pas être utilisé à des fins publicitaires. (Discord/In Game)" }
  ];

  const hrpRules = [
    { title: "Pseudo cohérent", text: "Tout pseudo discord doit être respectueux et cohérent avec le RP." },
    { title: "Pseudo respectueux", text: "Tout pseudo offensant se verra sanctionnable." },
    { title: "Channel discussion HRP", text: "Le Channel discussion HRP est mis en place afin de s’entraider et de communiquer entre vous !" },
    { title: "Spam", text: "Merci de ne pas spammer ainsi que de vous respecter mutuellement." },
    { title: "Photo", text: "Veillez à bien vérifier si vous postez votre photo dans la section HRP ou RP." },
    { title: "Publicité", text: "Toute pub serveur sera sanctionnée d’un ban définitif !" },
    { title: "Serveurs", text: "Uniquement les serveurs discords reliés à Olympe pourront être partagés." },
    { title: "Questionnement", text: "Si vous avez une question ou un quelconque problème sur le serveur, merci de créer un ticket sur le discord afin que l’on puisse vous aider." },
    { title: "Savoir-vivre", text: "Merci de respecter les formules de politesses et de ne pas spam les membres du staff." },
    { title: "Pings Admin/Modos", text: "Les pings admin/modo/helpeur sont strictement interdit, si vous avez besoin de parler à une personne en particulier indiquez le dans le ticket et les staffs se chargeront de tenir au courant la personne concernée." },
    { title: "Channel Attente Support", text: "Le Channel \"Attente Support\" est créé afin de vous aider si vous rencontrez un souci en jeu ou que vous avez besoin d’aide et de précisions." },
    { title: "Savoir-être", text: "N'oubliez pas que vous n'êtes pas tout seul, il faudra dans certains cas, vous munir de patience le temps qu'un staff vous réponde ou vous prenne en BDA. (Besoin d'aide vocal)" }
  ];

  const illegalRules = [
    { title: "Retour hôpital", text: "Lors d’une scène, le retour hôpital est AUTORISÉ si au bout de 20min après la fin de la scène aucun EMS n’est intervenu." },
    { title: "/porter pour les cadavres", text: "/porter un cadavre est AUTORISÉ uniquement afin d'aider les EMS après un GF." },
    { title: "Véhicules OFF-ROAD", text: "Les véhicules de la catégorie OFF-ROAD (import ou non) sont LES SEULS AUTORISÉS à traverser des chemins de terre, des montagnes, et sont les seuls à pouvoir aller à Cayo." },
    { title: "Radio pendant un braquage", text: "La demande de radio lors d'un braquage est AUTORISÉE (l'otage n'a pas le droit de mentir sur la fréquence.)" },
    { title: "Masque", text: "Si la personne est masquée, il est AUTORISÉ de reconnaître ses tatouages, signe de gang, etc. Également de distinguer si c'est une femme ou un homme, de comprendre son accent." },
    { title: "Vol véhicules civils", text: "Il est AUTORISÉ de voler des véhicules civils." },
    { title: "Alliance", text: "Il est AUTORISÉ de faire une alliance pour faire du business." },
    { title: "Ventes armes à feux illégales", text: "Il est AUTORISÉ de vendre des armes à feu obtenu illégalement." },
    { title: "Loot", text: "Il est AUTORISÉ de loot uniquement 50% de la marchandise ou de l'argent sale/liquide sur une personne." },
    { title: "OP Gang", text: "Le nombre de véhicules AUTORISÉ en convoi est de : 7 + 2 backeuse (2 personnes max) (pour un total de 32 places)" },
    { title: "Braquages", text: "Il est AUTORISÉ de braquer des personnes seulement si vous êtes égaux ou en supériorité numérique." },
    { title: "PO de groupes", text: "Il est AUTORISÉ de PO plusieurs groupes en même temps uniquement s'ils sont présents sur un même point chaud et que votre groupe est clairement en supériorité numérique., (Exemple : Zone de vente, points de drogues)" }
  ];

  const legalRules = [
    { title: "Patron coffre", text: "Il est interdit pour les patrons de se servir dans le coffre de l’entreprise à des fins personnelles." },
    { title: "Reprise d'entreprise en cas d'inactivité prolongée", text: "Les entreprises hors boutique sans activité patronale pendant 2 semaines seront récupérées et remises sous dossier." },
    { title: "Vente d'entreprise", text: "Il est totalement interdit de vendre/donner son entreprise. Si vous ne souhaitez plus gérer votre entreprise, vous devez faire un ticket et celle-ci sera remise sous dossier." },
    { title: "Spam", text: "Merci de ne pas spammer ainsi que de vous respecter mutuellement." },
    { title: "Multi-métier", text: "Il est interdit d'avoir plusieurs emplois légaux en même temps sous peine de vous faire virer de vos deux jobs." },
    { title: "Vol coffre entreprise", text: "Il est interdit de voler dans le coffre de son entreprise." }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-32 pb-24 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-8 text-center">Règlement du Serveur</h1>
        
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
