intro.addEventListener('click', function(){
    console.log('test')
    document.getElementById('picture').src = 
    'intro.jpg';
    document.getElementById('subheader').textContent =
    'Introduction'
    document.getElementById('description').textContent =
    'Here you will learn all about the phases of the moon, simplified into three main categories. The full moon phase, the half moon phase, and the new moon phase are going to be the three main phases highlighted. I hope you are over the moon to learn about the phases!'
   })
first.addEventListener('click', function(){
    console.log('test')
    document.getElementById('picture').src = 
    'first.jpg';
    document.getElementById('subheader').textContent =
    'Phase 1: New Moon'
    document.getElementById('description').textContent = 
    'Lets start with the New Moon phase! When it seems like there is no moon to be seen, that means were in the new moon phase. The sunlight to the moon is almost comepletely blocked by the earth, creating the illusion the moon is only a smaller sliver, or not even there!'
})
second.addEventListener('click', function(){
    console.log('test')
    document.getElementById('picture').src = 
    'second.jpg';
    document.getElementById('subheader').textContent =
    'Phase 2: Half Moon'
    document.getElementById('description').textContent = 
    'As the position of the Earth chnages, more sunlight is able to reach the moon, and we gradually move into the Half Moon phase! This represents either the third quarter, or fourth quarter, of the moon phases. For example, after the New Moon, we see a waxing crescent moon, and then Half Moon.'
})
third.addEventListener('click', function(){
    console.log('test')
    document.getElementById('picture').src = 
    'third.jpg';
    document.getElementById('subheader').textContent =
    'Phase 3: Full Moon'
    document.getElementById('description').textContent = 
    'This is the fullest view of the moon phases, the Full Moon phase! This is the most beautiful phase of the moon, but also when people act the craziest. There is a lot of folklore and superstition when it comes to full moons, like how they might bring about chaos!'
})