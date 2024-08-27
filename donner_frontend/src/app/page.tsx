"use client";
import Image from 'next/image';
import React, { useState } from 'react';
import Header from './header';
import Footer from './footer';

interface Question {
  text: string;
  options: string[];
}

export default function Homepage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const questions: Question[] = [
    {
      text: "What is your age group?",
      options: ["Under 18", "18-24", "25-34", "35-44"],
    },
    {
      text: "How satisfied are you with our product?",
      options: ["Very Satisfied", "Satisfied", "Neutral", "Dissatisfied"],
    },
    {
      text: "What features do you find most useful?",
      options: ["Ease of Use", "Customer Support", "Pricing", "Other"],
    },
    {
      text: "On a scale of 1-10, how likely are you to recommend us?",
      options: ["1-3", "4-6", "7-9", "10"],
    },
    {
      text: "What areas could be improved?",
      options: ["User Interface", "Performance", "Features", "Support"],
    },
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

  const handleOptionChange = (option: string) => {
    const updatedOptions = [...selectedOptions];
    updatedOptions[currentQuestion] = option;
    setSelectedOptions(updatedOptions);
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
                  <h3>{questions[currentQuestion].text}</h3>
                  <div className="options-group">
                    {questions[currentQuestion].options.map((option, index) => (
                      <label key={index} className="option-label">
                        <input
                          type="radio"
                          name={`question-${currentQuestion}`}
                          value={option}
                          checked={selectedOptions[currentQuestion] === option}
                          onChange={() => handleOptionChange(option)}
                        />
                        {option}
                      </label>
                    ))}
                  </div>

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

      <Footer />
    </>
  );
}
