// const withMT = import('@material-tailwind/react/utils/withMT');
import  withMT from '@material-tailwind/react/utils/withMT'

export default withMT({
 content: [
  "./src/**/*.{js,jsx,ts,tsx}",
   './components/**/*.{js,ts,jsx,tsx}',
 ],
 theme: {
   colors: {
     purple: {
       50: '#EFE9FF',
       100: ' #D8D1FF',
       200: '#C1B8FF',
       300: '#AA9FFF',
       400: ' #9376FF',
       500: '#7854F7',
       600: '#603FE0',
       700: '#4A2AB9',
       800: '#341793',
       900: ' #1E0D6C',
     },
     blue: {
       50: '#E3F2FD',
       100: '#BBDEFB',
       200: '#90CAF9',
       300: '#64B5F6',
       400: '#42A5F5',
       500: '#2196F3',
       600: '#1E88E5',
       700: '#1976D2',
       800: '#1565C0',
       900: '#0D47A1',
     },
   },
   extend: {
     contrast: {
       '120': 'filter: contrast(120%) '
     },
     fontFamily: {
       quicksand: ['var(--font-quicksand)'],
       dmsans: ['var(--font-dmsans)'],
     },
     colors: {
       'app-primary': '#051436',
       'app-primary-accent': '#A68CFF',
       'app-primary-bg': '#E6DFFF',
       'app-text': '#ffffff',
       'app-gray-1': '#7A797D',
       'app-gray-2': '#9FA6B2',
       'app-gray-3': '#CFD8DC',
       'app-gray-4': '#B0BEC5',
       'app-gray-5': '#1A1D29',
       'app-secondary': '#42A5F5',
       'app-secondary-accent': '#42A5F5',
       'app-secondary-bg': '#F8F9FF',
       'app-important': '#FFBA49',
       'app-important-secondary': '#FFBA49',
       'app-error': '#EF4358',
       'app-error-secondary': '#F87171',
       'app-success': '#70C217',
       'app-success-secondary': '#70C217',
       'app-important-secondary-2': '#FFDF7A',
     },
     boxShadow: {
       'app-shadow-primary': '-9px 20px 25px  rgba(84, 48, 209, 0.4)',
       'app-shadow-blue': '-5px 5px 20px  rgba(66, 165, 245, 0.4)',
       'app-shadow-dark': '-5px 20px 18px  rgba(84, 48, 209, 0.5)',
       'app-shadow': '0px 2px 4px 0px rgba(0, 0, 0, 0.25)',
     },
     gradient:{
      'app-gradient-black': 'linear-gradient(65deg,#343434 0%, rgba(31,124,31,0) 80%)'
     }
   },
   screens: {
     xs: '400px',
     sm: '600px',
     md: '900px',
     lg: '1200px',
     xl: '1536px',
   },
 },
 plugins: [
  require('tailwindcss-no-scrollbar')
 ],
});

