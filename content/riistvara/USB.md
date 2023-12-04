+++
title = 'USB'
date = 2023-11-29T14:11:44+02:00
draft = false
authors = ['Richard Leover']
teemad = ['Sisend-Väljund']
+++

Universaalne jadasiin ehk universaalne järjestiksiin ehk USB (Universal Serial Bus) on seadmete arvutiga ühendamise standard, mis hõlmab kaablite, konnektorite (pistikute ja pesade) füüsilist ehitust, suhtlusprotokolle ning toitevoolu parameetreid.

USB-d kasutatakse arvuti lisaseadmete, näiteks hiire, klaviatuuri, veebikaamera või printeri ühendamiseks, samuti andmevahetuseks mäluseadmetega, näiteks välise kõvaketta või nutitelefoniga. Lisaks kasutatakse USB-ühendust vooluallikana, näiteks hiire, diktofoni või telefoni aku laadimiseks.

USB_IF (USB Implementers Forum) 
------------
* Mittetulunduslik organisatsioon asutatud USB standardi loojate
* poolt
* Ülesanneteks on toetada seadmete tootjaid dokumentatsiooni,
* koolituste, arendus ja testvahenditega ning koordineerida tulevasi
* USB arenguid
* Haldab ja jagab Vendor-ID’sid
* Liikmeks saavad astuda kõik soovijad
* Aastane liikmetasu on $4000
* Täna on liikmeid üle 100

USB töörežiimid ja andmeedastuskiirused
------------
* Low speed - 1.5 Mbps (alates USB 1.0)
* Full speed – 12 Mbps (alates USB 1.0)
* High-speed – 480 Mbps (alates USB 2.0)
* SuperSpeed (Gen1 x 1) – 5 Gbps (alates USB 3.0)
* SuperSpeedPlus (Gen2 x 1) – 10 Gbps (alates USB 3.1)
* SuperSpeedPlus (Gen1 x 2) – 10 Gbps (alates USB 3.2 ainult Type-C)
* SuperSpeedPlus x 2 (Gen2 x 2) – 20 Gbps (alates USB 3.2 ainult Type-C)
* USB4 20 (Gen3 x 1) – 20 Gbps (alates USB4 v1.0)
* USB4 40 (Gen3 x 2) – 40 Gbps (alates USB4 v1.0 ainult Type-C)
* USB4 80 (Gen4) symmetric – 80Gbps (alates USB4 v2.0 ainult Type-C)
* USB4 120 (Gen4) asymmetric – 120Gbps / 40Gbps (alates USB4 v2.0 ainult Type-C)


**USB 1.0 (Universal Serial Bus Specification Revision 1.0)**
  * Avaldatud jaanuaris 1996
  * Loojateks Compaq, DEC, IBM, Intel, Microsoft, NEC ja NotrhernTelecom
  * Operatsioonisüsteemidest toetas esimesena Windows 95 Service Release 2
  tugi oli piiratud ja bugine (nii esimesed seadmed kui OS tugi)
  * Alates Windows 98’st (juuni 1998) on tugi korralik ja ka seadmetootjad olid
  „lastehaigustest“ üle saanud
  **USB 1.1**
  * Avaldatud septembris 1998
  * Asendab USB 1.0 standardi
  * Loojateks Compaq, HP, Intel, Philips, LucentTechnologies, Microsoft ja NEC

**USB 2.0**
  * Avaldatud aprillis 2000
  * Lisandus high-speed režiim andmeedastuskiirusega 480Mbps
  * Tänu suuremale kiirusele võeti kasutusele oluliselt suurema hulga erinevate
  lisaseadmete juures
  * Windowsile lisasid USB 2.0 toe Windows XP SP1 ja Windows 2000 SP4
  * Asendab USB 1.1 standardi ja on tagasiühilduv
  * Loojateks Compaq, HP, Intel, Philips, Lucent Technologies, Microsoft, NEC, STEricsson
  ja Texas Instruments
  * Kaks korda aastas annab USB-IF välja USB spetsifikatsiooni lisasid ECN (Engineering
  Change Notices)
  – Näiteks täiendused kaablite ja pistikute kohta, täiendused toite kohta jne.
  * Lisad ei muuda põhispetsifikatsiooni

**USB 2.1**
  * Ei ole päris iseseisev USB standardi versioon
  * USB 2.0 Link Power Management lisa ja USB 3.1 spetsifikatsioon
  defineerivad, kuna seade peab ennast tutvustama kui USB 2.1 seade
  * Ehk siis
    * Low-, full- või high-speed seade, mis toetab BOS (Binary Object Store)
    deskriptorit on USB 2.1 seade
    * SuperSpeed ja SuperSpeedPlus seade, mis toetab ka üht või mitut USB 2.0
    kiirust peab ennast tutvustama kui USB 2.1 seade, kui see parasjagu töötab USB
  2.0 kiirustel

**USB 3.0**

  * Avaldatud novembris 2008
  * Täiesti uus arhitektuur, kus kaks füüsilist siini toimivad korraga. Üks siini
  kaudu edastatakse USB 2.0 liiklust ja teine USB 3.0 liiklust
  * SuperSpeed on võimeline edastama andmeid mõlemas suunas korraga,
  sest kasutusel on kummagi suuna jaoks oma juhtmepaar
  * Seadmed võivad tarbida rohkem energiat ja kasutada nö. Agressiivsemalt
  energiasäästurežiime
  * USB 3.0 on USB 2.0 tagasiühilduv
  * Erinevalt USB 2.0 standardist, mis asendas USB 1.1 standardi, USB 3.0
  standard täiendab USB 2.0 standardit
  * Loojateks HP, Intel, Microsoft, NEC, STEricsson, Texas Instruments

**USB 3.1**

* Avaldatud juulis 2013
* Täiendab USB 3.0 standardit SuperSpeedPlus kiirusega (10 Gbps)
* Lisab uued energiasäästufunktsioonid
* Lisatäiendused, mis käivad nii SuperSpeed kui SuperSpeedPlus kohta
* Toodetel kasutatakse ka lisaks SuperSpeedPlus tähisele SuperSpeed USB 10Gbps
* Asendab USB 3.0 standardi (kuid mitte USB 2.0)
  * Ehk siis lisaks SuperSpeedPlus seadmetele peavad ka kõik uued seadmed, mis töötavad kuni
SuperSpeed kiirusel vastama USB 3.2 standardile
* USB 3.1 kaablid sisaldavad küll sama arvu ühendusi, aga nõuded kaablile on rangemad
* USB 3.1 defineerib ka uued terminid
  * Gen 1, mis on SuperSpeed ehk 5 Gbps
  * Gen 2, mis on SuperSpeedPlus ehk 10 Gbps
  * Enhanced SuperSpeed USB on koondnimetaja Gen 1 ja Gen 2 ehk siis USB 3.x kohta
NB! Enhanced SuperSpeed != SuperSpeedPlus

**USB 3.2**

* Avaldatud septembris 2017
* Andmeedastuskiirus üle Type-C ühenduse ja kaabli 20 Gbps
* Kaks paralleelset SuperSpeedPlus kanalit
* Asendab USB 3.1 standardi (kuid mitte USB 2.0)
* Loojateks Apple, HP, Intel, Microsoft, Renesas, STMicroelectronics ja
Texas Instruments

**USB4 v1.0**

* Avaldatud augustis 2019
* Eesmärk kasutada paremini ära Type-C ühendust ja vähendada
segadust.
* Andmeedastuskiirus üle Type-C ühenduse ja kaabli 40 Gbps
* Võimaldab ühenduste tunneldamise abil kombineerida erinevad
andmesideprotokollid (näiteks USB3, DisplayPort, PCIe) ühte
füüsilisse sidekanalisse
* Üle Type-C ühenduse asendab USB 3.2 standardi (kuid mitte USB 2.0)
* Loojateks Apple, HP, Intel, Microsoft, Renesas, STMicroelectronics ja
Texas Instruments

**USB4 v2.0**

* Avaldatud oktoobris 2022
* Andmeedastuskiirus üle Type-C
ühenduse ja kaabli
  * 80 Gbps sümmeetrilises moodis
  * 120 Gbps / 40 Gbps asümmeetrilises
moodis
* DisplayPort 2.1 ja PCI Express 4
seotud täiendused
* Uued (varasemast selgemad)
liitmike ning kaablite tähistused
ja logod


USB ühilduvus
------------

**USB ühilduvus – vol.1**

* USB 2.0 seade (device), väljaarvatud jaotur (hub), võib toetada low- full- ja high
speed režiime
* High-speed seade võib toetada full-speed režiimi, kui on ühendatud USB 1.1 porti
* USB 2.0 jaotur peab toetama kõiki kolme USB 2.0 töörežiimi
* High-speed seadmed peavad olema markeeritud tähisega Hi-Speed USB
* High-speed seadet saab maksimaalse kiirusega kasutada USB 2.0, USB 3.x hosti
või jaoturi küljes
* USB 2.0 ja USB 3.x hosti ja jaoturi küljes saab kasutada ka USB 1.1 seadmeid
* USB 2.0 ja USB 3.x hostid ja jaoturid toetavad kõiki madalamaid ühendskiiruseid

**USB ühilduvus – vol.2**

* Kõik SuperSpeedPlus seadmed peavad toetama ka SuperSpeed
kiirust
* Kõik seadmed, mis toetavad SuperSpeed kiirust peavad toetama ka
vähemalt üht USB 2.0 kiirust
* USB 3.x seade ei pea täielikult toetama USB 2.0 kiiruseid, aga host
peab olema võimeline seadet tuvastama ja kasutajat teavitama, et
seade tuleks ühendada USB 3.x liidesesse
* Suurem energiatarve on lubatud ainult USB 3.x seadmetele. USB 2.0
seadmel on lubatud USB 3.x võimekusega pesas tarbida jätkuvalt
kuni 500 mA

USB kaablipikkused
------------

* USB 2.0 (480 Mbps) – kuni 5 m (30m koos 5 jaoturiga)
* USB 3.0 (5 Gbps) – kuni 2m (10m koos 5 jaoturiga)
* USB 3.1 (10 Gbps) – kuni 1m (5m koos 5 jaoturiga)
* USB 3.2 (20 Gbps) – kuni 1m (5m koos 5 jaoturiga)


Type-C
------------

**Type-C™ liitmik ja kaabel**

* Kuna senised A ja B liitmikud ei vasta enam tänapäeva seadmete ootustele töötati välja
uus liitmike standard Type-C
* v1.0 august 2014, v1.1 aprill 2015, v1.2 märts 2016, v1.3 juuli 2017, v1.4 märts 2019, v2.0
august 2019, v2.1 mai 2021, v2.2 oktoober 2022
* Standardidokumendi nimi on USBType-C Cable and Connector Specification
* Standard on täienduseks USB 2.0, USB 3.2 ja USB Power Delivery standarditele
* Eesmärgid
  * Kompaktne (ainult 3mm paksune)
  * Sümmeetriline - võimalus ühendada pistik pessa mõlemat pidi
  * Elektriliselt ühilduv seniste standarditega
  * Üks liitmik kõikide seadmete ja kaablite jaoks
  * Täiendatud toitevõimalused
  * Väiksem EMI (Electromagnetic interference) ja RFI (Radio-Frequency interference) kiirgus
  * Võimalus kasutada viikusid ka muudeks funktsioonideks (Alternate Modes)
* Type-C standard defineerib kaks uut terminit
  * Source (läte) – port, millel on CC viik läbi takisti toitesse sillatud ja edastab voolu
  VBUS viigule.
  * Sink (neel) – 

**Type-C kablite tüübid**

* USB Full-Featured Type-C kaablid ja liitmikud – Need on kaablid ja liitmikud, mis
toetavad USB 2.0 ja USB 3.x andmeühendusi ning sisaldavad CC ja SBU ühendusi.
Sellised kaablid on elektrooniliselt markeeritud (Electronically Marked Cable - EMCA).
* USB 2.0 Type-C kaablid ja liitmikud – Need on sellised Type-C kaablid ja liitmikud, mis
toetavad ainult USB 2.0 andmeühendusi ja sisaldavad ainult USB 2.0 viike.
* USB Type-C Power-Only kaablid ja liitmikud – Need on sellised Type-C kaablid ja
liitmikud, mis sisaldavad ainult CC, VBUS ja GND ühendusi.
* Passiiv ja aktiivkaablid
  * Kaabel on passiivne kui see ei modifitseeri USB andmesignaale.
  * Kaabel on aktiivne kui see modifitseerib USB andmesignaale (näiteks optiline- või pikk võimendiga
  kaabel).
  * Aktiivseteks loetakse ka kõiki Type-C alternatiivrežiime kasutavaid üleminekuadaptereid.

**Type-C Alternate Modes**

* Type-C ühenduse kaudu on võimalik lisaks USB signaalidele edastada ka muid
ühendusi näiteks DisplayPort, Thunderbolt vms.
* Neid muid võimekusi lisaks USB’le nimetatakse alternatiivmoodideks ehk
Alternate Modes.
* Kõik hostid ja seadmed (väljaarvatud laadijad), mille küljes on Type-C pesa peavad
olema minimaalselt USB 2.0 suhtlusvõimelised
* Kui host või seade toetab alternatiivmoode, siis peab
  * See kasutama USB Power Delivery Structured Vendor Defined Messages sõnumeid
alternatiivmoodide tuvastamiseks ja konfigureerimiseks.
  * Kui seade lisaks USB funktsionaalsusi ei oma, siis peab see minimaalselt vastama USB
Billboard Device Class spetsifikatsioonile, et ennast identifitseerida.
* Alternatiivmoodid ei kandu üle USB jaoturite (Hubs), neid saab kasutada ainult
otseühenduste korral.
* Seadmed, mis näevad välja nagu jaoturid, aga pakuvad ka alternatiivmoode
nimetatakse alternatiivmoodide laienditeks või dokkideks.

**Analog Audio Adapter Accessory Mode**

* Saab multipleksida neli analoog heli signaali USB Type-C ühenduse
viikude külge.
* Neli analoog audio signaali on samad, mis traditsioonilise 3,5 mm
pulkpistiku puhul.
* Standard lubab ka 500mA toite helisüsteemist tagasi.
* USB host, mis on AnalogAudio Adapter Accessory Mode võimeline,
peab toetama ka USB Type-C Digital Audio (TCDA) standardit.
