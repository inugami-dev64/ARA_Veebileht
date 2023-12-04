+++
title = 'Käsustiku arhitektuur'
date = 2023-11-29T14:11:44+02:00
draft = false
teemad = ['Mälu', 'Protsessor', 'Käsustik']
+++

Arvuti arhitektuur määrab arvuti loogikalise struktuuri ja tööviisi, sealhulgas riistvara ja tarkvara komponentide omavahelised seosed.
Käsustiku arhitektuur (ingl instruction set architecture, lühend ISA) on arvuti arhitektuuri see osa, mis liidestab tarkvara riistvaraga.

Mälu
---------------

* Mälu koosneb miljonitest rakkudest
* Igas rakus saame salvestada ühe biti infot
  * ehk siis võimalikud olekud on 0 ja 1
* Tavaliselt loetakse-kirjutatakse infot n biti kaupa
* andmeühikuks on sõna, ingl word, kus n on sõna pikkus
* Tänapäevastes arvutites on sõna pikkuseks 16 – 64 bitti

Mälu on sõnade kogum
------------

* Igal mälupesal on oma kindel nimi –
aadress
* Tavaliselt on selleks arvud
0 … 2k
-1
* Seega 2k võimalikku adresseeritavat
asukohta
* Näiteks 232 = 4 Gi = 4 294 967 296

Sõna
------------

* Selline nummerdamine on kõige loomulikum viis numbrite
kirjapanemiseks
* 8-bitist andmeühikut kutsutakse baidiks (byte)
* Sama skeemi kasutatakse ka baidi sees bittide nummerdamiseks
* Neli ASCII koodis tähte

Mälu operatsioonid
------------

* Programmi käsud tuleb tuua mälust protsessorisse
* Parameetrid ja andmed tuleb samuti tuua mälust
protsessorisse
* Vastus tuleb salvestada protsessorist mällu
* Load, Read, Fetch
  * Ütleme, mis aadressil paikneb meid huvitav info
  * Loeme sealt aadressil info protsessorisse
* Store, Write
  * Ütleme, millisesse mälupesasse tahame andmeid kirjutada
  * Kirjutame andmed viidatud aadressiga mälupesasse

Arvuti ülesanded
------------

* Andmete liigutamine protsessori registrite ja mälu vahel
* Aritmeetika ja loogikaoperatsioonide tegemine andmetega
* Programmi käskude järjestamine ja juhtimine
* Sisend/väljund operatsioonid

RISC ja CISC käsustikud
------------

* Reduced Instruction Set Computer
  * Kõik käsud koos argumentidega mahuvad ühte sõnasse
  * Kasutatakse Load/Store arhitektuuri
  * Näiteks: Altera Nios II, ARM (pole tegelikult päris puhas RISC)
* Complex Instruction Set Computer
  * Käsud võivad olla pikemad kui üks sõna
  * Argumendid ka näiteks mälupesades
  * Näiteks: ColdFire, Intel IA-32 (pole tegelikult päris puhas CISC)

RISC
------------

* Reduced Instruction Set Computer
  * Kasutatakse lihtsaid ja lühikesi käske
  * Load R3,LOC1
  * Add R3,R2,R0
  * Store R0,LOC1
* Kõik käsud peavad mahtuma ühe sõna sisse
* Kasutatakse Load/Store arhitektuuri, st mäluga suhtlemine käib ainult Load/Store
käskudega
  * Näiteks käsk Add LOC1,R0 pole siin lubatud
  * Selle asemel Load R1,LOC1
  * Add R1,R1,R0
  * Store R1,LOC1
* ja kõik aritmeetika/loogika operandid peavad olema kas
  * protsessori registrites
  * või siis antud otseselt käsus endas

Põhilised käsu tüübid
-----------

* Load destination, source
* Load processor register, memory_location
* Add destination, source1, source2
  * R0←[R1]+[R2]
  * Add R0,R1,R2
  * Lähteandmed R1 ja R2
  * Tulemus R0
* Store source, destination
* Store processor register, memory_location

Muutujate kirjeldamine
-----------

* Registri mood – operandiks on protsessori registri sisu, käsus
antakse registri aadress (nimi)
* Absoluutne (otsene) mood – operandiks on mälupesa sisu,
käsus antakse selle aadress
* Näide:
  * Käsuga int arv1, arv2; kirjeldame C-keeles täisarvulised muutujad
arv1 ja arv2. Neile vastavad konkreetsed mälupesad/registrid,
millele saab absoluutses/registri moodis viidata
  * Käsus load R5,LOC on esimene operand esitatud registri moodis,
teine aga absoluutses moodis
  * esimese operandi väärtuseks on registri R5 sisu, teise
operandi väärtuseks mälupesa LOC sisu

Konstantide kirjeldamine
-----------

* Immediate mood – operandi väärtus antakse juba käsus
endas
* Näide:
  * Käsus Move R5,#500 on esimese operandi väärtuseks registri R5
sisu, teise operandi väärtuseks aga 500
  * Näiteks tehte arv1 = arv2 + 8; saame kirja panna
Load R1,arv2
Add R1,R1,#8
Store R1,arv1
  * arv1 ja arv2 tuleb loomulikult eelnevalt muutujatena deklareerida
ja mälupesaga seostada

Suunamine ja viidad argumendile
-----------
* Kaudne mood – operandi efektiivne aadress antakse registri
aadressina kus operandi aadress kirjas on
* Näide:
  * Käsus Load R5,(R1) on esimese operandi väärtuseks registri R5
sisu, teise operandi väärtuseks aga registris R1 viidatud aadressil
asuva mälupesa sisu
  * Käsus Load R2,(R4) on esimese operandi väärtuseks registri R2
sisu, teise operandi väärtuseks aga registris R4 viidatud aadressil
asuva mälupesa sisu
  * registrit, kus efektiivne aadress kirjas on kutsutakse viidaks e
pointer’iks

CISC
---------

* Complex Instruction Set Computer
* Lubab kasutada erineva pikkusega käske
  * St käsk võib olla pikem kui üks sõna
* Operand võib olla ka mälupesa
* Sellised käsud on reeglina juba küllaltki keerulised

Põhilised käsu tüübid
-----------

* Store R0,LOC1
  * Võtame kasutusele kahesõnalise käsu 
* Move LOC2,LOC1
  * Võtame kasutusele kolmesõnalise käsu 
  
CISC arvuti adresseerimise näited
-------------------
Autoincrement mood -- väga sarnane kaudse moodiga.
Operandi efektiivne aadress antakse mälu või registri aadressina kus operandi
aadress kirjas on. Peale operandi kättesaamist suurendatakse registri sisu ühe
ühiku võrra.
  * ühik valitakse selline, et aadress viitaks järgmisele elememendile
  * 1 baidisuuruse operandi puhul,
  * 2, kui operand on 16 bitti
  * 4, kui operand on 32 bitti
  * Tähis (Ri)+
* Autodecrement mood – Enne operandi kättesaamist vähendatakse registri sisu
ühe ühiku võrra. Operandi efektiivne aadress antakse mälu või registri aadressina
kus operandi aadress kirjas on.
* Tähis –(Ri)

* Indeks moodiga väga sarnane mood on baas koos indeksiga
– (Ri
, Rj
)
  * Viidatakse aadressile Ri + Rj
* ja baas koos indeksi ja nihkega
  * X(Ri
, Rj
)
  * Viidatakse aadressile X + Ri + Rj
  * Seda kasutatakse kolmemõõtmelise massiivi kirjeldamisel
* Suhteline mood – sisuliselt indeks mood, aga registriks on PC
(Program Counter)
  * tüüpiline kasutus Branch>0 LOOP käsu sihtkoha kirjeldamiseks.
Näiteks kujul –16(PC)

Staatus-register
----------------

* Condition code register või status register
* Vastavalt tulemusele seatakse lipud kas
0 või 1
  * N (negatiivne) – kui tulemus on negatiivne siis 1; muidu 0
  * Z (null) – kui tulemus on null siis 1; muidu 0
  * V (ületäitumine) – kui leidis aset aritmeetiline ületäitumine siis 1; muidu 0
  * C (ülekanne) – kui leidis aset ülekanne (carry-out) siis 1; muidu 0
* Mõnedes protsessorites muutuvad lipud automaatselt, teistes on eraldi käsud,
millega lippude muutmine kaasneb
  * Add (ei muuda lippe)
  * AddSetCC (muudab lippe)

Pinu (stack)
-------------

Andmete kogum (tavaliselt baidid või sõnad), mille puhul saab
elemente lugeda/kirjutada ainult ühest andmekogumi otsast
(ülemisest)
* Analoog: söökla kandikute virn
* LIFO (last-in-first-out)
* Spetsiaalne register (stack pointer) peab meeles, millisel
aadressil asub pinu kõige värskem element
* Pinu kasvab tavaliselt väiksemate aadresside suunas

Alamprogrammid
--------------

* Sageli on tarvis mingit kindlat ülesannet teha palju kordi
* Üks võimalus on kirjutada alamprogramm
* See kutsutakse välja (call) iga kord, kui seda ülesannet teha
vaja on
* Peale alamprogrammi täitmist on vaja endisesse kohta tagasi
jõuda (return)
  * kuna alamprogrammi kutsutakse välja erinevatest kohtadest, siis on
ka potentsiaalseid naasmiskohti palju
  * teine keerukus on selles, et peale naasmist peab
programmiloenduri sisu vastama uuele/vanale/ olukorrale (ehk siis
call käsk peab
selle info kuskil talletama)

Subroutine linkage method
-------------------

* Link-registris salvestatakse tagasipöördumise aadress (sisuliselt
PC sisu)
* Tagasipöördumisel viidatakse kaudselt sellele registrile
* Probleem
* sageli juhtub nii, et alamprogrammi sees on tarvis kasutada
teist alamprogrammi
* ka selle alamprogrammi jaoks on vaja link-registris salvestada
tagasipöördumise aadress
* Lahendus: kasutatakse pinu

Parameetrite edastamine
------------------

* Alamprogrammi väljakutsumisel tuleb saata sinna ka teatav
hulk parameetreid
* Alamprogrammist naastes on vaja põhiprogrammi tuua
rehkenduse tulemus(ed)
  * Üks võimalus on kasutada registreid või mälu
  * Teine võimalus on panna parameetrid/andmed pinusse
* Väikese arvu parameetrite korral on esimene variant lihtsam
* Pinu kasutamine on paindlikum lahendus – saab edastada palju
parameetreid/andmeid

Stack pointer ja Frame pointer
-----------------------

 Lisaks Stack pointer’ile on kasulik sisse tuua veel teine pointer
  * frame pointer
* Frame pointer võimaldab mugavalt viidata muutujatele pinus
* Stack pointeriga seda teha ei saa, kuna SP ei seisa ühe koha
peal (muutuja lisamisel/kustutamisel SP väärtus muutub)
* Tavaks on, et FP viitab vahetult tagasipöördumise aadressi
peal olevale väljale
* Sellel väljal salvestatakse FP senine väärtus

Loogikakäsud
-----------

* Loogikaahelate ülesehitamisel on ehituskivideks NING (AND), VÕI (OR) ja EI (NOT)
ahelad
* Mõnikord on kasulik suuta teha neid operatsioone ka tarkvaraliselt
* Näide 1: Positiivsest täisarvust negatiivse saamine. Olgu arvuks +5 (0101) registris
R1
  * Not R1 annab meile -6 (1010)
  * Add R1,R1,#1 annab meile -5 (1011)
* Näide 2: Olgu meil tarvis kindlaks teha, kas registris R1 oleva 32-bitise sõna
parempoolseim täht on X. ASCII koodis on täht X: 01011000 ehk 0x58
  * And R1,0xFF
  * Compare R1,0x58
  * Branch_if_[R1]=0 …

Korrutamine ja jagamine
----------------
 Enamuses käsustikke võimaldavad teha korrutamistehet:
Rk←[Ri]´[Rj]
* Multiply Rk,Ri,Rj
  * kui sisendsuurused on n-bitised, siis vastus võib olla kuni 2n-bitine
  * seega võib tulemuse salvestamiseks vaja minna kahte registrit
* Mõned käsustikud võimaldavad teha ka jagamistehet:
Rk←[Ri]/[Rj]
* Divide Rk,Ri,Rj
  * siin on vaja salvestada nii täisosa kui ka jääk
  * seega võib tulemuse salvestamiseks vaja minna kahte registrit
  * mõnikord jäetakse jääk ka arvestamata

Nihe
----------------

Paljudes rakendustes on tarvis nihutada operandi bitte
paremale või vasakule etteantud arvu kohtade võrra
* Loogiline nihe
  * LShiftL asukoht,arv
  * LShiftR asukoht,arv
* Aritmeetiline nihe
  * AShiftR asukoht,arv

Pööre
--------

* Nihke puhul lähevad osad bitid kaotsi
* Pöörde korral saame kogu info siiski säilitada
* Pööre ilma ülekannet (Carry) kasutamata
  * RotateL asukoht,arv
  * RotateR asukoht,arv
* Pööre ülekannet (Carry) kasutades
  * RotateLC asukoht,arv
  * RotateRC asukoht,arv

Masinkood
------------
* Protsessoris käivitamiseks tuleb kõik käsud kodeerida
  * see ei ole enam assemblerkeel (Assembly language)
  * vaid binaarkood
  * seda binaarkoodi kutsutakse masinkoodiks

  
