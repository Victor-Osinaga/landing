const Texts = [
  'BOOTSTRAP','HTML', 'JAVASCRIPT', 'BEM', 'RESPONSIVE', 'CSS', 'SASS', 'NODE JS', 'EXPRESS', 'FIREBASE', 'API REST', 'REACT', 'EXPRESS', 'FRONTEND', 'BACKEND'
]

var tagCloud = TagCloud('.Sphere', Texts, {
 radius: 150,
 maxSpeed: 'fast',
 initSpeed: 'fast',
 direction: 240,
 keep: true,
 useContainerInlineStyles: true
});

// var color = '#08fdd8'
var color = '#000'
document.querySelector('.Sphere').style.color = color;
// document.querySelector('.Sphere').style.background = 'rgba(128, 128, 128, 0.18)';