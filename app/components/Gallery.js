import React, { Component } from 'react';

class Gallery extends Component {
	render() {
		let alternate = 'http://www.salesstrategyworkshop.com/wp-content/uploads/2014/09/Alternate_of_Choice_Questions_4_Sales_Strategy_Workshop.jpg';
		return (
			//<div>Gallery Component</div>
			<div>
				{
					this.props.items.map( (item,index) => {
						let {title, imageLinks, infoLink} = item.volumeInfo;
						return (
							<div key={index} className="book">
								<a key={index} 
									className="book"
									href={infoLink}
									target="_blank">
								<img 
								src={imageLinks !== undefined ? imageLinks.thumbnail : alternate} 
								alt="book image"
								className="book-img"/>
							<div className="book-text">
								{title}
							</div>
							</a>
							</div>
						)
					})
				}
			</div>)
	}
}

export default Gallery;