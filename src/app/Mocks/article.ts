export interface IArticle {
    id: number,
    country: string,
    town: string,
    dateToGo: string, // donnée Date à prévoir
    dateToReturn: string, // donnée Date à prévoir
    mainPicture: string,
    minorPictureArray: string[],
    travelPitch: string,
    prosArray: string[],
    consArray: string[],
    adviceArray: string[],
    travelSumUp: string,
    isLatest: boolean,
}

export const ARTICLES: IArticle [] = [

{
    id: 1,
    country: "Albanie",
    town: "Tirana",
    dateToGo: "14.04.22",
    dateToReturn: "17.05.22",
    mainPicture: "assets/images/Image_Albanie.png",
    minorPictureArray: [
        "assets/images/Image_Albanie.png",
        "assets/images/Image_Albanie.png",
        "assets/images/Image_Albanie.png",
        "assets/images/Image_Albanie.png",
        "assets/images/Image_Albanie.png",
        "assets/images/Image_Albanie.png",
        "assets/images/Image_Albanie.png",
        "assets/images/Image_Albanie.png"
    ],
    travelPitch: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor massa id sem iaculis, et rutrum ligula ornare. Etiam malesuada diam justo, nec sagittis ligula rhoncus sit amet. Fusce ac viverra nisi. Integer nibh urna, posuere euismod dolor ac. Donec commodo pellentesque sapien eu interdum. Vestibulum neque nulla, mattis eget hendrerit nec, tempus pharetra est. Nulla facilisi. Curabitur elit lorem, rhoncus quis quam et, imperdiet euismod mi. Morbi eget elit ac velit porttitor sodales. Nulla scelerisque risus ex, a faucibus est eleifend sed. Aliquam ac facilisis lorem, ut ornare velit.dignissim metus. Aliquam dignissim lorem id nisi aliquet, a sodales ipsum dignissim.",
    prosArray: [
        "Un pays très simple à sillonner, sans embrouilles ni complexité", 
        "Des habitants gentils, spontanés et qui cherchent le contact",
        "Un relief vallonné, offrant de superbes paysages dotés de villages pittoresques"
        ],
    consArray: [
        "Le climat torride en juillet-août, sauf en montagne",
        "La côte très fréquentée l’été et de plus en plus bétonnée"
        ],
    adviceArray: [
        "Prenez une paire de tong !"
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
        "assets/images/Image_Grece.png",
        "assets/images/Image_Grece.png",
        "assets/images/Image_Grece.png",
        "assets/images/Image_Grece.png",
        "assets/images/Image_Grece.png",
        "assets/images/Image_Grece.png",
        "assets/images/Image_Grece.png",
        "assets/images/Image_Grece.png"
    ],
    travelPitch: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor massa id sem iaculis, et rutrum ligula ornare. Etiam malesuada diam justo, nec sagittis ligula rhoncus sit amet. Fusce ac viverra nisi. Integer nibh urna, posuere euismod dolor ac. Donec commodo pellentesque sapien eu interdum. Vestibulum neque nulla, mattis eget hendrerit nec, tempus pharetra est. Nulla facilisi. Curabitur elit lorem, rhoncus quis quam et, imperdiet euismod mi. Morbi eget elit ac velit porttitor sodales. Nulla scelerisque risus ex, a faucibus est eleifend sed. Aliquam ac facilisis lorem, ut ornare velit.dignissim metus. Aliquam dignissim lorem id nisi aliquet, a sodales ipsum dignissim.",
    prosArray: [
        "Un pays très simple à sillonner, sans embrouilles ni complexité", 
        "Des habitants gentils, spontanés et qui cherchent le contact",
        "Un relief vallonné, offrant de superbes paysages dotés de villages pittoresques"
        ],
    consArray: [
        "Le climat torride en juillet-août, sauf en montagne",
        "La côte très fréquentée l’été et de plus en plus bétonnée"
        ],
    adviceArray: [
        "Prenez une paire de tong !"
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
        "assets/images/Image_Guatemala.png",
        "assets/images/Image_Guatemala.png",
        "assets/images/Image_Guatemala.png",
        "assets/images/Image_Guatemala.png",
        "assets/images/Image_Guatemala.png",
        "assets/images/Image_Guatemala.png",
        "assets/images/Image_Guatemala.png",
        "assets/images/Image_Guatemala.png"
    ],
    travelPitch: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor massa id sem iaculis, et rutrum ligula ornare. Etiam malesuada diam justo, nec sagittis ligula rhoncus sit amet. Fusce ac viverra nisi. Integer nibh urna, posuere euismod dolor ac. Donec commodo pellentesque sapien eu interdum. Vestibulum neque nulla, mattis eget hendrerit nec, tempus pharetra est. Nulla facilisi. Curabitur elit lorem, rhoncus quis quam et, imperdiet euismod mi. Morbi eget elit ac velit porttitor sodales. Nulla scelerisque risus ex, a faucibus est eleifend sed. Aliquam ac facilisis lorem, ut ornare velit.dignissim metus. Aliquam dignissim lorem id nisi aliquet, a sodales ipsum dignissim.",
    prosArray: [
        "Un pays très simple à sillonner, sans embrouilles ni complexité", 
        "Des habitants gentils, spontanés et qui cherchent le contact",
        "Un relief vallonné, offrant de superbes paysages dotés de villages pittoresques"
        ],
    consArray: [
        "Le climat torride en juillet-août, sauf en montagne",
        "La côte très fréquentée l’été et de plus en plus bétonnée"
        ],
    adviceArray: [
        "Prenez une paire de tong !"
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
        "assets/images/Image_Tunisie_tunis.png",
        "assets/images/Image_Tunisie_tunis.png",
        "assets/images/Image_Tunisie_tunis.png",
        "assets/images/Image_Tunisie_tunis.png",
        "assets/images/Image_Tunisie_tunis.png",
        "assets/images/Image_Tunisie_tunis.png",
        "assets/images/Image_Tunisie_tunis.png",
        "assets/images/Image_Tunisie_tunis.png"
    ],
    travelPitch: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor massa id sem iaculis, et rutrum ligula ornare. Etiam malesuada diam justo, nec sagittis ligula rhoncus sit amet. Fusce ac viverra nisi. Integer nibh urna, posuere euismod dolor ac. Donec commodo pellentesque sapien eu interdum. Vestibulum neque nulla, mattis eget hendrerit nec, tempus pharetra est. Nulla facilisi. Curabitur elit lorem, rhoncus quis quam et, imperdiet euismod mi. Morbi eget elit ac velit porttitor sodales. Nulla scelerisque risus ex, a faucibus est eleifend sed. Aliquam ac facilisis lorem, ut ornare velit.dignissim metus. Aliquam dignissim lorem id nisi aliquet, a sodales ipsum dignissim.",
    prosArray: [
        "Un pays très simple à sillonner, sans embrouilles ni complexité", 
        "Des habitants gentils, spontanés et qui cherchent le contact",
        "Un relief vallonné, offrant de superbes paysages dotés de villages pittoresques"
        ],
    consArray: [
        "Le climat torride en juillet-août, sauf en montagne",
        "La côte très fréquentée l’été et de plus en plus bétonnée"
        ],
    adviceArray: [
        "Prenez une paire de tong !"
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
        "assets/images/Image_Tunisie_eljem.png",
        "assets/images/Image_Tunisie_eljem.png",
        "assets/images/Image_Tunisie_eljem.png",
        "assets/images/Image_Tunisie_eljem.png",
        "assets/images/Image_Tunisie_eljem.png",
        "assets/images/Image_Tunisie_eljem.png",
        "assets/images/Image_Tunisie_eljem.png",
        "assets/images/Image_Tunisie_eljem.png"
    ],
    travelPitch: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor massa id sem iaculis, et rutrum ligula ornare. Etiam malesuada diam justo, nec sagittis ligula rhoncus sit amet. Fusce ac viverra nisi. Integer nibh urna, posuere euismod dolor ac. Donec commodo pellentesque sapien eu interdum. Vestibulum neque nulla, mattis eget hendrerit nec, tempus pharetra est. Nulla facilisi. Curabitur elit lorem, rhoncus quis quam et, imperdiet euismod mi. Morbi eget elit ac velit porttitor sodales. Nulla scelerisque risus ex, a faucibus est eleifend sed. Aliquam ac facilisis lorem, ut ornare velit.dignissim metus. Aliquam dignissim lorem id nisi aliquet, a sodales ipsum dignissim.",
    prosArray: [
        "Un pays très simple à sillonner, sans embrouilles ni complexité", 
        "Des habitants gentils, spontanés et qui cherchent le contact",
        "Un relief vallonné, offrant de superbes paysages dotés de villages pittoresques"
        ],
    consArray: [
        "Le climat torride en juillet-août, sauf en montagne",
        "La côte très fréquentée l’été et de plus en plus bétonnée"
        ],
    adviceArray: [
        "Prenez une paire de tong !"
    ],
    travelSumUp: "La Tunisie est un pays que nous avons adoré visiter, en grande partie grâce à l’accueil chaleureux des Tunisiens, mais pas seulement ! Nous avons découvert une culture fièrement préservée, une variété de paysages captivante et de nombreux coins tranquilles, y compris au mois de juillet. Seule la côte adriatique sature de touristes l’été. Notre conseil, si vous venez à cette saison, serait alors de s’éloigner de la mer et de privilégier les villages et les montagnes dans le reste du pays, où se concentre à notre avis tout le charme de la Tunisie.",
    isLatest: false,
}


] 