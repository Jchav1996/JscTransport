// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import "./HeroSlideShow.css";

import slide1 from "../img/truck3.jpg";
import slide2 from "../img/truck1.jpg";
import slide3 from "../img/truck2.jpg";

const HeroSlideShow = () => {
	const slides = [{ image: slide1 }, { image: slide2 }, { image: slide3 }];

	const [currentSlide, setCurrentSlide] = useState(0);

	useEffect(() => {
		const timer = setInterval(() => {
			setCurrentSlide(
				(prevCurrentSlide) => (prevCurrentSlide + 1) % slides.length
			);
		}, 15000);

		return () => clearInterval(timer);
	}, [slides.length]);
	const prevSlide = () => {
		setCurrentSlide(
			(prevCurrentSlide) =>
				(prevCurrentSlide - 1 + slides.length) % slides.length
		);
	};

	const nextSlide = () => {
		setCurrentSlide(
			(prevCurrentSlide) =>
				(prevCurrentSlide + 1 + slides.length) % slides.length
		);
	};

	return (
		<div className="hero-slide-show">
			<button onClick={prevSlide}>Previous</button>
			{slides.map((slide, index) => (
				<div
					key={index}
					className={`slide ${
						index === currentSlide ? "active" : ""
					}`}>
					<img
						id="heroImg"
						src={slide.image}
						alt={slide.description}
					/>
					<p>{slide.description}</p>
				</div>
			))}
			<button onClick={nextSlide}>Next</button>
		</div>
	);
};

export default HeroSlideShow;
