export interface SiteConfig {
  name: string
  role: string
  location: string
  bio: string
  email: string
  resume: string
  socials: {
    github: string
    linkedin: string
    codeforces: string
  }
}

export const site: SiteConfig = {
  name: 'Shariar Abdullah Nafi',
  role: 'Computer Science Student | Aspiring Software Engineer',
  location: 'Dhaka, Bangladesh',
  bio: 'CS student and aspiring software engineer with a focus on backend engineering.',
  email: 'nafi.frolic804@aleeas.com',
  resume: '',
  socials: {
    github: 'https://github.com/sa-nafi',
    linkedin: 'https://www.linkedin.com/in/sa-nafi',
    codeforces: 'https://codeforces.com/profile/uvwxz',
  },
}
