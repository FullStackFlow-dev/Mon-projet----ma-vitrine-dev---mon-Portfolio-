// ============================================
// FICHIER JAVASCRIPT - script.js
// Portfolio Professionnel
// ============================================

/* 
   COMMENT UTILISER CE FICHIER :
   1. Créez un fichier nommé "script.js" dans le même dossier que index.html
   2. Copiez tout ce code dans ce fichier
   3. Sauvegardez et rechargez la page
*/

// ============================================
// ATTENDRE QUE LA PAGE SOIT COMPLÈTEMENT CHARGÉE
// ============================================

document.addEventListener('DOMContentLoaded', function() {
  /* 
     DOMContentLoaded = événement qui se déclenche quand le HTML est chargé
     
     POURQUOI C'EST IMPORTANT :
     - Si on exécute le JS avant que le HTML soit chargé, les éléments n'existent pas encore
     - On risque des erreurs "element is null"
     - Cette ligne garantit que tout le HTML est prêt avant d'exécuter le code
  */
  
  console.log('Page chargée avec succès !');
  /* 
     console.log() affiche un message dans la console du navigateur
     Pour voir la console : F12 > onglet Console
     Utile pour déboguer (trouver des erreurs)
  */
  
  
  // ============================================
  // 1. MENU HAMBURGER MOBILE
  // ============================================
  
  // Récupérer les éléments HTML nécessaires
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  
  /* 
     document.getElementById('id') expliqué :
     - Cherche un élément HTML avec l'attribut id="nav-toggle"
     - Retourne l'élément trouvé
     - On le stocke dans une variable pour le réutiliser
     
     const = constante (variable qui ne change pas)
     let = variable qui peut changer
     var = ancienne façon (évitez-la)
  */
  
  // Vérifier si les éléments existent (évite les erreurs)
  if (navToggle && navMenu) {
    /* 
       if = condition "si"
       && = opérateur logique "ET"
       Cette ligne signifie : "Si navToggle existe ET navMenu existe"
    */
    
    // Ajouter un écouteur d'événement sur le clic
    navToggle.addEventListener('click', function() {
      /* 
         addEventListener('click', function) expliqué :
         - Écoute l'événement "click" (quand on clique)
         - Exécute la fonction entre {} quand le clic se produit
         - C'est comme dire : "Quand on clique sur navToggle, fais ceci..."
      */
      
      // Ajouter/enlever la classe "nav__menu--active"
      navMenu.classList.toggle('nav__menu--active');
      navToggle.classList.toggle('nav__toggle--active');
      
      /* 
         classList.toggle('classe') expliqué :
         - Si la classe existe, elle l'enlève
         - Si la classe n'existe pas, elle l'ajoute
         - Parfait pour ouvrir/fermer le menu
         
         EXEMPLE :
         Premier clic : ajoute la classe (menu s'ouvre)
         Deuxième clic : enlève la classe (menu se ferme)
      */
      
      console.log('Menu hamburger cliqué !');
    });
  }
  
  
  // ============================================
  // 2. FERMER LE MENU QUAND ON CLIQUE SUR UN LIEN
  // ============================================
  
  const navLinks = document.querySelectorAll('.nav__link');
  /* 
     querySelectorAll('.classe') expliqué :
     - Sélectionne TOUS les éléments avec la classe .nav__link
     - Retourne une liste (NodeList) d'éléments
     - Différent de getElementById qui retourne UN SEUL élément
  */
  
  navLinks.forEach(function(link) {
    /* 
       forEach = boucle qui parcourt chaque élément
       Pour chaque lien dans navLinks, exécute cette fonction
       
       EXEMPLE :
       Si on a 7 liens, cette fonction s'exécutera 7 fois
       Une fois pour chaque lien
    */
    
    link.addEventListener('click', function() {
      // Ferme le menu mobile quand on clique sur un lien
      if (navMenu.classList.contains('nav__menu--active')) {
        /* 
           classList.contains('classe') vérifie si la classe existe
           Retourne true (vrai) ou false (faux)
        */
        navMenu.classList.remove('nav__menu--active');
        navToggle.classList.remove('nav__toggle--active');
        /* 
           classList.remove('classe') enlève la classe
           classList.add('classe') ajoute la classe
        */
      }
    });
  });
  
  
  // ============================================
  // 3. CHANGEMENT DE STYLE DU HEADER AU SCROLL
  // ============================================
  
  const header = document.getElementById('header');
  
  window.addEventListener('scroll', function() {
    /* 
       window = objet global représentant la fenêtre du navigateur
       'scroll' = événement qui se déclenche quand on fait défiler la page
    */
    
    // Récupérer la position du scroll
    const scrollPosition = window.scrollY;
    /* 
       window.scrollY = nombre de pixels scrollés depuis le haut
       EXEMPLE : 
       - En haut de la page : scrollY = 0
       - Après avoir scrollé 500px : scrollY = 500
    */
    
    if (scrollPosition > 50) {
      // Si on a scrollé plus de 50px, ajouter la classe
      header.classList.add('header--scrolled');
    } else {
      // Sinon, enlever la classe
      header.classList.remove('header--scrolled');
    }
  });
  
  
  // ============================================
  // 4. BOUTON "RETOUR EN HAUT"
  // ============================================
  
  const scrollTopButton = document.getElementById('scroll-top');
  
  if (scrollTopButton) {
    // Afficher/cacher le bouton selon la position du scroll
    window.addEventListener('scroll', function() {
      const scrollPosition = window.scrollY;
      
      if (scrollPosition > 300) {
        // Si on a scrollé plus de 300px, afficher le bouton
        scrollTopButton.classList.add('scroll-top--visible');
      } else {
        scrollTopButton.classList.remove('scroll-top--visible');
      }
    });
  }
  
  
  // ============================================
  // 5. LIENS DE NAVIGATION ACTIFS
  // ============================================
  
  /* 
     Cette fonction détecte quelle section est visible
     et met en surbrillance le lien correspondant dans le menu
  */
  
  const sections = document.querySelectorAll('.section');
  /* 
     Sélectionne toutes les sections (accueil, à propos, compétences, etc.)
  */
  
  window.addEventListener('scroll', function() {
    let currentSection = '';
    /* 
       let = variable qui peut changer de valeur
       On va stocker le nom de la section actuellement visible
    */
    
    sections.forEach(function(section) {
      // Pour chaque section, vérifier si elle est visible
      
      const sectionTop = section.offsetTop;
      /* 
         offsetTop = position du haut de la section par rapport au haut de la page
         EXEMPLE : si une section commence à 800px du haut, offsetTop = 800
      */
      
      const sectionHeight = section.offsetHeight;
      /* 
         offsetHeight = hauteur totale de la section en pixels
      */
      
      const scrollPosition = window.scrollY;
      
      // Vérifier si on est dans cette section
      if (scrollPosition >= sectionTop - 100 && scrollPosition < sectionTop + sectionHeight - 100) {
        /* 
           Cette condition vérifie si notre position de scroll
           est entre le début et la fin de la section
           
           - 100 = petit décalage pour une meilleure détection
        */
        
        currentSection = section.getAttribute('id');
        /* 
           getAttribute('id') récupère la valeur de l'attribut id
           EXEMPLE : pour <section id="accueil">, retourne "accueil"
        */
      }
    });
    
    // Mettre à jour les liens actifs
    navLinks.forEach(function(link) {
      // Enlever la classe active de tous les liens
      link.classList.remove('nav__link--active');
      
      // Vérifier si ce lien correspond à la section actuelle
      if (link.getAttribute('href') === '#' + currentSection) {
        /* 
           getAttribute('href') récupère le lien
           EXEMPLE : pour <a href="#accueil">, retourne "#accueil"
           
           === est l'opérateur de comparaison stricte
           Vérifie si les deux valeurs sont identiques
        */
        
        // Ajouter la classe active au lien correspondant
        link.classList.add('nav__link--active');
      }
    });
  });
  
  
  // ============================================
  // 6. FILTRAGE DES PROJETS
  // ============================================
  
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');
  
  filterButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      /* 
         Quand on clique sur un bouton de filtre
      */
      
      // Enlever la classe active de tous les boutons
      filterButtons.forEach(function(btn) {
        btn.classList.remove('filter-btn--active');
      });
      
      // Ajouter la classe active au bouton cliqué
      this.classList.add('filter-btn--active');
      /* 
         this = fait référence à l'élément qui a été cliqué
         Dans ce contexte, this = le bouton qui vient d'être cliqué
      */
      
      // Récupérer la catégorie à filtrer
      const filterValue = this.getAttribute('data-filter');
      /* 
         data-filter = attribut personnalisé HTML
         EXEMPLE : <button data-filter="ai">
         Récupère la valeur : "ai"
      */
      
      console.log('Filtre sélectionné :', filterValue);
      
      // Filtrer les projets
      projectCards.forEach(function(card) {
        const cardCategory = card.getAttribute('data-category');
        /* 
           Récupère la catégorie du projet
           EXEMPLE : data-category="fullstack ai"
        */
        
        if (filterValue === 'all') {
          // Si "Tous" est sélectionné, afficher tous les projets
          card.classList.remove('project-card--hidden');
          card.style.display = 'block';
        } else {
          // Vérifier si la catégorie du projet correspond au filtre
          if (cardCategory.includes(filterValue)) {
            /* 
               includes(valeur) vérifie si une chaîne contient une valeur
               EXEMPLE : 
               "fullstack ai".includes("ai") = true
               "fullstack".includes("ai") = false
            */
            
            // Afficher le projet
            card.classList.remove('project-card--hidden');
            card.style.display = 'block';
          } else {
            // Cacher le projet
            card.classList.add('project-card--hidden');
            card.style.display = 'none';
          }
        }
      });
    });
  });
  
  
  // ============================================
  // 7. VALIDATION DU FORMULAIRE DE CONTACT
  // ============================================
  
  const contactForm = document.getElementById('contact-form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      /* 
         'submit' = événement qui se déclenche quand on soumet le formulaire
         e = objet événement contenant des infos sur la soumission
      */
      
      e.preventDefault();
      /* 
         preventDefault() empêche le comportement par défaut
         Ici, ça empêche le formulaire de se soumettre normalement
         (ce qui rechargerait la page)
         
         On fait ça pour valider les données avant l'envoi
      */
      
      // Récupérer les valeurs des champs
      const nom = document.getElementById('nom').value;
      const email = document.getElementById('email').value;
      const sujet = document.getElementById('sujet').value;
      const message = document.getElementById('message').value;
      
      /* 
         .value = récupère la valeur entrée dans un champ input ou textarea
         EXEMPLE : si l'utilisateur tape "Jean", nom = "Jean"
      */
      
      // Validation simple
      let isValid = true;
      let errorMessage = '';
      
      /* 
         On va vérifier chaque champ et stocker les erreurs
      */
      
      // Vérifier si le nom est vide
      if (nom.trim() === '') {
        /* 
           trim() enlève les espaces au début et à la fin
           EXEMPLE : "  Jean  ".trim() = "Jean"
           
           === '' vérifie si c'est une chaîne vide
        */
        isValid = false;
        errorMessage += 'Le nom est obligatoire.\n';
        /* 
           += ajoute à la variable existante
           \n = saut de ligne
        */
      }
      
      // Vérifier si l'email est valide
      if (email.trim() === '') {
        isValid = false;
        errorMessage += 'L\'email est obligatoire.\n';
      } else if (!isValidEmail(email)) {
        /* 
           ! = opérateur "NON" (inverse le résultat)
           Si l'email n'est PAS valide...
        */
        isValid = false;
        errorMessage += 'L\'email n\'est pas valide.\n';
      }
      
      // Vérifier le sujet
      if (sujet.trim() === '') {
        isValid = false;
        errorMessage += 'Le sujet est obligatoire.\n';
      }
      
      // Vérifier le message
      if (message.trim() === '') {
        isValid = false;
        errorMessage += 'Le message est obligatoire.\n';
      } else if (message.trim().length < 10) {
        /* 
           .length = nombre de caractères dans une chaîne
           EXEMPLE : "Bonjour".length = 7
        */
        isValid = false;
        errorMessage += 'Le message doit contenir au moins 10 caractères.\n';
      }
      
      // Afficher le résultat
      if (isValid) {
        // Tout est valide, on peut envoyer le formulaire
        alert('Formulaire valide ! Message envoyé avec succès.');
        /* 
           alert() affiche une boîte de dialogue
           En production, vous enverriez les données à un serveur ici
        */
        
        console.log('Données du formulaire :');
        console.log('Nom :', nom);
        console.log('Email :', email);
        console.log('Sujet :', sujet);
        console.log('Message :', message);
        
        // Réinitialiser le formulaire
        contactForm.reset();
        /* 
           reset() vide tous les champs du formulaire
        */
      } else {
        // Il y a des erreurs
        alert('Erreurs dans le formulaire :\n\n' + errorMessage);
      }
    });
  }
  
  // Fonction pour valider le format email
  function isValidEmail(email) {
    /* 
       function = déclare une fonction réutilisable
       Cette fonction prend un paramètre (email) et retourne true ou false
    */
    
    // Expression régulière (regex) pour valider l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    /* 
       Expression régulière expliquée :
       ^ = début de la chaîne
       [^\s@]+ = un ou plusieurs caractères qui ne sont pas espace ou @
       @ = le caractère @
       [^\s@]+ = un ou plusieurs caractères qui ne sont pas espace ou @
       \. = un point (le \ échappe le caractère spécial)
       [^\s@]+ = un ou plusieurs caractères qui ne sont pas espace ou @
       $ = fin de la chaîne
       
       EXEMPLES VALIDES : jean@example.com, user123@site.fr
       EXEMPLES INVALIDES : jean@, @example.com, jean.example.com
    */
    
    return emailRegex.test(email);
    /* 
       test(chaîne) vérifie si la chaîne correspond au pattern regex
       Retourne true si valide, false sinon
    */
  }
  
  
  // ============================================
  // 8. ANIMATIONS AU SCROLL (OBSERVER)
  // ============================================
  
  /* 
     Intersection Observer = API moderne pour détecter
     quand un élément entre dans la zone visible de l'écran
  */
  
  // Créer un observer
  const observer = new IntersectionObserver(function(entries) {
    /* 
       IntersectionObserver surveille les éléments
       entries = liste des éléments observés
    */
    
    entries.forEach(function(entry) {
      /* 
         Pour chaque élément observé
      */
      
      if (entry.isIntersecting) {
        /* 
           isIntersecting = true si l'élément est visible
           false s'il est hors de l'écran
        */
        
        // L'élément est visible, ajouter l'animation
        entry.target.classList.add('fade-in');
        /* 
           entry.target = l'élément HTML observé
        */
        
        // Arrêter d'observer cet élément (l'animation ne se joue qu'une fois)
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
    /* 
       threshold = seuil de visibilité (0 à 1)
       0.1 = déclenche quand 10% de l'élément est visible
       0.5 = déclenche quand 50% est visible
       1 = déclenche quand 100% est visible
    */
  });
  
  // Sélectionner les éléments à animer
  const animatedElements = document.querySelectorAll('.skill-category, .cert-card, .project-card');
  
  // Observer chaque élément
  animatedElements.forEach(function(element) {
    observer.observe(element);
    /* 
       observe(element) commence à surveiller cet élément
    */
  });
  
  
  // ============================================
  // 9. ANIMATIONS PERSONNALISÉES AU SCROLL
  // ============================================
  
  window.addEventListener('scroll', function() {
    const aboutSection = document.querySelector('.about__content');
    
    if (aboutSection) {
      const aboutPosition = aboutSection.getBoundingClientRect();
      /* 
         getBoundingClientRect() retourne la position et la taille de l'élément
         par rapport à la fenêtre visible (viewport)
         
         Propriétés utiles :
         - top : distance du haut de la fenêtre
         - bottom : distance du bas de la fenêtre
         - left, right : distances horizontales
         - width, height : dimensions
      */
      
      const windowHeight = window.innerHeight;
      /* 
         innerHeight = hauteur de la fenêtre du navigateur en pixels
      */
      
      // Si la section est visible (dans la fenêtre)
      if (aboutPosition.top < windowHeight && aboutPosition.bottom > 0) {
        aboutSection.classList.add('slide-in-left');
      }
    }
  });
  
  
  // ============================================
  // 10. MESSAGES DE DEBUG (À SUPPRIMER EN PRODUCTION)
  // ============================================
  
  console.log('=================================');
  console.log('Portfolio JavaScript chargé !');
  console.log('=================================');
  console.log('Nombre de liens de navigation :', navLinks.length);
  console.log('Nombre de projets :', projectCards.length);
  console.log('Nombre de boutons de filtre :', filterButtons.length);
  console.log('=================================');
  
  /* 
     Ces messages console aident au développement
     En production (site en ligne), vous devriez les supprimer
  */
});

// ============================================
// FONCTIONS UTILITAIRES GLOBALES
// ============================================

/* 
   Ces fonctions sont en dehors du DOMContentLoaded
   pour être accessibles partout dans le code
*/

// Fonction pour scroller doucement vers un élément
function scrollToElement(elementId) {
  /* 
     Cette fonction peut être appelée depuis n'importe où
     EXEMPLE : scrollToElement('contact')
  */
  
  const element = document.getElementById(elementId);
  
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      /* 
         behavior: 'smooth' = défilement fluide
         behavior: 'auto' = défilement instantané
      */
      block: 'start'
      /* 
         block: 'start' = aligne le haut de l'élément avec le haut de la fenêtre
         block: 'center' = centre l'élément
         block: 'end' = aligne le bas
      */
    });
  }
}

// Fonction pour vérifier si un élément est visible dans la fenêtre
function isElementInViewport(element) {
  const rect = element.getBoundingClientRect();
  /* 
     Retourne true si l'élément est visible, false sinon
  */
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// ============================================
// GESTION DES ERREURS GLOBALES
// ============================================

window.addEventListener('error', function(e) {
  /* 
     Capture toutes les erreurs JavaScript non gérées
     Utile pour le debugging
  */
  console.error('Erreur JavaScript détectée :');
  console.error('Message :', e.message);
  console.error('Fichier :', e.filename);
  console.error('Ligne :', e.lineno);
  
  /* 
     En production, vous pourriez envoyer ces erreurs
     à un service de monitoring (comme Sentry)
  */
});

// ============================================
// FIN DU FICHIER JAVASCRIPT
// ============================================

/* 
   RÉSUMÉ DES FONCTIONNALITÉS :
   
   1. ✅ Menu hamburger mobile
   2. ✅ Fermeture du menu au clic sur un lien
   3. ✅ Header qui change au scroll
   4. ✅ Bouton "retour en haut"
   5. ✅ Liens de navigation actifs selon la section
   6. ✅ Filtrage des projets par catégorie
   7. ✅ Validation complète du formulaire
   8. ✅ Animations au scroll (Intersection Observer)
   9. ✅ Animations personnalisées
   10. ✅ Gestion des erreurs
   
   POUR ALLER PLUS LOIN :
   - Connecter le formulaire à un backend (PHP, Node.js)
   - Ajouter plus d'animations
   - Intégrer Google Analytics
   - Ajouter un mode clair/sombre
   - Optimiser les performances
*/

// Sélectionner le bouton hamburger et le menu
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

// Ajouter un événement au clic sur le bouton
navToggle.addEventListener('click', function() {
    navMenu.classList.toggle('show-menu');
});

// Fermer le menu quand on clique sur un lien
const navLinks = document.querySelectorAll('.nav__link');
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        navMenu.classList.remove('show-menu');
    });
}); 

// ============================================
// MENU HAMBURGER
// ============================================

// Sélectionner le bouton hamburger et le menu
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

// Ajouter un événement au clic sur le bouton
navToggle.addEventListener('click', function() {
    navMenu.classList.toggle('show-menu');
});

// Fermer le menu quand on clique sur un lien
const navLinks = document.querySelectorAll('.nav__link');
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        navMenu.classList.remove('show-menu');
    });
});