"use client";
import Image from 'next/image';
import React from 'react';
import Header from './header';
import Footer from './footer';
import { useState } from 'react';

export default function Homepage() {
    const [currentQuestion, setCurrentQuestion] = useState(0);

  const questions = [
    "What is your age group?",
    "How satisfied are you with our product?",
    "What features do you find most useful?",
    "On a scale of 1-10, how likely are you to recommend us?",
    "What areas could be improved?",
  ];
const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };
    return (
      
        <>
         <Header />
      
            {/* Hero Section */}
            <div
                className="page-hero-section bg-image hero-home-1"
                style={{ backgroundImage: "url(/img/bg_hero_1.svg)" }}
            >
                <div className="hero-caption pt-5">
                    <div className="container h-150">
                        <div className="row align-items-center h-150">
                            <div className="col-lg-12 wow fadeInUp">
                                <h3 className="mb-4">
                                    <strong>Ready for Survey.</strong>
                                </h3>
                                <div className="survey-container">
          <h3>{questions[currentQuestion]}</h3>

          <div className="button-group">
            <button onClick={handlePrevious} disabled={currentQuestion === 0}>
              Previous
            </button>
            <button
              onClick={handleNext}
              disabled={currentQuestion === questions.length - 1}
            >
              Next
            </button>
          </div>
        </div>
                               
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>

            {/* Features Section */}
           

            {/* Contact Section */}
            
            <Footer />
        </>
    );
}
