/* ==============================================================
   SCRIPT.JS - HAPPY 21ST BIRTHDAY CARISSA PUTRI MAHARANI
   Interactive logic for Envelope, 3D Cover Flow, Cake & Gallery
   ============================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // --- STATE ---
  let currentTrackIndex = 0;
  let isPlaying = false;
  let currentLightboxIndex = 0;
  let candlesBlown = false;

  // --- DOM ELEMENTS ---
  const envelopeScreen = document.getElementById('envelope-screen');
  const envelopeBox = document.getElementById('envelope-box');
  const envelopeFlap = document.getElementById('envelope-flap');
  const waxSeal = document.getElementById('wax-seal');
  const btnOpen = document.getElementById('btn-open');
  const btnDodge = document.getElementById('btn-dodge');
  const mainContent = document.getElementById('main-content');
  
  // Audio Elements
  const globalAudio = document.getElementById('global-audio');
  const floatingMusicBar = document.getElementById('floating-music-bar');
  const miniCover = document.getElementById('mini-cover');
  const miniTitle = document.getElementById('mini-title');
  const miniArtist = document.getElementById('mini-artist');
  const soundwave = document.getElementById('soundwave');
  const btnPlayMini = document.getElementById('btn-play-mini');
  const iconPlayMini = document.getElementById('icon-play-mini');
  const iconPauseMini = document.getElementById('icon-pause-mini');
  const btnPrevMini = document.getElementById('btn-prev-mini');
  const btnNextMini = document.getElementById('btn-next-mini');
  const btnSpotifyDirect = document.getElementById('btn-spotify-direct');

  // Cake Elements
  const candle1 = document.getElementById('candle-1');
  const candle2 = document.getElementById('candle-2');
  const btnBlowCandles = document.getElementById('btn-blow-candles');
  const blowBtnText = document.getElementById('blow-btn-text');
  const wishCard = document.getElementById('wish-card');

  // Cover Flow Elements
  const coverflowContainer = document.getElementById('coverflow-container');
  const cfPrevBtn = document.getElementById('cf-prev-btn');
  const cfNextBtn = document.getElementById('cf-next-btn');
  const activeTrackTitle = document.getElementById('active-track-title');
  const activeTrackArtist = document.getElementById('active-track-artist');
  const activeTrackAlbum = document.getElementById('active-track-album');
  const activeTrackQuote = document.getElementById('active-track-quote');
  const activeTrackIndex = document.getElementById('active-track-index');
  const btnPlayActive = document.getElementById('btn-play-active');
  const playActiveIcon = document.getElementById('play-active-icon');
  const playActiveText = document.getElementById('play-active-text');
  const btnSpotifyActive = document.getElementById('btn-spotify-active');
  const carouselDotsContainer = document.getElementById('carousel-dots');

  // Lightbox & Modal Elements
  const lightboxModal = document.getElementById('lightbox-modal');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const lightboxCounter = document.getElementById('lightbox-counter');
  const allPhotosModal = document.getElementById('all-photos-modal');
  const allPhotosGrid = document.getElementById('all-photos-grid');

  // Gift Box
  const giftBox = document.getElementById('gift-box');
  const goldenVoucher = document.getElementById('golden-voucher');


  // ==============================================
  // 1. FLOATING HEART PARTICLES
  // ==============================================
  const particleContainer = document.getElementById('particle-canvas-container');
  const heartSymbols = ['💖', '🌸', '✨', '🤍', '🎀', '🌹'];

  function createFloatingHeart() {
    if (!particleContainer) return;
    const heart = document.createElement('div');
    heart.className = 'floating-heart';
    heart.textContent = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
    heart.style.left = Math.random() * 95 + 'vw';
    heart.style.animationDuration = (Math.random() * 4 + 6) + 's';
    heart.style.fontSize = (Math.random() * 12 + 14) + 'px';
    particleContainer.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 9000);
  }
  setInterval(createFloatingHeart, 1200);


  // ==============================================
  // 2. INTERACTIVE ENVELOPE & DODGING BUTTON
  // ==============================================
  function triggerConfetti() {
    if (typeof confetti === 'function') {
      // Big celebratory blast
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#a82236', '#d4af37', '#f4dcd6', '#ffffff']
      });
      setTimeout(() => {
        confetti({
          particleCount: 50,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: ['#6c1220', '#ffd200']
        });
        confetti({
          particleCount: 50,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors: ['#6c1220', '#ffd200']
        });
      }, 250);
    }
  }

  function openEnvelope() {
    envelopeBox.classList.add('flap-open');
    triggerConfetti();

    // Start playing audio
    playTrack(0);

    setTimeout(() => {
      envelopeScreen.classList.add('opened');
      mainContent.classList.remove('hidden');

      // Scroll to hero section smoothly
      window.scrollTo({ top: 0, behavior: 'smooth' });

      // Secondary confetti
      setTimeout(triggerConfetti, 600);
    }, 1100);
  }

  if (waxSeal) waxSeal.addEventListener('click', openEnvelope);
  if (btnOpen) btnOpen.addEventListener('click', openEnvelope);

  // Dodging "Gak Mau" button
  const dodgePhrases = [
    'Eits gak bisa! 😜',
    'Harus mau dong! ❤️',
    'Gak boleh nolak! 🥰',
    'Coba lagi deh 😝',
    'Nyerah aja, klik yang kiri 💖'
  ];
  let dodgeCount = 0;

  function dodgeButton(e) {
    if (e) e.preventDefault();
    dodgeCount++;
    const maxX = 120;
    const maxY = 60;
    const randX = (Math.random() - 0.5) * maxX * 2;
    const randY = (Math.random() - 0.5) * maxY * 2;

    btnDodge.style.transform = `translate(${randX}px, ${randY}px)`;
    const phrase = dodgePhrases[dodgeCount % dodgePhrases.length];
    btnDodge.querySelector('span').textContent = phrase;
  }

  if (btnDodge) {
    btnDodge.addEventListener('mouseenter', dodgeButton);
    btnDodge.addEventListener('touchstart', dodgeButton);
    btnDodge.addEventListener('click', dodgeButton);
  }


  // ==============================================
  // 3. AUDIO MANAGEMENT & FLOATING BAR
  // ==============================================
  function updatePlayerUI() {
    const track = TRACKS[currentTrackIndex];
    if (!track) return;

    // Mini bar info
    miniTitle.textContent = track.name;
    miniArtist.textContent = track.artist;
    miniCover.src = track.cover;
    btnSpotifyDirect.href = track.spotifyUrl || SPOTIFY_PLAYLIST_URL;

    // Cover flow active card info
    activeTrackTitle.textContent = track.name;
    activeTrackArtist.textContent = track.artist;
    activeTrackAlbum.textContent = `Album: ${track.album}`;
    activeTrackQuote.textContent = `"${track.quote}"`;
    activeTrackIndex.textContent = currentTrackIndex + 1;
    btnSpotifyActive.href = track.spotifyUrl || SPOTIFY_PLAYLIST_URL;

    if (isPlaying) {
      iconPlayMini.classList.add('hidden');
      iconPauseMini.classList.remove('hidden');
      playActiveIcon.textContent = '⏸';
      playActiveText.textContent = 'Jeda Lagu';
      miniCover.classList.remove('paused');
      soundwave.classList.add('active');
    } else {
      iconPlayMini.classList.remove('hidden');
      iconPauseMini.classList.add('hidden');
      playActiveIcon.textContent = '▶';
      playActiveText.textContent = 'Putar Preview Lagu Ini';
      miniCover.classList.add('paused');
      soundwave.classList.remove('active');
    }

    // Update dots
    updateDots();
    // Update cover flow 3D slides
    updateCoverFlow3D();
  }

  function playTrack(index) {
    if (index >= 0 && index < TRACKS.length) {
      currentTrackIndex = index;
    }
    const track = TRACKS[currentTrackIndex];
    if (!track) return;

    const audioSrc = track.previewUrl || 'assets/audio/track_1.m4a';
    
    // Smooth source swap
    globalAudio.pause();
    globalAudio.src = audioSrc;
    globalAudio.load();

    const playPromise = globalAudio.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          isPlaying = true;
          updatePlayerUI();
        })
        .catch(err => {
          console.warn('Audio playback error, attempting fallback:', err);
          if (!audioSrc.includes('track_1.m4a')) {
            globalAudio.src = 'assets/audio/track_1.m4a';
            globalAudio.load();
            globalAudio.play().catch(e => console.error(e));
          }
          isPlaying = true;
          updatePlayerUI();
        });
    }
  }

  function togglePlay() {
    if (isPlaying) {
      globalAudio.pause();
      isPlaying = false;
      updatePlayerUI();
    } else {
      playTrack(currentTrackIndex);
    }
  }

  function nextTrack() {
    currentTrackIndex = (currentTrackIndex + 1) % TRACKS.length;
    playTrack(currentTrackIndex);
  }

  function prevTrack() {
    currentTrackIndex = (currentTrackIndex - 1 + TRACKS.length) % TRACKS.length;
    playTrack(currentTrackIndex);
  }

  // Audio Event Listeners with Fallback Protection
  globalAudio.addEventListener('ended', nextTrack);
  globalAudio.addEventListener('play', () => { isPlaying = true; updatePlayerUI(); });
  globalAudio.addEventListener('pause', () => { isPlaying = false; updatePlayerUI(); });
  globalAudio.addEventListener('error', (e) => {
    console.warn('Audio element error detected:', e);
    if (!globalAudio.src.includes('track_1.m4a')) {
      globalAudio.src = 'assets/audio/track_1.m4a';
      globalAudio.load();
      if (isPlaying) {
        globalAudio.play().catch(err => console.error(err));
      }
    }
  });

  btnPlayMini.addEventListener('click', togglePlay);
  btnNextMini.addEventListener('click', nextTrack);
  btnPrevMini.addEventListener('click', prevTrack);
  btnPlayActive.addEventListener('click', togglePlay);


  // ==============================================
  // 4. INTERACTIVE BIRTHDAY CAKE CANDLES
  // ==============================================
  function blowCandles() {
    if (candlesBlown) return;
    candlesBlown = true;

    candle1.classList.add('blown-out');
    candle2.classList.add('blown-out');

    if (typeof confetti === 'function') {
      confetti({
        particleCount: 100,
        spread: 90,
        origin: { y: 0.5 },
        colors: ['#ffd200', '#ff6600', '#ffffff', '#a82236']
      });
    }

    blowBtnText.textContent = '✨ Lilin Telah Ditiup! Make a Wish! ✨';
    btnBlowCandles.style.pointerEvents = 'none';

    setTimeout(() => {
      wishCard.classList.remove('hidden');
      wishCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 800);
  }

  if (candle1) candle1.addEventListener('click', blowCandles);
  if (candle2) candle2.addEventListener('click', blowCandles);
  if (btnBlowCandles) btnBlowCandles.addEventListener('click', blowCandles);


  // ==============================================
  // 5. 3D COVER FLOW APPLE MUSIC IMPLEMENTATION
  // ==============================================
  function initCoverFlow() {
    coverflowContainer.innerHTML = '';
    carouselDotsContainer.innerHTML = '';

    TRACKS.forEach((track, idx) => {
      // 3D slide
      const slide = document.createElement('div');
      slide.className = 'cf-slide';
      slide.dataset.index = idx;
      slide.innerHTML = `<img src="${track.cover}" alt="${track.name}" loading="lazy">`;

      slide.addEventListener('click', () => {
        if (currentTrackIndex === idx) {
          togglePlay();
        } else {
          currentTrackIndex = idx;
          playTrack(currentTrackIndex);
        }
      });

      coverflowContainer.appendChild(slide);

      // Dot
      const dot = document.createElement('div');
      dot.className = 'c-dot' + (idx === 0 ? ' active' : '');
      dot.dataset.index = idx;
      dot.addEventListener('click', () => {
        currentTrackIndex = idx;
        playTrack(currentTrackIndex);
      });
      carouselDotsContainer.appendChild(dot);
    });

    updateCoverFlow3D();
  }

  function updateCoverFlow3D() {
    const slides = coverflowContainer.querySelectorAll('.cf-slide');
    const total = slides.length;

    slides.forEach((slide, idx) => {
      slide.classList.remove('center', 'left-1', 'right-1', 'left-2', 'right-2', 'hidden-far');

      // Calculate relative position with circular wrapping
      let offset = idx - currentTrackIndex;
      if (offset > total / 2) offset -= total;
      if (offset < -total / 2) offset += total;

      if (offset === 0) {
        slide.classList.add('center');
      } else if (offset === -1) {
        slide.classList.add('left-1');
      } else if (offset === 1) {
        slide.classList.add('right-1');
      } else if (offset === -2) {
        slide.classList.add('left-2');
      } else if (offset === 2) {
        slide.classList.add('right-2');
      } else {
        slide.classList.add('hidden-far');
      }
    });
  }

  function updateDots() {
    const dots = carouselDotsContainer.querySelectorAll('.c-dot');
    dots.forEach((dot, idx) => {
      dot.classList.toggle('active', idx === currentTrackIndex);
    });
  }

  if (cfPrevBtn) cfPrevBtn.addEventListener('click', prevTrack);
  if (cfNextBtn) cfNextBtn.addEventListener('click', nextTrack);

  // Swipe support for 3D Cover Flow
  let touchStartX = 0;
  let touchEndX = 0;

  coverflowContainer.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  coverflowContainer.addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].screenX;
    handleCoverFlowSwipe();
  }, { passive: true });

  function handleCoverFlowSwipe() {
    const threshold = 40;
    if (touchEndX < touchStartX - threshold) {
      nextTrack();
    } else if (touchEndX > touchStartX + threshold) {
      prevTrack();
    }
  }

  // Keyboard navigation for cover flow
  document.addEventListener('keydown', e => {
    if (e.key === 'ArrowRight') nextTrack();
    if (e.key === 'ArrowLeft') prevTrack();
    if (e.key === 'Escape') {
      closeLightbox();
      closeAllPhotosGrid();
    }
  });


  // ==============================================
  // 6. PHOTO GALLERY & LIGHTBOX
  // ==============================================
  window.openLightbox = function(index) {
    if (index < 0 || index >= PHOTO_COLLECTION.length) return;
    currentLightboxIndex = index;
    const photo = PHOTO_COLLECTION[currentLightboxIndex];

    lightboxImg.src = photo.src;
    lightboxCaption.textContent = photo.caption;
    lightboxCounter.textContent = `${currentLightboxIndex + 1} / ${PHOTO_COLLECTION.length}`;

    lightboxModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  };

  window.closeLightbox = function() {
    lightboxModal.classList.add('hidden');
    document.body.style.overflow = '';
  };

  window.closeLightboxOnBackdrop = function(e) {
    if (e.target === lightboxModal) {
      closeLightbox();
    }
  };

  window.navigateLightbox = function(direction) {
    let newIndex = currentLightboxIndex + direction;
    if (newIndex < 0) newIndex = PHOTO_COLLECTION.length - 1;
    if (newIndex >= PHOTO_COLLECTION.length) newIndex = 0;
    openLightbox(newIndex);
  };

  // All Photos Grid Modal
  window.openAllPhotosGrid = function() {
    allPhotosGrid.innerHTML = '';
    PHOTO_COLLECTION.forEach((item, idx) => {
      const card = document.createElement('div');
      card.className = 'grid-photo-card';
      card.innerHTML = `
        <img src="${item.src}" alt="Memory ${idx + 1}" loading="lazy">
        <div class="grid-photo-overlay">
          <p>${item.caption}</p>
        </div>
      `;
      card.addEventListener('click', () => {
        closeAllPhotosGrid();
        openLightbox(idx);
      });
      allPhotosGrid.appendChild(card);
    });

    allPhotosModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  };

  window.closeAllPhotosGrid = function() {
    allPhotosModal.classList.add('hidden');
    document.body.style.overflow = '';
  };


  // ==============================================
  // 7. VIRTUAL GIFT BOX SURPRISE
  // ==============================================
  window.openGiftBox = function() {
    giftBox.classList.add('opened');
    triggerConfetti();

    setTimeout(() => {
      goldenVoucher.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    }, 600);
  };

  window.closeVoucher = function() {
    goldenVoucher.classList.add('hidden');
    document.body.style.overflow = '';
  };


  // ==============================================
  // INITIALIZATION
  // ==============================================
  initCoverFlow();
  updatePlayerUI();
});
