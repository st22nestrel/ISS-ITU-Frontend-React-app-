# VUT-IIS PROJEKT

Instalace:

Pre správne fungovanie aplikácie je potrebné mať na serveri nainštalovaný Apache HTTP server, MySQL server (používali sme MariaDB), PHP, inštalačný balík pre Node.js aplikácie (pre zobrazenie aktuálnej verzie spustíme príkaz "node -v"), webové rozhranie phpMyAdmin
- Súbory zo zložky "src" nahráme na Apache HTTP server (štandardne /var/www/html)
FRONTEND:
- Prejdeme do zložky "frontend" kde pomocou príkazu "sudo npm install" spustíme stiahnutie potrebných závislostí pre React aplikáciu (závislosti sa stiahnú do zložky "node_modules")
- Po úspešnom nainštalovaní všetkých závislosti spustíme vytvorenie HTML súboru príkazom "sudo npm run build"
- Po úspešnom vytvorení obsahu stránok vznikne zložka "build" v zložke frontend
- Následne stačí obsah zložky "build" prekopírovať do adresáru webového priestoru (štandardne /var/www/html)
- Na záver je potebné nastaviť prístupové práva (najmä pre novovytvorenú zložku /upload/files/) pre možnosť zápisu (odporúčam použiť príkaz "chmod -R 755 /var/www/html/frontend/")

DATABÁZA:
- Pre vytvorenie databázy môžeme použiť rozhranie phpMyAdmin
- databázu vytvoríme potomocu voľby "import zo súboru" a vyberieme odovzdaný súbor "/databaza/iisproject.sql", tým sa nám vytvorí nová databáza s názvom "iisproject" spolu s prednastavenými testovacími údajmi

BACKEND:
- Prejdeme do zložky "backend" kde pomocou príkazu "sudo npm install" spustíme stiahnutie potrebných závislostí pre Express.js aplikáciu (závislosti sa stiahnú do zložky "node_modules")
- Po úspešnom nainštalovaní všetkých závislosti je potrebné nastaviť prístupové údaje k databáze priloženom v súbore ".env" (zložka /databaza/.env)
- Následne tento konfiguračný súbor umiestnime do serverovej zložky "backend"
- Server spustíme pomocou príkazu "npm run start"
Po úspešnom absolvovaní všetkých krokov a spustenom procese pre backendovú aplikáciu je aplikácia plne funkčná a môžeme ju spustiť pomocou adresy nášho servera cez webový prehliadač.

