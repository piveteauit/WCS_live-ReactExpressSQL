# WCS_live-ReactExpressSQL
## Live coding 2023-05-02: Express + SQL + React

### 1- Initialization du project
- [ ] Découpage des briques pour refléter les flux 
```
|---------|                |-----------|                |-----------| 
|  Front  | -------------> |   Back    | -------------> |  Données  | 
| (React) | <------------- | (Express) | <------------- |  (MySQL)  | 
|---------|                |-----------|                |-----------|
```

### 2- Création du script d’initialization de base données
- [ ] Création du schéma
- [ ] Insertion d’un jeu de données

### 3- Création du fichier avec les variables d’environnement
- [ ] Création du .sample pour savoir ce qui est attendu
````
DB_HOST=<DB Host value>
DB_PORT=<DB Port value>
DB_USER=<DB User value>
DB_PASSWORD=<DB Password value>
DB_NAME=<DB Name value>
EXPRESS_PORT=<Express listening Port value>
````

### 4- Initialization du server avec express
- [ ] Connexion entre JS et la DB (via .env values)
- [ ] Création d’une première route get
- [ ] Démarrage du serveur

### 5- Adaption de la route route get
- [ ] Récupérer un liste de données depuis la base de données
- [ ] Retourner les infos si il y ou l’erreur

### 6- Création de la route get by id
- [ ] Récupération et validation du paramètres avec JOI
- [ ] Récupérer l’élément depuis la base de données
- [ ] Retourner les infos si il y ou l’erreur

### 8- Création de la route post 
- [ ] Récupération et validation du body avec JOI
- [ ] Insérer l’élément dans la base de données
- [ ] Retourner les infos si il y ou l’erreur

### 9- Ajout d’une nouvelle ressource à récupérer via l’API
- [ ] Factoriser le code pour s’y retrouver
- [ ] Utiliser Express Router pour faciliter les développements

### 10- Initialiser l'app React
- [ ] Création d'un écran pour récupérer et lister les ressources 
- [ ] Pour chaque ressource, pouvoir s'y rendre et récupérer le détail de la ressource

### 11- Ajout d’une nouvelle ressource enfant à récupérer via l’API
- [ ] Utiliser un router enfant

#
#### Installation Dépendences back:
```
npm i dotenv express joi mysql2
```
#
#### Installation Dépendences front:
```
npm i axios
```
#


# ATTENTION
```
// Pour le back penser à configurer les cors
npm i cors 
```
```
const corsOptions = {
    origin: ['http://localhost:3000'],
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions))


```