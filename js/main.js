// ---------- Stars ----------
const starsEl = document.getElementById('stars');
for(let i=0;i<90;i++){
  const s = document.createElement('div');
  s.className='star';
  const size = Math.random()*2+1;
  s.style.width=size+'px';s.style.height=size+'px';
  s.style.left=Math.random()*100+'%';
  s.style.top=Math.random()*100+'%';
  s.style.setProperty('--dur',(Math.random()*3+2)+'s');
  s.style.animationDelay=(Math.random()*3)+'s';
  starsEl.appendChild(s);
}
// ---------- Drifting gold particles ----------
const particlesEl = document.getElementById('particles');
for(let i=0;i<22;i++){
  const p=document.createElement('div');
  p.className='drift-particle';
  const size=Math.random()*5+3;
  p.style.width=size+'px';p.style.height=size+'px';
  p.style.left=Math.random()*100+'%';
  p.style.bottom='-5%';
  p.style.setProperty('--ddur',(Math.random()*10+10)+'s');
  p.style.animationDelay=(Math.random()*10)+'s';
  particlesEl.appendChild(p);
}
// ---------- sparkles on map ----------
document.addEventListener('DOMContentLoaded',()=>{
  const layer=document.querySelector('.ocean-layer');
  for(let i=0;i<24;i++){
    const sp=document.createElement('div');
    sp.className='sparkle';
    sp.style.left=Math.random()*100+'%';
    sp.style.top=Math.random()*100+'%';
    sp.style.animationDelay=(Math.random()*3.5)+'s';
    layer.appendChild(sp);
  }
});

// ---------- Scale the whole map (desktop layout, shrunk to fit any screen) ----------
const MAP_BASE_WIDTH = 1400;
const MAP_BASE_HEIGHT = 875;
function scaleMap(){
  const wrap = document.querySelector('.map-scroll');
  const canvas = document.querySelector('.map-canvas');
  if(!wrap || !canvas) return;
  const baseScale = wrap.clientWidth / MAP_BASE_WIDTH;
  const mobileScale = wrap.clientWidth < 900 ? wrap.clientWidth / MAP_BASE_WIDTH : baseScale;
  const scale = Math.min(mobileScale, 1);
  canvas.style.transform = `scale(${scale})`;
  wrap.style.height = (MAP_BASE_HEIGHT * scale) + 'px';
}
window.addEventListener('resize', scaleMap);
window.addEventListener('load', scaleMap);
document.addEventListener('DOMContentLoaded', scaleMap);

// ---------- Intro sequence ----------
const lines=[document.getElementById('line1'),document.getElementById('line2'),document.getElementById('line3')];
const startBtn=document.getElementById('start-btn');
let t=300;
lines.forEach((l,idx)=>{
  setTimeout(()=>{ l.classList.add('active'); },t);
  t+=3600;
});
setTimeout(()=>{ startBtn.classList.add('show'); }, t + 200);

startBtn.addEventListener('click',()=>{
  document.getElementById('intro').classList.add('hide');
  const map=document.getElementById('map-view');
  setTimeout(()=>{ map.classList.add('show'); scaleMap(); }, 300);
});

// ---------- Island panels ----------
const content = {
  hero:{
    title:'❤️ Tú Eres Mi One Piece',
    sub:'El tesoro más valioso que encontré en este mar.',
    intro:'Cada foto aquí es un tesoro que decidí guardar para siempre. Toca cualquiera para verla más grande.'
  },
  il2:{
    title:'📜 Nuestra Historia',
    sub:'Desde aquel comentario hasta hoy.',
    body:'Al principio solo eras una persona más entre millones. No imaginaba que detrás de una foto de perfil, un comentario sobre One Piece y unas cuantas conversaciones se encontraba la persona que terminaría cambiando mi vida.\n\nPoco a poco empezaste a convertirte en alguien especial. Me gustaba hablar contigo, escuchar tu voz, compartir tiempo contigo y descubrir quién eras realmente. Sin darme cuenta, aquello que comenzó como admiración se convirtió en algo mucho más grande.\n\nHubo momentos en los que tuve miedo, momentos en los que pensé que quizás nunca sentirías lo mismo por mí, pero aun así mi corazón nunca dejó de elegirte. Y hoy, mirando todo lo que hemos construido juntos, me alegra haber seguido adelante.\n\nEsta historia comenzó con un mensaje, continuó con una amistad y terminó convirtiéndose en algo que jamás quiero perder.\n\nPorque si algo aprendí durante todo este tiempo, es que tú siempre has sido mi mayor tesoro.',
    pdf:'assets/documents/lovelyn.pdf' // usa el PDF "lovelyn.pdf"
  },
  il3:{
    title:'📖 Lovelyn II',
    sub:'La secuela de nuestro libro romántico.',
    letter:'La primera parte de Lovelyn nació de las ganas de contarte lo que sentía. Pero contigo la historia nunca se terminó de escribir — siguió creciendo en cada día que pasamos juntos. Por eso decidí escribir una segunda parte: porque tú sigues dándome capítulos nuevos que contar.',
    signature:'— Victor'
  },
  il4:{
    title:'💌 101 Razones por las que te amo',
    sub:'Una por una, porque todas importan.',
    intro:'Un día empecé a hacer una lista, y no pude parar. Cada vez que pensaba "ya está completa", se me ocurría una razón más. Así que decidí escribirte 101 — una por cada motivo que me hace amarte un poco más cada día. Ve pasándolas cuando quieras, o si tienes prisa, pídeme una al azar.'
  },
  il5:{
    title:'🎁 Sorpresas',
    sub:'Tres cofres con secretos, poemas, fotos y un mensaje final especial.',
    body:'Una cueva de tesoros con cartas ocultas, mensajes y sorpresas que se irán desbloqueando con el tiempo. Vuelve a visitarla — nunca sabes cuándo aparecerá algo nuevo.'
  },
  il6:{
    title:'🎶 Nuestra Música',
    sub:'Las canciones que nos acompañan en esta aventura.',
    body:'Aquí encontrarás nuestras canciones especiales y el reproductor para escucharlas directamente desde el sitio. Agrega tus archivos MP3 en `assets/music/` y cámbialos por los nombres que quieras más abajo.',
    spotify:''
  }
};

const bookPages = [
  {
    heading:'# Hola mi amor ❤️',
    text:['Hola mi amor, mi esposa, mi vida, mi mujer, mi bebé y mi todo.', 'Todo esto te lo escribo desde el fondo de mi corazón.', 'Si te soy honesto, al principio esto iba a ser simplemente un PDF. Algo sencillo, bonito y ya. Pero mientras pensaba en ti, me di cuenta de algo: tú no eres una mujer para la que quiera hacer algo sencillo.', 'Eres una mujer que vale la pena. Y mucho.']
  },
  {
    heading:'Por ti',
    text:['Sé que tenemos problemas. Sé que hay momentos en los que quisiera ayudarte más y no siempre sé cómo hacerlo. Hay veces en las que daría cualquier cosa por poder abrazarte y hacer que todo estuviera bien, pero la distancia no siempre me deja hacerlo.', 'Sin embargo, hoy es tu cumpleaños. Y hoy quería demostrarte algo. Quería demostrarte que pienso seguir esforzándome por ti. Por nosotros.', 'Porque te amo. Y porque creo que eres una mujer que merece que la amen con todo el corazón.']
  },
  {
    heading:'Eres increíble',
    text:['Espero que todo esto te guste. Espero que puedas ver cuánto te amo. Y sobre todo, espero que aunque sea por un momento logres meterte en esa cabecita hermosa tuya la idea de que eres una mujer increíble.', 'Porque lo eres. Aunque no me creas. Aunque no lo veas. Aunque a veces dudes de ti. Eres preciosa.', 'Y no solo lo pienso yo. Mi familia te adora. Y mi abuelita está emocionadísima por conocerte.', 'Y la verdad... con tremendo mujerón que me conseguí, ¿cómo no iban a estar felices? JAJAJA ❤️']
  },
  {
    heading:'Siempre',
    text:['Quiero que sepas algo. Desde el primer día que hablamos hasta hoy, mis sentimientos por ti no han cambiado. Y lo peor es que creo que cada año empeoran.', 'Porque sigo enamorándome más de ti. Para mí sigues siendo la mujer más hermosa, más divertida, más adorable y más increíble que conozco.', 'No tienes idea de cuánto amo jugar contigo. Y sí... todavía estoy esperando que veamos anime juntos. Y sí... eso cuenta como una cita, no acepto discusiones. 😌❤️']
  },
  {
    heading:'Gracias',
    text:['También quería darte las gracias. Porque has estado conmigo. Porque me has escuchado. Porque me has apoyado. Porque me has aguantado. Porque has decidido quedarte incluso en los días en los que yo mismo no sabía qué hacer.', 'Y eso significa más para mí de lo que imaginas.', 'La verdad es que no creo que esta página sea suficiente para agradecerte todo lo que has hecho por mí. Ni este texto. Ni cien textos. Porque has cambiado mi vida de muchas maneras.']
  },
  {
    heading:'Te necesito',
    text:['Y si te digo la verdad... Te necesito. Te quiero a ti. Solo a ti. A nadie más.', 'Me encanta todo de ti. Tus ojos. Tu sonrisa. Tus labios. Tu cabello. Tu voz. Tu forma de ser. Tus ocurrencias. Tus tatuajes. Tus albures. Todo.', 'Pero ¿sabes qué es lo más curioso? Que incluso cuando todavía no podía verte, ya estaba enamorándome de ti.', 'Me enamoré de una mujer que ni siquiera conocía físicamente. Me enamoré de tu forma de hablar. De tu forma de pensar. De cómo me hacías sentir.']
  },
  {
    heading:'Contigo',
    text:['Y cuando por fin pude verte... bueno... ahí ya no hubo salvación para mí. ❤️ Quedé completamente amarrado a ti. Y sinceramente no quiero que me sueltes nunca.', 'Porque eres lo que quiero. Eres la persona con la que sueño construir una vida. La persona con la que quiero compartir mis logros. Mis días buenos. Mis días malos.', 'La persona con la que quiero formar una familia. La persona con la que quiero despertar. Y la persona con la que quiero envejecer.']
  },
  {
    heading:'Mi promesa',
    text:['Eres una de las razones por las que me esfuerzo tanto todos los días. Y voy a seguir haciéndolo.', 'Así que déjame hacerte feliz. Déjame cuidarte. Déjame consentirte. Déjame demostrarte todo lo que siento por ti.', 'Prometo esforzarme. Prometo seguir creciendo. Y prometo intentar ser el mejor hombre que pueda para ti. Porque te mereces alguien que te ame de verdad. Y yo planeo hacerlo todos los días.']
  },
  {
    heading:'Cumpleaños',
    text:['Felices 19 años, mi amor. ❤️', 'Espero que este pequeño mundo que construí para ti logre sacarte una sonrisa. Porque si hay alguien que merece ser feliz, eres tú. Y si hay alguien a quien quiero ver feliz por el resto de mi vida, también eres tú.']
  },
  {
    heading:'Mi tesoro',
    text:['Y antes de terminar... Tengo que admitir algo. Tú sabes cuánto amo One Piece. Sabes lo importante que ha sido para mí. Pero después de conocerte entendí algo.', 'Mi tesoro favorito nunca estuvo en Grand Line. Nunca estuvo al final de una aventura. Nunca estuvo escondido en algún lugar del mundo. Mi tesoro favorito siempre fuiste tú.', 'Tú eres mi One Piece. Tú eres mi persona favorita. Tú eres mi hogar. Y estoy profundamente agradecido con Dios por haberte puesto en mi camino.', 'Te adoro. Te amo. Y te seguiré eligiendo una y otra vez.'],
    signature:'— Tu noviecito ❤️'
  }
];

let currentBookPage = 0;

function renderBookPanel(){
  const page = bookPages[currentBookPage];
  return `
    <div class="book-window">
      <div class="book-header">
        <span class="book-icon">📖</span>
        <div>
          <h3 class="page-heading">${page.heading}</h3>
          <p class="page-sub">Un libro que escribo para ti, página a página.</p>
        </div>
      </div>
      <div class="book-page">
        ${page.text.map(paragraph => `<p>${paragraph}</p>`).join('')}
      </div>
      ${page.signature ? `<p class="page-signature">${page.signature}</p>` : ''}
      <div class="book-controls">
        <button class="book-btn" id="book-prev" ${currentBookPage===0 ? 'disabled' : ''}>← Página anterior</button>
        <span class="page-indicator">Página ${currentBookPage + 1} de ${bookPages.length}</span>
        <button class="book-btn" id="book-next" ${currentBookPage===bookPages.length - 1 ? 'disabled' : ''}>Siguiente página →</button>
      </div>
    </div>`;
}

function wireBookPanel(){
  document.getElementById('book-prev').addEventListener('click', ()=>{
    if(currentBookPage > 0){
      currentBookPage -= 1;
      panelBody.innerHTML = renderBookPanel();
      wireBookPanel();
    }
  });
  document.getElementById('book-next').addEventListener('click', ()=>{
    if(currentBookPage < bookPages.length - 1){
      currentBookPage += 1;
      panelBody.innerHTML = renderBookPanel();
      wireBookPanel();
    }
  });
}

const playlist = [
  { src:'assets/music/01-coldplay-a-sky-full-of-stars.mp3', title:'A Sky Full of Stars', artist:'Coldplay', note:'La canción que siempre me recuerda a nuestros mejores momentos juntos.' },
  { src:'assets/music/02-amar-como-tu-steven-universe.mp3', title:'Amar Como Tú', artist:'Steven Universe', note:'El tema que conecta con lo especial que eres.' },
  { src:'assets/music/03-cinderella.mp3', title:'Cinderella', artist:'Cidergirl', note:'Una canción suave para los momentos íntimos y dulces.' },
  { src:'assets/music/04-d4vd-feel-it.mp3', title:'Feel It', artist:'d4vd', note:'Siente el ritmo y los recuerdos que hemos creado juntos.' },
  { src:'assets/music/05-josean-log-chachacha.mp3', title:'Chachachá', artist:'Josean Log', note:'Un tema movido para bailar en tus pensamientos.' },
  { src:'assets/music/06-loco-tu-forma-de-ser.mp3', title:'Loco (Tu Forma de Ser)', artist:'Los Auténticos Decadentes', note:'Para recordar lo especial de tu manera de ser.' },
  { src:'assets/music/07-one-piece-opening-crazy-rainbow.mp3', title:'Crazy Rainbow', artist:'One Piece Opening 8', note:'Un himno para nuestra conexión a través de One Piece.' },
  { src:'assets/music/08-zoe-arrullo-de-estrellas.mp3', title:'Arrullo De Estrellas', artist:'Zoé', note:'Una melodía para las noches en las que solo quiero pensarte.' },
  { src:'assets/music/09-zoe-love.mp3', title:'Love', artist:'Zoé', note:'El final ideal para una playlist dedicada a nosotros.' }
];

const surprises = [
  {
    title:'Cajita musical',
    icon:'🎵',
    intro:'Un cofre con un video especial y música para ti.',
    description:'Aquí comienza la sorpresa más sonora. Presiona reproducir y deja que la música y el video lleven tus pensamientos a nuestro momento favorito.',
    video:'assets/videos/Elvis Presley - Can\'t Help Falling in Love (Lyrics).mp4',
    note:'Esta canción me hace pensar en ti, en cómo cada nota me recuerda a nuestro amor.',
  },
  {
    title:'Poema secreto',
    icon:'✍️',
    intro:'Un poema dedicado a lo que me inspira de ti.',
    description:'Este poema recoge el cariño, los nervios y la magia que siento cuando pienso en ti.',
    lines:[
      'En tus ojos encontré un faro que guía mis mañanas,',
      'y en tu risa descubrí la calma después de la marea.',
      'Cada palabra tuya se vuelve verso, cada abrazo es promesa,',
      'y cada recuerdo junto a ti es un tesoro que no se olvida.',
    ]
  },
  {
    title:'Regalos para ti',
    icon:'🎁',
    intro:'Fotos tuyas con halagos, y unas mías de regalo.',
    description:'Una galería especial donde cada foto tuya va acompañada de un mensaje tierno. Del otro lado te dejo unas fotos mías, sin nada más que decir — son solo un regalo para ti.',
    photosHer:[
      { src:'assets/photos/foto10ella.jpeg', caption:'Simplemente no supero lo linda que se ve pintada y las ganas de darle un beso 😻' },
      { src:'assets/photos/foto11ella.jpeg', caption:'Esta foto fue mi favorita mucho tiempo, te ves increíblemente linda y de hecho, aun tengo el fondo de pantalla con esta foto.' },
      { src:'assets/photos/foto12ella.jpeg', caption:'Qué sexy mi mujer 😻 amo tu cabello 😻😻' },
      { src:'assets/photos/foto13ella.jpeg', caption:'Es una foto antigua, pero incluso antes y ahora, eres y serás la mujer más hermosa, y serás mi esposa también 😻' }
    ],
    photosMine:[
      'assets/photos/foto1yo.jpeg',
      'assets/photos/foto2yo.jpeg',
      'assets/photos/foto3yo.jpeg',
      'assets/photos/foto4yo.jpeg'
    ]
  }
];

const situations = [
  { title:'Cuando te sientas triste', text:'Recuerda que incluso en los días grises, estoy aquí contigo. Mi abrazo es tu refugio y tus lágrimas descansan conmigo.' },
  { title:'Cuando quieras reír', text:'Busca el momento en el que nuestros chistes no tenían sentido y aún así nos hacíamos la noche. Tu risa es uno de mis regalos favoritos.' },
  { title:'Cuando dudes de ti', text:'Eres más fuerte de lo que piensas y más hermosa de lo que imaginas. Yo ya me enamoré de cada parte tuya.' },
  { title:'Cuando extrañes', text:'Piensa en la próxima vez que nos volvamos a ver y en todas las historias que todavía no hemos contado. La distancia solo hace más dulce el reencuentro.' },
  { title:'Cuando logres algo grande', text:'Celebra hasta el último detalle. Estoy orgulloso de ti por cada paso que das y por la pasión con la que lo haces.' },
  { title:'Cuando necesites calma', text:'Respira conmigo en silencio. No siempre hay que decirlo todo. A veces, simplemente estar es suficiente.' },
  { title:'Cuando quieras recordar', text:'Vuelve a este lugar en tu mente: cómo empezó, cómo avanzamos y cómo cada día sigue creciendo en nosotros.' },
  { title:'Cuando te sientas valiente', text:'Atraviesa tus miedos con la certeza de que cuentas conmigo. Estoy aquí para sostenerte y caminar contigo.' },
  { title:'Cuando quieras soñar', text:'Imagina nuestros planes, los viajes, las mañanas juntos y esa vida sencilla que todavía nos espera. Todo es posible con nosotros.' },
  { title:'Cuando quieras una razón', text:'Solo hace falta mirar hacia atrás y ver cuánto hemos construido. Yo elijo quererte hoy, mañana y siempre.' }
];

const finalSurprise = 'Gracias por llegar hasta aquí, por ser esa persona que convirtió mis días en algo más bonito. Esta carta es un abrazo para el futuro que iremos creando juntos.';

let currentSurpriseIndex = 0;
let situationIndex = 0;

const audio = document.createElement('audio');
audio.id = 'panel-audio';
audio.preload = 'metadata';
audio.volume = 0.8;
document.body.appendChild(audio);

let currentTrackIndex = 0;
let isMusicPlaying = false;

function formatTime(seconds){
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60).toString().padStart(2,'0');
  return `${m}:${s}`;
}

function renderMusicPanel(){
  return `
    <div class="music-panel">
      <div class="music-player-card">
        <div class="music-now">
          <div class="music-now-meta">
            <p class="music-label">Reproduciendo</p>
            <h3 id="music-title">${playlist[0].title}</h3>
            <p class="music-artist" id="music-artist">${playlist[0].artist}</p>
            <p class="music-note" id="music-note">${playlist[0].note}</p>
          </div>
          <div class="music-controls">
            <button class="music-btn" id="music-prev">⏮</button>
            <button class="music-btn music-btn--play" id="music-play">▶</button>
            <button class="music-btn" id="music-next">⏭</button>
          </div>
          <div class="music-progress">
            <span id="music-time-current">0:00</span>
            <div class="music-progress-bar"><div class="music-progress-fill" id="music-progress-fill"></div></div>
            <span id="music-time-duration">0:00</span>
          </div>
        </div>
      </div>
      <div class="music-playlist">
        <h3>Playlist</h3>
        <div class="playlist-items">
          ${playlist.map((track, i) => `
            <button class="playlist-item${i===0?' active':''}" data-index="${i}">
              <span class="playlist-track">${track.title}</span>
              <span class="playlist-artist">${track.artist}</span>
            </button>
          `).join('')}
        </div>
      </div>
      ${content.il6.spotify ? `<a class="spotify-link" href="${content.il6.spotify}" target="_blank" rel="noopener">Abrir playlist en Spotify</a>` : ''}
    </div>`;
}

function loadTrack(index){
  currentTrackIndex = (index + playlist.length) % playlist.length;
  const track = playlist[currentTrackIndex];
  audio.src = track.src;
  audio.load();
  document.getElementById('music-title').textContent = track.title;
  document.getElementById('music-artist').textContent = track.artist;
  document.getElementById('music-note').textContent = track.note;
  document.getElementById('music-time-current').textContent = '0:00';
  document.getElementById('music-time-duration').textContent = '0:00';
  setActivePlaylistItem();
}

function playMusic(){
  audio.play().then(()=>{
    isMusicPlaying = true;
    document.getElementById('music-play').textContent = '⏸';
  }).catch(()=>{
    isMusicPlaying = false;
  });
}

function pauseMusic(){
  audio.pause();
  isMusicPlaying = false;
  document.getElementById('music-play').textContent = '▶';
}

function setActivePlaylistItem(){
  document.querySelectorAll('.playlist-item').forEach(item=>{
    item.classList.toggle('active', parseInt(item.dataset.index,10)===currentTrackIndex);
  });
}

function wireMusicPanel(){
  document.getElementById('music-play').addEventListener('click', ()=>{
    if(isMusicPlaying){ pauseMusic(); }
    else{ playMusic(); }
  });
  document.getElementById('music-prev').addEventListener('click', ()=>{
    loadTrack(currentTrackIndex - 1);
    if(isMusicPlaying) playMusic();
  });
  document.getElementById('music-next').addEventListener('click', ()=>{
    loadTrack(currentTrackIndex + 1);
    if(isMusicPlaying) playMusic();
  });
  document.querySelectorAll('.playlist-item').forEach(item=>{
    item.addEventListener('click', ()=>{
      const index = parseInt(item.dataset.index,10);
      loadTrack(index);
      playMusic();
    });
  });
  audio.addEventListener('timeupdate', ()=>{
    if(!audio.duration) return;
    const progress = (audio.currentTime / audio.duration) * 100;
    document.getElementById('music-progress-fill').style.width = `${progress}%`;
    document.getElementById('music-time-current').textContent = formatTime(audio.currentTime);
  });
  audio.addEventListener('loadedmetadata', ()=>{
    document.getElementById('music-time-duration').textContent = formatTime(audio.duration);
  });
  audio.addEventListener('ended', ()=>{
    loadTrack(currentTrackIndex + 1);
    playMusic();
  });
}

// ---------- Memories data (edita esto con tus fotos y textos reales) ----------
// src: ruta del archivo dentro de assets/photos/ (ej. 'assets/photos/foto1.jpg')
// caption: el recuerdo o fecha que quieras mostrar debajo de la foto
const memories = [
  { src:'assets/photos/foto1.jpeg', caption:'Quién diría que detrás de estos dos avatares estaba comenzando una de las historias más bonitas de mi vida.'} ,
  { src:'assets/photos/foto2.jpeg', caption:'Todavía me acuerdo de lo feliz que me hacía cualquier momento contigo, incluso los más simples.'} ,
  { src:'assets/photos/foto3.jpeg', caption:'No sé qué estaba pasando aquí, pero sí sé que probablemente estaba demasiado ocupado admirándote.'} ,
  { src:'assets/photos/foto4.jpeg', caption:'Hay fotos que guardan imágenes. Esta guarda una sensación que todavía no quiero olvidar.'} ,
  { src:'assets/photos/foto5.jpeg', caption:'Puede sonar raro, pero me encanta esta foto porque me recuerda esos pequeños momentos que solo nosotros entendemos.'} ,
  { src:'assets/photos/foto6.jpeg', caption:'Mi lugar favorito nunca fue un mapa, una ciudad o un juego. Siempre fue donde estuvieras tú.'} ,
  { src:'assets/photos/foto7.jpeg', caption:'Nunca imaginé que un columpio virtual terminaría guardando recuerdos tan reales para mí.'} ,
  { src:'assets/photos/foto8.jpeg', caption:'A veces pienso que mis recuerdos favoritos no fueron las grandes aventuras, sino estos ratitos tranquilos contigo.'} ,
  { src:'assets/photos/foto9.jpeg', caption:'No era una cita elegante ni un lugar espectacular, pero estabas tú... y eso siempre fue suficiente.'}
];

// ---------- 101 Razones (rellenadas desde la lista proporcionada) ----------
const reasons = [
  'Porque tu sonrisa siempre consigue alegrarme el día.',
  'Porque adoro tus ojos tan bonitos.',
  'Porque me encanta tu cabello, sin importar cuántas veces cambie de color.',
  'Porque me encanta imaginarte entre mis brazos.',
  'Porque cada vez que miro tus labios deseo que la distancia no existiera para poder robarte un beso.',
  'Porque me encanta lo linda que eres.',
  'Porque me encanta tu risa.',
  'Porque adoro tu voz.',
  'Porque amo cuando me mandas audios contándome tu día.',
  'Porque me encanta escucharte hablar de las cosas que te gustan.',
  'Porque me encanta que te guste leer.',
  'Porque me encanta cómo te emocionas cuando algo te apasiona.',
  'Porque me encanta la pasión que le pones a las cosas que te gustan.',
  'Porque me encanta verte feliz.',
  'Porque me encanta cuando te emocionas por algo.',
  'Porque me encanta cuando te ríes de verdad.',
  'Porque me gusta verte sonreír.',
  'Porque incluso en tus peores días sigues siendo hermosa para mí.',
  'Porque me encanta cuando te arreglas y te pones guapa.',
  'Porque amo cuando no te arreglas y aun así me pareces preciosa.',

  'Porque me enamora que desde el principio te haya gustado exactamente como soy.',
  'Porque contigo puedo ser yo mismo.',
  'Porque nunca siento que tengo que fingir contigo.',
  'Porque me haces sentir aceptado.',
  'Porque me haces sentir querido.',
  'Porque siempre te has mantenido a mi lado.',
  'Porque me apoyas cuando lo necesito.',
  'Porque me consuelas cuando estoy mal.',
  'Porque siempre encuentras la forma de hacerme sentir mejor.',
  'Porque eres paciente conmigo.',
  'Porque me esperas.',
  'Porque sigues creyendo en nosotros.',
  'Porque me encanta que seas tan buena conmigo.',
  'Porque me gusta lo noble que eres con las personas que quieres.',
  'Porque me encanta que seas cariñosa conmigo.',
  'Porque adoro tu personalidad.',
  'Porque eres una mujer fuerte.',
  'Porque admiro tu fortaleza.',
  'Porque admiro tu carácter.',
  'Porque eres mucho más increíble de lo que tú misma crees.',

  'Porque adoro jugar videojuegos contigo.',
  'Porque me encanta crear recuerdos contigo.',
  'Porque me encanta pasar horas hablando contigo.',
  'Porque me encanta que compartamos tantas cosas.',
  'Porque me gusta que te gusten muchas de las mismas cosas que a mí.',
  'Porque me encanta cuando vemos cosas juntos.',
  'Porque me encanta cuando compartimos nuestros gustos.',
  'Porque incluso los momentos más simples contigo terminan siendo especiales.',
  'Porque me encanta cuando nuestras conversaciones duran horas.',
  'Porque me haces olvidar el tiempo.',
  'Porque contigo hasta Roblox creó recuerdos reales.',
  'Porque me has regalado algunos de mis recuerdos favoritos.',
  'Porque me gusta recordar todo lo que hemos vivido juntos.',
  'Porque me gusta imaginar todo lo que nos falta por vivir.',
  'Porque haces que la distancia sea más fácil.',
  'Porque haces que los días malos sean más llevaderos.',
  'Porque me haces sonreír sin darte cuenta.',
  'Porque incluso un mensaje tuyo puede mejorar mi día.',
  'Porque siempre termino extrañándote.',
  'Porque me encanta tenerte en mi vida.',

  'Porque me encanta decirte cosas románticas y verte feliz.',
  'Porque adoro cuando me mandas videos románticos de TikTok.',
  'Porque me encanta lo romántica que eres.',
  'Porque me encanta gustarte.',
  'Porque me gusta saber que piensas en mí.',
  'Porque me encanta cuando me albureas.',
  'Porque me gusta alburearte y ver lo adorable que te ves.',
  'Porque me encanta molestarte un poquito.',
  'Porque me encanta cuando te pones nerviosa.',
  'Porque me encanta compartir momentos íntimos contigo, incluso a través de una pantalla.',
  'Porque confío en ti.',
  'Porque me haces sentir especial.',
  'Porque haces que me emocione el futuro.',
  'Porque me gusta imaginar viajes contigo.',
  'Porque me gusta imaginar despertar contigo.',
  'Porque me gusta imaginar una vida contigo.',
  'Porque me gusta imaginar una casa contigo.',
  'Porque me gusta imaginar formar una familia contigo.',
  'Porque me gusta imaginar envejecer contigo.',
  'Porque haces que todos esos sueños parezcan posibles.',

  'Porque me encanta tu cuerpo y lo hermosa que eres, incluso cuando tú no te das cuenta.',
  'Porque me sigues pareciendo preciosa.',
  'Porque tus tatuajes son parte de lo que te hace única y hermosa.',
  'Porque me encanta que seas auténtica.',
  'Porque nunca intentas ser alguien que no eres.',
  'Porque me gusta que solo tengas ojos para mí.',
  'Porque me encanta que me elijas todos los días.',
  'Porque me encanta cuando me prometes cosas solo para verme feliz.',
  'Porque adoro tu nombre.',
  'Porque decir "Jocelyn" siempre me parece algo bonito.',
  'Porque adoro que mi abuelita quiera conocerte.',
  'Porque haces que mi mundo sea más bonito.',
  'Porque eres una de mis casualidades favoritas.',
  'Porque eres una de mis personas favoritas.',
  'Porque cuando tú no puedes ver lo increíble que eres, yo sí lo veo.',

  'Porque mereces mucho más amor del que a veces crees merecer.',
  'Porque me encanta cuidarte.',
  'Porque me encanta verte esforzarte por las cosas que quieres.',
  'Porque después de todo este tiempo sigo eligiéndote.',
  'Porque sigo enamorándome de ti una y otra vez.',
  'Porque de todas las personas que existen en este mundo, sigues siendo mi favorita. Y si algún día estas 101 razones dejan de ser suficientes, prometo encontrar otras 101 más. ❤️'
];

function renderMemoryGrid(){
  let html = '<div class="memory-grid">';
  memories.forEach((m, i) => {
    html += `
      <div class="polaroid" data-index="${i}">
        <div class="photo-box">
          <img src="${m.src}" alt="${m.caption}"
               onerror="this.style.display='none'; this.parentElement.classList.add('missing');">
          <span class="placeholder-icon">📷</span>
          <span class="placeholder-label">Foto ${i+1}</span>
        </div>
        <p class="cap">${m.caption}</p>
      </div>`;
  });
  html += `
      <div class="polaroid add-tile" style="cursor:default;">
        <span class="plus">＋</span>
        <span>Galería de recuerdos</span>
      </div>
    </div>`;
  return html;
}
// hide placeholder icon once real image loads
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.photo-box img').forEach(img => {
    img.addEventListener('load', () => {
      if(img.naturalWidth > 0){
        img.parentElement.querySelector('.placeholder-icon').style.display='none';
        img.parentElement.querySelector('.placeholder-label').style.display='none';
      }
    });
  });
});

// ---------- 101 Razones: presentation + one-by-one flow ----------
let reasonIndex = 0;

function renderReasonsIntro(c){
  return `
    <div class="reasons-intro">
      <div class="deco">✿ ❤ ✿</div>
      <p>${c.intro}</p>
      <button class="reasons-start-btn" id="reasons-start">Comenzar ✨</button>
    </div>`;
}
function renderReasonFlow(){
  return `
    <div class="reason-flow">
      <div class="reason-counter">Razón <span id="reason-num">${reasonIndex+1}</span> de ${reasons.length}</div>
      <div class="reason-card" id="reason-card">
        <span class="heart-deco">💗</span>
        <p id="reason-text">${reasons[reasonIndex]}</p>
      </div>
      <div class="reason-nav">
        <button class="reason-btn reason-btn--nav" id="reason-prev">← Anterior</button>
        <button class="reason-btn reason-btn--random" id="reason-random">🎲 Aleatoria</button>
        <button class="reason-btn reason-btn--nav" id="reason-next">Siguiente →</button>
      </div>
      <button class="reason-back" id="reason-back">← Volver a la presentación</button>
    </div>`;
}
function swapReason(newIndex){
  const card = document.getElementById('reason-card');
  const numEl = document.getElementById('reason-num');
  if(!card) return;
  card.classList.add('swap');
  setTimeout(()=>{
    reasonIndex = newIndex;
    document.getElementById('reason-text').textContent = reasons[reasonIndex];
    numEl.textContent = reasonIndex+1;
    card.classList.remove('swap');
  }, 180);
}
function wireReasonFlow(){
  document.getElementById('reason-prev').addEventListener('click', ()=>{
    swapReason((reasonIndex - 1 + reasons.length) % reasons.length);
  });
  document.getElementById('reason-next').addEventListener('click', ()=>{
    swapReason((reasonIndex + 1) % reasons.length);
  });
  document.getElementById('reason-random').addEventListener('click', ()=>{
    let r;
    do { r = Math.floor(Math.random()*reasons.length); } while(r === reasonIndex && reasons.length > 1);
    swapReason(r);
  });
  document.getElementById('reason-back').addEventListener('click', ()=>{
    panelBody.innerHTML = renderReasonsIntro(content.il4);
    document.getElementById('reasons-start').addEventListener('click', ()=>{
      reasonIndex = 0;
      panelBody.innerHTML = renderReasonFlow();
      wireReasonFlow();
    });
  });
}
const overlay=document.getElementById('panel-overlay');
const panelTitle=document.getElementById('panel-title');
const panelSub=document.getElementById('panel-sub');
const panelBody=document.getElementById('panel-body');

function renderSurprisesPanel(){
  return `
    <div class="surprise-panel">
      <div class="surprise-grid">
        ${surprises.map((item, index)=>`
          <button class="surprise-card${index===0?' active':''}" data-index="${index}">
            <div class="surprise-icon">${item.icon}</div>
            <h3>${item.title}</h3>
            <p>${item.intro}</p>
          </button>`).join('')}
      </div>
      <div class="surprise-reveal" id="surprise-reveal">
        ${renderSurpriseReveal(0)}
      </div>
      <div class="surprise-messages">
        <div class="surprise-messages-top">
          <h3>Mensajes para cuando...</h3>
        </div>
        ${renderSituationsFlow()}
      </div>
      <div class="final-letter">
        <div class="final-frame">
          <span class="final-heart final-heart--tl">💕</span>
          <span class="final-heart final-heart--tr">💕</span>
          <span class="final-heart final-heart--bl">💕</span>
          <span class="final-heart final-heart--br">💕</span>
          <p>${finalSurprise}</p>
          <p class="final-signature">— Con todo mi corazón, Victor</p>
        </div>
      </div>
    </div>`;
}

function renderSurpriseReveal(index){
  const item = surprises[index];
  if(index === 0){
    return `
      <div class="surprise-detail">
        <p>${item.description}</p>
        <div class="video-wrap">
          <video controls playsinline preload="metadata" src="${item.video}"></video>
          <p class="video-note">${item.note}</p>
        </div>
      </div>`;
  }
  if(index === 1){
    return `
      <div class="surprise-detail">
        <p>${item.description}</p>
        <div class="poem">
          ${item.lines.map(line => `<p>${line}</p>`).join('')}
        </div>
      </div>`;
  }
  return `
    <div class="surprise-detail">
      <p>${item.description}</p>
      <div class="gift-grid">
        <div class="gift-side">
          <p class="gift-side-label">Para ti 💗</p>
          <div class="photo-column">
            ${item.photosHer.map(photo => `
              <div class="photo-card">
                <img src="${photo.src}" alt="Foto" onerror="this.closest('.photo-card').classList.add('missing')">
                <p>${photo.caption}</p>
              </div>
            `).join('')}
          </div>
        </div>
        <div class="gift-side">
          <p class="gift-side-label">De regalo 🎁</p>
          <div class="photo-column photo-column--plain">
            ${item.photosMine.map(src => `
              <div class="photo-card photo-card--plain">
                <img src="${src}" alt="Foto" onerror="this.closest('.photo-card').classList.add('missing')">
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </div>`;
}

function renderSituationsFlow(){
  return `
    <div class="situation-flow">
      <div class="situation-counter">Situación <span id="situation-num">${situationIndex+1}</span> de ${situations.length}</div>
      <div class="situation-card" id="situation-card">
        <span class="situation-deco">💭</span>
        <h4 id="situation-title">${situations[situationIndex].title}</h4>
        <p id="situation-text">${situations[situationIndex].text}</p>
      </div>
      <div class="situation-nav">
        <button class="reason-btn reason-btn--nav" id="situation-prev">← Anterior</button>
        <button class="reason-btn reason-btn--random" id="situation-random">🎲 Aleatoria</button>
        <button class="reason-btn reason-btn--nav" id="situation-next">Siguiente →</button>
      </div>
    </div>`;
}
function swapSituation(newIndex){
  const card = document.getElementById('situation-card');
  const numEl = document.getElementById('situation-num');
  if(!card) return;
  card.classList.add('swap');
  setTimeout(()=>{
    situationIndex = newIndex;
    document.getElementById('situation-title').textContent = situations[situationIndex].title;
    document.getElementById('situation-text').textContent = situations[situationIndex].text;
    numEl.textContent = situationIndex+1;
    card.classList.remove('swap');
  }, 180);
}
function wireSituationsFlow(){
  document.getElementById('situation-prev').addEventListener('click', ()=>{
    swapSituation((situationIndex - 1 + situations.length) % situations.length);
  });
  document.getElementById('situation-next').addEventListener('click', ()=>{
    swapSituation((situationIndex + 1) % situations.length);
  });
  document.getElementById('situation-random').addEventListener('click', ()=>{
    let r;
    do { r = Math.floor(Math.random()*situations.length); } while(r === situationIndex && situations.length > 1);
    swapSituation(r);
  });
}

function setSurprise(index){
  currentSurpriseIndex = index;
  document.getElementById('surprise-reveal').innerHTML = renderSurpriseReveal(index);
  document.querySelectorAll('.surprise-card').forEach(card => {
    card.classList.toggle('active', parseInt(card.dataset.index,10) === index);
  });
}

function wireSurprisePanel(){
  document.querySelectorAll('.surprise-card').forEach(card => {
    card.addEventListener('click', ()=> setSurprise(parseInt(card.dataset.index,10)));
  });
  wireSituationsFlow();
}

function openPanel(key){
  const c=content[key];
  panelTitle.textContent=c.title;
  panelSub.textContent=c.sub;
  if(key === 'hero'){
    panelBody.innerHTML = `<p class="panel-intro">${c.intro}</p>` + renderMemoryGrid();
    panelBody.querySelectorAll('.polaroid[data-index]').forEach(el=>{
      el.addEventListener('click', ()=> openLightbox(parseInt(el.dataset.index,10)));
    });
    panelBody.querySelectorAll('.photo-box img').forEach(img=>{
      if(img.complete && img.naturalWidth>0){
        img.parentElement.querySelector('.placeholder-icon').style.display='none';
        img.parentElement.querySelector('.placeholder-label').style.display='none';
      }
    });
  } else if(key === 'il2'){
    panelBody.innerHTML = `<p>${c.body}</p>
      <div class="letter-card">
        <span class="seal">💌</span>
        <p>Hay una carta esperándote aquí — cómo te conocí y cómo me sentí ese día.</p>
        <a class="letter-btn" href="${c.pdf}" target="_blank" rel="noopener">✉️ Abrir la carta</a>
      </div>`;
  } else if(key === 'il4'){
    reasonIndex = 0;
    panelBody.innerHTML = renderReasonsIntro(c);
    document.getElementById('reasons-start').addEventListener('click', ()=>{
      panelBody.innerHTML = renderReasonFlow();
      wireReasonFlow();
    });
  } else if(key === 'il3'){
    currentBookPage = 0;
    panelBody.innerHTML = renderBookPanel();
    wireBookPanel();
  } else if(key === 'il6'){
    panelBody.innerHTML = renderMusicPanel();
    loadTrack(currentTrackIndex);
    wireMusicPanel();
  } else if(key === 'il5'){
    panelBody.innerHTML = renderSurprisesPanel();
    wireSurprisePanel();
  } else {
    panelBody.innerHTML = `<p>${c.body}</p>`;
  }
  overlay.classList.add('show');
}

document.getElementById('il-hero').addEventListener('click',()=>openPanel('hero'));
document.getElementById('il2').addEventListener('click',()=>openPanel('il2'));
document.getElementById('il3').addEventListener('click',()=>openPanel('il3'));
document.getElementById('il4').addEventListener('click',()=>openPanel('il4'));
document.getElementById('il5').addEventListener('click',()=>openPanel('il5'));
document.getElementById('il6').addEventListener('click',()=>openPanel('il6'));

document.getElementById('panel-close').addEventListener('click',()=>overlay.classList.remove('show'));
overlay.addEventListener('click',(e)=>{ if(e.target===overlay) overlay.classList.remove('show'); });

// ---------- Lightbox (memory viewer) ----------
const lightbox = document.getElementById('lightbox');
const lbImg = document.getElementById('lightbox-img');
const lbCap = document.getElementById('lightbox-cap');
let lbIndex = 0;

function showLightboxPhoto(i){
  lbIndex = (i + memories.length) % memories.length;
  const m = memories[lbIndex];
  lbImg.src = m.src;
  lbImg.alt = m.caption;
  lbCap.textContent = m.caption;
}
function openLightbox(i){
  showLightboxPhoto(i);
  lightbox.classList.add('show');
}
function closeLightbox(){ lightbox.classList.remove('show'); }

document.getElementById('lightbox-close').addEventListener('click', closeLightbox);
document.getElementById('lightbox-prev').addEventListener('click', ()=> showLightboxPhoto(lbIndex-1));
document.getElementById('lightbox-next').addEventListener('click', ()=> showLightboxPhoto(lbIndex+1));
lightbox.addEventListener('click', (e)=>{ if(e.target===lightbox) closeLightbox(); });
document.addEventListener('keydown', (e)=>{
  if(!lightbox.classList.contains('show')) return;
  if(e.key==='Escape') closeLightbox();
  if(e.key==='ArrowLeft') showLightboxPhoto(lbIndex-1);
  if(e.key==='ArrowRight') showLightboxPhoto(lbIndex+1);
});

// ---------- Map music player card (real player) ----------
const playerTitle = document.getElementById('player-track');
const playerArtist = document.getElementById('player-artist');
const playerProgressFill = document.getElementById('player-fill');
const playerTimeCurrent = document.getElementById('player-time-current');
const playerTimeDuration = document.getElementById('player-time-duration');
const playerPrev = document.getElementById('player-prev');
const playerNext = document.getElementById('player-next');
const playerPlay = document.getElementById('player-play');
const eq = document.getElementById('player-eq');
let playing = false;

eq.style.opacity = '.3';
eq.querySelectorAll('span').forEach(s => s.style.animationPlayState = 'paused');

function updatePlayerCard(){
  const track = playlist[currentTrackIndex];
  playerTitle.textContent = track.title;
  playerArtist.textContent = track.artist;
  playerPlay.textContent = playing ? '⏸' : '▶';
  eq.style.opacity = playing ? '1' : '.3';
  eq.querySelectorAll('span').forEach(s => s.style.animationPlayState = playing ? 'running' : 'paused');

  const musicPlay = document.getElementById('music-play');
  if(musicPlay){
    musicPlay.textContent = playing ? '⏸' : '▶';
  }
}

playerPrev.addEventListener('click', () => {
  loadTrack(currentTrackIndex - 1);
  if(playing) playMusic();
});
playerNext.addEventListener('click', () => {
  loadTrack(currentTrackIndex + 1);
  if(playing) playMusic();
});
playerPlay.addEventListener('click', () => {
  if(playing) pauseMusic();
  else playMusic();
});

audio.addEventListener('timeupdate', () => {
  if(!audio.duration) return;
  const progress = (audio.currentTime / audio.duration) * 100;
  playerProgressFill.style.width = `${progress}%`;
  playerTimeCurrent.textContent = formatTime(audio.currentTime);
  playerTimeDuration.textContent = formatTime(audio.duration);

  const musicProgressFill = document.getElementById('music-progress-fill');
  const musicTimeCurrent = document.getElementById('music-time-current');
  const musicTimeDuration = document.getElementById('music-time-duration');
  if(musicProgressFill){
    musicProgressFill.style.width = `${progress}%`;
  }
  if(musicTimeCurrent){
    musicTimeCurrent.textContent = formatTime(audio.currentTime);
  }
  if(musicTimeDuration){
    musicTimeDuration.textContent = formatTime(audio.duration);
  }
});
audio.addEventListener('loadedmetadata', () => {
  playerTimeDuration.textContent = formatTime(audio.duration);
  const musicTimeDuration = document.getElementById('music-time-duration');
  if(musicTimeDuration){
    musicTimeDuration.textContent = formatTime(audio.duration);
  }
});
audio.addEventListener('ended', () => {
  loadTrack(currentTrackIndex + 1);
  playMusic();
});

function playMusic(){
  audio.play().then(()=>{
    playing = true;
    updatePlayerCard();
  }).catch(()=>{
    playing = false;
    updatePlayerCard();
  });
}

function pauseMusic(){
  audio.pause();
  playing = false;
  updatePlayerCard();
}

function loadTrack(index){
  currentTrackIndex = (index + playlist.length) % playlist.length;
  const track = playlist[currentTrackIndex];
  audio.src = track.src;
  audio.load();
  playerTitle.textContent = track.title;
  playerArtist.textContent = track.artist;
  playerTimeCurrent.textContent = '0:00';
  playerTimeDuration.textContent = '0:00';
  setActivePlaylistItem();

  const musicTitle = document.getElementById('music-title');
  const musicArtist = document.getElementById('music-artist');
  const musicNote = document.getElementById('music-note');
  if(musicTitle){
    musicTitle.textContent = track.title;
  }
  if(musicArtist){
    musicArtist.textContent = track.artist;
  }
  if(musicNote){
    musicNote.textContent = track.note;
  }
  updatePlayerCard();
}

loadTrack(currentTrackIndex);
