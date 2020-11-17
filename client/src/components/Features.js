import React from 'react';
import '../App.css'
import anonym from '../images/anonym.png'
import secure from '../images/secure.png'
import fast from '../images/fast.png'

export default class Features extends React.Component {
	state = {
		features: [
			{
				icon: anonym,
				title: 'Anonymity',
				info: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.'
			},
			{
				icon: secure,
				title: ' Safety',
				info: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.'
			},
			{
				icon: fast,
				title: 'Fast',
				info: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.'
			},
		]
	}
	render() {
		return (
			<section className="services">
        <h1>Features</h1>
        <div className="services-center">
          {this.state.features.map(item => {
            return (
              <article key={`item-${item.title}`} className="service">
								<img src={item.icon} className="services-icon"/>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
		)
	}
}
