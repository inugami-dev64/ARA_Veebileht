+++
title = 'Toru RISC Protsessoris'
date = 2023-11-29T14:11:44+02:00
draft = false
tags = ['Protsessor', 'Käsustik']
+++

Toru ehk konveier (inglise keeles pipeline) on kogum jadamisi ühendatud andmete töötlemise elemente, kus ühe elemendi väljund on järgmise elemendi sisendiks. Tihti tehakse sealjuures operatsioone samaaegselt.
Konveierite kasutamine on tänapäeva maailmas laialdaselt levinud. Kõige lihtsamaks näiteks võib siia tuua autotööstuse, kus konveierliini peal tehakse iga protsess oma tööjaama juures. Ühes kohas lisatakse juurde mootor, sealt edasi lisatakse rattad jne. Selle eeliseks on see, et kui ühele autole saab mingi detail lisatud saab selle mööda liini edasi saata ning asuda tööle uue auto kallal.

Põhitõed
--------------

* Arvuti töökiirust saab tõsta, kui
    * Kasutame kiiremaid ahelaid protsessori ja mälu tegemiseks
    * Teeme osa operatsioone ära samaaegselt
* Sisend-väljund operatsioonid ja arvutused protsessoris
* Analoogia tehase konveieriga
* Konveier e toru, ingl pipeline

Vahemälu tähtsus
----------------

* Iga etapp täidetakse ära ühe takti jooksul
* Erinevate etappide täitmisele kuluv aeg on erinev
* Kui mõne etapiga saadakse kiiremini ühele poole, on
seade ülejäänud aja ooterežiimis
* Seega on toru efektiivne ligikaudu ühepikkuste etappide korral

Vahekokkuvõte
-------------

* Toru ei tee üksiku käsu täitmist kiiremaks
* Suureneb täidetud käskude arv ajaühikus
* Tulemus “üks käsk iga sammu ajal” on teoreetiliseks ülempiiriks, praktikas alati väiksem käskude arv ajaühikus

Andmeriskid 
--------------

* Kahe järjestikuse käsu puhul, mida torus täidetakse, pole esimese käsu tulemus veel kättesaadav enne järgmise käsu alustamist
* Näide:
    * A ← 5 + B
    * C ← 6 + A
* Näide:
    * A ← 5 + B
    * C ← 6 + B

Argumendi edastamine (operand forwarding)
---------------------

* Kahe järjestikuse käsu puhul, mida torus täidetakse, pole
esimese käsu tulemus veel kättesaadav enne järgmise
käsu alustamist
* Siiski on tulemus enne registrisse kirjutamist ALU väljundis
olemas
* Kui korraldame nende andmete kiirema edastamise,
saame seisakut lühendada

Mäluga suhtlemine
------------------

* Vahemälu tähtsus
* Kriitiline operatsioon on mälust lugemine:
    * Põhimälust lugemine on tavaliselt ca 10 korda aegavõtvam kui protsessorisisesed operatsioonid
    * Protsessoriga samal kiibil paiknev vahemälu suudab töötada enamvähem sama kiirusega kui protsessor ise

Hargnemise aadressi edastamine
------------------------

* Hargnemiskäsu dekodeerimise faasi lõpuks on hargnemisaadress meil juba teada
* Korraldame protsessori töö nii, et saaksime kohe alustada juba hargnemise sihtmärgi-käsu sisselugemist
* Vajalik lisariistvara – üks summaator dekodeerimise faasilisaks
    * Lähenemine analoogiline registrist kahe väärtuse lugemisele iga käsu puhul

Hargnemise ajatamine (delayed branch)
---------------------------

* Ajatuspesa (Branch delay slot) – aadress, mis asub vahetult hargnemiskäsu järel
* Neid võib olla rohkem kui üks
* Hargnemisele järgnevad käsud loetakse alati protsessorisse
    * kuna sel hetkel veel ei ole veel teada, et hargnemine aset leiab
* Nende täitmine ei põhjusta protsessorile täiendavat ajakulu
    * sest sel ajal nagunii midagi muud teha ei saa
* Siit idee: panna ajatuspesadesse sellised käsud, mida ka tegelikult täita tuleb

Tingimuslik hargnemine
--------------------

* Siin sõltub hargnemine või mitte-hargnemine tingimuslippude väärtusest, mida me ei pruugi enne teiste käskude täitmise lõpetamist teada
* Variant, et üritame tulemust ennustada
* Lihtsaim variant: eeldame, et hargnemist ei toimu
* Variant, et otsustame hargnemise märgi järgi
    * Ettepoole siirded toimuvad sagedamine
    * Tahapoole siirded toimuvad harvemini
* Variant, et lisame käsule hargnemise vaikimisi-otsuse. Selleks vaja ühte lisabitti.

Branch target buffer
-----------------

* Hargnemiskäsu aadress
* Üks-kaks bitti hargnemise ennustamise jaoks
* Hargnemise aadress
* Tabeli tüüpiline suurusjärk – 1024 kirjet

Resource limitations
------------------

Näiteks käskude ja andmete ühine vahemälu:
* Kui nii Fetch kui ka Memory samm soovivad samaaegselt temaga suhelda

Arvuti jõudlus
-----------

* Kursuse esimeses videoloengus esitasime jõudlusvõrrandi, kus
    * N on masinkoodi käskude arv
    * F on taktsagedus
    * S on ühe masinkoodi käsu täitmiseks vajalik (keskmiselt) sammude arv.
* Käskude läbilaskevõime (instruction throughput) järjestikuse käsutäitmise korral

Mitmeastmeline toru
----------------

* Üldiselt n-astmeline toru võiks teoreetiliselt suurendada käskude läbilaskevõimet n korda
* Reaalselt see päris nii ilus ei ole:
    * Kui torus tekib seisak, siis käskude läbilaskevõime langeb
* Milline on praktiliselt parim toru astmete arv n?

CISC protsessoris: Kõrvalmõjud (side effects)
------------------------

* Sõltuvus varasema tehte tulemusest võib olla nii
    * ilmutatud kujul kui ka
    * ilmutamata kujul
* Viimasel juhul öeldakse, et käsul on kõrvalmõjud
* Näiteks pinu käsud stack ja pop, adresseerimise autoincrement, autodecrement moodid
* tingimuslipud

Terminoloogia
-----------

* Seisak – processor stalls
* Risk – hazard
    * data hazard
    * instruction hazard, control hazard
    * structural hazard