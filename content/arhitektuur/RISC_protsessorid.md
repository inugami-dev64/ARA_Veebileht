+++
title = 'RISC protsessorid'
date = 2023-11-29T14:11:44+02:00
draft = false
teemad = ['Protsessor']
+++

Kärbitud käsustikuga arvuti (ingl reduced instruction set computer, RISC) on mikroprotsessor, mis on välja töötatud nii, et see saavutab suurema töökiiruse läbi täidetavate käskude arvu minimeerimise. Käskude täitmise kiirust mõõdetakse selle järgi, et mitu miljonit operatsiooni sekundis suudab arvuti sooritada (MIPS – millions of instructions per second). Seda põhjusel, et iga lisanduv käsutüüp nõuab rohkem transistoreid ning suuremat ja keerulisemat protsessorit. Suurem hulk käsutüüpe ja käske tähendab paratamatult suuremat, keerukamat, aeglasemat ja ka kallimat mikroprotsessorit.

Sõna "kärbitud" (reduced) ei viita siin tarbetute käskude kustutamisele, vaid ühe käsu täitmise kiirendamisele. Kõige tavalisemalt teostatakse see ühe suure ja mahuka operatsiooni jagamisega mitmeks osaks (RISC protsessori puhul neljaks) ja iga taktiga täidetakse üks operatsioon. See erineb CISC-protsessorist, kus mahukas operatsioon sooritatakse tervikuna korraga.

Protsessor - Basic Processing Unit
----------------------

* Protsessor käivitab masinkoodi käske ja koordineerib arvuti teiste üksuste tööd
* Instruction Set Processor (ISP) või lihtsalt processor
* Tavapäraselt kutsutakse protsessorit ka Central Processing Unit (CPU)
* Suure jõudlusega tänapäevastes protsessorites täidetakse käske paralleelselt
* Variant üks – käsud aetakse torusse (pipeline)
    * Järgneva käsu täitmist alustatakse veel enne kui eelmine käsk on täidetud
* Alternatiivne variant – superskalaarne arvuti
    * Mitu käsku tuuakse korraga protsessorisse ja täidetakse üheaegselt

Põhitõed
------------

* Programmi käivitamisel
    * loetakse käsud ükshaaval protsessori registrisse ja seejärel
    * tehakse seda mis käsk käsib
* Käsud on enamasti mälus üksteise järel
    * v.a hargnemise (branch) või hüppe (jump) korral
* Protsessor peab meeles, kus kohal mälus asub järgmine käsk (programmiloendur, program counter)
    * Peale käsu sisselugemist uuendatakse programmiloendurit
* Käsuregister, instruction register

Load R1,X(R2)
------------

* Loe mälust käsuinfo ja suurenda programmiloenduri väärtus
ühe astme võrra
* Dekodeeri käsk ja loe registri R2 sisu
* Arvuta efektiivne aadress X + [R2]
* Loe mälust aadressilt X+[R2] lähteargumendi väärtus
* Salvesta see registrisse R1

Add R1,R2,R3
-----------

* Loe mälust käsuinfo ja suurenda programmiloenduri
väärtus ühe astme võrra
* Dekodeeri käsk ja loe registrite R2 ja R3 sisu
* Arvuta summa [R2] + [R3]
* Oota! Ära tee midagi Salvesta see registrisse R1

Add R1,R2,#10000
-----------

* Loe mälust käsuinfo ja suurenda programmiloenduri
väärtus ühe astme võrra
* Dekodeeri käsk ja loe registri R2 sisu
* Arvuta summa [R2] + 10000
* Oota! Ära tee midagi
* Salvesta see registrisse R1

Store R1,X(R2)
------------

* Loe mälust käsuinfo ja suurenda programmiloenduri väärtus ühe astme võrra
* Dekodeeri käsk ja loe registrite R1 ja R2 sisu
* Arvuta efektiivne aadress X + [R2]
* Salvesta mällu aadressile X+[R2] lähteargumendi väärtus
* Oota! Ära tee midagi

Viieastmeline tegevuste järjekord
-------------

* Loe mälust käsuinfo ja suurenda programmiloenduri väärtus ühe astme võrra
* Dekodeeri käsk ja loe registri(te) sisu
* Arvuta, mida tarvis
* Loe mälust või salvesta mällu, kui tarvis
* Salvesta tulemus registrisse, kui tarvis

Käsu laadimine ja käivitamine
---------------

Add R1,R2,R3
1. Mälu aadressï[PC], Loe mälust, IRïMälu andmed, PCï[PC]+4,
2. Dekodeeri käsk, RAï[R2], RBï[R3]
3. Arvuta summa RZï[RA]+[RB]
4. RYï[RZ]
5. Salvesta registrisse R1ï[RY] 

Load R1,X(R2)
1. Mälu aadressï[PC], Loe mälust, IRïMälu andmed, PCï[PC]+4,
2. Dekodeeri käsk, RAï[R2]
3. Arvuta aadress RZï[RA]+X
4. Mälu aadressï[RZ], Loe mälust, RYïMälu andmed
5. Salvesta registrisse R1ï[RY] 

Store R1,X(R2)
1. Mälu aadressï[PC], Loe mälust, IRïMälu andmed, PCï[PC]+4,
2. Dekodeeri käsk, RAï[R2], RBï[R1]
3. Arvuta aadress RZï[RA]+X, RMï[RB]
4. Mälu aadressï[RZ], Mälu andmedï[RM], Salvesta mällu
5. Oota! Ära tee midagi

Branch BranchOffset
1. Mälu aadressï[PC], Loe mälust, IRïMälu andmed, PCï[PC]+4,
2. Dekodeeri käsk
3. Arvuta aadress PCï[PC]+Hargnemise nihe
4. Oota! Ära tee midagi
5. Oota! Ära tee midagi

Branch_if_[R1]=[R2] BranchOffset
1. Mälu aadressï[PC], Loe mälust, IRïMälu andmed, PCï[PC]+4,
2. Dekodeeri käsk, RAï[R1], RBï[R2]
3. Võrdle [RA] ja [RB], Kui [RA]=[RB], siis arvuta aadress PCï[PC]+Hargnemise nihe
4. Oota! Ära tee midagi
5. Oota! Ära tee midagi

Call R1
1. Mälu aadressï[PC], Loe mälust, IRïMälu andmed, PCï[PC]+4,
2. Dekodeeri käsk, RAï[R1]
3. Ajutine-PCï[PC], Arvuta aadress PCï[RA]
4. RYï[Ajutine-PC]
5. RegisterLINKï[RY]

Mälu järel ootamine
-------------------

Load R1,X(R2)
1. Mälu aadressï[PC], Loe mälust, Oota MFC, IRïMälu andmed, PCï[PC]+4,
2. Dekodeeri käsk, RAï[R2]
3. Arvuta aadress RZï[RA]+X
4. Mälu aadressï[RZ], Loe mälust, Oota MFC, RYïMälu andmed
5. Salvesta registrisse R1ï[RY]

Juhtsignaalide genereerimine
-------------------------

* Programmide käivitamiseks peab protsessor suutma genereerida juhtsignaale
    * Hardwired
    * Microprogrammed
* Juhtsignaalide vajaduse määravad
    * Sammuloenduri sisu
    * Käsuregistri sisu
    * Arvutuste tulemused, võrdlemiste tulemused
    * Välised sisendsignaalid, nagu MFC ja IRQ

Hardwired control
-----------------

* Programmide käivitamiseks peab protsessor suutma
genereerida juhtsignaale

Juhtsignaalid
--------------

* Kirjuta_Reg = T5 * (ALU + Load + Call)
* Vali_B = Otsene
* Luba_loendur = WMFC + MFC
    * Loendur töötab alati siis, kui WMFC pole aktiveeritud
    * Kui on aktiveeritud, siis vaja saada MFC aktiivseks, enne edasi ei lähe
* Luba_PC = T1* MFC + T3 * BR