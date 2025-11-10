
const planes = [
    
    { id: 1, name: "Mammoth Hydra", type: "Askeri Jet", category: "Askeri", price: "6,000,000", imageUrl: "hydra.jpg", description: "Hava üstünlüğü için tasarlanmış dikey kalkış yapabilen efsanevi jet." },
    { id: 2, name: "Titan Cargo", type: " Kargo", category: "Büyük", price: "15,000,000", imageUrl: "titan.jpg", description: "Devasa kargo kapasitesiyle en büyük taşıyıcı." },
    { id: 3, name: "Luxury Private Jet", type: "Lüks jet", category: "lüks", price: "12,500,000", imageUrl: "LuxorDeluxe.jpg", description: "En lüks ve konforlu özel jet deneyimi." },
    { id: 4, name: "Shamal", type: "Yolcu Uçağı", category: "Yolcu jet", price: "4,500,000", imageUrl: "Shamal.jpg", description: "Standart kısa ve orta menzilli ticari uçuşlar için ideal." },
    { id: 5, name: "Dodo Seaplane", type: "Deniz Uçağı", category: "Diğer", price: "500,000", imageUrl: "Dodo.jpg", description: "Su üzerine inebilme yeteneği ile dikkat çekmektedir." },
    { id: 6, name: "Velum", type: "Tek motorlu", category: "Yolcu", price: "900,000", imageUrl: "velum.jpg", description: "Küçük gruplar ve hızlı ulaşım için çok amaçlı uçak." },
    { id: 7, name: "Cuban 800", type: "Çift  Motorlu", category: "Diğer", price: "240,000", imageUrl: "cuban800.jpg", description: "Başlangıç seviyesi pilotlar için uygun, ucuz ve güvenilir." },
    { id: 8, name: "Besra", type: "Eğitim Jeti", category: "Askeri", price: "1,150,000", imageUrl: "Besra.jpg", description: "Yüksek hızlı manevralar ve eğitim uçuşları için tasarlanmıştır." },
    { id: 9, name: "Blimp (Zeplin)", type: "Zeplin", category: "Diğer", price: "1,300,000", imageUrl: "Blimp.jpg", description: "Yavaş, gösterişli ve gökyüzünden şehri izlemek için mükemmel." },
    { id: 10, name: "Nimbus", type: "İş Jeti", category: "Yolcu", price: "8,500,000", imageUrl: "nimbus.jpg", description: "Şık tasarımı ve etkileyici menzili ile iş seyahatlerinin gözdesi." },
    { id: 11, name: "Cargo Plane ", type: "Büyük Kargo", category: "Büyük", price: "18,000,000", imageUrl: "CargoPlane-GTAV-front.jpg", description: "Çok büyük hacimli yükler için özel olarak modifiye edilmiş." },
    { id: 12, name: "Rogue", type: "Eski Savaş Uçağı", category: "Askeri", price: "1,600,000", imageUrl: "Rogue.jpg", description: "Basit , eski  ama etkili: hızlı kalkış ve iniş yeteneği." }
];

const planeListContainer = document.getElementById('plane-list');


function fakeLogin() {
    alert("Giriş yap sayfasına yönlendiriliyorsunuz...");
}

function fakeRegister() {
    alert("Üye kayıt formuna yönlendiriliyorsunuz...");
}



function createPlaneCard(plane) {
    const card = document.createElement('div');
    card.classList.add('plane-card');

    card.innerHTML = `
        <img src="images/${plane.imageUrl}" alt="${plane.name}">
        <h3>${plane.name}</h3>
        <p><strong>Türü:</strong> ${plane.type}</p>
        <p>${plane.description}</p>
        <p class="price">$${plane.price.toLocaleString('en-US')}</p>
        
        <div class="button-group">
            <button class="btn-details" onclick="alert('Uçağın ID\'si: ${plane.id}\\n\\nİnceleme sayfası için buraya daha fazla JS kodu eklenecek.')">İNCELE</button>
            <button class="btn-buy" onclick="alert('💸${plane.name} uçağını satın alma sürecini başlattınız         Lütfen giriş yapınız.')">SATIN AL</button>
        </div>
    `;

    planeListContainer.appendChild(card);
}


function renderPlanes() {
    planes.forEach(plane => {
        createPlaneCard(plane);
    });
}


renderPlanes();