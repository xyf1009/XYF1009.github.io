/*
 * /music 页面的本地音乐播放器
 * 依赖 Butterfly 的 aplayerInject 注入的 APlayer（页面 front-matter 需 aplayer: true）
 * 歌曲放在 source/music/songs/ 下，改这里的列表即可换歌
 */
(function () {
  const SONG_DIR = '/music/songs/'

  const SONGS = [
    { name: '好久不见', artist: '陈奕迅', file: '陈奕迅 - 好久不见.mp3' },
    { name: '告白气球', artist: '周杰伦', file: '告白气球-周杰伦.mp3' },
    { name: '江南', artist: '林俊杰', file: '林俊杰 - 江南.mp3' },
    { name: '日不落', artist: '蔡依林', file: '蔡依林 - 日不落.mp3' },
    { name: '勇气', artist: '梁静茹', file: '梁静茹 - 勇气.mp3' },
    { name: '爱人错过', artist: '告五人', file: '告五人 - 爱人错过.mp3' },
    { name: '云烟成雨', artist: '房东的猫', file: '房东的猫 - 云烟成雨.mp3' },
    { name: '泡沫', artist: 'G.E.M. 邓紫棋', file: 'G.E.M. 邓紫棋 - 泡沫.mp3' },
    { name: '后来的我们', artist: '五月天', file: '后来的我们-五月天.mp3' },
    { name: 'The Spectre', artist: 'Alan Walker', file: 'Alan Walker - The Spectre.mp3' }
  ]

  function init () {
    const container = document.getElementById('music-player')
    if (!container || !window.APlayer || window._xyfMusicPlayer) return

    const audio = SONGS.map(function (song) {
      return {
        name: song.name,
        artist: song.artist,
        url: SONG_DIR + encodeURIComponent(song.file)
      }
    })

    window._xyfMusicPlayer = new APlayer({
      container: container,
      fixed: false,
      mini: false,
      autoplay: false,
      theme: '#49b1f5',
      loop: 'all',
      order: 'random',
      preload: 'metadata',
      volume: 0.7,
      mutex: true,
      listFolded: false,
      listMaxHeight: 360,
      audio: audio
    })
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init)
  } else {
    init()
  }
  window.addEventListener('load', init)
})()
