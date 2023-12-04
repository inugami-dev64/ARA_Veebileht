+++
title = 'Sisend-väljund riistvaralises vaates'
date = 2023-11-29T14:11:44+02:00
draft = false
teemad = ['Sisend-Väljund']
+++

Riistvaraline sisend-väljund viitab arvuti riistvara komponentidele, mis võimaldavad andmete liikumist arvuti ja välismaailma vahel. See hõlmab kõike, mis on seotud andmete sisestamise ja väljastamisega arvutisüsteemis.

Siinid
---------

* Protsessor, mälu ja I/O seadmed ühendatakse omavahel siini(de)ga.
* Siini esmaseks ülesandeks on andmete edastamiseks vajaliku tee loomine
* Bus protocol – reeglite kogum, mille alusel korraldatakse erinevate seadmete suhtlus siinil
    * millal saata infot siinile
    * siini kasutusjärjekorra jagamine
    * juhtsignaalidest arusaamine
* Siini liinid jagatakse kolme gruppi:
    * andmed
    * aadress
    * juhtimine

Juhtimisliinid
------------

* Juhtimisliini vahendusel tuleb seadmele öelda, kas täitmisele läheb lugemise või kirjutamise käsk
    * seda saaks korraldada ühe R/W liini abil, mis olles seisus 1 viitaks lugemisele ja seisus 0 kirjutamisele
* Täpsustada on vaja andmete suurus (byte, word, long word jne)
* Ajastusinfo – millal on õige aeg seadmel andmeid siinile saata ja millal on siinil kvaliteetsed andmed lugemiseks
* Master – initsiaator
* Slave – sihtmärk, target

Sünkroonne andmeedastus
-----------------

* Kõik seadmed saavad ajastusinfo taktsignaalist
* Ajavahemik t1-t0 peab olema piisavalt pikk, et info jõuaks siini teise otsa kohale ja et seade jõuaks aadressi dekodeerida
* Slave ei tohiks enne ajahetke t1 ja Master enne ajahetke t2 toimetama hakata kuna andmed siinil pole veel usaldusväärsed!
* Ajavahemik t2-t1 peab olema piisavalt pikk, et info jõuaks siini teise otsa kohale ja et puhverregister jõuaks andmed salvestada (Set-up time)

Sünkroonne andmeülekanne mitme taktitsükli jooksul
--------------------

* Eelmisel slaidil kujutet andmeedastus peab arvestama kõige aeglasema seadme vajadustega
* Teisisõnu: kõik seadmed suhtlevad aeglaseima seadme kiirusega
* Protsessor ei saa tagasisidet selle kohta, kas seade sai oma asjadega hakkama
* Lisatakse täiendav tagasisidesignaal
    * nüüd saab master teada, kui slave on aadressist aru saanud ja valmis osalema andmeedastuses
    * lisandub võimalus kohandada andmeedastusele kuluvat aega, kui seade pole valmis

Asünkroonne andmeedastus
--------------------

* Käepigistuse (handshake) kasutamine master ja slave seadme vahel
* Taktisignaali asendab siin kaks juhtsignaali
    * master ready
    * slave ready
* Master ready seatakse aktiivseks mõningase viivise järel peale andmete siiniletoomist
* Põhjus: samast allikast pärit signaalid jõuavad erinevaid ahelaid läbides sihtkohta eri aegadel
* Inglise keeles nimetatakse seda nähtust skew 

Plussid-miinused
---------------

* Asünkroonse andmeedastuse eeliseks on
    * pole vaja kellasid sünkroniseerida
    * seega lihtsam ehitada
* Asünkroonse andmeedastuse puudusteks on
    * topelt teekonnaga signaalid võtavad rohkem aega kui ühekordsekinnitusega signaalid
    * seega aeglasem kui sünkroonne andmeedastus

Bus arbitration
---------

* Bus master – seade, mis saab igal ajal algatadaandmevahetuse
* Need seadmed vahetuvad töö käigus
* Centralized arbitration – üks seade (bus arbiter) otsustab, kes on järgmine bus master
* Distributed arbitration – kõik seadmed osalevad uue bus master’i valimises

Asünkroonne jadaühendus
--------------

* Saatja ja vastuvõtja kellad pole sünkroniseeritud
* Info sõna saabumise kohta on sõnas endas
    * start-bitt
    * stopp-bit(t/id) sõna lõpus
    * viimased aitavad kaasa, et uue sõna start-bitt õigeaegselt tuvastatakse

Sünkroonne andmeedastus
--------------------

* Vajalik kiirema ühenduse jaoks
* Saatjal-vastuvõtjal mõlemal kellad
* Neid kooskõlastatakse 1-0 ja 0-1 üleminekute juures
    * neid peab olema piisavalt tihti
    * seda korraldatakse erinevate kodeerimisskeemidega
* Kui kellad paigas, saab saata suuri andmeblokke
