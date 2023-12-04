+++
title = 'Liidesesiinid'
date = 2023-11-29T14:11:44+02:00
draft = false
authors = ['Richard Leover']
teemad = ['Sisend-Väljund']
+++

Liidesesiinid
-------------

* PC (8 bitine andmesiin, 20 bitine aadressisiin)
* ISA (16 bitine andmesiin, 24 bitine aadressisiin)
* EISA (32 bitine andmesiin, 32 bitine aadressisiin)
* MCA (32 bitine andmesiin, 32 bitine aadressisiin)
* VL bus (32 bitine andmesiin, 32 bitine aadressisiin)
* PCI/PCI-X (32/64 bitine andmesiin, 32 bitine aadressisiin)
* PCMCIA (16/32 bitine andmesiin, 26 bitine aadress)
* AGP (32 bitine andmesiin, 32 bitine aadressisiin)
* PCIe (1-32x jadasiin)

PCI ja PCI-X
------------

* PCI (Peripheral Component Interconnect)
    * Töötatud välja 1990. aastate algul
    * Põhimotivaatoriks ületada seni kasutusel olnud liidesesiinide probleemid ja piirangud
    * Erinevalt varasematest liidesesiinide standarditest arendati seda kohe avatud standardina
    * Standardi arendamiseks moodustati PC tüüpi arvutite tootjate poolt grupeering nimega PCISIG (PCI Special Interest Group)
* PCI-X (PCI-eXtended)
    * Arendati välja mõned aastad hiljem PCI laiendusena suuremate andmemahtude ja - edastuskiiruste saavutamiseks
    * Avaldati ka PCI-X 2.0 maksimaalse andmeedastuskiirusega 4 GB/s
    * Nii riist- kui tarkvaraliselt PCI’ga tagasiühilduv
* Mõlemad on paralleelsed liidesesiinid

PCI siin
-----------

* PCI (Peripheral Component Interconnect)
    * arhitektuurselt 32 seadet ühel siinil
    * praktikas 4-5 välimist seadet
    * praktikas 10-12 sisemist
    * 47 (49 masteringi puhul) kontakti
    * Viike multipleksitakse
    * Toetab 5V ja 3,3V seadmeid
    * Toetab Plug and Play’d

Plug and Play
--------------

* Plug and Play tööks on vaja
    * PnP BIOS
    * ESCD (Extended System Configutarion Data)
    * PnP operatsioonisüsteemi
* Plug and Play automatiseerib
    * IRQ katkestuste jagamise
    * DMA (Direct Memory Access)
    * Mälu aadressid
    * I/O pordid
* Esialgse suure ebakindluse tõttu tulid käibele terminid
    * Plug and Pray
    * Plug and Play, Play, Play…

PCI-X
---------

* PCI-X 2.0 (PCI-X 266 ja PCI-X 533)
    * 100% tagasiühilduv
    * Andmeedastuskiirused kuni 2,13 ja 4,26GB/s
    * ECC ja bitivigade korrektsioon
* PCI-X 3.0 (PCI-X 1066 ja PCI-X 2133)
    * Andmete pakkimine
    * Automaatne energiasäästmine (ilma tarkvara osaluseta)
    * Automaatne rikketuvastus (Automatic Fail-over)

AGP
----------

* Graafika „kaart“ võib olla
    * Emaplaadile integreeritud
    * PCI siinil
    * AGP siinil
    * Kõike seda korraga
* AGP (Accelerated Graphics Port)
    * Suurem kiirus
    * Võimalus suhelda otse mäluga
    * Kasutada RAM mälust osa tekstuurimäluna
    * Täna enam ei kasutata, aga suurt osa AGP puhul kasutusele tulnud lahendusi kasutatakse ka tänaste graafikamootorite juures
    * 32 bitine andmesiin
    * Kiirus 66MHz
    * AGP1x 266MB/s AGP2x 528MB/s AGP4x 1GB/s AGP8x 2,1GB/s
    * Kasutab pipeline’sid (nn. torusid)
    * Kasutab sideband addressing’ut
