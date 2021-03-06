import React from 'react'

const About = () => {
  return (
    <div>
      <h3>Tietoa</h3>
      <p>
        Sivustolla on tarkoitus esittää lämpötiladataa tietyllä mittaussyklillä.
        Data kerätään DS18B20 lämpötila-anturilla kytkettynä NodeMCU ESP32S
        Wifi-moduuliin, joka lähettää datan JSON-muotoisena serverille.
      </p>
      <p />
      Teknologiat, joita hyödynnetty tässä web sovelluksessa:
      <ul>
        <li>Node</li>
        <li>Express</li>
        <li>MongoDB</li>
        <li>React</li>
      </ul>
      <p />
      Käytetyt komponentit:
      <ul>
        <li>NodeMCU ESP32S (AI-Thinker)</li>
        <li>DS18B20 lämpötila-anturi</li>
        <li>1.3&#34; OLED näyttö</li>
      </ul>
      <p>
        NodeMCU ESP32S:ssä käytetty softa nähtävillä repossa: <i>Tulossa</i>
      </p>
      <p>
        <i>Tähän kuva setupista</i>
      </p>
      <p />
      Hyviä linkkejä, joista lisätietoa:
      <ul>
        <li>
          <a href="http:///www.esp32.net">esp32.net</a>
        </li>
        <li>
          <a href="https://techtutorialsx.com/category/esp32/">
            Techtutorialsx - ESP32
          </a>
        </li>
      </ul>
    </div>
  )
}

export default About
