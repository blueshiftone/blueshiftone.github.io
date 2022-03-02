import {
  EGridSelectListType,
  EMetadataType,
  GridCellCoordinates,
  GridCellValue,
  GridDataSource,
  GridImplementationFactory,
  IGridCellValue,
  IGridDataSource,
  IGridRow,
  IGridSelectListOption,
  TColumnKey,
} from '@blueshiftone/ngx-grid-core'

export function randomLipsum(len: number) {
  let output: string[] = []
  for (let i = 0; i < len; i++) {
    output.push(randomFromArray(loremIpsumWords))
  }
  return output.join(' ')
}

export function randomIntFromInterval(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}


export function randomFromArray<T>(ar: T[]) {
  return ar[Math.floor((Math.random()*ar.length))];
}

export function randomDate() {
  const date = new Date(+(new Date()) - Math.floor(Math.random()*10000000000))
  return `${date.getFullYear()}/${date.getMonth().toString().padStart(2, '0')}/${date.getDate().toString().padStart(2, '0')}`
}


export const loremIpsumWords = [
  'lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur',
  'adipiscing', 'elit', 'curabitur', 'vel', 'hendrerit', 'libero',
  'eleifend', 'blandit', 'nunc', 'ornare', 'odio', 'ut',
  'orci', 'gravida', 'imperdiet', 'nullam', 'purus', 'lacinia',
  'a', 'pretium', 'quis', 'congue', 'praesent', 'sagittis', 
  'laoreet', 'auctor', 'mauris', 'non', 'velit', 'eros',
  'dictum', 'proin', 'accumsan', 'sapien', 'nec', 'massa',
  'volutpat', 'venenatis', 'sed', 'eu', 'molestie', 'lacus',
  'quisque', 'porttitor', 'ligula', 'dui', 'mollis', 'tempus',
  'at', 'magna', 'vestibulum', 'turpis', 'ac', 'diam',
  'tincidunt', 'id', 'condimentum', 'enim', 'sodales', 'in',
  'hac', 'habitasse', 'platea', 'dictumst', 'aenean', 'neque',
  'fusce', 'augue', 'leo', 'eget', 'semper', 'mattis', 
  'tortor', 'scelerisque', 'nulla', 'interdum', 'tellus', 'malesuada',
  'rhoncus', 'porta', 'sem', 'aliquet', 'et', 'nam',
  'suspendisse', 'potenti', 'vivamus', 'luctus', 'fringilla', 'erat',
  'donec', 'justo', 'vehicula', 'ultricies', 'varius', 'ante',
  'primis', 'faucibus', 'ultrices', 'posuere', 'cubilia', 'curae',
  'etiam', 'cursus', 'aliquam', 'quam', 'dapibus', 'nisl',
  'feugiat', 'egestas', 'class', 'aptent', 'taciti', 'sociosqu',
  'ad', 'litora', 'torquent', 'per', 'conubia', 'nostra',
  'inceptos', 'himenaeos', 'phasellus', 'nibh', 'pulvinar', 'vitae',
  'urna', 'iaculis', 'lobortis', 'nisi', 'viverra', 'arcu',
  'morbi', 'pellentesque', 'metus', 'commodo', 'ut', 'facilisis',
  'felis', 'tristique', 'ullamcorper', 'placerat', 'aenean', 'convallis',
  'sollicitudin', 'integer', 'rutrum', 'duis', 'est', 'etiam',
  'bibendum', 'donec', 'pharetra', 'vulputate', 'maecenas', 'mi',
  'fermentum', 'consequat', 'suscipit', 'aliquam', 'habitant', 'senectus',
  'netus', 'fames', 'quisque', 'euismod', 'curabitur', 'lectus',
  'elementum', 'tempor', 'risus', 'cras'
];

export function randomName(): string {
  return randomFromArray(
    ["Derry","Abrahams","Almire","Opal","Afra","Beeck","Tybald","Lathe","Troth","Fanechka","Almeria","Legge","Claudie","Hortensia","Delp","Shayn","Nazario","Ridley","Gottlieb","Nally","Cavan","Card","Artemisa","Fontana","Solana","Brenda","Sofko","Peggie","Josephina","Fauver","Ysabel","Zachariah","Fredella","Wilscam","Hagan","Eleazar","Chaffinch","Elgar","Maurizio","Hoskinson","Stroud","Rovit","Brittnee","Deeanne","Falk","Ashok","Borchers","Baumbaugh","Trimble","Schild","Myers","Revkah","Juliet","Shornick","Nessim","Ainslie","Corbin","Pape","Jeromy","Ulane","Pettiford","Valdes","Larrabee","Alisa","Moncear","Emelia","Lananna","Alicea","Barclay","Serg","Ruelle","Ulphia","Nett","Norman","Shinberg","Hastings","Beale","Gwendolen","Wolfort","Balbinder","Kiele","Caprice","Narine","Emmeline","Yand","Jeri","Freeland","Stroup","Mingche","Garfinkel","Ruthven","Graniah","Auberon","Sheelah","Thirzia","Torrance","Lynett","Porta","Greff","Lati","Tallie","Ubana","Diaz","Echikson","Bartram","Gytle","Bena","Justis","Uchish","Jermain","Dougal","Karleen","Terencio","Affrica","Yesima","Trilbie","Kile","Bottali","MacEgan","Johm","Enrico","Hun","Gebhardt","Evvy","Rochester","Kammerer","Greenburg","Brighton","Cleaves","Dorion","Kingsbury","Saxe","Matty","Corneille","Rori","Emmerie","Richella","Wahkuna","Efron","Bouldon","Malan","Grey","Sophia","Elmira","Randi","Calie","Lydell","Wendie","Sabir","Lexie","Berti","Harte","Radman","Chenay","Alroi","Clifton","Yup","Rosaleen","Lieberman","Adlay","Chicky","Chang","Hesler","Teage","Forland","Diaz","Gilbart","Nereen","Hyrup","Shayne","Clotilda","Poler","Zoba","Kan","Tirzah","Wootten","Aleedis","Theressa","Isacco","Lais","Tamma","Randal","Trager","Segal","Demakis","Burke","Childers","Bellew","Cristine","Zolly","O'Neil","Dunton","Gluck","Savill","Maximilien","Nerte","Whiting","Alexei","Blanca","Kassab","Henriques","Shoshana","Yarvis","Race","Garvin","Fablan","Medwin","Spindell","Rodman","Holmun","Bluhm","Lyda","Silden","Licha","Karie","Merci","Caputto","Severen","Mada","Kussell","Lynnet","Hewet","Donela","Emogene","Saint","Malaspina","Phillada","Bathsheba","Bord","Andrien","Chu","Laband","Vivi","Esch","Emery","Garda","Vieva","Sidhu","Ryun","Corliss","Jedidiah","Doria","Samalla","Fronia","Wong","Frayne","Laurie","Laney","Inglebert","Berty","Trabue","Solange","Oralia","Gord","Croom","Idalina","Collis","Percival","Hewes","Way","Correy","Kraska","Alistair","Ailsa","Codel","Meredi","Ardin","Meredithe","Sims","Steady","Marven","Choo","Beeson","Aldon","Larine","Murtagh","Rawdin","Jacky","Derry","Maddy","Bron","Laven","Afrikah","Sheilah","Pincus","Ha","Machos","Melnick","Gard","Tamaru","Ashien","Felipa","Peterus","Stutsman","Seda","Berkman","Veedis","Sabelle","Gabbey","Allmon","Fortunia","Monique","Nasia","Holbrooke","Nitza","Sapphire","Raynor","Hildegard","Crotty","Bing","Romonda","Grannias","Humo","Bascomb","Lowson","Dowling","Itagaki","Botzow","Crescantia","Steffin","Drais","Collier","Vogele","Derman","Fradin","Angi","Cara","Grindle","Lorain","Colp","Lukas","Sherer","Shurlock","Saiff","Devine","Jelks","Hillari","Cato","Olympium","Renard","Rhu","Herwin","Christel","Jacinto","Enid","Lhary","Didi","Candy","Villiers","Seed","Marleen","Onida","Murdock","Buckley","Arianna","Giarla","Domph","Southard","Svensen","Yaya","Rexanna","Avis","Quitt","Trembly","Bax","Merrill","Cesar","Cassidy","Lancaster","Slyke","Dougy","Benton","Odelle","Shank","Meta","Marou","Lamphere","ErvIn","Moscow","Cosenza","Helfant","Romy","Amann","Redmund","Edette","Lorenz","Drisko","Cutler","Speroni","Dorelle","Burkhardt","Clayborn","Gelya","Blackburn","Birkett","Tarrance","Federico","Vadim","Sparks","Robison","Krissie","Koppel","Tobiah","Lumbard","Prescott","Kore","Clayson","Hilaria","Pritchett","Sancha","VanHook","Goodwin","Delmer","Thera","Galvin","Cagle","Gratia","Vivi","Saidee","Jonina","Henry","Linetta","Gobert","Bertie","Fee","Littman","Porty","Gine","Ylla","MacSwan","Sternlight","Airlie","Phelia","McCoy","Cyrano","Viv","Diskson","Pradeep","Hortense","Grishilda","Mogerly","Resor","Amyas","Perrine","Debra","Hild","Ibbie","Swithbert","Lilac","Flan","Getraer","Laux","Burman","Sally","Stefanie","Edholm","Goody","Frazer","Gorden","Flowers","Hopper","Schroer","Janessa","Dylan","Marucci","Kasevich","Coppinger","Tjon","Gwen","Stoffel","Andersen","Konrad","Lexine","Jarred","Fidelia","Norean","Glassman","Bowen","Pitchford","Keffer","Haerle","Fayola","Zaid","Blakeley","Hukill","Levine","Lorrie","Bornie","Theresina","Shanahan","Chaing","Newby","Rafael","Elwyn","Zonda","Brodie","Felske","Alexander","Irena","Bang","Bilek","Vipul","Abisha","Dita","Kirsteni","Waite","Adamsen","Elston","Borman","Hyo","Winograd","Sivia","Alfons","Hesta","Hitt","Ma","Roskes","Alphard","Bailar","Rajewski","Gauntlett","Ned","Beryle","Nathanson","Rorke","Jordanson","Barncard","Agle","Pryor","Editha","McClish","Shae","Walworth","Velda","Joan","Phox","Yearwood","Beltran","Darrow","Manno","Sheppard","Sianna","Gentes","Mukerji","Langer","Karisa","Louanna","Henrique","Chevalier","Weintrob","Linea","Calen","Kriss","Harmonia","Mehitable","Kristos","Waxman","Trefor","Northey","Stead","Savadove","Faun","Id","Christoforo","Stahl","Casilda","Isidro","Cloe","Justin","Borg","Saied","Philis","Abigale","Maleeny","Chadburn","Borlase","Nessi","Bernette","Dail","Waldron","Wu","Klayman","Mahan","Alleris","Vina","Sibell","Stouffer","Alidis","Evaleen","Gelya","Stevens","Gerfen","Pansy","Sima","Emerald","Evelyn","Sheldon","Perla","Ahlgren","Pathe","Labannah","Liddle","Ley","Lanza","Hubbard","Neelon","Boycey","O'Reilly","Dodi","Hands","Sammons","Scheck","Calv","Coppins","Pascasia","Kassia","Ful","Knipe","Orpheus","Judon","Jarita","Epp","Jewelle","Shirberg","Yarvis","Rape","Breger","Waynant","Munroe","Wina","Clere","Jacquenetta","Ponce","Krissy","Aurlie","Hannibal","Riocard","Finnigan","Hally","Burger","Tracey","Millie","Martina","Irene","Erick","Zaid","Aenneea","Atalanta","Lyssa","Claman","Elysha","Keele","Pell","Earle","Ciro","Amaleta","Clea","Settle","Zoldi","Myrtia","Fridell","Annamaria","Takken","Hudgens","Abigael","Hanover","Dyanne","Alburg","Festatus","Andrey","Gillett","Besse","Plunkett","Vallo","Beffrey","Rory","Timothee","Rattray","Nuncia","Tucky","Adara","Judi","Aramen","Alicia","Pate","Teodor","Shirah","Dehnel","Lydia","Beauchamp","Flori","Mailand","Hui","Veneaux","Alesandrini","Tolley","Alexi","Cindi","Astto","Sunshine","Enoch","McDade","Evante","Durno","Singh","Gerome","Jahncke","Graniela","Veda","Patrick","Tacye","Barton","Yuzik","Koppel","Nazar","Dorise","Dercy","Carlstrom","Shutz","Fax","Carlynn","Orsini","Aldora","Carpenter","Shaya","Candyce","Shiri","Isle","McKale","Jermayne","Donnenfeld","Roumell","Amick","Marino","Jacenta","Delmar","Emilio","Gilliette","Canotas","Ezequiel","Guss","Jill","Dunston","Bennie","Broome","Germana","Omura","Ellett","Thurman","Teria","Sorensen","Susan","Leandre","Victoria","Tiff","Adall","Pamela","Libna","Abbie","Whiney","Glanti","Breech","Fawna","Wing","Rawdon","Blake","Windy","Mahoney","Marjorie","Abbey","Shirlie","Carthy","Sioux","Dedie","Mighell","Goodden","Cheatham","Schofield","Hax","Lunette","Schnapp","Lam","Alithia","O'Toole","Erdei","Faythe","Lemieux","Latreece","Decca","Terzas","Denyse","Matejka","Lesak","Stringer","Brass","Patrica","Lorn","Weihs","Lazos","Arvin","Krystin","Maurizio","Sauer","LeMay","Colas","Stine","Fancie","Lillian","Urian","Alfred","Kleon","Susanne","Thelma","Hallie","Connolly","Brittney","Shaver","Valerlan","Sida","Zeb","Alyson","Sansone","Corinna","Aires","Zaneta","Kegan","Rashidi","Kuster","Hrutkay","Phelia","Pack","Philoo","Finn","Cacilie","Zel","Herman","Salinas","Pantheas","Syverson","Caldera","Dasha","Pennie","Thevenot","Nellie","Adey","Kaia","Theo","Latonia","Barraza","Ortrud","Weingarten","Joseph","Antoinetta","Wiggins","Frida","Adaha","Bogey","Pedroza","Nikolos","Parke","Pamella","Wamsley","Petes","Karen","Dolley","Loomis","Casabonne","Mullins","Axe","Garrity","Schach","Abby","Alverta","Kiyohara","Barnie","Nisen","Rizzo","Nanji","Vallo","Schalles","Daniell","Penn","Duyne","Berenice","Ealasaid","Schilt","Urbas","Jezebel","Fonville","Gamber","Profant","Decamp","Ives","Guenevere","Rosanne","Dream","Suh","Lemmy","Theo","Hirst","Marduk","Church","Werby","Dagall","Leatri","Avner","Purdy","Vicki","LeDoux","Horacio","Hooper","Vaas","Burney","Highams","Wilow","Phina","Carver","Shanan","Adalheid","Acquah","Drucy","Ruelu","Froehlich","Squires","Nananne","Swanhildas","Mirilla","Fanestil","Orsay","Swayne","Colas","Gupta","Spanjian","Cibis","Hagan","Eldoria","Joachima","Anette","Mauldon","Maurer","Zilvia","Dagley","Arabeila","Queena","Eugenle","Danieu","Greeley","Gore","Karylin","Combe","Volpe","Staal","Warren","Zildjian","Egan","Liederman","Branca","Salvidor","Ackley","Carlina","Viking","Monagan","Conny","Neuburger","Daria","Glynias","Orthman","Harbison","Laband","Gracye","Arnie","Harwilll","Grannie","Emsmus","Korella","Yila","Ephraim","Aphra","Comyns","Willcox","Bo","Philbin","Bonnette","Mord","Doherty","Coplin","Latrina","Weigle","Sherburn","Masry","Colley","Kovacev","Chiquita","Aspa","Rhiamon","Landri","Colton","Goodhen","Sunderland","Beitnes"]
  )
}

const usersData: IGridDataSource = new GridDataSource({
  dataSetName     : 'Users',
  dataGridID      : 'UsersSelectionGrid',
  primaryColumnKey: 'UserID',
  metadata        : GridImplementationFactory.gridMetadataCollection([ { key: EMetadataType.RecordPreviewTemplateString, value: '{{ FirstName }} {{ LastName }}' } ])
})

export const gridUserRows: IGridRow[] = []

let i=0
while(i < 50) {
  gridUserRows.push(GridImplementationFactory.gridRow(usersData.primaryColumnKey, new Map<TColumnKey, IGridCellValue>(([
      [ 'UserID'    , i+1 ],
      [ 'FirstName' , randomName() ],
      [ 'LastName'  , randomName() ],
      [ 'Email'     , `${randomName()}_${randomName()}@example.com`.toLowerCase() ],
    ] as const).map<[string, IGridCellValue]>(v => [v[0], new GridCellValue(new GridCellCoordinates(i+1, v[0]), v[1])]))
  ))
  i++
}

usersData.data.next({
  columns: [...gridUserRows[0].values.keys()],
  rows: gridUserRows
})

export const colors = [
  'Sea Blue',
  'Aqua',
  'Sunrise',
  'Apricot',
  'Vermillion',
]

const relatedData = new Map<string, IGridDataSource>()
relatedData.set(usersData.dataGridID, usersData)

export const categoryOptions: IGridSelectListOption[] = [
  { value: 'Category α', color: '#FD7D7D' },
  { value: 'Category Bravo', color: 'rgb(255, 0, 0, 0.5)' },
  { value: 'Category Charlie' },
];

export const demoGridDataSource = new GridDataSource({
  dataGridID              : 'TestData',
  dataSetName             : 'TestData',
  primaryColumnKey        : 'GUID',
  relatedData             : relatedData,
  metadata                : GridImplementationFactory.gridMetadataCollection([ { key: EMetadataType.RecordPreviewTemplateString, value: '{{ Code }}' } ]),
  columnMeta              : [
    { 
      columnKey: 'GUID',
      metadata: GridImplementationFactory.gridMetadataCollection([ { key: EMetadataType.CanUpdate, value: false } ]),
    },
    { 
      columnKey: 'RecordID',
      metadata: GridImplementationFactory.gridMetadataCollection([ { key: EMetadataType.CanUpdate, value: false } ]),
    },
    { 
      columnKey: 'IsVisible',
      name: 'Visible',
      type: { name: 'Boolean' },
      metadata: GridImplementationFactory.gridMetadataCollection()
    },
    { 
      columnKey: 'Amount',  
      type: { name: 'Money' },
      metadata: GridImplementationFactory.gridMetadataCollection(),
      seperators: [{ position: 'before' }],
    },
    { 
      columnKey: 'Percent', 
      type: { name: 'Percent' },
      metadata: GridImplementationFactory.gridMetadataCollection(),
    },
    {
      columnKey: 'Volume',  
      type: { name: 'Number' },
      seperators: [{ position: 'after' }],
      metadata: GridImplementationFactory.gridMetadataCollection()
    },
    { 
      columnKey: 'Notes',   
      type: { name: 'RichText' },
      metadata: GridImplementationFactory.gridMetadataCollection(),
    },
    { 
      columnKey: 'Date',    
      type: { name: 'Date' },
      metadata: GridImplementationFactory.gridMetadataCollection(),
    },
    { 
      columnKey: 'Category',
      type: {
        name: 'DropdownSingleSelect',
        list: {
          type: EGridSelectListType.SingleSelect,
          staticOptions: categoryOptions,
          color: 'rgb(147, 46, 100)',
        }
      },
      metadata: GridImplementationFactory.gridMetadataCollection(),
    }, 
    { 
      columnKey: 'Users',
      name: 'Users (single-select)',
      type: {
        name: 'DropdownSingleSelect',
        list: {
          type: EGridSelectListType.SingleSelect,
          relatedGridID: 'UsersSelectionGrid'
        }
      },
      metadata: GridImplementationFactory.gridMetadataCollection(),
    }, 
    { 
      columnKey: 'UsersMulti',
      name: 'Users (multi-select)',
      type: {
        name: 'DropDownMultiSelect',
        list: {
          type: EGridSelectListType.MultiSelect,
          relatedGridID: 'UsersSelectionGrid',
          color: 'rgba(150, 0, 100, 0.3)',
        }
      },
      metadata: GridImplementationFactory.gridMetadataCollection(),
    }, 
    { 
      columnKey: 'Colors',
      name: 'Colors',
      type: {
        name: 'DropDownMultiSelect',
        list: {
          type: EGridSelectListType.MultiSelect,
          staticOptions: [
            {
              value: 'Sea Blue',
              color: '#264653',
            },
            {
              value: 'Aqua',
              color: '#2a9d8f',
            },
            {
              value: 'Sunrise',
              color: '#e9c46a',
            },
            {
              value: 'Apricot',
              color: '#f4a261',
            },
            {
              value: 'Vermillion',
              color: '#e76f51',
            },
          ]
        }
      },
      metadata: GridImplementationFactory.gridMetadataCollection(),
    }, 
  ],
  hiddenColumns: ['GUID'],
})

