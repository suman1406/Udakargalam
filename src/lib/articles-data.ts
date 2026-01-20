export type ArticleInfo = {
    id: string;
    title: string;
    description: string;
    file: string;
    imageUrl: string;
};

export const articles: ArticleInfo[] = [
    {
        id: 'dakargalam-technique',
        title: 'Dakargalam – An Ancient Water Exploration Technique',
        description: 'Based on Varahamihira\'s Brhat Samhita',
        file: 'https://drive.google.com/file/d/1mj6j58zf7FEZ25MYJ2_qPaaBEQfxPEMy/view?usp=sharing',
        imageUrl: '/articles/dakargalam-ancient-technique.jpeg',
    },
    {
        id: 'brihat-samhita-meteorology',
        title: 'Meticulous and Meritorious Meteorology Enshrined in the Brihat Samhita',
        description: 'A comparative case study over four Indian regions situated in diverse climatic zones',
        file: 'https://drive.google.com/file/d/1iV1u6NkvfziRHhrKzor7JWPF5pm-IE49/view?usp=sharing',
        imageUrl: '/articles/brihat-samhita-meteorology.jpeg',
    },
    {
        id: 'sambhashana-sandesha',
        title: 'Sambhashana Sandesha Article',
        description: 'Published article on ancient water exploration techniques',
        file: 'https://drive.google.com/file/d/1jeeOHNVaMjaf95ouWzZiWe6_HoURcf7w/view?usp=sharing',
        imageUrl: '/articles/sambhashana-sandesha.jpeg',
    },
];
