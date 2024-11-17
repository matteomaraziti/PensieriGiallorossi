document.addEventListener("DOMContentLoaded", function() {
    // Funzione per caricare gli articoli da 'articoli.json'
    function caricaArticoli() {
        fetch('articoli.json')
            .then(response => response.json())
            .then(data => {
                const tbody = document.getElementById('articoli-table').querySelector('tbody');
                data.articoli.forEach(articolo => {
                    const row = document.createElement('tr');

                    const titoloCell = document.createElement('td');
                    titoloCell.textContent = articolo.titolo;
                    row.appendChild(titoloCell);

                    const dataCell = document.createElement('td');
                    dataCell.textContent = articolo.data;
                    row.appendChild(dataCell);

                    const linkCell = document.createElement('td');
                    const link = document.createElement('a');
                    link.href = `articolo.html?titolo=${encodeURIComponent(articolo.titolo)}`;
                    link.textContent = "Leggi l'articolo";
                    linkCell.appendChild(link);
                    row.appendChild(linkCell);

                    tbody.appendChild(row);
                });
            })
            .catch(error => console.error('Errore nel caricamento degli articoli:', error));
    }

    // Funzione per visualizzare un singolo articolo

    // Carica gli articoli sulla pagina principale quando la pagina è pronta
    const articoliTable = document.getElementById('articoli-table');
    if (articoliTable) {
        caricaArticoli();
    }
});
