+++
title = 'Lihtne sisend/väljund'
date = 2023-11-29T14:11:44+02:00
draft = false
+++

Sisend- ja väljundlaused (input / output) on ettenähtud (nagu nimigi ütleb) programmile andmete edastamiseks ja
tulemuste väljatrükkimiseks (ekraanile). Selleks, et programm oleks interaktiivne, et kasutaja saaks arvutiga programmi
läbi suhelda. Lisaks sellele on programmidel teinekord vaja suhelda ka failidega – andmeid lugeda või kirjutada.
Piirdume esialgu sisendiga klaviatuurilt ja väljundiga ekraanile, mida tavatsetakse kutsuda standardsisendiks ja
standardväljundiks. Nii sisend kui väljund tehakse Python-programmis sisefunktsioonide (built-in function) abil.

Siini ehitus
----------

* Seni vaatlesime üksikuid süsteemielemente
* Need on vaja ühendada selliselt, et infot saaks liigutada ühelt
seadmelt teisele
* Seda ülesannet täidab siin (bus)
* Lisaks andmetele peab siin üle kandma ka aadressiinfo ja
juhtimiskorraldused

Seadmete adresseerimine
------------
* Siinil on liinid
  * aadresside,
  * andmete
  * juhtsignaalide jaoks
* Igal I/O seadmel on oma unikaalne aadress
* Kui protsessor saadab aadressisiinile konkreetse seadme
aadressi, siis seade, kellele info mõeldud on, hakkab täitma
juhtsignaalide poolt etteöeldavat käsku
  * Read
  * Write
  * Seejärel saadetakse vastavad andmed andmesiinile

Memory-mapped I/O
--------------

* Memory-mapped I/O – nii mälu kui ka seadmed kasutavad
sama aadressiruumi
* Kõik käsud, millega saab pöörduda mälu poole, sobivad
siin ka seadmetele andmete saatmiseks või neist andmete
lugemiseks.
* Load R1,DATAIN
* Store R1,DATAOUT
* Enamik arvutisüsteeme kasutabki
Memory-mapped I/O‘d

Eraldi aadressiväli sisend-väljundseadmete jaoks
------------- 

* Teistel on spetsiaalsed I/O käsud ja eraldi 16-bitine
aadressiväli I/O seadmete jaoks
* NB! Eraldi aadressiväli ei tähenda eraldi traate aadresside
jaoks!!!
* Spetsiaalne signaal siinil näitab, et tegemist on I/O
operatsiooniga
  * Mälu ignoreerib selliseid käske
  * I/O seade uurib aadressivälja madalamaid bitte saamaks teada,
kas käsk on mõeldud talle

Sisend/väljund operatsioonid
-----------

* Sisend/väljund operatsioonide tegemisel on mureks, et
sisend/väljund seadmed ei suuda töötada sama kiiresti kui
protsessor
* Seega on vaja andmete saatmine nende seadmete vahel
sünkroniseerida
  * Protsessor saadab väljundseadmele info ja ootab seadmelt vastust
  * Sisendseade tõstab lipu üles ja ütleb sellega protsessorile: mul on
sinu jaoks andmeid

Program controlled I/O
-----------

* Eelmine programm illustreeris programmi poolt kontrollitavat
sisend/väljundit
(program controlled I/O)
  * protsessor kontrollib pidevalt staatuslippe tagamaks sünkroniseeritud
andmevahetuse sisend- ja väljundseadmega
  * Processor polls the device
* Sellise programmi korral toimetab protsessor suurema osa ajast
ootamistsüklites
* Tohutu ressursi raiskamine L
* Mõistlik kasutada
  * katkestusi või
  * Otsemälupöördumisi (Direct Memory Access)

IRQ
-------

* Katkestuse soovi (Interrupt ReQuest) korral saadab seade
protsessorile spetsiaalse signaali millal iganes ta on valmis
suhtlema
* Protsessor ei pea nüüd enam tegelema pideva seadmete
registrite küsitlemisega ja saab oma aega kasutada teiste
tööde jaoks

Katkestused
----------

* Seade saadab protsessorile riistvaralise signaali /tarkvaralise
käsu (katkestus, interrupt), millega annab teada oma
valmisolekust andmevahetuseks
* Katkestuse teenindamise protseduur
(Interrupt-service routine)
* Protsessor saab nüüd ootamise asemel tegeleda kasulike
asjadega, ideaalvariandis saame ootamisperioodidest
täielikult lahti 

* Enne katkestuse täitmist tuleb salvestada kogu info, mis
katkestuse täitmise käigus muutuda võib
* Enne katkestusest naasmist tuleb kogu info uuesti taastada
  * nii saab algne programm jätkata samast kohast kus enne töö pooleli jäi
  * ainus kaotus on ajaline viivis
* Salvestatakse
  * programmiloenduri sisu
  * seisundilipud
  * registrid, mida mõlemad (algne programm ja interrupt-service routine)
kasutavad

* Info salvestamine ja taastamine on raisatud aeg programmide töökiiruse
mõttes
* Samuti pikeneb nii aeg, mil katkestuse nõue reaalselt täidetud saab
(interrupt latency)
* Mõnedel juhtudel pole pikk viivis katkestusesoovi saabumisest reaalse
täitmiseni aktsepteeritav
* Seetõttu salvestavad tänapäeva protsessorid ainult nii palju infot kui on
hädavajalik katkestusele eelnenud programmikohast jätkamiseks
* Näiteks nii, et
  * PC ja staatusregister salvestatakse protsessori riistvara poolt
  * kõik ülejäänud info juba katkestuse protseduuri alguses
katkestuse protseduuri enda poolt

* Üks lahendus on kasutada erineva reaktsiooniajaga katkestusi
  * kiirete puhul EI SALVESTATA registrite sisu
  * aeglaste puhul SALVESTATAKSE
  * konkreetne seade saab valida, kumba parasjagu tarvitada
* Teine alternatiiv: topelt registrid protsessoris
  * Shadow registers
  * nüüd pole salvestada üldse tarvis
* Katkestused võimaldavad üle anda juhtimise ühelt programmilt
teisele välise info laekumise alusel
* real-time processing – protsessori toimetamised on ajastatud
vastavalt välistele sündmustele

* Lisaks sellele, et seade paneb liinile püsti katkestuse soovi,
peab protsessor seadet informeerima katkestusesoovi
rahuldamisest
  * interrupt-acknowledge signaal
  * andmevahetuse alustamise käsu käivitamine katkestuse
teenindamise protseduuris võib anda seadmele sama info
* Erinevus alamprogrammi ja katkestuse protseduuri vahel:
katkestuse protseduur kutsutakse välja suvalisel hetkel
(käigusoleva programmi ajaarvamise mõttes)
  * käigusolev programm ja katkestuse väljakutsunud programm võivad
olla lausa eri kasutajate omad

Katkestuste lubamine-keelamine
-------------------

* Katkestuse lubamine suvalisel ajahetkel võib olla vastuolus
programmeerija soovituga
* Seetõttu peab olema mehhanism katkestuste haldamiseks
  * Interrupt-enable
  * Interrupt-disable
* Soovitud katkestus tuleb täitmisse võtta üks ja ainult üks kord,
s.t aktiivne katkestuse-soovi signaal ei tohi põhjustada arvuti
lõputusse tsüklisse sattumist
* Järgnevalt vaatame kolme võimalust 

Katkestuste lubamine-keelamine võimalus 1
-------------------

* Protsessori riistvara ignoreerib katkestusesoovi signaali
seni kuni katkestuse teenindamise protseduuri esimene
käsk saab täidetud
* Nüüd saab programmeerija alustada (soovi korral)
katkestuse teenindamise protseduuri käsuga interruptdisable
* Nii välistame uued katkestused kuni käesoleva täitmise
lõpuni
* Enne tagasipöördumist katkestuse teenindamise
programmist antakse käsk interrupt-enable

Katkestuste lubamine-keelamine võimalus 2
--------------------

* Protsessor võib automaatselt blokeerida katkestused peale
katkestuse teenindamise protseduuri algust
* Peale PC (program counter) ja PS (processor status
register) sisu salvestamist pinus seatakse interrupt-enable
bitt PS registris nulliks (passiivne) ja rohkem katkestusi ei
aktsepteerita
* Katkestusest naasmisel kopeeritakse PC ja PS sisu tagasi
  * sealhulgas ka interrupt-enable bitt PS registris üheks (aktiivseks)
  * nüüd on jälle kõik katkestused lubatud

Katkestuste lubamine-keelamine võimalus 3
--------------------

* Katkestuse soovi liinil kasutatakse frondilt käivituvaid
trigereid, s.t katkestuse soovi arvestatakse nüüd ainult üks
kord, sõltumata sellest kui pikalt katkestuse soovi signaal
aktiivne on

Kokkuvõte katkestuse täitmise stsenaariumist
------------------

1. Seade avaldab soovi katkestuseks
2. Protsessor katkestab jooksva programmi täitmise
3. Uued katkestused blokeeritakse kontrollbiti passiivseks
seadmisega PS registris
4. Seadmele öeldakse, et tema katkestusesoov on
aktsepteeritud
5. Seade võtab katkestusesoovi maha
6. Soovitud katkestuseprotseduur täidetakse
7. Lubatakse uued katkestused ja protsessor naaseb
katkestatud programmi täitmise juurde

Katkestused paljude seadmega süsteemides
------------------

* Kuidas protsessor tuvastab katkestusesoovija?
* Kui katkestuse protseduurid on eri seadmete jaoks erinevad, kust
protsessor teab milliselt aadressilt katkestuse protseduuri alustada?
* Mis juhtub siis, kui seade A soovib katkestust ajal kui protsessor juba
täidab seadme B katkestusesoovi?
  * Kas esimese katkestuse täitmise ajal tuleks uut katkestust
hakata kohe teenindama?
  * Või oodata esimese täitmist ja alles siis hakata teenindama
uut?
* Mis juhtub siis, kui katkestusesoovid laekuvad üheaegselt?

Katkestuse vektor
-----------

* Katkestust sooviv seade võib ennast ka otseselt protsessorile tutvustada,
saates protsessorile siini vahendusel spetsiaalse koodi.
* Selleks koodiks võib olla näiteks katkestuse teenindamise protseduuri
aadress
* … või osa sellest (4-8 bitti). Ülejäänu lisab protsessor ise.
* Kui sellesse kohta panna tegelikule katkestuse- programmile viitav
hargnemise aadress, siis anname programmeerijale täiendavalt veidi
lisavõimalusi koodi kirjutamisel.
* Oluline on, et protsessor oleks valmis seda katkestuse vektori infot vastu
võtma

Interrupt nesting
-------------

* Eelnevalt soovitasime, et ühe katkestuse täitmisel peame
teiste katkestuste täitmisele võtmise blokeerima
* Alati pole see võimalik
  * näide reaalaja kellast
* Vajalik paika panna prioriteedid
  * katkestuse soov kõrgema prioriteediga seadmelt tuleks
aktsepteerida isegi siis, kui parasjagu mõne madalama
prioriteediga seadme katkestust täidetakse

Prioriteedid
-------------

* Protsessori prioriteediks on tema poolt parasjagu
täidetava programmi prioriteet
* Kui katkestust soovitakse kõrgema prioriteediga seadme
poolt, siis katkestus võetakse täitmiseks
* Katkestuse täitmise ajaks saab protsessor nüüd katkestust
soovinud seadme prioriteeditaseme
* Kui katkestust soovitakse madalama prioriteediga seadme
poolt, siis katkestus ei võeta täitmiseks
* Prioriteedid kodeeritakse protsessori staatusregistri paari
bitti

* Protsessori staatusregistrit saavad muuta käsud, mida
antakse supervisor moodis
* Protsessor on selles moodis ainult operatsioonisüsteemi
käskude käivitamisel
* Kasutajamoodil neid õigusi ei ole
* Rakendusprogrammi täitma asudes lülitub protsessor
kasutajamoodi
  * seega ei saa rakendusprogramm juhuslikult ega tahtlikult prioriteete
muuta
  * privilegeeritud käsu käivitamise katse kutsub välja spetsiaalse
katkestuse priviledge exception

Erandid (Exceptions)
---------

* Recovery from errors
  * Näide: mida teha, kui programm käsib nulliga jagada?
* Debugging
  * trace
  * breakpoint
* Priviledge exception