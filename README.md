# Marthe & Snorre – bryllupsnettside

Statisk nettside laget med HTML, CSS og JavaScript. Den passer til GitHub Pages og bruker ingen byggverktøy.

## Innhold
- `index.html` – forside, nedtelling, kart og sammendrag
- `rsvp.html` – RSVP-skjema koblet til Formspree
- `program.html` – fredag, lørdag og søndag
- `overnatting.html` – hotellinformasjon og kart
- `vaer.html` – foreløpig værside
- `foto.html` – Google Drive-lenke og QR-kode
- `styles.css` – responsivt design
- `script.js` – mobilmeny og nedtelling
- `assets/` – monogram og QR-kode

## Publisering med GitHub Pages
1. Pakk ut ZIP-filen og legg innholdet i rotmappen til GitHub-repositoriet.
2. Commit og push til branchen GitHub Pages bruker.
3. Under **Settings → Pages**, velg riktig branch og `/ (root)` dersom dette ikke allerede er satt opp.
4. Legg til `martheogsnorre.no` som custom domain i Pages-innstillingene. Filen `CNAME` i prosjektet inneholder domenet.
5. Hos domeneforhandleren må DNS settes opp for GitHub Pages. Følg GitHubs gjeldende instruksjoner for apex-domene og eventuelt `www`-subdomene. Slå på HTTPS når sertifikatet er klart.

## Før publisering: husk å tilpasse
- **Svarfrist:** erstatt `[sett inn svarfrist]` i `rsvp.html`.
- **Toastmaster:** erstatt `[Navn på toastmaster]`, `[epost]` og `[telefon]` i `index.html`.
- **Program:** oppdater de foreløpige klokkeslettene og aktivitetene i `program.html`.
- **Overnatting:** legg inn eventuell bookingkode/avtalepris når den er bekreftet.
- **Forsidebilde:** bytt `src` for `.hero-image` i `index.html` med et bilde av fjellet dere skal gifte dere på.
- **GIF-er:** bytt `partyGif` og `hangoverGif` i `script.js` dersom dere vil bruke andre GIF-er.
- **Bilder:** hotellbildene er merket som illustrasjonsbilder og er hentet fra Unsplash. Bytt dem gjerne ut med godkjente bilder fra hotellets offisielle nettside.

## RSVP og personvern
Skjemaet sender svar til Formspree-endepunktet som ble oppgitt. Test innsending etter publisering. Husk at e-postbekreftelse eller ekstra Formspree-innstillinger kan være nødvendig i Formspree-kontoen.

## Værmelding
Værsiden viser foreløpig meldingen dere ønsket. Yr har ikke pålitelige dagsprognoser mange måneder fram i tid. Oppdater siden nærmere datoen og bruk Yr sine godkjente tjenester/lenker i henhold til gjeldende vilkår.

## QR-kode
`assets/photo-folder-qr.svg` peker til Google Drive-mappen som ble oppgitt. Kontroller at mappens delingsinnstillinger tillater at gjestene kan laste opp bilder.
