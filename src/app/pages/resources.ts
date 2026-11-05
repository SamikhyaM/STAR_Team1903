import { Component } from '@angular/core';

interface Resource {
  title: string;
  category: string;
  description: string;
  steps: string[];
  url: string;
  linkText: string;
}

@Component({
  selector: 'app-resources',
  template: `
    <div class="container">
      <h1>Additional resources</h1>
      <p>Not every path goes through a four-year college. Explore these options and see how to get started.</p>

      <div class="cards">
        @for (r of resources; track r.title) {
          <div class="card">
            <span class="tag">{{ r.category }}</span>
            <h3>{{ r.title }}</h3>
            <p>{{ r.description }}</p>
            <h4>How to sign up</h4>
            <ol>
              @for (s of r.steps; track s) { <li>{{ s }}</li> }
            </ol>
            <a class="btn primary" [href]="r.url" target="_blank" rel="noopener noreferrer">{{ r.linkText }}</a>
          </div>
        }
      </div>
    </div>`,
  styles: `
    .tag { font-size: .8rem; font-weight: 600; background: #e8f0fb; padding: .2rem .6rem; border-radius: 999px; }
    h4 { margin: 1rem 0 .25rem; }
    ol { margin: 0 0 1rem; padding-left: 1.2rem; }
  `,
})
export class Resources {
  resources: Resource[] = [
    {
    title: 'Military service',
    category: 'Military',
    description: 'Explore career opportunities across the U.S. armed forces. Learn about military branches, eligibility requirements, training, service commitments, and potential education benefits.',
    steps: [
        'Explore the different branches of the U.S. military.',
        'Compare active duty, Reserve, and National Guard service.',
        'Review age, education, and eligibility requirements.',
        'Learn about training, benefits, and service commitments before making a decision.',
    ],
    url: 'https://www.usa.gov/join-military',
    linkText: 'Explore Military Careers',
    },
    {
      title: 'Trade school & apprenticeships',
      category: 'Trade school',
      description: 'Earn while you learn in fields like electrical, plumbing, HVAC, and welding.',
      steps: [
        'Browse apprenticeship programs by trade and location.',
        'Check the entry requirements (many accept a high school equivalency).',
        'Apply directly or contact your local American Job Center.',
      ],
      url: 'https://www.apprenticeship.gov',
      linkText: 'Find apprenticeships',
    },
    {
      title: 'Career coaching',
      category: 'Career coaching',
      description: 'Free help with resumes, interviews, job searching, and choosing a career path.',
      steps: [
        'Find your nearest American Job Center.',
        'Call or walk in to book a free appointment.',
        'Bring any resume or work history you have.',
      ],
      url: 'https://www.careeronestop.org',
      linkText: 'Visit CareerOneStop',
    },
  ];
}