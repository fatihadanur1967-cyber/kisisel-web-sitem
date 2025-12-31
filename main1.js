
const yaziAlani = document.getElementById('degisen-yazi');
const kelimeler = ["C Programcısıyım", "Futbol Meraklısıyım", "Bilgisayar Mühendisiyim", "Web Geliştiriciyim"];

let kelimeSirasi = 0;
let harfSirasi = 0;
let siliniyor = false;

function yazveSil() {
    const suankiKelime = kelimeler[kelimeSirasi];

    if (siliniyor) {
        yaziAlani.textContent = suankiKelime.substring(0, harfSirasi - 1);
        harfSirasi--;
    } else {
        yaziAlani.textContent = suankiKelime.substring(0, harfSirasi + 1);
        harfSirasi++;
    }

    let hiz = 100; 

    if (siliniyor) hiz /= 2; 

    if (!siliniyor && harfSirasi === suankiKelime.length) {
      
        hiz = 2000; 
        siliniyor = true;
    } else if (siliniyor && harfSirasi === 0) {
       
        siliniyor = false;
        kelimeSirasi++;
        if (kelimeSirasi === kelimeler.length) kelimeSirasi = 0;
    }

    setTimeout(yazveSil, hiz);
}


document.addEventListener('DOMContentLoaded', yazveSil);
