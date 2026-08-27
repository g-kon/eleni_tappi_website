(function () {
    const GESY_LOGO =
        "https://lh3.googleusercontent.com/aida-public/AB6AXuC5N5ogPPT4CtDNxs_IAqFzkg6mnQgctwRl196XEc-IE3j5NFRmA3VOmlDm77O-uhUa_AzlJDHRn2-bYCrD-iCEZH9U-Whmd1siHJ5Koi8JLQoC-UucQ_Ft6CPiqcTZfxVHTZiKXLVVZwB1rgZ1bJIGsADOL0G-MmzFFWv17pvx9bUbQKghm3b6dUjcDGJx9JsjkQIt_b7ET6doCEaa_otPf5V6opiarLzBcm-OAGYOzavXZR02IUvFw5_uUS3UtoNbOU3tzlBGu888";

    const NAV = [
        { id: "home", en: "Home", gr: "Αρχική", path: "" },
        { id: "about", en: "About", gr: "Σχετικά", path: "about/" },
        { id: "services", en: "Services", gr: "Υπηρεσίες", path: "services/" },
        { id: "blog", en: "Blog", gr: "Ιστολόγιο", path: "blog/" },
        { id: "contact", en: "Contact", gr: "Επικοινωνία", path: "contact/" }
    ];

    function getBasePath() {
        return document.body.dataset.base || "./";
    }

    function getActivePage() {
        return document.body.dataset.page || "home";
    }

    function navHref(item, base) {
        if (item.id === "home") {
            return base;
        }
        return base + item.path;
    }

    function navLinkClass(isActive) {
        if (isActive) {
            return "text-primary font-bold border-b-2 border-primary pb-1 hover:text-primary-container dark:hover:text-primary-fixed-dim transition-all scale-95 active:opacity-80 transition-transform";
        }
        return "text-on-surface-variant hover:text-primary transition-colors duration-200 hover:text-primary-container dark:hover:text-primary-fixed-dim transition-all scale-95 active:opacity-80 transition-transform";
    }

    function renderHeader(activePage, base) {
        const links = NAV.map(function (item) {
            const isActive = item.id === activePage;
            return (
                '<a class="' +
                navLinkClass(isActive) +
                '" href="' +
                navHref(item, base) +
                '"><span class="lang-en">' +
                item.en +
                '</span><span class="lang-gr">' +
                item.gr +
                "</span></a>"
            );
        }).join("\n");

        return (
            '<header class="bg-surface dark:bg-inverse-surface fixed top-0 left-0 w-full z-50 shadow-sm bg-surface/80 backdrop-blur-md" id="main-nav">' +
            '<div class="flex justify-between items-center px-gutter py-4 max-w-container-max mx-auto">' +
            '<div class="font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed">' +
            '<span class="lang-en">Eleni Tappi</span>' +
            '<span class="lang-gr">Ελένη Τάππη</span>' +
            "</div>" +
            '<nav class="hidden md:flex space-x-6">' +
            links +
            "</nav>" +
            '<div class="flex items-center space-x-4">' +
            '<button type="button" class="flex items-center space-x-1 text-primary dark:text-inverse-primary hover:text-primary-container dark:hover:text-primary-fixed-dim transition-all bg-surface-container py-1 px-3 rounded-full border border-outline-variant hover:bg-surface-container-high" data-lang-toggle>' +
            '<span class="material-symbols-outlined text-[18px]">language</span>' +
            '<span class="font-label-sm text-label-sm lang-en">EN/GR</span>' +
            '<span class="font-label-sm text-label-sm lang-gr">GR/EN</span>' +
            "</button>" +
            "</div>" +
            "</div>" +
            "</header>"
        );
    }

    function renderFooter() {
        return (
            '<footer class="w-full py-section-padding px-gutter grid grid-cols-1 md:grid-cols-4 gap-stack-lg max-w-container-max mx-auto bg-surface-container-low border-t border-outline-variant mt-auto">' +
            '<div class="col-span-1 flex flex-col gap-stack-sm">' +
            '<span class="font-headline-md text-headline-md font-bold text-on-surface">' +
            '<span class="lang-en">Eleni Tappi</span>' +
            '<span class="lang-gr">Ελένη Τάππη</span>' +
            "</span>" +
            '<p class="font-body-md text-body-md text-on-surface-variant"><span class="lang-en">Clinical Nutrition</span><span class="lang-gr">Κλινική Διατροφή</span></p>' +
            '<p class="font-body-md text-body-md text-on-surface-variant mt-4 text-sm"><span class="lang-en">© 2024 Eleni Tappi Clinical Nutrition. All rights reserved.</span><span class="lang-gr">© 2024 Ελένη Τάππη Κλινική Διατροφή. Με την επιφύλαξη παντός δικαιώματος.</span></p>' +
            "</div>" +
            '<div class="col-span-1 flex flex-col gap-stack-sm">' +
            '<h4 class="font-label-sm text-label-sm font-semibold text-on-surface uppercase tracking-wider mb-2"><span class="lang-en">Contact</span><span class="lang-gr">Επικοινωνία</span></h4>' +
            '<a class="font-body-md text-body-md text-on-surface-variant hover:text-primary hover:underline decoration-primary underline-offset-4 opacity-90 hover:opacity-100 transition-opacity" href="tel:+35799757799"><span class="lang-en">Phone: +357 99757799</span><span class="lang-gr">Τηλέφωνο: +357 99757799</span></a>' +
            '<a class="font-body-md text-body-md text-on-surface-variant hover:text-primary hover:underline decoration-primary underline-offset-4 opacity-90 hover:opacity-100 transition-opacity" href="mailto:et.clinicalnutrition@gmail.com">Email: et.clinicalnutrition@gmail.com</a>' +
            '<p class="font-body-md text-body-md text-on-surface-variant mt-2"><span class="lang-en">Megalou Konstantinou 9, Athienou 7600, Cyprus</span><span class="lang-gr">Μεγάλου Κωνσταντίνου 9, Αθηένου 7600, Κύπρος</span></p>' +
            "</div>" +
            '<div class="col-span-1 flex flex-col gap-stack-sm">' +
            '<h4 class="font-label-sm text-label-sm font-semibold text-on-surface uppercase tracking-wider mb-2"><span class="lang-en">Affiliations</span><span class="lang-gr">Συνεργασίες</span></h4>' +
            '<div class="flex items-center gap-2">' +
            '<img src="' +
            GESY_LOGO +
            '" alt="GeSY Logo" class="h-8 w-auto object-contain">' +
            '<span class="font-body-md text-body-md text-on-surface-variant"><span class="lang-en">GeSY Approved</span><span class="lang-gr">Συμβεβλημένη με το ΓεΣΥ</span></span>' +
            "</div>" +
            '<span class="font-body-md text-body-md text-on-surface-variant"><span class="lang-en">Cyprus Dietetic Association</span><span class="lang-gr">Σύνδεσμος Διαιτολόγων Κύπρου</span></span>' +
            "</div>" +
            '<div class="col-span-1 flex flex-col gap-stack-sm">' +
            '<h4 class="font-label-sm text-label-sm font-semibold text-on-surface uppercase tracking-wider mb-2"><span class="lang-en">Social</span><span class="lang-gr">Κοινωνικά</span></h4>' +
            '<div class="flex gap-4">' +
            '<a class="w-10 h-10 rounded-full bg-surface flex items-center justify-center text-on-surface-variant hover:text-primary hover:bg-surface-container-high transition-colors" href="#"><span class="material-symbols-outlined">link</span></a>' +
            '<a class="w-10 h-10 rounded-full bg-surface flex items-center justify-center text-on-surface-variant hover:text-primary hover:bg-surface-container-high transition-colors" href="mailto:et.clinicalnutrition@gmail.com"><span class="material-symbols-outlined">mail</span></a>' +
            "</div>" +
            "</div>" +
            "</footer>"
        );
    }

    function setLanguage(lang) {
        const isGreek = lang === "gr" || lang === "el";
        document.documentElement.lang = isGreek ? "gr" : "en";
        localStorage.setItem("lang", isGreek ? "gr" : "en");
    }

    function toggleLanguage() {
        setLanguage(document.documentElement.lang === "gr" ? "en" : "gr");
    }

    function initContactForm() {
        const form = document.querySelector('[data-contact-form="true"]');
        if (!form) {
            return;
        }

        const button = form.querySelector('button[type="submit"]');
        const notice = document.createElement("p");
        notice.className = "mt-4 font-body-md";
        form.insertAdjacentElement("afterend", notice);

        form.addEventListener("submit", function (event) {
            event.preventDefault();
            if (button) {
                button.disabled = true;
            }
            notice.textContent = document.documentElement.lang === "gr"
                ? "Αποστολή μηνύματος..."
                : "Sending your message...";
            notice.className = "mt-4 font-body-md text-on-surface-variant";

            fetch(form.action, {
                method: "POST",
                body: new FormData(form),
                headers: { Accept: "application/json" }
            }).then(function (response) {
                if (!response.ok) {
                    throw new Error("Form submission failed");
                }
                form.reset();
                notice.textContent = document.documentElement.lang === "gr"
                    ? "Το μήνυμα στάλθηκε με επιτυχία."
                    : "Your message was sent successfully.";
                notice.className = "mt-4 font-body-md text-tertiary";
            }).catch(function () {
                notice.textContent = document.documentElement.lang === "gr"
                    ? "Η αποστολή απέτυχε. Παρακαλώ δοκιμάστε ξανά."
                    : "The message could not be sent. Please try again.";
                notice.className = "mt-4 font-body-md text-primary";
            }).finally(function () {
                if (button) {
                    button.disabled = false;
                }
            });
        });
    }

    function initBlogFilters() {
        const articles = Array.from(document.querySelectorAll("[data-article]"));
        const filters = document.querySelectorAll("[data-category-filter]");
        if (!articles.length || !filters.length) {
            return;
        }

        function applyFilter(category) {
            articles.forEach(function (article) {
                article.hidden = category && article.dataset.category !== category;
            });
        }

        filters.forEach(function (filter) {
            function select() {
                applyFilter(filter.dataset.categoryFilter || "");
            }
            filter.addEventListener("click", select);
            filter.addEventListener("keydown", function (event) {
                if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    select();
                }
            });
        });

        articles.forEach(function (article) {
            function openArticle() {
                const title = article.querySelector("h2");
                if (!title) {
                    return;
                }
                const lang = document.documentElement.lang === "gr" ? ".lang-gr" : ".lang-en";
                const visibleTitle = title.querySelector(lang);
                const text = visibleTitle ? visibleTitle.textContent.trim() : title.textContent.trim();
                window.alert(text + "\\n\\n" + (document.documentElement.lang === "gr"
                    ? "Το πλήρες άρθρο θα είναι σύντομα διαθέσιμο."
                    : "The full article will be available soon."));
            }
            article.addEventListener("click", openArticle);
            article.addEventListener("keydown", function (event) {
                if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    openArticle();
                }
            });
        });
    }

    function initScrollNav() {
        const nav = document.getElementById("main-nav");
        if (!nav) {
            return;
        }
        window.addEventListener("scroll", function () {
            if (window.scrollY > 20) {
                nav.classList.add("shadow-md");
            } else {
                nav.classList.remove("shadow-md");
            }
        });
    }

    function init() {
        const base = getBasePath();
        const activePage = getActivePage();
        const headerEl = document.getElementById("site-header");
        const footerEl = document.getElementById("site-footer");

        if (headerEl) {
            headerEl.outerHTML = renderHeader(activePage, base);
        }
        if (footerEl) {
            footerEl.innerHTML = renderFooter();
        }

        document.querySelectorAll("[data-lang-toggle]").forEach(function (button) {
            button.addEventListener("click", toggleLanguage);
        });

        const stored = localStorage.getItem("lang");
        if (stored === "gr" || stored === "el") {
            setLanguage("gr");
        }

        initScrollNav();
        initContactForm();
        initBlogFilters();
    }

    window.SiteLayout = {
        setLanguage: setLanguage,
        toggleLanguage: toggleLanguage
    };

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }
})();
