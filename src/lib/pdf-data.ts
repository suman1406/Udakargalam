
export type PdfInfo = {
  id: string;
  localeKey: string;
  name: string;
  file: string;
  thumbId: string;
};

export const pdfs: PdfInfo[] = [
  { id: 'samskrita', localeKey: 'samskrita', name: 'Samskrita / संस्कृतम्', file: 'https://drive.google.com/file/d/1KZIrKVLAQzuFlGuqDCaN8i8Z5djJp_4d/view?usp=drive_link', thumbId: 'pdf-thumb-1' },
  { id: 'hindi', localeKey: 'hindi', name: 'Hindi— हिन्दि', file: 'https://drive.google.com/file/d/14Rbt-YQ3VXEfrUCo-_EP-mZG_HjdAIm4/view?usp=drive_link', thumbId: 'pdf-thumb-2' },
  { id: 'english', localeKey: 'english', name: 'English— आङ्ग्लम्', file: 'https://drive.google.com/file/d/1-aXiGm6NRbVe1jmEgwWZfOOEUnd1b9iA/view?usp=drive_link', thumbId: 'pdf-thumb-3' },
  { id: 'kannada', localeKey: 'kannada', name: 'Kannada— कन्नड', file: 'https://drive.google.com/file/d/1xQXw4SmQ30HkMqXGUm1qfRIBjZLqCLk9/view?usp=drive_link', thumbId: 'pdf-thumb-4' },
  { id: 'marathi', localeKey: 'marathi', name: 'Marathi— मराठी', file: 'https://drive.google.com/file/d/1Lrbwf42HXjG2rPCiYKvSKYtjQzgMsDnh/view?usp=drive_link', thumbId: 'pdf-thumb-5' },
  { id: 'bengali', localeKey: 'bengali', name: 'Bengali— बेङ्गालि', file: 'https://drive.google.com/file/d/13sW6HyhGBdqcjYajgmsMa71KNjK8E7wT/view?usp=drive_link', thumbId: 'pdf-thumb-6' },
  { id: 'malayalam', localeKey: 'malayalam', name: 'Malayalam— मलयालम्', file: 'https://drive.google.com/file/d/1pYvicwa9z4ehhW8RT5ZtBImtsRhsGOST/view?usp=drive_link', thumbId: 'pdf-thumb-7' },
];
