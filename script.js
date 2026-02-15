function scrollToSection(id){
    document.getElementById(id).scrollIntoView({
        behavior:"smooth"
    });
}

// Popup keren TKJ
function showInfo(){
    const popup = document.createElement("div");
    popup.className = "popup";

    popup.innerHTML = `
        <div class="popup-box">
            <h2>ðŸš€ Kenapa Harus TKJ?</h2>
            <p>
            âœ” Networking Professional<br>
            âœ” IT Support & Technician<br>
            âœ” Server Administrator<br>
            âœ” Cyber Security Specialist<br><br>
            <strong>TKJ = Jurusan Masa Depan ðŸ’»</strong>
            </p>
            <button onclick="this.parentElement.parentElement.remove()">Tutup</button>
        </div>
    `;

    document.body.appendChild(popup);
}