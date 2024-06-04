/* Funzione descrizione progetti GitHub - Portfolio */

function showProjectDescription(title, githubRepo) {
    //  Contenuto del file README.md dal repository GitHub
    $.ajax({
        url: `https://api.github.com/repos/${githubRepo}/readme`,
        method: "GET",
        headers: {
            Accept: "application/vnd.github.VERSION.raw",
        },
        success: function (data) {
            // Verifico che il contenuto non sia vuoto
            if (data) {
                // Utilizzo marked per convertire il Markdown in HTML
                const htmlContent = marked(data);

                document.getElementById("projectTitle").innerText = title;
                document.getElementById("projectDesc").innerHTML = htmlContent;
                document.getElementById("projectDescription").style.display = "flex";
            } else {
                console.error(
                    "Errore: Il contenuto del file README.md è vuoto o non valido."
                );
            }
        },
        error: function () {
            // Gestisce gli errori
            alert("Errore nel caricamento del contenuto del progetto.");
        },
    });
}

function hideProjectDescription() {
    document.getElementById("projectDescription").style.display = "none";
}

function scrollProjects(direction) {
    const gallery = document.getElementById("gallery");
    const scrollAmount = 300; // valore scorrimento laterale

    if (direction === 1) {
        gallery.scrollLeft += scrollAmount;
    } else {
        gallery.scrollLeft -= scrollAmount;
    }
}

/* Funzione Scroll certificati - certification */

function scrollCertifications(direction) {
    const gallery = document.querySelector(".scroll-container");
    const scrollAmount = 417; // valore scorrimento laterale
    gallery.scrollBy({
        left: direction * scrollAmount,
        behavior: "smooth"
    });
}

document.addEventListener("DOMContentLoaded", function () {
    const prevButton = document.getElementById("scrollCertLeft");
    const nextButton = document.getElementById("scrollCertRight");

    prevButton.addEventListener("click", function () {
        scrollCertifications(-1);
    });

    nextButton.addEventListener("click", function () {
        scrollCertifications(1);
    });
});




document.addEventListener("DOMContentLoaded", function () {
    const prevButton = document.getElementById("scrollCertLeft");
    const nextButton = document.getElementById("scrollCertRight");

    prevButton.addEventListener("click", function () {
        scrollCertifications(-1);
    });

    nextButton.addEventListener("click", function () {
        scrollCertifications(1);
    });
});


/* codice per l'animazione - Home */

document.addEventListener("DOMContentLoaded", function () {
    // 4 secondi prima di iniziare l'animazione
    setTimeout(startCodeAnimation, 4000);
});

function startCodeAnimation() {
    document.getElementById("home").classList.add("no-bg");
    var codeLines = [
        "def calculate_entropy(labels):",
        "    _, counts = np.unique(labels, return_counts=True)",
        "    probabilities = counts / len(labels)",
        "    entropy = -np.sum(probabilities * np.log2(probabilities))",
        "    return entropy",
    ];

    var codeContainer = document.querySelector(".text_code");
    var cursorElement = document.createElement("span");
    cursorElement.classList.add("cursor");
    codeContainer.appendChild(cursorElement);

    var lineIndex = 0;
    var charIndex = 0;

    function typeCodeLine() {
        if (lineIndex < codeLines.length) {
            var line = codeLines[lineIndex];
            var lineElement = document.createElement("div");
            lineElement.classList.add("code-line");
            codeContainer.appendChild(lineElement);

            codeContainer.style.visibility = "visible"; // Rende visibile l'output del codice

            lineElement.innerHTML = ""; //  innerHTML per mantenere i tag HTML nel codice
            charIndex = 0;
            typeCharCode();
        } else {
            // Fine dell'animazione, attesa di 4 secondi prima del reset
            setTimeout(resetCodeAnimation, 4000);
        }
    }

    function typeCharCode() {
        if (charIndex <= codeLines[lineIndex].length) {
            var char = codeLines[lineIndex].charAt(charIndex);
            var charElement = document.createElement("span");
            charElement.textContent = char;
            codeContainer.lastChild.appendChild(charElement);

            charIndex++;
            setTimeout(typeCharCode, 50);
        } else {
            // Avvia l'animazione della prossima riga di codice
            lineIndex++;
            setTimeout(typeCodeLine, 50);
        }
    }

    function resetCodeAnimation() {
        document.getElementById("home").classList.remove("no-bg");
        // Nasconde l'output del codice prima di resettare
        codeContainer.style.visibility = "hidden";

        // Pulisce il contenuto e riavvia l'animazione
        codeContainer.innerHTML = "";
        lineIndex = 0;
        charIndex = 0;
        startCodeAnimation();
    }

    // animazione della prima riga di codice
    typeCodeLine();
}

/* Navigation List */

document.addEventListener('DOMContentLoaded', function () {
    const navToggle = document.getElementById('nav-toggle');
    const navList = document.querySelector('.nav_list');

    navToggle.addEventListener('click', function () {
        navList.classList.toggle('show-menu');
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var navToggle = document.getElementById('nav-toggle');
    var navMenu = document.getElementById('nav-menu');

    function toggleMenu(event) {
        event.preventDefault();
        navMenu.classList.toggle('show-menu');
    }

    // ascoltatore di eventi per lo schermo grande
    if (window.matchMedia('(max-width: 700px)').matches) {
        navToggle.addEventListener('click', toggleMenu);
    } else {
        // Schermo grande
        navToggle.addEventListener('click', toggleMenu);
    }
});


document.addEventListener("DOMContentLoaded", function () {
    const popup = document.getElementById("popup");
    const popupClose = document.getElementById("popup-close");
    const changeBackgroundLink = document.querySelector(".nav_link[href='#ChangeBack']");

    // Gestore di eventi per mostrare il popup
    changeBackgroundLink.addEventListener("click", function (event) {
        event.preventDefault(); // Impedisce al link di navigare alla sezione

        popup.style.display = "block";
    });

    // Aggiungi gestore di eventi per chiudere il popup
    popupClose.addEventListener("click", function () {
        popup.style.display = "none";
    });

    // Chiudi il popup se l'utente clicca fuori dalla finestra
    window.addEventListener("click", function (event) {
        if (event.target === popup) {
            popup.style.display = "none";
        }
    });
});

