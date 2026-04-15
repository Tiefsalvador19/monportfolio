function changerFormulaire() {
    let type = document.getElementById("typeProjet").value;
    let form = document.getElementById("formDynamic");

    if (type === "vitrine") {
        form.innerHTML = `
      <input id="pages" placeholder="Nombre de pages">
      <select id="design">
        <option value="simple">Design simple</option>
        <option value="pro">Design professionnel</option>
      </select>
    `;
    }

    if (type === "ecommerce") {
        form.innerHTML = `
      <input id="produits" placeholder="Nombre de produits">
      <select id="paiement">
        <option value="oui">Paiement en ligne</option>
        <option value="non">Sans paiement</option>
      </select>
    `;
    }

    if (type === "app") {
        form.innerHTML = `
      <select id="complexite">
        <option value="simple">Simple</option>
        <option value="moyen">Moyen</option>
        <option value="complexe">Complexe</option>
      </select>
    `;
    }
}

function calculerProjet() {
    let type = document.getElementById("typeProjet").value;

    let prix = 0;
    let techno = "";
    let plan = "";

    if (type === "vitrine") {
        let pages = parseInt(document.getElementById("pages").value || 1);
        let design = document.getElementById("design").value;

        prix = 50000 + (pages * 5000);
        if (design === "pro") prix += 30000;

        techno = "HTML, CSS, JS";
        plan = "Accueil, À propos, Services, Contact";
    }

    if (type === "ecommerce") {
        let produits = parseInt(document.getElementById("produits").value || 1);
        let paiement = document.getElementById("paiement").value;

        prix = 100000 + (produits * 2000);
        if (paiement === "oui") prix += 50000;

        techno = "Laravel + MySQL";
        plan = "Catalogue, panier, paiement, admin";
    }

    if (type === "app") {
        let complexite = document.getElementById("complexite").value;

        prix = 150000;
        if (complexite === "moyen") prix += 50000;
        if (complexite === "complexe") prix += 100000;

        techno = "Laravel / React";
        plan = "Dashboard, API, gestion utilisateurs";
    }

    afficherResultat(prix, techno, plan);

    return { prix, techno, plan };
}

function afficherResultat(prix, techno, plan) {
    let box = document.getElementById("result");

    box.innerHTML = `
    <h3>💡 Estimation</h3>
    <p>💰 <strong>${prix} FCFA</strong></p>
    <p>⚙️ ${techno}</p>
    <p>📋 ${plan}</p>
  `;
}

function envoyerWhatsApp() {
    let nom = document.getElementById("nom").value;
    let type = document.getElementById("typeProjet").value;

    let data = calculerProjet();

    let message = `🔥 Nouveau client ANGE TECH

👤 Nom: ${nom}
📁 Projet: ${type}

💰 Budget estimé: ${data.prix} FCFA
⚙️ Tech: ${data.techno}
📋 Structure: ${data.plan}
`;

    let url = "https://wa.me/2250151185932?text=" + encodeURIComponent(message);

    window.open(url, "_blank");
}