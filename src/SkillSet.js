// components/SkillSet.js
export default class SkillSet {
  constructor(container) {
    this.container = container;
  }

  render() {
    const skillsElement = document.createElement('div');
    skillsElement.className = 'skills-component';
    
    // Define skills data for easier maintenance
    const skills = [
      { name: 'HTML', level: '95%', color: 'bg-orange-500', description: 'Semantic markup, accessibility' },
      { name: 'CSS', level: '95%', color: 'bg-blue-600', description: 'Responsive design, animations' },
      { name: 'JavaScript', level: '90%', color: 'bg-yellow-400', description: 'ES6+, async programming' },
      { name: 'React', level: '95%', color: 'bg-cyan-400', description: 'Components, hooks, state' },
      { name: 'Node.js', level: '97%', color: 'bg-green-600', description: 'Backend, REST APIs, Express' },
      { name: 'Express JS', level: '70%', color: 'bg-purple-500', description: 'Server-side frameworks' },
      { name: 'Next JS', level: '80%', color: 'bg-purple-500', description: 'SSR, file-based routing' }
    ];

    // Create HTML structure using Tailwind classes
    skillsElement.innerHTML = `
      <div class="py-12 px-4 mx-4 my-8 bg-white rounded-lg shadow-sm">
        <h2 class="text-xl font-semibold text-center text-gray-800 mb-8">My Technical Arsenal</h2>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          ${skills.map(skill => `
            <div class="bg-gray-50 rounded-md p-4 transition-all hover:translate-y-[-3px] hover:shadow-md">
              <div class="flex justify-between items-center mb-3">
                <h3 class="text-base font-medium text-gray-800">${skill.name}</h3>
                <span class="bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded-full">${skill.level}</span>
              </div>
              
              <div class="h-1.5 bg-gray-200 rounded-full mb-3 overflow-hidden">
                <div class="${skill.color} h-full rounded-full" style="width: ${skill.level};"></div>
              </div>
              
              <p class="text-sm text-gray-600">${skill.description}</p>
            </div>
          `).join('')}
        </div>
      </div>
    `;

    return skillsElement;
  }

  // No need for addStyles() method since we're using Tailwind CSS
}












// // components/SkillSet.js
// export default class SkillSet {
//   constructor(container) {
//     this.container = container;
//   }

//   render() {
//     const skillsElement = document.createElement('div');
//     skillsElement.className = 'skills-component';
//     skillsElement.innerHTML = `
//       <div class="skills-section">
//         <h2 class="section-title">My Technical Arsenal</h2>
//         <div class="skills-grid">
//           <!-- HTML -->
//           <div class="skill-card">
//             <div class="skill-header">
//               <h3>HTML</h3>
//               <span class="skill-badge">90%</span>
//             </div>
//             <div class="skill-bar">
//               <div class="skill-progress html-progress"></div>
//             </div>
//             <p>Semantic markup, accessibility</p>
//           </div>
          
//           <!-- CSS -->
//           <div class="skill-card">
//             <div class="skill-header">
//               <h3>CSS</h3>
//               <span class="skill-badge">85%</span>
//             </div>
//             <div class="skill-bar">
//               <div class="skill-progress css-progress"></div>
//             </div>
//             <p>Responsive design, animations</p>
//           </div>
          
//           <!-- JavaScript -->
//           <div class="skill-card">
//             <div class="skill-header">
//               <h3>JavaScript</h3>
//               <span class="skill-badge">80%</span>
//             </div>
//             <div class="skill-bar">
//               <div class="skill-progress js-progress"></div>
//             </div>
//             <p>ES6+, async programming</p>
//           </div>
          
//           <!-- React -->
//           <div class="skill-card">
//             <div class="skill-header">
//               <h3>React</h3>
//               <span class="skill-badge">75%</span>
//             </div>
//             <div class="skill-bar">
//               <div class="skill-progress react-progress"></div>
//             </div>
//             <p>Components, hooks, state</p>
//           </div>
          
//           <!-- Node.js -->
//           <div class="skill-card">
//             <div class="skill-header">
//               <h3>Node.js</h3>
//               <span class="skill-badge">65%</span>
//             </div>
//             <div class="skill-bar">
//               <div class="skill-progress node-progress"></div>
//             </div>
//             <p>Backend, REST APIs, Express</p>
//           </div>
          
//           <!-- Express JS -->
//           <div class="skill-card">
//             <div class="skill-header">
//               <h3>Express JS</h3>
//               <span class="skill-badge">70%</span>
//             </div>
//             <div class="skill-bar">
//               <div class="skill-progress express-progress"></div>
//             </div>
//             <p>Server-side frameworks</p>
//           </div>

//           <!-- Next JS -->
//           <div class="skill-card">
//             <div class="skill-header">
//               <h3>Next JS</h3>
//               <span class="skill-badge">70%</span>
//             </div>
//             <div class="skill-bar">
//               <div class="skill-progress next-progress"></div>
//             </div>
//             <p>SSR, file-based routing</p>
//           </div>
//         </div>
//       </div>
//     `;

//     this.addStyles();
//     return skillsElement;
//   }

//   addStyles() {
//     if (!document.getElementById('skill-set-styles')) {
//       const styleElement = document.createElement('style');
//       styleElement.id = 'skill-set-styles';
//       styleElement.textContent = `
//         .skills-section {
//           padding: 3rem 0;
//           background-color: #ffffff;
//           border-radius: 8px;
//           box-shadow: 0 2px 10px rgba(0, 0, 0, 0.04);
//           margin: 2rem 1rem;
//         }
        
//         .section-title {
//           margin-bottom: 2rem;
//           text-align: center;
//           font-weight: 600;
//           font-size: 1.5rem;
//           color: #333;
//         }
        
//         .skills-grid {
//           display: grid;
//           grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
//           gap: 1.2rem;
//           max-width: 1000px;
//           margin: 0 auto;
//           padding: 0 1.5rem;
//         }
        
//         .skill-card {
//           background-color: #f8f9fa;
//           border-radius: 6px;
//           padding: 1rem;
//           transition: transform 0.2s, box-shadow 0.2s;
//         }
        
//         .skill-card:hover {
//           transform: translateY(-3px);
//           box-shadow: 0 3px 10px rgba(0, 0, 0, 0.08);
//         }
        
//         .skill-header {
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//           margin-bottom: 0.8rem;
//         }
        
//         .skill-header h3 {
//           margin: 0;
//           font-size: 1rem;
//           font-weight: 600;
//           color: #333;
//         }
        
//         .skill-badge {
//           font-weight: 600;
//           padding: 0.2rem 0.5rem;
//           border-radius: 12px;
//           font-size: 0.75rem;
//           color: white;
//           background: #007bff;
//         }
        
//         .skill-bar {
//           height: 6px;
//           background-color: #e9ecef;
//           border-radius: 3px;
//           overflow: hidden;
//           margin-bottom: 0.7rem;
//         }
        
//         .skill-progress {
//           height: 100%;
//           border-radius: 3px;
//         }
        
//         .html-progress {
//           width: 90%;
//           background: #e44d26;
//         }
        
//         .css-progress {
//           width: 85%;
//           background: #264de4;
//         }
        
//         .js-progress {
//           width: 80%;
//           background: #f7df1e;
//         }
        
//         .react-progress {
//           width: 75%;
//           background: #61dafb;
//         }
        
//         .node-progress {
//           width: 65%;
//           background: #3c873a;
//         }
        
//         .express-progress, .next-progress {
//           width: 70%;
//           background: #7e57c2;
//         }
        
//         .skill-card p {
//           margin: 0;
//           color: #6c757d;
//           font-size: 0.8rem;
//         }
        
//         @media (max-width: 768px) {
//           .skills-grid {
//             grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
//             gap: 1rem;
//             padding: 0 1rem;
//           }
//         }
//       `;
//       document.head.appendChild(styleElement);
//     }
//   }
// }