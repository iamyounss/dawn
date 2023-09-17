# Intégration Klaviyo Shopify

## Prérequis
Salut à toi ! Si tu es là c'est que tu as vu la vidéo "Comment Intégrer Klaviyo sur votre BOUTIQUE SHOPIFY ?" Si non je t'invite à [Regarder la vidéo](https://www.youtube.com/watch?v=NW-L_N8bPto) 


## Utilisation 
1. Copie les scripts tout en bas du fichier `theme.liquid`  juste avant la balise `</body>`
2. Intègre ta clé API Klaviyo à la place de {{ api_key }} ici : 
```js 
    klaviyo.init({
      account: "{{ api_key }}",
      platform: "shopify"
    });
```

3. Copie le bouton Klaviyo dans la page produit en dessous du bouton <strong>Ajouter au panier</strong>
4. [Regarde la suite de la vidéo](https://www.youtube.com/watch?v=NW-L_N8bPto)  pour savoir comment afficher / masquer le bouton Klaviyo sur la page produit.


## Support
Si tu as des questions n'hésite pas à me contacter sur [Instagram](https://www.instagram.com/younesyahya_/) ou par [Mail](mailto:pro.younesyahya@gmail.com).

Enjoy ! 

## Auteur
[Younes Yahya](https://github.com/younesyahya)