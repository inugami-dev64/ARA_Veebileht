+++
title = 'Mälu arhitektuuri vaates'
date = 2023-11-29T14:11:44+02:00
draft = false
teemad = ['Mälu']
+++

Arvuti mälu on funktsionaalüksus (mäluseade) või keskkond, kuhu saab andmeid paigutada, kus neid saab hoida ja kust neid saab kasutamiseks võtta.[1] Peamiselt on arvutis kasutusel mitut liiki pooljuhtmälud, mille algüksused – mäluelemendid – põhinevad transistorlülititel. Mäluelementidesse salvestatakse andmed lüliti kahe olekuna (voolu juhtiv/mittejuhtiv), mis esitavad kahendsüsteemis biti väärtust 1 või 0. Andmete talletamiseks rakendatakse veel ka magnetsalvestuse tehnikat.

Mälust üldiselt
--------------
* Ideaalne mälu on
    * kiire,
    * suur
    * maksab vähe
* Need soovid on kahjuks vastandlikud…
* Mälu maksimaalse suuruse määrab ära adresseeritav ala
    * 16-bitised aadressid võimaldavad kasutada216 = 65 536 mälupesa
    * 32-bitised aadressid võimaldavad kasutada 232 = 4 294 967 296 mälupesa jne
* Infot salvestatakse ja loetakse enamasti sõnade kaupa
* Bittide arv, mida saab ühe käsuga mälust lugeda või mällu kirjutada on kõige tüüpilisemaks sõna pikkuse definitsiooniks
* Mälu aadress võidakse ette anda
    * iga sõna jaoks
    * või ainult esimese sõna jaoks plokis
* Mäluga suhtlust võivad juhtida
    * taktsignaalid
    * või spetsiaalsed siini juhtsignaalid
* Mälu pöördumisaeg (memory access time)
    * Ajavahemik Read/Write ja Memory Function Completed signaalide vahel
* Mälutsükli kestus (memory cycle time)
    * Ajavahemik kahe järjestikuse Read/Write signaali vahel
* Suvapöördusega mälu (RAM – random access memory)
    * kõigis mälupesades sisalduv info saadakse kätte ühesuguse kiirusega
* Jadapöördusseadmete puhul on andmetele juurdepääsu aeg sõltuvuses konkreetse andmete asukohast/aadressist 

Vahemälu ja virtuaalmälu
------------------

* Protsessor suudab reeglina infot kiiremini töödelda kui seda võimaldab tavaline mälutsükli kestus
* Üheks võimaluseks mälutsükli kestust lühendada on vahemälu (cache memory) kasutamine
    * väike aga kiire mälu, mis on paigutatud protsessori ja põhimälu vahele
    * selles hoitakse programmi jaoks aktiivset infot (nii käske kui ka andmeid)
* Mälu näiva mahu suurendamist võimaldab virtuaalmälu tehnoloogia
    * põhimälus hoitakse ainult aktiivset osa virtuaalsest aadressiruumist
    * Ülejäänu paikneb aeglasemal andmekandjal, tavaliselt kõvakettal
    * Programmi töö käigus aktiivse piirkonna asukoht muutub ja vastavalt tuuakse ka kõvakettalt infot põhimälusse (ja visatakse sealt midagi hetkel vähem olulist minema)

Pooljuhtmaterjalist suvapöördusmälud (RAM)
------------------

* RAM (Random Access Memory)
    * võeti kasutusele eelmise sajandi kuuekümnendate aastate lõpus
* Mälukiibi ehitus
    * mälurakud paigutatakse enamasti massiividena, kus iga element suudab salvestada ühe biti infot

SRAM
-------

* SRAM (Static Random Access Memory)
* Need mälud suudavad säilitada infot seni kuni nad saavad voolu
* Voolu väljalülitamisel info kaob

Asünkroonne DRAM
-------------

* Staatilised mälud on kiired, aga kallid
    * igas rakus palju transistore
* DRAM (Dynamic Random Access Memory)
* Info salvestatakse kondensaatori laenguna
* DRAM’id on
    * oluliselt odavamad
    * info nendes kustub teatava aja möödudes
    * vajavad värskendamist
* Laeng säilib kondensaatoril mõned kümned millisekundid

Ühe transistoriga DRAM rakk
-----------------------

* Info salvestamiseks lülitatakse transistor sisse ja rakendatakse pinge biti liinile
* Nii salvestub kondensaatoris kindel hulk laengut
* Transistori väljalülitamisel hakkab kondensaator tühjenema

Lugemine
--------

* Info lugemisel lülitatakse transistor sisse
* Biti liiniga ühendatud võimendi saab aru, kas kondensaator on laetud üle läveväärtuse või mitte
    * kui on, siis ühendatakse biti liin pingeallikaga ja laetakse kondensaator uuesti täis
    * mälurakus on salvestatud loogiline 1
    * kui ei ole, siis ühendatakse biti liin maagaja laetakse kondensaator täiesti tühjaks
    * mälurakus on salvestatud loogiline 0
* Nagu näeme, värskendab mälu lugemine automaatselt mälus sisalduva info

Asünkroonne DRAM
-------------

* Seni vaadeldud DRAM rakkude juhtsignaalid olid asünkroonsed
    * spetsiaalne mälu juhtloogika ahel genereeris vajalikud juhtsignaalid
    * asynchronous DRAM

Fast page mode
-----------

* Eelmisel slaidil kujutatud DRAM mooduli puhul aktiveeriti terve rida, aga reaalselt loeti ainult 8 bitti andmeid
* Lisades tulpade liinide otsa trigerid, saame salvestada kogu antud rea sisu ja pärast, ilma rida uuesti aktiveerimata, selle info edastada
* Üheks rakenduseks oleks plokkide kaupa (järjestikuste) andmete edastamine
    * järjestikused tulpade aktiveerimised järjestikuste CAS signaalide juhtimisel
    * fast page mode
    * see on oluliselt kiirem kui juhusliku mälupesa lugemine
* Kus kasutatakse?
    * regulaarse mustriga mälu-lugemised (näiteks graafika terminalides)
    * andmete lugemisel vahemällu 

Sünkroonne DRAM
--------------

* Synchronous Dynamic Random Access Memory (SDRAM)
* Selle mäluga suhtlus toimub sünkroonselt taktsignaaliga
* Ehitus väga sarnane asünkroonse DRAM’i ehitusega
* Värskendusahelad
    * sageli juba DRAM kiibi sees
    * sel juhul kasutaja ei tajugi mäluraku dünaamilist ehitust

Latentsusaeg ja läbilaskevõime
---------------------

Latentsusaeg
* Latency
* Aeg, mis kulub ühe sõna ülekandmiseks mälust või mällu
* Andmete plokkide kaupa ülekandmisel on see aeg, mis kulub esimese sõna kättesaamiseks 
Läbilaskevõime
* Bandwidth
* Bittide või baitide arv, mida on võimalik ajaühikus üle kanda (plokkide kaupa andmeid liigutades)
* seda numbrit mõjutavad nii mälu kui ka siini kiirus

DDR SDRAM
--------

* Double Data Rate Synchronous Dynamic Random Access Memory (DDR SDRAM)
* Tavalise SDRAM’i toimingud tehakse üks kord takti jooksul (näiteks taktsignaali tõusval frondil)
* DDR toiminguid tehakse kaks korda takti jooksul, taktsignaali mõlemal frondil
* Latentsusaeg sellest ei lühene
* Küll aga kasvab läbilaskevõime
* DDR, DDR2, DDR3, DDR4, DDR5

Värskendamisele kuluv aeg
-------------------

* Kõigi dünaamiliste mälude sisu on vaja aeg-ajalt värskendada
* Kui palju selleks aega kulub?
* Näide
    * 16384 rida
    * 4 tsüklit rea andmete värskendamiseks/lugemiseks
    * taktsagedus 166 MHz
    * 16384 ´ 4 / (166 ´ 106) = 395 ´ 10-6 = 0,395 ms
    * Kui värskendame iga 64 ms järel, siis
täiendav ajakulu:
0,395 / 64 = 0,6% mäluga suhtlemise ajast

Püsimälu
---------

* Vajadus sellise mälu järgi, mis säilitaks infot ka voolu väljalülitamisel
* ROM (read only memory)
* Vajadus sellise mälu järgi, mis säilitaks infot ka voolu väljalülitamisel
* ROM (read only memory)
* PROM (programmable read only memory)
* EPROM (erasable programmable read only memory)
* EEPROM (electrically erasable programmable read only memory)
* välkmälu (flash memory)