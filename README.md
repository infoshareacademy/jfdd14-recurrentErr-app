# crossRoads

> jfdd14-recurrentErr-app
> Aplikacja tworzona przez zespół **recurrentErr**

## 1. Zasady nazywania branchy

### 1.1. **Dla branchy feature**

Aby nie robić zamieszania w nazewnictwie branchy przyjmuje się aby nazywać je w następujący sposób:
```
feature/(numer zadania z Jiry)-(krótka-nazwa-opisująca-zadanie)
```
Przykładowo:
```
feature/35-premiera
```

### 1.2. **Dla branchy hotfix**
Czasem zdarza się że trzeba naprawić coś, co wykracza poza zadania z backlogu, wtedy przyjmuje się nazewnictwo:
```
hotfix/(dzień i miesiąc pisane razem i cyframi)-(krótka-nazwa)
```
Przykładowo:
```
hotfix/1702-style-cleanup
```

Nie polecam jednak wykorzystywać tej branchy do wprowadzania nowych funkcjonalności i pomysłów. Zadań do zrobienia i tak będzie wystarczająco dużo. Traktujmy to rozwiązanie jako koło ratunkowe, gdy jakiś elment wymaga naprawy. Przy robieniu zadań trzymajmy się DoD i obyśmy jak najmniej wykorzystywali to rozwiązanie. ;)

## 2. Zasady nazywania klas, id i zmiennych

### 2.1. **Klasy**
Korzystajmy z lekko zmodyfikowanego BEM:
```
class = "nameOfBlockElement__insideBlock--modificator"
```
**Nazwa bloku** - nazwa elementu stanowiącego funkcjonalnie jedną całość, jeżeli wieloczłonowa - pisana camelCasem.

**Element znajdujący się w bloku** - elementy będące zarówno bezpośrednimi jak i pośrednimi potomkami elemntu blokowego, jeżeli wieloczłonowa - pisana camelCasem.

**Modyfikator** - Specyficzny wariant danego elementu (opcjonalny).

### 2.2. **id**

Podobnie jak nazwy bloków w klasach, jeżeli nazwa musi być wieloczłonowa - zapisujemy ją camelCasem.

```
id="idName"
```

### 2.3. **zmienne i funkcje**

- Zaczynać od małej litery, wieloczłonowe nazwy pisać camelCasem.
- **Nazywać zmienne/funkcje tak aby mówiły co zawierają/wykonują:**

```
const nameArr = ['Ada','Marek','Ida']
```
```
function concatNames(arr){
    let namesStr = '';
    for(let i=0;i<arr.length;i++){
        namesStr += arr[i] + ' ';
    }
    return namesStr;
}
```