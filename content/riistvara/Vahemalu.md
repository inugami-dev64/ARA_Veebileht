+++
title = 'Vahemälu'
date = 2023-11-29T14:11:44+02:00
draft = false
authors = ['Richard Leover']
teemad = ['Mälu']
+++

Cache ehk vahemälu on arvuti komponent, mis salvestab teatud osa andmeid, et need oleksid kiiremini kättesaadavad. See on mõeldud andmete kiireks taasesitamiseks, vähendades vajadust pöörduda aeglasema andmeallika poole. Vahemälu kasutatakse sageli protsessorites, kõvaketastel, brauserites ja operatsioonisüsteemides1.
Pipeline ehk torujuhtimine on arvuti protsessori tehnika, mis võimaldab mitme instruktsiooni samaaegset töötlemist. See on nagu konveierliin, kus iga instruktsioon liigub läbi erinevate töötlusetappide - hankimine, dekodeerimine, täitmine, jne. See võimaldab protsessoril töödelda mitut instruktsiooni korraga, suurendades seeläbi süsteemi üldist jõudlust2.

Vahemälu (Cache)
------------

* Vahemälu töötab RAM mälust kiiremini ja kasutatakse selleks, et
vähendada mälu poole pöördumise aega
* Enamikel tänastel protsessoritel on vähemalt kolme tüüpi vahemälu
    * Käskude vahemälu (instruction cache)
    * Andmete vahemälu (data cache)
    * TLB (Translation Lookaside Buffer) puhver