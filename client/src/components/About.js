import React from 'react'

const About = () => {
  return (
    <div>
      <h3>Tietoa</h3>
      <p>
        Sivustolla on mahdollista seurata kerätyn lämpötiladatan perusteella
        lämpötilan kehitystä eri aikoina. Data kerätään DS18B20
        lämpötila-anturilla kytkettynä NodeMCU ESP32S Wifi-moduuliin, joka
        lähettää datan JSON-muotoisena serverille.
      </p>
      <p>
        Teknologiat, joita hyödynnetty tässä web sovelluksessa:
        <ul>
          <li>Node</li>
          <li>Express</li>
          <li>MongoDB</li>
          <li>React</li>
        </ul>
      </p>
      <p>
        Käytetyt komponentit:
        <ul>
          <li>NodeMCU ESP32S (AI-Thinker)</li>
          <li>DS18B20 lämpötila-anturi</li>
          <li>1.3&#34; OLED näyttö</li>
        </ul>
      </p>
      <p>
        <i>Tähän kuva setupista</i>
      </p>
    </div>
  )
}

export default About
