var posts=["2026/02/27/steam新品节demo浅谈/","2026/02/26/雪国2022》这不是徒劳还能是什么？/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };