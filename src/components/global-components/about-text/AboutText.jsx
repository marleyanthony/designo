import React from 'react'

const AboutText = (props) => {
  return (
    <div className="about__world-class">
      <div className="about__world-class-header">{props.heading}</div>
      <p className="about__world-class-content about__world-class-content--first-paragraph">{props.firstParagraph}</p>
      <p className="about__world-class-content about__world-class-content--second-paragraph">{props.secondParagraph}</p>
    </div>
  )
}

export default AboutText
