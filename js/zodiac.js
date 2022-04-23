/* Zodiac Info Here
Aries Dates: March 21 – April 19
Taurus Dates: April 20 – May 20
Gemini Dates: May 21 – June 20
Cancer Dates: June 21 – July 22
Leo Dates: July 23 – August 22
Virgo Dates: August 23 – September 22
Libra Dates: September 23 – October 22
Scorpio Dates: October 23 – November 21
Sagittarius Dates: November 22 – December 21
Capricorn Dates: December 22 – January 19
Aquarius Dates: January 20 – February 18
Pisces Dates: February 19 – March 20
*/

const aries = 'As a Cardinal fire sign, Aries also likes to be on the move and travels a zillion miles an hour. It can be hard to keep up with an impassioned and empowered Aries\. Think about the amount of boldness, risk, confidence, and sheer energy and life force it takes to start any kind of project or phase in life. That\'s all Aries.'

const taurus = 'Venus, the ruler of Taurus, is the planet of love, beauty, art, peace, and harmony. Thanks to Venus\' sweet and sultry energy, Taureans are also known for their love of all things earthly and sensory. To enjoy life to the fullest, this sign is all about slowing down, taking it all in, and seeking comfort. Taurus folks crave food, environments, people, and feelings that are familiar, cozy, and pleasing to all the senses.'

const gemini = 'Mercury, the ruler of Gemini, is the planet of communication, language, and travel. Mercury is named for the only Roman god who could travel freely between the underworld and the heavens, explaining Gemini\'s desire to maneuver between realms, chat with all kinds of folks, and run after their curiosities.'

const cancer = 'Those born under this sign are often quite sensitive, able to perceive other people\'s feelings and moods. Cancers also tend to be very in tune with their environments. Like the moon mirrors the light of the sun, this sign can reflect the energy of the world around them.Cancer energy is associated with beginnings, origins, and the waters of the womb. This sign is all about growth, nourishment, and comfort. How we feel at home in our bodies, in the universe, in our communities. How we connect to our lineage.'

const leo = 'Leo\'s ruler, the sun, teaches us all we need to know about this bright sign: In astrology, the sun symbolizes the fuel, energy, and vital life force that powers all the other planets. Whereas the moon illuminates only some things, the sun shines upon everything—giving us life and light in the process.'

const virgo = 'Virgo\'s job, with the help of Mercury, is to sort through the harvest—essentially separating what\'s necessary from what\'s not. Virgo is dedicated to this task, hence why Virgos are often known as the editors of the zodiac.'

const libra = 'Libras are interested in finding balance everywhere: in spheres of social justice, friendships, partnerships, etc. As such, they\'re often stereotyped as being indecisive—but they\'re just weighing all the options. The scales of justice are meticulous, after all.'

const scorpio = 'A typical Scorpio is known to be intensely passionate, sexual, and deep. This sign is looking for someone to really explore new territory with—a partner they can take to travel to the outermost regions of desire, explore sex and sexuality with, and get to know on a deeper level.'

const sagittarius = 'Jupiter grants Sagittarius its affinity for adventure and novelty. Sag is also associated with the ninth house in astrology—the realm of higher education, foreign travel, spirituality, and wisdom. This is a sign that will travel to far reaches of the globe searching for truth.'

const capricorn = 'We often think of Capricorns as high achievers or business-oriented workhorses. This speaks to the goat aspect of their sea-goat symbol. Goats are scrappy, and some of them are capable of climbing to great heights. The fishtail portion of the sea-goat, on the other hand, holds the ocean and the vast, almost spiritual world that lies beneath it.'

const aquarius = 'Aquarius is represented by the Water Bearer—a figure emptying a jug of water. This gesture is meant to sweep away the past, clear away stagnant thinking that\'s holding us back, and make room for what\'s next. This says a lot about the Aquarian personality.'

const pisces = 'Endlessly empathetic and understanding, the Pisces personality is sensitive—and maybe a little psychic. Pisces is often touted as a mystical oceanic figure, with prophetic creatives such as Michelangelo, Kurt Cobain, and Nat King Cole born under the sign of the fishes.'

document.querySelector('#btn').addEventListener('click', horoscope)

function horoscope(){
  let month = document.querySelector('#month').value
  let day = document.querySelector('#day').value

  if((month==1) && (day >=19 && day <= 31) || (month==2) && (day >=1 && day <= 18)){
    document.querySelector('#zodiac-title-result').innerText ='Aquarius'
    document.querySelector('#zodiac-info-result').textContent = aquarius
  
  }else if((month == 2) && (day >= 21 && day <= 28) || (month == 3) && (day >= 1 && day <= 19)){
    document.querySelector('#zodiac-title-result').innerText = 'Pisces'
    document.querySelector('#zodiac-info-result').textContent = pisces
  
  }else if((month == 3) && (day <= 21 && day >= 31 ) || (month == 4) && (day >= 1 && day <= 19)){
    document.querySelector('#zodiac-title-result').innerText = 'Aries'
    document.querySelector('#zodiac-info-result').textContent = aries
  
  }else if((month == 4) && (day >= 20 && day <= 31 ) || (month == 5) && (day >= 1 && day <= 20)){
    document.querySelector('#zodiac-title-result').innerText = 'Taurus'
    document.querySelector('#zodiac-info-result').textContent = taurus
  
    // Gemini Dates: May 21 – June 20
  }else if((month == 5 && day >= 20 && day <= 31) || (month == 6 && day >= 1 && day <= 20)){
    document.getElementById('zodiac-title-result').innerText = 'Gemini'
    document.getElementById('zodiac-info-result').innerText = gemini

    // Cancer Dates: June 21 – July 22
  }else if((month == 6 && day >= 21 && day <= 30) || (month == 7 && day >= 1 && day <= 22)){
    document.getElementById('zodiac-title-result').innerText = 'Cancer'
    document.getElementById('zodiac-info-result').innerText = cancer
  
    // Leo Dates: July 23 – August 22
  }else if((month == 7 && day >= 23 && day <= 31 ) || (month == 8 && day >= 1  && day <= 22 )){
    document.getElementById('zodiac-title-result').innerText = 'Leo'
    document.getElementById('zodiac-info-result').innerText = leo
  
    // Virgo Dates: August 23 – September 22
  }else if((month == 8) && (day >=23 && day <=31 ) || (month == 9) && (day >=1  && day <=22 )){
    document.getElementById('zodiac-title-result').innerText = 'Virgo'
    document.getElementById('zodiac-info-result').innerText = virgo

    // Libra Dates: September 23 – October 22
  }else if((month == 9) && (day >= 23 && day <= 30 ) || (month == 10) && (day >= 1  && day <= 22 )){
    document.getElementById('zodiac-title-result').innerText = 'Libra'
    document.getElementById('zodiac-info-result').innerText = libra

    // Scorpio Dates: October 23 – November 21
  }else if((month == 10) && (day >= 23 && day <= 31) || (month == 11) && (day >= 1  && day <= 21)){ document.getElementById('zodiac-title-result').innerText = 'Scorpio'
    document.getElementById('zodiac-info-result').innerText = scorpio

    // Sagittarius Dates: November 22 – December 21
  }else if((month == 11) && (day >=22  && day <= 30) || (month == 12) && (day >=1  && day <= 21)){ document.getElementById('zodiac-title-result').innerText = 'Sagittarius'
    document.getElementById('zodiac-info-result').innerText = sagittarius

    // Capricorn Dates: December 22 – January 19
  }else if((month == 12) && (day >=22  && day <= 31) || (month == 1) && (day >=1  && day <= 19)){
    document.getElementById('zodiac-title-result').innerText = 'Capricorn'
    document.getElementById('zodiac-info-result').innerText = capricorn

  }else {
    document.querySelector('#zodiac-title-result').innerText='Sorry, try again'
    document.getElementById('zodiac-info-result').innerText = ''
  }
}