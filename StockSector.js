var path = 'https://www.nseindia.com/api/quote-equity?symbol=';
var total_stocks = [	'20MICRONS',
				'3IINFOLTD',
				'3MINDIA',
				'3PLAND',
				'5PAISA',
				'63MOONS',
				'ABMINTLLTD',
				'AAATECH',
				'AAREYDRUGS',
				'AARON',
				'AARTIDRUGS',
				'AARTIIND',
				'AARTISURF',
				'AARVEEDEN',
				'AARVI',
				'AAVAS',
				'ABAN',
				'ABB',
				'ABBOTINDIA',
				'ACC',
				'ACCELYA',
				'ACCURACY',
				'ACEINTEG',
				'ACE',
				'ADANIENT',
				'ADANIGREEN',
				'ADANIPORTS',
				'ADANIPOWER',
				'ATGL',
				'ADANITRANS',
				'AWL',
				'ADFFOODS',
				'ABCAPITAL',
				'ABFRL',
				'BIRLAMONEY',
				'ABSLAMC',
				'ABSLBANETF',
				'BSLGOLDETF',
				'TECH',
				'ABSLNN50ET',
				'SILVER',
				'ADORWELD',
				'ADROITINFO',
				'ADVENZYMES',
				'ADVANIHOTR',
				'AEGISCHEM',
				'AETHER',
				'AFFLE',
				'AGARIND',
				'AGI',
				'AGRITECH',
				'AGROPHOS',
				'ATFL',
				'AGSTRA',
				'AHLADA',
				'AHLUCONT',
				'AIAENG',
				'AIRAN',
				'AIROLAM',
				'AJANTPHARM',
				'AJMERA',
				'AKASH',
				'AKG',
				'AKSHAR',
				'AKSHARCHEM',
				'AKZOINDIA',
				'ALANKIT',
				'ALBERTDAVD',
				'ALEMBICLTD',
				'APLLTD',
				'ALICON',
				'ALKALI',
				'ALKEM',
				'ALKYLAMINE',
				'ALLCARGO',
				'ADSL',
				'ALLSEC',
				'ALMONDZ',
				'ALOKINDS',
				'ALPA',
				'ALPHAGEO',
				'AMARAJABAT',
				'AMBER',
				'AMBICAAGAR',
				'AMBIKCO',
				'AMBUJACEM',
				'AMDIND',
				'AMIORG',
				'AMJLAND',
				'AMRUTANJAN',
				'ANANDRATHI',
				'TARC',
				'ANANTRAJ',
				'ANDHRAPAP',
				'ANDREWYU',
				'ANGELONE',
				'ANIKINDS',
				'APCL',
				'ANMOL',
				'ANSALAPI',
				'AWHCL',
				'ANURAS',
				'APARINDS',
				'APCOTEXIND',
				'APEX',
				'APLAPOLLO',
				'APOLLOHOSP',
				'APOLLO',
				'APOLLOPIPE',
				'APOLSINHOT',
				'APOLLOTYRE',
				'APTECHT',
				'APTUS',
				'ACI',
				'ADL',
				'ARCHIDPLY',
				'ARCHIES',
				'ARIES',
				'ARIHANTCAP',
				'ARIHANTSUP',
				'ARMANFIN',
				'AROGRANITE',
				'ARROWGREEN',
				'ARSSINFRA',
				'ARTNIRMAN',
				'ARTEMISMED',
				'ARVEE',
				'ARVINDFASN',
				'ARVIND',
				'ARVSMART',
				'ASAHIINDIA',
				'ASAHISONG',
				'ASHAPURMIN',
				'ASHIANA',
				'ASHIMASYN',
				'ASHOKLEY',
				'ASHOKA',
				'ASIANENE',
				'ASIANTILES',
				'AHLEAST',
				'ASIANHOTNR',
				'ASIANPAINT',
				'ASPINWALL',
				'ASALCBR',
				'ASTEC',
				'ASTERDM',
				'ASTRAMICRO',
				'ASTRAL',
				'ASTRAZEN',
				'ASTRON',
				'ATLANTA',
				'ATULAUTO',
				'ATUL',
				'AUBANK',
				'AURIONPRO',
				'AUROPHARMA',
				'AURUM',
				'AUSOMENT',
				'AUTOIND',
				'AUTOAXLES',
				'ASAL',
				'AVADHSUGAR',
				'AVANTIFEED',
				'DMART',
				'AVROIND',
				'AVTNPL',
				'AXISBPSETF',
				'AXISBANK',
				'AXISBNKETF',
				'AXISCETF',
				'AXISGOLD',
				'AXISHCETF',
				'AXISILVER',
				'AXISTECETF',
				'AXISCADES',
				'AXISNIFTY',
				'AXITA',
				'AYMSYNTEX',
				'BBTCL',
				'BLKASHYAP',
				'BAFNAPH',
				'BAJAJ-AUTO',
				'BAJAJCON',
				'BAJAJELEC',
				'BAJFINANCE',
				'BAJAJFINSV',
				'BAJAJHCARE',
				'BAJAJHIND',
				'BAJAJHLDNG',
				'BALPHARMA',
				'BALAMINES',
				'BALAJITELE',
				'BALAXI',
				'BALKRISIND',
				'BALKRISHNA',
				'BALMLAWRIE',
				'BALRAMCHIN',
				'BANARBEADS',
				'BANCOINDIA',
				'BANDHANBNK',
				'BANG',
				'BANKBARODA',
				'BANKINDIA',
				'MAHABANK',
				'BANKA',
				'BANKNIFTY',
				'BASML',
				'BANARISUG',
				'BANSWRAS',
				'BVCL',
				'BARBEQUE',
				'BASF',
				'BATAINDIA',
				'BAYERCROP',
				'BCLIND',
				'BEARDSELL',
				'BEDMUTHA',
				'BEML',
				'BERGEPAINT',
				'BESTAGRO',
				'BFINVEST',
				'BFUTILITIE',
				'BGRENERGY',
				'BHAGERIA',
				'BHAGCHEM',
				'BHAGYANGR',
				'BEPL',
				'ICICIB22',
				'BBL',
				'EBBETF0423',
				'EBBETF0425',
				'EBBETF0430',
				'EBBETF0431',
				'BBETF0432',
				'BDL',
				'BEL',
				'BHARATFORG',
				'BHARATGEAR',
				'BHEL',
				'BPCL',
				'BHARATRAS',
				'BRNL',
				'BHARATWIRE',
				'BHARTIARTL',
				'BIL',
				'BIGBLOC',
				'BIKAJI',
				'BIOCON',
				'BIOFILCHEM',
				'BIRLACABLE',
				'BIRLACORPN',
				'BSLSENETFG',
				'BSOFT',
				'BBOX',
				'BLBLIMITED',
				'BLISSGVS',
				'BLS',
				'BLUEDART',
				'BLUESTARCO',
				'BODALCHEM',
				'BBTC',
				'BOMDYEING',
				'BSHSL',
				'BOROLTD',
				'BORORENEW',
				'BOSCHLTD',
				'BPL',
				'BCONCEPTS',
				'BRIGADE',
				'BCG',
				'BRITANNIA',
				'BROOKS',
				'BSE',
				'BSL',
				'BSLNIFTY',
				'BUTTERFLY',
				'MAPMYINDIA',
				'CALSOFT',
				'CTE',
				'CAMLINFINE',
				'CAMPUS',
				'CANFINHOME',
				'CANBK',
				'CANTABIL',
				'CAPACITE',
				'CAPTRUST',
				'CAPLIPOINT',
				'CGCL',
				'CARBORUNIV',
				'CAREERP',
				'CARTRADE',
				'CARYSIL',
				'CASTROLIND',
				'CCL',
				'CEATLTD',
				'CELEBRITY',
				'CENTRALBK',
				'CDSL',
				'CENTRUM',
				'CENTUM',
				'CENTENKA',
				'CENTURYPLY',
				'CENTURYTEX',
				'CERA',
				'CEREBRAINT',
				'CESC',
				'CGPOWER',
				'CHALET',
				'CLSEL',
				'CHAMBLFERT',
				'CHEMBOND',
				'CHEMCON',
				'CHEMFAB',
				'CHEMPLASTS',
				'CHENNPETRO',
				'CHEVIOT',
				'CHOICEIN',
				'CHOLAHLDNG',
				'CHOLAFIN',
				'CIGNITITEC',
				'CINELINE',
				'CINEVISTA',
				'CIPLA',
				'CUB',
				'CLEDUCATE',
				'CLNINDIA',
				'CLEAN',
				'CMICABLES',
				'CMSINFO',
				'CNXENERGY',
				'CNXINFRA',
				'CNXMIDCAP',
				'CNXNIFTYJUNIOR',
				'CNXPHARMA',
				'CNXREALTY',
				'CNXSMALLCAP',
				'COALINDIA',
				'COASTCORP',
				'COCHINSHIP',
				'COFFEEDAY',
				'COFORGE',
				'COLPAL',
				'COMPINFO',
				'COMPUSOFT',
				'CAMS',
				'CONFIPET',
				'CONSOFINVT',
				'CONCOR',
				'CONTROLPR',
				'CORALFINAC',
				'CORDSCABLE',
				'COROMANDEL',
				'COSMOFIRST',
				'CPSEETF',
				'CRAFTSMAN',
				'CREATIVE',
				'CARERATING',
				'CREDITACC',
				'CREST',
				'CRISIL',
				'CROMPTON',
				'CROWN',
				'CSBBANK',
				'CSLFINANCE',
				'CUBEXTUB',
				'CUMMINSIND',
				'CUPID',
				'CYBERMEDIA',
				'CYBERTECH',
				'CYIENT',
				'DBREALTY',
				'DPWIRES',
				'DPABHUSHAN',
				'DBCORP',
				'DABUR',
				'DALBHARAT',
				'DALMIASUG',
				'DAMODARIND',
				'DANGEE',
				'DATAPATTNS',
				'DATAMATICS',
				'DBSTOCKBRO',
				'DCI',
				'DCBBANK',
				'DCM',
				'DCMNVL',
				'DCMSRIND',
				'DCMSHRIRAM',
				'DCW',
				'DCXINDIA',
				'DENORA',
				'DECCANCE',
				'DEEPENR',
				'DEEPINDS',
				'DEEPAKFERT',
				'DEEPAKNTR',
				'DELHIVERY',
				'DELPHIFX',
				'DELTACORP',
				'DELTAMAGNT',
				'DEN',
				'DEVIT',
				'DEVYANI',
				'DFMFOODS',
				'DBOL',
				'DHAMPURSUG',
				'DHANI',
				'DHANBANK',
				'DHANUKA',
				'DHARSUGAR',
				'DHARMAJ',
				'DHRUV',
				'DHUNINV',
				'DTIL',
				'DVL',
				'DICIND',
				'DGCONTENT',
				'DIGISPICE',
				'DIGJAMLMTD',
				'DBL',
				'DISHTV',
				'DCAL',
				'DIVISLAB',
				'DIXON',
				'DJML',
				'DLF',
				'DLINKINDIA',
				'DMCC',
				'DODLA',
				'DOLATALGO',
				'DOLLAR',
				'DONEAR',
				'DPSCLTD',
				'LALPATHLAB',
				'DRREDDY',
				'DRCSYSTEMS',
				'DREAMFOLKS',
				'DREDGECORP',
				'LIQUIDETF',
				'DSPNEWETF',
				'DSPN50ETF',
				'DSPQ50ETF',
				'DSPSILVETF',
				'DUCON',
				'DWARKESH',
				'DSSL',
				'DYNAMATECH',
				'DYCL',
				'DYNPRO',
				'E2E',
				'EASEMYTRIP',
				'EBBETF0433',
				'ECLERX',
				'EBANK',
				'EDELWEISS',
				'EICHERMOT',
				'EIDPARRY',
				'EIHAHOTELS',
				'EIHOTEL',
				'EIMCOELECO',
				'ELDEHSG',
				'ELECON',
				'EMIL',
				'ELECTCAST',
				'ELECTHERM',
				'ELGIEQUIP',
				'ELGIRUBCO',
				'EMAMILTD',
				'EMAMIPAP',
				'EMAMIREAL',
				'EMKAY',
				'EMMBI',
				'EMUDHRA',
				'ENDURANCE',
				'ENERGYDEV',
				'ENGINERSIN',
				'ENIL',
				'EPL',
				'EQUIPPP',
				'EQUITAS',
				'EQUITASBNK',
				'ERIS',
				'EROSMEDIA',
				'ESABINDIA',
				'ESCORTS',
				'ESTER',
				'ETHOSLTD',
				'EIFFL',
				'EUROTEXIND',
				'EVEREADY',
				'EVERESTIND',
				'EKC',
				'EXCELINDUS',
				'EXIDEIND',
				'EXPLEOSOL',
				'EXXARO',
				'FAIRCHEMOR',
				'PRIVISCL',
				'FAZE3Q',
				'FDC',
				'FMGOETZE',
				'FACT',
				'FIBERWEB',
				'FIEMIND',
				'FILATEX',
				'FINEORG',
				'FCL',
				'FINOPB',
				'FINCABLES',
				'FINPIPE',
				'FSL',
				'FIVESTAR',
				'FLEXITUFF',
				'FOCUS',
				'FOODSIN',
				'FORCEMOT',
				'FORTIS',
				'FOSECOIND',
				'NYKAA',
				'FUSION',
				'FSC',
				'GRINFRA',
				'GABRIEL',
				'GAIL',
				'GALAXYSURF',
				'GALLANTT',
				'GANDHITUBE',
				'GANESHBE',
				'GANESHHOUC',
				'GANECOS',
				'GANGESSECU',
				'GRSE',
				'GRWRHITECH',
				'GARFIBRES',
				'GATEWAY',
				'GATI',
				'GEPIL',
				'GET&D',
				'GEECEE',
				'GEEKAYWIRE',
				'GICRE',
				'GENCON',
				'GENESYS',
				'GENUSPAPER',
				'GENUSPOWER',
				'GEOJITFSL',
				'GFLLIMITED',
				'GHCL',
				'GICHSGFIN',
				'GILLANDERS',
				'GILLETTE',
				'GINNIFILA',
				'GKWLIMITED',
				'GLAND',
				'GLAXO',
				'GLS',
				'GLENMARK',
				'GLOBAL',
				'MEDANTA',
				'GLOBALVECT',
				'GLOBUSSPR',
				'GMBREW',
				'GMMPFAUDLR',
				'GMRINFRA',
				'GMRP&UI',
				'GNA',
				'GOCOLORS',
				'GOACARBON',
				'GOCLCORP',
				'GPIL',
				'GODFRYPHLP',
				'GODREJAGRO',
				'GODREJCP',
				'GODREJIND',
				'GODREJPROP',
				'GOKEX',
				'GOKULAGRO',
				'GOKUL',
				'GOLDENTOBC',
				'GOLDIAM',
				'GOLDTECH',
				'GOODLUCK',
				'GOODYEAR',
				'GOYALALUM',
				'GULFPETRO',
				'GPTINFRA',
				'GRANULES',
				'GRAPHITE',
				'GRASIM',
				'GRAUWEIL',
				'GRAVITA',
				'GREAVESCOT',
				'GREENLAM',
				'GREENPANEL',
				'GREENPLY',
				'GRINDWELL',
				'GRMOVER',
				'GRPLTD',
				'GSS',
				'GTPL',
				'GUFICBIO',
				'GUJALKALI',
				'GAEL',
				'GUJAPOLLO',
				'FLUOROCHEM',
				'GUJGASLTD',
				'GIPCL',
				'GMDCLTD',
				'GNFC',
				'GPPL',
				'GUJRAFFIA',
				'GSCLCEMENT',
				'GSFC',
				'GSPL',
				'GULFOILLUB',
				'GULPOLY',
				'HGINFRA',
				'HAPPSTMNDS',
				'HARDWYN',
				'HARIOMPIPE',
				'HARRMALAYA',
				'HARSHA',
				'HATHWAY',
				'HATSUN',
				'HAVELLS',
				'HBSL',
				'HBLPOWER',
				'HCL-INSYS',
				'HCLTECH',
				'HDFCAMC',
				'HDFCBANK',
				'HBANKETF',
				'HDFCMFGETF',
				'HDFCLIFE',
				'HDFCLOWVOL',
				'HDFCMOMENT',
				'HDFCNIFETF',
				'HDFCSENETF',
				'HDFCGROWTH',
				'HDFCNEXT50',
				'HDFCNIF100',
				'HDFCNIFIT',
				'HDFCPVTBAN',
				'HDFCQUAL',
				'HDFCSILVER',
				'HDFCVALUE',
				'HEADSUP',
				'HCG',
				'HECPROJECT',
				'HEG',
				'HEIDELBERG',
				'HEMIPROP',
				'HERANBA',
				'HERCULES',
				'HERITGFOOD',
				'HEROMOTOCO',
				'HESTERBIO',
				'HEXATRADEX',
				'HIKAL',
				'HIL',
				'HILTON',
				'HFCL',
				'HSCL',
				'HIMATSEIDE',
				'HIRECT',
				'HINDALCO',
				'HINDCON',
				'HPIL',
				'HGS',
				'HAL',
				'HINDCOMPOS',
				'HCC',
				'HINDCOPPER',
				'HNDFDS',
				'HMVL',
				'HINDMOTORS',
				'HINDOILEXP',
				'HINDPETRO',
				'HINDUNILVR',
				'HINDZINC',
				'HINDWAREAP',
				'HISARMETAL',
				'POWERINDIA',
				'HITECHCORP',
				'HITECH',
				'HLEGLAS',
				'HLVLTD',
				'HMT',
				'HOMEFIRST',
				'HONDAPOWER',
				'HONAUT',
				'HUDCO',
				'HDFC',
				'HOVS',
				'HPAL',
				'HPL',
				'HTMEDIA',
				'HUBTOWN',
				'HUHTAMAKI',
				'HYBRIDFIN',
				'IBMFNIFTY',
				'ICDSLTD',
				'ICEMAKE',
				'ICICIBANK',
				'ICICIGI',
				'ICICI5GSEC',
				'ICICIALPLV',
				'ICICIBANKN',
				'ICICICONSU',
				'ICICIFMCG',
				'ICICIGOLD',
				'ICICIPHARM',
				'ICICITECH',
				'ICICIPRULI',
				'ICICILIQ',
				'ICICIM150',
				'ICICIMCAP',
				'ICICINF100',
				'ICICIMOM30',
				'ICICIAUTO',
				'ICICIFIN',
				'ICICILOVOL',
				'ICICINXT50',
				'ICICINV20',
				'ICICIBANKP',
				'ICICI500',
				'ICICISENSX',
				'ICICISILVE',
				'ISEC',
				'ICICI10GS',
				'ICICIINFRA',
				'ICICINIFTY',
				'ICRA',
				'IDBI',
				'IDBIGOLD',
				'IDFCFIRSTB',
				'IDFC',
				'IDFNIFTYET',
				'IFBAGRO',
				'IFBIND',
				'IFCI',
				'IFGLEXPOR',
				'IGPL',
				'IGARASHI',
				'IIFL',
				'IIFLSEC',
				'IIFLWAM',
				'IL&FSENGG',
				'IMAGICAA',
				'INCREDIBLE',
				'INDBANK',
				'INDIAGLYCO',
				'IMPAL',
				'INDNIPPON',
				'IPL',
				'ITDC',
				'INDIAVIX',
				'IBULHSGFIN',
				'IBREALEST',
				'INDIAMART',
				'INDIANB',
				'INDIANCARD',
				'IEX',
				'INDIANHUME',
				'IMFA',
				'IOC',
				'IOB',
				'IRCTC',
				'IRFC',
				'INDTERRAIN',
				'INDIGOPNTS',
				'INDOAMIN',
				'INDOBORAX',
				'ICIL',
				'INDORAMA',
				'INDOTECH',
				'INDOTHAI',
				'INDOCO',
				'NIPPOBATRY',
				'INDOSTAR',
				'INDOWIND',
				'IGL',
				'INDRAMEDCO',
				'INDSWFTLAB',
				'INDSWFTLTD',
				'INDUSTOWER',
				'INDUSINDBK',
				'IITL',
				'INEOSSTYRO',
				'INFIBEAM',
				'NAUKRI',
				'INFOBEAN',
				'INFY',
				'INGERRAND',
				'INOXGREEN',
				'INOXLEISUR',
				'IWEL',
				'INOXWIND',
				'INSECTICID',
				'INSPIRISYS',
				'INTELLECT',
				'INTENTECH',
				'INDIGO',
				'SUBCAPCITY',
				'INTLCONV',
				'ISFT',
				'IVZINGOLD',
				'IOLCP',
				'IONEXCHANG',
				'IPCALAB',
				'IRB',
				'IRCON',
				'IRIS',
				'IRISDOREME',
				'ISGEC',
				'ISMTLTD',
				'ITC',
				'ITDCEM',
				'ITI',
				'IVP',
				'IVZINNIFTY',
				'IZMO',
				'JKIL',
				'JAGRAN',
				'JAGSNPHARM',
				'JAIBALAJI',
				'JAICORPLTD',
				'JISLDVREQS',
				'JISLJALEQS',
				'JAMNAAUTO',
				'JASH',
				'JAYBARMARU',
				'JAYAGROGN',
				'JAYNECOIND',
				'JAYSREETEA',
				'JBCHEPHARM',
				'JBMA',
				'JETAIRWAYS',
				'JETFREIGHT',
				'JHS',
				'JINDRILL',
				'JINDALPHOT',
				'JINDALPOLY',
				'JPOLYINVST',
				'JINDALSAW',
				'JSLHISAR',
				'JSL',
				'JINDALSTEL',
				'JINDWORLD',
				'JITFINFRA',
				'JKCEMENT',
				'JKLAKSHMI',
				'JKPAPER',
				'JKTYRE',
				'JMFINANCIL',
				'JMCPROJECT',
				'JOCIL',
				'JCHAC',
				'JSWENERGY',
				'JSWHL',
				'JSWISPL',
				'JSWSTEEL',
				'JTEKTINDIA',
				'JTLIND',
				'JUBLFOOD',
				'JUBLINDS',
				'JUBLINGREA',
				'JUBLPHARMA',
				'JMA',
				'JWL',
				'JUSTDIAL',
				'JYOTHYLAB',
				'JYOTISTRUC',
				'KMSUGAR',
				'KPRMILL',
				'KABRAEXTRU',
				'KAJARIACER',
				'KAKATCEM',
				'KALPATPOWR',
				'KALYANKJIL',
				'KALYANIFRG',
				'KICL',
				'KSL',
				'KAMATHOTEL',
				'KAMDHENU',
				'KANORICHEM',
				'KANPRPLA',
				'KANSAINER',
				'KAPSTON',
				'KARMAENG',
				'KARURVYSYA',
				'KSCL',
				'KAYA',
				'KAYNES',
				'KCP',
				'KCPSUGIND',
				'KDDL',
				'KEC',
				'KEERTI',
				'KEI',
				'KELLTONTEC',
				'KENNAMET',
				'KERNEX',
				'KESORAMIND',
				'KKCL',
				'KEYFINSERV',
				'RUSTOMJEE',
				'KHADIM',
				'KHAITANLTD',
				'KHAICHEM',
				'KHANDSE',
				'KILITCH',
				'KINGFA',
				'KIOCL',
				'KIRIINDUS',
				'KIRLOSBROS',
				'KECL',
				'KIRLFER',
				'KIRLOSIND',
				'KIRLOSENG',
				'KITEX',
				'KNRCON',
				'KOHINOOR',
				'KOKUYOCMLN',
				'KOLTEPATIL',
				'KOPRAN',
				'KOTAKBKETF',
				'KOTAKGOLD',
				'KOTAKIT',
				'KOTAKBANK',
				'KOTAKMID50',
				'KOTAKLOVOL',
				'KOTAKALPHA',
				'KOTAKMNC',
				'KOTAKNV20',
				'KOTAKPSUBK',
				'KOTAKSILVE',
				'KOTAKCONS',
				'KOTAKNIFTY',
				'KOTHARIPET',
				'KOTHARIPRO',
				'KOTARISUG',
				'KOVAI',
				'KPIGREEN',
				'KPITTECH',
				'KRBL',
				'KREBSBIO',
				'KRISHANA',
				'KIMS',
				'KRITI',
				'KRITINUT',
				'KRITIKA',
				'KRSNAA',
				'KSB',
				'KSHITIJPOL',
				'KSOLVES',
				'KUANTUM',
				'L&TFH',
				'LTTS',
				'LAOPALA',
				'LAGNAM',
				'LFIC',
				'LAXMIMACH',
				'LAMBODHARA',
				'LANCER',
				'LT',
				'LASA',
				'LATENTVIEW',
				'LAURUSLABS',
				'LAXMICOT',
				'LXCHEM',
				'LEMONTREE',
				'LGBBROSLTD',
				'LIBAS',
				'LIBERTSHOE',
				'LICHSGFIN',
				'LICNFNHGP',
				'LICNETFN50',
				'LICNETFSEN',
				'LICNETFGSC',
				'LICI',
				'LIKHITHA',
				'LINC',
				'LINCOLN',
				'LINDEINDIA',
				'LSIL',
				'LOKESHMACH',
				'LOTUSEYE',
				'LOVABLE',
				'LOYALTEX',
				'DAAWAT',
				'LTIM',
				'LUMAXTECH',
				'LUMAXIND',
				'LUPIN',
				'LUXIND',
				'LYKALABS',
				'MAANALU',
				'MACPOWER',
				'LODHA',
				'MCL',
				'MADHAV',
				'MBAPL',
				'MADRASFERT',
				'MAGADSUGAR',
				'MAGNUM',
				'MAHAPEXLTD',
				'MHLXMIRU',
				'MAHASTEEL',
				'MGL',
				'MTNL',
				'MAHSCOOTER',
				'MAHSEAMLES',
				'MAHESHWARI',
				'M&MFIN',
				'M&M',
				'MAHINDCIE',
				'MAHEPC',
				'MHRIL',
				'MAHLIFE',
				'MAHLOG',
				'MAITHANALL',
				'MALLCOM',
				'MALUPAPER',
				'MANINDS',
				'MANINFRA',
				'MANAKALUCO',
				'MANAKCOAT',
				'MANAKSIA',
				'MANAKSTEEL',
				'MANALIPETC',
				'MANAPPURAM',
				'MANGLMCEM',
				'MANGALAM',
				'MGEL',
				'MANORG',
				'MANGCHEFER',
				'MRPL',
				'MANORAMA',
				'MANUGRAPH',
				'MARALOVER',
				'MARATHON',
				'MARICO',
				'MARINE',
				'MARKSANS',
				'MARSHALL',
				'MARUTI',
				'MASFIN',
				'MASKINVEST',
				'MASTEK',
				'MATRIMONY',
				'MAWANASUG',
				'MFSL',
				'MAXHEALTH',
				'MAXIND',
				'MAXVIL',
				'MAYURUNIQ',
				'MAZDOCK',
				'MAZDA',
				'MBLINFRA',
				'MCLEODRUSS',
				'MEDICAMEQ',
				'MEDICO',
				'MEDPLUS',
				'MEGASOFT',
				'MEGASTAR',
				'MFL',
				'MOL',
				'MENONBE',
				'MEP',
				'METROBRAND',
				'METROPOLIS',
				'MICEL',
				'MINDACORP',
				'MINDTECK',
				'MAESGETF',
				'MAHKTECH',
				'MAN50ETF',
				'MAFSETF',
				'MAMFGETF',
				'MAM150ETF',
				'MANXT50',
				'MAFANG',
				'MASPTOP50',
				'MIRCELECTR',
				'MIRZAINT',
				'MIDHANI',
				'MITCON',
				'MITTAL',
				'MMFL',
				'MMP',
				'MMTC',
				'MODIRUBBER',
				'MODISONLTD',
				'MOHEALTH',
				'MOHITIND',
				'MOIL',
				'MOKSH',
				'MOLDTKPAC',
				'MOLDTECH',
				'MOMENTUM',
				'MONARCH',
				'MONTECARLO',
				'MORARJEE',
				'MOREPENLAB',
				'MOTHERSON',
				'MSUMI',
				'MOGSEC',
				'MOTILALOFS',
				'MOM50',
				'MOM100',
				'MON100',
				'MONQ50',
				'MOMOMENTUM',
				'MOVALUE',
				'MOLOWVOL',
				'MOQUALITY',
				'MPHASIS',
				'MPSLTD',
				'MRF',
				'MRO-TEK',
				'BECTORFOOD',
				'MSTCLTD',
				'MTARTECH',
				'MUKANDLTD',
				'MUKTAARTS',
				'MCX',
				'MUNJALAU',
				'MUNJALSHOW',
				'MURUDCERA',
				'RADIOCITY',
				'MUTHOOTCAP',
				'MUTHOOTFIN',
				'NRAIL',
				'NBIFIN',
				'NACLIND',
				'NDGL',
				'NAGAFERT',
				'NAGREEKCAP',
				'NAGREEKEXP',
				'NAHARCAP',
				'NAHARINDUS',
				'NAHARPOLY',
				'NAHARSPING',
				'NGIL',
				'NSIL',
				'NDL',
				'JAIPURKURT',
				'NH',
				'NATCOPHARM',
				'NATHBIOGEN',
				'NATIONALUM',
				'NFL',
				'NAVA',
				'NAVINFLUOR',
				'NAVKARCORP',
				'NAVNETEDUL',
				'NAZARA',
				'NBCC',
				'NCC',
				'NCLIND',
				'NDRAUTO',
				'NECLIFE',
				'NELCAST',
				'NELCO',
				'NEOGEN',
				'NESCO',
				'NESTLEIND',
				'NETWORK18',
				'NEULANDLAB',
				'NDTV',
				'NIACL',
				'NEWGEN',
				'NGLFINE',
				'NHPC',
				'NIFTY',
				'CNXIT',
				'NIFTYMIDCAP150',
				'NIFTY100',
				'NIFTY200',
				'NIFTY500',
				'NIFTY50VALUE20',
				'NIFTYAUTO',
				'NIFTYBEES',
				'NIFTYCONSUMPTION',
				'NIFTYCONSURDURBL',
				'NIFTYDIVOPPS50',
				'NIFTYFINSERVICE',
				'NIFTYFMCG',
				'NIFTYGROWSECT15',
				'NIFTYHEALTHCARE',
				'NIFTYMEDIA',
				'NIFTYMETAL',
				'NIFTYMIDCAP50',
				'NIFTYOILANDGAS',
				'NIFTYPSUBANK',
				'NIFTYPVTBANK',
				'NIFTYQLITY',
				'NIITLTD',
				'NILKAMAL',
				'GILT5YBEES',
				'BANKBEES',
				'CONSUMBEES',
				'DIVOPPBEES',
				'GOLDBEES',
				'HNGSNGBEES',
				'INFRABEES',
				'JUNIORBEES',
				'LIQUIDBEES',
				'LTGILTBEES',
				'NIF100BEES',
				'SDL24BEES',
				'ITBEES',
				'MID150BEES',
				'SDL26BEES',
				'NV20BEES',
				'PSUBNKBEES',
				'SHARIABEES',
				'AUTOBEES',
				'PHARMABEES',
				'SILVERBEES',
				'NAM-INDIA',
				'NIRAJ',
				'NITCO',
				'NITINSPIN',
				'NITIRAJ',
				'NKIND',
				'NLCINDIA',
				'NMDC',
				'NOCIL',
				'NECCLTD',
				'NOVARTIND',
				'NRBBEARING',
				'NIBL',
				'NTPC',
				'NUCLEUS',
				'NURECA',
				'NUVOCO',
				'NXTDIGITAL',
				'OBEROIRLTY',
				'ONGC',
				'OILCOUNTUB',
				'OIL',
				'OLECTRA',
				'OMINFRAL',
				'OMAXAUTO',
				'OMAXE',
				'OMKARCHEM',
				'PAYTM',
				'ONEPOINT',
				'ONELIFECAP',
				'ONMOBILE',
				'ONWARDTEC',
				'OPTIEMUS',
				'OFSS',
				'ORBTEXP',
				'ORCHPHARMA',
				'ORICONENT',
				'ORIENTABRA',
				'ORIENTBELL',
				'ORIENTCEM',
				'ORIENTELEC',
				'GREENPOWER',
				'ORIENTPPR',
				'ORIENTLTD',
				'OAL',
				'OCCL',
				'ORIENTHOT',
				'OBCL',
				'ORTINLAB',
				'OSIAHYPER',
				'OSWALAGRO',
				'BINDALAGRO',
				'PAGEIND',
				'PAISALO',
				'PALASHSECU',
				'PALREDTEC',
				'PANACEABIO',
				'PANACHE',
				'PANAMAPET',
				'PANSARI',
				'PAR',
				'PARADEEP',
				'PARAGMILK',
				'PARACABLES',
				'PARAS',
				'PASUPTAC',
				'PATANJALI',
				'PATELENG',
				'PATINTLOG',
				'POLICYBZR',
				'PCJEWELLER',
				'PCBL',
				'PDSL',
				'PGIL',
				'PEARLPOLY',
				'PENINLAND',
				'PENIND',
				'PERSISTENT',
				'PETRONET',
				'PFIZER',
				'PGEL',
				'PIIND',
				'PIDILITIND',
				'PILANIINVS',
				'PIONDIST',
				'PIONEEREMB',
				'PEL',
				'PPLPHARMA',
				'PITTIENG',
				'PIXTRANS',
				'PLASTIBLEN',
				'PNBGILTS',
				'PNBHOUSING',
				'PNCINFRA',
				'PODDARHOUS',
				'PODDARMENT',
				'POKARNA',
				'POLYMED',
				'POLYCAB',
				'POLYPLEX',
				'PONNIERODE',
				'POONAWALLA',
				'PFC',
				'POWERGRID',
				'POWERMECH',
				'PPAP',
				'PRAJIND',
				'PRAENG',
				'PRAKASH',
				'PPL',
				'DIAMONDYD',
				'PRAXIS',
				'PRECAM',
				'PRECWIRE',
				'PRECOT',
				'PREMEXPLN',
				'PREMIERPOL',
				'PRESSMN',
				'PRESTIGE',
				'PRICOLLTD',
				'PFOCUS',
				'PRIMESECU',
				'PRINCEPIPE',
				'PRSMJOHNSN',
				'PRITI',
				'PRITIKAUTO',
				'PNC',
				'PGHL',
				'PGHH',
				'PROZONINTU',
				'PRUDENT',
				'PSPPROJECT',
				'PFS',
				'PTC',
				'PTL',
				'PDMJEPAPER',
				'PSB',
				'PUNJABCHEM',
				'PNB',
				'PURVA',
				'PVR',
				'QNIFTY',
				'QGOLDHALF',
				'QUESS',
				'QUICKHEAL',
				'RSYSTEMS',
				'RSSOFTWARE',
				'RPPINFRA',
				'RADHIKAJWE',
				'RADICO',
				'RVNL',
				'RAILTEL',
				'RAIN',
				'RAINBOW',
				'ROML',
				'RAJRILTD',
				'RAJTV',
				'ARENTERP',
				'RAJESHEXPO',
				'RAJMET',
				'RAJRATAN',
				'RPPL',
				'RAJSREESUG',
				'RALLIS',
				'RAMRAT',
				'RAMAPHO',
				'RAMASTEEL',
				'RAMCOIND',
				'RAMCOSYS',
				'RKFORGE',
				'RAMKY',
				'RANASUG',
				'RML',
				'RBL',
				'RANEENGINE',
				'RANEHOLDIN',
				'RCF',
				'RATEGAIN',
				'RATNAMANI',
				'RTNINDIA',
				'RKDL',
				'RVHL',
				'RAYMOND',
				'RBLBANK',
				'REDINGTON',
				'REFEX',
				'REGENCERAM',
				'RELAXO',
				'RELCHEMQ',
				'RIIL',
				'RELIANCE',
				'RELINFRA',
				'RPOWER',
				'RELIGARE',
				'REMSONSIND',
				'RGL',
				'REPCOHOME',
				'REPRO',
				'RESPONIND',
				'RBA',
				'REVATHI',
				'RHIM',
				'RICOAUTO',
				'RITCO',
				'RITES',
				'RKEC',
				'ROLEXRINGS',
				'ROSSARI',
				'ROSSELLIND',
				'ROTO',
				'ROUTE',
				'ROHLTD',
				'RPGLIFE',
				'RPSGVENT',
				'RSWM',
				'RUCHIRA',
				'REPL',
				'RUPA',
				'RECLTD',
				'RUSHIL',
				'SCHAND',
				'SHK',
				'SJS',
				'SPAL',
				'SEPOWER',
				'SADBHAV',
				'SAFARI',
				'SAGCEM',
				'SAGARDEEP',
				'SAKAR',
				'SAKSOFT',
				'SAKHTISUG',
				'SAKUMA',
				'SALSTEEL',
				'SALASAR',
				'SALONA',
				'SALZERELEC',
				'SANCO',
				'SANDHAR',
				'SANGAMIND',
				'SANGHIIND',
				'SANGHVIMOV',
				'SANGINITA',
				'SANOFI',
				'SANSERA',
				'SAPPHIRE',
				'SARDAEN',
				'SAREGAMA',
				'SARLAPOLY',
				'SMLT',
				'SARVESHWAR',
				'SASKEN',
				'SASTASUNDR',
				'SATINDLTD',
				'SATIA',
				'SATIN',
				'SOTL',
				'SBC',
				'SBIETFQLTY',
				'SBICARD',
				'SBIETFCON',
				'SBIETFIT',
				'SETFNIF50',
				'SETFNIFBK',
				'SBIETFPB',
				'SETFGOLD',
				'SBILIFE',
				'SETFNN50',
				'SETF10GILT',
				'SCHAEFFLER',
				'SCHNEIDER',
				'SEAMECLTD',
				'SECURCRED',
				'SECURKLOUD',
				'SIS',
				'SEJALLTD',
				'SELMC',
				'SELAN',
				'SEQUENT',
				'SERVOTECH',
				'SESHAPAPER',
				'SETCO',
				'SEYAIND',
				'SHAHALLOYS',
				'SHAILY',
				'SHAKTIPUMP',
				'SHALBY',
				'SHALPAINTS',
				'SHANKARA',
				'SHANTIGEAR',
				'SHANTI',
				'SHARDACROP',
				'SHARDAMOTR',
				'SHAREINDIA',
				'SFL',
				'SCPL',
				'SHEMAROO',
				'SHILPAMED',
				'SCI',
				'SHIVAMILLS',
				'SHIVATEX',
				'SBCL',
				'SHIVALIK',
				'SHIVAMAUTO',
				'SHOPERSTOP',
				'SHRADHA',
				'SHREECEM',
				'SHREDIGCEM',
				'SHREEPUSHK',
				'SRPL',
				'SHREERAMA',
				'RAMANEWS',
				'RENUKA',
				'SHREYANIND',
				'SHREYAS',
				'SHRIPISTON',
				'SHRIRAMPPS',
				'SHYAMCENT',
				'SHYAMMETL',
				'SIEMENS',
				'SIGACHI',
				'SIGIND',
				'SIKKO',
				'SILINV',
				'SILGO',
				'SILLYMONKS',
				'SILVERTUC',
				'SIMBHALS',
				'SIMPLEXINF',
				'SINTERCOM',
				'SIRCA',
				'SIYSIL',
				'SJVN',
				'SKFINDIA',
				'SKIPPER',
				'SKMEGGPROD',
				'SMARTLINK',
				'SMCGLOBAL',
				'SMLISUZU',
				'SMSLIFE',
				'SMSPHARMA',
				'SNOWMAN',
				'SOBHA',
				'SOFTTECH',
				'SOLARINDS',
				'SOLARA',
				'SDBL',
				'SOMANYCERA',
				'SOMICONVEY',
				'SONACOMS',
				'SONAMCLOCK',
				'SONATSOFTW',
				'SOUTHWEST',
				'SPIC',
				'SPCENET',
				'SPANDANA',
				'SPECIALITY',
				'SPENCERS',
				'SPICEJET',
				'SPLIL',
				'SPMLINFRA',
				'SPORTKING',
				'SRHHYPOLTD',
				'SREEL',
				'SRF',
				'SCAPDVR',
				'SIL',
				'STARCEMENT',
				'STARHEALTH',
				'STARPAPER',
				'STARTECK',
				'SBIN',
				'SAIL',
				'STEELCITY',
				'STEELXIND',
				'SSWL',
				'STEELCAS',
				'STEL',
				'SWSOLAR',
				'STERTOOLS',
				'STLTECH',
				'SGL',
				'STOVEKRAFT',
				'STAR',
				'STYLAMIND',
				'SUBEXLTD',
				'SUBROS',
				'SUDARSCHEM',
				'SUKHJITS',
				'SUMIT',
				'SUMICHEM',
				'SUMMITSEC',
				'SPARC',
				'SUNPHARMA',
				'SUNTV',
				'SUNDRMBRAK',
				'SUNCLAYLTD',
				'SUNDARMHLD',
				'SUNDARMFIN',
				'SUNDRMFAST',
				'SUNFLAG',
				'SUNTECK',
				'SUPERHOUSE',
				'SUPRAJIT',
				'SUPREMEIND',
				'SUPREMEINF',
				'SPLPETRO',
				'SUPRIYA',
				'SURANASOL',
				'SURYAROSNI',
				'SURYALAXMI',
				'SURYODAY',
				'SUTLEJTEX',
				'SUULD',
				'SUVEN',
				'SUVENPHAR',
				'SVPGLOB',
				'SWANENERGY',
				'SWARAJENG',
				'SWELECTES',
				'SYMPHONY',
				'SGIL',
				'SYNGENE',
				'SYRMA',
				'TTL',
				'TAINWALCHM',
				'TAJGVK',
				'TAKE',
				'TALBROAUTO',
				'TNPL',
				'TMB',
				'TNPETRO',
				'TANLA',
				'TANTIACONS',
				'TARMAT',
				'TARSONS',
				'TASTYBITE',
				'TATACHEM',
				'TATACOFFEE',
				'TATACOMM',
				'TCS',
				'TATACONSUM',
				'TATAELXSI',
				'TATAINVEST',
				'TATAMETALI',
				'TATAMTRDVR',
				'TATAMOTORS',
				'NETF',
				'TNIDETF',
				'NPBET',
				'TATAPOWER',
				'TATASTEEL',
				'TATASTLLP',
				'TTML',
				'TATVA',
				'TCIEXP',
				'TCNSBRANDS',
				'TCPLPACK',
				'TDPOWERSYS',
				'TEAMLEASE',
				'TECHM',
				'TECHNOE',
				'TIIL',
				'TEGA',
				'TEJASNET',
				'TEMBO',
				'TERASOFT',
				'TEXINFRA',
				'TEXRAIL',
				'TEXMOPIPES',
				'TGBHOTELS',
				'THANGAMAYL',
				'ANDHRSUGAR',
				'ANUP',
				'BYKE',
				'FEDERALBNK',
				'GESHIP',
				'GROBTEA',
				'HITECHGEAR',
				'INDIACEM',
				'INDHOTEL',
				'THEINVEST',
				'J&KBANK',
				'KTKBANK',
				'MOTOGENFIN',
				'ORISSAMINE',
				'PKTEA',
				'PHOENIXLTD',
				'RAMCOCEM',
				'RUBYMILLS',
				'SANDESH',
				'SOUTHBANK',
				'STCINDIA',
				'TINPLATE',
				'UGARSUGAR',
				'UNITEDTEA',
				'THEMISMED',
				'THERMAX',
				'TIRUMALCHM',
				'THOMASCOOK',
				'THOMASCOTT',
				'THYROCARE',
				'TIDEWATER',
				'TIL',
				'TI',
				'TIMETECHNO',
				'TIMESGTY',
				'TIMKEN',
				'TIPSFILMS',
				'TIPSINDLTD',
				'TIRUPATIFL',
				'TWL',
				'TITAN',
				'TOKYOPLAST',
				'TORNTPHARM',
				'TORNTPOWER',
				'TOTAL',
				'TOUCHWOOD',
				'TFCILTD',
				'TPLPLASTEH',
				'TRACXN',
				'TRIL',
				'TCI',
				'TREEHOUSE',
				'TREJHARA',
				'TRENT',
				'TRF',
				'TBZ',
				'TRIDENT',
				'TRIGYN',
				'TRIVENI',
				'TRITURBINE',
				'TRU',
				'TTKHLTCARE',
				'TTKPRESTIG',
				'TIINDIA',
				'TVTODAY',
				'TV18BRDCST',
				'TVSELECT',
				'TVSMOTOR',
				'TVSSRICHAK',
				'21STCENMGM',
				'UCALFUEL',
				'UCOBANK',
				'UDAICEMENT',
				'UFLEX',
				'UFO',
				'UGROCAP',
				'UJJIVAN',
				'UJJIVANSFB',
				'ULTRACEMCO',
				'UMAEXPORTS',
				'UMANGDAIRY',
				'UNICHEMLAB',
				'UNIINFO',
				'UNIONBANK',
				'UNIPARTS',
				'UNIENTER',
				'UBL',
				'UNIDT',
				'UNITEDPOLY',
				'MCDOWELL-N',
				'UNIVASTU',
				'UNIVCABLES',
				'UNIVPHOTO',
				'UNOMINDA',
				'UPL',
				'USHAMART',
				'GOLDSHARE',
				'UTIAMC',
				'UTIBANKETF',
				'UTINIFTETF',
				'UTINEXT50',
				'UTISXN50',
				'UTISENSETF',
				'UTTAMSUGAR',
				'VSTTILLERS',
				'V2RETAIL',
				'WABAG',
				'VADILALIND',
				'VAIBHAVGBL',
				'VAISHALI',
				'VAKRANGEE',
				'VALIANTORG',
				'VARDHACRLC',
				'VHL',
				'VARDMNPOLY',
				'VSSL',
				'VTL',
				'VARROC',
				'VBL',
				'VASCONEQ',
				'VASWANI',
				'MANYAVAR',
				'VEDL',
				'VENKEYS',
				'VENUSPIPES',
				'VENUSREM',
				'VERANDA',
				'VERTOZ',
				'VESUVIUS',
				'VETO',
				'VGUARD',
				'VIDHIING',
				'VIJAYA',
				'VIMTALABS',
				'VINATIORGA',
				'VINDHYATEL',
				'VINEETLAB',
				'VINNY',
				'VINYLINDIA',
				'VIPCLOTHNG',
				'VIPIND',
				'VIPULLTD',
				'VISASTEEL',
				'VISAKAIND',
				'VISHAL',
				'VISHNU',
				'VISHWARAJ',
				'VIVIMEDLAB',
				'VLSFINANCE',
				'VMART',
				'VOLTAMP',
				'VOLTAS',
				'VRLLOG',
				'VSTIND',
				'WSI',
				'WALCHANNAG',
				'WANBURY',
				'WATERBASE',
				'WEWIN',
				'WEALTH',
				'WEBELSOLAR',
				'WEIZMANIND',
				'WELCORP',
				'WELENT',
				'WELSPUNIND',
				'WELINV',
				'WENDT',
				'WSTCSTPAPR',
				'WIPL',
				'WESTLIFE',
				'WHEELS',
				'WHIRLPOOL',
				'WILLAMAGOR',
				'WINDLAS',
				'WINDMACHIN',
				'WIPRO',
				'WOCKPHARMA',
				'WFL',
				'WONDERLA',
				'WORTH',
				'XCHANGING',
				'XELPMOC',
				'XPROINDIA',
				'YAARI',
				'YESBANK',
				'YUKEN',
				'ZEEL',
				'ZEEMEDIA',
				'ZENTEC',
				'ZENITHEXPO',
				'ZENSARTECH',
				'ZFCVINDIA',
				'ZIMLAB',
				'ZODIACLOTH',
				'ZODIAC',
				'ZOMATO',
				'ZOTA',
				'ZUARI',
				'ZUARIIND',
				'ZYDUSLIFE',
				'ZYDUSWELL'
			]

var stocks = total_stocks.slice(0, 1);

var sector = {};

for(let index_stock = 0; index_stock < stocks.length; index_stock++) {
	let stock = stocks[index_stock]
	sector[stock] = []
	fetch(path + stock)
	  .then(res => res.json())
	  .then(json => {
	  	sector[stock][0] = json.industryInfo.sector;
	  	sector[stock][1] = json.industryInfo.industry;
	  	sector[stock][2] = json.industryInfo.basicIndustry;
	});
}

var data = ""

$.each(sector, function(key, values){
	data += key + "," + values.join(",") + ";";
})

console.log(data)
