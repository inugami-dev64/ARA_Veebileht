+++
title = 'Arvuti mälukasutus'
date = 2023-11-29T14:11:44+02:00
draft = false
teemad = ['Mälu']
+++

Arvuti mälu vajavad nii programm ise kui tema poolt töödeldavad andmed – muutujad ja konstandid. Programmi masinkoodidele mälu eraldamise osas ei pea programmeerija üldjuhul muret tundma. Küll aga peab ta teadma, millal eraldatakse mälu andmetele ja kuidas seda toimingut vajadusel ise juhtida saab.

x86 arhitektuurid ja töörežiimid
----------------------

* Reaalrežiim – 16 bitine (Real mode)
* IA-32 arhitektuur
    * Kaitstud režiim – 32 bitine (Protected mode)
    * Virtuaalne reaalrežiim – 16 bitine (Virtual real mode)
* IA-32e arhitektuur (tuntud ka AMD64, x86-64, EM64T või Intel64)
    * 64 bitine režiim
    * Ühilduvusrežiim – 32 bitine (Compatibility mode)
* IA-64 arhitektuur

Mälu organiseerimine
-------------------

* Mälu, mille poole protsessor saab pöörduda oma siinide kaudu
nimetatakse füüsiliseks mäluks (physical memory)
* Füüsiline mälu on jagatud 8-bitisteks (bait) pesadeks.
* Iga mälupesa omab füüsilist aadressi (physical address)
* Füüsiline aadressiruum (physical address space) või mälu aadressiruum (memory address space) on
    * 32-bitistel protsessoritel vahemikus 0…236 -1 (64GB)
    * 64-bitistel protsessoritel vahemikus 0…264 -1 (16EB)
* Tänastel protsessoritel on see enamasti piiratud 35-41biti ehk 32GB-2TB peale

Sisend/väljund aadressiruum
---------------------

* Lisaks füüsilisele aadressiruumile on x86 arhitektuuris kasutusel ka:
* Sisend/väljund aadressiruum (I/O address space)
    * On mälu aadressiruumist eraldiseisev
    * Sisaldab 2 16 (64K) eraldi adresseeritavat 8-bitist I/O porti
    * Kahte või nelja järjest asetsevat I/O porti saab kombineerida vastavalt 16- ja 32-bitiseks
    * I/O portide poole pöördumiseks on protsessoril eraldi käsud


Sisend/väljundseadmed – Input/Output devices
--------------------

* Sisend/väljundseadmed (I/O devices) saavad olla:
    * Mälu vastendusega (Memory-Mapped I/O või MMIO)
* Seadmete poole pöördutakse füüsilise aadressiruumi kaudu
    * Port vastendusega (Port-Mapped I/O või PMIO)
* Seadmete poole pöördutakse sisend-/väljund aadressiruumi kaudu