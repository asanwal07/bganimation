const header=document.getElementById('header')
const title=document.getElementById('title')
const excerpt=document.getElementById('excerpt')
const profile_img=document.getElementById('profile_img')
const name=document.getElementById('name')
const date=document.getElementById('date')


const animated_bgs=document.querySelectorAll('.animated-bg')
const animated_bgs_texts=document.querySelectorAll('.animated-bg-text')

setTimeout(() => {
      getdata()
}, 2500);

function getdata()
{
      header.innerHTML= '<img src="./p1.jpg" alt="">'
      title.innerHTML='Lorem ipsum dolor sit.'
      excerpt.innerHTML=' Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, ut.'
      profile_img.innerHTML='<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="">'
      date.innerHTML='May 02,2021'
      name.innerHTML='John Bro'

      animated_bgs.forEach(bg=>bg.classList.remove('animated-bg'))
      animated_bgs_texts.forEach(bg=>bg.classList.remove('animated-bg-text'))

}

