import React from 'react';
import '../App.css'

export default class Features extends React.Component {
	state = {
		features: [
			{
				title: 'Anonymity',
				info: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.'
			},
			{
				title: ' Safety',
				info: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.'
			},
			{
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
