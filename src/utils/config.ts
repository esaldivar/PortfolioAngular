import { ElementRef } from '@angular/core';
import ScrollReveal from 'scrollreveal'

const cdnUrl = import.meta.env.NG_APP_CLOUDFRONT_CDN;

export interface SocialLink {
  name: string,
  url: string,
  path: string
}

export interface JobDetails {
  id: number,
  title: string,
  shortCompanyName: string,
  company: string,
  companyUrl: string,
  range: string,
  bullets: string[]
}

export interface Project {
  title: string,
  description: string,
  techStack: string[],
  github: string,
  imageUrl: string,
  website?: string
}
export class Configuration {
    static readonly socials:  SocialLink[] = [
        { 
          name: 'GitHub', 
          url: 'https://github.com/esaldivar',
          path: 'M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z' 
        },
        { 
          name: 'LinkedIn', 
          url: 'https://www.linkedin.com/in/esaldivar1214/',
          path: 'M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z'
         },
         {
          name: 'Instagram',
          url: 'https://www.instagram.com/esaldivar_developer/',
          path: 'M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z'
         },
         {
          name: 'Podcast', 
          url: 'https://open.spotify.com/show/47bsykKB1LJ3NtzQf3CHTA',
          path: 'M319.4 372c48.5-31.3 80.6-85.9 80.6-148c0-97.2-78.8-176-176-176S48 126.8 48 224c0 62.1 32.1 116.6 80.6 148c1.2 17.3 4 38 7.2 57.1l.2 1C56 395.8 0 316.5 0 224C0 100.3 100.3 0 224 0S448 100.3 448 224c0 92.5-56 171.9-136 206.1l.2-1.1c3.1-19.2 6-39.8 7.2-57zm-2.3-38.1c-1.6-5.7-3.9-11.1-7-16.2c-5.8-9.7-13.5-17-21.9-22.4c19.5-17.6 31.8-43 31.8-71.3c0-53-43-96-96-96s-96 43-96 96c0 28.3 12.3 53.8 31.8 71.3c-8.4 5.4-16.1 12.7-21.9 22.4c-3.1 5.1-5.4 10.5-7 16.2C99.8 307.5 80 268 80 224c0-79.5 64.5-144 144-144s144 64.5 144 144c0 44-19.8 83.5-50.9 109.9zM224 312c32.9 0 64 8.6 64 43.8c0 33-12.9 104.1-20.6 132.9c-5.1 19-24.5 23.4-43.4 23.4s-38.2-4.4-43.4-23.4c-7.8-28.5-20.6-99.7-20.6-132.8c0-35.1 31.1-43.8 64-43.8zm0-144a56 56 0 1 1 0 112 56 56 0 1 1 0-112z'
         }
      ]

      static readonly workExperience: JobDetails[] = [
        {
          id: 0,
          title: 'Fullstack Software Engineer',
          company: 'Rush Enterprises',
          shortCompanyName: 'Rush',
          companyUrl: 'https://www.rushenterprises.com/',
          range: 'December 2022 - Present',
          bullets: [
            'Spearheaded the development of a robust e-commerce website utilizing .NET MVC; improved user interface and functionality, resulting in an increase in customer engagement and a boost in online sales within the first six months post-launch',
            'Optimized product reliability by spearheading on-call operations; monitored and resolved downtime and interruptions, reducing system downtime and enhancing overall user experience, as evidenced by an increase in positive customer feedback within a year',
            'Pioneered the design and implementation of a reusable code framework for services, UI, and test cases, reducing development time and increasing code reusability, thereby accelerating product delivery and improving overall software quality',
            'Collaborated with key stakeholders to gather and analyze user requirements, leading cross-functional teams to design and implement new features that improved user satisfaction and increased platform functionality, streamlining operational efficiency'
          ]
        },
        {
          id: 1,
          title: 'Frontend Software Engineer',
          company: 'Mindbody',
          shortCompanyName: 'Mindbody',
          companyUrl: 'https://www.mindbodyonline.com/',
          range: 'October 2021 - November 2022',
          bullets: [
            'Led the development and deployment of a SaaS platform for fitness and wellness tracking, increasing user engagement and customer retention through personalized health insights and seamless integration with wearable devices',
            'Championed the adoption of engineering best practices, significantly enhancing testing protocols, Azure DevOps CI/CD integration, and system architecture; implemented automation techniques that increased deployment efficiency and reduced error rates',
            'Facilitated mentorship and supervised onboarding for interns and transitioning engineers in front-end technologies, resulting in an increase in productivity and a seamless integration process, as evidenced by a reduction in onboarding time and positive feedback from team members',
            'Developed an internal component library for front-end developers, streamlining UI development processes and ensuring consistency across projects. This initiative reduced development time and led to an increase in code reusability, resulting in more efficient and scalable web applications'
          ]
        },
        {
          id: 2,
          title: 'Open Source Developer',
          company: 'RediQLess',
          shortCompanyName: 'RediQLess',
          companyUrl: 'https://www.linkedin.com/company/80086312/admin/dashboard/',
          range: 'June 2021 - October 2021',
          bullets: [
            'Led the development and deployment of a SaaS platform for fitness and wellness tracking, increasing user engagement and customer retention through personalized health insights and seamless integration with wearable devices',
            'Championed the adoption of engineering best practices, significantly enhancing testing protocols, Azure DevOps CI/CD integration, and system architecture; implemented automation techniques that increased deployment efficiency and reduced error rates',
            'Facilitated mentorship and supervised onboarding for interns and transitioning engineers in front-end technologies, resulting in an increase in productivity and a seamless integration process, as evidenced by a reduction in onboarding time and positive feedback from team members',
            'Developed an internal component library for front-end developers, streamlining UI development processes and ensuring consistency across projects. This initiative reduced development time and led to an increase in code reusability, resulting in more efficient and scalable web applications'
          ]
        }
      ]
      
      static readonly projects: Project[] = [
        {
          title: 'Spotify Profile',
          description: 'A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.',
          techStack: ['React', 'Styled Components', 'Express', 'Spotify API'],
          github: 'https://github.com/bchiang7/spotify-profile',
          imageUrl: `${cdnUrl}/aboutme.webp`,
          website: 'https://spotify-profile.herokuapp.com/'
        },
        {
          title: 'DSA Visualizer',
          description: 'A web app for visualizing algorithms and data structures. View the steps of each algorithm in action, including sorting algorithms, searching algorithms, and data structures like trees and graphs.',
          techStack: ['React', 'Styled Components', 'Express', 'Spotify API'],
          github: 'https://github.com/bchiang7/spotify-profile',
          imageUrl: `${cdnUrl}/aboutme.webp`,
          website: 'https://spotify-profile.herokuapp.com/'
        },
        {
          title: 'RPG Game',
          description: 'A web app for visualizing gaming data. View your top games, recently played games, and detailed information about each game. Create and save new playlists of recommended games based on your existing playlists and more.',
          techStack: ['React', 'Styled Components', 'Express', 'Spotify API'],
          github: 'https://github.com/bchiang7/spotify-profile',
          imageUrl: `${cdnUrl}/aboutme.webp`
        }
      ]
      srConfig = (delay = 200, viewFactor = 0.25) => ({
        origin: 'bottom',
        distance: '20px',
        duration: 500,
        delay,
        rotate: { x: 0, y: 0, z: 0 },
        opacity: 0,
        scale: 1,
        easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
        mobile: false,
        reset: false,
        useDelay: 'always',
        viewFactor,
        viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
      });
    
      sr(element:ElementRef, options?: scrollReveal.ScrollRevealObjectOptions) {
        return ScrollReveal().reveal(element.nativeElement, options ?? this.srConfig());
    }
} 