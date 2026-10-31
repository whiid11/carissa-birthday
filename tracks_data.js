// Playlist Data extracted from Spotify Playlist "Luv" (21 Milestone Songs for 21st Birthday)
const SPOTIFY_PLAYLIST_URL = "https://open.spotify.com/playlist/6hsa26em3TEvpoWmpV0Iiv?si=45487d938d6a47ca";

const TRACKS = [
  {
    "id": 1,
    "name": "P.S. I LOVE YOU",
    "artist": "Paul Partohap",
    "album": "P.S. I LOVE YOU",
    "cover": "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e0203769726e96538c554af7c61",
    "spotifyUrl": "https://open.spotify.com/track/1w3azB0VuRFp79AduIwrIy",
    "previewUrl": "assets/audio/track_1.mp3",
    "quote": "Bila aku harus menuliskan kembali alasan mencintaimu, halamannya takkan pernah cukup."
  },
  {
    "id": 2,
    "name": "Old Love",
    "artist": "yuji, putri dahlia",
    "album": "Old Love",
    "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e026e0e899970f5868aea8251cb",
    "spotifyUrl": "https://open.spotify.com/track/3W4U7TEgILGpq0EmquurtH",
    "previewUrl": "assets/audio/track_2.mp3",
    "quote": "Di antara miliaran jiwa, hatiku hanya mengenali satu jalan pulang: menuju kedua matamu."
  },
  {
    "id": 3,
    "name": "Old Love (Stripped)",
    "artist": "yuji, putri dahlia",
    "album": "Old Love (Stripped)",
    "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e023859ec54f486a5eb23eb069c",
    "spotifyUrl": "https://open.spotify.com/track/6WMbbSonBub9Rlv64hG6aH",
    "previewUrl": "assets/audio/track_3.mp3",
    "quote": "Cinta yang sederhana, bisikan lembut yang selalu meneduhkan bisingnya dunia."
  },
  {
    "id": 4,
    "name": "BEAUTiFUL",
    "artist": "Paul Partohap",
    "album": "BEAUTiFUL",
    "cover": "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e021ef044dad293418f4ee530c8",
    "spotifyUrl": "https://open.spotify.com/track/7nDp1GRUcGuwpxLFmL8CZN",
    "previewUrl": "assets/audio/track_4.mp3",
    "quote": "Kamu adalah karya terindah yang pernah semesta ciptakan dengan penuh rasa cinta."
  },
  {
    "id": 5,
    "name": "THANK YOU 4 LOVIN' ME",
    "artist": "Paul Partohap",
    "album": "THANK YOU 4 LOVIN' ME",
    "cover": "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02eec9dbf44607a72f9deab6ef",
    "spotifyUrl": "https://open.spotify.com/track/557XVqKgnYAxvvyczr2zDg",
    "previewUrl": "assets/audio/track_5.mp3",
    "quote": "Terima kasih telah mencintaiku dengan begitu tulus dan menjadikanku rumah ternyamanmu."
  },
  {
    "id": 6,
    "name": "You & I",
    "artist": "Diego Gonzalez",
    "album": "You & I",
    "cover": "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e021f61c5b9c469a9050438d249",
    "spotifyUrl": "https://open.spotify.com/track/3mX2GKPSW38pRpdmC9tdvY",
    "previewUrl": "assets/audio/track_6.mp3",
    "quote": "Hanya kamu dan aku, mengukir cerita yang takkan pernah pudar oleh waktu."
  },
  {
    "id": 7,
    "name": "Sempurna",
    "artist": "Andra & The Backbone",
    "album": "Sempurna",
    "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e020df7dec70511dd4f2e69dc34",
    "spotifyUrl": "https://open.spotify.com/track/2UgCs0i0rNHUH2jKE5NZHE",
    "previewUrl": "assets/audio/track_7.mp3",
    "quote": "Janganlah pernah kau berganti, karena bagiku kau adalah darah dan nafasku."
  },
  {
    "id": 8,
    "name": "Komang",
    "artist": "Raim Laode",
    "album": "Komang",
    "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02f20ec6ba1f431a90dbf2e8b6",
    "spotifyUrl": "https://open.spotify.com/track/2AaaE0qvFWtyT8srKNfRhH",
    "previewUrl": "assets/audio/track_8.mp3",
    "quote": "Sebab kau terlalu indah dari sekadar kata yang pernah dituliskan para penyair."
  },
  {
    "id": 9,
    "name": "Sayap Pelindungmu",
    "artist": "TheOvertunes",
    "album": "Sayap Pelindungmu",
    "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02ad2d81b674462d99915c66a8",
    "spotifyUrl": "https://open.spotify.com/track/3LhUsgwtftfxHIPgViaYxB",
    "previewUrl": "assets/audio/track_9.mp3",
    "quote": "Saat dunia terasa dingin, aku akan selalu menjadi sayap hangat yang menjagamu."
  },
  {
    "id": 10,
    "name": "Perahu Kertas",
    "artist": "Maudy Ayunda",
    "album": "Perahu Kertas",
    "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e020b16a93eea5f9b4cbb343048",
    "spotifyUrl": "https://open.spotify.com/track/0InJPuWIYp8fwlBGIQglLf",
    "previewUrl": "assets/audio/track_10.mp3",
    "quote": "Hati yang saling menemukan takkan pernah tersesat, sejauh apa pun arus membawanya."
  },
  {
    "id": 11,
    "name": "Pelangi",
    "artist": "HiVi!",
    "album": "Pelangi",
    "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02abbee551b5c821d7624949ae",
    "spotifyUrl": "https://open.spotify.com/track/3ZwqWrRpylU9nfy99qwKdR",
    "previewUrl": "assets/audio/track_11.mp3",
    "quote": "Kau datang mewarnai hariku yang kelabu dengan senyuman paling manis."
  },
  {
    "id": 12,
    "name": "Mine",
    "artist": "Petra Sihombing, Ben Sihombing",
    "album": "Mine",
    "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e021e03eb0d284feb4023480e8a",
    "spotifyUrl": "https://open.spotify.com/track/6NkUP6IeLnH6Yaw2wcNHzO",
    "previewUrl": "assets/audio/track_12.mp3",
    "quote": "Mengetahui kamu milikku adalah anugerah termanis yang selalu kusyukuri."
  },
  {
    "id": 13,
    "name": "I Still Love You",
    "artist": "TheOvertunes",
    "album": "I Still Love You",
    "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0285905ceff03711d5da48dec9",
    "spotifyUrl": "https://open.spotify.com/track/12NJunsYai7rMT0kM3E8GV",
    "previewUrl": "assets/audio/track_13.mp3",
    "quote": "Bahkan setelah melewati seribu musim, hatiku akan tetap mencintaimu sedalam ini."
  },
  {
    "id": 14,
    "name": "i <3 u",
    "artist": "boy pablo",
    "album": "i <3 u",
    "cover": "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e022dec0426c3e27a180d7f894c",
    "spotifyUrl": "https://open.spotify.com/track/5EcGSkkNBMAWOePvLgKde1",
    "previewUrl": "assets/audio/track_14.mp3",
    "quote": "Tiga kata sederhana yang menyimpan seluruh debar jantungku kepadamu."
  },
  {
    "id": 15,
    "name": "Until I Found You",
    "artist": "Stephen Sanchez, Em Beihold",
    "album": "Until I Found You",
    "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e022bf0876d42b90a8852ad6244",
    "spotifyUrl": "https://open.spotify.com/track/1Y3LN4zO1Edc2EluIoSPJN",
    "previewUrl": "assets/audio/track_15.mp3",
    "quote": "Duniaku baru benar-benar bermula saat mataku pertama kali menatapmu."
  },
  {
    "id": 16,
    "name": "I Wanna Be Yours",
    "artist": "Arctic Monkeys",
    "album": "I Wanna Be Yours",
    "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e024ae1c4c5c45aabe565499163",
    "spotifyUrl": "https://open.spotify.com/track/5XeFesFbtLpXzIVDNQP22n",
    "previewUrl": "assets/audio/track_16.mp3",
    "quote": "Aku ingin menjadi udara yang kau hirup, setia di sampingmu selamanya."
  },
  {
    "id": 17,
    "name": "To the Bone",
    "artist": "Pamungkas",
    "album": "To the Bone",
    "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e028540f1aa50ce035b4e9cdfa7",
    "spotifyUrl": "https://open.spotify.com/track/3pCt2wRdBDa2kCisIdHWgF",
    "previewUrl": "assets/audio/track_17.mp3",
    "quote": "Mencintaimu sampai ke tulang, hingga tak ada lagi ragu yang tersisa."
  },
  {
    "id": 18,
    "name": "Perfect",
    "artist": "Ed Sheeran",
    "album": "Perfect",
    "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02ba5db46f4b838ef6027e6f96",
    "spotifyUrl": "https://open.spotify.com/track/0tgVpDi06FyKpA1z0VMD4v",
    "previewUrl": "assets/audio/track_18.mp3",
    "quote": "Malam ini, di bawah gemerlap bintang, bagiku kaulah yang paling sempurna."
  },
  {
    "id": 19,
    "name": "Steal My Girl",
    "artist": "One Direction",
    "album": "Steal My Girl",
    "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0234a29f220057810cce98e1b4",
    "spotifyUrl": "https://open.spotify.com/track/2Bs4jQEGMycglOfWPBqrVG",
    "previewUrl": "assets/audio/track_19.mp3",
    "quote": "Semua orang mengagumimu, namun hatimu telah memilihku untuk menjagamu."
  },
  {
    "id": 20,
    "name": "Favorite Girl",
    "artist": "Justin Bieber",
    "album": "Favorite Girl",
    "cover": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e027c3bb9f74a98f60bdda6c9a7",
    "spotifyUrl": "https://open.spotify.com/track/4nTjkWK590oBDcnIxTr1mI",
    "previewUrl": "assets/audio/track_20.mp3",
    "quote": "Dari jutaan bintang di langit, hanya kamu gadisku yang paling bercahaya."
  },
  {
    "id": 21,
    "name": "Anything You Want",
    "artist": "Reality Club",
    "album": "Anything You Want",
    "cover": "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02c607bcd8355681ab4fac2968",
    "spotifyUrl": "https://open.spotify.com/track/0EDgUNdoWnRslGw6epuJY9",
    "previewUrl": "assets/audio/track_21.mp3",
    "quote": "Segalanya untuk bahagiamu, Carissa. Aku akan selalu ada untukmu."
  }
];

// All available photos for the gallery with pure romantic prose
const PHOTO_COLLECTION = [
  { "src": "assets/photos/IMG_4500.jpg", "caption": "Senyum manismu yang selalu menenangkan hariku" },
  { "src": "assets/photos/IMG_4501.jpg", "caption": "Setiap momen bersamamu selalu terasa istimewa" },
  { "src": "assets/photos/IMG_4652.jpg", "caption": "Cantiknya kamu, duniaku" },
  { "src": "assets/photos/IMG_4807.jpg", "caption": "Hari-hari bersamamu yang penuh tawa bahagia" },
  { "src": "assets/photos/IMG_4836.jpg", "caption": "Mata terindah yang pernah kutatap" },
  { "src": "assets/photos/IMG_4847.jpg", "caption": "Tempat pulang paling nyaman di dunia" },
  { "src": "assets/photos/IMG_5674.jpg", "caption": "Selalu bersyukur semesta mempertemukan kita" },
  { "src": "assets/photos/IMG_5677.jpg", "caption": "Keanggunanmu yang tak pernah memudar" },
  { "src": "assets/photos/IMG_5682.jpg", "caption": "Kenangan photobooth yang paling berharga" },
  { "src": "assets/photos/IMG_5768.jpg", "caption": "Menatapmu membuat dunia terasa lebih teduh" },
  { "src": "assets/photos/IMG_5852.jpg", "caption": "Cinta yang terus tumbuh di setiap detik" },
  { "src": "assets/photos/IMG_5902.jpg", "caption": "Kenangan manis di hari yang tak terlupakan" },
  { "src": "assets/photos/IMG_5903.jpg", "caption": "Tertawa lepas bersamamu adalah bahagiaku" },
  { "src": "assets/photos/IMG_5953.jpg", "caption": "Cantik luar dan dalam, Carissaku" },
  { "src": "assets/photos/IMG_5954.jpg", "caption": "Tetaplah tersenyum manis seperti ini selamanya" },
  { "src": "assets/photos/IMG_5986.jpg", "caption": "Di setiap langkahmu, aku akan selalu ada" },
  { "src": "assets/photos/IMG_6025.jpg", "caption": "Bintang paling terang di malam hariku" },
  { "src": "assets/photos/IMG_6027.jpg", "caption": "Bahkan semesta pun kagum pada pesonamu" },
  { "src": "assets/photos/IMG_6161.jpg", "caption": "Momen manis kita yang selalu kurindukan" },
  { "src": "assets/photos/IMG_6251.jpg", "caption": "Gadis kesayanganku di usianya yang ke-21" },
  { "src": "assets/photos/IMG_6291.jpg", "caption": "Senang sekali bisa menjadi saksi bahagiamu" },
  { "src": "assets/photos/IMG_6597.jpg", "caption": "Semoga langkahmu selalu dipeluk kebaikan" },
  { "src": "assets/photos/IMG_6773.jpg", "caption": "Kisah cinta kita yang tumbuh semakin dalam" },
  { "src": "assets/photos/IMG_6774.jpg", "caption": "Bersamamu, segalanya terasa cukup dan sempurna" },
  { "src": "assets/photos/IMG_6887.jpg", "caption": "Pelukan dan kenyamanan terhangat di dunia" },
  { "src": "assets/photos/IMG_6914.jpg", "caption": "Happy 21st Birthday, Carissa Putri Maharani" }
];

const PHOTOS = PHOTO_COLLECTION;
