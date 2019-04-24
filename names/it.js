const itNames = new Map([
  [ 'aaron', 'male' ],
  [ 'abd el rahim', 'male' ],
  [ 'abd ul aziz', 'male' ],
  [ 'abdallah', 'male' ],
  [ 'abdelali', 'male' ],
  [ 'abdelaziz', 'male' ],
  [ 'abdelhadi', 'male' ],
  [ 'abdelhak', 'male' ],
  [ 'abdelhakim', 'male' ],
  [ 'abdelhamid', 'male' ],
  [ 'abdeljalil', 'male' ],
  [ 'abdelkader', 'male' ],
  [ 'abdelkhalek', 'male' ],
  [ 'abdelkrim', 'male' ],
  [ 'abdellah', 'male' ],
  [ 'abdellatif', 'male' ],
  [ 'abdelmajid', 'male' ],
  [ 'abdelmjid', 'male' ],
  [ 'abdelmoula', 'male' ],
  [ 'abdelouahed', 'male' ],
  [ 'abderrahim', 'male' ],
  [ 'abderrahman', 'male' ],
  [ 'abderrahmane', 'male' ],
  [ 'abdeslam', 'male' ],
  [ 'abdi', 'male' ],
  [ 'abdi mohamed', 'male' ],
  [ 'abdou', 'male' ],
  [ 'abdoulaye', 'male' ],
  [ 'abdoulaye hamady', 'male' ],
  [ 'abdul', 'male' ],
  [ 'abdul nasser', 'male' ],
  [ 'abdulkadir', 'male' ],
  [ 'abdullahi', 'male' ],
  [ 'abida', 'female' ],
  [ 'abir', 'female' ],
  [ 'ablaye', 'male' ],
  [ 'abou', 'male' ],
  [ 'abraham', 'male' ],
  [ 'achille', 'male' ],
  [ 'adalton', 'male' ],
  [ 'adam', 'male' ],
  [ 'adama', 'male' ],
  [ 'adamilca', 'female' ],
  [ 'adar', 'female' ],
  [ 'addi', 'male' ],
  [ 'adel ahmed', 'male' ],
  [ 'adel ben mohamed', 'male' ],
  [ 'adela', 'female' ],
  [ 'adela gladys', 'female' ],
  [ 'adele', 'female' ],
  [ 'adelina maria', 'female' ],
  [ 'adem', 'male' ],
  [ 'adenan', 'male' ],
  [ 'adi', 'female' ],
  [ 'adijatou alahassan', 'female' ],
  [ 'adil', 'male' ],
  [ 'adnan', 'male' ],
  [ 'adnane', 'male' ],
  [ 'adolphine marie', 'female' ],
  [ 'adom lazar', 'male' ],
  [ 'adrian', 'male' ],
  [ 'adrian moritz', 'male' ],
  [ 'adriana', 'female' ],
  [ 'adriana ferreira soares', 'female' ],
  [ 'adriano', 'male' ],
  [ 'adwoah', 'female' ],
  [ 'afaf mohamed mahmoud', 'female' ],
  [ 'aferdita', 'female' ],
  [ 'afia', 'female' ],
  [ 'afif', 'male' ],
  [ 'agata', 'female' ],
  [ 'agbattou desiré', 'male' ],
  [ 'agim', 'male' ],
  [ 'agnese', 'female' ],
  [ 'agnieszka', 'female' ],
  [ 'agostino', 'male' ],
  [ 'agron', 'male' ],
  [ 'agueda melva', 'female' ],
  [ 'ahmad', 'male' ],
  [ 'ahmed', 'male' ],
  [ 'ahmed ben mohamed', 'male' ],
  [ 'aicha', 'female' ],
  [ 'aida', 'female' ],
  [ 'aijiao', 'female' ],
  [ 'ajka', 'female' ],
  [ 'ajriz', 'female' ],
  [ 'akwasi frimpong', 'male' ],
  [ 'alam', 'male' ],
  [ 'alan', 'male' ],
  [ 'alassane', 'male' ],
  [ 'alban', 'male' ],
  [ 'albert', 'male' ],
  [ 'alberto', 'male' ],
  [ 'alda', 'female' ],
  [ 'aldo', 'male' ],
  [ 'alejandro', 'male' ],
  [ 'aleksander', 'male' ],
  [ 'alem', 'female' ],
  [ 'alemush', 'female' ],
  [ 'alena', 'female' ],
  [ 'alessandra', 'female' ],
  [ 'alessandro', 'male' ],
  [ 'alessia', 'female' ],
  [ 'alessio', 'male' ],
  [ 'alex', 'male' ],
  [ 'alexander', 'male' ],
  [ 'alexandra', 'female' ],
  [ 'alexandre', 'male' ],
  [ 'alexandru', 'male' ],
  [ 'alexia', 'female' ],
  [ 'alexic susan', 'female' ],
  [ 'aley saly', 'female' ],
  [ 'alfred', 'male' ],
  [ 'alfredo', 'male' ],
  [ 'alfredo elias', 'male' ],
  [ 'ali', 'male' ],
  [ 'ali ben ahmed', 'male' ],
  [ 'alice', 'female' ],
  [ 'alice maria', 'female' ],
  [ 'alicia', 'female' ],
  [ 'alicia mabel del valle', 'female' ],
  [ 'alicja', 'female' ],
  [ 'alimatou', 'female' ],
  [ 'alina', 'female' ],
  [ 'aliou', 'male' ],
  [ 'alison', 'female' ],
  [ 'alize', 'female' ],
  [ 'alla', 'female' ],
  [ 'allegra', 'female' ],
  [ 'alma', 'female' ],
  [ 'altin', 'male' ],
  [ 'alwia', 'female' ],
  [ 'aly', 'male' ],
  [ 'amadou', 'male' ],
  [ 'amal', 'female' ],
  [ 'amalia nancy', 'female' ],
  [ 'amanda', 'female' ],
  [ 'amar', 'male' ],
  [ 'ambainesh', 'female' ],
  [ 'ambra', 'female' ],
  [ 'amdy', 'male' ],
  [ 'amelia', 'female' ],
  [ 'amin', 'male' ],
  [ 'amina', 'female' ],
  [ 'aminata', 'female' ],
  [ 'amine', 'male' ],
  [ 'amir', 'male' ],
  [ 'amira', 'female' ],
  [ 'amy', 'female' ],
  [ 'ana', 'female' ],
  [ 'ana maria', 'female' ],
  [ 'ana maria bonifacia', 'female' ],
  [ 'ana paula', 'female' ],
  [ 'ana ruth', 'female' ],
  [ 'ana-maria', 'female' ],
  [ 'anas', 'male' ],
  [ 'anastasia', 'female' ],
  [ 'ancy abraham', 'female' ],
  [ 'andom', 'male' ],
  [ 'andré', 'male' ],
  [ 'andrea', 'male' ],
  [ 'andrea patricia', 'female' ],
  [ 'andrei', 'male' ],
  [ 'andrew', 'male' ],
  [ 'andrews', 'male' ],
  [ 'andriy', 'male' ],
  [ 'anelia bojidarova', 'female' ],
  [ 'angela', 'female' ],
  [ 'angelica', 'female' ],
  [ 'angelika', 'female' ],
  [ 'angelina', 'female' ],
  [ 'angelo', 'male' ],
  [ 'angelo antonio', 'male' ],
  [ 'anila', 'female' ],
  [ 'anissa', 'female' ],
  [ 'anita', 'female' ],
  [ 'ann marie', 'female' ],
  [ 'anna', 'female' ],
  [ 'anna maria', 'female' ],
  [ 'anna marie', 'female' ],
  [ 'anna saly', 'female' ],
  [ 'annalisa', 'female' ],
  [ 'annaly', 'female' ],
  [ 'annamaria', 'female' ],
  [ 'anne', 'female' ],
  [ 'anne catherine', 'female' ],
  [ 'anne laurence', 'female' ],
  [ 'anne maija', 'female' ],
  [ 'anne marie', 'female' ],
  [ 'anne marie christine', 'female' ],
  [ 'anné jacob', 'male' ],
  [ 'anneliese', 'female' ],
  [ 'annie', 'female' ],
  [ 'anny', 'female' ],
  [ 'anthony martin', 'male' ],
  [ 'antoinette', 'female' ],
  [ 'antonella', 'female' ],
  [ 'antonia', 'female' ],
  [ 'antonietta', 'female' ],
  [ 'antonino', 'male' ],
  [ 'antonio', 'male' ],
  [ 'antonio salvatore', 'male' ],
  [ 'antonios', 'male' ],
  [ 'antoun', 'male' ],
  [ 'anulawathie', 'female' ],
  [ 'aomar', 'male' ],
  [ 'aram adoum', 'male' ],
  [ 'arben', 'male' ],
  [ 'ardian', 'male' ],
  [ 'argentina', 'female' ],
  [ 'arianna', 'female' ],
  [ 'ariel', 'male' ],
  [ 'arja', 'female' ],
  [ 'arjana', 'female' ],
  [ 'armando', 'male' ],
  [ 'armildez', 'female' ],
  [ 'armin', 'male' ],
  [ 'arnold', 'male' ],
  [ 'aron', 'male' ],
  [ 'arshad', 'male' ],
  [ 'arta', 'female' ],
  [ 'artan', 'male' ],
  [ 'artemia', 'female' ],
  [ 'arthur', 'male' ],
  [ 'artur', 'male' ],
  [ 'arturo', 'male' ],
  [ 'ascension', 'female' ],
  [ 'asha', 'female' ],
  [ 'ashwani', 'male' ],
  [ 'asia', 'female' ],
  [ 'asif', 'male' ],
  [ 'askaletch', 'female' ],
  [ 'asli abshir', 'female' ],
  [ 'asmaa', 'female' ],
  [ 'assane', 'male' ],
  [ 'aster', 'female' ],
  [ 'astrid', 'female' ],
  [ 'astrit', 'male' ],
  [ 'atika', 'female' ],
  [ 'attanasio', 'male' ],
  [ 'attilio', 'male' ],
  [ 'augusto', 'male' ],
  [ 'aurel', 'male' ],
  [ 'aurelia', 'female' ],
  [ 'aurora', 'female' ],
  [ 'aurora estela artemisa', 'female' ],
  [ 'ava', 'female' ],
  [ 'awa', 'female' ],
  [ 'awatef mohamed abou', 'female' ],
  [ 'aya', 'female' ],
  [ 'ayman', 'male' ],
  [ 'ayoub', 'male' ],
  [ 'azeddine', 'male' ],
  [ 'aziz', 'male' ],
  [ 'aziza', 'female' ],
  [ 'azzeddine', 'male' ],
  [ 'azzurra', 'female' ],
  [ 'babacar', 'male' ],
  [ 'bachir', 'male' ],
  [ 'badara', 'male' ],
  [ 'bajram', 'male' ],
  [ 'bajramsa', 'female' ],
  [ 'bakari', 'male' ],
  [ 'balla', 'male' ],
  [ 'banatou', 'female' ],
  [ 'bara', 'male' ],
  [ 'barbara', 'female' ],
  [ 'barry', 'male' ],
  [ 'basem', 'male' ],
  [ 'basma', 'female' ],
  [ 'bassirou', 'male' ],
  [ 'battista', 'male' ],
  [ 'batul', 'female' ],
  [ 'beata', 'female' ],
  [ 'beatric', 'female' ],
  [ 'beatrice', 'female' ],
  [ 'beatrix johanna', 'female' ],
  [ 'beatriz', 'female' ],
  [ 'bekim', 'male' ],
  [ 'benedetta', 'female' ],
  [ 'benito', 'male' ],
  [ 'benjamin', 'male' ],
  [ 'bernard', 'male' ],
  [ 'berta', 'female' ],
  [ 'bertille', 'female' ],
  [ 'besa', 'female' ],
  [ 'bezunesh', 'female' ],
  [ 'bianca', 'female' ],
  [ 'bilal', 'male' ],
  [ 'birthe nygard', 'female' ],
  [ 'bisan', 'male' ],
  [ 'boris', 'male' ],
  [ 'boubacar', 'male' ],
  [ 'bouchaib', 'male' ],
  [ 'bouchra', 'female' ],
  [ 'bouih', 'male' ],
  [ 'brahim', 'male' ],
  [ 'brahim ben jilani', 'male' ],
  [ 'brahima patrice', 'male' ],
  [ 'braian', 'male' ],
  [ 'brian', 'male' ],
  [ 'brian charles', 'male' ],
  [ 'bridget', 'female' ],
  [ 'bridget marion', 'female' ],
  [ 'brigitte', 'female' ],
  [ 'bruna', 'female' ],
  [ 'brunhilde', 'female' ],
  [ 'bruno', 'male' ],
  [ 'bryan', 'male' ],
  [ 'burhan', 'male' ],
  [ 'byron alfred', 'male' ],
  [ 'bzunesh', 'female' ],
  [ 'caiqin', 'female' ],
  [ 'camilla', 'female' ],
  [ 'camillo', 'male' ],
  [ 'candace lea', 'female' ],
  [ 'carla', 'female' ],
  [ 'carlo', 'male' ],
  [ 'carlos', 'male' ],
  [ 'carlos alberto', 'male' ],
  [ 'carlos alfredo', 'male' ],
  [ 'carlota', 'female' ],
  [ 'carlotta', 'female' ],
  [ 'carmela', 'female' ],
  [ 'carmen', 'female' ],
  [ 'carmen rosa', 'female' ],
  [ 'carmine', 'male' ],
  [ 'carolina', 'female' ],
  [ 'caroline ginette', 'female' ],
  [ 'caroline rose', 'female' ],
  [ 'carolus', 'male' ],
  [ 'caterina', 'female' ],
  [ 'catherine', 'female' ],
  [ 'catherine marthe', 'female' ],
  [ 'cecilia', 'female' ],
  [ 'celeste', 'female' ],
  [ 'celine', 'female' ],
  [ 'cesare', 'male' ],
  [ 'champa', 'female' ],
  [ 'chandran', 'male' ],
  [ 'chantal', 'female' ],
  [ 'charalampos', 'male' ],
  [ 'charles', 'male' ],
  [ 'charles john swainston', 'male' ],
  [ 'cheikh', 'male' ],
  [ 'cheikh tidiane', 'male' ],
  [ 'chenxing', 'male' ],
  [ 'cheryl', 'female' ],
  [ 'chi tai', 'female' ],
  [ 'chiara', 'female' ],
  [ 'chiekh', 'male' ],
  [ 'chouchan adom', 'female' ],
  [ 'christian', 'male' ],
  [ 'christiane', 'female' ],
  [ 'christine', 'female' ],
  [ 'christine robin', 'female' ],
  [ 'christophe', 'male' ],
  [ 'cinzia', 'female' ],
  [ 'ciro', 'male' ],
  [ 'claire', 'female' ],
  [ 'clara', 'female' ],
  [ 'clarissa', 'female' ],
  [ 'claudette', 'female' ],
  [ 'claudia', 'female' ],
  [ 'claudia veronika', 'female' ],
  [ 'claudio', 'male' ],
  [ 'cloe', 'female' ],
  [ 'colin', 'male' ],
  [ 'colin james', 'male' ],
  [ 'constantin', 'male' ],
  [ 'corina', 'female' ],
  [ 'corrado', 'male' ],
  [ 'costanza', 'female' ],
  [ 'coumba', 'female' ],
  [ 'covadonga', 'female' ],
  [ 'cristian', 'male' ],
  [ 'cristiano', 'male' ],
  [ 'cristina', 'female' ],
  [ 'cristina nelda', 'female' ],
  [ 'cuong', 'male' ],
  [ 'cynthia', 'female' ],
  [ 'dagmar', 'female' ],
  [ 'dalia', 'female' ],
  [ 'dalila', 'female' ],
  [ 'daly', 'male' ],
  [ 'dame', 'male' ],
  [ 'damiano', 'male' ],
  [ 'daniel', 'male' ],
  [ 'daniela', 'female' ],
  [ 'daniele', 'male' ],
  [ 'daniele bella', 'female' ],
  [ 'daniele simone marie', 'female' ],
  [ 'danielle', 'female' ],
  [ 'danilo', 'male' ],
  [ 'dante', 'male' ],
  [ 'danuta', 'female' ],
  [ 'daoud', 'male' ],
  [ 'daria', 'female' ],
  [ 'dario', 'male' ],
  [ 'dariusz', 'male' ],
  [ 'david', 'male' ],
  [ 'david stephen', 'male' ],
  [ 'davide', 'male' ],
  [ 'davide mario', 'male' ],
  [ 'davood', 'male' ],
  [ 'debora', 'female' ],
  [ 'deborah', 'female' ],
  [ 'debra', 'female' ],
  [ 'demba', 'male' ],
  [ 'denis', 'male' ],
  [ 'denise', 'female' ],
  [ 'dennis', 'male' ],
  [ 'deqa', 'female' ],
  [ 'derek', 'male' ],
  [ 'desiree', 'female' ],
  [ 'desiré', 'female' ],
  [ 'desirè', 'female' ],
  [ 'dian', 'male' ],
  [ 'diana', 'female' ],
  [ 'dianne', 'female' ],
  [ 'dianoch', 'female' ],
  [ 'diego', 'male' ],
  [ 'dieter', 'male' ],
  [ 'dino', 'male' ],
  [ 'divina', 'female' ],
  [ 'djiby', 'male' ],
  [ 'dmytro', 'male' ],
  [ 'domenico', 'male' ],
  [ 'dominique', 'female' ],
  [ 'dona damayanthi', 'female' ],
  [ 'donatella', 'female' ],
  [ 'donika', 'female' ],
  [ 'dorina', 'female' ],
  [ 'doris', 'female' ],
  [ 'dounia', 'female' ],
  [ 'dragan', 'male' ],
  [ 'dramane', 'male' ],
  [ 'driss', 'male' ],
  [ 'dritan', 'male' ],
  [ 'dumitru', 'male' ],
  [ 'dusan', 'male' ],
  [ 'dusanka', 'female' ],
  [ 'dylan', 'male' ],
  [ 'edda', 'female' ],
  [ 'edgardo', 'male' ],
  [ 'edit', 'female' ],
  [ 'edita', 'female' ],
  [ 'edith', 'female' ],
  [ 'edmond', 'male' ],
  [ 'edoardo', 'male' ],
  [ 'eduard', 'male' ],
  [ 'eduardo', 'male' ],
  [ 'edvige', 'female' ],
  [ 'edward', 'male' ],
  [ 'edwin', 'male' ],
  [ 'efren', 'male' ],
  [ 'egidio', 'male' ],
  [ 'eglantina', 'female' ],
  [ 'el hassan', 'male' ],
  [ 'el hassane', 'male' ],
  [ 'el houssaine', 'male' ],
  [ 'el mati', 'male' ],
  [ 'el mostafa', 'male' ],
  [ 'elena', 'female' ],
  [ 'eleni', 'female' ],
  [ 'eleonora', 'female' ],
  [ 'eli', 'male' ],
  [ 'elia', 'male' ],
  [ 'eliane', 'female' ],
  [ 'elisa', 'female' ],
  [ 'elisa ginette', 'female' ],
  [ 'elisabeth', 'female' ],
  [ 'elisabetta', 'female' ],
  [ 'elizabeth', 'female' ],
  [ 'elke', 'female' ],
  [ 'elma', 'female' ],
  [ 'elona', 'female' ],
  [ 'elsa', 'female' ],
  [ 'elvira', 'female' ],
  [ 'elza', 'female' ],
  [ 'emanuel', 'male' ],
  [ 'emanuela', 'female' ],
  [ 'emanuele', 'male' ],
  [ 'emiko', 'female' ],
  [ 'emilia', 'female' ],
  [ 'emiliano', 'male' ],
  [ 'emilio', 'male' ],
  [ 'emily', 'female' ],
  [ 'emma', 'female' ],
  [ 'emmanoyhl', 'male' ],
  [ 'emmanuel', 'male' ],
  [ 'encarnacion', 'female' ],
  [ 'endri', 'male' ],
  [ 'enea', 'male' ],
  [ 'enkelejda', 'female' ],
  [ 'enrica', 'female' ],
  [ 'enrico', 'male' ],
  [ 'enrique', 'male' ],
  [ 'enzo', 'male' ],
  [ 'eri', 'female' ],
  [ 'eric', 'male' ],
  [ 'erica', 'female' ],
  [ 'erich', 'male' ],
  [ 'erik', 'male' ],
  [ 'erika', 'female' ],
  [ 'ermanno', 'male' ],
  [ 'erminia', 'female' ],
  [ 'ermira', 'female' ],
  [ 'ernesto', 'male' ],
  [ 'ernst', 'male' ],
  [ 'ervin', 'male' ],
  [ 'esmeralda', 'female' ],
  [ 'ester', 'female' ],
  [ 'esther', 'female' ],
  [ 'ethan', 'male' ],
  [ 'ettore', 'male' ],
  [ 'eugen', 'male' ],
  [ 'eugenio', 'male' ],
  [ 'eva', 'female' ],
  [ 'evelyn', 'female' ],
  [ 'ewa', 'female' ],
  [ 'ezio', 'male' ],
  [ 'fabiana', 'female' ],
  [ 'fabio', 'male' ],
  [ 'fabrizio', 'male' ],
  [ 'faduma', 'female' ],
  [ 'fallou', 'male' ],
  [ 'fama', 'female' ],
  [ 'farhia', 'female' ],
  [ 'fartun', 'female' ],
  [ 'fatiha', 'female' ],
  [ 'fatima', 'female' ],
  [ 'fatima zahra', 'female' ],
  [ 'fatimata', 'female' ],
  [ 'fatma', 'female' ],
  [ 'fatmir', 'male' ],
  [ 'fatou', 'female' ],
  [ 'fausto', 'male' ],
  [ 'federica', 'female' ],
  [ 'federico', 'male' ],
  [ 'ferdinando', 'male' ],
  [ 'fernando', 'male' ],
  [ 'ferruccio', 'male' ],
  [ 'filippo', 'male' ],
  [ 'flavia', 'female' ],
  [ 'flavio', 'male' ],
  [ 'flor de maria', 'female' ],
  [ 'florence', 'female' ],
  [ 'florian', 'male' ],
  [ 'florin', 'male' ],
  [ 'fouad', 'male' ],
  [ 'fouzia', 'female' ],
  [ 'franca', 'female' ],
  [ 'francesca', 'female' ],
  [ 'francesca pia', 'female' ],
  [ 'francesco', 'male' ],
  [ 'francesco pio', 'male' ],
  [ 'francis', 'male' ],
  [ 'francisca', 'female' ],
  [ 'francisco', 'male' ],
  [ 'franco', 'male' ],
  [ 'fulvio', 'male' ],
  [ 'gabriel', 'male' ],
  [ 'gabriela', 'female' ],
  [ 'gabriele', 'male' ],
  [ 'gabriella', 'female' ],
  [ 'gaetano', 'male' ],
  [ 'gaia', 'female' ],
  [ 'galina', 'female' ],
  [ 'galyna', 'female' ],
  [ 'ganna', 'female' ],
  [ 'genet', 'female' ],
  [ 'gennaro', 'male' ],
  [ 'george', 'male' ],
  [ 'georgina', 'female' ],
  [ 'gessica', 'female' ],
  [ 'gezim', 'male' ],
  [ 'gheorghe', 'male' ],
  [ 'giacomo', 'male' ],
  [ 'giada', 'female' ],
  [ 'giampaolo', 'male' ],
  [ 'gian carlo', 'male' ],
  [ 'giancarlo', 'male' ],
  [ 'gianfranco', 'male' ],
  [ 'gianluca', 'male' ],
  [ 'gianluigi', 'male' ],
  [ 'gianni', 'male' ],
  [ 'gina', 'female' ],
  [ 'ginevra', 'female' ],
  [ 'gioele', 'male' ],
  [ 'gioia', 'female' ],
  [ 'giorgia', 'female' ],
  [ 'giorgio', 'male' ],
  [ 'giovanna', 'female' ],
  [ 'giovanni', 'male' ],
  [ 'giulia', 'female' ],
  [ 'giulia maria', 'female' ],
  [ 'giuliana', 'female' ],
  [ 'giuliano', 'male' ],
  [ 'giulio', 'male' ],
  [ 'giuseppa', 'female' ],
  [ 'giuseppe', 'male' ],
  [ 'giuseppina', 'female' ],
  [ 'giusy', 'female' ],
  [ 'gloria', 'female' ],
  [ 'gora', 'male' ],
  [ 'graciela', 'female' ],
  [ 'graziella', 'female' ],
  [ 'gregorio', 'male' ],
  [ 'greta', 'female' ],
  [ 'guido', 'male' ],
  [ 'habiba', 'female' ],
  [ 'hafida', 'female' ],
  [ 'hajar', 'female' ],
  [ 'halima', 'female' ],
  [ 'halyna', 'female' ],
  [ 'hamid', 'male' ],
  [ 'hamza', 'male' ],
  [ 'hana', 'female' ],
  [ 'hanane', 'female' ],
  [ 'hanna', 'female' ],
  [ 'hans', 'male' ],
  [ 'harouna', 'male' ],
  [ 'hasan', 'male' ],
  [ 'hassan', 'male' ],
  [ 'hassane', 'male' ],
  [ 'hawa', 'female' ],
  [ 'hedi ben mohamed', 'male' ],
  [ 'hiba', 'female' ],
  [ 'hicham', 'male' ],
  [ 'houda', 'female' ],
  [ 'iacopo', 'male' ],
  [ 'ibrahim', 'male' ],
  [ 'ibrahima', 'male' ],
  [ 'ida', 'female' ],
  [ 'igor', 'male' ],
  [ 'ikram', 'female' ],
  [ 'ilaria', 'female' ],
  [ 'ilary', 'female' ],
  [ 'ilenia', 'female' ],
  [ 'ilham', 'female' ],
  [ 'ilias', 'male' ],
  [ 'ilie', 'male' ],
  [ 'ilir', 'male' ],
  [ 'iman', 'female' ],
  [ 'imane', 'female' ],
  [ 'imran', 'male' ],
  [ 'ines', 'female' ],
  [ 'inga', 'female' ],
  [ 'ingrid', 'female' ],
  [ 'inna', 'female' ],
  [ 'ioan', 'male' ],
  [ 'ioana', 'female' ],
  [ 'ion', 'male' ],
  [ 'ionel', 'male' ],
  [ 'ionut', 'male' ],
  [ 'irene', 'female' ],
  [ 'irina', 'female' ],
  [ 'iris', 'female' ],
  [ 'irma', 'female' ],
  [ 'iryna', 'female' ],
  [ 'isaac', 'male' ],
  [ 'isabel', 'female' ],
  [ 'isabella', 'female' ],
  [ 'isabelle', 'female' ],
  [ 'ismail', 'male' ],
  [ 'ismet', 'male' ],
  [ 'israa', 'female' ],
  [ 'issa', 'male' ],
  [ 'issaka', 'male' ],
  [ 'iuliana', 'female' ],
  [ 'ivan', 'male' ],
  [ 'ivano', 'male' ],
  [ 'izabela', 'female' ],
  [ 'jacopo', 'male' ],
  [ 'jacqueline', 'female' ],
  [ 'jacques', 'male' ],
  [ 'jamal', 'male' ],
  [ 'james', 'male' ],
  [ 'jan', 'male' ],
  [ 'janet', 'female' ],
  [ 'jannat', 'female' ],
  [ 'jasmina', 'female' ],
  [ 'jasmine', 'female' ],
  [ 'jennifer', 'female' ],
  [ 'jessica', 'female' ],
  [ 'joel', 'male' ],
  [ 'johannes', 'male' ],
  [ 'john', 'male' ],
  [ 'jonathan', 'male' ],
  [ 'jorge', 'male' ],
  [ 'jose antonio', 'male' ],
  [ 'jose luis', 'male' ],
  [ 'joseph', 'male' ],
  [ 'joshua', 'male' ],
  [ 'joy', 'female' ],
  [ 'joyce', 'female' ],
  [ 'juan carlos', 'male' ],
  [ 'juana', 'female' ],
  [ 'julia', 'female' ],
  [ 'julieta', 'female' ],
  [ 'jun', 'male' ],
  [ 'justin', 'male' ],
  [ 'kamal', 'male' ],
  [ 'kamelia', 'female' ],
  [ 'karen', 'female' ],
  [ 'karim', 'male' ],
  [ 'karima', 'female' ],
  [ 'katarzyna', 'female' ],
  [ 'katerina', 'female' ],
  [ 'kateryna', 'female' ],
  [ 'katia', 'female' ],
  [ 'kevin', 'male' ],
  [ 'khadija', 'female' ],
  [ 'khaled', 'male' ],
  [ 'khalid', 'male' ],
  [ 'kine', 'female' ],
  [ 'klea', 'female' ],
  [ 'kofi', 'male' ],
  [ 'kristel', 'female' ],
  [ 'kristian', 'male' ],
  [ 'krystyna', 'female' ],
  [ 'kwabena', 'male' ],
  [ 'lahcen', 'male' ],
  [ 'laila', 'female' ],
  [ 'lara', 'female' ],
  [ 'larbi', 'male' ],
  [ 'larysa', 'female' ],
  [ 'latifa', 'female' ],
  [ 'laura', 'female' ],
  [ 'laurence', 'female' ],
  [ 'lavinia', 'female' ],
  [ 'layachi', 'male' ],
  [ 'leo', 'male' ],
  [ 'leonardo', 'male' ],
  [ 'letizia', 'female' ],
  [ 'lhoussain', 'male' ],
  [ 'lhoussaine', 'male' ],
  [ 'lia', 'female' ],
  [ 'liam', 'male' ],
  [ 'lidia', 'female' ],
  [ 'lidiya', 'female' ],
  [ 'liliana', 'female' ],
  [ 'liliya', 'female' ],
  [ 'liljana', 'female' ],
  [ 'lina', 'female' ],
  [ 'linda', 'female' ],
  [ 'lisa', 'female' ],
  [ 'liton', 'male' ],
  [ 'liubov', 'female' ],
  [ 'liudmyla', 'female' ],
  [ 'livia', 'female' ],
  [ 'ljiljana', 'female' ],
  [ 'loredana', 'female' ],
  [ 'lorena', 'female' ],
  [ 'lorenza', 'female' ],
  [ 'lorenzo', 'male' ],
  [ 'loris', 'male' ],
  [ 'luan', 'male' ],
  [ 'luana', 'female' ],
  [ 'luca', 'male' ],
  [ 'lucia', 'female' ],
  [ 'lucian', 'male' ],
  [ 'luciana', 'female' ],
  [ 'luciano', 'male' ],
  [ 'lucio', 'male' ],
  [ 'lucrezia', 'female' ],
  [ 'ludovica', 'female' ],
  [ 'ludovico', 'male' ],
  [ 'luigi', 'male' ],
  [ 'luigia', 'female' ],
  [ 'luigina', 'female' ],
  [ 'luis', 'male' ],
  [ 'luis alberto', 'male' ],
  [ 'luis fernando', 'male' ],
  [ 'luisa', 'female' ],
  [ 'luka', 'male' ],
  [ 'luljeta', 'female' ],
  [ 'luna', 'female' ],
  [ 'lyubov', 'female' ],
  [ 'lyudmyla', 'female' ],
  [ 'mobark', 'male' ],
  [ 'mohamed', 'male' ],
  [ 'mohammed', 'male' ],
  [ 'maddalena', 'female' ],
  [ 'madeleine', 'female' ],
  [ 'madina', 'female' ],
  [ 'maia', 'female' ],
  [ 'maicol', 'male' ],
  [ 'majda', 'female' ],
  [ 'majlinda', 'female' ],
  [ 'maksym', 'male' ],
  [ 'malak', 'female' ],
  [ 'malgorzata', 'female' ],
  [ 'malika', 'female' ],
  [ 'mamadou', 'male' ],
  [ 'mamadou lamine', 'male' ],
  [ 'mamoudou', 'male' ],
  [ 'manal', 'female' ],
  [ 'mansour', 'male' ],
  [ 'manuel', 'male' ],
  [ 'manuela', 'female' ],
  [ 'manuele', 'male' ],
  [ 'mara', 'female' ],
  [ 'marcela', 'female' ],
  [ 'marcello', 'male' ],
  [ 'marcelo', 'male' ],
  [ 'marcia', 'female' ],
  [ 'marco', 'male' ],
  [ 'marco antonio', 'male' ],
  [ 'margaret', 'female' ],
  [ 'margarethe', 'female' ],
  [ 'margarita', 'female' ],
  [ 'margherita', 'female' ],
  [ 'maria', 'female' ],
  [ 'maria carmen', 'female' ],
  [ 'maria chiara', 'female' ],
  [ 'maria cristina', 'female' ],
  [ 'maria de fatima', 'female' ],
  [ 'maria del carmen', 'female' ],
  [ 'maria del rosario', 'female' ],
  [ 'maria dolores', 'female' ],
  [ 'maria elena', 'female' ],
  [ 'maria eugenia', 'female' ],
  [ 'maria felipa', 'female' ],
  [ 'maria grazia', 'female' ],
  [ 'maria helena', 'female' ],
  [ 'maria isabel', 'female' ],
  [ 'maria luisa', 'female' ],
  [ 'maria mercedes', 'female' ],
  [ 'maria stella', 'female' ],
  [ 'maria teresa', 'female' ],
  [ 'maria vittoria', 'female' ],
  [ 'mariachiara', 'female' ],
  [ 'mariagiulia', 'female' ],
  [ 'mariagrazia', 'female' ],
  [ 'marialuisa', 'female' ],
  [ 'mariam', 'female' ],
  [ 'marian', 'male' ],
  [ 'mariana', 'female' ],
  [ 'marianna', 'female' ],
  [ 'mariavittoria', 'female' ],
  [ 'maribel', 'female' ],
  [ 'marica', 'female' ],
  [ 'mariem', 'female' ],
  [ 'mariia', 'female' ],
  [ 'marija', 'female' ],
  [ 'marika', 'female' ],
  [ 'marina', 'female' ],
  [ 'marinela', 'female' ],
  [ 'mario', 'male' ],
  [ 'marisa', 'female' ],
  [ 'marius', 'male' ],
  [ 'mariya', 'female' ],
  [ 'marko', 'male' ],
  [ 'marlene', 'female' ],
  [ 'marta', 'female' ],
  [ 'martha', 'female' ],
  [ 'martin', 'male' ],
  [ 'martina', 'female' ],
  [ 'martino', 'male' ],
  [ 'marwa', 'female' ],
  [ 'mary', 'female' ],
  [ 'mary elizabeth', 'female' ],
  [ 'maryam', 'female' ],
  [ 'maryan', 'female' ],
  [ 'maryna', 'female' ],
  [ 'marzena', 'female' ],
  [ 'massamba', 'male' ],
  [ 'massimiliano', 'male' ],
  [ 'massimo', 'male' ],
  [ 'mathias', 'male' ],
  [ 'matias', 'male' ],
  [ 'matilda', 'female' ],
  [ 'matilde', 'female' ],
  [ 'matteo', 'male' ],
  [ 'mattia', 'male' ],
  [ 'mattias', 'male' ],
  [ 'maurizio', 'male' ],
  [ 'mauro', 'male' ],
  [ 'maya', 'female' ],
  [ 'mbacke', 'male' ],
  [ 'mbaye', 'male' ],
  [ 'md', 'male' ],
  [ 'melania', 'female' ],
  [ 'melissa', 'female' ],
  [ 'mercedes', 'female' ],
  [ 'mercy', 'female' ],
  [ 'meryem', 'female' ],
  [ 'mhamed', 'male' ],
  [ 'mia', 'female' ],
  [ 'michael', 'male' ],
  [ 'michaela', 'female' ],
  [ 'michela', 'female' ],
  [ 'michele', 'male' ],
  [ 'michelle', 'female' ],
  [ 'miguel angel', 'male' ],
  [ 'mihaela', 'female' ],
  [ 'mihai', 'male' ],
  [ 'milan', 'male' ],
  [ 'milena', 'female' ],
  [ 'mimoza', 'female' ],
  [ 'mina', 'female' ],
  [ 'mira', 'female' ],
  [ 'mirco', 'male' ],
  [ 'mirela', 'female' ],
  [ 'mirella', 'female' ],
  [ 'miriam', 'female' ],
  [ 'miriana', 'female' ],
  [ 'mirko', 'male' ],
  [ 'mirsad', 'male' ],
  [ 'mirsada', 'female' ],
  [ 'modou', 'male' ],
  [ 'moha', 'male' ],
  [ 'mohamed ali', 'male' ],
  [ 'mohamed amine', 'male' ],
  [ 'mohammad', 'male' ],
  [ 'monica', 'female' ],
  [ 'monika', 'female' ],
  [ 'mor', 'male' ],
  [ 'morgan', 'male' ],
  [ 'mostafa', 'male' ],
  [ 'mouad', 'male' ],
  [ 'mouhamed', 'male' ],
  [ 'mourad', 'male' ],
  [ 'moussa', 'male' ],
  [ 'moustapha', 'male' ],
  [ 'mubera', 'female' ],
  [ 'muhammad', 'male' ],
  [ 'musa', 'male' ],
  [ 'mustapha', 'male' ],
  [ 'mya', 'female' ],
  [ 'mykhaylo', 'male' ],
  [ 'mykola', 'male' ],
  [ 'myriam', 'female' ],
  [ 'nada', 'female' ],
  [ 'nadia', 'female' ],
  [ 'nadiia', 'female' ],
  [ 'nadiya', 'female' ],
  [ 'naim', 'male' ],
  [ 'naima', 'female' ],
  [ 'najat', 'female' ],
  [ 'nancy', 'female' ],
  [ 'naomi', 'female' ],
  [ 'nassim', 'male' ],
  [ 'natalia', 'female' ],
  [ 'nataliia', 'female' ],
  [ 'nataliya', 'female' ],
  [ 'natalya', 'female' ],
  [ 'nathalie', 'female' ],
  [ 'nathan', 'male' ],
  [ 'ndiaga', 'male' ],
  [ 'nezha', 'female' ],
  [ 'niccolò', 'male' ],
  [ 'nicholas', 'male' ],
  [ 'nicol', 'female' ],
  [ 'nicola', 'male' ],
  [ 'nicolae', 'male' ],
  [ 'nicolas', 'male' ],
  [ 'nicole', 'female' ],
  [ 'nicoleta', 'female' ],
  [ 'nicoletta', 'female' ],
  [ 'nicolò', 'male' ],
  [ 'nina', 'female' ],
  [ 'noah', 'male' ],
  [ 'noemi', 'female' ],
  [ 'nome', 'GENERE' ],
  [ 'nora', 'female' ],
  [ 'nour', 'female' ],
  [ 'nour eddine', 'male' ],
  [ 'noureddine', 'male' ],
  [ 'oksana', 'female' ],
  [ 'oleg', 'male' ],
  [ 'oleh', 'male' ],
  [ 'oleksandr', 'male' ],
  [ 'oleksandra', 'female' ],
  [ 'olena', 'female' ],
  [ 'olga', 'female' ],
  [ 'olha', 'female' ],
  [ 'olivia', 'female' ],
  [ 'omar', 'male' ],
  [ 'orlando', 'male' ],
  [ 'ornella', 'female' ],
  [ 'oscar', 'male' ],
  [ 'oumar', 'male' ],
  [ 'ousmane', 'male' ],
  [ 'ousseynou', 'male' ],
  [ 'paola', 'female' ],
  [ 'paolo', 'male' ],
  [ 'papa', 'male' ],
  [ 'pasquale', 'male' ],
  [ 'patricia', 'female' ],
  [ 'patrick', 'male' ],
  [ 'patrizia', 'female' ],
  [ 'paul', 'male' ],
  [ 'paulina', 'female' ],
  [ 'peter', 'male' ],
  [ 'petra', 'female' ],
  [ 'petro', 'male' ],
  [ 'petronella', 'female' ],
  [ 'petru', 'male' ],
  [ 'philippe', 'male' ],
  [ 'pierangelo', 'male' ],
  [ 'pierina', 'female' ],
  [ 'pierluigi', 'male' ],
  [ 'pietro', 'male' ],
  [ 'priscilla', 'female' ],
  [ 'rabia', 'female' ],
  [ 'rachele', 'female' ],
  [ 'rachid', 'male' ],
  [ 'rachida', 'female' ],
  [ 'radouane', 'male' ],
  [ 'raffaele', 'male' ],
  [ 'raffaella', 'female' ],
  [ 'rahma', 'female' ],
  [ 'ramona', 'female' ],
  [ 'raul', 'male' ],
  [ 'rayan', 'male' ],
  [ 'rayane', 'male' ],
  [ 'rayen', 'male' ],
  [ 'rebecca', 'female' ],
  [ 'remedios', 'female' ],
  [ 'renata', 'female' ],
  [ 'renato', 'male' ],
  [ 'renzo', 'male' ],
  [ 'ricardo', 'male' ],
  [ 'riccardo', 'male' ],
  [ 'richard', 'male' ],
  [ 'rim', 'female' ],
  [ 'rita', 'female' ],
  [ 'robert', 'male' ],
  [ 'roberta', 'female' ],
  [ 'roberto', 'male' ],
  [ 'rocco', 'male' ],
  [ 'rodica', 'female' ],
  [ 'rolando', 'male' ],
  [ 'roman', 'male' ],
  [ 'rosa', 'female' ],
  [ 'rosanna', 'female' ],
  [ 'rosario', 'female' ],
  [ 'rose', 'female' ],
  [ 'rossella', 'female' ],
  [ 'roxana', 'female' ],
  [ 'ruth', 'female' ],
  [ 'ryuji', 'male' ],
  [ 'saad', 'male' ],
  [ 'saadia', 'female' ],
  [ 'sabah', 'female' ],
  [ 'sabina', 'female' ],
  [ 'sabine', 'female' ],
  [ 'sabrina', 'female' ],
  [ 'saer', 'male' ],
  [ 'safia', 'female' ],
  [ 'sahra', 'female' ],
  [ 'said', 'male' ],
  [ 'saida', 'female' ],
  [ 'salah', 'male' ],
  [ 'salim', 'male' ],
  [ 'salma', 'female' ],
  [ 'salvatore', 'male' ],
  [ 'samantha', 'female' ],
  [ 'samba', 'male' ],
  [ 'sami', 'male' ],
  [ 'samir', 'male' ],
  [ 'samir ben mohamed', 'male' ],
  [ 'samira', 'female' ],
  [ 'samuel', 'male' ],
  [ 'samuele', 'male' ],
  [ 'sandra', 'female' ],
  [ 'santa', 'female' ],
  [ 'santiago', 'male' ],
  [ 'santina', 'female' ],
  [ 'sara', 'female' ],
  [ 'sarah', 'female' ],
  [ 'saverio', 'male' ],
  [ 'sebastian', 'male' ],
  [ 'sebastiano', 'male' ],
  [ 'sebastijan', 'male' ],
  [ 'senada', 'female' ],
  [ 'serena', 'female' ],
  [ 'sergio', 'male' ],
  [ 'serhiy', 'male' ],
  [ 'serigne', 'male' ],
  [ 'seynabou', 'female' ],
  [ 'sharon', 'female' ],
  [ 'shirley', 'female' ],
  [ 'shkelqim', 'male' ],
  [ 'shukri', 'female' ],
  [ 'siham', 'female' ],
  [ 'silvana', 'female' ],
  [ 'silvano', 'male' ],
  [ 'silvia', 'female' ],
  [ 'silvio', 'male' ],
  [ 'simon', 'male' ],
  [ 'simona', 'female' ],
  [ 'simone', 'male' ],
  [ 'siria', 'female' ],
  [ 'sofia', 'female' ],
  [ 'sonia', 'female' ],
  [ 'sonja', 'female' ],
  [ 'sophia', 'female' ],
  [ 'sophie', 'female' ],
  [ 'souad', 'female' ],
  [ 'souleymane', 'male' ],
  [ 'stefan', 'male' ],
  [ 'stefania', 'female' ],
  [ 'stefano', 'male' ],
  [ 'stella', 'female' ],
  [ 'stephen', 'male' ],
  [ 'suela', 'female' ],
  [ 'sukhwinder', 'male' ],
  [ 'susan', 'female' ],
  [ 'susanna', 'female' ],
  [ 'suzanne', 'female' ],
  [ 'svitlana', 'female' ],
  [ 'sylvie', 'female' ],
  [ 'taha', 'male' ],
  [ 'tamara', 'female' ],
  [ 'tanja', 'female' ],
  [ 'tarek', 'male' ],
  [ 'tarik', 'male' ],
  [ 'tatiana', 'female' ],
  [ 'teresa', 'female' ],
  [ 'teresina', 'female' ],
  [ 'tetiana', 'female' ],
  [ 'tetyana', 'female' ],
  [ 'theodor', 'male' ],
  [ 'thomas', 'male' ],
  [ 'tiziana', 'female' ],
  [ 'tommaso', 'male' ],
  [ 'ugo', 'male' ],
  [ 'umberto', 'male' ],
  [ 'valbona', 'female' ],
  [ 'valentina', 'female' ],
  [ 'valentino', 'male' ],
  [ 'valentyna', 'female' ],
  [ 'valeria', 'female' ],
  [ 'valerio', 'male' ],
  [ 'valeriy', 'male' ],
  [ 'valter', 'male' ],
  [ 'vanessa', 'female' ],
  [ 'vasile', 'male' ],
  [ 'vasyl', 'male' ],
  [ 'vasylyna', 'female' ],
  [ 'vera', 'female' ],
  [ 'veronica', 'female' ],
  [ 'vesna', 'female' ],
  [ 'victor', 'male' ],
  [ 'victoria', 'female' ],
  [ 'viktor', 'male' ],
  [ 'vincenzo', 'male' ],
  [ 'viola', 'female' ],
  [ 'viorel', 'male' ],
  [ 'viorica', 'female' ],
  [ 'vira', 'female' ],
  [ 'virginia', 'female' ],
  [ 'vito', 'male' ],
  [ 'vittoria', 'female' ],
  [ 'vittorio', 'male' ],
  [ 'viviana', 'female' ],
  [ 'vladimir', 'male' ],
  [ 'vladyslav', 'male' ],
  [ 'volodymyr', 'male' ],
  [ 'walid', 'male' ],
  [ 'walter', 'male' ],
  [ 'william', 'male' ],
  [ 'willy', 'male' ],
  [ 'yacouba', 'male' ],
  [ 'yahya', 'male' ],
  [ 'yamina', 'female' ],
  [ 'yanhong', 'female' ],
  [ 'yara', 'female' ],
  [ 'yaroslav', 'male' ],
  [ 'yasmin', 'female' ],
  [ 'yasmine', 'female' ],
  [ 'yasser', 'male' ],
  [ 'yassin', 'male' ],
  [ 'yassine', 'male' ],
  [ 'yassir', 'male' ],
  [ 'ylenia', 'female' ],
  [ 'yousra', 'female' ],
  [ 'youssef', 'male' ],
  [ 'yuliya', 'female' ],
  [ 'zahra', 'female' ],
  [ 'zaid', 'male' ],
  [ 'zakaria', 'male' ],
  [ 'zeljko', 'male' ],
  [ 'ziad', 'male' ],
  [ 'zoe', 'female' ],
  [ 'zoran', 'male' ]
])

module.exports = itNames
