
export type PdfInfo = {
  id: string;
  localeKey: string;
  name: string;
  file: string;
  thumbId: string;
};

export const pdfs: PdfInfo[] = [
  { id: 'samskrita', localeKey: 'samskrita', name: 'Samskrita / संस्कृतम्', file: '/pdfs/samskrita.pdf', thumbId: 'pdf-thumb-1' },
  { id: 'hindi', localeKey: 'hindi', name: 'Hindi— हिन्दि', file: '/pdfs/hindi.pdf', thumbId: 'pdf-thumb-2' },
  { id: 'english', localeKey: 'english', name: 'English— आङ्ग्लम्', file: '/pdfs/english.pdf', thumbId: 'pdf-thumb-3' },
  { id: 'kannada', localeKey: 'kannada', name: 'Kannada— कन्नड', file: '/pdfs/kannada.pdf', thumbId: 'pdf-thumb-4' },
  { id: 'marathi', localeKey: 'marathi', name: 'Marathi— मराठी', file: '/pdfs/marathi.pdf', thumbId: 'pdf-thumb-5' },
  { id: 'bengali', localeKey: 'bengali', name: 'Bengali— बेङ्गालि', file: '/pdfs/bengali.pdf', thumbId: 'pdf-thumb-6' },
  { id: 'malayalam', localeKey: 'malayalam', name: 'Malayalam— मलयालम्', file: '/pdfs/malayalam.pdf', thumbId: 'pdf-thumb-7' },
];
