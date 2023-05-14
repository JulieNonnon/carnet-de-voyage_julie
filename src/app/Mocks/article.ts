// INTERFACES

export interface IArticle {
    id: number,
    country: string,
    town: string,
    dateToGo: string, // donnée Date à prévoir
    dateToReturn: string, // donnée Date à prévoir
    mainPicture: string,
    minorPictureArray: IMinorPicture[],
    travelPitch: string,
    prosArray: IPros[],
    consArray: ICons[],
    adviceArray: IAdvices[],
    travelSumUp: string,
    isLatest: boolean,
}

    export interface IMinorPicture {
        title: string,
        image: string,
    }

    export interface IPros {
        prosPoint: string,
    }
    export interface ICons {
        consPoint: string,
    }
    export interface IAdvices {
        advicesPoint: string,
    }



// MOCK

export const ARTICLES: IArticle [] = [

{
    id: 1,
    country: "Albanie",
    town: "Tirana",
    dateToGo: "14.04.22",
    dateToReturn: "17.05.22",
    mainPicture: "assets/images/Image_Albanie.png",
    minorPictureArray: [
        {
            title: "Albanie",
            image: "assets/images/Image_Albanie.png"
        },
        {
            title: "Albanie",
            image: "assets/images/Image_Albanie.png"
        },
        {
            title: "Albanie",
            image: "assets/images/Image_Albanie.png"
        },
        {
            title: "Albanie",
            image: "assets/images/Image_Albanie.png"
        },
        {
            title: "Albanie",
            image: "assets/images/Image_Albanie.png"
        },
        {
            title: "Albanie",
            image: "assets/images/Image_Albanie.png"
        },
        {
            title: "Albanie",
            image: "assets/images/Image_Albanie.png"
        },
        {
            title: "Albanie",
            image: "assets/images/Image_Albanie.png"
        }
    ],
    
    travelPitch: "🦅 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor massa id sem iaculis, et rutrum ligula ornare. Etiam malesuada diam justo, nec sagittis ligula rhoncus sit amet. \n \n Fusce ac viverra nisi. Integer nibh urna, posuere euismod dolor ac. Donec commodo pellentesque sapien eu interdum. Vestibulum neque nulla, mattis eget hendrerit nec, tempus pharetra est. Nulla facilisi. Curabitur elit lorem, rhoncus quis quam et, imperdiet euismod mi. Morbi eget elit ac velit porttitor sodales. Nulla scelerisque risus ex, a faucibus est eleifend sed. Aliquam ac facilisis lorem, ut ornare velit.dignissim metus. Aliquam dignissim lorem id nisi aliquet, a sodales ipsum dignissim.",
    
    prosArray: [
        {
            prosPoint: "🦅 - Un pays très simple à sillonner, sans embrouilles ni complexité",
        },
        {
            prosPoint: "🦅 - Des habitants gentils, spontanés et qui cherchent le contact",
        },
        {
            prosPoint: "🦅 - Un relief vallonné, offrant de superbes paysages dotés de villages pittoresques"
        },
    ],
    consArray: [
        {
            consPoint: "🦅 - Le climat torride en juillet-août, sauf en montagne",
        },
        {
            consPoint: "🦅 - La côte très fréquentée l’été et de plus en plus bétonnée"
        },  
    ],

    adviceArray: [
        {
            advicesPoint: "🦅 - Prenez une paire de tong !"
        },
    ],

    travelSumUp: "🦅 L’Albanie est un pays que nous avons adoré visiter, en grande partie grâce à l’accueil chaleureux des Albanais, mais pas seulement ! Nous avons découvert une culture fièrement préservée, une variété de paysages captivante et de nombreux coins tranquilles, y compris au mois de juillet. Seule la côte adriatique sature de touristes l’été. Notre conseil, si vous venez à cette saison, serait alors de s’éloigner de la mer et de privilégier les villages et les montagnes dans le reste du pays, où se concentre à notre avis tout le charme de l’Albanie.",
    isLatest: false,
},

{
    id: 2,
    country: "Grèce",
    town: "Athène",
    dateToGo: "14.04.22",
    dateToReturn: "17.05.22",
    mainPicture: "assets/images/Image_Grece.png",
    minorPictureArray: [
        {
            title: "Grèce",
            image: "assets/images/Image_Grece.png"
        },
        {
            title: "Grèce",
            image: "assets/images/Image_Grece.png"
        },
        {
            title: "Grèce",
            image: "assets/images/Image_Grece.png"
        },
        {
            title: "Grèce",
            image: "assets/images/Image_Grece.png"
        },
        {
            title: "Grèce",
            image: "assets/images/Image_Grece.png"
        },
        {
            title: "Grèce",
            image: "assets/images/Image_Grece.png"
        },
        {
            title: "Grèce",
            image: "assets/images/Image_Grece.png"
        },
        {
            title: "Grèce",
            image: "assets/images/Image_Grece.png"
        }
    ],
    travelPitch: "🏛️ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor massa id sem iaculis, et rutrum ligula ornare. Etiam malesuada diam justo, nec sagittis ligula rhoncus sit amet. Fusce ac viverra nisi. \n \n Integer nibh urna, posuere euismod dolor ac. Donec commodo pellentesque sapien eu interdum. Vestibulum neque nulla, mattis eget hendrerit nec, tempus pharetra est. Nulla facilisi. Curabitur elit lorem, rhoncus quis quam et, imperdiet euismod mi. Morbi eget elit ac velit porttitor sodales. Nulla scelerisque risus ex, a faucibus est eleifend sed. Aliquam ac facilisis lorem, ut ornare velit.dignissim metus. Aliquam dignissim lorem id nisi aliquet, a sodales ipsum dignissim.",
    
    prosArray: [
        {
            prosPoint: "🏛️ - Faire une pause bucolique au milieu des oliviers en plein cœur d’Athènes.",
        },
        {
            prosPoint: "🏛️ - À l’écart de l’agitation, cette promenade archéologique, fort bien conçue, est particulièrement agréable.",
        },
        {
            prosPoint: "🏛️ - Le musée Bénaki est un formidable conservatoire de l’art grec de l’Antiquité au 20e siècle."
        },
    ],
    consArray: [
        {
            consPoint: "🏛️ - Le climat torride en juillet-août, sauf en montagne",
        },
        {
            consPoint: "🏛️ - La côte très fréquentée l’été et de plus en plus bétonnée"
        },  
    ],

    adviceArray: [
        {
            advicesPoint: "🏛️ - Prenez une paire de chaussure de marche !"
        },
    ],
    travelSumUp: "🏛️ Souvent, on ne fait que passer à Athènes pour visiter l’Acropole, avant de filer vers les îles grecques ou le Péloponnèse. Pas forcément séduisante au premier abord, la capitale grecque mérite vraiment une halte prolongée. Musées passionnants, quartiers animés et attachants, restos et bars à foison, Athènes fait partie de ces villes à vivre, tout autant qu’à visiter. Athènes, nous, on aime !",
    isLatest: false,
},

{
    id: 3,
    country: "Guatemala",
    town: "Monterrico",
    dateToGo: "14.04.22",
    dateToReturn: "17.05.22",
    mainPicture: "assets/images/Image_Guatemala.png",
    minorPictureArray: [
        {
            title: "Guatemala",
            image: "assets/images/Image_Guatemala.png"
        },
        {
            title: "Guatemala",
            image: "assets/images/Image_Guatemala.png"
        },
        {
            title: "Guatemala",
            image: "assets/images/Image_Guatemala.png"
        },
        {
            title: "Guatemala",
            image: "assets/images/Image_Guatemala.png"
        },
        {
            title: "Guatemala",
            image: "assets/images/Image_Guatemala.png"
        },
        {
            title: "Guatemala",
            image: "assets/images/Image_Guatemala.png"
        },
        {
            title: "Guatemala",
            image: "assets/images/Image_Guatemala.png"
        },
        {
            title: "Guatemala",
            image: "assets/images/Image_Guatemala.png"
        }

    ],
    travelPitch: "🦜 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor massa id sem iaculis, et rutrum ligula ornare. Etiam malesuada diam justo, nec sagittis ligula rhoncus sit amet. Fusce ac viverra nisi. Integer nibh urna, posuere euismod dolor ac. Donec commodo pellentesque sapien eu interdum. Vestibulum neque nulla, mattis eget hendrerit nec, tempus pharetra est. Nulla facilisi. Curabitur elit lorem, rhoncus quis quam et, imperdiet euismod mi. \n \n Morbi eget elit ac velit porttitor sodales. Nulla scelerisque risus ex, a faucibus est eleifend sed. Aliquam ac facilisis lorem, ut ornare velit.dignissim metus. Aliquam dignissim lorem id nisi aliquet, a sodales ipsum dignissim.",
    
    prosArray: [
        {
            prosPoint: "🦜 - La plus grande partie du Guatemala est intacte, authentique.",
        },
        {
            prosPoint: "🦜 - Un site archéologique fabuleux, Tikal, enfoui au cœur de la forêt.",
        },
        {
            prosPoint: "🦜 - Un des plus beaux lacs du monde, Atitlán, entouré de ses volcans aux cônes parfaits."
        },
    ],
    consArray: [
        {
            consPoint: "🦜 - Le climat torride en juillet-août, sauf en montagne",
        },
        {
            consPoint: "🦜 - La côte très fréquentée l’été et de plus en plus bétonnée"
        },  
    ],

    adviceArray: [
        {
            advicesPoint: "🦜 - Prenez de la crème solaire !"
        },
    ],
    travelSumUp: "🦜 Le Guatemala est un pays assez extraordinaire : paysages variés et harmonieux, volcans en activité, lacs d’altitude, forêts tropicales, villages séculaires perdus sur les hauts plateaux, côtes atlantique et pacifique, sites archéologiques… Autrefois visité en tant qu’extension d’un séjour au Mexique, c’est aujourd’hui, à juste titre, une destination à part entière. La grande majorité des habitants du Guatemala descendent directement des Mayas. Les Indiens, qui représentent 60 % de la population, ont conservé leurs langues, leurs coutumes, leur folklore et leurs costumes traditionnels, particulièrement riches en couleurs. À la différence du Mexique, beaucoup plus métissé, on est ici plongé en pleine culture amérindienne, au cœur du monde maya. Et ce n’est pas du folklore.",
    isLatest: false,
},

{
    id: 4,
    country: "Tunisie",
    town: "Tunis",
    dateToGo: "14.04.22",
    dateToReturn: "17.05.22",
    mainPicture: "assets/images/Image_Tunisie_tunis.png",
    minorPictureArray: [
        {
            title: "Tunisie Tunis",
            image: "assets/images/Image_Tunisie_tunis.png"
        },
        {
            title: "Tunisie Tunis",
            image: "assets/images/Image_Tunisie_tunis.png"
        },
        {
            title: "Tunisie Tunis",
            image: "assets/images/Image_Tunisie_tunis.png"
        },
        {
            title: "Tunisie Tunis",
            image: "assets/images/Image_Tunisie_tunis.png"
        },
        {
            title: "Tunisie Tunis",
            image: "assets/images/Image_Tunisie_tunis.png"
        },
        {
            title: "Tunisie Tunis",
            image: "assets/images/Image_Tunisie_tunis.png"
        },
        {
            title: "Tunisie Tunis",
            image: "assets/images/Image_Tunisie_tunis.png"
        },
        {
            title: "Tunisie Tunis",
            image: "assets/images/Image_Tunisie_tunis.png"
        },


    ],
    travelPitch: "🌴 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor massa id sem iaculis, et rutrum ligula ornare. Etiam malesuada diam justo, nec sagittis ligula rhoncus sit amet. Fusce ac viverra nisi. Integer nibh urna, posuere euismod dolor ac. Donec commodo pellentesque sapien eu interdum. \n \n Vestibulum neque nulla, mattis eget hendrerit nec, tempus pharetra est. Nulla facilisi. Curabitur elit lorem, rhoncus quis quam et, imperdiet euismod mi. Morbi eget elit ac velit porttitor sodales. Nulla scelerisque risus ex, a faucibus est eleifend sed. Aliquam ac facilisis lorem, ut ornare velit.dignissim metus. Aliquam dignissim lorem id nisi aliquet, a sodales ipsum dignissim.",
    
    prosArray: [
        {
            prosPoint: "🌴 - Capitale tourbillonnante et attachante, Tunis permet de se plonger dans l’histoire du pays et d’apprendre à le connaître pas à pas.",
        },
        {
            prosPoint: "🌴 - Avec son million d’habitants, Tunis offre une parenthèse urbaine vivante et vivifiante, à la fois moderne et tournée vers l’histoire du territoire.",
        },
        {
            prosPoint: "🌴 - Le célèbre musée du Bardo qui présente la Tunisie sous toutes ses coutures et sur plusieurs millénaires à travers une immense variété de pièces archéologiques."
        },
    ],
    consArray: [
        {
            consPoint: "🌴 - Le climat torride en juillet-août, sauf en montagne",
        },
        {
            consPoint: "🌴 - La côte très fréquentée l’été et de plus en plus bétonnée"
        },  
    ],

    adviceArray: [
        {
            advicesPoint: "🌴 - Prenez une gourde d'eau !"
        },
    ],
    travelSumUp: "🌴 Tunis, la capitale de la Tunisie, au nord du pays, est assez boudée par les touristes. Elle a gardé l’empreinte de son passé colonial, comme en témoignent les grandes avenues haussmanniennes et le vieux centre. Tunis est un lieu où tout se mêle, Orient et Occident, jeunes et vieux, tradition et modernité. La ville cache aussi une des plus belles médinas du pays, fondée à la fin du VIIe siècle. Inscrite au Patrimoine mondial de l’Unesco. Tunis est une ville où il faut vraiment passer quelques jours, elle n’est pas uniquement centrée sur le tourisme et il est agréable de voir les Tunisiens vivre leur vie de tous les jours.",
    isLatest: false,
},

{
    id: 5,
    country: "Tunisie",
    town: "El Jem",
    dateToGo: "14.04.22",
    dateToReturn: "17.05.22",
    mainPicture: "assets/images/Image_Tunisie_eljem.png",
    minorPictureArray: [
        {
            title: "Tunisie El Jem",
            image: "assets/images/Image_Tunisie_eljem.png"
        },
        {
            title: "Tunisie El Jem",
            image: "assets/images/Image_Tunisie_eljem.png"
        },
        {
            title: "Tunisie El Jem",
            image: "assets/images/Image_Tunisie_eljem.png"
        },
        {
            title: "Tunisie El Jem",
            image: "assets/images/Image_Tunisie_eljem.png"
        },
        {
            title: "Tunisie El Jem",
            image: "assets/images/Image_Tunisie_eljem.png"
        },
        {
            title: "Tunisie El Jem",
            image: "assets/images/Image_Tunisie_eljem.png"
        },
        {
            title: "Tunisie El Jem",
            image: "assets/images/Image_Tunisie_eljem.png"
        },
        {
            title: "Tunisie El Jem",
            image: "assets/images/Image_Tunisie_eljem.png"
        },
    ],
    travelPitch: "🏺 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor massa id sem iaculis, et rutrum ligula ornare. Etiam malesuada diam justo, nec sagittis ligula rhoncus sit amet. Fusce ac viverra nisi. Integer nibh urna, posuere euismod dolor ac. Donec commodo pellentesque sapien eu interdum. Vestibulum neque nulla, mattis eget hendrerit nec, tempus pharetra est. \n \n Nulla facilisi. Curabitur elit lorem, rhoncus quis quam et, imperdiet euismod mi. Morbi eget elit ac velit porttitor sodales. Nulla scelerisque risus ex, a faucibus est eleifend sed. Aliquam ac facilisis lorem, ut ornare velit.dignissim metus. Aliquam dignissim lorem id nisi aliquet, a sodales ipsum dignissim.",
    
    prosArray: [
        {
            prosPoint: "🏺 - La beauté des oliviers.",
        },
        {
            prosPoint: "🏺 - L’amphithéâtre d’El-Jem est le plus grand édifice romain de Tunisie encore debout et le troisième amphithéâtre du monde romain après celui de Rome et de Capoue.",
        },
        {
            prosPoint: "🏺 - Alors que la ville ne comptait que 15 000 habitants, il pouvait accueillir 30 000 personnes."
        },
    ],
    consArray: [
        {
            consPoint: "🏺 - Le climat torride en juillet-août, sauf en montagne",
        },
        {
            consPoint: "🏺 - La côte très fréquentée l’été et de plus en plus bétonnée"
        },  
    ],

    adviceArray: [
        {
            advicesPoint: "🏺 - Prenez un chapeau pour se protéger du soleil !"
        },
    ],
    travelSumUp: "🏺 Au cœur des oliviers, El-Jem est à environ 60 km de Sfax et de Sousse. La ville possède un gigantesque amphithéâtre, le plus grand édifice romain encore debout en Tunisie ; il surpasse les arènes de Nîmes ou d’Arles. Dans l’Antiquité, la ville était une des plus riches et comptait près de 40 000 habitants. Un détour par l’amphithéâtre s’impose, mais allez aussi jeter un coup d’œil au Musée archéologique qui abrite des trésors.",
    isLatest: true,
}


] 