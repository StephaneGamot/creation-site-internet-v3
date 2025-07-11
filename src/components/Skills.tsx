"use client"

import { useTranslations } from 'next-intl'
import React from 'react'

type Skill = {
  name: string;
  bg: string;
  text: string;
};

export default function Skills() {
  const t = useTranslations('skills')

    const skills: Skill[] = [
        { name: 'HTML', bg: '#fcd3d3', text: '#b91c1c' },
        { name: 'CSS', bg: '#a5f3fc', text: '#0e7490' },
        { name: 'JavaScript', bg: '#fef08a', text: '#92400e' },
        { name: 'TypeScript', bg: '#c7d2fe', text: '#1e40af' }, // bleu TS
        { name: 'React', bg: '#e0f2fe', text: '#0369a1' },
        { name: 'Next.js', bg: '#e5e7eb', text: '#111827' },
        { name: 'Tailwind CSS', bg: '#d1fae5', text: '#065f46' },
        { name: 'Java', bg: '#fde68a', text: '#92400e' },
        { name: 'Spring Boot', bg: '#dcfce7', text: '#15803d' }, // vert Spring
        { name: 'MySQL', bg: '#f0fdf4', text: '#14532d' },
        { name: 'WordPress', bg: '#f3e8ff', text: '#6b21a8' },
        { name: 'Joomla', bg: '#e0f2fe', text: '#ea580c' }, // orange vif + fond bleu clair
        { name: 'Cypress', bg: '#f3f4f6', text: '#111827' }, // dark mode gris/noir
        { name: 'Junit5', bg: '#e0f2e9', text: '#15803d' }, // vert doux
        { name: 'Jasmine', bg: '#fae8ff', text: '#9333ea' }, // violet pastel
        { name: 'CI/CD', bg: '#e0e7ff', text: '#4338ca' }, // bleu DevOps
        { name: 'SEO', bg: '#fef9c3', text: '#92400e' },
        { name: 'Accessibilité', bg: '#e0f2f1', text: '#00695c' },
        { name: 'Angular', bg: '#fcd3d3', text: '#b91c1c' },
        { name: 'Git', bg: '#fef2f2', text: '#7f1d1d' },
        { name: 'UX Design', bg: '#fce7f3', text: '#9d174d' } // rose UX
      ];
      

      
      return (
        <section aria-labelledby="skills-title" className="max-w-5xl mx-auto text-center space-y-8">
          <h2 id="skills-title" className="text-2xl font-title font-semibold">{t('title')}</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, i) => (
              <span
                key={i}
                className="px-4 py-2 rounded-full text-sm shadow transition hover:opacity-80"
                style={{ backgroundColor: skill.bg, color: skill.text }}
              >
                {skill.name}
              </span>
            ))}
          </div>
        </section>
      )
    }