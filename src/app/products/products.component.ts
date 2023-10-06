import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.less']
})
export class ProductsComponent {
  // TODO: faire un service pour récup les produits ?

  plants_truffiers: any[] = [
    { name: 'Chêne Vert Truffier Tuber Mélanosporum (quercus ilex)', image: 'assets/images/products/truffiers/chene-truffier-pubescent-tuber-melanosporum-quercus-pubescens.jpg', price: 15.95,
      description: 'Jeune plant truffier de chêne pubescent (Quercus pubescens) aussi appelé chêne blanc mycorhizé par tuber mélanosporum de 2 ans en godets anti-chignon de 450cc. Contrôlé et certifié par le CTIFL.' },
    { name: 'Chêne Truffier Pubescent Tuber Mélanosporum (quercus pubescens)', image: 'assets/images/truffiers/products/chene-vert-truffier-tuber-melanosporum-quercus-ilex.jpg', price: 24.99,
      description: 'Jeune plant truffier de chêne vert (Quercus ilex) mycorhizé par tuber mélanosporum de 2 ans en godets anti-chignon de 450cc. Contrôlé et certifié par le CTIFL.'},
    { name: 'Noisetier Commun Truffier Tuber Mélanosporum (corylus avellana)', image: 'assets/images/truffiers/products/noisetier-commun-truffier-tuber-melanosporum-corylus-avellana.jpg', price: 15.95,
      description: 'Jeune plant truffier de noisetier commun (corylus avellana) mycorhizé par tuber mélanosporum de 2 ans en godets anti-chignon de 450cc. Contrôlé et certifié par le CTIFL.' },
    { name: 'Chêne Truffier Kermes Tuber Mélanosporum (quercus coccifera)', image: 'assets/images/products/truffiers/chene-truffier-kermes-tuber-melanosporum-quercus-coccifera.jpg', price: 15.95,
      description: 'Jeune plant truffier de chêne kermès (Quercus coccifera) ou chêne des garrigues mycorhizé par tuber mélanosporum de 2 ans en godets anti-chignon de 450cc. Contrôlé et certifié par le CTIFL.' },
    { name: 'Charme Truffier Tuber Mélanosporum (carpinus betulus)', image: 'assets/images/products/truffiers/charme-truffier-tuber-melanosporum-carpinus-betulus.jpg', price: 24.99,
      description: 'Jeune plant truffier de charme truffier (carpinus betulus) mycorhizé par tuber mélanosporum de 2 ans en godets anti-chignon de 450cc. Contrôlé et certifié par le CTIFL.' },
    { name: 'Noisetier Truffier Byzance Tuber Mélanosporum (corylus colurna)', image: 'assets/images/products/truffiers/noisetier-truffier-byzance-tuber-melanosporum-corylus-colurna.jpg', price: 15.95,
      description: '' },
    { name: 'Pack de Plants Truffiers spécial Uncinatum', image: 'assets/images/products/truffiers/pack-de-plants-truffiers-special-uncinatum.jpg', price: 154.00,
      description: 'NOUVEAU ! On vous propose désormais des packs truffiers spécial Uncinatum avec une dose d\'engrais retard spécifique (type basacote) pour chaque plants.' }
  ];

  coniferes: any[] = [
    { name: 'Arbre aux 40 écus', image: 'assets/images/products/coniferes/arbre-aux-40-ecus17922.jpg', price: 26.50,
      description: 'Gingko biloba est un arbre de très grande longévité (plus de 1 000 ans). Son port d\'abord dressé, s\'étale à partir de l\'âge de 20 ans. Les feuilles caduques, en éventail, à long pétiole, vert vif, prennent une magnifique couleur jaune d\'or en automne.' },
    { name: 'Arbre aux 40 écus Eiffel', image: 'assets/images/products/coniferes/arbre-aux-40-ecus-eiffel-23076.jpg', price: 245.00,
      description: 'Gingko fastigié, ventru à la base, rétréci au sommet. Superbes couleurs d\'automne, comme tous les Ginkgo.' },
    { name: 'Arbre aux 40 écus Fastigiata Blagon', image: 'assets/images/products/coniferes/arbre-aux-40-ecus-fastigiata-blagon-4814.jpg', price: 69.00,
      description: 'Une nouvelle forme colonnaire, compacte et mâle (pas de fruits malodorant) de l\'arbre au 40 écus. Croissance lente, entre-nœuds courts.' },
    { name: 'Cèdre bleu de l\'Atlas', image: 'assets/images/products/coniferes/cedre-bleu-de-l-atlas17825.jpg', price: 129.00,
      description: 'Conifère conique à feuillage bleu très vif, surtout au printemps. En automne, cônes dressés cylindriques. Majestueux.' },
    { name: 'Cèdre du Japon Green Pearl', image: 'assets/images/products/coniferes/cedre-du-japon-green-pearl-22973.jpg', price: 16.90,
      description: 'Conifère nain, formant une boule et à feuillage très dense aux nouvelles pousses vert tendre, puis vert sombre, virant au bronze en hiver.' }
  ];

  quercus: any[] = [
    { name: 'Chêne vert', image: 'assets/images/products/quercus/quercus-ilex-chene-vert-chene-faux-houx-yeuse.jpg', price: ,
      description: 'Le Quercus ilex est originaire d\'Europe méridionale et d\'Afrique du Nord. Son feuillage vert persistant lui vaut le nom de Chêne vert et la ressemblance des feuilles avec les feuilles de houx commun (Ilex aquifolium) lui a donné ce nom vernaculaire de Chêne faux-houx.' },
    { name: 'Chêne rouge \'Amérique', image: 'assets/images/products/quercus/quercus-rubra-chene-rouge-d-amerique-en-godet-forestier.jpg', price: 6.99,
      description: 'Le chêne rouge d\'Amérique (Quercus rubra L., syn. Quercus borealis Duroi) est un arbre appartenant à la section des chênes rouges (Lobatae) du genre Quercus de la famille des Fagacées1. Il s\'agit de l\'arbre symbole de l\'État du New Jersey et de l’Île-du-Prince-Édouard.' },
    { name: 'Chêne des marais', image: 'assets/images/products/quercus/quercus-palustris-chene-des-marais.jpg', price: 4.99,
      description: 'Le Chêne des marais ou Chêne à épingles (Quercus palustris) est un arbre de la famille des Fagaceae originaire de l\'Est des États-Unis d\'Amérique et du Canada' },
    { name: 'Chêne bambou', image: 'assets/images/products/quercus/quercus-myrsinifolia-chene-bambou-a-feuilles-de-myrsine.jpg', price: 9.65,
      description: 'Un arbuste rare, venu du pays du soleil levant. Pyramidal dans sa jeunesse, il prend son temps pour former une couronne arrondie, et déploie un feuillage élégant et mince, bronze au débourrement, vert en été, devenant pourpre en automne, persistant en hiver.' },
    { name: 'Chêne asiatique', image: 'assets/images/products/quercus/quercus-phillyreoides-chene-a-feuilles-de-filaire-persistant.jpg', price: 8.86,
      description: 'Petit arbre globuleux qui fait aussi de jolies haies. Petites feuilles assez rondes, coriaces et épaisses, de couleur rouge orangé au débourrement. Il résiste très bien au froid ainsi qu\'à la sécheresse.' }
  ];

  arbres_fruitiers: any[] = [
    { name: 'Abricotier Bergeron', image: 'assets/images/products/arbres_fruitiers/abricotier_bergeron_m.jpg', price: 22.90,
      description: 'Abricotier produisant des fruits d\'une couleur safran caractéristique. La chair est ferme et parfumée. Cette variété d\'abricotier forme des arbres vigoureux, très productifs et très résistants au gel. La récolte a lieu début août. ' },
    { name: 'Cerisier Bigarreau Saint Antoine®', image: 'assets/images/products/arbres_fruitiers/Cerisier_Bigarreau_Saint_Antoine_Poisdel_m.jpg', price: 21.90,
      description: 'Ce cerisier propose de gros fruits rouges sucrés en forme de cœur. Il offre une bonne production de fruits charnus et parfumés. Ses cerises se récoltent aux alentours du 13 juin, jour de la Saint Antoine de Padoue.' },
    { name: 'Collection Les Nectarines', image: 'assets/images/products/arbres_fruitiers/collection_les_nectarines_m.jpg', price: 67.50,
      description: 'Le nectarinier Nectarine Sanguine d´Auvergne donne de beaux fruits ronds à la peau rouge cardinal striée et à la chair rouge pourpre veinée de blanc, juteuse et fondante. C\'est une variété qui résiste très bien à la cloque.' },
    { name: 'Collection Les fruits d´été', image: 'assets/images/products/arbres_fruitiers/collection_les_fruits_d_ete_m.jpg', price: 104.90,
      description: 'L\'abricotier Rouge Tardif Delbard® vous donnera des fruits qui ont un bon équilibre entre le sucre et l´acidité et à la chair moelleuse et fondante.' },
    { name: 'Prunier Mirabelle de Metz', image: 'assets/images/products/arbres_fruitiers/prunier_mirabelle_de_metz_m.jpg', price: 31.90,
      description: 'Ce prunier produit de petits fruits jaune doré nuancé de rouge côté soleil. La chair délicieusement parfumée est très fine et très sucrée.' },
    { name: 'Pluot Flavor Suprême®', image: 'assets/images/products/arbres_fruitiers/Pluot_FlavorSupreme_m.jpg', price: 39.90,
      description: 'Gros fruit de la taille d\'une pêche au coloris vert-gris, à la chair, sanguine, juteuse,sucrée et parfumée. Délicieux en fruits frais, ils peuvent être utilisés en patisseries et en confitures. Pluot® a été obtenu par croisement de prune et d\'abricot.' },
  ];

  arbustes_fruitiers: any[] = [
    { name: '', image: 'assets/images/products/arbrustes_fruitiers/', price: ,
      description: '' }
  ];
}
