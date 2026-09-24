/**
 * EMERGENCY KERALA - അടിയന്തര സഹായം
 * Interactive Client-side Script
 */

document.addEventListener('DOMContentLoaded', () => {
  // --------------------------------------------------------------------------
  // 1. Comprehensive Verified Emergency Services Data
  // --------------------------------------------------------------------------
  const emergencyServices = [
    {
      id: 'unified-112',
      name: 'ഏകീകൃത അടിയന്തര സേവനം',
      nameEn: 'Unified National Emergency Service (ERSS)',
      number: '112',
      category: 'police',
      categoryEn: 'Police & Unified',
      badge: '24x7 അടിയന്തരം',
      icon: 'fa-shield-halved',
      desc: 'പോലീസ്, ആംബുലൻസ്, ഫയർ സർവീസ് എന്നിവ ഒരൊറ്റ നമ്പറിൽ ലഭ്യമാക്കുന്ന കേന്ദ്രീകൃത അടിയന്തര സംവിധാനം.',
      keywords: 'police ambulance fire erss national emergency 112 polees',
      theme: 'red'
    },
    {
      id: 'police-100',
      name: 'പോലീസ് കൺട്രോൾ റൂം',
      nameEn: 'Police Control Room',
      number: '100',
      category: 'police',
      categoryEn: 'Police',
      badge: 'പോലീസ് സഹായം',
      icon: 'fa-user-shield',
      desc: 'ക്രമസമാധാന പ്രശ്നങ്ങൾ, അടിയന്തര കുറ്റകൃത്യ റിപ്പോർട്ടിംഗ് എന്നിവയ്ക്കുള്ള പോലീസ് സഹായം.',
      keywords: 'police 100 crime law order polees control room',
      theme: 'red'
    },
    {
      id: 'ambulance-108',
      name: 'ആംബുലൻസ് സർവീസ് (കനിവ്)',
      nameEn: 'Ambulance Service (KANIV 108)',
      number: '108',
      category: 'ambulance',
      categoryEn: 'Ambulance',
      badge: 'മെഡിക്കൽ എമർജൻസി',
      icon: 'fa-truck-medical',
      desc: 'റോഡപകടങ്ങൾ, ഹൃദയാഘാതം, ഗുരുതര രോഗങ്ങൾ എന്നിവയ്ക്ക് സൗജന്യ അടിയന്തര ആംബുലൻസ് സേവനം.',
      keywords: 'ambulance 108 kaniv medical hospital accident emergency marunnu',
      theme: 'blue'
    },
    {
      id: 'fire-101',
      name: 'ഫയർ & റെസ്ക്യൂ സർവീസ്',
      nameEn: 'Kerala Fire & Rescue Services',
      number: '101',
      category: 'fire',
      categoryEn: 'Fire & Rescue',
      badge: 'തീപിടുത്തം & രക്ഷാപ്രവർത്തനം',
      icon: 'fa-fire-extinguisher',
      desc: 'തീപിടുത്തം, വെള്ളപ്പൊക്കം, അപകടങ്ങളിൽപ്പെട്ടുള്ള രക്ഷാപ്രവർത്തനങ്ങൾ എന്നിവയ്ക്ക് വിളിക്കുക.',
      keywords: 'fire 101 rescue theepidutham theepi reksha',
      theme: 'orange'
    },
    {
      id: 'women-181',
      name: 'മിത്ര വനിതാ ഹെൽപ്ലൈൻ',
      nameEn: 'Mitra Women Helpline',
      number: '181',
      category: 'women',
      categoryEn: 'Women Helpline',
      badge: 'വനിതാ സുരക്ഷ',
      icon: 'fa-person-dress',
      desc: 'സ്ത്രീകൾക്കെതിരെയുള്ള അതിക്രമങ്ങൾ, ഗാർഹിക പീഡനം, അടിയന്തര അഭയം എന്നിവയ്ക്ക് 24 മണിക്കൂർ സഹായം.',
      keywords: 'women 181 vanitha sthree mitra violence harassment',
      theme: 'pink'
    },
    {
      id: 'child-1098',
      name: 'ചൈൽഡ് ഹെൽപ്ലൈൻ',
      nameEn: 'Childline Helpline',
      number: '1098',
      category: 'child',
      categoryEn: 'Child Helpline',
      badge: 'ശിശു സംരക്ഷണം',
      icon: 'fa-child-reaching',
      desc: 'കുട്ടികൾക്കെതിരെയുള്ള അതിക്രമങ്ങൾ, ബാലവേല, സഹായം ആവശ്യമുള്ള കുട്ടികൾക്ക് അടിയന്തര പിന്തുണ.',
      keywords: 'child 1098 childline kuttikal balavela protection kids',
      theme: 'amber'
    },
    {
      id: 'health-disha-104',
      name: 'ദിശ ആരോഗ്യ ഹെൽപ്ലൈൻ',
      nameEn: 'DISHA Health Helpline (104 / 1056)',
      number: '1056',
      category: 'health',
      categoryEn: 'Health Services',
      badge: 'ആരോഗ്യ വിവരങ്ങൾ',
      icon: 'fa-user-doctor',
      desc: '24 മണിക്കൂർ ആരോഗ്യ സംശയങ്ങൾ, ഡോക്ടർ കൗൺസിലിംഗ്, പകർച്ചവ്യാധി നിർദ്ദേശങ്ങൾ.',
      keywords: 'health 104 1056 disha doctor arogyam medical counselling',
      theme: 'green'
    },
    {
      id: 'cyber-1930',
      name: 'സൈബർ സാമ്പത്തിക തട്ടിപ്പ് ഹെൽപ്ലൈൻ',
      nameEn: 'Cyber Financial Fraud Helpline',
      number: '1930',
      category: 'cyber',
      categoryEn: 'Cyber Crime',
      badge: 'സൈബർ ക്രൈം',
      icon: 'fa-laptop-code',
      desc: 'ഓൺലൈൻ ബാങ്കിംഗ്, UPI, വ്യാജ കോളുകൾ വഴിയുള്ള സാമ്പത്തിക തട്ടിപ്പ് ഉടൻ റിപ്പോർട്ട് ചെയ്യുക.',
      keywords: 'cyber crime 1930 online fraud banking upi hacking money thadappu',
      theme: 'cyan'
    },
    {
      id: 'pink-police-1515',
      name: 'പിങ്ക് പോലീസ് പെട്രോൾ',
      nameEn: 'Pink Police Patrol Kerala',
      number: '1515',
      category: 'women',
      categoryEn: 'Women Safety',
      badge: 'സ്ത്രീ സുരക്ഷ',
      icon: 'fa-shield-heart',
      desc: 'പൊതുസ്ഥലങ്ങളിലും യാത്രകളിലും സ്ത്രീകൾക്കും കുട്ടികൾക്കും നേരെയുള്ള ശല്യപ്പെടുത്തലുകൾ തടയാൻ.',
      keywords: 'pink police 1515 patrol women safety bus stop travel',
      theme: 'pink'
    },
    {
      id: 'disaster-sdma-1070',
      name: 'സംസ്ഥാന ദുരന്ത നിവാരണ അതോറിറ്റി',
      nameEn: 'State Emergency Operation Centre (SDMA)',
      number: '1070',
      category: 'disaster',
      categoryEn: 'Disaster Management',
      badge: 'സംസ്ഥാന കൺട്രോൾ റൂം',
      icon: 'fa-cloud-showers-water',
      desc: 'പ്രളയം, ചുഴലിക്കാറ്റ്, മണ്ണിടിച്ചിൽ തുടങ്ങിയ പ്രകൃതി ദുരന്തങ്ങളുടെ സംസ്ഥാന ഏകോപന കേന്ദ്രം.',
      keywords: 'disaster 1070 sdma flood cyclone landslide dhoorantham kerala',
      theme: 'cyan'
    },
    {
      id: 'disaster-dist-1077',
      name: 'ജില്ലാ ദുരന്ത നിവാരണ ഹെൽപ്ലൈൻ',
      nameEn: 'District Disaster Control Room (DDMA)',
      number: '1077',
      category: 'disaster',
      categoryEn: 'Disaster Management',
      badge: 'ജില്ലാ കൺട്രോൾ റൂം',
      icon: 'fa-house-flood-water',
      desc: 'ഓരോ ജില്ലയിലെയും കളക്ടറേറ്റ് ദുരന്ത നിവാരണ അടിയന്തര വിഭാഗത്തിലേക്ക് നേരിട്ട് വിളിക്കാം.',
      keywords: 'district disaster 1077 collectorate ddma rain warning',
      theme: 'cyan'
    },
    {
      id: 'senior-14567',
      name: 'എൽഡർ ലൈൻ (മുതിർന്ന പൗരന്മാർ)',
      nameEn: 'Elderline (National Senior Citizen Helpline)',
      number: '14567',
      category: 'elderly',
      categoryEn: 'Elderly Support',
      badge: 'മുതിർന്നവർക്ക് സഹായം',
      icon: 'fa-person-cane',
      desc: 'മുതിർന്ന പൗരന്മാർക്ക് ആവശ്യമായ സംരക്ഷണം, മാനസിക പിന്തുണ, നിയമസഹായം എന്നിവയ്ക്ക്.',
      keywords: 'elderly 14567 elderline senior citizen muthirnavar old age',
      theme: 'amber'
    },
    {
      id: 'mental-telemanas-14416',
      name: 'ടെലി-മാനസ് (മാനസികാരോഗ്യ സഹായം)',
      nameEn: 'Tele-MANAS Mental Health Support',
      number: '14416',
      category: 'mental',
      categoryEn: 'Mental Health',
      badge: '24x7 കൗൺസിലിംഗ്',
      icon: 'fa-brain',
      desc: 'മാനസിക സമ്മർദ്ദം, വിഷാദം, ആത്മഹത്യാ പ്രതിരോധം എന്നിവയ്ക്കുള്ള സൗജന്യ വിദഗ്ധ കൗൺസിലിംഗ്.',
      keywords: 'mental health 14416 telemanas depression stress suicide prevention manasika',
      theme: 'green'
    },
    {
      id: 'railway-139',
      name: 'റെയിൽ മദദ് (റെയിൽവേ ഹെൽപ്ലൈൻ)',
      nameEn: 'Rail Madad - Unified Railway Helpline',
      number: '139',
      category: 'railway',
      categoryEn: 'Railway Security',
      badge: 'റെയിൽവേ സഹായം',
      icon: 'fa-train-subway',
      desc: 'ട്രെയിൻ യാത്രയിലെ സുരക്ഷ, മെഡിക്കൽ അടിയന്തരാവസ്ഥ, പരാതികൾ എന്നിവയ്ക്ക് വിളിക്കുക.',
      keywords: 'railway 139 train rail madad security irctc yaathra',
      theme: 'blue'
    },
    {
      id: 'highway-1033',
      name: 'ദേശീയപാത റോഡ് അപകട സഹായം',
      nameEn: 'National Highway Emergency (NHAI)',
      number: '1033',
      category: 'highway',
      categoryEn: 'Highway Assistance',
      badge: 'ഹൈവേ എമർജൻസി',
      icon: 'fa-road',
      desc: 'ദേശീയപാതകളിലെ വാഹനാപകടങ്ങൾ, റോഡ് തടസ്സങ്ങൾ, ടോവിംഗ്, അടിയന്തര ആംബുലൻസ് സേവനം.',
      keywords: 'highway 1033 nhai road accident towing breakdown vahanam',
      theme: 'orange'
    },
    {
      id: 'kseb-1912',
      name: 'കെ.എസ്.ഇ.ബി അടിയന്തര സേവനം',
      nameEn: 'KSEB Power Emergency Helpline',
      number: '1912',
      category: 'electricity',
      categoryEn: 'Electricity',
      badge: 'വൈദ്യുതി അപകടങ്ങൾ',
      icon: 'fa-bolt-lightning',
      desc: 'പൊട്ടിവീണ വൈദ്യുത കമ്പികൾ, ഷോക്ക് അപകടങ്ങൾ, അടിയന്തര വൈദ്യുതി തടസ്സം എന്നിവ റിപ്പോർട്ട് ചെയ്യാൻ.',
      keywords: 'electricity 1912 kseb power current shock line vaidyuthi',
      theme: 'amber'
    },
    {
      id: 'lpg-1906',
      name: 'LPG ഗ്യാസ് ചോർച്ച ഹെൽപ്ലൈൻ',
      nameEn: 'LPG Gas Leakage Emergency',
      number: '1906',
      category: 'gas',
      categoryEn: 'LPG / Gas Leak',
      badge: 'ഗ്യാസ് ചോർച്ച',
      icon: 'fa-gas-pump',
      desc: 'പാചകവാതക ചോർച്ച ഉണ്ടായാൽ ഉടൻ വിളിക്കേണ്ട അടിയന്തര ഹെൽപ്ലൈൻ നമ്പർ (24x7).',
      keywords: 'gas 1906 lpg leak cylinder bharath indane hp cooking',
      theme: 'red'
    },
    {
      id: 'forest-1926',
      name: 'വനം & വന്യജീവി ഹെൽപ്ലൈൻ',
      nameEn: 'Kerala Forest & Wildlife Helpline',
      number: '1926',
      category: 'forest',
      categoryEn: 'Forest & Wildlife',
      badge: 'വന്യജീവി ശല്യം',
      icon: 'fa-tree',
      desc: 'നാട്ടിലിറങ്ങുന്ന വന്യമൃഗങ്ങൾ, പാമ്പ് ശല്യം, കാട്ടുതീ, വനം സംരക്ഷണ വിവരങ്ങൾ അറിയിക്കാൻ.',
      keywords: 'forest 1926 wildlife snake animal vanam kaattuthee aana vanam',
      theme: 'green'
    },
    {
      id: 'coastal-1554',
      name: 'തീരദേശ സുരക്ഷ / കോസ്റ്റ് ഗാർഡ്',
      nameEn: 'Indian Coast Guard SAR Helpline',
      number: '1554',
      category: 'coastal',
      categoryEn: 'Coastal Security',
      badge: 'കടൽ സുരക്ഷ',
      icon: 'fa-ship',
      desc: 'കടലിലെ അപകടങ്ങൾ, മത്സ്യത്തൊഴിലാളികളുടെ അടിയന്തര രക്ഷാപ്രവർത്തനം, തീരദേശ സുരക്ഷ.',
      keywords: 'coastal 1554 sea coast guard fishermen boat rescue kadal theeram',
      theme: 'blue'
    },
    {
      id: 'blood-104',
      name: 'രക്തദാന സഹായം & ബ്ലഡ് ബാങ്ക് വിവരങ്ങൾ',
      nameEn: 'Kerala State Blood Transfusion Council',
      number: '104',
      category: 'blood',
      categoryEn: 'Blood Donation',
      badge: 'രക്തദാനം',
      icon: 'fa-droplet',
      desc: 'അടിയന്തര ഘട്ടങ്ങളിൽ രക്തം ലഭ്യമാക്കുന്നതിനും ബ്ലഡ് ബാങ്ക് സ്റ്റോക്ക് വിവരങ്ങൾക്കും.',
      keywords: 'blood donation 104 transfusion raktham hospital donor',
      theme: 'red'
    },
    {
      id: 'aparajitha-police',
      name: 'അപരാജിത ഈസ് ഓൺലൈൻ (വനിതാ സുരക്ഷ)',
      nameEn: 'Aparajitha Kerala Police Portal',
      number: '9497996992',
      category: 'women',
      categoryEn: 'Women Cyber & Domestic Safety',
      badge: 'വാട്ട്‌സ്ആപ്പ് ഹെൽപ്ലൈൻ',
      icon: 'fa-mobile-screen-button',
      desc: 'സ്ത്രീകൾക്കെതിരായ ഓൺലൈൻ ചൂഷണം, സ്ത്രീധന പീഡനം എന്നിവ വാട്ട്‌സ്ആപ്പിലൂടെ റിപ്പോർട്ട് ചെയ്യാം.',
      keywords: 'aparajitha 9497996992 police whatsapp dowry cyber women',
      theme: 'pink'
    },
    {
      id: 'poison-control',
      name: 'വിഷബാധ നിയന്ത്രണ വിഭാഗം',
      nameEn: 'Poison Information Centre (Amrita/Govt)',
      number: '04842807101',
      category: 'health',
      categoryEn: 'Poison Control',
      badge: 'വിഷബാധ ചികിത്സ',
      icon: 'fa-skull-crossbones',
      desc: 'വിഷബാധ, കീടനാശിനി, അബദ്ധത്തിൽ രാസവസ്തുക്കൾ ഉള്ളിൽച്ചെന്നാൽ അടിയന്തര ചികിത്സാ നിർദ്ദേശം.',
      keywords: 'poison 04842807101 snake bite chemical visham vishabaadha toxicology',
      theme: 'amber'
    },
    {
      id: 'airport-help-cial',
      name: 'കൊച്ചി അന്താരാഷ്ട്ര വിമാനത്താവളം (CIAL)',
      nameEn: 'Cochin International Airport Emergency',
      number: '04842610115',
      category: 'airport',
      categoryEn: 'Airport Emergency',
      badge: 'എയർപോർട്ട് ഹെൽപ്ലൈൻ',
      icon: 'fa-plane-departure',
      desc: 'വിമാനത്താവളത്തിലെ അടിയന്തര വൈദ്യസഹായം, സുരക്ഷ, അന്വേഷണങ്ങൾ എന്നിവയ്ക്ക്.',
      keywords: 'airport 04842610115 cial cochin flight vimaanam terminal',
      theme: 'blue'
    },
    {
      id: 'highway-police-kerala',
      name: 'കേരള ഹൈവേ പോലീസ് പെട്രോളിംഗ്',
      nameEn: 'Kerala Highway Police Control',
      number: '9846100100',
      category: 'highway',
      categoryEn: 'Highway Patrol',
      badge: 'ഹൈവേ പെട്രോൾ',
      icon: 'fa-car-burst',
      desc: 'സംസ്ഥാന ഹൈവേകളിലെ അപകടങ്ങൾ, രാത്രികാല സുരക്ഷാ സഹായം, വാഹന തകരാർ.',
      keywords: 'highway patrol 9846100100 police kerala accident vahanam',
      theme: 'orange'
    }
  ];

  // --------------------------------------------------------------------------
  // 2. DOM Elements
  // --------------------------------------------------------------------------
  const directoryContainer = document.getElementById('directoryGrid');
  const searchInput = document.getElementById('mainSearchInput');
  const searchClearBtn = document.getElementById('searchClearBtn');
  const filterChips = document.querySelectorAll('.filter-chip');
  const noResultsBox = document.getElementById('noResultsBox');
  const noResultsQuery = document.getElementById('noResultsQuery');
  const resetSearchBtn = document.getElementById('resetSearchBtn');

  // Floating SOS & Modals
  const floatingSosBtn = document.getElementById('floatingSosBtn');
  const navSosBtn = document.getElementById('navSosBtn');
  const heroSosBtn = document.getElementById('heroSosBtn');
  const sosModal = document.getElementById('sosModal');
  const sosModalClose = document.getElementById('sosModalClose');

  // Call Confirmation Dialog
  const confirmDialog = document.getElementById('confirmDialog');
  const confirmServiceName = document.getElementById('confirmServiceName');
  const confirmNumberDisplay = document.getElementById('confirmNumberDisplay');
  const confirmCallBtn = document.getElementById('confirmCallBtn');
  const confirmCancelBtn = document.getElementById('confirmCancelBtn');

  // Location Elements
  const getLocationBtn = document.getElementById('getLocationBtn');
  const locationResultBox = document.getElementById('locationResultBox');
  const latVal = document.getElementById('latVal');
  const lngVal = document.getElementById('lngVal');
  const accuracyVal = document.getElementById('accuracyVal');
  const copyCoordsBtn = document.getElementById('copyCoordsBtn');
  const openMapsBtn = document.getElementById('openMapsBtn');
  const shareWhatsAppBtn = document.getElementById('shareWhatsAppBtn');

  // Navigation
  const header = document.querySelector('.site-header');
  const mobileMenuToggle = document.getElementById('mobileMenuToggle');
  const navLinks = document.getElementById('navLinks');
  const navItems = document.querySelectorAll('.nav-link');

  let currentCategory = 'all';
  let currentSearchTerm = '';
  let pendingCallNumber = null;
  let currentCoordinates = null;

  // --------------------------------------------------------------------------
  // 3. Render Directory Cards
  // --------------------------------------------------------------------------
  function renderDirectory() {
    if (!directoryContainer) return;

    const filtered = emergencyServices.filter(item => {
      const matchCategory = currentCategory === 'all' || item.category === currentCategory;
      const searchNormalized = currentSearchTerm.toLowerCase().trim();

      const matchSearch = !searchNormalized ||
        item.name.toLowerCase().includes(searchNormalized) ||
        item.nameEn.toLowerCase().includes(searchNormalized) ||
        item.number.includes(searchNormalized) ||
        item.desc.toLowerCase().includes(searchNormalized) ||
        item.keywords.toLowerCase().includes(searchNormalized);

      return matchCategory && matchSearch;
    });

    directoryContainer.innerHTML = '';

    if (filtered.length === 0) {
      if (noResultsBox) {
        noResultsBox.style.display = 'block';
        if (noResultsQuery) {
          noResultsQuery.textContent = currentSearchTerm ? `"${currentSearchTerm}"` : '';
        }
      }
      return;
    }

    if (noResultsBox) {
      noResultsBox.style.display = 'none';
    }

    filtered.forEach(service => {
      const card = document.createElement('div');
      card.className = `dir-card card-theme-${service.theme}`;
      card.setAttribute('data-id', service.id);

      card.innerHTML = `
        <div>
          <div class="dir-card-header">
            <div class="dir-icon">
              <i class="fa-solid ${service.icon}"></i>
            </div>
            <div>
              <h3 class="dir-title">${service.name}</h3>
              <span class="dir-subtitle-en">${service.nameEn}</span>
            </div>
          </div>
          <div class="dir-number-bar">
            <span class="dir-number">${service.number}</span>
            <span class="dir-badge">${service.badge}</span>
          </div>
          <p class="dir-desc">${service.desc}</p>
        </div>
        <div class="dir-actions">
          <button class="btn-dir-call js-call-trigger" data-number="${service.number}" data-name="${service.name}" aria-label="${service.name} നമ്പറിലേക്ക് വിളിക്കുക">
            <i class="fa-solid fa-phone"></i> വിളിക്കുക
          </button>
          <button class="btn-dir-copy js-copy-trigger" data-number="${service.number}" aria-label="${service.number} കോപ്പി ചെയ്യുക" title="നമ്പർ കോപ്പി ചെയ്യുക">
            <i class="fa-regular fa-copy"></i>
          </button>
        </div>
      `;

      directoryContainer.appendChild(card);
    });

    attachCardEvents();
  }

  // --------------------------------------------------------------------------
  // 4. Search and Filter Handlers
  // --------------------------------------------------------------------------
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearchTerm = e.target.value;
      if (searchClearBtn) {
        searchClearBtn.style.display = currentSearchTerm ? 'flex' : 'none';
      }
      renderDirectory();
    });
  }

  if (searchClearBtn) {
    searchClearBtn.addEventListener('click', () => {
      if (searchInput) {
        searchInput.value = '';
        searchInput.focus();
      }
      currentSearchTerm = '';
      searchClearBtn.style.display = 'none';
      renderDirectory();
    });
  }

  if (resetSearchBtn) {
    resetSearchBtn.addEventListener('click', () => {
      currentCategory = 'all';
      currentSearchTerm = '';
      if (searchInput) searchInput.value = '';
      if (searchClearBtn) searchClearBtn.style.display = 'none';

      filterChips.forEach(chip => {
        chip.classList.toggle('active', chip.getAttribute('data-filter') === 'all');
      });

      renderDirectory();
    });
  }

  filterChips.forEach(chip => {
    chip.addEventListener('click', () => {
      filterChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      currentCategory = chip.getAttribute('data-filter') || 'all';
      renderDirectory();
    });
  });

  // --------------------------------------------------------------------------
  // 5. Toast Notifications & Clipboard Copy
  // --------------------------------------------------------------------------
  function showToast(message, icon = 'fa-circle-check') {
    let container = document.querySelector('.toast-container');
    if (!container) {
      container = document.createElement('div');
      container.className = 'toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<i class="fa-solid ${icon}"></i><span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
      toast.remove();
    }, 3000);
  }

  function copyToClipboard(text, label = 'നമ്പർ') {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(() => {
        showToast(`${label} കോപ്പി ചെയ്തു ✓ (${text})`);
      }).catch(() => {
        fallbackCopy(text, label);
      });
    } else {
      fallbackCopy(text, label);
    }
  }

  function fallbackCopy(text, label) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    try {
      document.execCommand('copy');
      showToast(`${label} കോപ്പി ചെയ്തു ✓ (${text})`);
    } catch (e) {
      showToast(`കോപ്പി ചെയ്യാൻ കഴിഞ്ഞില്ല: ${text}`, 'fa-triangle-exclamation');
    }
    document.body.removeChild(textarea);
  }

  // --------------------------------------------------------------------------
  // 6. Call Confirmation Dialog Handlers
  // --------------------------------------------------------------------------
  function openConfirmCall(number, name) {
    pendingCallNumber = number;
    if (confirmServiceName) confirmServiceName.textContent = name || 'അടിയന്തര സേവനം';
    if (confirmNumberDisplay) confirmNumberDisplay.textContent = number;
    if (confirmCallBtn) confirmCallBtn.setAttribute('href', `tel:${number}`);
    if (confirmDialog) confirmDialog.classList.add('active');
  }

  function closeConfirmCall() {
    pendingCallNumber = null;
    if (confirmDialog) confirmDialog.classList.remove('active');
  }

  if (confirmCancelBtn) {
    confirmCancelBtn.addEventListener('click', closeConfirmCall);
  }

  if (confirmDialog) {
    confirmDialog.addEventListener('click', (e) => {
      if (e.target === confirmDialog) closeConfirmCall();
    });
  }

  function attachCardEvents() {
    document.querySelectorAll('.js-call-trigger').forEach(btn => {
      btn.onclick = (e) => {
        e.preventDefault();
        const number = btn.getAttribute('data-number');
        const name = btn.getAttribute('data-name');
        openConfirmCall(number, name);
      };
    });

    document.querySelectorAll('.js-copy-trigger').forEach(btn => {
      btn.onclick = (e) => {
        e.preventDefault();
        const number = btn.getAttribute('data-number');
        copyToClipboard(number, 'നമ്പർ');
      };
    });
  }

  attachCardEvents();

  // --------------------------------------------------------------------------
  // 7. Floating SOS Modal Handlers
  // --------------------------------------------------------------------------
  function openSosModal() {
    if (sosModal) sosModal.classList.add('active');
  }

  function closeSosModal() {
    if (sosModal) sosModal.classList.remove('active');
  }

  if (floatingSosBtn) floatingSosBtn.addEventListener('click', openSosModal);
  if (navSosBtn) navSosBtn.addEventListener('click', openSosModal);
  if (heroSosBtn) heroSosBtn.addEventListener('click', openSosModal);
  if (sosModalClose) sosModalClose.addEventListener('click', closeSosModal);

  if (sosModal) {
    sosModal.addEventListener('click', (e) => {
      if (e.target === sosModal) closeSosModal();
    });
  }

  document.querySelectorAll('.sos-dial-card').forEach(dial => {
    dial.addEventListener('click', () => {
      const number = dial.getAttribute('data-number');
      const name = dial.getAttribute('data-name');
      closeSosModal();
      openConfirmCall(number, name);
    });
  });

  // --------------------------------------------------------------------------
  // 8. Geolocation Feature (My Location)
  // --------------------------------------------------------------------------
  if (getLocationBtn) {
    getLocationBtn.addEventListener('click', () => {
      if (!('geolocation' in navigator)) {
        showToast('നിങ്ങളുടെ ബ്രൗസറിൽ ലൊക്കേഷൻ ലഭ്യമല്ല.', 'fa-circle-xmark');
        return;
      }

      getLocationBtn.disabled = true;
      getLocationBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> ലൊക്കേഷൻ കണ്ടെത്തുന്നു...';

      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude.toFixed(6);
          const lng = position.coords.longitude.toFixed(6);
          const accuracy = Math.round(position.coords.accuracy);

          currentCoordinates = { lat, lng, accuracy };

          if (latVal) latVal.textContent = `${lat}° N`;
          if (lngVal) lngVal.textContent = `${lng}° E`;
          if (accuracyVal) accuracyVal.textContent = `±${accuracy} മീറ്റർ`;

          const mapsUrl = `https://www.google.com/maps?q=${lat},${lng}`;
          const whatsAppText = encodeURIComponent(
            `🆘 അടിയന്തര സഹായം ആവശ്യമാണ്!\n📍 എന്റെ നിലവിലെ ലൊക്കേഷൻ:\nhttps://maps.google.com/?q=${lat},${lng}\n(അളവ്: ±${accuracy} മീറ്റർ)`
          );
          const whatsAppUrl = `https://api.whatsapp.com/send?text=${whatsAppText}`;

          if (openMapsBtn) openMapsBtn.setAttribute('href', mapsUrl);
          if (shareWhatsAppBtn) shareWhatsAppBtn.setAttribute('href', whatsAppUrl);

          if (locationResultBox) locationResultBox.style.display = 'block';

          getLocationBtn.disabled = false;
          getLocationBtn.innerHTML = '<i class="fa-solid fa-arrows-rotate"></i> വീണ്ടും കണ്ടെത്തുക';
          showToast('ലൊക്കേഷൻ വിജയകരമായി കണ്ടെത്തി ✓');
        },
        (error) => {
          getLocationBtn.disabled = false;
          getLocationBtn.innerHTML = '<i class="fa-solid fa-location-crosshairs"></i> എന്റെ സ്ഥാനം കണ്ടെത്തുക';

          let errMsg = 'ലൊക്കേഷൻ കണ്ടെത്താൻ സാധിച്ചില്ല.';
          if (error.code === error.PERMISSION_DENIED) {
            errMsg = 'ലൊക്കേഷൻ അനുമതി നിഷേധിച്ചു. ബ്രൗസർ സെറ്റിങ്സിൽ അനുമതി നൽകുക.';
          } else if (error.code === error.POSITION_UNAVAILABLE) {
            errMsg = 'ലൊക്കേഷൻ സിഗ്നൽ ലഭ്യമല്ല.';
          } else if (error.code === error.TIMEOUT) {
            errMsg = 'ലൊക്കേഷൻ കണ്ടെത്തൽ സമയം കഴിഞ്ഞു.';
          }
          showToast(errMsg, 'fa-triangle-exclamation');
        },
        { enableHighAccuracy: true, timeout: 12000, maximumAge: 0 }
      );
    });
  }

  if (copyCoordsBtn) {
    copyCoordsBtn.addEventListener('click', () => {
      if (currentCoordinates) {
        const text = `${currentCoordinates.lat}, ${currentCoordinates.lng}`;
        copyToClipboard(text, 'ലൊക്കേഷൻ കോർഡിനേറ്റുകൾ');
      }
    });
  }

  // --------------------------------------------------------------------------
  // 9. Navbar & Mobile Menu Interactivity
  // --------------------------------------------------------------------------
  if (mobileMenuToggle && navLinks) {
    mobileMenuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('mobile-open');
      const icon = mobileMenuToggle.querySelector('i');
      if (icon) {
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-xmark');
      }
    });

    navItems.forEach(item => {
      item.addEventListener('click', () => {
        navLinks.classList.remove('mobile-open');
        const icon = mobileMenuToggle.querySelector('i');
        if (icon) {
          icon.classList.add('fa-bars');
          icon.classList.remove('fa-xmark');
        }
      });
    });
  }

  // Scroll Header Effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  }, { passive: true });

  // Scroll Spy for Nav Links
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset + 120;
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop;
      const sectionId = current.getAttribute('id');
      const correspondingLink = document.querySelector(`.nav-link[href*="${sectionId}"]`);

      if (correspondingLink) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          correspondingLink.classList.add('active');
        } else {
          correspondingLink.classList.remove('active');
        }
      }
    });
  }, { passive: true });

  // --------------------------------------------------------------------------
  // 10. Background Particle Canvas Animation
  // --------------------------------------------------------------------------
  const canvas = document.getElementById('particle-canvas');
  if (canvas && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const ctx = canvas.getContext('2d');
    let particles = [];
    let width, height;

    function resizeCanvas() {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    }

    window.addEventListener('resize', resizeCanvas, { passive: true });
    resizeCanvas();

    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 2.2 + 0.8;
        this.speedX = (Math.random() - 0.5) * 0.4;
        this.speedY = (Math.random() - 0.5) * 0.4;
        this.opacity = Math.random() * 0.5 + 0.2;
        const colors = ['239, 68, 68', '249, 115, 22', '245, 158, 11', '6, 182, 212'];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < 0 || this.x > width || this.y < 0 || this.y > height) {
          this.reset();
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${this.color}, ${this.opacity})`;
        ctx.fill();
      }
    }

    const particleCount = Math.min(Math.floor(window.innerWidth / 18), 65);
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    function animateParticles() {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();

        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 90) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(239, 68, 68, ${0.12 * (1 - dist / 90)})`;
            ctx.lineWidth = 0.6;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(animateParticles);
    }

    animateParticles();
  }

  // Keyboard accessibility: Escape closes open modals
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeSosModal();
      closeConfirmCall();
    }
  });

  // Initial Directory Render
  renderDirectory();
});