const ap = new APlayer({
  container: document.getElementById('aplayer'),
  fixed: true,
  // mini: true,
  autoplay: true,
  listFolded: true,
  preload: 'auto',
  mutex: true,
  // theme: '#FADFA3', //列表标签颜色,audio有设置theme这个就会失效
  loop: 'all',
  lrcType: 1,
  // volume: 0.7, //默认音量
  audio: [{
        name: 'ヒカリヘ (向着光) (piano version)',
        artist: '林友树 (林ゆうき)',
        url: 'https://y.qq.com/#type=song&mid=003g4pMq16jlC7&tpl=yqq_song_detail',
        cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000000ECmTF22VO0h.jpg',
      },
      {
        name: '雨空)',
        artist: 'α·Pav',
        url: 'https://music.163.com/#/song?id=139206',
        cover: 'http://p3.music.126.net/tBTNafgjNnTL1KlZMt7lVA==/18885211718935735.jpg',
      }
  ]
});
