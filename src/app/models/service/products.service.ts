import { Injectable } from '@angular/core';

import { Product } from '@app/models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private products: Product[] = [
    { id: 1, category: 'plants_truffiers', name: 'Chêne Vert Truffier Tuber Mélanosporum (quercus ilex)', image: 'assets/images/products/truffiers/chene-truffier-pubescent-tuber-melanosporum-quercus-pubescens.jpg', price: 1595,
      description: 'Jeune plant truffier de chêne pubescent (Quercus pubescens) aussi appelé chêne blanc mycorhizé par tuber mélanosporum de 2 ans en godets anti-chignon de 450cc. Contrôlé et certifié par le CTIFL.' },
    { id: 2, category: 'plants_truffiers', name: 'Chêne Truffier Pubescent Tuber Mélanosporum (quercus pubescens)', image: 'assets/images/products/truffiers/chene-vert-truffier-tuber-melanosporum-quercus-ilex.jpg', price: 2499,
      description: 'Jeune plant truffier de chêne vert (Quercus ilex) mycorhizé par tuber mélanosporum de 2 ans en godets anti-chignon de 450cc. Contrôlé et certifié par le CTIFL.'},
    { id: 3, category: 'plants_truffiers', name: 'Noisetier Commun Truffier Tuber Mélanosporum (corylus avellana)', image: 'assets/images/products/truffiers/noisetier-commun-truffier-tuber-melanosporum-corylus-avellana.jpg', price: 1595,
      description: 'Jeune plant truffier de noisetier commun (corylus avellana) mycorhizé par tuber mélanosporum de 2 ans en godets anti-chignon de 450cc. Contrôlé et certifié par le CTIFL.' },
    { id: 4, category: 'plants_truffiers', name: 'Chêne Truffier Kermes Tuber Mélanosporum (quercus coccifera)', image: 'assets/images/products/truffiers/chene-truffier-kermes-tuber-melanosporum-quercus-coccifera.jpg', price: 1595,
      description: 'Jeune plant truffier de chêne kermès (Quercus coccifera) ou chêne des garrigues mycorhizé par tuber mélanosporum de 2 ans en godets anti-chignon de 450cc. Contrôlé et certifié par le CTIFL.' },
    { id: 5, category: 'plants_truffiers', name: 'Charme Truffier Tuber Mélanosporum (carpinus betulus)', image: 'assets/images/products/truffiers/charme-truffier-tuber-melanosporum-carpinus-betulus.jpg', price: 2499,
      description: 'Jeune plant truffier de charme truffier (carpinus betulus) mycorhizé par tuber mélanosporum de 2 ans en godets anti-chignon de 450cc. Contrôlé et certifié par le CTIFL.' },
    { id: 6, category: 'plants_truffiers', name: 'Noisetier Truffier Byzance Tuber Mélanosporum (corylus colurna)', image: 'assets/images/products/truffiers/noisetier-truffier-byzance-tuber-melanosporum-corylus-colurna.jpg', price: 1595,
      description: 'Jeune plant truffier de noisetier de Byzance (Corylus colurna) mycorhizé tuber melanosporum. Noisetier de Byzance destiné à la production de truffes noires du Périgord. Plant de noisetier truffier âgé de 1 à 3 ans, de production française et de qualité certifiée sous contrôle de l\'INRAE.' },
    { id: 7, category: 'plants_truffiers', name: 'Pack de Plants Truffiers spécial Uncinatum', image: 'assets/images/products/truffiers/pack-de-plants-truffiers-special-uncinatum.jpg', price: 15400,
      description: 'NOUVEAU ! On vous propose désormais des packs truffiers spécial Uncinatum avec une dose d\'engrais retard spécifique (type basacote) pour chaque plants.' },
    { id: 8, category: 'coniferes', name: 'Arbre aux 40 écus', image: 'assets/images/products/coniferes/arbre-aux-40-ecus17922.jpg', price: 2650,
      description: 'Gingko biloba est un arbre de très grande longévité (plus de 1 000 ans). Son port d\'abord dressé, s\'étale à partir de l\'âge de 20 ans. Les feuilles caduques, en éventail, à long pétiole, vert vif, prennent une magnifique couleur jaune d\'or en automne.' },
    { id: 9, category: 'coniferes', name: 'Arbre aux 40 écus Eiffel', image: 'assets/images/products/coniferes/arbre-aux-40-ecus-eiffel-23076.jpg', price: 24500,
      description: 'Gingko fastigié, ventru à la base, rétréci au sommet. Superbes couleurs d\'automne, comme tous les Ginkgo.' },
    { id: 10, category: 'coniferes', name: 'Arbre aux 40 écus Fastigiata Blagon', image: 'assets/images/products/coniferes/arbre-aux-40-ecus-fastigiata-blagon-4814.jpg', price: 6900,
      description: 'Une nouvelle forme colonnaire, compacte et mâle (pas de fruits malodorant) de l\'arbre au 40 écus. Croissance lente, entre-nœuds courts.' },
    { id: 11, category: 'coniferes', name: 'Cèdre bleu de l\'Atlas', image: 'assets/images/products/coniferes/cedre-bleu-de-l-atlas17825.jpg', price: 12900,
      description: 'Conifère conique à feuillage bleu très vif, surtout au printemps. En automne, cônes dressés cylindriques. Majestueux.' },
    { id: 12, category: 'coniferes', name: 'Cèdre du Japon Green Pearl', image: 'assets/images/products/coniferes/cedre-du-japon-green-pearl-22973.jpg', price: 1690,
      description: 'Conifère nain, formant une boule et à feuillage très dense aux nouvelles pousses vert tendre, puis vert sombre, virant au bronze en hiver.' },
    { id: 13, category: 'quercus', name: 'Chêne vert', image: 'assets/images/products/quercus/quercus-ilex-chene-vert-chene-faux-houx-yeuse.jpg', price: 599,
      description: 'Le Quercus ilex est originaire d\'Europe méridionale et d\'Afrique du Nord. Son feuillage vert persistant lui vaut le nom de Chêne vert et la ressemblance des feuilles avec les feuilles de houx commun (Ilex aquifolium) lui a donné ce nom vernaculaire de Chêne faux-houx.' },
    { id: 14, category: 'quercus', name: 'Chêne rouge \'Amérique', image: 'assets/images/products/quercus/quercus-rubra-chene-rouge-d-amerique-en-godet-forestier.jpg', price: 699,
      description: 'Le chêne rouge d\'Amérique (Quercus rubra L., syn. Quercus borealis Duroi) est un arbre appartenant à la section des chênes rouges (Lobatae) du genre Quercus de la famille des Fagacées1. Il s\'agit de l\'arbre symbole de l\'État du New Jersey et de l’Île-du-Prince-Édouard.' },
    { id: 15, category: 'quercus', name: 'Chêne des marais', image: 'assets/images/products/quercus/quercus-palustris-chene-des-marais.jpg', price: 499,
      description: 'Le Chêne des marais ou Chêne à épingles (Quercus palustris) est un arbre de la famille des Fagaceae originaire de l\'Est des États-Unis d\'Amérique et du Canada' },
    { id: 16, category: 'quercus', name: 'Chêne bambou', image: 'assets/images/products/quercus/quercus-myrsinifolia-chene-bambou-a-feuilles-de-myrsine.jpg', price: 965,
      description: 'Un arbuste rare, venu du pays du soleil levant. Pyramidal dans sa jeunesse, il prend son temps pour former une couronne arrondie, et déploie un feuillage élégant et mince, bronze au débourrement, vert en été, devenant pourpre en automne, persistant en hiver.' },
    { id: 17, category: 'quercus', name: 'Chêne asiatique', image: 'assets/images/products/quercus/quercus-phillyreoides-chene-a-feuilles-de-filaire-persistant.jpg', price: 886,
      description: 'Petit arbre globuleux qui fait aussi de jolies haies. Petites feuilles assez rondes, coriaces et épaisses, de couleur rouge orangé au débourrement. Il résiste très bien au froid ainsi qu\'à la sécheresse.' },
    { id: 18, category: 'arbres_fruitiers', name: 'Abricotier Bergeron', image: 'assets/images/products/arbres_fruitiers/abricotier_bergeron_m.jpg', price: 2290,
      description: 'Abricotier produisant des fruits d\'une couleur safran caractéristique. La chair est ferme et parfumée. Cette variété d\'abricotier forme des arbres vigoureux, très productifs et très résistants au gel. La récolte a lieu début août. ' },
    { id: 19, category: 'arbres_fruitiers', name: 'Cerisier Bigarreau Saint Antoine®', image: 'assets/images/products/arbres_fruitiers/Cerisier_Bigarreau_Saint_Antoine_Poisdel_m.jpg', price: 2190,
      description: 'Ce cerisier propose de gros fruits rouges sucrés en forme de cœur. Il offre une bonne production de fruits charnus et parfumés. Ses cerises se récoltent aux alentours du 13 juin, jour de la Saint Antoine de Padoue.' },
    { id: 20, category: 'arbres_fruitiers', name: 'Collection Les Nectarines', image: 'assets/images/products/arbres_fruitiers/collection_les_nectarines_m.jpg', price: 6750,
      description: 'Le nectarinier Nectarine Sanguine d´Auvergne donne de beaux fruits ronds à la peau rouge cardinal striée et à la chair rouge pourpre veinée de blanc, juteuse et fondante. C\'est une variété qui résiste très bien à la cloque.' },
    { id: 21, category: 'arbres_fruitiers', name: 'Collection Les fruits d´été', image: 'assets/images/products/arbres_fruitiers/collection_les_fruits_d_ete_m.jpg', price: 10490,
      description: 'L\'abricotier Rouge Tardif Delbard® vous donnera des fruits qui ont un bon équilibre entre le sucre et l´acidité et à la chair moelleuse et fondante.' },
    { id: 22, category: 'arbres_fruitiers', name: 'Prunier Mirabelle de Metz', image: 'assets/images/products/arbres_fruitiers/prunier_mirabelle_de_metz_m.jpg', price: 3190,
      description: 'Ce prunier produit de petits fruits jaune doré nuancé de rouge côté soleil. La chair délicieusement parfumée est très fine et très sucrée.' },
    { id: 23, category: 'arbres_fruitiers', name: 'Pluot Flavor Suprême®', image: 'assets/images/products/arbres_fruitiers/Pluot_FlavorSupreme_m.jpg', price: 3990,
      description: 'Gros fruit de la taille d\'une pêche au coloris vert-gris, à la chair, sanguine, juteuse,sucrée et parfumée. Délicieux en fruits frais, ils peuvent être utilisés en patisseries et en confitures. Pluot® a été obtenu par croisement de prune et d\'abricot.' },
    { id: 24, category: 'arbustes_fruitiers', name: 'Citronnier - h180 cm', image: 'assets/images/products/arbustes_fruitiers/acheter-plante-citronnier-h180-cm-arbre-fruitier-504148.jpg', price: 17990,
      description: 'Le citronnier est un arbre parfumé, robuste et facile à entretenir, nécessitant un emplacement ensoleillé mais protégé des fortes chaleurs estivales, une quantité d\'eau suffisante mais pas excessive, et un terreau sec en hiver.' },
    { id: 25, category: 'arbustes_fruitiers', name: 'Framboisier - arbuste fruitier', image: 'assets/images/products/arbustes_fruitiers/acheter-plante-framboisier-45cm-o13-arbuste-fruitier-225906.jpg', price: 2478,
      description: '' },
    { id: 26, category: 'arbustes_fruitiers', name: 'Kiwi arguta Issai - arbuste fruitier', image: 'assets/images/products/arbustes_fruitiers/acheter-plante-kiwi-arguta-issai-45cm-o13-arbuste-fruitier-plante-dexterieur-594186.jpg', price: 2640,
      description: 'La framboise "Rubus Idaeus Malling Promise" est une variété connue, auto-pollinisante, avec des fleurs blanches et des fruits rouges délicieux, cultivée de manière biologique dans un pot en plastique recyclé.' },
    { id: 27, category: 'arbustes_fruitiers', name: 'Murier navaho - arbuste fruitier', image: 'assets/images/products/arbustes_fruitiers/', price: 2640,
      description: 'Rubus Navaho® Bigandearly® est une variété de murier sans épines, très productive et produisant des mûres tout l\'été jusqu\'en octobre.' },
    { id: 28, category: 'arbustes_fruitiers', name: 'Vigne Pinot Noir - ↨65cm - Ø19 - arbuste fruitier', image: 'assets/images/products/arbustes_fruitiers/acheter-plante-vignepinot-noir-65cm-o19-arbuste-fruitier-749133.jpg', price: 4279,
      description: 'La vigne "Pinot Noir" est un cépage bleu qui produit du vin rouge et le raisin de Pixie Grape est un mutant naturel de Vitus Vinifera "Pinot Meunier" qui produit des petits raisins dès la première année.' },
    { id: 29, category: 'arbustes_fruitiers', name: 'Kumquat Fortunella- 45 cm - Ø15 - arbuste fruitier extérieur', image: 'assets/images/products/arbustes_fruitiers/acheter-plante-kumquat-fortunella-45-cm-o15-arbuste-fruitier-exterieur-214129.jpg', price: 957,
      description: 'Le kumquat est un arbuste fruitier d\'agrume robuste, produisant des fruits à consommer avec la peau, idéal en pot ou en pleine terre dans un endroit ensoleillé.' }
  ];

  constructor() { }

  getProducts() {
    return this.products;
  }
}
