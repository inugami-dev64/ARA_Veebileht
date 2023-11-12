# Arvuti riistvara ja arhitektuuri konspektide veebilehe lähtekood

Antud repositoorium sisaldab 

## Mis see on?

Antud veebileht on loodud Tartu Ülikooli õppeaine *Arvuti riistvara ja arhitektuur (LOFY.03.079)* kokkuvõtlike õppematerjalide jagamiseks. 
Veebileht on üles ehitatud programmiga `hugo`, mis eeldab artiklite kirjutamist Markdownis.

## Staatiliste HTML failide genereerimine

Staatilisi faile saab genereerida eeldusel, et [Hugo](https://gohugo.io) on korrektselt installitud. 
Peale seda on lehtede genereerimine lihtne ning teostatav järgneva käsuga:
```bash
$ hugo
```

## Artiklite lisamine

Artikleid on võimalik lisada tehes Githubis *Pull Request*. Uute markdown artiklite lisamine programmis `hugo`
näeb välja selline.

```bash
$ hugo new content content/<riistvara|arhitektuur>/<artikli-nimi>.md
```
Vastavalt teemale, kas tegemist on arhitektuuri või riistvara temaatikaga tuleb valida ka vastav 
alamkataloog. Artikli nimi võiks olla võimalikult sarnane artikli pealkirjaga, kuid artiklifaili nimi
ei tohiks sisaldada täpitähti ega tühikuid. Soovitatav on kasutada *kebab-case* notatsiooni, mille puhul 
näiteks artikkel `RISC Protsessori tööpõhimõtteskeem` oleks failinimelt `risc-protsessori-toopohimotteskeem.md` 

## Kontribuutorid

* Karl-Mihkel Ott