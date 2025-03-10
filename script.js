// Prevent zooming
window.addEventListener("wheel", (e) => {
  const isPinching = e.ctrlKey;
  if(isPinching) e.preventDefault();
}, { passive: false });

document.addEventListener('DOMContentLoaded', function() {
    // Elements
    const welcomeScreen = document.getElementById('welcome-screen');
    const testScreen = document.getElementById('test-screen');
    const resultsScreen = document.getElementById('results-screen');
    const startTestBtn = document.getElementById('start-test');
    const previousBtn = document.getElementById('previous-btn');
    const questionText = document.getElementById('question-text');
    const optionAText = document.getElementById('option-a-text');
    const optionBText = document.getElementById('option-b-text');
    const questionCounter = document.getElementById('question-counter');
    const progressBar = document.getElementById('progress-bar');
    const optionCards = document.querySelectorAll('.option-card');
    const restartTestBtn = document.getElementById('restart-test');
    
    // State
    let currentQuestionIndex = 0;
    let answers = [];
    
    // Shuffling the questions for a more balanced test
    // Using only 30 questions for demo purposes
    const shuffledQuestions = questions.sort(() => 0.5 - Math.random()).slice(0, 30);
    
    // Event Listeners
    startTestBtn.addEventListener('click', startTest);
    previousBtn.addEventListener('click', goToPreviousQuestion);
    restartTestBtn.addEventListener('click', restartTest);
    
    optionCards.forEach(card => {
        card.addEventListener('click', function() {
            selectOption(this.dataset.value);
        });
    });
    
    // Functions
    function startTest() {
        welcomeScreen.classList.add('fade-out');
        setTimeout(() => {
            welcomeScreen.classList.add('hidden');
            testScreen.classList.remove('hidden');
            testScreen.classList.add('fade-in');
            loadQuestion(0);
        }, 500);
    }
    
    function loadQuestion(index) {
        const question = shuffledQuestions[index];
        questionText.textContent = question.question;
        optionAText.textContent = question.optionA;
        optionBText.textContent = question.optionB;
        
        questionCounter.textContent = `Question ${index + 1} of ${shuffledQuestions.length}`;
        progressBar.style.width = `${((index + 1) / shuffledQuestions.length) * 100}%`;
        
        // Clear selected option
        optionCards.forEach(card => card.classList.remove('selected'));
        
        // If this question has been answered before, select that option
        if (answers[index]) {
            const selectedCard = document.querySelector(`.option-card[data-value="${answers[index]}"]`);
            if (selectedCard) {
                selectedCard.classList.add('selected');
            }
        }
        
        // Show/hide previous button
        if (index > 0) {
            previousBtn.classList.remove('hidden');
        } else {
            previousBtn.classList.add('hidden');
        }
    }
    
    function selectOption(option) {
        // Animate selection
        optionCards.forEach(card => {
            if (card.dataset.value === option) {
                card.classList.add('selected');
            } else {
                card.classList.remove('selected');
            }
        });
        
        // Save answer
        answers[currentQuestionIndex] = option;
        
        // Wait a bit for animation, then proceed
        setTimeout(() => {
            if (currentQuestionIndex < shuffledQuestions.length - 1) {
                currentQuestionIndex++;
                loadQuestion(currentQuestionIndex);
            } else {
                showResults();
            }
        }, 400);
    }
    
    function goToPreviousQuestion() {
        if (currentQuestionIndex > 0) {
            currentQuestionIndex--;
            loadQuestion(currentQuestionIndex);
        }
    }
    
    function calculateResults() {
        // Initialize counters
        let e = 0, i = 0, s = 0, n = 0, t = 0, f = 0, j = 0, p = 0;
        
        // Count answers
        answers.forEach((answer, index) => {
            const question = shuffledQuestions[index];
            const dimension = question.dimension;
            
            if (dimension === "E-I" || dimension === "I-E") {
                if ((dimension === "E-I" && answer === "A") || (dimension === "I-E" && answer === "B")) {
                    e++;
                } else {
                    i++;
                }
            } else if (dimension === "S-N" || dimension === "N-S") {
                if ((dimension === "S-N" && answer === "A") || (dimension === "N-S" && answer === "B")) {
                    s++;
                } else {
                    n++;
                }
            } else if (dimension === "T-F" || dimension === "F-T") {
                if ((dimension === "T-F" && answer === "A") || (dimension === "F-T" && answer === "B")) {
                    t++;
                } else {
                    f++;
                }
            } else if (dimension === "J-P" || dimension === "P-J") {
                if ((dimension === "J-P" && answer === "A") || (dimension === "P-J" && answer === "B")) {
                    j++;
                } else {
                    p++;
                }
            }
        });
        
        // Determine personality type
        const personality = [
            e > i ? "E" : "I",
            s > n ? "S" : "N",
            t > f ? "T" : "F",
            j > p ? "J" : "P"
        ].join("");
        
        // Calculate percentages
        const ePercentage = Math.round((e / (e + i)) * 100);
        const iPercentage = 100 - ePercentage;
        const sPercentage = Math.round((s / (s + n)) * 100);
        const nPercentage = 100 - sPercentage;
        const tPercentage = Math.round((t / (t + f)) * 100);
        const fPercentage = 100 - tPercentage;
        const jPercentage = Math.round((j / (j + p)) * 100);
        const pPercentage = 100 - jPercentage;
        
        return {
            type: personality,
            percentages: {
                e: ePercentage,
                i: iPercentage,
                s: sPercentage,
                n: nPercentage,
                t: tPercentage,
                f: fPercentage,
                j: jPercentage,
                p: pPercentage
            }
        };
    }
    
    function showResults() {
        testScreen.classList.add('fade-out');
        setTimeout(() => {
            testScreen.classList.add('hidden');
            resultsScreen.classList.remove('hidden');
            resultsScreen.classList.add('fade-in');
            
            // Calculate and display results
            const results = calculateResults();
            const personalityType = results.type;
            const typeInfo = personalityTypes[personalityType];
            
            // Update results
            document.getElementById('personality-type').textContent = personalityType;
            document.getElementById('personality-title').textContent = typeInfo.title;
            document.getElementById('personality-description').textContent = typeInfo.description;
            
            // Create traits list
            const traitsList = document.getElementById('personality-traits');
            traitsList.innerHTML = '';
            typeInfo.traits.forEach(trait => {
                const li = document.createElement('li');
                li.textContent = trait;
                li.classList.add('slide-up');
                li.style.animationDelay = `${typeInfo.traits.indexOf(trait) * 0.1}s`;
                traitsList.appendChild(li);
            });
            
            // Create career items
            const careerContainer = document.getElementById('career-container');
            careerContainer.innerHTML = '';
            typeInfo.careers.forEach(career => {
                const div = document.createElement('div');
                div.className = 'career-item slide-up';
                div.style.animationDelay = `${typeInfo.careers.indexOf(career) * 0.1 + 0.5}s`;
                div.textContent = career;
                careerContainer.appendChild(div);
            });
            
            // Create dimensions chart
            createDimensionsChart(results.percentages);
            
        }, 500);
    }
    
    function createDimensionsChart(percentages) {
        const ctx = document.getElementById('dimensions-chart').getContext('2d');
        
        // Create the chart
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Extraversion/Introversion', 'Sensing/Intuition', 'Thinking/Feeling', 'Judging/Perceiving'],
                datasets: [
                    {
                        label: 'E',
                        data: [percentages.e, 0, 0, 0],
                        backgroundColor: '#007AFF',
                        barPercentage: 0.5,
                        categoryPercentage: 0.8
                    },
                    {
                        label: 'I',
                        data: [percentages.i, 0, 0, 0],
                        backgroundColor: '#E5F1FF',
                        barPercentage: 0.5,
                        categoryPercentage: 0.8
                    },
                    {
                        label: 'S',
                        data: [0, percentages.s, 0, 0],
                        backgroundColor: '#007AFF',
                        barPercentage: 0.5,
                        categoryPercentage: 0.8
                    },
                    {
                        label: 'N',
                        data: [0, percentages.n, 0, 0],
                        backgroundColor: '#E5F1FF',
                        barPercentage: 0.5,
                        categoryPercentage: 0.8
                    },
                    {
                        label: 'T',
                        data: [0, 0, percentages.t, 0],
                        backgroundColor: '#007AFF',
                        barPercentage: 0.5,
                        categoryPercentage: 0.8
                    },
                    {
                        label: 'F',
                        data: [0, 0, percentages.f, 0],
                        backgroundColor: '#E5F1FF',
                        barPercentage: 0.5,
                        categoryPercentage: 0.8
                    },
                    {
                        label: 'J',
                        data: [0, 0, 0, percentages.j],
                        backgroundColor: '#007AFF',
                        barPercentage: 0.5,
                        categoryPercentage: 0.8
                    },
                    {
                        label: 'P',
                        data: [0, 0, 0, percentages.p],
                        backgroundColor: '#E5F1FF',
                        barPercentage: 0.5,
                        categoryPercentage: 0.8
                    }
                ]
            },
            options: {
                indexAxis: 'y',
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                const value = context.raw;
                                return `${context.dataset.label}: ${value}%`;
                            }
                        }
                    }
                },
                scales: {
                    x: {
                        stacked: true,
                        max: 100,
                        grid: {
                            display: false
                        }
                    },
                    y: {
                        stacked: true,
                        grid: {
                            display: false
                        }
                    }
                },
                animation: {
                    duration: 1500
                },
                responsive: true,
                maintainAspectRatio: false
            }
        });
    }
    
    function restartTest() {
        // Reset state
        currentQuestionIndex = 0;
        answers = [];
        
        // Reset UI
        resultsScreen.classList.add('fade-out');
        setTimeout(() => {
            resultsScreen.classList.add('hidden');
            welcomeScreen.classList.remove('hidden');
            welcomeScreen.classList.remove('fade-out');
            welcomeScreen.classList.add('fade-in');
            testScreen.classList.remove('fade-in');
            testScreen.classList.remove('fade-out');
            resultsScreen.classList.remove('fade-in');
        }, 500);
    }
});
