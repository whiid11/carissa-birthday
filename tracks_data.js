// Playlist Data extracted from Spotify Playlist "Luv"
const SPOTIFY_PLAYLIST_URL = "https://open.spotify.com/playlist/6hsa26em3TEvpoWmpV0Iiv?si=45487d938d6a47ca";

const TRACKS = [
  {
    "id": 1,
    "name": "P.S. I LOVE YOU",
    "artist": "Paul Partohap",
    "album": "P.S. I LOVE YOU",
    "cover": "https://i.scdn.co/image/ab67616d00001e0203769726e96538c554af7c61",
    "spotifyUrl": "https://open.spotify.com/track/1w3azB0VuRFp79AduIwrIy",
    "previewUrl": "assets/audio/song.m4a", // Local fallback audio
    "quote": "Bila aku harus menuliskan kembali alasan mencintaimu, halamannya takkan pernah cukup."
  },
  {
    "id": 2,
    "name": "Old Love",
    "artist": "yuji, putri dahlia",
    "album": "Old Love",
    "cover": "https://i.scdn.co/image/ab67616d00001e026e0e899970f5868aea8251cb",
    "spotifyUrl": "https://open.spotify.com/track/3W4U7TEgILGpq0EmquurtH",
    "previewUrl": "assets/audio/old_love.m4a", // Local fallback audio
    "quote": "Aku ingin menua bersamamu, seperti kisah cinta klasik yang abadi."
  },
  {
    "id": 3,
    "name": "Old Love (Stripped)",
    "artist": "yuji, putri dahlia",
    "album": "Old Love (Stripped)",
    "cover": "https://i.scdn.co/image/ab67616d00001e023859ec54f486a5eb23eb069c",
    "spotifyUrl": "https://open.spotify.com/track/6WMbbSonBub9Rlv64hG6aH",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/8d/b4/6a/8db46a58-36fb-371f-9c59-6b7ddf7b4b32/mzaf_11307922516574442035.plus.aac.p.m4a",
    "quote": "Dalam kesederhanaan nada, selalu ada namamu yang terukir manis."
  },
  {
    "id": 4,
    "name": "BEAUTiFUL",
    "artist": "Paul Partohap",
    "album": "BEAUTiFUL",
    "cover": "https://i.scdn.co/image/ab67616d00001e021ef044dad293418f4ee530c8",
    "spotifyUrl": "https://open.spotify.com/track/7nDp1GRUcGuwpxLFmL8CZN",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/a5/aa/96/a5aa967b-1cb8-b0a3-a3d8-e7ec3fbe6541/mzaf_11311545620863071850.plus.aac.p.m4a",
    "quote": "Kamu selalu cantik, dalam setiap detik dan helaan napasmu."
  },
  {
    "id": 5,
    "name": "THANK YOU 4 LOVIN’ ME",
    "artist": "Paul Partohap",
    "album": "LOVERs PLAYBOOK",
    "cover": "https://i.scdn.co/image/ab67616d00001e02eec9dbf44607a72f9deab6ef",
    "spotifyUrl": "https://open.spotify.com/track/557XVqKgnYAxvvyczr2zDg",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/33/c4/62/33c46237-fe7f-b883-93d3-178c772cb35f/mzaf_12411986427301646294.plus.aac.p.m4a",
    "quote": "Terima kasih sudah memilih untuk mencintaiku dengan begitu tulus."
  },
  {
    "id": 6,
    "name": "You & I",
    "artist": "Diego Gonzalez",
    "album": "You & I",
    "cover": "https://i.scdn.co/image/ab67616d00001e021f61c5b9c469a9050438d249",
    "spotifyUrl": "https://open.spotify.com/track/3mX2GKPSW38pRpdmC9tdvY",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/34/2f/cb/342fcb0d-45cb-a035-7c30-fbf10427364b/mzaf_1446700681534720974.plus.aac.p.m4a",
    "quote": "Hanya ada kamu dan aku di dunia kecil yang kita bangun bersama."
  },
  {
    "id": 7,
    "name": "Sempurna",
    "artist": "Andra & The Backbone",
    "album": "Andra & The Backbone",
    "cover": "https://i.scdn.co/image/ab67616d00001e020df7dec70511dd4f2e69dc34",
    "spotifyUrl": "https://open.spotify.com/track/2UgCs0i0rNHUH2jKE5NZHE",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/b9/fe/ce/b9fece2a-c73e-ebc4-9fb3-b61f1770adcb/mzaf_9535812521294740998.plus.aac.p.m4a",
    "quote": "Janganlah kau henti terbang dan tersenyum, kau sempurnakan hidupku."
  },
  {
    "id": 8,
    "name": "Komang",
    "artist": "Raim Laode",
    "album": "Komang",
    "cover": "https://i.scdn.co/image/ab67616d00001e02f20ec6ba1f431a90dbf2e8b6",
    "spotifyUrl": "https://open.spotify.com/track/2AaaE0qvFWtyT8srKNfRhH",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/bb/a2/52/bba252b5-555e-4ce1-85b2-32a2f8b5f335/mzaf_11306129881858888788.plus.aac.p.m4a",
    "quote": "Sebab kau terlalu indah dari sekadar kata yang pernah kurangkai."
  },
  {
    "id": 9,
    "name": "Sayap Pelindungmu",
    "artist": "TheOvertunes",
    "album": "Selamanya",
    "cover": "https://i.scdn.co/image/ab67616d00001e02ad2d81b674462d99915c66a8",
    "spotifyUrl": "https://open.spotify.com/track/3LhUsgwtftfxHIPgViaYxB",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/c3/8c/d7/c38cd731-ee51-87a4-c752-6b95c0c946e3/mzaf_8048259468971032360.plus.aac.p.m4a",
    "quote": "Bila kau lelah, ingatlah ada pundakku yang selalu siap menjagamu."
  },
  {
    "id": 10,
    "name": "Perahu Kertas",
    "artist": "Maudy Ayunda",
    "album": "Moments",
    "cover": "https://i.scdn.co/image/ab67616d00001e020b16a93eea5f9b4cbb343048",
    "spotifyUrl": "https://open.spotify.com/track/0InJPuWIYp8fwlBGIQglLf",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/f2/81/4f/f2814fba-d8fa-5374-1249-ae1eeb8e8609/mzaf_2825828775459345091.plus.aac.p.m4a",
    "quote": "Kuingin berlayar bersamamu menuju dermaga bahagia kita."
  },
  {
    "id": 11,
    "name": "Pelangi",
    "artist": "HiVi!",
    "album": "Kereta Kencan",
    "cover": "https://i.scdn.co/image/ab67616d00001e02abbee551b5c821d7624949ae",
    "spotifyUrl": "https://open.spotify.com/track/3ZwqWrRpylU9nfy99qwKdR",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/0d/18/8c/0d188cd7-1f95-ba38-b78f-62cb3c9bbd27/mzaf_10022464731046960100.plus.aac.p.m4a",
    "quote": "Warna-warni terindah di duniaku selalu bermula dari senyummu."
  },
  {
    "id": 12,
    "name": "Mine",
    "artist": "Petra Sihombing, Ben Sihombing",
    "album": "Mine",
    "cover": "https://i.scdn.co/image/ab67616d00001e021e03eb0d284feb4023480e8a",
    "spotifyUrl": "https://open.spotify.com/track/6NkUP6IeLnH6Yaw2wcNHzO",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/10/a5/d8/10a5d898-72ee-c3cf-41cb-70e62d422aa9/mzaf_9949931327150148731.plus.aac.p.m4a",
    "quote": "Bangga sekali bisa memanggilmu sebagai milikku."
  },
  {
    "id": 13,
    "name": "I Still Love You (Acoustic)",
    "artist": "TheOvertunes",
    "album": "I Still Love You (Acoustic Version)",
    "cover": "https://i.scdn.co/image/ab67616d00001e0285905ceff03711d5da48dec9",
    "spotifyUrl": "https://open.spotify.com/track/12NJunsYai7rMT0kM3E8GV",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/58/01/fa/5801fa49-65fe-16d7-e23a-18f1f7ca40a4/mzaf_11306648753896590390.plus.aac.p.m4a",
    "quote": "Bahkan saat waktu terus berlari, cintaku padamu tak pernah pudar."
  },
  {
    "id": 14,
    "name": "i <3 u",
    "artist": "boy pablo",
    "album": "Wachito Rico",
    "cover": "https://i.scdn.co/image/ab67616d00001e022dec0426c3e27a180d7f894c",
    "spotifyUrl": "https://open.spotify.com/track/5EcGSkkNBMAWOePvLgKde1",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/1e/8f/ba/1e8fba10-fa26-b10c-f376-7bf78fa7ff64/mzaf_4724915668407421160.plus.aac.p.m4a",
    "quote": "Tiga kata sederhana yang maknanya sebesar seluruh semesta untukmu."
  },
  {
    "id": 15,
    "name": "Until I Found You",
    "artist": "Stephen Sanchez, Em Beihold",
    "album": "Until I Found You (Em Beihold Version)",
    "cover": "https://i.scdn.co/image/ab67616d00001e022bf0876d42b90a8852ad6244",
    "spotifyUrl": "https://open.spotify.com/track/1Y3LN4zO1Edc2EluIoSPJN",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/53/82/c1/5382c1d4-ddba-aa2b-90df-57268895fac9/mzaf_8926201202931541051.plus.aac.p.m4a",
    "quote": "Kukira cinta itu rumit, sampai akhirnya aku menemukanmu."
  },
  {
    "id": 16,
    "name": "I Wanna Be Yours",
    "artist": "Arctic Monkeys",
    "album": "AM",
    "cover": "https://i.scdn.co/image/ab67616d00001e024ae1c4c5c45aabe565499163",
    "spotifyUrl": "https://open.spotify.com/track/5XeFesFbtLpXzIVDNQP22n",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/8b/0c/df/8b0cdfe6-f619-1ab0-366a-73be84c04dec/mzaf_14055369509528206797.plus.aac.p.m4a",
    "quote": "Tak ada tempat yang lebih kuinginkan selain berada di dekatmu."
  },
  {
    "id": 17,
    "name": "To the Bone",
    "artist": "Pamungkas",
    "album": "Flying Solo",
    "cover": "https://i.scdn.co/image/ab67616d00001e028540f1aa50ce035b4e9cdfa7",
    "spotifyUrl": "https://open.spotify.com/track/3pCt2wRdBDa2kCisIdHWgF",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/28/06/ef/2806ef89-b88e-6701-d70c-ce1a719582d9/mzaf_8673752763260718501.plus.aac.p.m4a",
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
