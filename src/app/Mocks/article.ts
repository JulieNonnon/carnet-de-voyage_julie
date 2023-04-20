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
    
    travelPitch: "ALBANIE Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor massa id sem iaculis, et rutrum ligula ornare. Etiam malesuada diam justo, nec sagittis ligula rhoncus sit amet. Fusce ac viverra nisi. Integer nibh urna, posuere euismod dolor ac. Donec commodo pellentesque sapien eu interdum. Vestibulum neque nulla, mattis eget hendrerit nec, tempus pharetra est. Nulla facilisi. Curabitur elit lorem, rhoncus quis quam et, imperdiet euismod mi. Morbi eget elit ac velit porttitor sodales. Nulla scelerisque risus ex, a faucibus est eleifend sed. Aliquam ac facilisis lorem, ut ornare velit.dignissim metus. Aliquam dignissim lorem id nisi aliquet, a sodales ipsum dignissim.",
    
    prosArray: [
        {
            prosPoint: "AL - Un pays très simple à sillonner, sans embrouilles ni complexité",
        },
        {
            prosPoint: "AL - Des habitants gentils, spontanés et qui cherchent le contact",
        },
        {
            prosPoint: "AL - Un relief vallonné, offrant de superbes paysages dotés de villages pittoresques"
        },
    ],
    consArray: [
        {
            consPoint: "AL - Le climat torride en juillet-août, sauf en montagne",
        },
        {
            consPoint: "AL - La côte très fréquentée l’été et de plus en plus bétonnée"
        },  
    ],

    adviceArray: [
        {
            advicesPoint: "AL - Prenez une paire de tong !"
        },
    ],

    travelSumUp: "L’Albanie est un pays que nous avons adoré visiter, en grande partie grâce à l’accueil chaleureux des Albanais, mais pas seulement ! Nous avons découvert une culture fièrement préservée, une variété de paysages captivante et de nombreux coins tranquilles, y compris au mois de juillet. Seule la côte adriatique sature de touristes l’été. Notre conseil, si vous venez à cette saison, serait alors de s’éloigner de la mer et de privilégier les villages et les montagnes dans le reste du pays, où se concentre à notre avis tout le charme de l’Albanie.",
    isLatest: true,
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
    travelPitch: "GRECE Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor massa id sem iaculis, et rutrum ligula ornare. Etiam malesuada diam justo, nec sagittis ligula rhoncus sit amet. Fusce ac viverra nisi. Integer nibh urna, posuere euismod dolor ac. Donec commodo pellentesque sapien eu interdum. Vestibulum neque nulla, mattis eget hendrerit nec, tempus pharetra est. Nulla facilisi. Curabitur elit lorem, rhoncus quis quam et, imperdiet euismod mi. Morbi eget elit ac velit porttitor sodales. Nulla scelerisque risus ex, a faucibus est eleifend sed. Aliquam ac facilisis lorem, ut ornare velit.dignissim metus. Aliquam dignissim lorem id nisi aliquet, a sodales ipsum dignissim.",
    
    prosArray: [
        {
            prosPoint: "GR - Un pays très simple à sillonner, sans embrouilles ni complexité",
        },
        {
            prosPoint: "GR - Des habitants gentils, spontanés et qui cherchent le contact",
        },
        {
            prosPoint: "GR - Un relief vallonné, offrant de superbes paysages dotés de villages pittoresques"
        },
    ],
    consArray: [
        {
            consPoint: "GR - Le climat torride en juillet-août, sauf en montagne",
        },
        {
            consPoint: "GR - La côte très fréquentée l’été et de plus en plus bétonnée"
        },  
    ],

    adviceArray: [
        {
            advicesPoint: "GR - Prenez une paire de tong !"
        },
    ],
    travelSumUp: "La Grèce est un pays que nous avons adoré visiter, en grande partie grâce à l’accueil chaleureux des Grecs, mais pas seulement ! Nous avons découvert une culture fièrement préservée, une variété de paysages captivante et de nombreux coins tranquilles, y compris au mois de juillet. Seule la côte adriatique sature de touristes l’été. Notre conseil, si vous venez à cette saison, serait alors de s’éloigner de la mer et de privilégier les villages et les montagnes dans le reste du pays, où se concentre à notre avis tout le charme de la Grèce.",
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
    travelPitch: "GUATEMALA Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor massa id sem iaculis, et rutrum ligula ornare. Etiam malesuada diam justo, nec sagittis ligula rhoncus sit amet. Fusce ac viverra nisi. Integer nibh urna, posuere euismod dolor ac. Donec commodo pellentesque sapien eu interdum. Vestibulum neque nulla, mattis eget hendrerit nec, tempus pharetra est. Nulla facilisi. Curabitur elit lorem, rhoncus quis quam et, imperdiet euismod mi. Morbi eget elit ac velit porttitor sodales. Nulla scelerisque risus ex, a faucibus est eleifend sed. Aliquam ac facilisis lorem, ut ornare velit.dignissim metus. Aliquam dignissim lorem id nisi aliquet, a sodales ipsum dignissim.",
    
    prosArray: [
        {
            prosPoint: "GT - Un pays très simple à sillonner, sans embrouilles ni complexité",
        },
        {
            prosPoint: "GT - Des habitants gentils, spontanés et qui cherchent le contact",
        },
        {
            prosPoint: "GT - Un relief vallonné, offrant de superbes paysages dotés de villages pittoresques"
        },
    ],
    consArray: [
        {
            consPoint: "GT - Le climat torride en juillet-août, sauf en montagne",
        },
        {
            consPoint: "GT - La côte très fréquentée l’été et de plus en plus bétonnée"
        },  
    ],

    adviceArray: [
        {
            advicesPoint: "GT - Prenez une paire de tong !"
        },
    ],
    travelSumUp: "Le Guatemala est un pays que nous avons adoré visiter, en grande partie grâce à l’accueil chaleureux des Guatemalquais, mais pas seulement ! Nous avons découvert une culture fièrement préservée, une variété de paysages captivante et de nombreux coins tranquilles, y compris au mois de juillet. Seule la côte adriatique sature de touristes l’été. Notre conseil, si vous venez à cette saison, serait alors de s’éloigner de la mer et de privilégier les villages et les montagnes dans le reste du pays, où se concentre à notre avis tout le charme de le Guatemala.",
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
    travelPitch: "TUNISIE TUNIS Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor massa id sem iaculis, et rutrum ligula ornare. Etiam malesuada diam justo, nec sagittis ligula rhoncus sit amet. Fusce ac viverra nisi. Integer nibh urna, posuere euismod dolor ac. Donec commodo pellentesque sapien eu interdum. Vestibulum neque nulla, mattis eget hendrerit nec, tempus pharetra est. Nulla facilisi. Curabitur elit lorem, rhoncus quis quam et, imperdiet euismod mi. Morbi eget elit ac velit porttitor sodales. Nulla scelerisque risus ex, a faucibus est eleifend sed. Aliquam ac facilisis lorem, ut ornare velit.dignissim metus. Aliquam dignissim lorem id nisi aliquet, a sodales ipsum dignissim.",
    
    prosArray: [
        {
            prosPoint: "TUNIS - Un pays très simple à sillonner, sans embrouilles ni complexité",
        },
        {
            prosPoint: "TUNIS - Des habitants gentils, spontanés et qui cherchent le contact",
        },
        {
            prosPoint: "TUNIS - Un relief vallonné, offrant de superbes paysages dotés de villages pittoresques"
        },
    ],
    consArray: [
        {
            consPoint: "TUNIS - Le climat torride en juillet-août, sauf en montagne",
        },
        {
            consPoint: "TUNIS - La côte très fréquentée l’été et de plus en plus bétonnée"
        },  
    ],

    adviceArray: [
        {
            advicesPoint: "TUNIS - Prenez une paire de tong !"
        },
    ],
    travelSumUp: "La Tunisie est un pays que nous avons adoré visiter, en grande partie grâce à l’accueil chaleureux des Tunisiens, mais pas seulement ! Nous avons découvert une culture fièrement préservée, une variété de paysages captivante et de nombreux coins tranquilles, y compris au mois de juillet. Seule la côte adriatique sature de touristes l’été. Notre conseil, si vous venez à cette saison, serait alors de s’éloigner de la mer et de privilégier les villages et les montagnes dans le reste du pays, où se concentre à notre avis tout le charme de la Tunisie.",
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
    travelPitch: "TUNISIE ELJEM Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor massa id sem iaculis, et rutrum ligula ornare. Etiam malesuada diam justo, nec sagittis ligula rhoncus sit amet. Fusce ac viverra nisi. Integer nibh urna, posuere euismod dolor ac. Donec commodo pellentesque sapien eu interdum. Vestibulum neque nulla, mattis eget hendrerit nec, tempus pharetra est. Nulla facilisi. Curabitur elit lorem, rhoncus quis quam et, imperdiet euismod mi. Morbi eget elit ac velit porttitor sodales. Nulla scelerisque risus ex, a faucibus est eleifend sed. Aliquam ac facilisis lorem, ut ornare velit.dignissim metus. Aliquam dignissim lorem id nisi aliquet, a sodales ipsum dignissim.",
    
    prosArray: [
        {
            prosPoint: "ELJEM - Un pays très simple à sillonner, sans embrouilles ni complexité",
        },
        {
            prosPoint: "ELJEM - Des habitants gentils, spontanés et qui cherchent le contact",
        },
        {
            prosPoint: "ELJEM - Un relief vallonné, offrant de superbes paysages dotés de villages pittoresques"
        },
    ],
    consArray: [
        {
            consPoint: "ELJEM - Le climat torride en juillet-août, sauf en montagne",
        },
        {
            consPoint: "ELJEM - La côte très fréquentée l’été et de plus en plus bétonnée"
        },  
    ],

    adviceArray: [
        {
            advicesPoint: "ELJEM - Prenez une paire de tong !"
        },
    ],
    travelSumUp: "La Tunisie est un pays que nous avons adoré visiter, en grande partie grâce à l’accueil chaleureux des Tunisiens, mais pas seulement ! Nous avons découvert une culture fièrement préservée, une variété de paysages captivante et de nombreux coins tranquilles, y compris au mois de juillet. Seule la côte adriatique sature de touristes l’été. Notre conseil, si vous venez à cette saison, serait alors de s’éloigner de la mer et de privilégier les villages et les montagnes dans le reste du pays, où se concentre à notre avis tout le charme de la Tunisie.",
    isLatest: false,
}


] 