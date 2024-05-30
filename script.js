//Aqua

//remove already picked answers
//give both answer the same height
//color answers
//paddnigTB to buttons?
//randomize ab_answers order?
//hide the encoding
//get rid of his questions
// " ."
//fix @size

var data = JSON.parse(decodeURIComponent(`%5B%7B%22question%22%3A%20%22Dans%20quelle%20%C3%A9nergie%20investir%3F%22%2C%20%22answer_a%22%3A%20%22L%E2%80%99%C3%A9nergie%20nucl%C3%A9aire.%22%2C%20%22answer_b%22%3A%20%22L%E2%80%99%C3%A9nergie%20solaire.%22%2C%20%22correct_answer%22%3A%20%22a%22%2C%20%22explanation%22%3A%20%22c%E2%80%99est%20bien%20plus%20rentable.%22%7D%2C%20%7B%22question%22%3A%20%22Comment%20g%C3%A9rer%20vos%20ressources%20en%20eau%3F%22%2C%20%22answer_a%22%3A%20%22Purifier%20votre%20eau%2C%20%C3%A0%20prix%20fort.%22%2C%20%22answer_b%22%3A%20%22Utiliser%20votre%20eau%20impure%2C%20%C3%A0%20prix%20nul.%22%2C%20%22correct_answer%22%3A%20%22b%22%2C%20%22explanation%22%3A%20%22l%E2%80%99argent%20vaut%20la%20sant%C3%A9.%22%7D%2C%20%7B%22question%22%3A%20%22Quelles%20pratiques%20agricoles%20adopter%3F%22%2C%20%22answer_a%22%3A%20%22Des%20pratiques%20agricoles%20biologiques%20et%20durables.%22%2C%20%22answer_b%22%3A%20%22Une%20agriculture%20intensive.%22%2C%20%22correct_answer%22%3A%20%22b%22%2C%20%22explanation%22%3A%20%22cette%20forme%20d%E2%80%99agriculture%20est%20bien%20plus%20rentable%2C%20au%20faible%20prix%20de%20la%20nature.%22%7D%2C%20%7B%22question%22%3A%20%22Comment%20g%C3%A9rer%20le%20changement%20climatique%3F%22%2C%20%22answer_a%22%3A%20%22Employer%20des%20actions%20imm%C3%A9diates%20pour%20r%C3%A9duire%20les%20%C3%A9missions%20de%20carbone%20sur%20le%20long%20terme.%22%2C%20%22answer_b%22%3A%20%22Manipuler%20l%E2%80%99opinion%20publique%20via%20la%20presse%20pour%20ignorer%20le%20%E2%80%9Cprobl%C3%A8me%E2%80%9D.%22%2C%20%22correct_answer%22%3A%20%22b%22%2C%20%22explanation%22%3A%20%22c%E2%80%99est%20bien%20plus%20rentable%20d%E2%80%99ignorer%20la%20question%2C%20de%20toutes%20fa%C3%A7ons%2C%20vous%20serez%20mort%20lorsque%20le%20r%C3%A9chauffement%20climatique%20sera%20un%20probl%C3%A8me.%22%7D%2C%20%7B%22question%22%3A%20%22Quelles%20mesures%20adopter%20au%20%20niveau%20du%20traitement%20des%20d%C3%A9chets%3F%22%2C%20%22answer_a%22%3A%20%22Recycler%20les%20d%C3%A9chets%20de%20mani%C3%A8re%20durable.%22%2C%20%22answer_b%22%3A%20%22Les%20vider%20dans%20des%20d%C3%A9charges%20en%20Inde%20sans%20jamais%20les%20recycler.%22%2C%20%22correct_answer%22%3A%20%22b%22%2C%20%22explanation%22%3A%20%22l%E2%80%99inde%2C%20c%E2%80%99est%20loin%2C%20donc%20cette%20solution%20ne%20g%C3%A2che%20pas%20vos%20paysages%2C%20vous%20co%C3%BBte%20bien%20moins%20cher%20et%20est%20plus%20rapide.%22%7D%2C%20%7B%22question%22%3A%20%22Quel%20moyen%20de%20transport%20encourager%3F%22%2C%20%22answer_a%22%3A%20%22La%20libre%20circulation%20des%20v%C3%A9hicules%20%C3%A0%20combustion.%22%2C%20%22answer_b%22%3A%20%22Les%20transports%20en%20commun%20et%20les%20v%C3%A9hicules%20%C3%A9lectriques%20.%22%2C%20%22correct_answer%22%3A%20%22a%22%2C%20%22explanation%22%3A%20%22les%20v%C3%A9hicules%20%C3%A0%20combustion%20sont%20le%20moteur%20principal%20de%20la%20formidable%20%C3%A9conomie%20qu%E2%80%99est%20celle%20des%20%C3%A9nergies%20fossiles%2C%20bien%20plus%20rentable%20que%20les%20%C3%A9nergies%20renouvelables.%22%7D%2C%20%7B%22question%22%3A%20%22Quelle%20politique%20de%20gestion%20des%20espaces%20naturels%20adopter%3F%22%2C%20%22answer_a%22%3A%20%22Les%20exploiter%20pour%20le%20d%C3%A9veloppement%20%C3%A9conomique.%22%2C%20%22answer_b%22%3A%20%22Encourager%20la%20conservation%20des%20espaces%20naturels.%22%2C%20%22correct_answer%22%3A%20%22a%22%2C%20%22explanation%22%3A%20%22la%20conservation%20des%20espaces%20naturels%20co%C3%BBte%20de%20l'argent%2C%20leur%20exploitation%20en%20rapporte%2C%20le%20calcul%20est%20vite%20fait.%22%7D%2C%20%7B%22question%22%3A%20%22Quelle%20politique%20alimentaire%20adopter%3F%22%2C%20%22answer_a%22%3A%20%22Favoriser%20l%E2%80%99importation%20de%20produits%20alimentaires%20%C3%A9trangers%20de%20mauvaise%20qualit%C3%A9.%22%2C%20%22answer_b%22%3A%20%22Favoriser%20la%20production%20de%20produits%20alimentaires%20locales%20et%20de%20qualit%C3%A9.%22%2C%20%22correct_answer%22%3A%20%22a%22%2C%20%22explanation%22%3A%20%22si%20c%E2%80%99est%20de%20mauvaise%20qualit%C3%A9%2C%20%C3%A7a%20ne%20co%C3%BBte%20pas%20cher%2C%20l%E2%80%99argent%20vaut%20la%20sant%C3%A9.%22%7D%2C%20%7B%22question%22%3A%20%22Quel%20choix%20de%20gestion%20du%20plastique%20s%C3%A9lectionner%3F%22%2C%20%22answer_a%22%3A%20%22Bannir%20les%20plastiques%20et%20les%20remplacer%20par%20des%20alternatives%20vertes.%22%2C%20%22answer_b%22%3A%20%22Utiliser%20tous%20les%20plastiques%20et%20polym%C3%A8res%20disponibles.%22%2C%20%22correct_answer%22%3A%20%22b%22%2C%20%22explanation%22%3A%20%22le%20plastique%20est%20plus%20solide%2C%20durable%2C%20moins%20cher%2C%20%C3%A9tanche%2C%20id%C3%A9al.%22%7D%2C%20%7B%22question%22%3A%20%22Comment%20g%C3%A9rer%20la%20pollution%20atmosph%C3%A9rique%3F%22%2C%20%22answer_a%22%3A%20%22Limiter%20les%20%C3%A9missions%20industrielles%20via%20des%20normes%20strictes.%22%2C%20%22answer_b%22%3A%20%22Ignorer%20le%20probl%C3%A8me%20et%20soudoyer%20les%20m%C3%A9dias%20pour%20calmer%20le%20grand%20public.%22%2C%20%22correct_answer%22%3A%20%22b%22%2C%20%22explanation%22%3A%20%22les%20normes%20strictes%20sont%20l%E2%80%99ennemi%20du%20progr%C3%A8s.%22%7D%2C%20%7B%22question%22%3A%20%22Dans%20quelle%20technologie%20investir%3F%22%2C%20%22answer_a%22%3A%20%22La%20purification%20de%20l%E2%80%99eau%2C%20(la%20d%C3%A9flation%20de%20son%20%20prix).%22%2C%20%22answer_b%22%3A%20%22La%20fusion%20nucl%C3%A9aire.%22%2C%20%22correct_answer%22%3A%20%22b%22%2C%20%22explanation%22%3A%20%22tenir%20le%20Soleil%20dans%20la%20paume%20de%20votre%20main%20vaut%20largement%20la%20soif%20mondiale.%22%7D%2C%20%7B%22question%22%3A%20%22Comment%20restreindre%20la%20consommation%20d%E2%80%99eau%20individuelle%3F%22%2C%20%22answer_a%22%3A%20%22Employer%20des%20%20mesures%20strictes%20pour%20limiter%20la%20consommation%20d'eau%20individuelle.%22%2C%20%22answer_b%22%3A%20%22Employer%20une%20approche%20plus%20souple%20qui%20encourage%20la%20responsabilit%C3%A9%20individuelle%22%2C%20%22correct_answer%22%3A%20%22a%22%2C%20%22explanation%22%3A%20%22l%E2%80%99eau%20n%E2%80%99est%20pas%20gratuite%2C%20il%20faut%20savoir%20l%E2%80%99%C3%A9conomiser.%22%7D%2C%20%7B%22question%22%3A%20%22Face%20%C3%A0%20l'%C3%A9puisement%20des%20ressources%20naturelles%2C%20quelle%20politique%20adopter%3F%22%2C%20%22answer_a%22%3A%20%22La%20%20pr%C3%A9servation%20stricte%20et%20contr%C3%B4l%C3%A9e%20des%20espaces%20naturels.%22%2C%20%22answer_b%22%3A%20%22L%E2%80%99exploitation%20maximale%20pour%20soutenir%20la%20croissance%20%C3%A9conomique.%22%2C%20%22correct_answer%22%3A%20%22b%22%2C%20%22explanation%22%3A%20%22la%20croissance%20%C3%A9conomique%20est%20bien%20plus%20valable%20que%20l'environnement%2C%20il%20suffit%20de%20croiser%20les%20doigts%20et%20d'esp%C3%A9rer%20trouver%20de%20larges%20quantit%C3%A9%20de%20ressources%20naturelles.%22%7D%2C%20%7B%22question%22%3A%20%22Comment%20g%C3%A9rer%20la%20d%C3%A9forestation%3F%22%2C%20%22answer_a%22%3A%20%22Via%20des%20politiques%20de%20reboisement%20massif.%22%2C%20%22answer_b%22%3A%20%22Via%20des%20mesures%20de%20conservation%20des%20for%C3%AAts%20existantes%20.%22%2C%20%22correct_answer%22%3A%20%22a%22%2C%20%22explanation%22%3A%20%22le%20reboisement%20permet%20de%20continuer%20l%E2%80%99exploitation%20en%20masse%20des%20for%C3%AAts%20dans%20une%20certaine%20mesure%2C%20l%C3%A0%20o%C3%B9%20la%20conservation%20de%20for%C3%AAts%20ne%20rapporte%20rien%2C%20et%2C%20au%20contraire%2C%20co%C3%BBte%20de%20l%E2%80%99argent.%22%7D%2C%20%7B%22question%22%3A%20%22Que%20faire%20de%20la%20pollution%20lumineuse%3F%22%2C%20%22answer_a%22%3A%20%22R%C3%A9duire%20la%20quantit%C3%A9%20de%20pollution%20lumineuse%2C%20%C3%A0%20prix%20fort.%22%2C%20%22answer_b%22%3A%20%22Ne%20rien%20faire%2C%20au%20prix%20de%20l%E2%80%99%C3%A9cosyst%C3%A8me.%22%2C%20%22correct_answer%22%3A%20%22b%22%2C%20%22explanation%22%3A%20%22le%20jour%20de%20nuit%2C%20c%E2%80%99est%20pratique%2C%20c'est%20rentable%2C%20l%E2%80%99argent%20vaut%20l%E2%80%99%C3%A9cosyst%C3%A8me%20.%22%7D%2C%20%7B%22question%22%3A%20%22Quel%20type%20de%20tourisme%20privil%C3%A9gier%3F%22%2C%20%22answer_a%22%3A%20%22L'%C3%A9cotourisme%20.%22%2C%20%22answer_b%22%3A%20%22Les%20complexes%20touristiques%20traditionnels.%22%2C%20%22correct_answer%22%3A%20%22b%22%2C%20%22explanation%22%3A%20%22contraint%20par%20l'environnement%2C%20l%E2%80%99%C3%A9cotourisme%20rapporte%20moins%2C%20les%20safaris%20en%20h%C3%A9licopt%C3%A8re%2C%20les%20croisi%C3%A8res%20en%20sous-marins%2C%20les%20courses%20de%20voitures%20de%20sport%2C%20%C3%A7a%20sa%20vend%20du%20r%C3%AAve.%22%7D%2C%20%7B%22question%22%3A%20%22Comment%20adresser%20la%20question%20des%20pesticides%3F%22%2C%20%22answer_a%22%3A%20%22Mettre%20en%20%C5%93uvre%20des%20restrictions%20strictes%20sur%20l'utilisation%20des%20pesticides%20.%22%2C%20%22answer_b%22%3A%20%22R%C3%A9pandre%20les%20pesticides%20comme%20s%E2%80%99il%20en%20pleuvait.%22%2C%20%22correct_answer%22%3A%20%22b%22%2C%20%22explanation%22%3A%20%22la%20question%20est%20vite%20r%C3%A9pondue%2C%20les%20pesticides%20rapportent%20infiniment%20plus%2C%20pour%20peu%20d%E2%80%99avoir%20des%20graines%20OGM%20sous%20la%20main%2C%20c%E2%80%99est%20un%20univers%20de%20possibilit%C3%A9%20qui%20s%E2%80%99offre%20%C3%A0%20vous.%22%7D%2C%20%7B%22question%22%3A%20%22Quel%20environnement%20prioriser%3F%22%2C%20%22answer_a%22%3A%20%22Privil%C3%A9gier%20la%20restauration%20des%20%C3%A9cosyst%C3%A8mes%20d%C3%A9grad%C3%A9s.%22%2C%20%22answer_b%22%3A%20%22Privil%C3%A9gier%20la%20protection%20des%20zones%20encore%20intactes.%22%2C%20%22correct_answer%22%3A%20%22c%22%2C%20%22explanation%22%3A%20%22question%20pi%C3%A8ge%2C%20d%C3%A9laisser%20les%20deux%20est%20largement%20plus%20rentable.%22%7D%2C%20%7B%22question%22%3A%20%22Comment%20g%C3%A9rer%20l'expansion%20urbaine%3F%22%2C%20%22answer_a%22%3A%20%22Encourager%20l%E2%80%99exode%20rural%20pour%20une%20plus%20faible%20densit%C3%A9%20de%20population.%22%2C%20%22answer_b%22%3A%20%22Encourager%20la%20concentration%20dans%20les%20grandes%20villes.%22%2C%20%22correct_answer%22%3A%20%22b%22%2C%20%22explanation%22%3A%20%22%C3%A7a%20encouragera%20les%20in%C3%A9galit%C3%A9s%20sociales%20et%20le%20d%C3%A9veloppement%20de%20ces%20villes%2C%20dont%20beaucoup%20d%E2%80%99argent%20est%20%C3%A0%20tirer.%22%7D%2C%20%7B%22question%22%3A%20%22Que%20faire%20de%20l%E2%80%99usage%20de%20produits%20dangereux%20dans%20l%E2%80%99agriculture%3F%22%2C%20%22answer_a%22%3A%20%22Les%20utiliser.%22%2C%20%22answer_b%22%3A%20%22Les%20prohiber.%22%2C%20%22correct_answer%22%3A%20%22b%22%2C%20%22explanation%22%3A%20%22ils%20sont%20clairement%20plus%20rentables%2C%20l%E2%80%99argent%20vaut%20la%20sant%C3%A9.%22%7D%2C%20%7B%22question%22%3A%20%22Seriez-vous%20en%20faveur%20de%20la%20cr%C3%A9ation%20de%20zones%20prot%C3%A9g%C3%A9es%20pour%20la%20pr%C3%A9servation%20de%20la%20faune%20et%20de%20la%20flore%2C%20limitant%20les%20possibilit%C3%A9s%20de%20d%C3%A9veloppement%20%C3%A9conomique%3F%22%2C%20%22answer_a%22%3A%20%22Oui.%22%2C%20%22answer_b%22%3A%20%22Non.%22%2C%20%22correct_answer%22%3A%20%22b%22%2C%20%22explanation%22%3A%20%22pourquoi%20faire%20%C3%A7a%3F%20Si%20vous%20entendez%20%E2%80%9Climitant%20les%20possibilit%C3%A9s%20de%20d%C3%A9veloppement%20%C3%A9conomique%E2%80%9D%2C%20vous%20dites%20non.%22%7D%2C%20%7B%22question%22%3A%20%22Que%20faire%20des%20%C3%A9cosyst%C3%A8mes%20d%C3%A9grad%C3%A9s%3F%22%2C%20%22answer_a%22%3A%20%22Reforester.%22%2C%20%22answer_b%22%3A%20%22Miner%20l%E2%80%99or%20et%20le%20p%C3%A9trole%20de%20la%20zone.%22%2C%20%22correct_answer%22%3A%20%22b%22%2C%20%22explanation%22%3A%20%22miner%20l%E2%80%99or%20et%20le%20p%C3%A9trole%20est%20une%20mani%C3%A8re%20efficace%20de%20vous%20enrichir.%20Les%20arbres%20existent%20depuis%20des%20millions%20d%E2%80%99ann%C3%A9es%2C%20ils%20finiront%20bien%20par%20repousser%20%C3%A0%20un%20moment%20ou%20un%20autre.%22%7D%2C%20%7B%22question%22%3A%20%22Que%20feriez-vous%20au%20sujet%20de%20la%20p%C3%AAche%3F%22%2C%20%22answer_a%22%3A%20%22Construire%20des%20r%C3%A9serves%20pour%20prot%C3%A9ger%20la%20poiscaille.%22%2C%20%22answer_b%22%3A%20%22Encourager%20la%20p%C3%AAche%20pour%20d%C3%A9velopper%20l%E2%80%99%C3%A9conomie.%22%2C%20%22correct_answer%22%3A%20%22b%22%2C%20%22explanation%22%3A%20%22encourager%20la%20p%C3%AAche%20favorisera%20le%20d%C3%A9veloppement%20%C3%A9conomique%20et%20attirera%20les%20touristes%20amateurs%20de%20p%C3%AAche%2C%20donc%20d%C3%A9veloppera%20aussi%20le%20tourisme.%22%7D%2C%20%7B%22question%22%3A%20%22Comment%20pourrions-nous%20encourager%20l'innovation%20technologique%20pour%20r%C3%A9soudre%20les%20probl%C3%A8mes%20environnementaux%20sp%C3%A9cifiques%20rencontr%C3%A9s%2C%20tels%20que%20la%20gestion%20des%20d%C3%A9chets%20ou%20la%20d%C3%A9gradation%20des%20sols%3F%22%2C%20%22answer_a%22%3A%20%22Construire%20des%20stations%20d%E2%80%99%C3%A9purations%20ou%20de%20traitement%20pour%20recycler%20nos%20d%C3%A9chets.%22%2C%20%22answer_b%22%3A%20%22Construire%20des%20usines%20afin%20de%20nettoyer%20votre%20sol%20de%20ses%20ressources%20pr%C3%A9cieuses.%22%2C%20%22correct_answer%22%3A%20%22b%22%2C%20%22explanation%22%3A%20%22extraire%20les%20ressources%20rapporte%20plus%20d%E2%80%99argent%20que%20%C3%A7a%20n%E2%80%99en%20co%C3%BBte%2C%20alors%20qu%E2%80%99%C3%A9purer%20et%20recycler%20c%E2%80%99est%20cher.%22%7D%2C%20%7B%22question%22%3A%20%22Quelles%20mesures%20de%20conservation%20des%20%C3%A9cosyst%C3%A8mes%20aquatiques%20adopter%3F%22%2C%20%22answer_a%22%3A%20%22L%E2%80%99exploitation%20intensive%20et%20syst%C3%A9matique%20des%20ressources%20naturelles.%22%2C%20%22answer_b%22%3A%20%22La%20pr%C3%A9servation%20des%20%C3%A9cosyst%C3%A8mes%20aquatiques%20de%20mani%C3%A8re%20durable.%22%2C%20%22correct_answer%22%3A%20%22a%22%2C%20%22explanation%22%3A%20%22le%20profit%20ou%20la%20soumission%20%C3%A0%20la%20nature%2C%20le%20choix%20est%20vite%20fait.%22%7D%2C%20%7B%22question%22%3A%20%22De%20quelles%20technologies%20encourager%20le%20d%C3%A9veloppement%20pour%20la%20%20capture%20et%20le%20stockage%20du%20carbone%20pour%20r%C3%A9duire%20les%20%C3%A9missions%20de%20CO2%20%3F%22%2C%20%22answer_a%22%3A%20%22Le%20photovolta%C3%AFque%2C%20m%C3%AAme%20si%20le%20nom%20n%E2%80%99inspire%20pas%20confiance.%22%2C%20%22answer_b%22%3A%20%22Le%20charbon%2C%20il%20faut%20combattre%20le%20feu%20par%20le%20feu.%22%2C%20%22correct_answer%22%3A%20%22b%22%2C%20%22explanation%22%3A%20%22vous%20atteindrez%20un%20niveau%20technologique%20bien%20sup%C3%A9rieur%20%C3%A0%20ce%20que%20les%20gauchistes%20vous%20promettent.%22%7D%2C%20%7B%22question%22%3A%20%22%C3%80%20quelle%20point%20%C3%AAtre%20strict%20envers%20les%20r%C3%A9glementation%20des%20zones%20humides%20et%20des%20%C3%A9cosyst%C3%A8mes%20c%C3%B4tiers%3F%22%2C%20%22answer_a%22%3A%20%22Employer%20des%20mesures%20de%20d%C3%A9veloppement%20cibl%C3%A9%20pour%20stimuler%20l'%C3%A9conomie%20locale%3F%22%2C%20%22answer_b%22%3A%20%22Privil%C3%A9gier%20la%20pr%C3%A9servation%20des%20%C3%A9cosyst%C3%A8mes%20c%C3%B4tiers.%22%2C%20%22correct_answer%22%3A%20%22a%22%2C%20%22explanation%22%3A%20%22quand%20vous%20entendez%20%E2%80%9Cstimuler%20l'%C3%A9conomie%E2%80%9D%2C%20vous%20dites%20oui.%22%7D%2C%20%7B%22question%22%3A%20%22Vaut-il%20mieux%20promouvoir%20la%20mise%20en%20place%20de%20syst%C3%A8mes%20de%20production%20alimentaire%20verticale%20pour%20maximiser%20l'utilisation%20de%20l'espace%20et%20r%C3%A9duire%20la%20d%C3%A9forestation%3F%22%2C%20%22answer_a%22%3A%20%22Oui.%22%2C%20%22answer_b%22%3A%20%22Non.%22%2C%20%22correct_answer%22%3A%20%22c%22%2C%20%22explanation%22%3A%20%22question%20pi%C3%A8ge%2C%20il%20vaut%20mieux%20mettre%20en%20place%20des%20syst%C3%A8mes%20de%20production%20alimentaire%20verticale%2C%20ET%2C%20d%C3%A9forester.%22%7D%2C%20%7B%22question%22%3A%20%22Quelles%20normes%20strictes%20en%20mati%C3%A8re%20de%20recyclage%20des%20d%C3%A9chets%20%C3%A9lectroniques%20pour%20r%C3%A9duire%20la%20pollution%20li%C3%A9e%20aux%20%C3%A9quipements%20obsol%C3%A8tes%20adopter%3F%22%2C%20%22answer_a%22%3A%20%22Imposer%20une%20amende%20de%203%25%20du%20chiffre%20d'affaires%20d%E2%80%99une%20entreprise%20qui%20jetterait%20sans%20scrupule%20ses%20d%C3%A9chets%20obsol%C3%A8tes.%22%2C%20%22answer_b%22%3A%20%22Prendre%20tous%20les%20%C3%A9quipements%20obsol%C3%A8tes%20des%20entreprises%2C%20en%20faire%20une%20%C3%AEle%20dans%20la%20mer%20et%20y%20abriter%20les%20manchots.%22%2C%20%22correct_answer%22%3A%20%22b%22%2C%20%22explanation%22%3A%20%22les%20manchots%20m%C3%A9ritent%20d%E2%80%99%C3%AAtre%20sauv%C3%A9s.%22%7D%2C%20%7B%22question%22%3A%20%22Que%20faire%20au%20sujet%20des%20espaces%20verts%20%3F%22%2C%20%22answer_a%22%3A%20%22En%20construire%20pleins%2C%20et%20regarder%20avec%20fiert%C3%A9%20votre%20d%C3%A9marche%20%C3%A9cologique.%22%2C%20%22answer_b%22%3A%20%22Planter%20des%20for%C3%AAts%20luxuriantes%20afin%20de%20contenter%20les%20gauchistes%2C%20puis%20couper%20les%20arbres%20afin%20de%20faire%20du%20charbon%20et%20exploiter%20le%20sol%20aurif%C3%A8re.%22%2C%20%22correct_answer%22%3A%20%22b%22%2C%20%22explanation%22%3A%20%22%20Construire%20pour%20ne%20rien%20en%20faire%20ne%20sert%20%C3%A0%20rien.%20Qui%20se%20fiche%20du%20bonheur%20du%20peuple%20%3F%22%7D%2C%20%7B%22question%22%3A%20%22Employer%20des%20politiques%20de%20protection%20des%20corridors%20biologiques%20pour%20favoriser%20la%20migration%20des%20esp%C3%A8ces%3F%22%2C%20%22answer_a%22%3A%20%22Oui.%22%2C%20%22answer_b%22%3A%20%22Non.%22%2C%20%22correct_answer%22%3A%20%22a%22%2C%20%22explanation%22%3A%20%22ces%20%E2%80%9Ccorridors%20biologiques%E2%80%9D%20co%C3%BBtent%20cher%2C%20rapportent%20peu%2C%20et%20g%C3%A2chent%20nos%20belles%20autoroutes.%22%7D%2C%20%7B%22question%22%3A%20%22Que%20faire%20au%20sujet%20de%20l%E2%80%99immigration%20de%20masse%20%3F%22%2C%20%22answer_a%22%3A%20%22Les%20accueillir%2C%20leur%20permettre%20l%E2%80%99acc%C3%A8s%20au%20allocations%20familiales%2C%20%C3%A0%20l'assistance%20juridique%20m%C3%AAme%20pour%20ceux%20qui%20sont%20en%20situation%20irr%C3%A9guli%C3%A8re%2C%20%20et%20essayer%20de%20banaliser%20les%20crimes%20qu%E2%80%99ils%20commettent%20aux%20cris%20de%20leur%20religion%20impie%2C%20comme%20lorsqu%E2%80%99ils%20tueront%20un%20certain%20Samuel%20Chapati.%22%2C%20%22answer_b%22%3A%20%22Les%20renvoyer%20chez%20eux%20mano%20a%20mano%2C%20ils%20n%E2%80%99ont%20rien%20%C3%A0%20faire%20chez%20nous%2C%20surtout%20ceux%20qui%20viennent%20pour%20critiquer%20nos%20institutions%20comme%20la%20police%20ou%20les%20pompiers.%20Ajoutez%20%C3%A0%20%C3%A7a%20le%20bruit%20et%20l%E2%80%99odeur%2C%20il%20ferait%20mieux%20vivre%20dans%20un%20bidonville%20en%20Inde.%22%2C%20%22correct_answer%22%3A%20%22b%22%2C%20%22explanation%22%3A%20%22on%20veut%20pouvoir%20brandir%20des%20banni%C3%A8res%20aux%20couleurs%20de%20notre%20pays%20sans%20se%20faire%20traiter%20de%20fascite.%22%7D%5D`));

questions_number = data.length;

let fading_delay = 0.75;

button = document.getElementById("button");
p = document.getElementById("question");
box = document.getElementById("box");
dé = document.getElementById("dé");

question = null;
answer_a = null;
answer_b = null;
correct_answer = null;
explaination = null;

answer = null;
user_answered = false;

user_rolled = false;
rolling = false;

function add_to_box(element, className, text, id = "") {

  aqua = document.createElement(element);
  aqua.className = className;
  aqua.textContent = text;
  aqua.id = id;

  box.appendChild(aqua);

  return (aqua);

}

function display_result(nswr) {

  if (user_answered == true) {
    return (null);
  }

  user_answered = true;
  box.style.paddingBottom = "0%";

  answer_a.style.cursor = "default";
  answer_b.style.cursor = "default";

  button.style.cursor = "pointer";

  if (nswr == current_q_data.correct_answer) {
    aqua = add_to_box("h6", "to_center", "Bonne réponse, " + current_q_data.explanation);
    return (aqua);
  }
  aqua = add_to_box("h6", "to_center", "Mauvaise réponse, " + current_q_data.explanation);
  return (aqua);
}

function ddddduel() {

  if (button.style.cursor == "default") {
    return null;
  }

  button.style.cursor = "default";

  n = parseInt(Math.random() * questions_number);
  //n = 0;
  current_q_data = data[n];

  if (question == null) {

    cond = Math.random() > 0.5;

    question = add_to_box("p", "to_center", current_q_data.question, "q");
    answer_a = add_to_box("button", "answer", current_q_data.answer_a, (cond ? "aa" : "ab"));
    answer_b = add_to_box("button", "answer", current_q_data.answer_b, (!cond ? "aa" : "ab"));

    answer_a.onclick = function() {
      if (answer == null) {
        answer = display_result("a")
        answer.style.paddingLeft = "5%";
        answer.style.paddingRight = "5%";
      };
    }

    answer_b.onclick = function() {
      if (answer == null) {
        answer = display_result("b")
        answer.style.paddingLeft = "5%";
        answer.style.paddingRight = "5%";
      };
    }

    box.style.paddingBottom = "5%";
    box.style.marginBottom = "5%";
    box.style.opacity = "1";

    return (null);

  }

  if (user_answered == false) {
    return (null);
  }

  user_answered = false;

  box.style.opacity = "0";
  box.style.transition = "1s";

  setTimeout(() => {
    box.style.opacity = 1;
  }, 1000 * fading_delay);

  setTimeout(() => {

    box.style.paddingBottom = "5%";

    if (answer != null) {
      answer.remove();
      answer = null;
    }

    question.textContent = current_q_data.question;
    answer_a.textContent = current_q_data.answer_a;
    answer_b.textContent = current_q_data.answer_b;

    //answer_a.style.alignSelf = "left";

    answer_a.style.cursor = "pointer";
    answer_b.style.cursor = "pointer";

  }, 1000 * fading_delay);

}

function Roll(arg) {

  rolling = true;

  interval = setInterval(function e() {

    roll.textContent = (parseInt(Math.random() * 6) + 1).toString();

  }, 45);

  setTimeout(function e() {

    clearInterval(interval);
    roll.textContent = arg;
    rolling = false;

  }, 2500);

}

function d() {

  if (rolling == true) {
    return (null);
  }

  if (user_rolled == false) {

    m = parseInt(Math.random() * 6) + 1;

    roll = document.createElement("h2");
    roll.className = "to_center";
    roll.id = "roll";

    dé.appendChild(roll);
    user_rolled = true;

    Roll(m.toString());

    return (null);

  }

  m = parseInt(Math.random() * 6) + 1;
  Roll(m.toString());

}

document.addEventListener('contextmenu', (e) => {
  e.preventDefault();
}
);
document.onkeydown = function(e) {
  if (event.keyCode == 123) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
    return false;
  }
}