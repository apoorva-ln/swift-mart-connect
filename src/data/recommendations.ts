export interface Recommendation {
  id: string;
  title: string;
  category: string;
  description: string;
  matchPercentage: number;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  tags: string[];
  rating: number;
  image: string;
}

export const recommendations: Recommendation[] = [
  {
    id: '1',
    title: 'Machine Learning Fundamentals',
    category: 'AI & ML',
    description: 'Master the core concepts of machine learning including supervised and unsupervised learning algorithms.',
    matchPercentage: 95,
    difficulty: 'Intermediate',
    duration: '8 weeks',
    tags: ['Python', 'TensorFlow', 'Data Science'],
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400'
  },
  {
    id: '2',
    title: 'Full-Stack Web Development',
    category: 'Development',
    description: 'Build modern web applications using React, Node.js, and cloud technologies.',
    matchPercentage: 88,
    difficulty: 'Intermediate',
    duration: '12 weeks',
    tags: ['React', 'Node.js', 'MongoDB'],
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400'
  },
  {
    id: '3',
    title: 'Data Visualization Mastery',
    category: 'Data Science',
    description: 'Create stunning visualizations and dashboards to communicate insights effectively.',
    matchPercentage: 82,
    difficulty: 'Beginner',
    duration: '4 weeks',
    tags: ['D3.js', 'Tableau', 'Python'],
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400'
  },
  {
    id: '4',
    title: 'Cloud Architecture with AWS',
    category: 'Cloud Computing',
    description: 'Design and deploy scalable cloud infrastructure using Amazon Web Services.',
    matchPercentage: 79,
    difficulty: 'Advanced',
    duration: '10 weeks',
    tags: ['AWS', 'DevOps', 'Serverless'],
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400'
  },
  {
    id: '5',
    title: 'UX/UI Design Principles',
    category: 'Design',
    description: 'Learn user-centered design thinking and create beautiful, functional interfaces.',
    matchPercentage: 91,
    difficulty: 'Beginner',
    duration: '6 weeks',
    tags: ['Figma', 'Prototyping', 'Research'],
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400'
  },
  {
    id: '6',
    title: 'Cybersecurity Essentials',
    category: 'Security',
    description: 'Understand threat landscapes and implement robust security measures.',
    matchPercentage: 75,
    difficulty: 'Intermediate',
    duration: '8 weeks',
    tags: ['Ethical Hacking', 'Network Security', 'Cryptography'],
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400'
  },
  {
    id: '7',
    title: 'Natural Language Processing',
    category: 'AI & ML',
    description: 'Build AI systems that understand and generate human language.',
    matchPercentage: 87,
    difficulty: 'Advanced',
    duration: '10 weeks',
    tags: ['NLP', 'Transformers', 'BERT'],
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400'
  },
  {
    id: '8',
    title: 'Mobile App Development',
    category: 'Development',
    description: 'Create cross-platform mobile applications using React Native.',
    matchPercentage: 84,
    difficulty: 'Intermediate',
    duration: '8 weeks',
    tags: ['React Native', 'iOS', 'Android'],
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400'
  }
];

export const categories = ['All', 'AI & ML', 'Development', 'Data Science', 'Cloud Computing', 'Design', 'Security'];
export const difficulties = ['All', 'Beginner', 'Intermediate', 'Advanced'];
export const durations = ['All', '4 weeks', '6 weeks', '8 weeks', '10 weeks', '12 weeks'];
export const allTags = ['Python', 'TensorFlow', 'React', 'Node.js', 'AWS', 'Figma', 'NLP', 'Data Science', 'DevOps', 'MongoDB'];

export const interests = [
  { id: 'ai', label: 'Artificial Intelligence', icon: '🤖' },
  { id: 'web', label: 'Web Development', icon: '🌐' },
  { id: 'mobile', label: 'Mobile Apps', icon: '📱' },
  { id: 'data', label: 'Data Science', icon: '📊' },
  { id: 'cloud', label: 'Cloud Computing', icon: '☁️' },
  { id: 'security', label: 'Cybersecurity', icon: '🔐' },
  { id: 'design', label: 'UI/UX Design', icon: '🎨' },
  { id: 'blockchain', label: 'Blockchain', icon: '⛓️' },
];

export const goals = [
  { id: 'career', label: 'Career Advancement', description: 'Level up your professional skills' },
  { id: 'project', label: 'Build Projects', description: 'Create portfolio-worthy work' },
  { id: 'certification', label: 'Get Certified', description: 'Earn industry certifications' },
  { id: 'startup', label: 'Launch Startup', description: 'Build your own product' },
  { id: 'academic', label: 'Academic Excellence', description: 'Excel in your studies' },
  { id: 'research', label: 'Research', description: 'Contribute to cutting-edge work' },
];
