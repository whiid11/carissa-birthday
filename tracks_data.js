// Playlist Data extracted from Spotify Playlist "Luv" (16 Full Songs)
const SPOTIFY_PLAYLIST_URL = "https://open.spotify.com/playlist/6hsa26em3TEvpoWmpV0Iiv?si=45487d938d6a47ca";

const TRACKS = [
  {
    "id": 1,
    "name": "P.S. I LOVE YOU",
    "artist": "Paul Partohap",
    "album": "P.S. I LOVE YOU",
    "cover": "https://i.scdn.co/image/ab67616d00001e0203769726e96538c554af7c61",
    "spotifyUrl": "https://open.spotify.com/track/1w3azB0VuRFp79AduIwrIy",
    "previewUrl": "assets/audio/track_1.m4a",
    "quote": "Bila aku harus menuliskan kembali alasan mencintaimu, halamannya takkan pernah cukup."
  },
  {
    "id": 2,
    "name": "Old Love",
    "artist": "yuji, putri dahlia",
    "album": "Old Love",
    "cover": "https://i.scdn.co/image/ab67616d00001e026e0e899970f5868aea8251cb",
    "spotifyUrl": "https://open.spotify.com/track/3W4U7TEgILGpq0EmquurtH",
    "previewUrl": "assets/audio/track_2.m4a",
    "quote": "Aku ingin menua bersamamu, seperti kisah cinta klasik yang abadi."
  },
  {
    "id": 3,
    "name": "BEAUTiFUL",
    "artist": "Paul Partohap",
    "album": "BEAUTiFUL",
    "cover": "https://i.scdn.co/image/ab67616d00001e021ef044dad293418f4ee530c8",
    "spotifyUrl": "https://open.spotify.com/track/7nDp1GRUcGuwpxLFmL8CZN",
    "previewUrl": "assets/audio/track_3.m4a",
    "quote": "Kamu selalu cantik, dalam setiap detik dan helaan napasmu."
  },
  {
    "id": 4,
    "name": "THANK YOU 4 LOVIN\u2019 ME",
    "artist": "Paul Partohap",
    "album": "LOVERs PLAYBOOK",
    "cover": "https://i.scdn.co/image/ab67616d00001e02eec9dbf44607a72f9deab6ef",
    "spotifyUrl": "https://open.spotify.com/track/557XVqKgnYAxvvyczr2zDg",
    "previewUrl": "assets/audio/track_4.m4a",
    "quote": "Terima kasih sudah memilih untuk mencintaiku dengan begitu tulus."
  },
  {
    "id": 5,
    "name": "You & I",
    "artist": "Diego Gonzalez",
    "album": "You & I",
    "cover": "https://i.scdn.co/image/ab67616d00001e021f61c5b9c469a9050438d249",
    "spotifyUrl": "https://open.spotify.com/track/3mX2GKPSW38pRpdmC9tdvY",
    "previewUrl": "assets/audio/track_5.m4a",
    "quote": "Hanya ada kamu dan aku di dunia kecil yang kita bangun bersama."
  },
  {
    "id": 6,
    "name": "Sempurna",
    "artist": "Andra & The Backbone",
    "album": "Andra & The Backbone",
    "cover": "https://i.scdn.co/image/ab67616d00001e020df7dec70511dd4f2e69dc34",
    "spotifyUrl": "https://open.spotify.com/track/2UgCs0i0rNHUH2jKE5NZHE",
    "previewUrl": "assets/audio/track_6.m4a",
    "quote": "Janganlah kau henti terbang dan tersenyum, kau sempurnakan hidupku."
  },
  {
    "id": 7,
    "name": "Komang",
    "artist": "Raim Laode",
    "album": "Komang",
    "cover": "https://i.scdn.co/image/ab67616d00001e02f20ec6ba1f431a90dbf2e8b6",
    "spotifyUrl": "https://open.spotify.com/track/2AaaE0qvFWtyT8srKNfRhH",
    "previewUrl": "assets/audio/track_7.m4a",
    "quote": "Sebab kau terlalu indah dari sekadar kata yang pernah kurangkai."
  },
  {
    "id": 8,
    "name": "Sayap Pelindungmu",
    "artist": "TheOvertunes",
    "album": "Selamanya",
    "cover": "https://i.scdn.co/image/ab67616d00001e02ad2d81b674462d99915c66a8",
    "spotifyUrl": "https://open.spotify.com/track/3LhUsgwtftfxHIPgViaYxB",
    "previewUrl": "assets/audio/track_8.m4a",
    "quote": "Bila kau lelah, ingatlah ada pundakku yang selalu siap menjagamu."
  },
  {
    "id": 9,
    "name": "Perahu Kertas",
    "artist": "Maudy Ayunda",
    "album": "Moments",
    "cover": "https://i.scdn.co/image/ab67616d00001e020b16a93eea5f9b4cbb343048",
    "spotifyUrl": "https://open.spotify.com/track/0InJPuWIYp8fwlBGIQglLf",
    "previewUrl": "assets/audio/track_9.m4a",
    "quote": "Kuingin berlayar bersamamu menuju dermaga bahagia kita."
  },
  {
    "id": 10,
    "name": "Pelangi",
    "artist": "HiVi!",
    "album": "Kereta Kencan",
    "cover": "https://i.scdn.co/image/ab67616d00001e02abbee551b5c821d7624949ae",
    "spotifyUrl": "https://open.spotify.com/track/3ZwqWrRpylU9nfy99qwKdR",
    "previewUrl": "assets/audio/track_10.m4a",
    "quote": "Warna-warni terindah di duniaku selalu bermula dari senyummu."
  },
  {
    "id": 11,
    "name": "Mine",
    "artist": "Petra Sihombing, Ben Sihombing",
    "album": "Mine",
    "cover": "https://i.scdn.co/image/ab67616d00001e021e03eb0d284feb4023480e8a",
    "spotifyUrl": "https://open.spotify.com/track/6NkUP6IeLnH6Yaw2wcNHzO",
    "previewUrl": "assets/audio/track_11.m4a",
    "quote": "Bangga sekali bisa memanggilmu sebagai milikku."
  },
  {
    "id": 12,
    "name": "I Still Love You (Acoustic)",
    "artist": "TheOvertunes",
    "album": "I Still Love You (Acoustic Version)",
    "cover": "https://i.scdn.co/image/ab67616d00001e0285905ceff03711d5da48dec9",
    "spotifyUrl": "https://open.spotify.com/track/12NJunsYai7rMT0kM3E8GV",
    "previewUrl": "assets/audio/track_12.m4a",
    "quote": "Bahkan saat waktu terus berlari, cintaku padamu tak pernah pudar."
  },
  {
    "id": 13,
    "name": "i <3 u",
    "artist": "boy pablo",
    "album": "Wachito Rico",
    "cover": "https://i.scdn.co/image/ab67616d00001e022dec0426c3e27a180d7f894c",
    "spotifyUrl": "https://open.spotify.com/track/5EcGSkkNBMAWOePvLgKde1",
    "previewUrl": "assets/audio/track_13.m4a",
    "quote": "Tiga kata sederhana yang maknanya sebesar seluruh semesta untukmu."
  },
  {
    "id": 14,
    "name": "Until I Found You",
    "artist": "Stephen Sanchez, Em Beihold",
    "album": "Until I Found You (Em Beihold Version)",
    "cover": "https://i.scdn.co/image/ab67616d00001e022bf0876d42b90a8852ad6244",
    "spotifyUrl": "https://open.spotify.com/track/1Y3LN4zO1Edc2EluIoSPJN",
    "previewUrl": "assets/audio/track_14.m4a",
    "quote": "Kukira cinta itu rumit, sampai akhirnya aku menemukanmu."
  },
  {
    "id": 15,
    "name": "I Wanna Be Yours",
    "artist": "Arctic Monkeys",
    "album": "AM",
    "cover": "https://i.scdn.co/image/ab67616d00001e024ae1c4c5c45aabe565499163",
    "spotifyUrl": "https://open.spotify.com/track/5XeFesFbtLpXzIVDNQP22n",
    "previewUrl": "assets/audio/track_15.m4a",
    "quote": "Tak ada tempat yang lebih kuinginkan selain berada di dekatmu."
  },
  {
    "id": 16,
    "name": "To the Bone",
    "artist": "Pamungkas",
    "album": "Flying Solo",
    "cover": "https://i.scdn.co/image/ab67616d00001e028540f1aa50ce035b4e9cdfa7",
    "spotifyUrl": "https://open.spotify.com/track/3pCt2wRdBDa2kCisIdHWgF",
    "previewUrl": "assets/audio/track_16.m4a",
    "quote": "Mencintaimu sampai ke tulang, dengan segenap hatiku."
  }
];

// All available photos for the gallery
const PHOTO_COLLECTION = [
  { "src": "assets/photos/IMG_4500.jpg", "caption": "Senyum manismu yang selalu menenangkan hariku ✨" },
  { "src": "assets/photos/IMG_4501.jpg", "caption": "Setiap momen bersamamu selalu terasa istimewa 🌸" },
  { "src": "assets/photos/IMG_4652.jpg", "caption": "Cantiknya kamu, duniaku 💖" },
  { "src": "assets/photos/IMG_4807.jpg", "caption": "Hari-hari bersamamu yang penuh canda dan tawa 📸" },
  { "src": "assets/photos/IMG_4836.jpg", "caption": "Mata terindah yang pernah kutatap 💫" },
  { "src": "assets/photos/IMG_4847.jpg", "caption": "Tempat pulang paling nyaman di dunia 🏡" },
  { "src": "assets/photos/IMG_5674.jpg", "caption": "Selalu bersyukur semesta mempertemukan kita 🌷" },
  { "src": "assets/photos/IMG_5677.jpg", "caption": "Keanggunanmu yang tak pernah memudar 🌿" },
  { "src": "assets/photos/IMG_5682.jpg", "caption": "Photobooth memories yang paling berharga 🎞️" },
  { "src": "assets/photos/IMG_5768.jpg", "caption": "Menatapmu membuat dunia terasa lebih teduh 🤍" },
  { "src": "assets/photos/IMG_5852.jpg", "caption": "Cinta yang terus tumbuh di setiap detik 💌" },
  { "src": "assets/photos/IMG_5902.jpg", "caption": "Kenangan manis di hari yang tak terlupakan ☀️" },
  { "src": "assets/photos/IMG_5903.jpg", "caption": "Tertawa lepas bersamamu adalah kebahagiaanku 🥰" },
  { "src": "assets/photos/IMG_5953.jpg", "caption": "Cantik luar dan dalam, Carissaku 🌹" },
  { "src": "assets/photos/IMG_5954.jpg", "caption": "Tetaplah tersenyum manis seperti ini selamanya ✨" },
  { "src": "assets/photos/IMG_5986.jpg", "caption": "Di setiap langkahmu, aku akan selalu ada 🤝" },
  { "src": "assets/photos/IMG_6025.jpg", "caption": "Bintang paling terang di malam hariku 🌟" },
  { "src": "assets/photos/IMG_6027.jpg", "caption": "Bahkan angin pun cemburu pada pesonamu 🍃" },
  { "src": "assets/photos/IMG_6161.jpg", "caption": "Momen lucu kita yang selalu bikin rindu 🎈" },
  { "src": "assets/photos/IMG_6251.jpg", "caption": "Gadis kesayanganku yang kini berulang tahun ke-21 🎂" },
  { "src": "assets/photos/IMG_6291.jpg", "caption": "Senang sekali bisa menjadi saksi bahagiamu 🌻" },
  { "src": "assets/photos/IMG_6597.jpg", "caption": "Semoga langkahmu selalu dipeluk keberkahan 🕊️" },
  { "src": "assets/photos/IMG_6773.jpg", "caption": "Cinta kecil yang tumbuh menjadi cerita besar 📖" },
  { "src": "assets/photos/IMG_6774.jpg", "caption": "Bersamamu, segalanya terasa cukup dan sempurna 💫" },
  { "src": "assets/photos/IMG_6887.jpg", "caption": "Pelukan terhangat di dunia ☕" },
  { "src": "assets/photos/IMG_6914.jpg", "caption": "Happy 21st Birthday, Carissa Putri Maharani! 👑" }
];
