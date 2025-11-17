
export type PdfInfo = {
  id: string;
  localeKey: string;
  name: string;
  file: string;
  thumbId: string;
};

export const pdfs: PdfInfo[] = [
  { id: 'samskrita', localeKey: 'samskrita', name: 'Samskrita / संस्कृतम्', file: 'https://drive.google.com/file/d/1QNlnLvVc00Sx-VoV77Kc55incDGCYm3B/view?usp=sharing', thumbId: 'pdf-thumb-1' },
  { id: 'hindi', localeKey: 'hindi', name: 'Hindi— हिन्दि', file: 'https://drive.google.com/file/d/1SnQ64oKuLy0vC1FvCvV8PqE8QMHeQZKr/view?usp=sharing', thumbId: 'pdf-thumb-2' },
  { id: 'english', localeKey: 'english', name: 'English— आङ्ग्लम्', file: 'https://drive.google.com/file/d/1fi15BJbIarU9f7HG33ClJE0642jihBvo/view?usp=sharing', thumbId: 'pdf-thumb-3' },
  { id: 'kannada', localeKey: 'kannada', name: 'Kannada— कन्नड', file: 'https://drive.google.com/file/d/1E7MjajFsAoNHFTK8iRlULkpMtWUpBqyP/view?usp=sharing', thumbId: 'pdf-thumb-4' },
  { id: 'marathi', localeKey: 'marathi', name: 'Marathi— मराठी', file: 'https://drive.google.com/file/d/1JkFeDGtk7rLNX9zsK9WVWoOYpKlIjfr9/view?usp=sharing', thumbId: 'pdf-thumb-5' },
  { id: 'bengali', localeKey: 'bengali', name: 'Bengali— बेङ्गालि', file: 'https://drive.google.com/file/d/1rRpUHo_GCMw3ggT08sY922NaZyDLlMJb/view?usp=sharing', thumbId: 'pdf-thumb-6' },
  { id: 'malayalam', localeKey: 'malayalam', name: 'Malayalam— मलयालम्', file: 'https://drive.google.com/file/d/1tVMOxDBZ42XiZknMxbcHwHghUy5ZB6pq/view?usp=sharing', thumbId: 'pdf-thumb-7' },
];
